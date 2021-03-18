import { useState } from 'react';

import { useRouter } from 'next/router';

import { Pagination } from 'antd';

const PostPagination = ({ meta, postsSecRef, loading }) => {
	const router = useRouter();

	const [currentPage, setCurrentPage] = useState(meta.currentPage);

	const itemRender = (current, type, originalElement) => {
		if (type === 'prev') {
			return <a>Previous</a>;
		}

		if (type === 'next') {
			return <a>Next</a>;
		}

		return originalElement;
	};

	const onChange = (page) => {
		postsSecRef.current.scrollIntoView();

		setCurrentPage(page);

		router.push(`${router.pathname}?page=${page}`);
	};

	return (
		<div className='blog-pagination'>
			{!loading && (
				<Pagination
					current={currentPage}
					total={meta.totalCount}
					pageSize={meta.perPage}
					showSizeChanger={false}
					onChange={onChange}
					itemRender={itemRender}
					showTotal={(total, range) =>
						`Showing ${range[0]}-${range[1]} of ${total} posts`
					}
				/>
			)}
		</div>
	);
};

export default PostPagination;
