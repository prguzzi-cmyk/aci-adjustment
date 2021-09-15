const dataset = require('./datasets/router');
const homeRedirectURLs = require('./datasets/redirects-home');

const HomeRedirects = homeRedirectURLs.map((value) => ({
	source: value,
	destination: dataset.router.home.path,
	permanent: true,
}));

const OtherRedirects = [
	{
		source: '/schedule-appointment.html',
		destination: dataset.router.schAppointment.path,
		permanent: true,
	},
	{
		source: '/our-services.html',
		destination: dataset.router.services.path,
		permanent: true,
	},
	{
		source: '/whats-covered.html',
		destination: dataset.router.services.path,
		permanent: true,
	},
	{
		source: '/storm-claims.html',
		destination: dataset.router.claimStorm.path,
		permanent: true,
	},
	{
		source: '/fire.html',
		destination: dataset.router.claimFire.path,
		permanent: true,
	},
	{
		source: '/water-claims.html',
		destination: dataset.router.claimWater.path,
		permanent: true,
	},
	{
		source: '/commercial-claims-public-adjuster.html',
		destination: dataset.router.claimCommercial.path,
		permanent: true,
	},
	{
		source: '/file-a-claim.html',
		destination: dataset.router.fileClaim.path,
		permanent: true,
	},
	{
		source: '/policy-review.html',
		destination: dataset.router.policyReview.path,
		permanent: true,
	},
	{
		source: '/faq.html',
		destination: dataset.router.faq.path,
		permanent: true,
	},
	{
		source: '/questions-about-your-claim.html',
		destination: dataset.router.faqClaimQuestions.path,
		permanent: true,
	},
	{
		source: '/my-homeowners-insurance-claim-was-denied.html',
		destination: dataset.router.faqClaimDenied.path,
		permanent: true,
	},
	{
		source: '/careers.html',
		destination: dataset.router.careers.path,
		permanent: true,
	},
	{
		source: '/about-us-public-adjusters-pa.html',
		destination: dataset.router.aboutUs.path,
		permanent: true,
	},
	{
		source: '/contact-us.html',
		destination: dataset.router.contact.path,
		permanent: true,
	},
];

const Redirects = HomeRedirects.concat(OtherRedirects);

module.exports = Redirects;
