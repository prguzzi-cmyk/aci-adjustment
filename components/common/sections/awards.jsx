import { Row, Col, Card, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const AwardsSection = () => {
	return (
		<div className='award-container'>
			<Title level={2} className='title'>
				<Text>Awards</Text> &amp; <Text>Achievements</Text>
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='awards-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Col key='1' md={6}>
						<Card
							hoverable
							cover={
								<Image
									src={dataset.images.awardsWharton.src}
									alt={dataset.images.awardsWharton.alt}
									layout='fill'
								/>
							}
						>
							<Meta title='UPenn Wharton' description='2009' />

							<Paragraph>
								100 Fastest Growing Businesses in Philadelphia (ACI Estate,
								Inc.)
							</Paragraph>
						</Card>
					</Col>

					<Col key='2' md={6}>
						<Card
							hoverable
							cover={
								<Image
									src={dataset.images.awardsInc500.src}
									alt={dataset.images.awardsInc500.alt}
									layout='fill'
								/>
							}
						>
							<Meta title='Inc. 500' description='2008 & 2009' />

							<Paragraph>
								500 Fastest Growing Businesses in USA (ACI Estate, Inc.)
							</Paragraph>
						</Card>
					</Col>

					<Col key='3' md={6}>
						<Card
							hoverable
							cover={
								<Image
									src={dataset.images.awardsIaua.src}
									alt={dataset.images.awardsIaua.alt}
									layout='fill'
								/>
							}
						>
							<Meta title='Insurance Agents United Assoc.' description='2014' />

							<Paragraph>
								Gold Medal Winner (1st Place) based on 5 claims settling
								criteria (ACI Estate, Inc.)
							</Paragraph>
						</Card>
					</Col>

					<Col key='4' md={6}>
						<Card
							hoverable
							cover={
								<Image
									src={dataset.images.awardsUpa.src}
									alt={dataset.images.awardsUpa.alt}
									layout='fill'
								/>
							}
						>
							<Meta title='United Public Adjusters' description='2013 - 2018' />

							<Paragraph>#1 in Customer Service & Satisfaction</Paragraph>
						</Card>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default AwardsSection;
