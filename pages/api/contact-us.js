import mailer from '../../utils/mailer';
import dataset from '../../utils/datasets/general';
import { ReFeedback } from '../../utils/config';
import { validateCaptcha } from '../../utils/functions';

export default async (req, res) => {
	let response;

	const gRes = await validateCaptcha(req.body.captcha);

	if (!gRes.success) {
		res.statusCode = 401;
		response = { success: false, message: ReFeedback.RES_ERR_AUTH };
		return res.json(response);
	}

	const emailResAdmin = await mailer({
		receivers: dataset.emails.claim.email,
		replyTo: req.body.email,
		subject: `Contact Form inquiry from ${req.body.name}`,
		template: 'contact-us',
		context: {
			...req.body,
		},
	});

	const emailRes = await mailer({
		receivers: req.body.email,
		replyTo: dataset.emails.claim.email,
		subject: `Contact inquiry has been submitted`,
		template: 'contact-us-client',
		context: {
			...req.body,
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
