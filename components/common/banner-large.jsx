import { Space, Typography } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import config from '../../utils/config';

const { Title } = Typography;

const Banner = ({ banner }) => {
	return (
		<div className='page-banner-lg-wrapper'>
			<div className='page-banner-lg'>
				<TweenOne
					key='banner'
					className='image-wrapper'
					{...config.TweenOne({})}
				>
					<Image
						className='image'
						src={banner.image && banner.image.src ? banner.image.src : ''}
						alt={
							banner.image && banner.image.alt
								? banner.image.alt
								: 'Banner Image'
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
						{banner.title && (
							<Title key='title' className='title'>
								{banner.title}
							</Title>
						)}

						{banner.tagline && (
							<Title key='tagline' className='tagline' level={2}>
								{banner.tagline}
							</Title>
						)}

						{banner.content && (
							<div key='content' className='content'>
								{banner.content}
							</div>
						)}

						{banner.button && banner.button}
					</QueueAnim>
				</div>
			</div>
		</div>
	);
};

export default Banner;
