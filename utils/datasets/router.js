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
	tools: {
		path: '/tools',
		label: 'Tools',
		key: 'tools',
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

const Damage = {
	damageHail: {
		path: `${Claims.claimStorm.path}/hail-damage`,
		label: 'Hail Damage',
		key: 'hail-damage',
	},
	damageIceDamming: {
		path: `${Claims.claimStorm.path}/ice-damming`,
		label: 'Ice Damming',
		key: 'ice-damming',
	},
	damageMissingShingles: {
		path: `${Claims.claimStorm.path}/missing-shingles`,
		label: 'Missing Shingles',
		key: 'missing-shingles',
	},
	damageRoofLeaks: {
		path: `${Claims.claimStorm.path}/roof-leaks`,
		label: 'Roof Leaks',
		key: 'roof-leaks',
	},
	damageSiding: {
		path: `${Claims.claimStorm.path}/siding-damage`,
		label: 'Siding Damage',
		key: 'siding-damage',
	},
	damageTreeDown: {
		path: `${Claims.claimStorm.path}/tree-down`,
		label: 'Tree Down',
		key: 'tree-down',
	},
	damageSkylightLeaks: {
		path: `${Claims.claimStorm.path}/window-skylight-leaks`,
		label: 'Window & Skylight Leaks',
		key: 'window-skylight-leaks',
	},
	damageCommercial: {
		path: `${Claims.claimFire.path}/commercial-fire`,
		label: 'Commercial Fire',
		key: 'commercial-fire',
	},
	damageExplosion: {
		path: `${Claims.claimFire.path}/explosion`,
		label: 'Explosion',
		key: 'explosion',
	},
	damageKitchen: {
		path: `${Claims.claimFire.path}/kitchen-fires`,
		label: 'kitchen Fires',
		key: 'kitchen-fires',
	},
	damageSmoke: {
		path: `${Claims.claimFire.path}/smoke-damage`,
		label: 'Smoke Damage',
		key: 'smoke-damage',
	},
};

const Tools = {
	claimCalculator: {
		path: `${General.tools.path}/claim-calculator`,
		label: 'Claim Calculator',
		key: 'claim-calculator',
	},
	fileClaim: {
		path: `${General.tools.path}/file-claim`,
		label: 'File a Claim',
		key: 'file-claim',
	},
	policyReview: {
		path: `${General.tools.path}/policy-review`,
		label: 'Policy Review',
		key: 'policy-review',
	},
};

const Router = {
	router: {
		...General,
		...Claims,
		...Damage,
		...Tools,
	},
};

export default Router;
