import { Result, Button, Typography } from 'antd';

import Layout from '../layouts/default';

import dataset from '../utils/datasets/bootstrap';

require('../styles/modules/page-not-found.less');

const { Link } = Typography;

export default function Custom404() {
	const LayoutConfig = {
		title: dataset.router.notFound.label,
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.notFound.label,
		},
		breadcrumb: [dataset.router.notFound],
		className: dataset.router.notFound.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<Result
				status='404'
				title='404'
				subTitle='Sorry, the page you visited does not exist.'
				extra={
					<Button key='call' type='primary' shape='circle' className='app-btn'>
						<Link href={dataset.router.home.path} strong>
							Back Home
						</Link>
					</Button>
				}
			/>
		</Layout>
	);
}
