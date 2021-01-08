import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/tools/policy-review/intro';
import FormSection from '../../components/tools/policy-review/form';

import '../../styles/modules/tools/policy-review.less';

export default function PolicyReview() {
	const LayoutConfig = {
		title: dataset.router.policyReview.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: 'Request a Policy Review',
		},
		breadcrumb: [dataset.router.tools, dataset.router.policyReview],
		className: dataset.router.policyReview.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<FormSection />
		</Layout>
	);
}
