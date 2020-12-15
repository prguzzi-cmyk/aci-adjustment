import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Request a <Text>FREE</Text> policy review
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim {...config.QueueAnim({})}>
					<Paragraph key='1'>
						Fill out the information to your left to request a FREE policy
						review.
					</Paragraph>

					<Paragraph key='2'>
						A Public Adjuster can answer many questions about your coverage,
						damages to your property, claim questions, questions about the
						claims process, questions about hiring a contractor.
					</Paragraph>

					<Paragraph key='3'>
						Public Adjuster will even do a complimentary FREE property
						inspection to see if you have covered damages to your property.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
