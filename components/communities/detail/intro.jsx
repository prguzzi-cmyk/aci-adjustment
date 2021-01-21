import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = ({ community }) => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				{community.Community.S
					? [
							<Text key='1'>Do not miss out</Text>,
							' on what you’re entitled to!',
					  ]
					: [<Text key='1'>Oops</Text>, ", we couldn't find the page..."]}
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim key='intro-queue' {...config.QueueAnim({})}>
					<Paragraph key='1'>
						ACI Adjustment Group, the best public adjuster in{' '}
						{community.Community.S}, handles residential and commercial claims.
						We can assist you with a property claim for damage caused by any of
						the following:
					</Paragraph>

					<Paragraph key='2'>
						<ul>
							<li>Storm</li>
							<li>Fire</li>
							<li>Water</li>
							<li>Oil Heater Puff Back</li>
							<li>Theft/Vandalism</li>
						</ul>
					</Paragraph>

					<Paragraph key='3'>
						Every insurance policy is different. We walk you through the ins and
						outs of your specific policy and evaluate the damage to help you
						determine the appropriate coverage.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
