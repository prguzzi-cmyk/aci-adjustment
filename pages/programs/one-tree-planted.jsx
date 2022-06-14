import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import IntroSection from '../../components/programs/one-tree-planted/intro';

require('../../styles/modules/programs/one-tree-planted.less');

export default function OneTreePlanted() {
	const LayoutConfig = {
		title: dataset.router.oneTreePlanted.label,
		description:
			'ACI Adjustment Group(ACI) is proud to be participating in the planting Sustainable Housing Project. This is a project where one million trees will be planted to help the ecosystem.',
		banner: {
			image: dataset.images.progTreePlanting,
			title: dataset.router.oneTreePlanted.label,
		},
		breadcrumb: [dataset.router.programs, dataset.router.oneTreePlanted],
		className: dataset.router.oneTreePlanted.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
		</Layout>
	);
}
