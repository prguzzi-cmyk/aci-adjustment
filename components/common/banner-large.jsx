import { Space, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;

const Banner = ({ banner }) => {
	return (
		<div className='page-banner-lg-wrapper'>
			<div className='page-banner-lg'>
				<div key='banner' className='image-wrapper'>
					<Image
						className='image'
						src={banner.image && banner.image.src ? banner.image.src : ''}
						alt={
							banner.image && banner.image.alt
								? banner.image.alt
								: 'Banner Image'
						}
						loading='eager'
						layout='fill'
						objectFit='cover'
						quality={20}
					/>
				</div>

				<div className='content-wrapper'>
					<Space key='text' align='center' direction='vertical'>
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
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Banner;
