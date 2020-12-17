import { Row, Col, Typography, Form, Input, Select, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;
const { Option } = Select;

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

const FormSection = () => {
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
		<div className='form-container'>
			<Title level={2} className='title'>
				Request a <Text>Policy Review</Text>
			</Title>

			<OverPack
				component={Form}
				componentProps={{
					...formItemLayout,
					form: form,
					name: 'inspection',
					onFinish: onFinish,
					initialValues: {
						prefix: '1',
					},
					className: 'content',
					scrollToFirstError: true,
				}}
				key='queue'
				{...config.OverPack({})}
			>
				<QueueAnim {...config.QueueAnim({})}>
					<Title key='heading' level={5} className='heading'>
						Fill out the information below to request a full policy review by a
						licensed Public Adjuster
					</Title>
				</QueueAnim>

				<QueueAnim {...config.QueueAnim({})}>
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
						label='Address'
						key='address'
						required
						style={{ marginBottom: 0 }}
					>
						<Form.Item
							name='line-1'
							hasFeedback
							rules={[
								{ required: true, message: 'Please input your address!' },
							]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder='Line 1' />
						</Form.Item>

						<Form.Item
							name='line-2'
							style={{
								display: 'inline-block',
								width: '50%',
								margin: '0 0 0 8px',
							}}
						>
							<Input placeholder='Line 2' />
						</Form.Item>
					</Form.Item>

					<Form.Item
						name='city'
						key='city'
						label='City'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your city!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='state'
						key='state'
						label='State'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your state!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='zip-code'
						key='zip-code'
						label='Zip Code'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your zip code!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='country'
						key='country'
						label='Country'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your country!',
								whitespace: true,
							},
						]}
					>
						<Input />
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

export default FormSection;
