import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import dataset from '../../utils/datasets/bootstrap';
import config from '../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				We're available <Text>around the clock!</Text>
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'center',
					align: 'middle',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 6,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='image'
						src={dataset.images.clock.src}
						alt={dataset.images.clock.alt}
						width={200}
						height={200}
					/>
				</QueueAnim>

				<QueueAnim
					component={Col}
					componentProps={{
						md: 10,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Title key='1' level={5}>
						Call for a FREE inspection at any time of day or night
					</Title>

					<Paragraph key='2'>
						Our Emergency Response Team is ready to take your call! We can get
						an adjuster out to your property within 24 hours, and for
						catastrophic losses such as fires, we can usually send an adjuster
						immediately!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
