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
									src={dataset.images.claimStorm.hail.src}
									alt={dataset.images.claimStorm.hail.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageHail.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.iceDamming.src}
									alt={dataset.images.claimStorm.iceDamming.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageIceDamming.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.missingShingles.src}
									alt={dataset.images.claimStorm.missingShingles.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageMissingShingles.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.roofLeaks.src}
									alt={dataset.images.claimStorm.roofLeaks.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageRoofLeaks.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='5' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.siding.src}
									alt={dataset.images.claimStorm.siding.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageSiding.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='6' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.treeDown.src}
									alt={dataset.images.claimStorm.treeDown.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageTreeDown.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='7' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimStorm.windowLeaks.src}
									alt={dataset.images.claimStorm.windowLeaks.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageSkylightLeaks.label}</a>
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
