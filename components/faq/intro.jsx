import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Frequently Asked Questions
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					component={Row}
					componentProps={{
						gutter: [0, 25],
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' offset={4} md={16}>
						Do you have a question about your claim? You'll find all of your
						claim answers on ACI Adjustment Group's FAQ page! Do you have damage
						and want to find out more about the claim process? You'll find all
						of your claim answers on ACI Adjustment Group's FAQ page!
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
