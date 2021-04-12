import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const CommonMistakesSection = ({ community }) => {
	return (
		<div className='common-mistakes-container'>
			<Title level={4} className='title'>
				<Text>Common Mistakes</Text> Made by Homeowners
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='common-mistakes-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						<ul>
							<li key='1'>
								Not understanding the cause of the damage. If you misinterpret
								the cause of the damage to your property, your claim might get
								rejected.
							</li>

							<li key='2'>
								Failure to grasp the extent of the loss can lead to improper or
								incomplete claim payment.
							</li>

							<li key='3'>
								Failing to properly document the loss sustained by the property
								can lead to underpayment.
							</li>

							<li key='4'>
								Relying too much on contractors who do not have sufficient
								experience in insurance cases can also lead to underpayment or
								denial of the claim.
							</li>

							<li key='5'>
								Failing to fulfill the obligations demarcated by the insurance
								policy resulting in the denial of the claim.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='2'>
						All of these and other blunders can be avoided by having someone
						with experience in the field helping you. As one of the leading
						public adjusters
						{community &&
							community.Community &&
							community.Community.S &&
							` in ${community.Community.S}`}
						, ACI can do just that.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default CommonMistakesSection;
