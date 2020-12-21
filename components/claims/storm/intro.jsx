import { Row, Col, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const IntroSection = () => {
	return (
		<div className='intro-container'>
			<Title level={2} className='title'>
				<Text>Storm</Text> Claims
			</Title>

			<OverPack
				component={Row}
				componentProps={{
					className: 'content',
					justify: 'middle',
					align: 'center',
				}}
				{...config.OverPack({ playScale: config.PlayScale.bottom })}
			>
				<QueueAnim
					key='intro-content-queue'
					component={Col}
					componentProps={{
						md: 22,
					}}
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						Many insurers are focused on settling claims for as little as
						possible, or even denying claims entirely during a catastrophe. At
						ACI, our state licensed and bonded public adjusters have years of
						experience negotiating storm claims. ACI is here to fight on your
						behalf! Let our storm and hurricane damage insurance claims experts
						represent your claim. Our residential and commercial insurance
						adjusters, along with our teams of appraisers, engineers, and
						attorneys will help you maximize your claim settlement!
					</Paragraph>

					<Paragraph key='2'>
						Your insurance carrier has decades of experience in working with and
						identifying claims. However, the typical home or business owner does
						not have much experience with intricate claims processes. It is
						crucial to hire an ACI storm insurance claims adjuster. Our seasoned
						ACI public adjusters understand the ins and outs of negotiating a
						weather related claim. We are familiar with the tactics used by
						insurance companies to deny or severely underpay storm damage
						claims.
					</Paragraph>

					<Paragraph key='3'>
						Hiring an expert ACI public adjuster for your hurricane, tropical
						storm, tornado, hail or storm damages will be the best route to take
						in acquiring a satisfactory claim payout.
					</Paragraph>

					<Paragraph key='4'>
						Regarding the claims process, the sooner we are representing you,
						the better. We assist customers all over the country with:
						<br />
						<br />
						<ul>
							<li>
								Assisting home and business owners gain knowledge regarding
								their policy coverage
							</li>
							<li>
								Directly negotiating with the insurance carrier on your behalf
							</li>
							<li>
								Photographing and documenting the full extent of damages
								incurred
							</li>
							<li>
								Scheduling appointments and creating extensive inventory logs
							</li>
							<li>
								Keeping in contact with you, the insured, through every step of
								the process.
							</li>
						</ul>
					</Paragraph>

					<Paragraph key='5'>
						With the help of ACI Adjustment Group, you and your claim will have
						the best possible representation and advocacy in the country. It is
						our job to keep the insurance companies honest and level the playing
						field. Let us help you maximize your claim!
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default IntroSection;
