import Layout from '../../layouts/default';

import dataset from '../../utils/datasets/bootstrap';

// import { getSortedPostsData } from '../../lib/posts';

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
	let posts = [];

	var pg = require('pg'),
		ssh2 = require('ssh2');

	var pgHost = 'localhost', // remote hostname/ip
		pgPort = 5432,
		proxyPort = 9090,
		ready = false;

	var proxy = require('net').createServer(function (sock) {
		if (!ready) return sock.destroy();
		c.forwardOut(
			sock.remoteAddress,
			sock.remotePort,
			pgHost,
			pgPort,
			function (err, stream) {
				if (err) return sock.destroy();
				sock.pipe(stream);
				stream.pipe(sock);
			}
		);
	});
	proxy.listen(proxyPort, '127.0.0.1');

	var c = new ssh2();
	c.connect({
		host: '185.148.129.247',
		port: 7822,
		username: 'root',
		password: '2c75454ed3974ee3',
	});

	c.on('connect', function () {
		console.log('Connection :: connect');
	});

	c.on('ready', function () {
		ready = true;
		var conString =
				'postgres://postgres:ACI123aci@127.0.0.1:' +
				proxyPort +
				'/public-adjuster',
			client = new pg.Client(conString);

		client.connect(function (err) {
			console.log('Connection :: error');
			// ....
		});

		client.query('SELECT * FROM aci.blog ORDER BY id ASC', (err, res) => {
			console.log(err, res);

			if (err) {
				console.log(err);
			} else {
				posts = res.rows.map((row) => {
					return {
						...row,
						id: row.slug,
					};
				});
			}

			client.end();
		});
	});

	// const posts = getSortedPostsData();
	return {
		props: {
			posts,
		},
	};
}
