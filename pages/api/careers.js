import mailer, { formatAttachments } from '../../utils/mailer';
import dataset from '../../utils/datasets/general';
import { ApiConfig, ReFeedback } from '../../utils/config';
import { parsedData, validateCaptcha } from '../../utils/functions';

export const config = ApiConfig;

export default async (req, res) => {
	let response;

	const data = await parsedData(req);

	const gRes = await validateCaptcha(data.fields.captcha);

	if (!gRes.success) {
		res.statusCode = 401;
		response = { success: false, message: ReFeedback.RES_ERR_AUTH };
		return res.json(response);
	}

	const resumeAttachment = data.files.resume
		? formatAttachments(data.files.resume, 'Resume')
		: [];

	const emailFrom = `"${dataset.emails.career.label}" <${dataset.emails.claim.email}>`;

	const emailResAdmin = await mailer({
		from: emailFrom,
		receivers: dataset.emails.career.email,
		replyTo: data.fields.email,
		subject: `${data.fields.firstName} ${data.fields.lastName} has submitted Career Form`,
		template: 'careers',
		context: {
			...data.fields,
		},
		attachments: [...resumeAttachment],
	});

	const emailRes = await mailer({
		from: emailFrom,
		receivers: data.fields.email,
		replyTo: dataset.emails.career.email,
		subject: `Your details has been submitted!`,
		template: 'careers-client',
		context: {
			...data.fields,
		},
	});

	if (emailRes.success) {
		res.statusCode = 200;
		response = { success: true, message: emailRes.message };
	} else {
		res.statusCode = 500;
		response = {
			success: false,
			message: ReFeedback.RES_ERR_MAIL,
		};
	}

	res.json(response);
};
