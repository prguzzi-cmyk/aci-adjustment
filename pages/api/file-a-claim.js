import mailer from '../../utils/mailer';
import dataset from '../../utils/datasets/general';

const formidable = require('formidable');

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async (req, res) => {
	let response;
	const data = await new Promise(function (resolve, reject) {
		const form = new formidable.IncomingForm({
			keepExtensions: true,
			multiples: true,
		});
		form.parse(req, function (err, fields, files) {
			if (err) return reject(err);
			resolve({ fields, files });
		});
	});

	let gRes = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${data.fields.captcha}`
	);
	gRes = await gRes.json();

	if (gRes.success) {
		const decAttachment = data.files.declarationsPage
			? formatAttachments(data.files.declarationsPage, 'Declaration Page')
			: [];

		const repRecAttachments = data.files.receiptFiles
			? formatAttachments(data.files.receiptFiles, 'Repair Receipt')
			: [];

		const emailRes = await mailer({
			receivers: dataset.emails.claim.email,
			replyTo: data.fields.email,
			subject: `File a Claim from ${data.fields.firstName} ${data.fields.lastName}`,
			body: getEmailHtml(data.fields),
			attachments: [...decAttachment, ...repRecAttachments],
		});

		if (emailRes.success) {
			res.statusCode = 200;
			response = { success: true, message: emailRes.message };
		} else {
			res.statusCode = 500;
			response = {
				success: false,
				message:
					'There is some error while sending an email. Please contact website administrator.',
			};
		}
	} else {
		res.statusCode = 401;
		response = { success: false, message: 'You are not authorized!' };
	}

	res.json(response);
};

const getEmailHtml = (fields) => {
	return `
  <p><b>First Name:</b> ${fields.firstName}</p>
  <p><b>Last Name:</b> ${fields.lastName}</p>
  <p><b>Email:</b> ${fields.email}</p>
  <p><b>Phone:</b> ${fields.phone}</p>
  <p>Loss Address Details</p>
  <p><b>Address:</b> ${fields.lossAddress1} ${fields.lossAddress2}</p>
  <p><b>City:</b> ${fields.lossCity}</p>
  <p><b>State:</b> ${fields.lossState}</p>
  <p><b>Zip Code:</b> ${fields.lossZipCode}</p>
  <p>Mailing Address Details</p>
  <p><b>Address:</b> ${fields.mailAddress1} ${fields.mailAddress2}</p>
  <p><b>City:</b> ${fields.mailCity}</p>
  <p><b>State:</b> ${fields.mailState}</p>
  <p><b>Zip Code:</b> ${fields.mailZipCode}</p>
  <p>Policy Details</p>
  <p><b>Claim Type:</b> ${fields.claimType}</p>
  <p><b>Damage Type:</b> ${fields.damageType}</p>
  <p><b>Policy Type:</b> ${fields.policyType}</p>
  <p><b>Policy Number:</b> ${fields.policyNumber}</p>
  <p><b>Date of Loss:</b> ${fields.lossDate}</p>
  <p><b>Is this a total loss?</b> ${fields.totalLoss}</p>
  <p><b>Did you begin any repairs?</b> ${fields.repairs}</p>
  <p><b>Name of Contractor</b> ${fields.contractorName}</p>
  <p><b>Phone Number of Contractor</b> ${fields.contractorPhone}</p>
  <p><b>Do you have receipts for repairs?</b> ${fields.receipts}</p>
  `;
};

const formatAttachments = (attachments, append = '') => {
	if (attachments === undefined || attachments === '') {
		return;
	}

	const formattedAttachments = [];

	if (Array.isArray(attachments)) {
		attachments.map((file) => {
			formattedAttachments.push({
				filename: append ? `${append} - ${file.name}` : file.name,
				path: file.path,
			});
		});
	} else {
		formattedAttachments.push({
			filename: append ? `${append} - ${attachments.name}` : attachments.name,
			path: attachments.path,
		});
	}

	return formattedAttachments;
};
