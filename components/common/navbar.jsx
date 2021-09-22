import { useState } from 'react';
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
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
	const router = useRouter();

	var selectedKey = dataset.router.home.key;

	if (router.pathname !== '/') {
		selectedKey = /[^/]*$/.exec(router.pathname)[0];
	}

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
						defaultSelectedKeys={[selectedKey]}
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

						<SubMenu key='whats-covered' title="What's Covered?">
							<Menu.Item key={dataset.router.services.key}>
								<Link href={dataset.router.services.path}>
									<a>{dataset.router.services.label}</a>
								</Link>
							</Menu.Item>

							<SubMenu key='tools' title='Tools'>
								{/* <Menu.Item key='claim-calc'>Claim Calculator</Menu.Item>*/}

								<Menu.Item key={dataset.router.fileClaim.key}>
									<Link href={dataset.router.fileClaim.path}>
										<a>{dataset.router.fileClaim.label}</a>
									</Link>
								</Menu.Item>

								<Menu.Item key={dataset.router.policyReview.key}>
									<Link href={dataset.router.policyReview.path}>
										<a>{dataset.router.policyReview.label}</a>
									</Link>
								</Menu.Item>
							</SubMenu>
						</SubMenu>

						<SubMenu key='faq' title='FAQ'>
							<Menu.Item key={dataset.router.faq.key}>
								<Link href={dataset.router.faq.path}>
									<a>{dataset.router.faq.label}</a>
								</Link>
							</Menu.Item>

							<Menu.Item key={dataset.router.faqClaimQuestions.key}>
								<Link href={dataset.router.faqClaimQuestions.path}>
									<a>Questions About your Claim</a>
								</Link>
							</Menu.Item>

							<Menu.Item key={dataset.router.faqClaimDenied.key}>
								<Link href={dataset.router.faqClaimDenied.path}>
									<a>Home Owners insurance Claim Denied</a>
								</Link>
							</Menu.Item>
						</SubMenu>

						<Menu.Item key={dataset.router.gallery.key}>
							<Link href={dataset.router.gallery.path}>
								<a>{dataset.router.gallery.label}</a>
							</Link>
						</Menu.Item>

						<Menu.Item key={dataset.router.blog.key}>
							<Link href={dataset.router.blog.path}>
								<a>{dataset.router.blog.label}</a>
							</Link>
						</Menu.Item>

						<SubMenu key='who-are-we' title='Who are we?'>
							<Menu.Item key={dataset.router.aboutUs.key}>
								<Link href={dataset.router.aboutUs.path}>
									<a>{dataset.router.aboutUs.label}</a>
								</Link>
							</Menu.Item>

							<Menu.Item key={dataset.router.communities.key}>
								<Link href={dataset.router.communities.path}>
									<a>Areas We Cover</a>
								</Link>
							</Menu.Item>

							{/* <Menu.Item key='testimonials'>Testimonials</Menu.Item> */}
						</SubMenu>

						<Menu.Item key={dataset.router.contact.key}>
							<Link href={dataset.router.contact.path}>
								<a>{dataset.router.contact.label}</a>
							</Link>
						</Menu.Item>
					</Menu>
				</TweenOne>
			</Col>
		</Row>
	);
};

export default Navbar;
