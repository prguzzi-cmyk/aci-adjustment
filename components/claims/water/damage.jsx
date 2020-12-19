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
						justify: 'center',
						align: 'middle',
						gutter: [40, 40],
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Col key='1' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.acUnitLeak.src}
									alt={dataset.images.claimWater.acUnitLeak.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageAcUnitLeak.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.appliancesLeak.src}
									alt={dataset.images.claimWater.appliancesLeak.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageAppliancesLeak.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.bathLeak.src}
									alt={dataset.images.claimWater.bathLeak.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageBathLeak.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.sumpLeak.src}
									alt={dataset.images.claimWater.sumpLeak.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageSumpLeak.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='5' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.mold.src}
									alt={dataset.images.claimWater.mold.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageMold.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='6' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimWater.toiletLeak.src}
									alt={dataset.images.claimWater.toiletLeak.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageToiletLeak.label}</a>
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
