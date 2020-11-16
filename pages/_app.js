import Head from 'next/head';

import packConfigs from '../utils/pack-configs';

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
			<Component {...pageProps} packConfigs={packConfigs} />
		</>
	);
}

export default MyApp;
