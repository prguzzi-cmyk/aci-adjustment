import { Row, Col, Card, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';

const { Title, Text } = Typography;

const HireSection = () => {
	return (
		<div className='hire-container'>
			<Title level={3} className='title'>
				<Text>Hiring</Text> a Public Adjuster
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='hire-faq-queue'
					component={Col}
					componentProps={{
						md: { offset: 2, span: 20 },
						className: 'full-head',
					}}
					{...config.QueueAnim({})}
				>
					<Card
						key='1'
						title='What does a Public Adjuster do?'
						bordered={false}
					>
						A Public Adjuster is a licensed professional claims adjuster. Public
						Adjusters can be hired to negotiate on behalf of homeowners or
						business owners in order to receive a fair claim settlement. Public
						adjusters are state licensed experts and work strictly off a
						contingency fee basis. That way, you pay NOTHING out of pocket
						throughout the entire process. As public adjusters, it is our job to
						accurately maximize your claim to ensure your property is restored
						to its pre-loss condition. The insurance company’s adjuster is
						employed by the insurance company, while a Public Adjuster is
						employed by you!
					</Card>

					<Card
						key='2'
						title='Why should I hire a Public Adjuster?'
						bordered={false}
					>
						Have you ever filed a claim before? If you have, you know it is a
						frustrating and stress inducing process. Our expert Public Adjusters
						handle all communication, negotiation, estimates and appointments
						with your insurance company start to finish. Typically, hiring a
						Public Adjuster will result in your claim being settled higher and
						more quickly. Here at ACI, our experienced Public Adjusters are
						trained to help you maximize your claim settlement. Having a Public
						Adjuster represent you during your insurance claim is no different
						than having an attorney represent you in court, or a professional
						athlete hiring an agent.
					</Card>

					<Card
						key='3'
						title='How does a Public Adjuster get me a higher settlement?'
						bordered={false}
					>
						ACI Adjustment Group will negotiate on your behalf to maximize your
						claim. Our experience in construction, our understanding of your
						insurance policy, and our aggressive estimates and negotiation allow
						us to fight for and recover fair settlements for our customers. Our
						adjusters work closely with teams of contractors, appraisers,
						engineers, and attorneys to bring you back to full indemnity. Many
						times, we recover money for items and areas of the home that the
						homeowner did not realize would be covered.
					</Card>

					<Card
						key='4'
						title='How do I choose the right Public Adjuster?'
						bordered={false}
					>
						Choosing the right Public Adjuster can be difficult. There are a
						number of Public Adjusters serving the Tri-state area, and most of
						them claim to be the best! The best companies to hire are companies
						that have credentials (like ACI Adjustment Group’s #1 Ranking for
						Customer Service and Satisfaction), companies that have
						testimonials, and companies that have a business address rather than
						a P.O. Box or home address.
						<br />
						<br />
						There are a lot of individual Public Adjusters who adjust claims on
						the side and do not have a firm managing the details of the claim.
						While many of these adjusters will charge minimal fees, the amount
						they recover may not be worth the fee reduction.
					</Card>

					<Card
						key='5'
						title='What are the risks of hiring the wrong Public Adjuster?'
						bordered={false}
					>
						There are many different aspects of a claim. Some Public Adjusters
						only have experience with estimating construction, but when it comes
						to writing letters, citing policy, or estimating business income,
						they fall short.
						<br />
						<br />
						Besides experience and expertise, customer service is the number one
						reason our customers make repeat claims with us. Many Public
						Adjusters will not answer their phone or return calls, give up on
						claims, and even disappear after the first check comes in! ACI
						Adjustment Group will fight until you’re able to complete your
						repairs!
					</Card>

					<Card
						key='6'
						title='What are the risks of handling my claim on my own?'
						bordered={false}
					>
						Many homeowners attempt to handle their own claim first, and then
						hire a Public Adjuster to recover what the insurance company refused
						to pay. While this sounds like a good strategy at first glance, it
						can often lead to problems in the claims process. The insurance
						companies are trained to deny claims and homeowners can often be
						misled into thinking they don’t have coverage for certain portions
						of the claim. The homeowner’s statements can be misused by the
						insurance company to reach a denial. Hiring a Public Adjuster from
						the beginning of the claim is the best way to ensure the maximum
						fair settlement for your property claim.
					</Card>

					<Card
						key='7'
						title='Why should I choose ACI Adjustment Group?'
						bordered={false}
					>
						ACI Adjustment Group’s team of licensed and bonded professional
						Public Adjusters has the experience and expertise to negotiate your
						claim and recover the best settlement possible. We have received the
						award for #1 in Customer Service and Satisfaction from United Public
						Adjusters for 3 consecutive years. We pride ourselves in our
						accessibility and availability to our customers. Our customers can
						access their claim documents and status updates electronically
						through our online back office, or they can call 1-800-809-4302 and
						someone will be able to assist them. Our team will fight until the
						job is completed and we’ve earned a satisfied customer!
					</Card>

					<Card
						key='8'
						title='What insurance companies does ACI Adjustment Group work with?'
						bordered={false}
					>
						ACI Adjustment Group can negotiate with your homeowners or business
						owners insurance company regardless of who your provider is. We've
						handled claims for customers with all types of insurance policies
						(even special coverages) from every major insurance company
						nationwide and a multitude of smaller insurance providers based all
						across the USA. ACI Adjustment Group has likely already handled
						thousands of homeowners insurance claims with YOUR insurance
						company!
						<br />
						<br />
						<ul>
							<li>AAA Insurance Company</li>
							<li>All State Insurance Company</li>
							<li>America Insurance Company</li>
							<li>Ameriprise Insurance Company</li>
							<li>Brethren Mutual Insurance Company</li>
							<li>California Casualty Insurance Company</li>
							<li>Chubb Insurance Company</li>
							<li>Continental Insurance Company</li>
							<li>Erie Insurance Company</li>
							<li>Fair Plan</li>
							<li>Farmers Insurance Company</li>
							<li>Fireman's Fund</li>
							<li>Foremost Insurance Company</li>
							<li>Franklin Mutual Insurance Company</li>
							<li>Goodville Insurance Company</li>
							<li>Hanover Fire & Casualty Insurance Company</li>
							<li>The Hartford Insurance Company</li>
							<li>Harleysville Insurance Company</li>
							<li>Homesite Insurance Company</li>
							<li>IDS Insurance Company</li>
							<li>Keystone Insurance Company</li>
							<li>Lexington Insurance Company</li>
							<li>Liberty Insurance Company</li>
							<li>Liberty Mutual Insurance Company</li>
							<li>Lititz Mutual Insurance Company</li>
							<li>Lloyd's of London Insurance Company</li>
							<li>MetLife Insurance Company</li>
							<li>Mercer United Fire Group</li>
							<li>Mutual Benefit Insurance Company</li>
							<li>Narragansett Insurance Company</li>
							<li>Nationwide Insurance Company</li>
							<li>New Jersey Manufacturer's Insurance Company</li>
							<li>Ohio Casualty Insurance Company</li>
							<li>Philadelphia Contributionship</li>
							<li>Phoenix Insurance Company</li>
							<li>Premier Group Insurance Company</li>
							<li>QBE Insurance Company</li>
							<li>Safeco Insurance Company</li>
							<li>Selective Insurance Company</li>
							<li>State Farm Insurance Company</li>
							<li>Travelers Insurance Company</li>
							<li>USAA Insurance Company</li>
							<li>Utica Insurance Company</li>
							<li>West American Insurance Company</li>
							<li>Westfield Insurance Company</li>
						</ul>
					</Card>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default HireSection;
