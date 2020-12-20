import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/faq/claim-denied/intro';
import FaqSection from '../../components/faq/claim-denied/faq';

import '../../styles/modules/faq/claim-denied.less';

export default function ClaimDenied() {
	const LayoutConfig = {
		title: dataset.router.faqClaimDenied.label,
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
