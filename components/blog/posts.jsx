import { Row, Col, Card, Typography } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const PostsSection = ({ posts }) => {
	return (
		<div className='posts-container'>
			<Title level={2} className='title'>
				Blog <Text>Posts</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='posts-queue'
					component={Row}
					componentProps={{
						className: 'content',
						gutter: [16, 24],
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					{posts.map((post, index) => {
						return (
							<Col key={index++} md={6}>
								<Card
									cover={
										<Image
											src={dataset.images[post.image].src}
											alt={dataset.images[post.image].alt}
											width={300}
											height={300}
										/>
									}
								>
									<Meta
										title={
											<Link href={`${dataset.router.blog.path}/${post.id}`}>
												<a>{post.title}</a>
											</Link>
										}
										description={post.date}
									/>

									<Paragraph>{post.excerpt}</Paragraph>
								</Card>
							</Col>
						);
					})}
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default PostsSection;
