import { useState, useEffect } from 'react';

import { Layout } from 'antd';

import Head from 'next/head';

import { enquireScreen } from 'enquire-js';

import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Breadcrumb from '../components/breadcrumb';

const { Header, Content, Footer } = Layout;

const LayoutCommon = ({ title, banner, breadcrumb }) => {
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
			<Content style={{ padding: '0 50px' }}>
				{breadcrumb && <Breadcrumb />}

				<div className='site-layout-content'>
					<h1 className='title'>
						Welcome to <a href='https://nextjs.org'>Next.js!</a>
					</h1>
				</div>
			</Content>
			<Footer className='text-center'>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	);
};

export default LayoutCommon;
