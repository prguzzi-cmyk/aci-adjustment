import React, { useState } from 'react';
import {
	Row,
	Col,
	Typography,
	Form,
	Input,
	Select,
	Button,
	message,
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Recaptcha from 'react-google-recaptcha';

import config, {
	FormItemLayout,
	TailFormItemLayout,
	FormFeedback,
} from '../../../utils/config';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const AskExpertsSection = ({ title = '' }) => {
	const recaptchaRef = React.createRef();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const checkRecaptcha = () => {
		const recaptchaValue = recaptchaRef.current.getValue();

		if (recaptchaValue === '') {
			return Promise.reject(FormFeedback.REQ_CAPTCHA);
		} else {
			return Promise.resolve();
		}
	};

	const onFinish = async (values) => {
		values.captcha = recaptchaRef.current.getValue();

		setLoading(true);

		const res = await fetch('/api/ask-experts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			message.success(
				'Your query has been submitted!',
				config.MessageDuration.normal
			);
		} else {
			message.error(jRes.message, config.MessageDuration.normal);
		}

		setLoading(false);
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
					key='ask-experts-queue'
					component={Form}
					componentProps={{
						...FormItemLayout,
						form: form,
						name: 'ask-experts',
						onFinish: onFinish,
						initialValues: {
							prefix: '1',
						},
						scrollToFirstError: true,
					}}
					{...config.QueueAnim({})}
				>
					<Form.Item
						name='firstName'
						key='first-name'
						label='First Name'
						hasFeedback
						rules={[
							{
								required: true,
								message: FormFeedback.REQ_FIRST_NAME,
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='lastName'
						key='last-name'
						label='Last Name'
						hasFeedback
						rules={[
							{
								required: true,
								message: FormFeedback.REQ_LAST_NAME,
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
								message: FormFeedback.INVALID_EMAIL,
							},
							{
								required: true,
								message: FormFeedback.REQ_EMAIL,
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
								message: FormFeedback.REQ_PHONE,
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
						extra={FormFeedback.EXT_CAPTCHA}
					>
						<Row gutter={8}>
							<Col span={12}>
								<Form.Item
									name='captcha'
									noStyle
									rules={[
										{
											validator: checkRecaptcha,
										},
									]}
								>
									<Recaptcha
										ref={recaptchaRef}
										sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
									/>
								</Form.Item>
							</Col>
						</Row>
					</Form.Item>

					<Form.Item key='submit' {...TailFormItemLayout}>
						<Button
							type='primary'
							shape='circle'
							className='app-btn static'
							htmlType='submit'
							loading={loading}
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
