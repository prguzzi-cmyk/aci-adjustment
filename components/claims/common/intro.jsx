import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Other <Text>Common</Text> Claims
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'middle',
					align: 'center',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 22,
					}}
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						When most people think of property insurance claims they think of
						one of three perils: fire, flood, or a tree falling on their
						property. Along with handling the claims process start to finish,
						ACI Adjustment Group strives to educate the general public on the
						fine print included in the policies they pay thousands for annually.
						Every year, there are millions of dollars left on the table that
						insureds did not realize they had access to. This money is due to
						property owners through the principle of indemnity. With our free
						property inspection and policy consultations, an ACI professional
						will be able to identify potential claims and evaluate contractual
						coverages.
					</Paragraph>

					<Paragraph key='2'>
						Some examples of other common claims that many would overlook
						include: Collapse, oil heater puff back, soot damage, theft and/or
						vandalism, and damaged flooring.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
