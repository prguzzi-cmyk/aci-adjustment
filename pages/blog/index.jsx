import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import { getSortedPostsData } from '../../lib/posts';

import PostsSection from '../../components/blog/posts';

import '../../styles/modules/blog.less';

export default function Blog({ posts }) {
	const LayoutConfig = {
		title: 'Stay connected with Latest News',
		description:
			'Stay connected with ACI Adjustment Group for latest news and blogs with insurance industry. Our duty is to inform users with honest intent for the betterment of home and business owners.',
		banner: {
			image: dataset.images.bannerDefault,
			title: dataset.router.blog.label,
		},
		breadcrumb: [dataset.router.blog],
		className: dataset.router.blog.key,
	};

	return (
		<Layout {...LayoutConfig}>
			<PostsSection posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = getSortedPostsData();
	return {
		props: {
			posts,
		},
	};
}
