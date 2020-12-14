import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import IntroSection from '../components/careers/intro';
import CareerFormSection from '../components/careers/career-form';

import '../styles/modules/careers.less';

export default function Careers() {
	const LayoutConfig = {
		title: dataset.router.careers.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: 'Start your new career today!',
		},
		breadcrumb: [dataset.router.careers],
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<CareerFormSection />
		</Layout>
	);
}
