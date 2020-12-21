import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Commercial Property</Text> Claims
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
						ACI Adjustment Group specializes in large-scale residential and
						commercial losses. We understand that as the owner, association
						manager, or member of the board of directors, you may be responsible
						for filing and managing an insurance claim that may involve dozens
						of residents. Handling an insurance claim for a large residential or
						commercial property on your own can be incredibly overwhelming and
						can often lead to less than a fair claim settlement. Are you
						familiar with the fine print regarding your insurance policy's
						complex guidelines and its time-sensitive procedures? If not, it is
						in the best interest of you and your organization to hire ACI
						Adjustment Group to handle your claim.
					</Paragraph>

					<Paragraph key='2'>
						Your insurance company will send seasoned adjusters to your property
						on their behalf to assess your loss. When this occurs, realize that
						the insurance company's adjuster serves the best interest of the
						insurance company. In order to combat a low-ball settlement, partial
						denial, or even complete denial, you will need assistance. Along
						with a team of appraisers and attorneys, ACI will send out
						experienced public adjusters to ensure you receive a fair claims
						settlement.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
