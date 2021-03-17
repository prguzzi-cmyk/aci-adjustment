import pg from './pg';

export async function getSortedPostsData() {
	let posts = [];

	try {
		const res = await pg.query(
			'SELECT * FROM aci.blog ORDER BY created_at DESC, id DESC'
		);

		posts = res.rows.map((row) => {
			return {
				...row,
			};
		});
	} catch (err) {
		console.log(err);
	}

	return posts;
}

export async function getAllPostSlugs() {
	let posts = [];

	try {
		const res = await pg.query(
			'SELECT slug FROM aci.blog ORDER BY created_at DESC'
		);

		posts = res.rows.map((row) => {
			return {
				params: {
					...row,
				},
			};
		});
	} catch (err) {
		console.log(err);
	}

	return posts;
}

export async function getPostData(slug) {
	let post = {};

	try {
		const res = await pg.query('SELECT * FROM aci.blog WHERE slug=$1 LIMIT 1', [
			slug,
		]);
		
		post = { ...res.rows[0] };
	} catch (err) {
		console.log(err);
	}

	return post;
}
