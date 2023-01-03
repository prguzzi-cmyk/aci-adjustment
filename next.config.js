const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const path = require('path');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const redirects = require('./utils/redirects');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const themeVariables = path.resolve(__dirname, './styles/theme.less');

const lessConfig = {
	lessVarsFilePath: themeVariables, // optional
	cssLoaderOptions: {
		mode: 'local',
		localIdentName:
			process.env.NODE_ENV === 'development'
				? '[local]--[hash:base64:4]'
				: '[hash:base64:8]', // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
		exportLocalsConvention: 'camelCase',
		exportOnlyLocals: false,
		getLocalIdent: (context, localIdentName, localName, options) => {
			return 'aci';
		},
	},
	nextjs: {
		localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
	},
};

const pwaConfig = {
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
};

// Before defining your Security Headers
// add Content Security Policy directives using a template string.
// let ContentSecurityPolicy = '';
let ContentSecurityPolicy = `
  default-src 'self' *.google-analytics.com *.facebook.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.gstatic.com *.googletagmanager.com *.google-analytics.com *.googleapis.com *.googleadservices.com *.facebook.net *.facebook.com *.setmore.com *.youtube.com;
  img-src 'self' data: *.facebook.com *.google.com *.google.co.in *.googleapis.com *.google-analytics.com *.doubleclick.net  *.amazonaws.com;
  style-src 'unsafe-inline' 'self' *.setmore.com;
  font-src 'self';
  frame-src *.google.com *.youtube.com;
`;

if (process.env.NODE_ENV == 'production') {
	ContentSecurityPolicy = `
  default-src 'self' *.google-analytics.com *.facebook.com;
  script-src 'self' 'unsafe-inline' *.google.com *.gstatic.com *.googletagmanager.com *.google-analytics.com *.googleapis.com *.googleadservices.com *.facebook.net *.facebook.com *.setmore.com *.youtube.com;
  img-src 'self' data: *.facebook.com *.google.com *.google.co.in *.googleapis.com *.google-analytics.com *.doubleclick.net  *.amazonaws.com;
  style-src 'unsafe-inline' 'self' *.setmore.com;
  font-src 'self';
  frame-src *.google.com *.youtube.com;
`;
}

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
];

const headers = async () => {
	return [
		{
			// Apply these headers to all routes in your application.
			source: '/:path*',
			headers: securityHeaders,
		},
	];
};

const nextConfig = {
	images: {
		domains: ['public-adjusters.s3.amazonaws.com'],
	},
	async redirects() {
		return redirects;
	},
	experimental: {
		outputStandalone: true,
	},
	headers,
};

module.exports = withPlugins([
	[withAntdLess, lessConfig],
	[withPWA, pwaConfig],
	nextConfig,
	[withBundleAnalyzer],
]);
