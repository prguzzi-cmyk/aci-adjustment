import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const NewInsuranceClaimSection = ({ community }) => {
	return (
		<div className='new-insurance-claim-container'>
			<Title level={3} className='title'>
				New Insurance Claims - Public Adjuster{' '}
				{community &&
					community.Community &&
					community.Community.S &&
					`${community.Community.S} (${community.ZipCode.S}) `}
				can <Text>Maximize the Payout</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='new-insurance-claim-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						If your insured property has sustained any damage within the last
						year and you have not yet filed a claim, your case falls into the
						category of new insurance claims.
					</Paragraph>

					<Paragraph key='2'>
						If that is the case with you, it is in your own best interest to
						call a public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}
						like ACI Adjustment Group today.
					</Paragraph>

					<Paragraph key='3'>
						We offer free policy review and preliminary inspection. This will
						include finding out what is covered under the insurance policy you
						have, and how using our services can be beneficial for you.
					</Paragraph>

					<Paragraph key='4'>
						It is important to get professional help in this regard because
						there are things that a policyholder is required to accomplish in
						order to be entitled to an insurance claim. Having a professional
						team on your side will ensure that you don’t lack any of the
						requirements.
					</Paragraph>

					<Paragraph key='5'>
						There are some common mistakes that homeowners do that decrease
						their chances of getting proper insurance compensation.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default NewInsuranceClaimSection;
