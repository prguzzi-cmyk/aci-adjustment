import { Button, Typography } from 'antd';
import Layout from '../layouts/home';

import RankedSection from '../components/home/ranked-section';
import ConsultationSection from '../components/home/consultation-section';
import ServiceSection from '../components/home/service-section';
import TabSection from '../components/home/tab-section';
import InspectionFormSection from '../components/home/inspection-form-section';
import AwardSection from '../components/home/award-section';

import dataset from '../utils/datasets/bootstrap';

import '../styles/modules/home.less';

const { Link } = Typography;

export default function Home() {
	const LayoutConfig = {
		title: dataset.general.name,
		banner: {
			image: {
				src: '/images/home-banner.jpg',
				alt: 'Banner Image',
			},
			title: 'GET A FREE INSPECTION TODAY!',
			tagline: `${dataset.general.name} ${dataset.general.tagline}`,
			content: dataset.general.description,
			button: (
				<Button key='call' type='primary' shape='circle' className='app-btn'>
					<Link href={`tel:${dataset.general.phone}`} strong>
						CALL {dataset.general.phoneFormatted}
					</Link>
				</Button>
			),
		},
	};

	return (
		<Layout {...LayoutConfig}>
			<RankedSection />
			<ConsultationSection />
			<ServiceSection />
			<TabSection />
			<InspectionFormSection />
			<AwardSection />
		</Layout>
	);
}
