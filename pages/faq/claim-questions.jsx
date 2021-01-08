import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import FaqSection from '../../components/faq/claim-questions/faq';

import '../../styles/modules/faq/claim-questions.less';

export default function ClaimQuestions() {
	const LayoutConfig = {
		title: 'Questions About Your Claim',
		description:
			'The detailed information about the claim process from ACI Adjustment Group Pennsylvania. Please review the list of articles and questions.',
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
