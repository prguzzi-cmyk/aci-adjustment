import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import dataset from '../../utils/datasets/bootstrap';
import config from '../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='careers-container'>
			<Title level={2} className='careers-title'>
				<Text>Careers</Text> at ACI
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					component={Row}
					componentProps={{
						className: 'careers-content',
						gutter: [50, 24],
					}}
					key='queue'
					{...config.QueueAnim({})}
				>
					<Col key='1' md={12} className='img-wrapper'>
						<Image
							src={dataset.images.careers.src}
							alt={dataset.images.careers.alt}
							width={640}
							height={403}
						/>
					</Col>

					<Col key='2' md={12} className='img-wrapper'>
						<Title level={5}>
							The field of Public Adjusting is rewarding and exciting
						</Title>

						<Paragraph>
							Do you have a passion for helping people in need?
						</Paragraph>

						<Paragraph>
							Do you like working on behalf of the little guy?
						</Paragraph>

						<Paragraph>
							Do you have a background in insurance or construction?
						</Paragraph>

						<Paragraph>
							Are you a professional who is looking to change careers, or a
							recent college graduate looking for an opportunity?
						</Paragraph>

						<Paragraph>
							Are you tired of working in an organization without advancement or
							high income opportunity?
						</Paragraph>

						<Paragraph>
							You may qualify to be a member of ACI Adjustment Group's growing
							team! We're expanding throughout the Philadelphia area and the
							Lehigh Valley. Fill out the application to the right to apply, or
							call
						</Paragraph>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
