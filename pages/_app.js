import Head from 'next/head';

import GoogleTagManager from '../components/common/google-tag-manager';

import '../styles/globals.less';
import '../styles/utils.less';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
			</Head>

			<GoogleTagManager>
				<Component {...pageProps} />
			</GoogleTagManager>
		</>
	);
}

export default MyApp;
