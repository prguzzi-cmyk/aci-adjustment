import { Row, Col, Typography, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text } = Typography;

const GallerySection = () => {
	return (
		<div className='featured-gallery-container'>
			<Title level={3} className='title'>
				ACI <Text>Gallery</Text>
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='featured-gallery-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					{dataset.images.featuredGallery.map((ele, index) => (
						<Col key={index} md={6}>
							<Image
								src={ele.src}
								alt={ele.alt}
								loading='lazy'
								layout='responsive'
								width='100'
								height='150'
								quality={50}
							/>
						</Col>
					))}
				</QueueAnim>
			</OverPack>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='visit-gallery-queue'
					component={Row}
					componentProps={{
						className: 'visit-gallery-content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({ type: 'bottom' })}
				>
					<Col key='1' xs={24}>
						<div className='btn-wrapper'>
							<Button type='primary' className='app-btn-lg'>
								<Link href={dataset.router.gallery.path}>
									<a>Visit {dataset.router.gallery.label}</a>
								</Link>
							</Button>
						</div>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default GallerySection;
