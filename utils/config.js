/* Overpack Configuration */
const PlayScale = {
	noScale: 0,
	bottom: 0.3,
	center: 0.5,
	top: 0.7,
};

const OverPack = ({ playScale = PlayScale.bottom }) => {
	return { playScale };
};

/* QueueAnim Configuration */
const QueueAnim = ({
	type = 'bottom',
	leaveReverse = true,
	interval = 100,
	delay = 0,
	duration = 500,
	ease = ['easeInCubic', 'easeOutCubic'],
}) => {
	return {
		type,
		leaveReverse,
		interval,
		delay,
		duration,
		ease,
	};
};

/* TweenOne Configuration */
const TweenOne = ({
	reverse = false,
	coordinate = 'y',
	path = '+=30',
	type = 'from',
	opacity = 0,
	delay = 0,
	ease = 'easeInOutSine',
}) => {
	switch (coordinate) {
		case 'x':
			return {
				reverse,
				animation: {
					x: path,
					type,
					opacity,
					delay,
					ease,
				},
			};

		case 'y':
		default:
			return {
				reverse,
				animation: {
					y: path,
					type,
					opacity,
					delay,
					ease,
				},
			};
	}
};

const MessageDuration = {
	shorter: 3,
	normal: 5,
	longer: 8,
};

/* NextJS API configuration */
export const ApiConfig = {
	api: {
		bodyParser: false,
	},
};

/* Mail Feedbacks */
export const MailFeedback = {
	REQ_REC: 'Mail receivers required!',
	REQ_SUB: 'Mail subject required!',
	REQ_BODY: 'Mail body required!',

	ERR_MAIL: 'Email not sent!',

	SUC_MAIL: 'Email sent successfully!',
};

/* Request/Response Feedbacks */
export const ReFeedback = {
	RES_ERR_MAIL:
		'There is some error while sending an email. Please contact website administrator.',
	RES_ERR_AUTH: 'You are not authorized!',
};

/* Form Feedbacks */
export const FormFeedback = {
	REQ_FIRST_NAME: 'Please input your first name!',
	REQ_LAST_NAME: 'Please input your last name!',
	REQ_EMAIL: 'Please input your E-mail!',
	REQ_PHONE: 'Please input your phone number!',
	REQ_ADD: 'Please input your address!',
	REQ_CITY: 'Please input your city!',
	REQ_STATE: 'Please input your state!',
	REQ_ZIP: 'Please input your zip code!',
	REQ_CLAIM_TYPE: 'Type of Claim is required',
	REQ_DAMAGE_TYPE: 'Type of Damage is required',
	REQ_POLICY_TYPE: 'Type of Policy is required',
	REQ_POLICY_NUM: 'Please input your policy number!',
	REQ_LOSS_DATE: 'Please input your loss date!',
	REQ_OPT: 'Please select an option!',
	REQ_CAPTCHA: 'Please solve recaptcha!',

	INVALID_EMAIL: 'The input is not valid E-mail!',

	EXT_CAPTCHA: 'We must make sure that your are a human.',

	TIP_ADD_DAMAGE: 'This is the address where the damage occurred',
	TIP_ADD_MAIL:
		'This is the address where you would like to receive mail correspondence regarding your claim.',
	TIP_DAMAGE_TYPE:
		'What caused the damage to your home? Your claim may fall under more than one category, and that is fine. Please select the category that best describes your claim.',
	TIP_POLICY_TYPE:
		'What type of policy do you have?  If you are a homeowner, you would select "Homeowners."  If you own a business, but do not own the property, select "Businessowners." If you own a commercial property, select "Commercial."',
	TIP_POLICY_NUM:
		'Your policy number will be on your Declarations Page (also call "renewal" or "continuation").  We need your policy number to report your claim.',
	TIP_DEC_PAGE:
		'Your Declarations Page is the first page on your policy "renewal" or "continuation" that you receive in the mail each year.  It contains your policy number, dates of coverage, amounts of coverage, and other basic information.  As your Public Adjuster, we handle all communication for you, and we will need your Declarations Page to report your claim.  If you do not have it at this time you can still file a claim as long as you have your policy number.',
};

/* Form Items Layout */
export const FormItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
		md: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
		md: { span: 12 },
	},
};

/* Tail Form Item Layout */
export const TailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

export default { PlayScale, OverPack, QueueAnim, TweenOne, MessageDuration };
