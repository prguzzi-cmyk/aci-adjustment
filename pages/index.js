import Head from 'next/head';
import styles from '../styles/Home.module.less';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {
	return (
		<Layout className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
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
					<h1 className={styles.title}>
						Welcome to <a href='https://nextjs.org'>Next.js!</a>
					</h1>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	);
}
