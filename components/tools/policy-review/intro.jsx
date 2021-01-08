import { Row, Col, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Request a <Text>FREE</Text> policy review
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					gutter: [20, 20],
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='intro-image-queue'
					component={Col}
					componentProps={{
						md: 9,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='policy-review'
						src={dataset.images.policyReview.src}
						alt={dataset.images.policyReview.alt}
						width={450}
						height={254}
					/>
				</QueueAnim>

				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 15,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Paragraph key='1'>
						Fill out the information to your left to request a FREE policy
						review. A Public Adjuster will walk you through the ins and outs of
						your specific policy and can answer many questions regarding your
						coverage, damages to your property, claims, the claim process, and
						hiring a contractor.
					</Paragraph>

					<Paragraph key='2'>
						Most people have never read through the insurance policy their name
						is on. While this may not be an issue at the moment, coverage
						disputes are all too frequent when disaster strikes. Make sure you
						have sufficient knowledge of what your policy offers before it’s too
						late! ACI is here to help!
					</Paragraph>

					<Paragraph key='3'>
						Your ACI Public Adjuster will even offer a FREE property inspection
						and consultation to see if you have covered damages to your
						property.
					</Paragraph>

					<Paragraph key='4'>
						Feel free to call ACI Adjustment Group at{' '}
						<Link href={`tel:${dataset.general.phone}`} strong>
							{dataset.general.phoneFormatted}
						</Link>{' '}
						with any additional questions!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
