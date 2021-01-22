import { Space, Typography } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import config from '../../utils/config';
import dataset from '../../utils/datasets/images';

const { Title } = Typography;

const Banner = ({ banner }) => {
	return (
		<div className='page-banner-md-wrapper'>
			<div className='page-banner-md'>
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
								: dataset.images.bannerCommunDefault.src
						}
						alt={
							banner && banner.image && banner.image.alt
								? banner.image.alt
								: dataset.images.bannerCommunDefault.alt
						}
						layout='fill'
						objectFit='cover'
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
					</QueueAnim>
				</div>
			</div>
		</div>
	);
};

export default Banner;
