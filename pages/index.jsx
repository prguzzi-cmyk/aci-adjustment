import { Button, Typography } from 'antd';

import Layout from '../layouts/common';

import styles from '../styles/Home.module.less';

const { Link } = Typography;

export default function Home() {
	const elements = {
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
	return <Layout {...elements} />;
}
