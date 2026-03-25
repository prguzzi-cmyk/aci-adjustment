import { Button } from 'antd';

import { useRouter } from 'next/router';

import Layout from '../../layouts/blog';

import dataset from '../../utils/datasets/bootstrap';

import PostDetail from '../../components/blog/post-detail';

import { getPostsSlug, getPostData } from '../../lib/posts';

require('../../styles/modules/blog.less');

export default function Post({ post }) {
	const router = useRouter();

	const LayoutConfig = {
		title: post && post.title ? post.title : 'Post Not Found',
		canonical: `${dataset.router.home.url}${dataset.router.blog.path}/${post.slug}`,
		breadcrumb: [
			dataset.router.blog,
			{ label: post && post.title ? post.title : 'Post Not Found' },
		],
		className: dataset.router.blog.key,
	};

	if (post && post.image) {
		LayoutConfig.banner = {
			...LayoutConfig.banner,
			image: {
				src: `${dataset.images.bannerBlogDir.src}${post.image}`,
				alt: post.title ? post.title : '',
			},
		};
	}

	return (
		<Layout {...LayoutConfig}>
			<PostDetail post={post} />

			<div className='back-btn'>
				<Button
					type='primary'
					className='app-btn-lg'
					onClick={() => router.back()}
				>
					Go Back
				</Button>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	try {
		const paths = await getPostsSlug();
		return { paths, fallback: 'blocking' };
	} catch (e) {
		return { paths: [], fallback: 'blocking' };
	}
}

export async function getStaticProps({ params }) {
	try {
		const post = await getPostData(params.slug);
		return { props: { post }, revalidate: 1 };
	} catch (e) {
		return { props: { post: null } };
	}
}
