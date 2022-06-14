import { Row, Col, Card, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text } = Typography;
const { Meta } = Card;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				ACI <Text>Programs</Text>
			</Title>

			<OverPack {...config.OverPack({})}>
				<QueueAnim
					key='intro-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [20, 24],
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Col key='1' md={6} offset={6}>
						<Link href={dataset.router.oneTreePlanted.path}>
							<a>
								<Card
									hoverable
									cover={
										<Image
											src={dataset.images.progTreePlanting.src}
											alt={dataset.images.progTreePlanting.alt}
											layout='fill'
										/>
									}
								>
									<Meta title={dataset.router.oneTreePlanted.label} />
								</Card>
							</a>
						</Link>
					</Col>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
