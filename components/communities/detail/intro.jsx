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
				<Text>Do not miss out</Text> on what you're entitled to!
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim key='intro-queue' {...config.QueueAnim({})}>
					<Paragraph key='1'>
						If you want to get the most out of your property insurance claim,
						you need someone to represent you. Someone with knowledge and
						expertise in the field.
					</Paragraph>

					<Paragraph key='2'>
						Remember, this is you, a homeowner, against a multi-million-dollar
						insurance company. They have lots of guys to look after their
						interests. You gotta have one for yours. That job is done by a
						Public Adjuster
						{community &&
							community.Community &&
							community.Community.S &&
							` ${community.Community.S}`}
						.
					</Paragraph>

					<Paragraph key='3'>
						No matter what your property insurance claim is about, we, at ACI
						Adjustment Group, can maximize the claim, offer advice and counsel
						in insurance cases, and make sure the insurer doesn't do any
						injustice with you.
					</Paragraph>

					<Paragraph key='4'>
						At ACI, you are the priority. We strive to make sure you get enough
						settlement to rebuild the property you have lost.
					</Paragraph>

					<Paragraph key='5'>
						Our claim staff will work with you and represent your case in front
						of the insurer to safeguard your interests.
					</Paragraph>

					<Paragraph key='6'>
						Here's an outline of the services we provide.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
