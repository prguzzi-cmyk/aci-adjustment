import Link from 'next/link';
import { Row, Col, Card, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text } = Typography;

const FaqSection = () => {
	return (
		<div className='faq-container'>
			<Title level={3} className='title'>
				<Text>Frequently</Text> asked <Text>Questions</Text>
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='faq-queue'
					component={Col}
					componentProps={{
						md: { offset: 2, span: 20 },
						className: 'full-head',
					}}
					{...config.QueueAnim({})}
				>
					<Card
						key='1'
						title='My insurance claim was denied.  Is there anything I can do?'
						bordered={false}
					>
						Yes. We successfully overturn denials every day. Often, the
						insurance company will deny a claim over the phone, will determine
						the wrong cause of loss, or deny the claim because the damage
						doesn't meet the deductible. Whatever the case, ACI Adjustment Group
						may be able to get you covered.
					</Card>

					<Card
						key='2'
						title='How is ACI Adjustment Group able to help prevent you from having your claim denied?'
						bordered={false}
					>
						ACI Adjustment Group estimates the full scope of work for what you
						are entitled to in your policy - full indemnity. Full indemnity
						means restoring your home to the same condition, function,
						appearance, and value that it was before the loss occurred.
					</Card>

					<Card
						key='3'
						title='Can the insurance company deny my claim over the phone?'
						bordered={false}
					>
						Yes. We have handled numerous claims that were denied for
						"maintenance" over the phone, and then had those denials overturned
						after our inspection. Also, the insurance company's representative
						may determine the cause of loss as not covered if the homeowner
						reports the damages as "flood," "mold" or another peril that is not
						a covered cause of loss.
					</Card>

					<Card
						key='4'
						title='My insurance company denied my claim by saying that the damage was a maintenance issue.  Are they allowed to do this?'
						bordered={false}
					>
						Maintenance is not covered under homeowners insurance. However, most
						insurance company adjusters are trained to spot maintenance issues
						and deny claims. We have had many of these denials overturned. On
						several occasions, a property owner had the insurance company assess
						and deny their claim 2-3 times before we were contacted, and we were
						able to overturn the denial.
					</Card>

					<Card
						key='5'
						title='My insurance company denied my claim because the damage did not meet the deductible.  Is there anything I can do?'
						bordered={false}
					>
						Yes. Denying a claim because it doesn't meet the deductible is one
						of the most common tactics the insurance companies use to prevent a
						"Bad Faith Lawsuit." These claims are easy for us to overturn,
						because they are not a coverage issue, but an issue of scope. We'll
						often turn a "patch job" into a whole room.
					</Card>

					<Card
						key='6'
						title='How do I reopen a denied claim?'
						bordered={false}
					>
						You can start a claim online by clicking{' '}
						<Link href={dataset.router.fileClaim.path}>
							<a>HERE</a>
						</Link>
						{' or call '}
						<Link href={`tel:${dataset.general.phone}`} strong>
							<a>{dataset.general.phoneFormatted}</a>
						</Link>{' '}
						to have an expert inspect your damage first, free of charge.
					</Card>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default FaqSection;
