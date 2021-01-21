import Link from 'next/link';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;

const InspectionSection = ({ community }) => {
	return (
		<div className='comm-inspection-container'>
			<Title level={2} className='title'>
				Get a <Text>FREE</Text> Inspection and Policy Review
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='comm-inspection-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						While it may not seem to be an issue at the moment, coverage
						disputes are frequent when disaster strikes. ACI is here to help you
						understand what your policy offers. As the leading public adjuster
						in {community.Community.S}, we not only answer your questions
						regarding the property damage and coverage, but we also negotiate on
						your behalf to maximize your claim.
					</Paragraph>

					<Paragraph key='2'>
						We help you recover money for items and areas of your property that
						you might have not realized would be covered.
						<br />
						<br />
					</Paragraph>

					<Paragraph key='3'>
						<b>Property damage claim?</b>
					</Paragraph>

					<Paragraph key='4'>
						Don’t settle for less! Contact us today for a{' '}
						<Link
							href={`${dataset.router.communities.path}/${community.CommunitySlug.S}#inspection-container`}
						>
							<a>
								<Text>FREE</Text>
							</a>
						</Link>{' '}
						policy review and property inspection. No cost, no obligation, and
						you might receive a higher settlement. Call our customer service
						hotline,{' '}
						<Link href={`tel:${dataset.general.phone}`}>
							<a>
								<b>{dataset.general.phoneFormatted}</b>
							</a>
						</Link>{' '}
						to get an immediate answer to any question you have regarding your
						claim.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default InspectionSection;
