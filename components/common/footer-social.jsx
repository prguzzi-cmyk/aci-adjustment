import { Row, Col, Typography } from 'antd';
import {
	FacebookFilled,
	TwitterSquareFilled,
	LinkedinFilled,
	YoutubeFilled,
	MailFilled,
} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/general';

const { Link } = Typography;

const FooterSocial = () => {
	return (
		<OverPack
			component={Row}
			componentProps={{
				className: 'social-container',
			}}
			{...config.OverPack({})}
		>
			<QueueAnim
				key='footer-social-queue'
				component={Col}
				componentProps={{
					md: 24,
				}}
				{...config.QueueAnim({ type: 'right' })}
			>
				<Link key='1' href={dataset.socialLinks.facebook}>
					<FacebookFilled />
				</Link>

				<Link key='2' href={dataset.socialLinks.twitter}>
					<TwitterSquareFilled />
				</Link>

				<Link key='3' href={dataset.socialLinks.linkedIn}>
					<LinkedinFilled />
				</Link>

				<Link key='4' href={dataset.socialLinks.youTube}>
					<YoutubeFilled />
				</Link>

				<Link key='5' href={`mailto:${dataset.general.email}`}>
					<MailFilled />
				</Link>
			</QueueAnim>
		</OverPack>
	);
};

export default FooterSocial;
