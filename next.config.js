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
	// webpack: (config) => {
	// 	config.module.rules.push({
	// 		test: /\.pdf$/,
	// 		type: 'asset/resource',
	// 	});

	// 	config.module.rules.push({
	// 		test: /pdf\.worker\.(min\.)?js/,
	// 		type: 'asset/resource',
	// 	});

	// 	return config;
	// },
};

const pwaConfig = {
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
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
};

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	[withAntdLess, lessConfig],
	[withPWA, pwaConfig],
	nextConfig,
]);
