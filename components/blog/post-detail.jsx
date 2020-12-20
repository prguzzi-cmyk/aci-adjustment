import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title } = Typography;

const PostDetail = ({ post }) => {
	return (
		<div className='posts-container'>
			<Title level={2} className='title'>
				{post.title}
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim key='posts-queue' {...config.QueueAnim({})}>
					<div key='1' dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default PostDetail;
