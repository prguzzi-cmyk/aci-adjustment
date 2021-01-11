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
import { PhoneFilled, MailFilled, ShopFilled } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Recaptcha from 'react-google-recaptcha';

import config, {
	FormItemLayout,
	TailFormItemLayout,
	FormFeedback,
} from '../../utils/config';
import dataset from '../../utils/datasets/general';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const CareerFormSection = () => {
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

		const res = await fetch('/api/contact-us', {
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
		<div className='form-container'>
			<Title level={2} className='title'>
				<Text>Ask us.</Text> We are here to help!
			</Title>

			<OverPack
				key='contact-form-queue'
				component={Form}
				componentProps={{
					...FormItemLayout,
					form: form,
					name: 'contact-form',
					onFinish: onFinish,
					initialValues: {
						prefix: '1',
					},
					scrollToFirstError: true,
				}}
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
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default CareerFormSection;
