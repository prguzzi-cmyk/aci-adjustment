import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const RankedSection = ({ community }) => {
	return (
		<div className='ranked-container'>
			<Title level={2} className='title'>
				<Text>ACI</Text> Adjustment Group <Text>#1</Text> in Customer Service &
				Satisfaction
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='ranked-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						One company that aces in all of those categories is ACI Adjustment
						group. They have:
					</Paragraph>

					<Paragraph key='2'>
						<ul>
							<li>Been winning the best customer service award for 8 years.</li>

							<li>
								Been named one of the 500 fastest growing businesses in all of
								the US.
							</li>

							<li>
								Been named among the 100 fastest growing businesses in{' '}
								{community.Community.S ? community.Community.S : 'Philadelphia'}
								.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='3'>
						Whether it is fire, storm, snow, or any other type of property
						damage, ACI has got you covered. Contact us and get the most out of
						your insurance policy.
					</Paragraph>

					<Paragraph key='4'>
						Before accepting your settlement, contact ACI Adjustment Group to
						ensure that you don’t lose even a single penny that you are entitled
						to.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default RankedSection;
