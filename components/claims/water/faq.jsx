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
						title='Is water damage covered in my insurance policy?'
						bordered={false}
					>
						Water damage is covered in most policies if it occurred suddenly
						from plumbing or weather.
					</Card>

					<Card
						key='2'
						title='When is water damage not covered?'
						bordered={false}
					>
						Flood, ground water and maintenance issues are not covered under
						homeowners insurance.
					</Card>

					<Card
						key='3'
						title='Am I covered if my sump-pump fails?'
						bordered={false}
					>
						You are only covered for sump pump failure if you have a Sump Pump
						Endorsement for your policy. You may call your insurance company to
						add this coverage endorsement.
					</Card>

					<Card
						key='4'
						title='Am I covered for mold remediation?'
						bordered={false}
					>
						You are covered for mold if the mold resulted from a covered loss.
						For example, if your pipes burst and mold grows as a result of the
						water damage, you're covered for mold remediation.
					</Card>

					<Card key='5' title='How do I start a water claim?' bordered={false}>
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
