import Layout from '../../layouts/default';

import IntroSection from '../../components/programs/intro';

import dataset from '../../utils/datasets/bootstrap';

require('../../styles/modules/programs/programs.less');

export default function Programs() {
	const LayoutConfig = {
		title: dataset.router.programs.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.programs.label,
		},
		breadcrumb: [dataset.router.programs],
		className: dataset.router.programs.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
		</Layout>
	);
}
