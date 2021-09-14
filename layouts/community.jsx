import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { enquireScreen } from 'enquire-js';

import Navbar from '../components/common/navbar';
import Banner from '../components/common/banner-community';
import Breadcrumb from '../components/common/breadcrumb';
import FooterSocial from '../components/common/footer-social';
import FooterLinks from '../components/common/footer-links';
import FooterCopyright from '../components/common/footer-copyright';

import AskExperts from '../components/common/sections/ask-experts-form';
import WidgetServices from '../components/common/widgets/services';

import dataset from '../utils/datasets/general';
import {
	FormItemLayoutSidebar,
	TailFormItemLayoutSidebar,
} from '../utils/config';

const { Header, Content, Sider, Footer } = Layout;

const LayoutCommunity = ({
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

	const sidebarConfig = {
		CustomFormItemLayout: FormItemLayoutSidebar,
		CustomTailFormItemLayout: TailFormItemLayoutSidebar,
		isMobile,
	};

	return (
		<Layout className='container'>
			<Head>
				<title>{`Public Adjuster ${title ? title + ' ' : title}| ${
					dataset.general.name
				} ${dataset.general.tagline}`}</title>
				<meta
					name='title'
					content={`Public Adjuster ${title ? title + ' ' : title}| ${
						dataset.general.name
					} ${dataset.general.tagline}`}
				/>
				<meta name='description' content={description} />
				{canonical && <link rel='canonical' href={canonical} />}
			</Head>

			<Header>
				<Navbar isMobile={isMobile} />
				<Banner banner={banner} />
			</Header>

			<Layout className={className} hasSider={true}>
				<Content>
					{breadcrumb && <Breadcrumb items={breadcrumb} />}

					<div className={`site-layout-content`}>{children}</div>
				</Content>

				<Sider width={isMobile ? 320 : 500} breakpoint='lg' collapsedWidth={0}>
					<AskExperts title='Claim' {...sidebarConfig} />
					<WidgetServices />
				</Sider>
			</Layout>

			<Footer>
				<FooterSocial />
				<FooterLinks />
				<FooterCopyright />
			</Footer>
		</Layout>
	);
};

export default LayoutCommunity;
