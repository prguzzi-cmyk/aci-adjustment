import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const PendingInsuranceClaimSection = ({ community }) => {
	return (
		<div className='pending-insurance-claim-container'>
			<Title level={3} className='title'>
				<Text>Pending</Text> Insurance Claims
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='pending-insurance-claim-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						If you have already filed an insurance claim and have now realized
						that you made a blunder in it, ACI can still help.
					</Paragraph>

					<Paragraph key='2'>
						We can represent you in front of the insurance provider and work to
						make sure your claim gets resolved as soon as possible.
					</Paragraph>

					<Paragraph key='3'>
						As the insurance companies have hundreds or even thousands of claims
						being processed at a time, it is possible that yours might get
						neglected. Our public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}
						agents make sure that your claim is given the due attention and is
						resolved in the minimum time, and that you get the highest possible
						compensation against it.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default PendingInsuranceClaimSection;
