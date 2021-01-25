import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Our <Text>Mission</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='intro-content-queue'
					component={Row}
					componentProps={{
						justify: 'middle',
						align: 'center',
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' md={22} className='text-xs-justify'>
						Our mission at ACI Adjustment Group is to protect the policyholder.
						Many home and business owners are unaware that they have thousands
						of dollars that are rightfully due to them. Millions of dollars are
						left on the table and not paid each year by the insurance companies
						to homeowners and business owners due to a lack of knowledge and
						expertise! Along with assisting with claims, we are also dedicated
						to bringing awareness and educating the general public on the
						various coverages included in their policy. ACI Adjustment Group is
						here to help.
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
