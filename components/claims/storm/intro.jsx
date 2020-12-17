import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from 'next/image';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Hail</Text> Damage
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					gutter: [20, 20],
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 9,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='image'
						src={dataset.images.claimStorm.dontFight.src}
						alt={dataset.images.claimStorm.dontFight.alt}
						width={450}
						height={325}
					/>
				</QueueAnim>

				<QueueAnim
					component={Col}
					componentProps={{
						md: 15,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Title key='1' level={5}>
						5 Steps to Help You get the Max
					</Title>

					<Paragraph key='2'>
						<Text>Put a Tarp on It!</Text> - Prevent further damage to your
						roof, siding, windows and interior of your home by putting tarps
						over any openings that were created by wind or hail.
					</Paragraph>

					<Paragraph key='3'>
						<Text>Call Your Public Adjuster Immediately</Text> - When it comes
						to assessing damage, taking pictures, and contacting the insurance
						company, sooner is better.
					</Paragraph>

					<Paragraph key='4'>
						<Text>Document Everything</Text> - How long was the hail storm? How
						big were the hailstones? What items were damaged inside and outside
						of your home?
					</Paragraph>

					<Paragraph key='5'>
						<Text>Save all Receipts</Text> - Some insurance companies withhold a
						portion of the settlement until all work is completed. Save all
						receipts for any repairs or work done.
					</Paragraph>

					<Paragraph key='6'>
						<Text>Let the Public Adjuster do the Talking!</Text> - Let the
						Public Adjuster do the Talking!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
