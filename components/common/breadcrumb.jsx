import { Breadcrumb } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const BreadCrumb = () => {
	return (
		<Breadcrumb separator='>' style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>
				<HomeOutlined />
			</Breadcrumb.Item>
			<Breadcrumb.Item>List</Breadcrumb.Item>
			<Breadcrumb.Item>App</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default BreadCrumb;
