import { useState } from 'react';
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import TweenOne from 'rc-tween-one';
import { MenuOutlined, HomeTwoTone } from '@ant-design/icons';

import dataset from '../../utils/datasets/router';

import config from '../../utils/config';

const { SubMenu } = Menu;

const Navbar = ({ isMobile }) => {
	const [phoneOpen, setPhoneOpen] = useState(undefined);

	const moment = phoneOpen === undefined ? 300 : null;

	return (
		<Row className={`nav-container ${phoneOpen ? 'open' : ''}`}>
			<Col flex={isMobile ? '1 1 100%' : '1 1 auto'}>
				<TweenOne
					className={'logo-container'}
					{...config.TweenOne({ coordinate: 'x', path: '-=30', delay: 200 })}
				>
					<Link href='/'>
						<a>
							<Image
								className='logo'
								src='/images/logo.png'
								alt='Logo'
								width={113}
								height={50}
								quality={100}
							/>
						</a>
					</Link>
				</TweenOne>

				{isMobile && (
					<div className='nav-toggle' onClick={() => setPhoneOpen(!phoneOpen)}>
						<em />
						<em />
						<em />
					</div>
				)}
			</Col>

			<Col flex={isMobile ? '0 1 100%' : '0 1 auto'} style={{ zIndex: 1 }}>
				<TweenOne
					animation={
						isMobile
							? {
									x: 0,
									height: 0,
									duration: 300,
									onComplete: (e) => {
										if (phoneOpen) {
											e.target.style.height = 'auto';
										}
									},
									ease: 'easeInOutQuad',
							  }
							: null
					}
					moment={moment}
					reverse={!!phoneOpen}
				>
					<Menu
						className={`navbar ${isMobile ? 'mobile-nav' : ''}`}
						theme='light'
						mode={isMobile ? 'inline' : 'horizontal'}
						defaultSelectedKeys={['home']}
						overflowedIndicator={<MenuOutlined />}
					>
						<Menu.Item key={dataset.router.home.key} icon={<HomeTwoTone />}>
							<Link href={dataset.router.home.path}>
								<a>{dataset.router.home.label}</a>
							</Link>
						</Menu.Item>

						<Menu.Item key={dataset.router.schAppointment.key}>
							<Link href={dataset.router.schAppointment.path}>
								<a>{dataset.router.schAppointment.label}</a>
							</Link>
						</Menu.Item>

						<SubMenu key='services' title={dataset.router.services.label}>
							<Menu.Item key={dataset.router.services.key}>
								<Link href={dataset.router.services.path}>
									<a>{dataset.router.services.label}</a>
								</Link>
							</Menu.Item>
							<Menu.Item key='claim-calc'>Claim Calculator</Menu.Item>
							<Menu.Item key='file-claim'>File a Claim</Menu.Item>
							<Menu.Item key='policy-review'>Policy Review</Menu.Item>
						</SubMenu>

						<SubMenu key='faq' title='FAQ'>
							<SubMenu key='ques-claim' title='Questions About your Claim'>
								<Menu.Item key='claim-denied'>
									Home Owners insurance Claim Denied
								</Menu.Item>
							</SubMenu>
							<SubMenu key='covered' title='Whats Covered?'>
								<Menu.Item key='fire'>Fire</Menu.Item>
								<Menu.Item key='oil-heater'>Oil Heater Puff Backs</Menu.Item>
								<Menu.Item key='real-estate'>Real Estate</Menu.Item>
								<Menu.Item key='storm'>Storm Claims</Menu.Item>
								<Menu.Item key='water'>Water Claims</Menu.Item>
							</SubMenu>
						</SubMenu>

						<Menu.Item key={dataset.router.careers.key}>
							<Link href={dataset.router.careers.path}>
								<a>{dataset.router.careers.label}</a>
							</Link>
						</Menu.Item>

						<Menu.Item key='blog'>Blog</Menu.Item>

						<SubMenu key='about' title='About Us'>
							<Menu.Item key='testimonials'>Testimonials</Menu.Item>
						</SubMenu>

						<Menu.Item key='contact'>Contact Us</Menu.Item>
					</Menu>
				</TweenOne>
			</Col>
		</Row>
	);
};

export default Navbar;
