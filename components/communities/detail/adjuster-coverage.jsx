import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const AdjusterCoverageSection = ({ community }) => {
	return (
		<div className='adjuster-coverage-container'>
			<Title level={3} className='title'>
				Public{' '}
				<Text>
					Adjuster
					{community &&
						community.Community &&
						community.Community.S &&
						` ${community.Community.S} (${community.ZipCode.S})`}
				</Text>{' '}
				Coverage
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='adjuster-coverage-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						As a leading public adjuster
						{community &&
							community.Community &&
							community.Community.S &&
							` in ${community.Community.S}`}
						, ACI covers almost all usual kinds of property damage. The most
						commonly covered cases include:
					</Paragraph>

					<Paragraph key='2'>
						<ul>
							<li>Storm claim.</li>

							<li>Water claim.</li>

							<li>Fire claim.</li>

							<li>Theft claim.</li>

							<li>Vandalism claims.</li>

							<li>Oil heater puff claim.</li>

							<li>Commercial claims.</li>

							<li>Any other common claim.</li>
						</ul>
					</Paragraph>

					<Paragraph key='3'>
						Contact ACI Public Adjusters today to get the maximum return on your
						insurance claim!
					</Paragraph>

					<Paragraph key='4'>
						Our agents are always there to help you with a free inspection or
						policy examination. Just reach out to us and you'll see why ACI is
						hailed as a leading public adjuster
						{community &&
							community.Community &&
							community.Community.S &&
							` in ${community.Community.S}`}
						.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default AdjusterCoverageSection;
