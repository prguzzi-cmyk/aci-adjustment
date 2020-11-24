import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { enquireScreen } from 'enquire-js';

import Navbar from '../components/common/navbar';
import Banner from '../components/common/banner';
import Breadcrumb from '../components/common/breadcrumb';
import FooterSocial from '../components/common/footer-social';
import FooterLinks from '../components/common/footer-links';
import FooterCopyright from '../components/common/footer-copyright';

const { Header, Content, Footer } = Layout;

const LayoutCommon = ({ title, banner, breadcrumb, config, children }) => {
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
			</Head>

			<Header>
				<Navbar config={config} isMobile={isMobile} />
				<Banner config={config} banner={banner} />
			</Header>

			<Content>
				{breadcrumb && <Breadcrumb config={config} />}

				<div className='site-layout-content'>{children}</div>
			</Content>

			<Footer>
				<FooterSocial config={config} />
				<FooterLinks config={config} />
				<FooterCopyright config={config} />
			</Footer>
		</Layout>
	);
};

export default LayoutCommon;
