import React, { useState } from 'react';
import { Form, Row, Col, Card, Select, Typography, message } from 'antd';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config, { FormItemLayoutTwo } from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text } = Typography;
const { Option } = Select;
const { Meta } = Card;

const CommunitiesSection = ({ states, counties, communities }) => {
	const formRef = React.createRef();

	const [statesArr, setStatesArr] = useState(states);
	const [stateSlug, SetstateSlug] = useState(process.env.NEXT_PUBLIC_DEF_STATE);
	const [countyLoading, setCountyLoading] = useState(false);
	const [countiesArr, setCountiesArr] = useState(counties);
	const [county, setCounty] = useState(process.env.NEXT_PUBLIC_DEF_COUNTY);
	const [countyLbl, setCountyLbl] = useState(
		process.env.NEXT_PUBLIC_DEF_COUNTY_LBL
	);
	const [communitiesArr, setCommunitiesArr] = useState(communities);

	const onSateChange = async (value, option) => {
		const ref = formRef.current;

		SetstateSlug(value);

		const res = await fetch('/api/communities/counties', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state: value }),
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			setCountiesArr(jRes.data);

			if (jRes.data.length > 0) {
				ref.setFieldsValue({
					county: jRes.data[0].County.S,
				});

				await onCountyChange(jRes.data[0].CountySlug.S, {
					children: jRes.data[0].County.S,
				});
			} else {
				ref.setFieldsValue({
					county: '',
				});
			}

			message.success(
				`Counties of ${option.children} are showing!`,
				config.MessageDuration.shorter
			);
		} else {
			message.error(jRes.message, config.MessageDuration.normal);
		}
	};

	const onCountyChange = async (value, option) => {
		setCountyLoading(true);

		const res = await fetch('/api/communities/communities', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state: stateSlug, county: value }),
		});
		const jRes = await res.json();

		if (jRes.success === true) {
			const countyLb = option && option.children ? option.children : value;

			setCounty(value);
			setCountyLbl(countyLb);
			setCommunitiesArr(jRes.data);

			message.success(
				`Communities of ${countyLb} are showing!`,
				config.MessageDuration.shorter
			);
		} else {
			message.error(jRes.message, config.MessageDuration.normal);
		}

		setCountyLoading(false);
	};

	return (
		<div className='communities-container'>
			<Title level={2} className='title'>
				List of Communities in <Text>{countyLbl}</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='communities-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({ interval: 70, duration: 200 })}
				>
					<Col key='form' xs={24} md={24}>
						<Form
							ref={formRef}
							{...FormItemLayoutTwo}
							initialValues={{
								state: process.env.NEXT_PUBLIC_DEF_STATE,
								county: county,
							}}
						>
							<Row>
								<Col key='1' xs={24} md={12}>
									<Form.Item name='state' label='State'>
										<Select onChange={onSateChange}>
											{statesArr.map((state) => (
												<Option key={state.StateSlug.S}>{state.State.S}</Option>
											))}
										</Select>
									</Form.Item>
								</Col>

								<Col key='2' xs={24} md={12}>
									<Form.Item name='county' label='County/City'>
										<Select loading={countyLoading} onChange={onCountyChange}>
											{countiesArr.map((county) => (
												<Option key={county.CountySlug.S}>
													{county.County.S}
												</Option>
											))}
										</Select>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</Col>

					{communitiesArr.map((ele, index) => {
						return (
							<Col key={index++} xs={24} sm={8} md={6}>
								<Link
									href={`${dataset.router.communities.path}/${ele.CommunitySlug.S}`}
								>
									<a>
										<Card hoverable bordered={false}>
											<Meta title={ele.Community.S} />
										</Card>
									</a>
								</Link>
							</Col>
						);
					})}
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default CommunitiesSection;
