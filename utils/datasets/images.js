const General = {
	bannerHome: {
		src: '/images/banners/home.jpg',
		alt: 'Banner',
	},
	bannerDefault: {
		src: '/images/banners/home.jpg',
		alt: 'Banner',
	},
	policyReview: {
		src: '/images/policy-review.jpg',
		alt: 'Policy Review',
	},
	careers: {
		src: '/images/careers.jpg',
		alt: 'Careers',
	},
	clock: {
		src: '/images/24by7.jpg',
		alt: 'Clock 24/7',
	},
};

const Claims = {
	claimStorm: {
		src: '/images/claims/storm.png',
		alt: 'Storm Claims',

		hail: {
			src: '/images/claims/hail.png',
			alt: 'Hail Damage',
		},
		iceDamming: {
			src: '/images/claims/ice-damming.png',
			alt: 'Ice Damming',
		},
		missingShingles: {
			src: '/images/claims/missing-shingles.png',
			alt: 'Missing Shingles',
		},
		roofLeaks: {
			src: '/images/claims/roof-leaks.png',
			alt: 'Roof Leaks',
		},
		siding: {
			src: '/images/claims/siding.png',
			alt: 'Siding Damage',
		},
		treeDown: {
			src: '/images/claims/tree-down.png',
			alt: 'Tree Down',
		},
		windowLeaks: {
			src: '/images/claims/window-skylight-leaks.png',
			alt: 'Window & Skylight Leaks',
		},
	},
	claimFire: {
		src: '/images/claims/fire.png',
		alt: 'Fire Claims',

		commercialFire: {
			src: '/images/claims/commercial-fire.png',
			alt: 'Commercial Fire',
		},
		explosion: {
			src: '/images/claims/explosion.png',
			alt: 'Explosion',
		},
		kitchenFires: {
			src: '/images/claims/kitchen-fires.png',
			alt: 'Kitchen Fires',
		},
		smokeDamage: {
			src: '/images/claims/smoke-damage.png',
			alt: 'Smoke Damage',
		},
		fireSafety: {
			src: '/images/claims/fire-safety.png',
			alt: 'Operation Fire Safety',
		},
	},
	claimWater: {
		src: '/images/claims/water.png',
		alt: 'Water Claims',

		acUnitLeak: {
			src: '/images/claims/ac-unit-leak.png',
			alt: 'A/C Unit Leak',
		},
		appliancesLeak: {
			src: '/images/claims/appliances-leak.png',
			alt: 'Appliances Leak',
		},
		bathLeak: {
			src: '/images/claims/bathtub-leak.png',
			alt: 'Bathtub Leak',
		},
		sumpLeak: {
			src: '/images/claims/sump-leak.png',
			alt: 'Sump Pump Leak',
		},
		mold: {
			src: '/images/claims/mold.png',
			alt: 'Mold',
		},
		toiletLeak: {
			src: '/images/claims/toilet-leak.png',
			alt: 'Toilet Leaks & Overflows',
		},
	},
	claimCommercial: {
		src: '/images/claims/commercial.png',
		alt: 'Commercial Claims',

		apartment: {
			src: '/images/claims/apartment-building.jpg',
			alt: 'Apartment Buildings & Condominiums',
		},
		government: {
			src: '/images/claims/government-building.jpg',
			alt: 'Government Buildings',
		},
		industrial: {
			src: '/images/claims/industrial-property.jpg',
			alt: 'Industrial Properties',
		},
		commercialOffice: {
			src: '/images/claims/commercial-office.jpg',
			alt: 'Commercial Office Buildings',
		},
		shoppingCenter: {
			src: '/images/claims/shopping-center.jpg',
			alt: 'Shopping Centers & Malls',
		},
		smallBusinesses: {
			src: '/images/claims/small-business.jpg',
			alt: 'Small Businesses',
		},
		universities: {
			src: '/images/claims/university.jpg',
			alt: 'Universities & School Buildings',
		},
		lossBusiness: {
			src: '/images/claims/loss-business.jpg',
			alt: 'Loss of Business',
		},
	},
	claimCommon: {
		src: '/images/claims/flood.png',
		alt: 'Other Common Claims',

		collapse: {
			src: '/images/claims/collapse.png',
			alt: 'Collapse',
		},
		oilHeater: {
			src: '/images/claims/oil-heater.png',
			alt: 'Oil Heater Puff Back',
		},
		theft: {
			src: '/images/claims/theft-vandalism.png',
			alt: 'Theft & Vandalism',
		},
		damageFlooring: {
			src: '/images/claims/damaged-flooring.png',
			alt: 'Damaged Flooring',
		},
	},
};

const Awards = {
	awardsWharton: {
		src: '/images/awards/wharton.png',
		alt: 'UPenn Wharton',
	},
	awardsInc500: {
		src: '/images/awards/inc-500.jpg',
		alt: 'Inc. 500',
	},
	awardsIaua: {
		src: '/images/awards/iaua.jpg',
		alt: 'Insurance Agents United Assoc.',
	},
	awardsUpa: {
		src: '/images/awards/upa.png',
		alt: 'United Public Adjusters',
	},
};

const Posts = {
	postHail: {
		src: '/images/posts/hail.png',
		alt: 'Hail Damage',
	},
	postPreserveHome: {
		src: '/images/posts/preserve-home.png',
		alt: 'Preserve Home',
	},
	postPipeLeak: {
		src: '/images/posts/pipe-leak.png',
		alt: 'Water Pipe Leak',
	},
};

const Images = {
	images: {
		...General,
		...Claims,
		...Awards,
		...Posts,
	},
};

export default Images;
