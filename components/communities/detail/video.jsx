import Link from 'next/link';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import YouTube from 'react-youtube';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Text, Paragraph } = Typography;

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

					<br />
					<br />

					<Paragraph key='1'>
						Don't settle for less! Contact us today for a{' '}
						<Link
							href={`${dataset.router.communities.path}/${community.CommunitySlug.S}#inspection-container`}
						>
							<a>
								<Text>FREE</Text>
							</a>
						</Link>{' '}
						policy review and property inspection. No cost, no obligation, and
						you might receive a higher settlement. Call our customer service
						hotline,{' '}
						<Link href={`tel:${dataset.general.phone}`}>
							<a>
								<b>{dataset.general.phoneFormatted}</b>
							</a>
						</Link>{' '}
						to get an immediate answer to any question you have regarding your
						claim.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WhyChooseSection;
