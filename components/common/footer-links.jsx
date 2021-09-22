import { Row, Col, Typography } from 'antd';
import Link from 'next/link';
import { ShopOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/bootstrap';

const { Title, Text, Link: TypoLink } = Typography;

const FooterLinks = () => {
	return (
		<OverPack
			componentProps={{
				className: 'links-container',
			}}
			{...config.OverPack({})}
		>
			<QueueAnim
				key='footer-links-queue'
				component={Row}
				componentProps={{
					gutter: [60, 24],
				}}
				{...config.QueueAnim({})}
			>
				<Col key='1' xs={24} md={8}>
					<Title level={4} className='footer-title'>
						Information
					</Title>

					<Link href={dataset.router.faq.path}>
						<a className='footer-link'>{dataset.router.faq.label}</a>
					</Link>

					<Link href={dataset.router.faqClaimDenied.path}>
						<a className='footer-link'>{dataset.router.faqClaimDenied.label}</a>
					</Link>

					<Link href={dataset.router.privacy.path}>
						<a className='footer-link'>{dataset.router.privacy.label}</a>
					</Link>

					<Link href={dataset.router.aboutUs.path}>
						<a className='footer-link'>{dataset.router.aboutUs.label}</a>
					</Link>
				</Col>

				<Col key='2' xs={24} md={8}>
					<Title level={4} className='footer-title'>
						Resources
					</Title>

					<Link href={dataset.router.schAppointment.path}>
						<a className='footer-link'>{dataset.router.schAppointment.label}</a>
					</Link>

					<Link href={dataset.router.policyReview.path}>
						<a className='footer-link'>{dataset.router.policyReview.label}</a>
					</Link>

					<Link href={dataset.router.blog.path}>
						<a className='footer-link'>{dataset.router.blog.label}</a>
					</Link>

					<Link href={dataset.router.communities.path}>
						<a className='footer-link'>Areas We Cover</a>
					</Link>

					<Link href={dataset.router.careers.path}>
						<a className='footer-link'>{dataset.router.careers.label}</a>
					</Link>
				</Col>

				<Col key='3' xs={24} md={8}>
					<Title level={4} className='footer-title'>
						Contact Us
					</Title>

					<Text className='footer-text'>
						<ShopOutlined />
						{dataset.general.address}
					</Text>
					<Text className='footer-text'>
						<PhoneOutlined />
						Phone:{' '}
						<TypoLink href={`tel:${dataset.general.phone}`}>
							{dataset.general.phoneFormatted}
						</TypoLink>
					</Text>
					<Text className='footer-text'>
						<MailOutlined />
						Email:{' '}
						<TypoLink href={`mailto:${dataset.general.email}`}>
							{dataset.general.email}
						</TypoLink>
					</Text>
				</Col>
			</QueueAnim>
		</OverPack>
	);
};

export default FooterLinks;
