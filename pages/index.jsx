import { Button, Typography } from 'antd';
import Layout from '../layouts/home';

import IntroSection from '../components/home/intro';
import RankedSection from '../components/home/ranked';
import ConsultationSection from '../components/home/consultation';
import ServicesSection from '../components/common/sections/services';
import TabSection from '../components/home/tab';
import FeaturedGallerySection from '../components/common/sections/gallery';
import InspectionFormSection from '../components/common/sections/inspection-form';
import AwardsSection from '../components/common/sections/awards';

import dataset from '../utils/datasets/bootstrap';

import { HomePageData } from '../utils/structured-data/pages';

require('../styles/modules/home.less');

const { Link } = Typography;

export default function Home() {
	const LayoutConfig = {
		title: 'Claim Adjuster Group in Newtown, PA',
		description:
			'ACI Adjustment Group is a public adjuster group serving the Newtown, PA, area. Call us at 1-800-809-4302 to schedule a free inspection!',
		canonical: dataset.router.home.url,
		structuredData: HomePageData(),
		banner: {
			image: dataset.images.bannerHome,
			title: 'Insurance Adjuster Serving the Newtown, PA, Area',
			tagline: `${dataset.general.name} ${dataset.general.tagline}`,
			content: 'GET A FREE INSPECTION TODAY!',
			button: (
				<Button key='call' type='primary' shape='circle' className='app-btn'>
					<Link href={`tel:${dataset.general.phone}`} strong>
						CALL {dataset.general.phoneFormatted}
					</Link>
				</Button>
			),
		},
		className: dataset.router.home.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<IntroSection />
			<RankedSection />
			<ConsultationSection />
			<ServicesSection />
			<TabSection />
			<FeaturedGallerySection />
			<InspectionFormSection />
			<AwardsSection />
		</Layout>
	);
}
