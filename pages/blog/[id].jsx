import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import { getAllPostIds, getPostData } from '../../lib/posts';

import PostDetail from '../../components/blog/post-detail';

import '../../styles/modules/blog.less';

export default function Post({ post }) {
	const LayoutConfig = {
		title: post.title,
		banner: {
			image: dataset.images.bannerDefault,
		},
		breadcrumb: [dataset.router.blog, { label: post.title }],
		className: dataset.router.blog.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<PostDetail post={post} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getPostData(params.id);
	return {
		props: {
			post,
		},
	};
}
