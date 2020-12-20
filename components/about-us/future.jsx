import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const FutureSection = () => {
	return (
		<div className='future-container'>
			<Title level={2} className='title'>
				Our <Text>Future</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='future-content-queue'
					component={Row}
					componentProps={{
						justify: 'middle',
						align: 'center',
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' md={22}>
						Along with the progression of national expansion, a substantial
						project we are developing is ACI Adjustment Group’s proprietary
						estimating software. This estimating program utilizes and updates
						the most current and accurate pricing of goods and services and is
						based on thirteen different categories which include hundreds of
						thousands of specific variations. Our software will include each and
						every type of potential property damage. All the way from multi
						million dollar commercial properties to your backyard shed, we have
						you covered. ACI is also a pioneer in internet adjusting with goals
						to be able to handle any claim, anywhere in the world. In addition,
						two future goals of ours are to bring ACI Adjustment Group public
						and service clients on an international scale.
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default FutureSection;
