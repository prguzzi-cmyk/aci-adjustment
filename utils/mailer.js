import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import handlebars from 'handlebars';

import dataset from '../utils/datasets/general';
import { MailFeedback } from '../utils/config';

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: process.env.MAIL_SECURE, // true for 465, false for other ports
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PWD,
	},
});

transporter.use(
	'compile',
	hbs({
		viewEngine: {
			extname: '.hbs',
			partialsDir: 'views/emails/partials/',
			layoutsDir: 'views/emails/',
			defaultLayout: 'main',
			helpers: {
				h2: function (string) {
					return new handlebars.SafeString(
						`<h2 style="color: #4676b6; margin: 25px 0 15px">${handlebars.escapeExpression(
							string
						)}</h2>`
					);
				},
				bold: function (string) {
					return new handlebars.SafeString(
						`<b>${handlebars.escapeExpression(string)}</b>`
					);
				},
			},
		},
		viewPath: 'views/emails/',
		extName: '.hbs',
	})
);

const mailer = async ({
	receivers,
	subject,
	template,
	context,
	attachments = [],
	replyTo = '',
}) => {
	if (receivers === '' || receivers === undefined) {
		return { success: false, message: MailFeedback.REQ_REC };
	}

	if (subject === '' || subject === undefined) {
		return { success: false, message: MailFeedback.REQ_SUB };
	}

	if (context === '' || context === undefined) {
		return { success: false, message: MailFeedback.REQ_BODY };
	}

	const info = await transporter.sendMail({
		from: `"${dataset.emails.claim.label}" <${dataset.emails.claim.email}>`, // sender address
		to: receivers, // list of receivers
		replyTo: replyTo,
		subject: subject, // Subject line
		template: template, // template to use
		context: context, // context to pass to template
		attachments: attachments, // Attachments for email
	});

	if (info.messageId) {
		return { success: true, message: MailFeedback.SUC_MAIL };
	} else {
		return { success: false, message: MailFeedback.ERR_MAIL };
	}
};

export const formatAttachments = (attachments, append = '') => {
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

export default mailer;
