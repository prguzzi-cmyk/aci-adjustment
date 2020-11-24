import { Row, Col, Typography, Button } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const { Link, Title, Text } = Typography;

const ConsultationSection = ({ config, dataset }) => {
	return (
		<div className='consult-container'>
			<Title level={2} className='consult-title'>
				Call{' '}
				<Link href={`tel:${dataset.general.phone}`}>
					{dataset.general.phoneFormatted}
				</Link>{' '}
				for a<Text> FREE</Text> consultation!
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'consult-content',
						gutter: [16, 24],
					}}
					key='queue'
					{...config.QueueAnim({})}
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
								Do you have damage? Let ACI Adjustment Group evaluate your loss
								and give you an opinion with no obligation!
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
								Find out what your damage is worth in 15 minutes or less! Click
								the button below to use our state-of-the-art Claim Calculator
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
	);
};

export default ConsultationSection;
