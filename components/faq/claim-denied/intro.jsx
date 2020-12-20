import { Typography } from 'antd';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/general';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Why did my insurance <Text>claim get denied</Text>?
			</Title>

			<OverPack
				className='content'
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim key='intro-content-queue' {...config.QueueAnim({})}>
					<Paragraph key='1'>
						If you’re like many homeowners, you know that filing a claim with
						your insurance company can be frustrating. For many homeowners, the
						time and stress involved with dealing with the insurance company
						makes filing a claim not worth it – especially when you are likely
						to get denied or severely under-compensated.
					</Paragraph>

					<Paragraph key='2'>
						Here’s what happens when most homeowners file a claim with their
						insurance company:
					</Paragraph>

					<ol key='3'>
						<li>
							You talk with the machine for the first several minutes until you
							are put on hold with cheesy hold music, often interrupted by
							advertisements for new insurance policies
						</li>

						<li>
							When you finally get a hold of a customer service representative,
							they thoroughly interrogate you about your claim to find a reason
							for denial – “Why didn’t you report your loss sooner?” or “Was
							your roof properly maintained?”
						</li>

						<li>
							After providing a summary of your claim, many insurance companies
							train their first contact representatives to discourage you from
							pursuing a claim. They tell you it may not be worth it with your
							rate increase, or that the damage may not exceed your deductible.
						</li>

						<li>
							When the insurance adjuster comes out to inspect your damages,
							many times his or her primary objective is to keep their job at
							the insurance company rather than pay you fairly. Many times the
							insurance adjuster will deny the claim for being worth less than
							your deductible.
						</li>

						<li>
							If you do finally receive a settlement, you find that it is not
							anywhere near what you had hoped for, and you will not be able to
							pay your contractor to fix your damages. So why do so many
							homeowner claims get denied? Here are several reasons:
							<br />
							<br />
							<ol type='a'>
								<li>
									Insurance companies like to pay out for patch-work, which
									often does not exceed the deductible.
								</li>

								<li>
									Insurance companies pay on wholesale value rather than retail
									value – and don’t factor in the profit, overhead, and sales
									tax that a contractor will charge you for.
								</li>

								<li>
									The insurance company got you to say the wrong thing. For
									example, many homeowners have called to report a “flood” in
									their bathroom and were denied by homeowners insurance. Why?
									“flood” is not covered under the homeowners policy. What
									really happened was an overflow or leak, but because the
									homeowner used the word “flood” on the phone, they were
									denied.
								</li>

								<li>
									They talked you out of it. Many times the insurance company’s
									representatives will make you feel guilty or unjustified in
									putting in a claim. Realize that insurance is big business,
									and unfortunately many times the client’s priorities take a
									back seat to the bottom line of the company.
								</li>
							</ol>
						</li>
					</ol>

					<Paragraph key='4'>
						What’s the solution? Hire a Public Adjuster like ACI Adjustment
						Group, ranked #1 by the United Public Adjusters Association for
						Customer Service and Satisfaction in PA & NJ. ACI Adjustment Group
						is a team of professional Public Adjusters who are licensed and
						bonded to negotiate your claim with the insurance company. They know
						how to present your damages, how to negotiate your policy, and how
						to estimate the true cost of restoring your property to its pre-loss
						condition.
					</Paragraph>

					<Paragraph key='5'>
						When you hire ACI Adjustment Group for your claim, you are hiring a
						team of individuals with decades of experience in the fields of
						insurance and home construction and inspection.
					</Paragraph>

					<Paragraph key='6'>
						Many times homeowners hire a contractor to “patch it up,” and don’t
						find out how much it devalues their home until their home is up for
						sale. ACI Adjustment Group’s scope of damages includes all materials
						and labor needed to get your replacement job done right! ACI
						Adjustment Group thoroughly negotiates your claim from start to
						finish. Most homeowners are not well-versed on their policy, home
						construction, and how to negotiate their settlement. Through a
						series of appointments, letters, e-mails, and phone calls, ACI
						Adjustment Group fights for homeowners like you to receive fair
						settlements.
					</Paragraph>

					<Paragraph key='7'>
						ACI Adjustment Group performs FREE Property Inspections to qualify
						if your damage is worth pursuing or not. ACI Adjustment Group has an
						exclusive NO FEE GUARANTEE – meaning that you pay no money out of
						pocket at any time and if no money is recovered, no fee is owed!
					</Paragraph>

					<Paragraph key='8'>
						To schedule a FREE Property Inspection, call{' '}
						<Link href={`tel:${dataset.general.phone}`} strong>
							<a>{dataset.general.phoneFormatted}</a>
						</Link>
						. ACI Adjustment Group is available for Emergency Services 24
						hours/day, 7 days/week.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
