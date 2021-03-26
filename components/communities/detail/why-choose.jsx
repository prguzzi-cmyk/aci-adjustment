import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const WhyChooseSection = () => {
	return (
		<div className='why-choose-container'>
			<Title level={2} className='title'>
				What Makes a <Text>Public Adjuster</Text> A Good One?
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='why-choose-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						There are some metrics that you can look for in a public adjuster to
						make sure they are good for the task you are going to assign them.
					</Paragraph>

					<Paragraph key='2'>These parameters include:</Paragraph>

					<Paragraph key='3'>
						<ul>
							<li key='1'>The level of customer service.</li>

							<li key='2'>How many states the company operates in.</li>

							<li key='3'>
								What are the reviews of the previous customers about them?
							</li>

							<li key='4'>How fast they are growing as a business.</li>
						</ul>
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WhyChooseSection;
