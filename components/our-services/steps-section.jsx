import { useState } from 'react';
import { Typography, Steps } from 'antd';
import {
	PhoneOutlined,
	DollarOutlined,
	SmileOutlined,
} from '@ant-design/icons';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

import '../../styles/modules/our-services.less';

const { Title, Text, Link } = Typography;
const { Step } = Steps;

const StepsSection = () => {
	const [current, setCurrent] = useState(0);

	const steps = [
		{
			content: (
				<Title level={3} key='1'>
					Call{' '}
					<Link href={`tel:${dataset.general.phone}`} strong>
						{dataset.general.phoneFormatted}
					</Link>{' '}
					for a <Text>FREE</Text> damage evaluation
				</Title>
			),
		},
		{
			content: (
				<Title level={3} key='2'>
					Let ACI <Text>estimate</Text> and <Text>negotiate</Text>
				</Title>
			),
		},
		{
			content: (
				<Title level={3} key='3'>
					Get your <Text>settlement</Text>!
				</Title>
			),
		},
	];

	const onChange = (current) => {
		setCurrent(current);
	};

	return (
		<div className='steps-container'>
			<Title level={2} className='steps-title'>
				ACI's <Text>EASY</Text> 3-step claim process
			</Title>

			<OverPack className='steps-content' {...config.OverPack({})}>
				<QueueAnim
					component={Steps}
					componentProps={{
						type: 'navigation',
						current: current,
						onChange: onChange,
					}}
					key='queue'
					{...config.QueueAnim({ duration: 200 })}
				>
					<Step key='1' title='Call' icon={<PhoneOutlined />} />
					<Step key='2' title='Estimate' icon={<DollarOutlined />} />
					<Step key='3' title='Settlement' icon={<SmileOutlined />} />
				</QueueAnim>

				<QueueAnim
					className='step-content'
					key='queue'
					{...config.QueueAnim({
						type: 'top',
						duration: 200,
						ease: ['easeInQuad', 'easeOutQuad'],
					})}
				>
					{steps[current].content}
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default StepsSection;
