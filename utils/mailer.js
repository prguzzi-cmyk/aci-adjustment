import nodemailer from 'nodemailer';

import dataset from '../utils/datasets/general';

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: process.env.MAIL_SECURE, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PWD,
	},
});

const mailer = async ({
	receivers,
	subject,
	body,
	attachments = [],
	replyTo = '',
}) => {
	if (receivers === '' || receivers === undefined) {
		return { success: false, message: 'Mail receivers required!' };
	}

	if (subject === '' || subject === undefined) {
		return { success: false, message: 'Mail subject required!' };
	}

	if (body === '' || body === undefined) {
		return { success: false, message: 'Mail body required!' };
	}

	const info = await transporter.sendMail({
		from: `"${dataset.emails.claim.label}" <${dataset.emails.claim.email}>`, // sender address
		to: receivers, // list of receivers
		replyTo: replyTo,
		subject: subject, // Subject line
		html: body, // html body
		attachments: attachments, // Attachments for email
	});

	if (info.messageId) {
		return { success: true, message: 'Email sent successfully!' };
	} else {
		return { success: false, message: 'Email not sent!' };
	}
};

export default mailer;
