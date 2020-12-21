import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Fire</Text> & <Text>Smoke</Text> Claims
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'middle',
					align: 'center',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 22,
					}}
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						A fire loss of any type can be a devastating experience for home and
						business owners alike. The stress of a catastrophe makes navigating
						the intricate process of filing an insurance claim seem impossible
						to many. Adding to the stress, quick and accurate decisions are
						required and imperative for receiving a fair claim settlement.
						Deadlines referencing restoration contracts and a plethora of other
						required information often affect a fair claim settlement down the
						road. At ACI, it is our goal to help families and businesses restore
						their property and lives.
					</Paragraph>

					<Paragraph key='2'>
						Even the most basic insurance policies have some extent of fire
						damage. According to FEMA, the most common causes of fire damage in
						the U.S. are due to cooking accidents, heating units, unintentional
						carelessness, electrical fires, and open flames. Many times, your
						insurance provider will advise that a fire or smoke claim is not
						worth it due to your deductible. At ACI, our state licensed and
						bonded adjusters will make sure to include smoke and soot damage in
						your claim. Smoke and soot can and will cause extensive damage to
						your home, business, and its occupants. Additionally, any damage to
						the property caused by water or other substances used to extinguish
						and deplete will be included in your claim.
					</Paragraph>

					<Paragraph key='3'>
						While negotiating your claim, ACI adjusters understand the
						importance of all these factors and will account for this when
						assessing the scope and damage of a fire loss. ACI will handle the
						entire process from start to finish and will photograph, catalog,
						document the extent of damage to the structure and the contents of
						your property, and the loss of business income or resources of your
						business or residence.
					</Paragraph>

					<Paragraph key='4'>
						Through indemnity, our goal is to assist in bringing your property
						to its pre-loss condition. At ACI Adjustment Group, we work with
						teams of engineers, appliance and electronics technicians,
						appraisers, restoration specialists, and attorneys to ensure a
						maximum settlement. ACI expert adjusters will spearhead these
						efforts and handle any coverage disputes or discrepancies that arise
						in your claim.
					</Paragraph>

					<Paragraph key='5'>
						During a disaster such as fire, ACI Adjustment Group is here to
						help! We work for you, the insured, and help minimize your burden
						while maximizing your claim!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
