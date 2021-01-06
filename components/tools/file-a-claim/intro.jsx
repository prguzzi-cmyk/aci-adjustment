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
				Easy <Text>1-STEP</Text> Claim Submission
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
						src={dataset.images.fileClaim.src}
						alt={dataset.images.fileClaim.alt}
						width={450}
						height={300}
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
						Fill out the information to begin ACI Adjustment Group's{' '}
						<Text>EASY 1-STEP </Text>
						claim submission.
					</Paragraph>

					<Paragraph key='2'>
						After you fill out our <Text>SIMPLE</Text> form, you will receive a
						phone call from one of our licensed and trained Public Adjusters
						within <Text>24 hours</Text> to schedule a damage estimate.
					</Paragraph>

					<Paragraph key='3'>
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
