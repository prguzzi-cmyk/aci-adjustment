import { useState, useEffect } from 'react';

import { Layout } from 'antd';

import Head from 'next/head';

import { enquireScreen } from 'enquire-js';

import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Breadcrumb from '../components/breadcrumb';
import FooterSocial from '../components/footer-social';
import FooterLinks from '../components/footer-links';
import FooterCopyright from '../components/footer-copyright';

const { Header, Content, Footer } = Layout;

const LayoutCommon = ({ title, banner, breadcrumb, packConfigs, children }) => {
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
				<Navbar isMobile={isMobile} />
				<Banner banner={banner} />
			</Header>

			<Content>
				{breadcrumb && <Breadcrumb />}

				<div className='site-layout-content'>{children}</div>
			</Content>

			<Footer>
				<FooterSocial packConfigs={packConfigs} />
				<FooterLinks packConfigs={packConfigs} />
				<FooterCopyright packConfigs={packConfigs} />
			</Footer>
		</Layout>
	);
};

export default LayoutCommon;
