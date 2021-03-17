import { Row, Col, Card, Typography } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import moment from 'moment';

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
						const postDate = moment(post.created_at).format('LL');

						return (
							<Col key={index++} md={6}>
								<Card
									cover={
										<Image
											src={`${dataset.images.bannerBlogDir.src}${post.image}`}
											alt={post.title}
											objectFit='cover'
											width={300}
											height={300}
										/>
									}
								>
									<Meta
										title={
											<Link href={`${dataset.router.blog.path}/${post.slug}`}>
												<a>{post.title}</a>
											</Link>
										}
										description={postDate}
									/>

									<Paragraph>{post.excerpt}...</Paragraph>

									<Link href={`${dataset.router.blog.path}/${post.slug}`}>
										<a>Read More</a>
									</Link>
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
