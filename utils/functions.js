const formidable = require('formidable');

const formidableConfig = {
	keepExtensions: true,
	multiples: true,
};

export const parsedData = async (req) => {
	return await new Promise(function (resolve, reject) {
		const form = new formidable.IncomingForm(formidableConfig);

		form.parse(req, function (err, fields, files) {
			if (err) return reject(err);
			resolve({ fields, files });
		});
	});
};

export const validateCaptcha = async (captcha) => {
	const googleRes = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`
	);

	return await googleRes.json();
};
