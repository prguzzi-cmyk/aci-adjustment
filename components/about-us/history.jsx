import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const HistorySection = () => {
	return (
		<div className='history-container'>
			<Title level={2} className='title'>
				Our <Text>History</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='history-content-queue'
					component={Row}
					componentProps={{
						justify: 'middle',
						align: 'center',
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' md={22}>
						From our humble beginnings to our national expansion, ACI Adjustment
						Group has grown along with our repeat customers. ACI Estate Inc. was
						initially started in 2004 and originally began with a senior home
						checkup program called “Home CheckUp.” This program was designed to
						keep senior citizen’s homes safe and secure and to additionally find
						any damage to their property that was unknown to them. This rapidly
						grew to what we know today as ACI Adjustment Group, a company with
						international ambitions and clients from coast to coast.
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default HistorySection;
