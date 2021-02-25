import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import YouTube from 'react-youtube';

import config from '../../../utils/config';

const WhyChooseSection = ({ community }) => {
	const playerOpts = {
		width: '100%',
		height: '390',
		playerVars: {
			autoplay: 1,
			modestbranding: 1,
			controls: 0,
			rel: 0,
			loop: 1,
		},
	};

	return (
		<div className='video-container'>
			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='video-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<YouTube
						key='1'
						videoId={
							community && community.VideoIdACI && community.VideoIdACI.S
								? community.VideoIdACI.S
								: 'Upp7Nbc1TVo'
						}
						opts={playerOpts}
					/>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WhyChooseSection;
