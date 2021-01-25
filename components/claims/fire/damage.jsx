import { Row, Col, Typography, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text } = Typography;

const DamageSection = () => {
	const imgConfig = {
		width: 267,
		height: 267,
	};

	return (
		<div className='damage-container'>
			<Title level={2} className='title'>
				<Text>Damage</Text> Types
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='damage-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [40, 40],
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Col key='1' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimFire.commercialFire.src}
									alt={dataset.images.claimFire.commercialFire.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageCommercial.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimFire.explosion.src}
									alt={dataset.images.claimFire.explosion.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageExplosion.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimFire.kitchenFires.src}
									alt={dataset.images.claimFire.kitchenFires.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageKitchen.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimFire.smokeDamage.src}
									alt={dataset.images.claimFire.smokeDamage.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageSmoke.label}</a>
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

export default DamageSection;
