import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Text } = Typography;

const FooterCopyright = () => {
	return (
		<OverPack
			componentProps={{
				className: 'copyright-container',
			}}
			{...config.OverPack({ playScale: config.PlayScale.noScale })}
		>
			<Row gutter={[10, 30]}>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 24,
					}}
					key='queue'
					{...config.QueueAnim({})}
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
