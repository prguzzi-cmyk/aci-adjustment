import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../../utils/config';

const { Title, Text, Paragraph } = Typography;

const PublicAdjusterSection = ({ community }) => {
	return (
		<div className='public-adjuster-container'>
			<Title level={2} className='title'>
				Who is a Public Adjuster <Text>{community.Community.S}</Text>?
			</Title>

			<OverPack {...config.OverPack({ playScale: config.PlayScale.bottom })}>
				<QueueAnim
					key='public-adjuster-queue'
					className='content'
					{...config.QueueAnim({})}
				>
					<Paragraph key='1'>
						A public adjuster is a trained and licensed negotiator who
						negotiates the particulars of an insurance claim with the insurance
						company on your behalf.
					</Paragraph>

					<Paragraph key='2'>
						The insurance company has their own negotiator, known as the
						insurance claim adjuster. To have a level playing field, you need
						the services of public adjuster {community.Community.S} to represent
						you.
					</Paragraph>

					<Paragraph key='3'>
						Having a public adjuster on your side is imperative if you want to
						get a reasonable compensation from the insurance company. Why? Keep
						Reading and you'll know.
					</Paragraph>

					<Paragraph key='4'>
						But how does a public adjuster do that? Here's some insight on that.
					</Paragraph>
				</QueueAnim>
			</OverPack>
		</div>
	);
};

export default PublicAdjusterSection;
