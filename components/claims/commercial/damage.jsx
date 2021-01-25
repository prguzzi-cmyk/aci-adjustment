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
									src={dataset.images.claimCommercial.apartment.src}
									alt={dataset.images.claimCommercial.apartment.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageApartment.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.government.src}
									alt={dataset.images.claimCommercial.government.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageGovernment.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.industrial.src}
									alt={dataset.images.claimCommercial.industrial.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageIndustrial.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.commercialOffice.src}
									alt={dataset.images.claimCommercial.commercialOffice.alt}
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

					<Col key='5' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.shoppingCenter.src}
									alt={dataset.images.claimCommercial.shoppingCenter.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageShopping.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='6' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.smallBusinesses.src}
									alt={dataset.images.claimCommercial.smallBusinesses.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageSmallBusiness.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='7' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.universities.src}
									alt={dataset.images.claimCommercial.universities.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageUniversity.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='8' flex='1'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommercial.lossBusiness.src}
									alt={dataset.images.claimCommercial.lossBusiness.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageLossBusiness.label}</a>
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
