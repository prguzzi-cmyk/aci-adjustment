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
import dataset from '../../../utils/datasets/general';

const { Title, Text } = Typography;
const { Option } = Select;

const InspectionFormSection = () => {
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

		const res = await fetch('/api/inspection', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			message.success(
				'Your inspection query has been submitted!',
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
		<div className='inspection-container'>
			<Title level={2} className='inspection-title'>
				Request a <Text>FREE</Text> Inspection!
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Form}
					componentProps={{
						...FormItemLayout,
						form: form,
						name: 'inspection',
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
						label='Address'
						key='address'
						required
						tooltip={FormFeedback.TIP_ADD_MAIL}
						style={{ marginBottom: 0 }}
					>
						<Form.Item
							name='address1'
							hasFeedback
							rules={[{ required: true, message: FormFeedback.REQ_ADD }]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder='Line 1' />
						</Form.Item>

						<Form.Item
							name='address2'
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
								message: FormFeedback.REQ_CITY,
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
								message: FormFeedback.REQ_STATE,
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='zipCode'
						key='zip-code'
						label='Zip Code'
						hasFeedback
						rules={[
							{
								required: true,
								message: FormFeedback.REQ_ZIP,
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='claimType'
						key='claim-type'
						label='Type of Claim'
						hasFeedback
						rules={[{ required: true, message: FormFeedback.REQ_CLAIM_TYPE }]}
					>
						<Select>
							{dataset.claimTypes.map((item) => (
								<Select.Option value={item.value}>{item.key}</Select.Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item
						name='damageType'
						key='damage-type'
						label='Type of Damage'
						tooltip={FormFeedback.TIP_DAMAGE_TYPE}
						hasFeedback
						rules={[{ required: true, message: FormFeedback.REQ_DAMAGE_TYPE }]}
					>
						<Select>
							{dataset.damageTypes.map((item) => (
								<Select.Option value={item.value}>{item.key}</Select.Option>
							))}
						</Select>
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

export default InspectionFormSection;
