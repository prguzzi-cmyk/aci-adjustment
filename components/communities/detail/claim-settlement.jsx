import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const ClaimSettlementSection = ({ community }) => {
	return (
		<div className='claim-settlement-container'>
			<Title level={3} className='title'>
				Insurance Claim <Text>Settlement</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='claim-settlement-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						As a public adjuster
						{community &&
							community.Community &&
							community.Community.S &&
							` ${community.Community.S}`}{' '}
						service provider, the main focus of ACI is to address all your
						property damage insurance claim needs as and when they arise.
					</Paragraph>

					<Paragraph key='2'>
						We believe that every property insurance claim case is a unique one
						and we address every case the way it needs to be tackled.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default ClaimSettlementSection;
