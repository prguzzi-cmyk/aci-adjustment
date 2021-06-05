import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GTM_ID } from '../lib/gtm';

class AppDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
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

					{/* Global site tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
					/>

					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GTM_ID}', {page_path: window.location.pathname,});`,
						}}
					/>
				</Head>
				<body>
					{/* Added LiveAgent chat button */}
					{/* <script
						dangerouslySetInnerHTML={{
							__html: `(function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document,'https://acipublicadjusters.ladesk.com/scripts/track.js',function(e){ LiveAgent.createButton('j1545gur', e); });`,
						}}
					/> */}

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
