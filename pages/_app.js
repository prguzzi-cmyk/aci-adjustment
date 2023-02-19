import Head from 'next/head';
import Script from 'next/script';

import { GTM_ID } from '../lib/gtm';

require('../styles/globals.less');
require('../styles/utils.less');

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
			</Head>

			{/* Google Tag Manager */}
			<Script id='google-tag-manager' strategy='worker'>
				{`
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','${GTM_ID}');
				`}
			</Script>
			{/* End Google Tag Manager */}

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
