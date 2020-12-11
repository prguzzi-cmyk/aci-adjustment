import { Row, Col, Typography, Button } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Link, Title, Text } = Typography;

const ServiceSection = () => {
	const imgConfig = {
		width: 217,
		height: 217,
	};

	return (
		<div className='service-container'>
			<Title level={2} className='service-title'>
				<Text>HIGHEST</Text> rated in customer service! <Text>LOWEST</Text>{' '}
				fees!
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'service-content',
						gutter: [40, 40],
					}}
					key='queue'
					{...config.QueueAnim({ type: 'right' })}
				>
					<Col key='1' flex='2'>
						<div className='service-block'>
							<div className='img-wrapper'>
								<Image
									src='/images/storm-claim.png'
									alt='Storm Claim'
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#' strong>
										Storm Claims
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' flex='2'>
						<div className='service-block'>
							<div className='img-wrapper'>
								<Image
									src='/images/fire-claim.png'
									alt='Fire Claim'
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#' strong>
										Fire &amp; Smoke Claims
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' flex='2'>
						<div className='service-block'>
							<div className='img-wrapper'>
								<Image
									src='/images/water-claim.png'
									alt='Water Claim'
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#' strong>
										Water Claims
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' flex='2'>
						<div className='service-block'>
							<div className='img-wrapper'>
								<Image
									src='/images/flood-claim.png'
									alt='Flood Claim'
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#' strong>
										Flood Claims
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='5' flex='2'>
						<div className='service-block'>
							<div className='img-wrapper'>
								<Image
									src='/images/commercial-claim.png'
									alt='Commercial Claim'
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#' strong>
										Commercial Claims
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

export default ServiceSection;
