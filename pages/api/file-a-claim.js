import moment from 'moment';

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

	const decAttachment = data.files.declarationsPage
		? formatAttachments(data.files.declarationsPage, 'Declaration Page')
		: [];

	const repRecAttachments = data.files.receiptFiles
		? formatAttachments(data.files.receiptFiles, 'Repair Receipt')
		: [];

	const emailResAdmin = await mailer({
		receivers: dataset.emails.claim.email,
		replyTo: data.fields.email,
		subject: `${data.fields.firstName} ${data.fields.lastName} has filed a Claim`,
		template: 'file-claim',
		context: {
			...data.fields,
			lossDate: moment(data.fields.lossDate).format('LL'),
		},
		attachments: [...decAttachment, ...repRecAttachments],
	});

	const emailRes = await mailer({
		receivers: data.fields.email,
		replyTo: dataset.emails.claim.email,
		subject: `Your claim has been filed`,
		template: 'file-claim-client',
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
