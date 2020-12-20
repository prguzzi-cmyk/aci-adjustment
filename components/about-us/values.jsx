import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const ValuesSection = () => {
	return (
		<div className='values-container'>
			<Title level={2} className='title'>
				Our <Text>Values</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='values-content-queue'
					component={Row}
					componentProps={{
						justify: 'middle',
						align: 'center',
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' md={22}>
						ACI Adjustment Group embodies the values of honesty, integrity, and
						above all else the experience and satisfaction of our customers. We
						strive to make sure our clients receive the settlement they need to
						make necessary repairs. We work around the clock to ensure that we
						can settle our claims as quickly as possible, while still recovering
						a maximum settlement - and we keep YOU informed along the way.
						Transparency paired with a personalized experience ensures each and
						every one of our clients has the peace of mind they deserve.
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default ValuesSection;
