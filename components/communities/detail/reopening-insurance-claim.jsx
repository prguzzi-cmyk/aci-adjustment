import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const ReopeningInsuranceClaimSection = () => {
	return (
		<div className='reopening-insurance-claim-container'>
			<Title level={3} className='title'>
				<Text>Reopening</Text> Insurance Claims
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='reopening-insurance-claim-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						Did you know you could get additional benefits even after the claim
						was settled by the insurer?
					</Paragraph>

					<Paragraph key='2'>
						This is because the insurance companies tend to miscalculate the
						extent of the loss incurred by your property.
					</Paragraph>

					<Paragraph key='3'>
						By looking at the details of the losses your property has had and
						the ones you were compensated for, ACI can get you more money even
						after the claim has been closed.
					</Paragraph>

					<Paragraph key='4'>
						If that looks to be too good to be true, ACI has handled hundreds of
						such cases in which we have re-evaluated the case and found out that
						the property owners were entitled to more than they were paid.
					</Paragraph>

					<Paragraph key='5'>
						If you are worried about having to pay ACI only to find you don't
						get any more settlement, you could not be more wrong. We only get
						paid once it is discovered that there were areas where you were
						underpaid and after you get due compensation for that.
					</Paragraph>

					<Paragraph key='6'>
						Here are some of the laws about reopening insurance cases after the
						claim has been settled.
					</Paragraph>

					<Paragraph key='7'>
						<ul>
							<li>
								Most of the states allow homeowners to reopen an insurance case
								within one year of the loss.
							</li>

							<li>
								You can reopen an insurance case even after you have been issued
								a claim check.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='8'>
						But how can the insurance amount increase?
					</Paragraph>

					<Paragraph key='9'>
						This is mainly because the initial adjustment is often issued based
						on the preliminary inspection.
					</Paragraph>

					<Paragraph key='10'>
						There can be a number of new variables that come forth only once
						work on the repair starts.
					</Paragraph>

					<Paragraph key='11'>
						The law allows you to reopen the case so that you get the
						compensation you deserve and you are entitled to.
					</Paragraph>

					<Paragraph key='12'>
						There are also some additional costs that you are entitled to. These
						might be overlooked by the insurance adjusters but you can reopen
						the case to get these. These include:
					</Paragraph>

					<Paragraph key='13'>
						<ul>
							<li>Architectural fees.</li>

							<li>Permit costs.</li>

							<li>
								Code upgrades that might be mandated by the local code inspector
								after the repair.
							</li>

							<li>
								If the repair works result in a higher electrical bill that
								might also be covered by the insurance.
							</li>

							<li>
								You might also be entitled to a final house cleaning after the
								repair is complete.
							</li>
						</ul>
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default ReopeningInsuranceClaimSection;
