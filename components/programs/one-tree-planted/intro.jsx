import { Row, Col, Typography } from 'antd';
import Image from 'next/image';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Program <Text>One Tree Planted</Text>
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
						key='policy-review'
						src={dataset.images.progOneTreePlanted.src}
						alt={dataset.images.progOneTreePlanted.alt}
						layout='fill'
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
					<Paragraph key='1'>
						ACI Adjustment Group (ACI) is proud to be participating in the
						planting Sustainable Housing Project. This is a project where one
						million trees will be planted to help the ecosystem. ACI will donate
						one tree for every client we get that sustained damage that
						including all commercial and business claims. This initiative is
						another way to restore the environment when disaster strikes and
						make a contribution to our Childress future. It is estimated that a
						tree can account for a substantial percentage of the timber used to
						build an average home.
					</Paragraph>

					<Paragraph key='2'>
						Our clients are overjoyed that this program exists and at no cost to
						them that they are helping to save the environment. The homeowner
						claims, business owner claims, and commercial claims all qualify.
						Also, there is no need to be a client either anyone with a claim can
						request a tree planted just send your estimate showing your damage
						and we will start digging it's that simple. Fire claims are
						extremely destructive and sometimes can damage an entire city block
						by engulfing the surrounding houses in smoke. This smoke is toxic
						and has dire health effects when inhaled over long periods. It's
						critically important you get a restoration company to clean it.
					</Paragraph>

					<Paragraph key='3'>
						ACI Adjustment Group recommends Respro to all our clients as they
						are extremely professional and only take what the insurance company
						pays them so no surprises after the fact like a big bill. The Respro
						also contributes to the Sustainable Housing Project with an
						additional tree and the more trees the better. We are very proud of
						the difference our clients are making in the World. If you would
						like information on how you can help please feel free to call us
						anytime. ACI Adjustment Group thanks you for your support.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
