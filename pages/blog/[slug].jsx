import { Button } from 'antd';

import { useRouter } from 'next/router';

import Layout from '../../layouts/blog';

import dataset from '../../utils/datasets/bootstrap';

import PostDetail from '../../components/blog/post-detail';

import { getPostsSlug, getPostData } from '../../lib/posts';

import '../../styles/modules/blog.less';

export default function Post({ post }) {
	const router = useRouter();

	const LayoutConfig = {
		title: post.title,
		breadcrumb: [dataset.router.blog, { label: post.title }],
		className: dataset.router.blog.key,
	};

	if (post.image)
		LayoutConfig.banner = {
			...LayoutConfig.banner,
			image: {
				src: `${dataset.images.bannerBlogDir.src}${post.image}`,
				alt: post.title ? post.title : '',
			},
		};

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
	const paths = await getPostsSlug();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getPostData(params.slug);

	return {
		props: {
			post,
		},
	};
}
