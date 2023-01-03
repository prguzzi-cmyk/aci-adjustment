import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const MoneyPartSection = ({ community }) => {
	return (
		<div className='money-part-container'>
			<Title level={3} className='title'>
				The <Text>Money</Text> Part
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='money-part-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						We have mentioned this before but just to make it clear for you, as
						a responsible public adjuster
						{community &&
							community.Community &&
							community.Community.S &&
							` in ${community.Community.S}`}
						, we don't get paid unless you do.
					</Paragraph>

					<Paragraph key='2'>Here's how it works:</Paragraph>

					<Paragraph key='3'>
						<ul>
							<li>
								We mostly work on a contingency-based fee. It is a percentage of
								the claim adjustment you'll get.
							</li>

							<li>
								The maximum we can charge from you is regulated and checked by
								state laws.
							</li>

							<li>
								We are only allowed to charge you after you accept a final offer
								from the insurance agency.
							</li>
						</ul>
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default MoneyPartSection;
