import { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

import PostsSection from '../../components/blog/posts';
import Pagination from '../../components/blog/pagination';

import { getSortedPostsData } from '../../lib/posts';

require('../../styles/modules/blog.less');

export default function Blog({ meta, posts }) {
	const [loading, setLoading] = useState(false);
	const postsSecRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeStart', () => {
			setLoading(true);
		});

		router.events.on('routeChangeComplete', () => {
			setLoading(false);
		});

		return () => {
			router.events.off('routeChangeStart', () => {
				setLoading(true);
			});

			router.events.off('routeChangeComplete', () => {
				setLoading(false);
			});
		};
	});

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
			<div ref={postsSecRef}>
				<PostsSection posts={posts} loading={loading} />
				<Pagination meta={meta} postsSecRef={postsSecRef} loading={loading} />
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query }) {
	try {
		const page = (query && query.page) || 1;

		const meta = {
			totalCount: 0,
			currentPage: page,
			perPage: 12,
		};

		const posts = await getSortedPostsData({
			offset: (meta.currentPage - 1) * meta.perPage,
			limit: meta.perPage,
		});

		if (posts && posts[0]) {
			meta.totalCount = posts[0].total_count;
		}

		return { props: { meta, posts } };
	} catch (e) {
		return {
			props: {
				meta: { totalCount: 0, currentPage: 1, perPage: 12 },
				posts: [],
			},
		};
	}
}
