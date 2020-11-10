import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='ACI Adjustment Group - Pennsylvania&#039;s #1 Public Adjuster!'
					/>

					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='application-name' content='aci' />
					<meta name='apple-mobile-web-app-title' content='aci' />
					<meta name='theme-color' content='#4676b6' />
					<meta name='msapplication-navbutton-color' content='#4676b6' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='black-translucent'
					/>
					<meta name='msapplication-starturl' content='/' />

					<link rel='manifest' href='manifest.json' />

					<link
						rel='icon'
						type='image/png'
						sizes='512x512'
						href='icons/icon-512x512.png'
					/>
					<link
						rel='apple-touch-icon'
						type='image/png'
						sizes='512x512'
						href='icons/icon-512x512.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='192x192'
						href='icons/icon-192x192.png'
					/>
					<link
						rel='apple-touch-icon'
						type='image/png'
						sizes='192x192'
						href='icons/icon-192x192.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
