import React, { useState } from 'react';
import {
	Row,
	Col,
	Typography,
	Form,
	Input,
	Select,
	Radio,
	Upload,
	message,
	Button,
} from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { UploadOutlined } from '@ant-design/icons';
import Recaptcha from 'react-google-recaptcha';

import config, {
	FormItemLayout,
	TailFormItemLayout,
	FormFeedback,
} from '../../utils/config';
import dataset from '../../utils/datasets/general';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};

const CareerFormSection = () => {
	const recaptchaRef = React.createRef();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [license, setLicense] = useState();
	const [resume, setResume] = useState([]);
	const fileTypes = ['image/jpeg', 'application/pdf', 'text/plain'];

	const onLicenseChange = (e) => {
		setLicense(e.target.value);
	};

	const resumeProps = {
		fileList: resume,
		onRemove: (file) => {
			setResume([]);
		},
		beforeUpload: (file) => {
			if (fileTypes.indexOf(file.type) === -1) {
				message.error(`${file.name} is not allowed!`);
				return false;
			}

			if (resume.length === 1) {
				message.error(`Maximum 1 file is allowed!`);
				return false;
			}

			setResume([...resume, file]);
			return false;
		},
	};

	const checkRecaptcha = () => {
		const recaptchaValue = recaptchaRef.current.getValue();

		if (recaptchaValue === '') {
			return Promise.reject(FormFeedback.REQ_CAPTCHA);
		} else {
			return Promise.resolve();
		}
	};

	const onFinish = async (values) => {
		const captcha = recaptchaRef.current.getValue();

		setLoading(true);

		const data = new FormData();
		const ignoreKeys = ['captcha', 'resume'];

		for (const key in values) {
			if (Object.hasOwnProperty.call(values, key)) {
				if (ignoreKeys.indexOf(key) === -1) {
					data.append(key, values[key]);
				}
			}
		}

		data.append('captcha', captcha);

		if (resume.length > 0) {
			data.append('resume', resume[0]);
		}

		const res = await fetch('/api/careers', {
			method: 'POST',
			body: data,
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			message.success(
				'Your details has been submitted!',
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
		<div className='careers-form'>
			<Title level={2} className='title'>
				<Text>Apply Now</Text>
			</Title>

			<Title level={5} className='description'>
				ACI Adjustment Group is hiring! Fill out the information below to apply
				today for an interview. Our staff will contact you within 72 hours if
				your application qualifies for an interview. You can also call
				<Text>{dataset.general.phoneFormatted}</Text> to apply today.
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='careers-form-queue'
					component={Form}
					componentProps={{
						...FormItemLayout,
						form: form,
						name: 'careers-form',
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
						label='Address'
						key='address'
						required
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
						name='license'
						key='license'
						label='Do you have a Public Adjuster License?'
						hasFeedback
						rules={[{ required: true, message: FormFeedback.REQ_OPT }]}
					>
						<Radio.Group onChange={onLicenseChange} value={license}>
							<Radio style={radioStyle} value='Yes'>
								Yes
							</Radio>

							<Radio style={radioStyle} value='No'>
								No
							</Radio>

							<Radio style={radioStyle} value='In-process'>
								In process of receiving license
							</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name='experience'
						key='experience'
						label='Brief Summary of Experience'
						hasFeedback
						rules={[{ required: true, message: 'Experience is requied!' }]}
					>
						<TextArea rows={4} />
					</Form.Item>

					<Form.Item
						name='resume'
						key='resume'
						label='Upload Resume (.pdf, .jpg, .txt)'
						hasFeedback
						rules={[{ required: true, message: 'Please upload your resume!' }]}
					>
						<Upload {...resumeProps}>
							<Button icon={<UploadOutlined />}>Click to Upload</Button>
						</Upload>
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

export default CareerFormSection;
