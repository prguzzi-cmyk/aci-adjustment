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

const { Link } = Typography;

const FooterSocial = ({ config }) => {
	return (
		<OverPack
			componentProps={{
				className: 'social-container',
			}}
			{...config.OverPack({})}
		>
			<Row gutter={[10, 30]}>
				<QueueAnim
					component={Col}
					componentProps={{
						md: 24,
					}}
					key='queue'
					{...config.QueueAnim({ type: 'right' })}
				>
					<Link key='1' href='https://www.facebook.com/ACIAdjustmentGroup'>
						<FacebookFilled />
					</Link>

					<Link key='2' href='https://twitter.com/aciadjustment'>
						<TwitterSquareFilled />
					</Link>

					<Link
						key='3'
						href='https://www.linkedin.com/company/aci-adjustment-group/about'
					>
						<LinkedinFilled />
					</Link>

					<Link
						key='4'
						href='https://www.youtube.com/channel/UC3Syzn5Gmr1w36TJ0U2oYYQ'
					>
						<YoutubeFilled />
					</Link>

					<Link key='5' href='mailto:office@aciadjustment.com'>
						<MailFilled />
					</Link>
				</QueueAnim>
			</Row>
		</OverPack>
	);
};

export default FooterSocial;
