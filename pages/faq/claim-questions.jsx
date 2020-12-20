import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import FaqSection from '../../components/faq/claim-questions/faq';

import '../../styles/modules/faq/claim-questions.less';

export default function ClaimQuestions() {
	const LayoutConfig = {
		title: dataset.router.faqClaimQuestions.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.faqClaimQuestions.label,
		},
		breadcrumb: [dataset.router.faq, dataset.router.faqClaimQuestions],
		className: dataset.router.faqClaimQuestions.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<FaqSection />
		</Layout>
	);
}
