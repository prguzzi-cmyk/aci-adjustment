import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { enquireScreen } from 'enquire-js';

import Navbar from '../components/common/navbar';
import Banner from '../components/common/banner-small';
import Breadcrumb from '../components/common/breadcrumb';
import FooterSocial from '../components/common/footer-social';
import FooterLinks from '../components/common/footer-links';
import FooterCopyright from '../components/common/footer-copyright';

const { Header, Content, Footer } = Layout;

const LayoutDefault = ({
	title,
	description = '',
	banner,
	breadcrumb,
	className = '',
	children,
}) => {
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		enquireScreen((b) => {
			setIsMobile(!!b);
		});
	}, []);

	return (
		<Layout className='container'>
			<Head>
				<title>{title}</title>
				<meta name='title' content={title} />
				<meta name='description' content={description} />
			</Head>

			<Header>
				<Navbar isMobile={isMobile} />
				<Banner banner={banner} />
			</Header>

			<Content>
				{breadcrumb && <Breadcrumb items={breadcrumb} />}

				<div className={`site-layout-content ${className}`}>{children}</div>
			</Content>

			<Footer>
				<FooterSocial />
				<FooterLinks />
				<FooterCopyright />
			</Footer>
		</Layout>
	);
};

export default LayoutDefault;
