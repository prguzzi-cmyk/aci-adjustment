import { useState } from 'react';
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

import dataset from '../../utils/datasets/general';
import config from '../../utils/config';

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

const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};

const resumeProps = {
	name: 'resume',
	action: '',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}

		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const CareerFormSection = () => {
	const [form] = Form.useForm();
	const [license, setLicense] = useState();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const onLicenseChange = (e) => {
		setLicense(e.target.value);
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
						name='license'
						key='license'
						label='Do you have a Public Adjuster License?'
						hasFeedback
						rules={[{ required: true, message: 'Please select an option!' }]}
					>
						<Radio.Group onChange={onLicenseChange} value={license}>
							<Radio style={radioStyle} value='yes'>
								Yes
							</Radio>

							<Radio style={radioStyle} value='no'>
								No
							</Radio>

							<Radio style={radioStyle} value='in-process'>
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
						label='Upload Resume'
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

export default CareerFormSection;
