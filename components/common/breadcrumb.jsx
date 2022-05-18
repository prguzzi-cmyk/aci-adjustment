import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import TweenOne from 'rc-tween-one/lib/TweenOne';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import config from '../../utils/config';
import dataset from '../../utils/datasets/router';

const BreadCrumb = ({ items }) => {
	return (
		<OverPack {...config.OverPack({ playScale: config.PlayScale.noScale })}>
			<TweenOne
				component={Breadcrumb}
				key='text'
				{...config.TweenOne({ coordinate: 'x', path: '+=30' })}
			>
				<Breadcrumb.Item key={dataset.router.home.label}>
					<Link href={dataset.router.home.path}>
						<a>
							<HomeOutlined /> {dataset.router.home.label}
						</a>
					</Link>
				</Breadcrumb.Item>

				{items.map((item, index, array) => (
					<Breadcrumb.Item key={item.label}>
						{array.length - 1 === index ? (
							item.label
						) : (
							<Link href={item.path}>
								<a>{item.label}</a>
							</Link>
						)}
					</Breadcrumb.Item>
				))}
			</TweenOne>
		</OverPack>
	);
};

export default BreadCrumb;
