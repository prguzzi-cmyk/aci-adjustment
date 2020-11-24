import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const { Text } = Typography;

const FooterCopyright = ({ packConfigs }) => {
	return (
		<OverPack
			componentProps={{
				className: 'copyright-container',
			}}
			playScale={packConfigs.OverPack.playScaleZero}
		>
			<Row gutter={[10, 30]}>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 24,
					}}
					key='queue'
					type='bottom'
					leaveReverse
					interval={50}
				>
					<Text>
						&#169;2020, ACI Adjustment&#8482; &#124; ALL RIGHTS RESERVED
					</Text>
				</QueueAnim>
			</Row>
		</OverPack>
	);
};

export default FooterCopyright;
