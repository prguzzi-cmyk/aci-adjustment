import { Row, Col, Typography, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text } = Typography;

const ConsultationSection = () => {
	return (
		<div className='consult-container'>
			<Title level={2} className='consult-title'>
				Call{' '}
				<Link href={`tel:${dataset.general.phone}`}>
					<a>{dataset.general.phoneFormatted}</a>
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
									src={dataset.images.inspection.src}
									alt={dataset.images.inspection.alt}
									width={460}
									height={292}
								/>
							</div>

							<Text className='consult-text'>
								Do you have damage? Let ACI Adjustment Group evaluate your loss
								and give you an opinion with no obligation!
							</Text>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={`#inspection-container`}>
										<a>Request a FREE Inspection!</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='2' md={6}>
						<div className='consult-block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.policyReview.src}
									alt={dataset.images.policyReview.alt}
									width={460}
									height={292}
								/>
							</div>

							<Text className='consult-text'>
								Fill out the information to request a FREE policy review. Our
								ACI Public Adjuster will even offer a FREE property inspection
								and consultation.
							</Text>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.policyReview.path}>
										<a>Request a FREE Policy Review</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='3' md={6}>
						<div className='consult-block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.fileClaim.src}
									alt={dataset.images.fileClaim.alt}
									width={460}
									height={292}
								/>
							</div>

							<Text className='consult-text'>
								Do you have claim? You can file online NOW! It's FAST! It's
								EASY! And you pay NO money out of pocket!
							</Text>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.fileClaim.path}>
										<a>File a Claim Online Now!</a>
									</Link>
								</Button>
							</div>
						</div>
					</Col>

					<Col key='4' md={6}>
						<div className='consult-block'>
							<div className='img-wrapper'>
								<Image
									src={dataset.images.faq.src}
									alt={dataset.images.faq.alt}
									width={460}
									height={292}
								/>
							</div>

							<Text className='consult-text'>
								Do you have a question? We've got the answer! Check out our
								Insurance Claim FAQ's!
							</Text>

							<div className='btn-wrapper'>
								<Button type='primary' className='app-btn-lg'>
									<Link href={dataset.router.faqClaimQuestions.path}>
										<a>Insurance Claim FAQ's</a>
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
