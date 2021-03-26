import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const WhatTheyDoSection = ({ community }) => {
	return (
		<div className='what-they-do-container'>
			<Title level={2} className='title'>
				What Does a Public Adjuster <Text> Do For You?</Text>
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='what-they-do-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						A public adjuster remains by your side throughout the claim process.
						Some of the things they can help you with include:
					</Paragraph>

					<Paragraph key='2'>These parameters include:</Paragraph>

					<Paragraph key='3'>
						<ul>
							<li key='1'>
								sIdentifying the cause of the damage to your property and
								helping you prevent any further damage before repair.{' '}
							</li>

							<li key='2'>
								Formally notifying your insurance provider about your property
								damage.
							</li>

							<li key='3'>
								Collecting photo and report-based evidence of the damage done to
								your property.
							</li>

							<li key='4'>
								Scanning your insurance policy in depth to determine what is
								covered by it.
							</li>

							<li key='5'>
								Meeting with the insurance claim adjusters on your behalf and
								prove the damages to them.
							</li>

							<li key='6'>
								Making a fully detailed value appraisal of the damage your
								property has sustained.
							</li>

							<li key='7'>
								Negotiating the claim with your insurance provider on your
								behalf.
							</li>

							<li key='8'>
								Making it possible for you to get the highest possible
								compensation for your claim.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='4'>
						That pretty much sums up what a public adjuster{' '}
						{community.Community.S} can do for you.
					</Paragraph>

					<Paragraph key='5'>
						But how to tell if a public adjuster is good for you?
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WhatTheyDoSection;
