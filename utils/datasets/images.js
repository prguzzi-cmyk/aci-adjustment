const General = {
	bannerHome: {
		src: '/images/banners/home.jpg',
		alt: 'Banner',
	},
	bannerDefault: {
		src: '/images/banners/home.jpg',
		alt: 'Banner',
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

		dontFight: {
			src: '/images/claims/dont-fight.png',
			alt: "Don't fight your insurance company alone",
		},
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
	},
	claimWater: {
		src: '/images/claims/water.png',
		alt: 'Water Claims',
	},
	claimCommercial: {
		src: '/images/claims/commercial.png',
		alt: 'Commercial Claims',
	},
	claimCommon: {
		src: '/images/claims/flood.png',
		alt: 'Other Common Claims',
	},
};

const Images = {
	images: {
		...General,
		...Claims,
	},
};

export default Images;
