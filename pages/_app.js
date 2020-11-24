import Head from 'next/head';

import config from '../utils/config';
import dataset from '../utils/dataset';

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
			<Component {...pageProps} config={config} dataset={dataset} />
		</>
	);
}

export default MyApp;
