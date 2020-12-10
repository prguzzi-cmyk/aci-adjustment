import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const BreadCrumb = ({ items }) => {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>
				<Link href='/'>
					<a>
						<HomeOutlined /> Home
					</a>
				</Link>
			</Breadcrumb.Item>

			{items.map((item, index, array) => (
				<Breadcrumb.Item>
					{array.length - 1 === index ? (
						item.text
					) : (
						<Link href={item.link}>
							<a>{item.text}</a>
						</Link>
					)}
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};

export default BreadCrumb;
