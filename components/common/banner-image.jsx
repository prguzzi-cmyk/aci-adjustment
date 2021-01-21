import Image from 'next/image';
import TweenOne from 'rc-tween-one';

import config from '../../utils/config';
import dataset from '../../utils/datasets/images';

const Banner = ({ banner }) => {
	return (
		<div className='page-banner-image-wrapper'>
			<div className='page-banner-image'>
				<TweenOne
					key='banner'
					className='image-wrapper'
					{...config.TweenOne({})}
				>
					<Image
						className='image'
						src={
							banner
								? banner.image && banner.image.src
									? banner.image.src
									: ''
								: dataset.images.bannerCommunDefault.src
						}
						alt={
							banner
								? banner.image && banner.image.alt
									? banner.image.alt
									: 'Community Banner'
								: dataset.images.bannerCommunDefault.alt
						}
						layout='fill'
						objectFit='cover'
						quality={100}
					/>
				</TweenOne>
			</div>
		</div>
	);
};

export default Banner;
