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

import config from '../../../utils/config';

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

const InspectionFormSection = () => {
	const recaptchaRef = React.createRef();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const checkRecaptcha = () => {
		const recaptchaValue = recaptchaRef.current.getValue();
		
		if (recaptchaValue === '') {
			return Promise.reject('Please solve recaptcha!');
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
								message: 'Please input your first name!',
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
							name='address1'
							hasFeedback
							rules={[
								{ required: true, message: 'Please input your address!' },
							]}
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
						name='zipCode'
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
						name='claimType'
						key='claim-type'
						label='Type of Claim'
						hasFeedback
						rules={[{ required: true, message: 'Type of Claim is required' }]}
					>
						<Select>
							<Select.Option value='New Claim'>New Claim</Select.Option>
							<Select.Option value='Existing Claim'>
								Existing Claim
							</Select.Option>
							<Select.Option value='Denied Claim'>Denied Claim</Select.Option>
							<Select.Option value='Re-Open Claim'>Re-Open Claim</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item
						name='damageType'
						key='damage-type'
						label='Type of Damage'
						hasFeedback
						rules={[{ required: true, message: 'Type of Damage is required' }]}
					>
						<Select>
							<Select.Option value='Air Conditioner Leak'>
								Air Conditioner Leak
							</Select.Option>
							<Select.Option value='Appliance Leak'>
								Appliance Leak
							</Select.Option>
							<Select.Option value='Collapse'>Collapse</Select.Option>
							<Select.Option value='Explosion'>Explosion</Select.Option>
							<Select.Option value='Fire'>Fire</Select.Option>
							<Select.Option value='Flood'>Flood</Select.Option>
							<Select.Option value='Flooring Damage'>
								Flooring Damage
							</Select.Option>
							<Select.Option value='Hail Damage'>Hail Damage</Select.Option>
							<Select.Option value='Oil Heater Puff Back'>
								Oil Heater Puff Back
							</Select.Option>
							<Select.Option value='Plumbing Leak'>Plumbing Leak</Select.Option>
							<Select.Option value='Roof Leak'>Roof Leak</Select.Option>
							<Select.Option value='Shingles Missing'>
								Shingles Missing
							</Select.Option>
							<Select.Option value='Siding Damage'>Siding Damage</Select.Option>
							<Select.Option value='Smoke/Soot Damage'>
								Smoke/Soot Damage
							</Select.Option>
							<Select.Option value='Sump Pump Overflow'>
								Sump Pump Overflow
							</Select.Option>
							<Select.Option value='Theft'>Theft</Select.Option>
							<Select.Option value='Toilet Overflow'>
								Toilet Overflow
							</Select.Option>
							<Select.Option value='Vandalism'>Vandalism</Select.Option>
							<Select.Option value='Water Heater Leak'>
								Water Heater Leak
							</Select.Option>
							<Select.Option value='Window Leak'>Window Leak</Select.Option>
						</Select>
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

					<Form.Item key='submit' {...tailFormItemLayout}>
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
