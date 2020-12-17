const General = {
	home: {
		path: '/',
		label: 'Home',
		key: 'home',
	},
	schAppointment: {
		path: '/schedule-appointment',
		label: 'Schedule Appointment',
		key: 'schedule-appointment',
	},
	services: {
		path: '/our-services',
		label: 'Our Services',
		key: 'our-services',
	},
	policyReview: {
		path: '/policy-review',
		label: 'Policy Review',
		key: 'policy-review',
	},
	faq: {
		path: '/faq',
		label: 'Frequently Asked Questions',
		key: 'faq',
	},
	careers: {
		path: '/careers',
		label: 'Careers',
		key: 'careers',
	},
	contact: {
		path: '/contact-us',
		label: 'Contact Us',
		key: 'contact-us',
	},
};

const Claims = {
	claimStorm: {
		path: `${General.services.path}/storm-claims`,
		label: 'Storm Claims',
		key: 'storm-claims',
	},
	claimFire: {
		path: `${General.services.path}/fire-claims`,
		label: 'Fire Claims',
		key: 'fire-claims',
	},
	claimWater: {
		path: `${General.services.path}/water-claims`,
		label: 'Water Claims',
		key: 'water-claims',
	},
	claimCommercial: {
		path: `${General.services.path}/commercial-claims`,
		label: 'Commercial Claims',
		key: 'commercial-claims',
	},
	claimCommon: {
		path: `${General.services.path}/other-common-claims`,
		label: 'Other Common Claims',
		key: 'other-common-claims',
	},
};

const Router = {
	router: {
		...General,
		...Claims,
	},
};

export default Router;
