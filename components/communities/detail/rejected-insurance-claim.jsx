import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const RejectedInsuranceClaimSection = ({ community }) => {
	return (
		<div className='rejected-insurance-claim-container'>
			<Title level={3} className='title'>
				<Text>Rejected</Text> Insurance Claims
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='rejected-insurance-claim-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						Insurance claim rejection happens more often than you think and it
						is not the dead end. Sometimes courts mandate the insurer to
						reconsider the case and sometimes you don't even need the court.
					</Paragraph>

					<Paragraph key='2'>
						It is a fact that most of the time an insurance claim being rejected
						by an insurance agency is an error that can be corrected.
					</Paragraph>

					<Paragraph key='3'>
						If your insurance claim was rejected within the past year, you do
						not even have to go to the court.
					</Paragraph>

					<Paragraph key='4'>
						Just consult ACI and we will have a look at the case and all the
						variables.
					</Paragraph>

					<Paragraph key='5'>
						If our public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}
						agents feel that the case being rejected was an error and that it
						can be presented again, we can do that for you.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default RejectedInsuranceClaimSection;
