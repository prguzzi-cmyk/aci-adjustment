import React, { useState } from 'react';
import {
	Row,
	Col,
	Typography,
	Form,
	Input,
	Select,
	Upload,
	Radio,
	DatePicker,
	Button,
	message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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

const FileClaimSection = () => {
	const recaptchaRef = React.createRef();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [totalLoss, setTotalLoss] = useState();
	const [repairs, setRepairs] = useState();
	const [receipts, setReceipts] = useState();
	const [declarationsPage, setDeclarationsPage] = useState([]);
	const [receiptFiles, setReceiptFiles] = useState([]);
	const fileTypes = ['image/jpeg', 'application/pdf'];

	const onTotalLossChange = (e) => {
		setTotalLoss(e.target.value);
	};

	const onRepairsChange = (e) => {
		setRepairs(e.target.value);
	};

	const onReceiptsChange = (e) => {
		setReceipts(e.target.value);
	};

	const declarationsPageProps = {
		fileList: declarationsPage,
		onRemove: (file) => {
			setDeclarationsPage([]);
		},
		beforeUpload: (file) => {
			if (fileTypes.indexOf(file.type) === -1) {
				message.error(`${file.name} is not allowed!`);
				return false;
			}

			if (declarationsPage.length === 1) {
				message.error(`Maximum 1 file is allowed!`);
				return false;
			}

			setDeclarationsPage([...declarationsPage, file]);
			return false;
		},
	};

	const receiptFilesProps = {
		fileList: receiptFiles,
		onRemove: (file) => {
			const index = receiptFiles.indexOf(file);
			const newFileList = receiptFiles.slice();
			newFileList.splice(index, 1);

			setReceiptFiles(newFileList);
		},
		beforeUpload: (file) => {
			if (fileTypes.indexOf(file.type) === -1) {
				message.error(`${file.name} is not allowed!`);
				return false;
			}

			if (receiptFiles.length === 3) {
				message.error(`Maximum 3 files are allowed!`);
				return false;
			}

			setReceiptFiles([...receiptFiles, file]);
			return false;
		},
	};

	const checkRecaptcha = () => {
		const recaptchaValue = recaptchaRef.current.getValue();

		if (recaptchaValue === '') {
			return Promise.reject('Please solve recaptcha!');
		} else {
			return Promise.resolve();
		}
	};

	const onFinish = async (values) => {
		const captcha = recaptchaRef.current.getValue();

		setLoading(true);

		const data = new FormData();
		const ignoreKeys = ['receiptFiles', 'captcha'];

		for (const key in values) {
			if (Object.hasOwnProperty.call(values, key)) {
				if (ignoreKeys.indexOf(key) === -1) {
					data.append(key, values[key]);
				}
			}
		}

		data.append('captcha', captcha);

		if (declarationsPage.length > 0) {
			data.append('declarationsPage', declarationsPage[0]);
		}

		receiptFiles.forEach((file) => {
			data.append('receiptFiles', file);
		});

		const res = await fetch('/api/file-a-claim', {
			method: 'POST',
			body: data,
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			message.success(
				'Your claim details has been submitted!',
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
		<div className='file-claim-container'>
			<Title level={2} className='title'>
				Claim <Text>Submission</Text> Form
			</Title>

			<OverPack className='content' {...config.OverPack({})}>
				<QueueAnim
					key='file-claim'
					component={Form}
					componentProps={{
						...formItemLayout,
						form: form,
						name: 'file-claim',
						onFinish: onFinish,
						initialValues: {
							prefix: '1',
						},
						scrollToFirstError: true,
					}}
					{...config.QueueAnim({})}
				>
					<Title key='desc' className='desc' level={5}>
						After you fill out our SIMPLE form, you will receive a phone call
						from one of our licensed and trained Public Adjusters within 24
						hours to schedule a damage estimate.
					</Title>

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

					<Title key='loss-address-heading' className='sub-heading' level={3}>
						<Text>Loss</Text> Address
					</Title>

					<Form.Item
						label='Address'
						key='loss-address'
						required
						tooltip='This is the address where the damage occurred'
						style={{ marginBottom: 0 }}
					>
						<Form.Item
							name='lossAddress1'
							hasFeedback
							rules={[
								{ required: true, message: 'Please input your loss address!' },
							]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder='Line 1' />
						</Form.Item>

						<Form.Item
							name='lossAddress2'
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
						name='lossCity'
						key='loss-city'
						label='City'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your loss city!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='lossState'
						key='loss-state'
						label='State'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your loss state!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='lossZipCode'
						key='loss-zip-code'
						label='Zip Code'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your loss zip code!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Title key='mail-address-heading' className='sub-heading' level={3}>
						<Text>Mailing</Text> Address
					</Title>

					<Form.Item
						label='Address'
						key='mail-address'
						required
						tooltip='This is the address where you would like to receive mail correspondence regarding your claim.'
						style={{ marginBottom: 0 }}
					>
						<Form.Item
							name='mailAddress1'
							hasFeedback
							rules={[
								{ required: true, message: 'Please input your mail address!' },
							]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder='Line 1' />
						</Form.Item>

						<Form.Item
							name='mailAddress2'
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
						name='mailCity'
						key='mail-city'
						label='City'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your mail city!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='mailState'
						key='mail-state'
						label='State'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your mail state!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='mailZipCode'
						key='mail-zip-code'
						label='Zip Code'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your mail zip code!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Title key='policy-details-heading' className='sub-heading' level={3}>
						<Text>Policy</Text> Details
					</Title>

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
						tooltip='What caused the damage to your home? Your claim may fall under more than one category, and that is fine. Please select the category that best describes your claim.'
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
						name='policyType'
						key='policy-type'
						label='Policy Type'
						hasFeedback
						tooltip='What type of policy do you have?  If you are a homeowner, you would select "Homeowners."  If you own a business, but do not own the property, select "Businessowners." If you own a commercial property, select "Commercial."'
						rules={[{ required: true, message: 'Type of Policy is required' }]}
					>
						<Select>
							<Select.Option value='Businessowners'>
								Businessowners
							</Select.Option>
							<Select.Option value='Commercial'>Commercial</Select.Option>
							<Select.Option value='Homeowners'>Homeowners</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item
						name='policyNumber'
						key='policy-number'
						label='Policy Number'
						hasFeedback
						tooltip='Your policy number will be on your Declarations Page (also call "renewal" or "continuation").  We need your policy number to report your claim.'
						rules={[
							{
								required: true,
								message: 'Please input your policy number!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='declarationsPage'
						key='declarations-page'
						label='Declarations Page (Upload .PDF or .JPG File)'
						tooltip='Your Declarations Page is the first page on your policy "renewal" or "continuation" that you receive in the mail each year.  It contains your policy number, dates of coverage, amounts of coverage, and other basic information.  As your Public Adjuster, we handle all communication for you, and we will need your Declarations Page to report your claim.  If you do not have it at this time you can still file a claim as long as you have your policy number.'
						hasFeedback
					>
						<Upload {...declarationsPageProps}>
							<Button icon={<UploadOutlined />}>Click to Upload</Button>
						</Upload>
					</Form.Item>

					<Form.Item
						name='lossDate'
						key='loss-date'
						label='Date of Loss'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your loss date!',
							},
						]}
					>
						<DatePicker />
					</Form.Item>

					<Form.Item
						name='totalLoss'
						key='total-loss'
						label='Is this a total loss?'
						hasFeedback
						rules={[{ required: true, message: 'Please select an option!' }]}
					>
						<Radio.Group onChange={onTotalLossChange} value={totalLoss}>
							<Radio className='radio-input' value='yes'>
								Yes
							</Radio>

							<Radio className='radio-input' value='no'>
								No
							</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name='repairs'
						key='repairs'
						label='Did you begin any repairs?'
						hasFeedback
						rules={[{ required: true, message: 'Please select an option!' }]}
					>
						<Radio.Group onChange={onRepairsChange} value={repairs}>
							<Radio className='radio-input' value='yes'>
								Yes
							</Radio>

							<Radio className='radio-input' value='no'>
								No
							</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name='contractorName'
						key='contractor-name'
						label='Name of Contractor'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your contractor name!',
								whitespace: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name='contractorPhone'
						key='contractor-phone'
						label='Phone Number of Contractor'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your contractor phone number!',
							},
						]}
					>
						<Input addonBefore={prefixSelector} style={{ width: '100%' }} />
					</Form.Item>

					<Form.Item
						name='receipts'
						key='receipts'
						label='Do you have receipts for repairs?'
						hasFeedback
						rules={[{ required: true, message: 'Please select an option!' }]}
					>
						<Radio.Group onChange={onReceiptsChange} value={receipts}>
							<Radio className='radio-input' value='yes'>
								Yes
							</Radio>

							<Radio className='radio-input' value='no'>
								No
							</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						name='receiptFiles'
						key='receipt-files'
						label='Submit Repair Receipts (.PDF or .JPG)'
						hasFeedback
					>
						<Upload {...receiptFilesProps}>
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

export default FileClaimSection;
