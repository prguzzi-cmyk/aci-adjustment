import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/policy-review/intro';
import FormSection from '../../components/policy-review/form';

import '../../styles/modules/policy-review.less';

export default function PolicyReview() {
	const LayoutConfig = {
		title: dataset.router.policyReview.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: 'Request a Policy Review',
		},
		breadcrumb: [dataset.router.policyReview],
		className: dataset.router.policyReview.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FormSection />
		</Layout>
	);
}
