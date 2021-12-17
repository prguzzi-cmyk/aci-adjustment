import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

import dataset from '../../utils/datasets/bootstrap';

const { Title, Text, Link } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				Our <Text>Mission</Text>
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'center',
					align: 'middle',
				}}
				{...config.OverPack({})}
			>
				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 24,
					}}
					{...config.QueueAnim({})}
				>
					<Text key='intro-text' className='text-xs-justify'>
						Our mission at ACI Adjustment Group as a Public Adjuster is to
						protect the policyholder. Many home and business owners are unaware
						that they have thousands of dollars that are rightfully due to them.
						A Public Adjuster is an advocate for you. Millions of dollars are
						left on the table and not paid each year by the insurance companies
						to homeowners and business owners due to a lack of knowledge and
						expertise this is where a Public Adjuster is able to help. Along
						with assisting with claims, we are also dedicated to bringing
						awareness and educating the general public on the various coverage's
						included in their policy.{' '}
						<Link
							href={`${dataset.router.home.url}${dataset.router.aboutUs.path}`}
						>
							ACI Adjustment
						</Link>{' '}
						Group's Public Adjusters are here to help. Public Adjusters are
						needed due to the Insurance contracts you signed with the Insurance
						companies. In it you agree to supply the burden of proof of damages.
						In doing so you must provide estimates and a report to clearly state
						the extent of damages. This is where a{' '}
						<Link
							href={`${dataset.router.home.url}${dataset.router.blog.path}/finding-public-adjuster`}
						>
							Public adjuster
						</Link>{' '}
						comes in. The Insurance adjuster for the Insurance company has no
						obligation legally to prove your damage. This Insurance adjuster
						isn't even required to be licensed by the state and doesn't have to
						pass any kind of testing. Insurance adjusters are employees of
						insurance companies or hired sub contractors. Their main obligation
						is to the insurance company, their employer. Insurance claims
						adjusters get paid by the insurance companies. They are obligated to
						the guidelines of their employer. Insurance adjusters by no means
						should be confused with a State Licensed Public Adjuster. Public
						Adjusters go through a rigorous state exam that consist of many
						hours of study. Insurance adjusters have no such state exam and no
						study requirements. Comparing an insurance claim adjuster to a
						Public Adjusters is like comparing apples to oranges. Your home is a
						very important asset let a Public adjuster get you what you are
						entitled to receive.
					</Text>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
