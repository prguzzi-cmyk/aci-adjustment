import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Water</Text> Claims
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
						Water related insurance claims are one of the most frequent claims
						ACI Adjustment Group deals with. Whether it’s a burst pipe, sewage
						overflow, or storm damage, water can cause extensive structural and
						health related damage to a home or a business and its occupants. If
						not properly mitigated, water damage can lead to more adverse losses
						such as mold and spore growth. ACI Adjustment Group works closely
						with restoration specialists that will be able to help mitigate
						damages and restore your home or business to its pre loss condition.
					</Paragraph>

					<Paragraph key='2'>
						The majority of home and business owners will only have one major
						claim in their life – or no claims at all. Make sure you are
						protected! At ACI Adjustment Group, we are familiar with how
						insurance companies approach and handle water related claims. By
						utilizing our extensive experience in claim settlement, our goal is
						to help property owners like you maximize your claim payout with any
						water damage you experience.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
