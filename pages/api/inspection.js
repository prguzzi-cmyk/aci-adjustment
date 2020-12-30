import mailer from '../../utils/mailer';
import dataset from '../../utils/datasets/general';

export default async (req, res) => {
	let response;

	let gRes = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.captcha}`
	);
	gRes = await gRes.json();

	if (gRes.success) {
		const emailRes = await mailer({
			receivers: dataset.emails.claim.email,
			replyTo: req.body.email,
			subject: `Inspection Inquiry from ${req.body.firstName} ${req.body.lastName}`,
			body: getEmailHtml(req.body),
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
  <p><b>Address:</b> ${fields.address1} ${fields.address2}</p>
  <p><b>City:</b> ${fields.city}</p>
  <p><b>State:</b> ${fields.state}</p>
  <p><b>Zip Code:</b> ${fields.zipCode}</p>
  <p><b>Claim Type:</b> ${fields.claimType}</p>
  <p><b>Damage Type:</b> ${fields.damageType}</p>
  `;
};
