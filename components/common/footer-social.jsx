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
import Image from 'next/image';

import config from '../../utils/config';
import dataset from '../../utils/datasets/general';

const { Link } = Typography;

const FooterSocial = () => {
	const handleSSLClick = (e) => {
		e.preventDefault();

		window.open(
			'https://secure.ssl.com/team/a7f-1gbem5k/site_seals/1d02c82f-60b758b4/site_report',
			'site_report',
			'height=500, width=400, top=100, left=100'
		);
	};

	return (
		<OverPack
			component={Row}
			componentProps={{
				className: 'social-container',
				align: 'middle',
			}}
			{...config.OverPack({})}
		>
			<QueueAnim
				key='footer-ssl'
				className='ssl-container'
				component={Col}
				componentProps={{
					md: 4,
				}}
				{...config.QueueAnim({ type: 'right' })}
			>
				<Link
					key='ssl'
					onClick={handleSSLClick}
					href='https://secure.ssl.com/team/a7f-1gbem5k/site_seals/1d02c82f-60b758b4/site_report'
				>
					<Image
						width={130}
						height={60}
						src='https://securesslcom.a.cdnify.io/assets/ssl_seal_1-3dfcdf69a9e544495dbcf366a74ee5c4baca7e4f8018f7ddfa22f2de9bcf464d.png'
						alt='Ssl seal 1'
					/>
				</Link>
			</QueueAnim>

			<QueueAnim
				key='footer-social-queue'
				component={Col}
				componentProps={{
					md: 20,
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
