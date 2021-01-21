import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text } = Typography;

const WhyChooseSection = ({ community }) => {
	return (
		<div className='why-choose-container'>
			<Title level={2} className='title'>
				Why choose an{' '}
				{community.Community.S ? (
					[
						'Insurance Public Adjuster in ',
						<Text key='1'>{community.Community.S}</Text>,
					]
				) : (
					<Text key='1'>Insurance Public Adjuster</Text>
				)}
				?
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='why-choose-queue'
					component='ul'
					className='content'
					{...config.QueueAnim({})}
				>
					<li key='1'>
						<Text>Free Assessments:</Text> We discover all applicable coverage
						and entitlements, do a policy review, and offer a free claim
						submission.
					</li>

					<li key='2'>
						<Text>Highly Responsive:</Text> We pride ourselves on fast response
						time and never let your concerns go unaddressed.
					</li>

					<li key='3'>
						<Text>Experience:</Text> Our team of public adjusters has
						consolidated experience necessary to prove the damages, support your
						estimate, and get everything you are owed.
					</li>

					<li key='4'>
						<Text>Personalized Care:</Text> At ACI, our customers are our prime
						responsibility. We work with you from start to finish.
					</li>

					<li key='5'>
						<Text>Higher Settlement:</Text> With our claim calculator, we let
						you find out the appropriate worth of the property damage, and
						ensure that you receive the settlement needed to make necessary
						repairs.
					</li>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default WhyChooseSection;
