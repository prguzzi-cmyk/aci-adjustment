import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { enquireScreen } from 'enquire-js';

import Navbar from '../components/common/navbar';
import Banner from '../components/common/banner-blog';
import Breadcrumb from '../components/common/breadcrumb';
import FooterSocial from '../components/common/footer-social';
import FooterLinks from '../components/common/footer-links';
import FooterCopyright from '../components/common/footer-copyright';

import dataset from '../utils/datasets/general';

const { Header, Content, Footer } = Layout;

const LayoutBlog = ({
	title,
	description = '',
	canonical = '',
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
				<title>{`${title} | ${dataset.general.name} ${dataset.general.tagline}`}</title>
				<meta
					name='title'
					content={`${title} | ${dataset.general.name} ${dataset.general.tagline}`}
				/>
				<meta name='description' content={description} />
				{canonical && <link rel='canonical' href={canonical} />}
			</Head>

			<Header>
				<Navbar isMobile={isMobile} />
				<Banner banner={banner} />
			</Header>

			<Layout className={className}>
				<Content>
					{breadcrumb && <Breadcrumb items={breadcrumb} />}

					<div className={`site-layout-content ${className}`}>{children}</div>
				</Content>
			</Layout>

			<Footer>
				<FooterSocial />
				<FooterLinks />
				<FooterCopyright />
			</Footer>
		</Layout>
	);
};

export default LayoutBlog;
