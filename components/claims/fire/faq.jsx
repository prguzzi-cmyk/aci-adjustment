import Link from 'next/link';
import { Row, Col, Card, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import dataset from '../../../utils/datasets/bootstrap';
import config from '../../../utils/config';

const { Title, Text } = Typography;

const FaqSection = () => {
	return (
		<div className='faq-container'>
			<Title level={3} className='title'>
				<Text>Frequently</Text> Asked <Text>Questions</Text>
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='faq'
					component={Col}
					componentProps={{
						md: { offset: 2, span: 20 },
						className: 'full-head',
					}}
					{...config.QueueAnim({})}
				>
					<Card
						key='1'
						title='Are all fires covered in my insurance policy?'
						bordered={false}
					>
						Fires caused unintentionally are covered by your insurance policy.
						Whether you suffer from a total loss or just a small kitchen fire,
						you will be covered by insurance for restoring the damage.
					</Card>

					<Card
						key='2'
						title='My home is unlivable.  Am I covered for living expenses?'
						bordered={false}
					>
						Yes, you are covered for living expenses, and ACI Adjustment Group
						can often negotiate for a large, immediate advance payment from your
						insurance company for food and shelter if your home is not able to
						be lived in.
					</Card>

					<Card
						key='3'
						title="My home didn't burn down, but there is smoke everywhere. Am covered for restoring my home?"
						bordered={false}
					>
						Most insurance companies will try to get away with simple clean-up
						restoration, but ACI Adjustment Group's team negotiates for removal
						of drywall, carpeting, furniture, and insulation for the entire
						affected area of the home.
					</Card>

					<Card
						key='4'
						title='Am I covered for furniture and clothing?'
						bordered={false}
					>
						In a small fire, your insurance company should at least cover you
						for professional cleaning of furniture and clothing, however if
						those items are damaged beyond repair, we can negotiate for the cost
						to replace them.
					</Card>

					<Card key='5' title='How do I start a fire claim?' bordered={false}>
						You can start a claim online by clicking{' '}
						<Link href={dataset.router.fileClaim.path}>
							<a>HERE</a>
						</Link>
						{' or call '}
						<Link href={`tel:${dataset.general.phone}`} strong>
							<a>{dataset.general.phoneFormatted}</a>
						</Link>{' '}
						to have an expert inspect your damage first, free of charge.
					</Card>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default FaqSection;
