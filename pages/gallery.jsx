import { Typography, Image } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Layout from '../layouts/default';

import Masonry from '../lib/masonry';

import config from '../utils/config';
import dataset from '../utils/datasets/bootstrap';

require('../styles/modules/gallery.less');

const { Title, Text } = Typography;

export default function Gallery() {
	const LayoutConfig = {
		title: 'Gallery',
		description:
			'Call ACI Adjustment today, top rated Public Adjusters. Get your loss assessment today. Settle for Residential & Commercial Claims.',
		banner: {
			image: dataset.images.bannerSchAppoint,
			title: 'ACI Gallery',
		},
		breadcrumb: [dataset.router.gallery],
		className: dataset.router.gallery.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<div className='gallery-grid'>
				<Title level={2} className='title'>
					ACI <Text>Gallery</Text>
				</Title>

				<OverPack
					component={Image.PreviewGroup}
					{...config.OverPack({ playScale: config.PlayScale.bottom })}
				>
					<QueueAnim
						key='images-queue'
						component={Masonry}
						componentProps={{
							className: 'content',
							brakePoints: [350, 576, 768],
						}}
						{...config.QueueAnim({ interval: 70, duration: 200 })}
					>
						{dataset.images.gallery.map((ele, index) => (
							<div key={index} className='item'>
								<Image src={ele.src} alt={ele.alt} />
							</div>
						))}
					</QueueAnim>
				</OverPack>
			</div>
		</Layout>
	);
}
