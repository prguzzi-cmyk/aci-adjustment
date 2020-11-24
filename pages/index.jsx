import { Button, Typography } from 'antd';

import Layout from '../layouts/common';

import RankedSection from '../components/home/ranked-section';
import ConsultationSection from '../components/home/consultation-section';
import ServiceSection from '../components/home/service-section';
import TabSection from '../components/home/tab-section';
import InspectionFormSection from '../components/home/inspection-form-section';
import AwardSection from '../components/home/award-section';

import '../styles/Home.module.less';

const { Link } = Typography;

export default function Home({ config }) {
	const LayoutConfig = {
		title: 'ACI',
		banner: {
			image: {
				src: '/images/home-banner.jpg',
				alt: 'Banner Image',
			},
			title: 'GET A FREE INSPECTION TODAY!',
			tagline: 'ADJUSTMENT GROUP',
			content: 'A DETAILED DESCRIPTION OF THE WEBSITE',
			button: (
				<Button key='call' type='primary' shape='circle' className='app-btn'>
					<Link href='tel:18008094302' strong>
						CALL 1-800-809-4302
					</Link>
				</Button>
			),
		},
		config,
	};

	return (
		<Layout {...LayoutConfig}>
			<RankedSection config={config} />
			<ConsultationSection config={config} />
			<ServiceSection config={config} />
			<TabSection config={config} />
			<InspectionFormSection config={config} />
			<AwardSection config={config} />
		</Layout>
	);
}
