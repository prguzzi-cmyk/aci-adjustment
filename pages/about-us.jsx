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
		title: 'Top Rated Public Adjusters',
		description:
			'ACI Adjustment Group embodies the values of honesty, integrity, and above all else the experience and satisfaction of our customers. Initial Resident and Non-Resident Public Adjuster.',
		banner: {
			image: dataset.images.bannerAboutUs,
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
