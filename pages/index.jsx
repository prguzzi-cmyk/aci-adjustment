import Image from 'next/image';
import { Row, Col, Button, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Layout from '../layouts/common';

import TabSection from '../components/home/tab-section';

import '../styles/Home.module.less';

const { Link, Title, Text } = Typography;

export default function Home({ packConfigs }) {
	const configs = {
		title: 'ACI',
		banner: {
			image: {
				src: '/images/home-banner.jpg',
				alt: 'Banner Image',
			},
			title: 'GET A FREE INSPECTION TODAY!',
			tagline: 'ADJUSTMENT GROUP',
			content: 'A DETAILED DESCRIPTION OF THE WEBSITE',
			button: (
				<Button type='primary' shape='circle' className='app-btn'>
					<Link href='tel:18008094302' strong>
						CALL 1-800-809-4302
					</Link>
				</Button>
			),
		},
	};

	return (
		<Layout {...configs}>
			{/* Ranked Section */}
			<div className='rank-container'>
				<Title level={2} className='rank-title'>
					ACI Adjustment Group ranked #1 in 2018 for Customer Service!
				</Title>

				<OverPack
					component={Row}
					componentProps={{
						className: 'rank-content',
						justify: 'center',
						align: 'middle',
					}}
					playScale={packConfigs.OverPack.playScaleBottom}
				>
					<QueueAnim
						component={Col}
						componentProps={{
							md: 6,
						}}
						type='left'
						leaveReverse
						ease={['easeInCubic', 'easeOutCubic']}
					>
						<Image
							key='image'
							className='rank-image'
							src='/images/upa-2018.jpg'
							alt='UPA 2018'
							width={140}
							height={140}
						/>
					</QueueAnim>

					<QueueAnim
						component={Col}
						componentProps={{
							md: 8,
						}}
						type='right'
						leaveReverse
						ease={['easeInCubic', 'easeOutCubic']}
					>
						<Text key='text' className='rank-text'>
							ACI Adjustment Group was ranked #1 by the UPA (United Public
							Adjusters for Customer Service &amp; Satisfaction this year for
							the 5th year in a row!!!
						</Text>
					</QueueAnim>
				</OverPack>
			</div>

			{/* Consultation Section */}
			<div className='consult-container'>
				<Title level={2} className='consult-title'>
					Call <Link href='tel:18008094302'>1-800-809-4302</Link> for a
					<Text> FREE</Text> consultation!
				</Title>

				<OverPack playScale={packConfigs.OverPack.playScaleBottom}>
					<QueueAnim
						component={Row}
						componentProps={{
							className: 'consult-content',
							gutter: [16, 24],
						}}
						key='queue'
						type='bottom'
						leaveReverse
						interval={50}
					>
						<Col key='1' md={6}>
							<div className='consult-block'>
								<div className='img-wrapper'>
									<Image
										src='/images/inspection.png'
										alt='Free Inspection'
										width={140}
										height={109}
									/>
								</div>
								<Text className='consult-text'>
									Do you have damage? Let ACI Adjustment Group evaluate your
									loss and give you an opinion with no obligation!
								</Text>
								<div className='btn-wrapper'>
									<Button type='primary' className='app-btn-lg'>
										<Link href='#' strong>
											Request a FREE Inspection!
										</Link>
									</Button>
								</div>
							</div>
						</Col>

						<Col key='2' md={6}>
							<div className='consult-block'>
								<div className='img-wrapper'>
									<Image
										src='/images/claim.png'
										alt='File Claim'
										width={140}
										height={109}
									/>
								</div>
								<Text className='consult-text'>
									Do you have claim? You can file online NOW! It's FAST! It's
									EASY! And you pay NO money out of pocket!
								</Text>
								<div className='btn-wrapper'>
									<Button type='primary' className='app-btn-lg'>
										<Link href='#' strong>
											File a Claim Online Now!
										</Link>
									</Button>
								</div>
							</div>
						</Col>

						<Col key='3' md={6}>
							<div className='consult-block'>
								<div className='img-wrapper'>
									<Image
										src='/images/claim-calculator.png'
										alt='Claim Calculator'
										width={200}
										height={50}
									/>
								</div>
								<Text className='consult-text'>
									Find out what your damage is worth in 15 minutes or less!
									Click the button below to use our state-of-the-art Claim
									Calculator
								</Text>
								<div className='btn-wrapper'>
									<Button type='primary' className='app-btn-lg'>
										<Link href='#' strong>
											ACI Claim Calculator
										</Link>
									</Button>
								</div>
							</div>
						</Col>

						<Col key='4' md={6}>
							<div className='consult-block'>
								<div className='img-wrapper'>
									<Image
										src='/images/faq.jpg'
										alt='FAQ'
										width={140}
										height={109}
									/>
								</div>
								<Text className='consult-text'>
									Do you have a question? We've got the answer! Check out our
									Insurance Claim FAQ's!
								</Text>
								<div className='btn-wrapper'>
									<Button type='primary' className='app-btn-lg'>
										<Link href='#' strong>
											Insurance Claim FAQ's
										</Link>
									</Button>
								</div>
							</div>
						</Col>
					</QueueAnim>
				</OverPack>
			</div>

			{/* Services Section */}
			<div className='service-container'>
				<Title level={2} className='service-title'>
					<Text>HIGHEST</Text> rated in customer service! <Text>LOWEST</Text>{' '}
					fees!
				</Title>

				<OverPack playScale={packConfigs.OverPack.playScaleBottom}>
					<QueueAnim
						component={Row}
						componentProps={{
							className: 'service-content',
							gutter: [40, 40],
						}}
						key='queue'
						type='right'
						leaveReverse
						duration={400}
						ease={['easeInCubic']}
					>
						<Col key='1' flex='2'>
							<div className='service-block'>
								<div className='img-wrapper'>
									<Image
										src='/images/storm-claim.png'
										alt='Storm Claim'
										width={217}
										height={217}
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
										width={217}
										height={217}
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
										width={217}
										height={217}
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
										width={217}
										height={217}
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
										width={217}
										height={217}
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

			<TabSection packConfigs={packConfigs} />
		</Layout>
	);
}
