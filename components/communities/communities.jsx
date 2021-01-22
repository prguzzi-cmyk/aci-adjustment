import { Row, Col, Card, Typography } from 'antd';
import Link from 'next/link';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text } = Typography;
const { Meta } = Card;

const CommunitiesSection = ({ county, communities }) => {
	return (
		<div className='communities-container'>
			<Title level={2} className='title'>
				List of Communities in <Text>{county}</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='communities-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({})}
				>
					{communities.map((ele, index) => {
						return (
							<Col key={index++} md={6}>
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
