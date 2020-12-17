import { Row, Col, Typography, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text } = Typography;

const ServicesSection = () => {
	const imgConfig = {
		width: 217,
		height: 217,
	};

	return (
		<div className='services-container'>
			<Title level={2} className='title'>
				<Text>HIGHEST</Text> rated in customer service! <Text>LOWEST</Text>{' '}
				fees!
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [40, 40],
					}}
					key='queue'
					{...config.QueueAnim({ type: 'right' })}
				>
					<Col key='1' flex='2'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.src}
									alt={dataset.images.claimStorm.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.claimStorm.path}>
										<a>{dataset.router.claimStorm.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' flex='2'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimFire.src}
									alt={dataset.images.claimFire.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.claimFire.path}>
										<a>{dataset.router.claimFire.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' flex='2'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.src}
									alt={dataset.images.claimWater.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.claimWater.path}>
										<a>{dataset.router.claimWater.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' flex='2'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.src}
									alt={dataset.images.claimCommercial.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.claimCommercial.path}>
										<a>{dataset.router.claimCommercial.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='5' flex='2'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommon.src}
									alt={dataset.images.claimCommon.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.claimCommon.path}>
										<a>{dataset.router.claimCommon.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default ServicesSection;
