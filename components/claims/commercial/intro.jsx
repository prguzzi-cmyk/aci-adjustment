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
				<Text>Frozen Pipe</Text> Solutions
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
					key='intro-image-queue'
					component={Col}
					componentProps={{
						md: 9,
					}}
					{...config.QueueAnim({ type: 'left' })}
				>
					<Image
						key='pipe-leak'
						src={dataset.images.claimWater.pipeLeak.src}
						alt={dataset.images.claimWater.pipeLeak.alt}
						width={450}
						height={450}
					/>
				</QueueAnim>

				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 15,
					}}
					{...config.QueueAnim({ type: 'right' })}
				>
					<Title key='1' level={5}>
						5 Solid Tips for Frozen Solid Pipes
					</Title>

					<Paragraph key='2'>
						<Text>Call your Public Adjuster immediately!</Text> - You will need
						a professional to document your damages with pictures, estimates and
						a report in order to maximize your settlement. ACI Adjustment Group
						has a 24-hour Emergency Service Team.
					</Paragraph>

					<Paragraph key='3'>
						<Text>Heat your pipes!</Text> - If you do not have an electric
						heating pad, use a hair dryer or a heated towel in conjunction with
						a space heater to melt the ice.
					</Paragraph>

					<Paragraph key='4'>
						<Text>Prevent mold!</Text> - Use a dehumidifier to prevent as much
						mold growth as you can until your Public Adjuster arrives. Your
						adjuster may recommend professional services to prevent and/or clean
						any mold.
					</Paragraph>

					<Paragraph key='5'>
						<Text>Separate damaged contents!</Text> - Separate any damaged
						contents and document the damages. Televisions, computers,
						furniture, rugs, clothing and many other household items are covered
						by your insurance policy
					</Paragraph>

					<Paragraph key='6'>
						<Text>Let your Public Adjuster do the talking!</Text> - As you know,
						insurance companies don’t always play fair. Your Public Adjuster
						will be familiar with the typical tricks and games the insurance
						companies use to deny and under-pay claims.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
