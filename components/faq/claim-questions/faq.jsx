import Link from 'next/link';
import { Row, Col, Card, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const FaqSection = () => {
	return (
		<div className='faq-container'>
			<Title level={2} className='title'>
				Questions about your <Text>Claim</Text>
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
					<Card key='1' title='How long will my claim take?' bordered={false}>
						The average claim takes anywhere from 3 weeks to 2 months to process
						completely, however some claims do take more time for various
						reasons including disagreements on claim payment, coverage, scope
						etc. If construction, repairs, demolition or clean-up are required,
						the insurance company will not give a final evaluation until it has
						been completed. The amount of time a claim takes to process
						completely also depends on the amount of damage to the property and
						the circumstances of the claim. For a better idea of how long your
						claim would take to process, please give us a call at{' '}
						<Link href={`tel:${dataset.general.phone}`}>
							<a>{dataset.general.phoneFormatted}</a>
						</Link>
						and ask an expert!
					</Card>

					<Card
						key='2'
						title='How do I get a status update on my claim?'
						bordered={false}
					>
						Call our customer service hotline,{' '}
						<Link href={`tel:${dataset.general.phone}`}>
							<a>{dataset.general.phoneFormatted}</a>
						</Link>{' '}
						to get an immediate answer to any question you have regarding your
						claim.
					</Card>

					<Card
						key='3'
						title='I received a check from ACI Adjustment Group.  What should I do with it?'
						bordered={false}
					>
						When you receive a letter from ACI Adjustment Group with a check
						from ACI Adjustment Group and a breakdown of your claim payment
						summary enclosed, you can deposit the check into your bank account
						right away! You do not need to meet any further payment obligations
						for that settlement check. How you choose to use your settlement is
						up to you. You can choose the contractor, choose the amount of work
						you think will need to be completed, or even fix your damage
						yourself!
					</Card>

					<Card
						key='4'
						title="I received a check from the insurance company with ACI Adjustment Group's name on it. How do I submit it to ACI Adjustment Group for processing?"
						bordered={false}
					>
						All mail from the insurance company is supposed to be forwarded
						directly to our administrative office, however sometimes the
						insurance company will accidentally mail the check to the homeowner.
						If you receive the initial settlement, send the check to the address
						below:
						<br />
						<br />
						<Paragraph>{`${dataset.general.name} ${dataset.general.tagline}`}</Paragraph>
						<Paragraph>{dataset.general.address}</Paragraph>
					</Card>

					<Card
						key='5'
						title='I received a payment with "Recoverable Depreciation."  What does that mean?'
						bordered={false}
					>
						If you received a payment summary and a check from ACI Adjustment
						Group that had "Recoverable Depreciation" as a line item in our
						payment breakdown, you have more money due to you for your claim!
						Sometimes the insurance company will withhold a portion of the claim
						until work is actually completed to restore the damaged property.
						You will simply need to hire a contractor and submit an invoice to
						recover the amount withheld by the insurance company.
					</Card>

					<Card
						key='6'
						title='I have hired a contractor and received invoices for my "Recoverable Depreciation.”  How should I submit them to ACI Adjustment Group?'
						bordered={false}
					>
						You can submit invoices via email, fax, or mail. You can{' '}
						<Text>Fax</Text> the invoices to{' '}
						<Text>{dataset.general.faxFormatted}</Text>. You can{' '}
						<Text>Email</Text> the invoices to our claim processing manager at{' '}
						<Link href={`mailto:${dataset.emails.claim.email}`}>
							<a>{dataset.emails.claim.email}</a>
						</Link>
						{}. Or you can mail the invoice to the address below:
						<br />
						<br />
						<Paragraph>{`${dataset.general.name} ${dataset.general.tagline}`}</Paragraph>
						<Paragraph>{dataset.general.address}</Paragraph>
					</Card>

					<Card
						key='7'
						title='I received a letter from my insurance company stating that they were attempting to get in contact with ACI Adjustment Group.  What should I do?'
						bordered={false}
					>
						Rest assured that we have been in contact with your insurance
						company. Just as we document all phone calls, emails, and
						appointments, and follow them up with a letter, so do the insurance
						companies. If we received a voicemail from your insurance company's
						adjuster and have not followed up with them by the end of the day,
						some companies will send a letter. Most likely by the time the
						letter arrives at your home and our office, we have already been in
						contact with the insurance company's adjuster.
					</Card>

					<Card
						key='8'
						title='I received a letter from my insurance company saying that my claim is denied.  What should I do?'
						bordered={false}
					>
						Sometimes the insurance company will initially deny the claim upon
						submission, however we have a proven track record of overturning
						complete and partial denials. If your claim was initially denied
						because it did not meet the deductible, we will negotiate for a
						higher scope of work. There are also other solutions to resolve
						coverage disputes without hiring an attorney out-of-pocket.
					</Card>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default FaqSection;
