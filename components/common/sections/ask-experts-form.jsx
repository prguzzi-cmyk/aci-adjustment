import { Row, Col, Typography, Form, Input, Select, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
		md: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 12 },
		md: { span: 12 },
	},
};

const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const AskExpertsSection = ({ title = '' }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const prefixSelector = (
		<Form.Item name='prefix' noStyle>
			<Select style={{ width: 70 }}>
				<Option value='1'>+1</Option>
			</Select>
		</Form.Item>
	);

	return (
		<div className='ask-experts-container'>
			<Title level={2} className='title'>
				Do you have a question about <Text>{title}</Text>? Ask one of our
				experts
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Form}
					componentProps={{
						...formItemLayout,
						form: form,
						name: 'ask-experts',
						onFinish: onFinish,
						initialValues: {
							prefix: '1',
						},
						scrollToFirstError: true,
					}}
					key='queue'
					{...config.QueueAnim({})}
				>
					<Form.Item
						name='first-name'
						key='first-name'
						label='First Name'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your first name!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='last-name'
						key='last-name'
						label='Last Name'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your last name!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='email'
						key='email'
						label='E-mail'
						hasFeedback
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='phone'
						key='phone'
						label='Phone Number'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your phone number!',
							},
						]}
					>
						<Input addonBefore={prefixSelector} style={{ width: '100%' }} />
					</Form.Item>

					<Form.Item
						name='question'
						key='question'
						label='Question'
						hasFeedback
						rules={[{ required: true, message: 'Question is requied!' }]}
					>
						<TextArea rows={4} />
					</Form.Item>

					<Form.Item
						label='Captcha'
						key='captcha'
						hasFeedback
						extra='We must make sure that your are a human.'
					>
						<Row gutter={8}>
							<Col span={12}>
								<Form.Item
									name='captcha'
									noStyle
									rules={[
										{
											required: true,
											message: 'Please input the captcha you got!',
										},
									]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Button>Get captcha</Button>
							</Col>
						</Row>
					</Form.Item>

					<Form.Item key='submit' {...tailFormItemLayout}>
						<Button
							type='primary'
							shape='circle'
							className='app-btn static'
							htmlType='submit'
						>
							Submit
						</Button>
					</Form.Item>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default AskExpertsSection;
