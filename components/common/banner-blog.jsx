import { Space, Typography, Button } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Link } = Typography;

const Banner = ({ banner }) => {
	return (
		<div className='page-banner-blog-wrapper'>
			<div className='page-banner-blog'>
				<TweenOne
					key='banner'
					className='image-wrapper'
					{...config.TweenOne({})}
				>
					<Image
						className='image'
						src={
							banner && banner.image && banner.image.src
								? banner.image.src
								: dataset.images.bannerBlogDefault.src
						}
						alt={
							banner && banner.image && banner.image.alt
								? banner.image.alt
								: dataset.images.bannerBlogDefault.alt
						}
						layout='fill'
						objectFit='cover'
						objectPosition='center 55%'
						quality={100}
					/>
				</TweenOne>

				<div className='content-wrapper'>
					<QueueAnim
						component={Space}
						componentProps={{
							align: 'center',
							direction: 'vertical',
						}}
						key='text'
						{...config.QueueAnim({})}
					>
						{banner && banner.title && (
							<Title key='title' className='title'>
								{banner.title}
							</Title>
						)}

						<Button
							key='call'
							type='primary'
							shape='circle'
							className='app-btn'
						>
							<Link href={`tel:${dataset.general.phone}`} strong>
								CALL {dataset.general.phoneFormatted}
							</Link>
						</Button>
					</QueueAnim>
				</div>
			</div>
		</div>
	);
};

export default Banner;
