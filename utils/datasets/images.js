import Claims from './images/claims';
import Awards from './images/awards';
import { Gallery, FeaturedGallery } from './images/gallery';

const RootPath = '/images/';
const BannersPath = '/images/banners/';

const General = {
	bannerHome: {
		src: `${BannersPath}home.jpg`,
		alt: 'Home Banner',
	},
	bannerDefault: {
		src: `${BannersPath}home.jpg`,
		alt: 'Default Banner',
	},
	bannerBlogDir: {
		src: 'https://public-adjusters.s3.amazonaws.com/blog/aci/',
	},
	bannerBlogDefault: {
		src: 'https://public-adjusters.s3.amazonaws.com/blog/aci/default.jpg',
		alt: 'Blog Banner',
	},
	bannerCommunDir: {
		src: 'https://public-adjusters.s3.amazonaws.com/communities/',
	},
	bannerCommunDefault: {
		src: 'https://public-adjusters.s3.amazonaws.com/communities/default.jpg',
		alt: 'Community Banner',
	},
	bannerCareer: {
		src: `${BannersPath}career.jpg`,
		alt: 'Career Banner',
	},
	bannerPolicyReview: {
		src: `${BannersPath}policy-review.jpg`,
		alt: 'Policy Review Banner',
	},
	bannerSchAppoint: {
		src: `${BannersPath}schedule-appointment.jpg`,
		alt: 'Schedule Appointment Banner',
	},
	bannerOurServices: {
		src: `${BannersPath}our-services.jpg`,
		alt: 'Our Services Banner',
	},
	bannerFileClaim: {
		src: `${BannersPath}file-claim.jpg`,
		alt: 'File A Claim Banner',
	},
	bannerFaq: {
		src: `${BannersPath}faq.jpg`,
		alt: 'Frequently Asked Questions Banner',
	},
	bannerClaimQuestions: {
		src: `${BannersPath}claim-questions.jpg`,
		alt: 'Claim Questions Banner',
	},
	bannerAboutUs: {
		src: `${BannersPath}about-us.jpg`,
		alt: 'About Us Banner',
	},
	bannerContactUs: {
		src: `${BannersPath}contact-us.jpg`,
		alt: 'Contact Us Banner',
	},
	awardUpa: {
		src: `${RootPath}award-upa.png`,
		alt: 'UPA Award',
	},
	inspection: {
		src: `${RootPath}inspection.jpg`,
		alt: 'Free Inspection',
	},
	fileClaim: {
		src: `${RootPath}file-claim.jpg`,
		alt: 'File a Claim',
	},
	policyReview: {
		src: `${RootPath}policy-review.jpg`,
		alt: 'Policy Review',
	},
	faq: {
		src: `${RootPath}faq.jpg`,
		alt: 'Insurance Claim FAQ',
	},
	careers: {
		src: `${RootPath}careers.jpg`,
		alt: 'Careers',
	},
	clock: {
		src: `${RootPath}24by7.jpg`,
		alt: 'Clock 24/7',
	},
};

const Images = {
	images: {
		...General,
		...Claims,
		...Awards,
		gallery: Gallery,
		featuredGallery: FeaturedGallery,
	},
};

export default Images;
