import { Space, Typography } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

const { Title } = Typography;

const Banner = ({ banner, config }) => {
	return (
		<div className='page-banner-wrapper'>
			<div className='page-banner'>
				<TweenOne
					key='banner'
					className='image-wrapper'
					{...config.TweenOne({})}
				>
					<Image
						className='image'
						src={banner.image && banner.image.src ? banner.image.src : ''}
						alt={banner.image && banner.image.alt ? banner.image.alt : 'Image'}
						width={
							banner.image && banner.image.width ? banner.image.width : 1500
						}
						height={
							banner.image && banner.image.height ? banner.image.height : 600
						}
					/>
				</TweenOne>

				<div className='content-wrapper'>
					<Space align='center' direction='vertical'>
						<QueueAnim key='text' {...config.QueueAnim({})}>
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
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Banner;
