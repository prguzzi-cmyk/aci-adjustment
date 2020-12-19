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
									src={dataset.images.claimCommon.collapse.src}
									alt={dataset.images.claimCommon.collapse.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageCollapse.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommon.oilHeater.src}
									alt={dataset.images.claimCommon.oilHeater.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageOilHeater.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommon.theft.src}
									alt={dataset.images.claimCommon.theft.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageTheft.label}</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' span='6'>
						<div className='block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.claimCommon.damageFlooring.src}
									alt={dataset.images.claimCommon.damageFlooring.alt}
									width={imgConfig.width}
									height={imgConfig.height}
								/>
							</div>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href='#'>
										<a>{dataset.router.damageFlooring.label}</a>
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
