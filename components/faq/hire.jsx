import { List, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const data = [
	'What does a Public Adjuster do?',
	'Why should I hire a Public Adjuster?',
	'How does a Public Adjuster get me a higher settlement?',
	'How do I choose the right Public Adjuster?',
	'What are the risks of hiring the wrong Public Adjuster?',
	'What are the risks of handling my claim on my own?',
	'Why should I choose ACI Adjustment Group?',
	'What insurance companies does ACI Adjustment Group work with?',
];

const HireSection = () => {
	return (
		<div className='hire-container'>
			<Title level={2} className='title'>
				<Text>Hiring</Text> a Public Adjuster
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim component={List} {...config.QueueAnim({})}>
					{data.map((item, index) => {
						return <List.Item key={index}>{item}</List.Item>;
					})}
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default HireSection;
