import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const HelpAnyStageSection = ({ community }) => {
	return (
		<div className='help-any-stage-container'>
			<Title level={4} className='title'>
				<Text>Helping You</Text> At Any Stage
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='help-any-stage-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						ACI is a licensed and registered public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}
						company and we can legally help you at any stage along with the
						claim. Even if you've already been given an offer from the insurer.
					</Paragraph>

					<Paragraph key='2'>
						For such cases, we re-document and cross-reference every issue
						related to your insurance claim. We look for the things that were
						not included and the ones that were not given due consideration.
					</Paragraph>

					<Paragraph key='3'>
						Some of the most common areas where insurance companies can cut
						corners in a claim include:
					</Paragraph>

					<Paragraph key='4'>
						<ul>
							<li>
								Insurance companies can sometimes withhold an extra 20% of your
								claim amount in the name of operation and profit. Most of the
								homeowners do not know that the insurer is not entitled to
								withhold this expense if the work is completed by a general
								contractor.
							</li>

							<li>
								Insurers can sometimes withhold moving time, the time needed to
								move all the stuff out of a room before starting the repair
								procedure.
							</li>

							<li>
								Most of the time insurance companies tend to 'ignore' the need
								for two coats of paint or a coat of primer before the paint is
								applied.
							</li>

							<li>
								Insurance companies can omit the extra charges like
								mobilization, site preparation, delivery, and others.
							</li>

							<li>
								Emergency costs and overheads caused at the time of the loss are
								often overlooked. These include the things like dislocating from
								the residence at the time of the damage and other emergency
								services required at that time.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='5'>
						As one of the leading public adjusters
						{community &&
							community.Community &&
							community.Community.S &&
							` in ${community.Community.S}`}
						, ACI believes in getting you the settlement for every last cent
						that you might have spent.
					</Paragraph>

					<Paragraph key='6'>
						These are just some of the cases. The actual claim and repair bill
						is a totally different story. There are more things to an insurance
						claim than you can imagine.
					</Paragraph>

					<Paragraph key='7'>
						ACI has a team of specialist public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}
						agents who have dealt with thousands of insurance claim cases and
						know the thing inside out.
					</Paragraph>

					<Paragraph key='8'>
						Taking into account these costs and others, we can help you get
						thousands of dollars more than your initial offer.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default HelpAnyStageSection;
