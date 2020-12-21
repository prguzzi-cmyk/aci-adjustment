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
						title='Is ACI Adjustment Group a law firm?'
						bordered={false}
					>
						ACI Adjustment Group is not a law firm and will not provide legal
						advice. However, we do work closely with a team of attorneys should
						a claim need to be settled in a court of law. It is very common for
						a property owner to hire a Public Adjuster as their initial
						representative, as a Public Adjuster's fees are typically lower and
						a Public Adjuster can provide thorough documentation should a claim
						ever need to be settled by an attorney.
					</Card>

					<Card
						key='2'
						title='What commercial adjusting services will ACI Adjustment Group provide?'
						bordered={false}
					>
						Our team of licensed Public Adjusters will thoroughly review your
						policy, document all damages and lost property, take photographs,
						provide a thorough and detailed scope and estimate, handle all
						communication with your insurance company, meet all time-sensitive
						deadlines, and negotiate on your behalf to secure a maximum
						settlement.
					</Card>

					<Card
						key='3'
						title='What type of commercial properties can ACI help with?'
						bordered={false}
					>
						ACI Adjustment Group has assisted and adjusted claims for clients
						and corporations of various scales. Examples of commercial accounts
						we can help with are: Apartment Buildings and Condominiums,
						Government Buildings, Industrial Properties, Commercial Office
						Buildings, Shopping Centers and Malls, Small Businesses,
						Universities and School Buildings, and Loss of Business Claims.
					</Card>

					<Card
						key='4'
						title='How do I start a commercial claim?'
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
