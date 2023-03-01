import { useState } from 'react';
import {
	Steps,
	Button,
	Card,
	Row,
	Col,
	message,
	Typography,
	Select,
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Layout from '../layouts/default';

import config from '../utils/config';
import dataset from '../utils/datasets/bootstrap';
import { statesList, steps } from '../utils/datasets/become-adjuster';

require('../styles/modules/how-to-become-adjuster.less');

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

export default function HowToBecomeAdjuster() {
	const LayoutConfig = {
		title: dataset.router.becomeAdjuster.label,
		description: 'The steps for obtaining your required license.',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.becomeAdjuster.label,
		},
		breadcrumb: [dataset.router.becomeAdjuster],
		className: dataset.router.becomeAdjuster.key,
	};

	const [current, setCurrent] = useState(0);
	const [stepState, setStepState] = useState(statesList[0].value);

	const onChange = (value) => {
		setCurrent(value);
	};

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const items = steps[stepState].map((item) => (
		<Step
			key={item.title}
			title={item.title}
			description={item.description}
		></Step>
	));

	const handleSelectChange = (value) => {
		setStepState(value);
		setCurrent(0);
	};

	return (
		<Layout {...LayoutConfig}>
			<div className='steps-container'>
				<Title level={2} className='title'>
					The steps for obtaining your <Text>required License</Text>
				</Title>

				<OverPack
					component={Row}
					componentProps={{
						className: 'content',
						justify: 'middle',
						align: 'center',
					}}
					{...config.OverPack({})}
				>
					<QueueAnim
						key='intro-content-queue'
						component={Col}
						componentProps={{
							md: 22,
						}}
						{...config.QueueAnim({})}
					>
						<Paragraph className='intro-p'>
							The first step that you will take is completing your state
							licensing test. Here are the steps for obtaining your required
							license:
						</Paragraph>

						<Card className='state-form'>
							<Row gutter={[16, 16]} justify='space-around' align='middle'>
								<Col flex={2} className='label'>
									Please select your state:
								</Col>

								<Col flex={3}>
									<Select
										showSearch
										defaultValue={statesList[0].value}
										onChange={handleSelectChange}
										filterOption={(input, option) =>
											(option?.label ?? '')
												.toLowerCase()
												.includes(input.toLowerCase())
										}
										filterSort={(optionA, optionB) =>
											(optionA?.label ?? '')
												.toLowerCase()
												.localeCompare((optionB?.label ?? '').toLowerCase())
										}
										options={statesList}
									/>
								</Col>
							</Row>
						</Card>

						<Steps current={current} onChange={onChange}>
							{items}
						</Steps>

						<div>{steps[stepState][current].content}</div>

						<div style={{ marginTop: 24 }}>
							{current < steps[stepState].length - 1 && (
								<Button type='primary' onClick={() => next()}>
									Next Step
								</Button>
							)}
							
							{current === steps[stepState].length - 1 && (
								<Button
									type='primary'
									onClick={() =>
										message.success(
											'Congratulations! You have completed all the required steps.'
										)
									}
								>
									Done
								</Button>
							)}

							{current > 0 && (
								<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
									Previous Step
								</Button>
							)}
						</div>
					</QueueAnim>
				</OverPack>
			</div>
		</Layout>
	);
}
