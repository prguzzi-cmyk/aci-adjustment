import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import IntroSection from '../components/careers/intro';
import CareerFormSection from '../components/careers/form';

require('../styles/modules/careers.less');

export default function Careers() {
	const LayoutConfig = {
		title: 'Work with US',
		description:
			'Work with ACI Adjustment Group. Do you have a passion for helping people in need? We are the people to work with. Share your resume.',
		banner: {
			image: dataset.images.bannerCareer,
			title: 'Start your new career today!',
		},
		breadcrumb: [dataset.router.careers],
		className: dataset.router.careers.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<CareerFormSection />
		</Layout>
	);
}
