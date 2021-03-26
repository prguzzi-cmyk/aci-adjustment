import Link from 'next/link';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;

const IntroSection = ({ community }) => {
	return (
		<div className='comm-intro-container'>
			<Title level={2} className='title'>
				Call&nbsp;
				<Link href={`tel:${dataset.general.phone}`}>
					<a>{dataset.general.phoneFormatted}</a>
				</Link>
				&nbsp;for a <Text>FREE</Text> consultation!
				<br />
				<Text>Do not miss out</Text> on what you’re entitled to!
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim key='intro-queue' {...config.QueueAnim({})}>
					<Paragraph key='1'>
						When you file an insurance claim, it is you versus a multi-million
						dollar insurance company. Add to that the fact that they deal with
						these cases daily and it's your first time.
					</Paragraph>

					<Paragraph key='2'>
						As much as we hate to say this, they might not be the same amicable
						people that they were when selling you the insurance policy.
					</Paragraph>

					<Paragraph key='3'>
						In short, you want someone on your side, someone who can present
						your case, and negotiate for you.
					</Paragraph>

					<Paragraph key='4'>
						That someone is a public adjuster {community.Community.S}. But who
						is a public adjuster? What do they do? How can they help? Let's see!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
