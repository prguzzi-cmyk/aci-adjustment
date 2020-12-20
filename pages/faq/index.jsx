import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/faq/intro';
import HireSection from '../../components/faq/hire';

import '../../styles/modules/faq/faq.less';

export default function FAQ() {
	const LayoutConfig = {
		title: dataset.router.faq.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.faq.label,
		},
		breadcrumb: [dataset.router.faq],
		className: dataset.router.faq.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<HireSection />
		</Layout>
	);
}
