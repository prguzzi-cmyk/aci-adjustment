import Link from 'next/link';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';
import dataset from '../../../utils/datasets/bootstrap';

const { Title, Text, Paragraph } = Typography;

const GroupHelpSection = ({ community }) => {
	return (
		<div className='group-help-container'>
			<Title level={4} className='title'>
				How Can ACI Adjustment Group <Text>Help In This</Text>?
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='group-help-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						ACI Adjustment group employs some of the most skilled public
						adjusters. These licensed and trained people will guide you through
						all of the steps of filing and following an insurance claim.
					</Paragraph>

					<Paragraph key='2'>
						Just like having an attorney can greatly increase your chances of
						winning a lawsuit, having a trained public adjuster{' '}
						{community &&
							community.Community &&
							community.Community.S &&
							`${community.Community.S} `}{' '}
						on your side can make sure that you get the most out of your
						property insurance claim.
					</Paragraph>

					<Paragraph key='3'>
						Even if you have already filed a claim, calling ACI{' '}
						<Link href={`tel:${dataset.general.phone}`}>
							<a>
								<b>{dataset.general.phoneFormatted}</b>
							</a>
						</Link>{' '}
						can be useful.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default GroupHelpSection;
