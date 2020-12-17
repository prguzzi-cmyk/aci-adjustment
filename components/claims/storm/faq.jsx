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
			<Title level={2} className='title'>
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
					component={Col}
					componentProps={{
						md: { offset: 2, span: 20 },
						className: 'full-head',
					}}
					{...config.QueueAnim({})}
				>
					<Card
						key='1'
						title='Am I covered for damage by storm?'
						bordered={false}
					>
						Most storm-related damages are covered by homeowners insurance. If
						you have roof or siding damage from wind (including missing shingles
						or siding) you are most likely covered. Hail damage and down trees
						are also covered by insurance.
					</Card>

					<Card
						key='2'
						title='My insurance company denied my roof claim because it was a "maintenance" issue  Is there anything I can do?'
						bordered={false}
					>
						Insurance companies can easily deny roof claims by classifying them
						as "maintenance" or "wear-and-tear." If your claim has been denied,
						get a second opinion from one of our Public Adjusters. We have
						successfully re-opened many roof claims.
					</Card>

					<Card key='3' title='Am I covered for "matching?"' bordered={false}>
						Most policies cover homeowners for "like and kind quality," which is
						a phrase that is up for interpretation. The insurance companies
						often pay for a "patch." In order to restore the value of of your
						home, you will need to restore it to pre-loss condition. In many
						cases, we will negotiate for a whole new roof or wrapping the entire
						home with siding.
					</Card>

					<Card
						key='4'
						title='Am I covered for mold remediation?'
						bordered={false}
					>
						You are covered for mold if the mold resulted from a covered loss.
						For example, if your roof leaks and mold grows as a result of the
						water damage, you're covered for mold remediation. In order to
						ensure mold coverage, a claim must be filed immediately after damage
						occurs.
					</Card>

					<Card key='5' title='How do I start a storm claim?' bordered={false}>
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
