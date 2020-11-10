import { Layout, Menu, Breadcrumb } from 'antd';

import Head from 'next/head';

const { Header, Content, Footer } = Layout;

const LayoutCommon = ({ title }) => {
	return (
		<Layout className='container'>
			<Head>
				<title>{title}</title>
			</Head>
			<Header>
				<div className='logo' />
				<Menu theme='light' mode='horizontal' defaultSelectedKeys={['home']}>
					<Menu.Item key='home'>Home</Menu.Item>
					<Menu.Item key='appointment'>Schedule Appointment</Menu.Item>
					<Menu.Item key='services'>Our Services</Menu.Item>
					<Menu.Item key='faq'>FAQ</Menu.Item>
					<Menu.Item key='careers'>Careers</Menu.Item>
					<Menu.Item key='contact'>Contact Us</Menu.Item>
					<Menu.Item key='claim'>File a Claim</Menu.Item>
					<Menu.Item key='about'>About Us</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<div className='site-layout-content'>
					<h1 className='title'>
						Welcome to <a href='https://nextjs.org'>Next.js!</a>
					</h1>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	);
};

export default LayoutCommon;
