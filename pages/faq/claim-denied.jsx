import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/faq/claim-denied/intro';
import FaqSection from '../../components/faq/claim-denied/faq';

require('../../styles/modules/faq/claim-denied.less');

export default function ClaimDenied() {
	const LayoutConfig = {
		title: 'Why did my insurance claim get denied?',
		description:
			'Review all the reasons for Why did my insurance claim get denied. Here’s what happens when most homeowners file a claim with their insurance company. Have a depth knowledge of process.',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.faqClaimDenied.label,
		},
		breadcrumb: [dataset.router.faq, dataset.router.faqClaimDenied],
		className: dataset.router.faqClaimDenied.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FaqSection />
		</Layout>
	);
}
