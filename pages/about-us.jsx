import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

import IntroSection from '../components/about-us/intro';
import ValuesSection from '../components/about-us/values';
import HistorySection from '../components/about-us/history';
import FutureSection from '../components/about-us/future';
import AwardsSection from '../components/common/sections/awards';

import '../styles/modules/about-us.less';

export default function AboutUs() {
	const LayoutConfig = {
		title: dataset.router.aboutUs.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.aboutUs.label,
		},
		breadcrumb: [dataset.router.aboutUs],
		className: dataset.router.aboutUs.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<ValuesSection />
			<HistorySection />
			<FutureSection />
			<AwardsSection />
		</Layout>
	);
}
