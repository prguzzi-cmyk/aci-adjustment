import { Row, Col, Typography } from 'antd';
import Link from 'next/link';
import { ShopOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const { Title, Text, Link: TypoLink } = Typography;

const FooterLinks = ({ config, dataset }) => {
	return (
		<OverPack
			componentProps={{
				className: 'links-container',
			}}
			{...config.OverPack({})}
		>
			<QueueAnim
				component={Row}
				componentProps={{
					gutter: [60, 24],
				}}
				key='queue'
				{...config.QueueAnim({})}
			>
				<Col key='1' md={8}>
					<Title level={4} className='footer-title'>
						Information
					</Title>

					<Link href='/blog'>
						<a className='footer-link'>Blog</a>
					</Link>

					<Link href='/testimonials'>
						<a className='footer-link'>Testimonials</a>
					</Link>
				</Col>

				<Col key='2' md={8}>
					<Title level={4} className='footer-title'>
						Resources
					</Title>

					<Link href='/schedule-appointment'>
						<a className='footer-link'>Schedule Appointment</a>
					</Link>

					<Link href='/file-claim'>
						<a className='footer-link'>File a Claim</a>
					</Link>
				</Col>

				<Col key='3' md={8}>
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
