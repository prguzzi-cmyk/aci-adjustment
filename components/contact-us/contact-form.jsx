import { Row, Col, Typography, Form, Input, Button } from 'antd';
import { PhoneFilled, MailFilled, ShopFilled } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../utils/datasets/general';
import config from '../../utils/config';

const { Title, Text, Paragraph } = Typography;
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

const CareerFormSection = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div className='form-container'>
			<Title level={2} className='title'>
				<Text>Ask us.</Text> We are here to help!
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
					scrollToFirstError: true,
				}}
				key='queue'
				{...config.OverPack({})}
			>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'content',
					}}
					{...config.QueueAnim({})}
				>
					<Col key='1' md={12}>
						<div className='card'>
							<Title level={5} className='heading'>
								<PhoneFilled /> Questions? Call us!
							</Title>

							<Title level={3} className='sub-heading'>
								{dataset.general.phoneFormatted}
							</Title>

							<Paragraph>We're available around the clock!</Paragraph>
						</div>

						<div className='card'>
							<Title level={5} className='heading'>
								<MailFilled /> Customer support
							</Title>

							<Title level={3} className='sub-heading'>
								{dataset.general.email}
							</Title>

							<Paragraph>
								Do you have any questions?
								<br />
								Send us an e-mail and we will reply to you as soon as possible.
							</Paragraph>
						</div>

						<div className='card'>
							<Title level={5} className='heading'>
								<ShopFilled /> Main office address
							</Title>

							<Title level={3} className='sub-heading'>
								{dataset.general.address}
							</Title>

							<Paragraph>
								Correspondence address. Please call us prior your visit.
							</Paragraph>
						</div>
					</Col>

					<Col key='2' md={12}>
						<Form.Item
							name='name'
							key='name'
							label='Name'
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please input your name!',
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
							<Input />
						</Form.Item>

						<Form.Item
							name='topic'
							key='topic'
							label='Topic'
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please input your topic!',
									whitespace: true,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name='message'
							key='message'
							label='Message'
							hasFeedback
							rules={[{ required: true, message: 'Message is requied!' }]}
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
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default CareerFormSection;
