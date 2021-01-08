import Layout from '../../layouts/default';

import IntroSection from '../../components/tools/intro';

import dataset from '../../utils/datasets/bootstrap';

import '../../styles/modules/tools/tools.less';

export default function Tools() {
	const LayoutConfig = {
		title: dataset.router.tools.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.tools.label,
		},
		breadcrumb: [dataset.router.tools],
		className: dataset.router.tools.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
		</Layout>
	);
}
