import { Button, Typography } from 'antd';

import Layout from '../layouts/common';

import RankedSection from '../components/home/ranked-section';
import ConsultationSection from '../components/home/consultation-section';
import ServiceSection from '../components/home/service-section';
import TabSection from '../components/home/tab-section';

import '../styles/Home.module.less';

const { Link } = Typography;

export default function Home({ packConfigs }) {
	const configs = {
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
				<Button type='primary' shape='circle' className='app-btn'>
					<Link href='tel:18008094302' strong>
						CALL 1-800-809-4302
					</Link>
				</Button>
			),
		},
	};

	return (
		<Layout {...configs}>
			<RankedSection packConfigs={packConfigs} />
			<ConsultationSection packConfigs={packConfigs} />
			<ServiceSection packConfigs={packConfigs} />
			<TabSection packConfigs={packConfigs} />
		</Layout>
	);
}
