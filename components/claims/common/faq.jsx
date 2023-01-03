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
					key='faq-queue'
					component={Col}
					componentProps={{
						md: { offset: 2, span: 20 },
						className: 'full-head',
					}}
					{...config.QueueAnim({})}
				>
					<Card
						key='1'
						title='Is an oil heater puff back covered in my insurance policy?'
						bordered={false}
					>
						Oil heater puff backs are covered under the "smoke" section of most
						policies.
					</Card>

					<Card
						key='2'
						title='When is an oil heater puff back not covered?'
						bordered={false}
					>
						An ongoing issue that has not been serviced for an extended period
						of time will usually not get covered by your insurance company.
					</Card>

					<Card key='3' title='Am I covered for re-painting?' bordered={false}>
						Most insurance companies will try to get away with just clean-up
						restoration, but ACI Adjustment Group's team negotiates for
						repainting any affected rooms in the home.
					</Card>

					<Card
						key='4'
						title='Am I covered for furniture and clothing?'
						bordered={false}
					>
						Your insurance company should at least cover you for professional
						cleaning of furniture and clothing, however some items may need
						replacement if damaged beyond repair
					</Card>

					<Card
						key='5'
						title='How do I start a other common claim?'
						bordered={false}
					>
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
