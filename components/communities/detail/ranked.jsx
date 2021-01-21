import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const RankedSection = () => {
	return (
		<div className='ranked-container'>
			<Title level={2} className='title'>
				<Text>#1</Text> in Customer Service & Satisfaction
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim key='ranked-queue' {...config.QueueAnim({})}>
					<Paragraph key='1'>
						<blockquote>
							Insurance companies, unfortunately, take advantage of the
							emotional response many people experience after a loss, but
							Insurance Public Adjusters can help get customers what they
							deserve.
						</blockquote>
						<br />
					</Paragraph>

					<Paragraph key='2'>
						ACI Adjustment Group is ranked #1 in Customer Service &
						Satisfaction. We maximize your claim and expedite the process to
						help you repair your property quickly.
						<br />
						<br />
					</Paragraph>

					<Paragraph key='3'>
						<b>Don’t settle for less than your FULL insurance payout!!</b>
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
