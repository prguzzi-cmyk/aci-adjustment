const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const redirects = require('./utils/redirects');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const themeVariables = lessToJS(
	fs.readFileSync(path.resolve(__dirname, './styles/theme.less'), 'utf8')
);

const lessConfig = {
	modifyVars: themeVariables, // make your antd custom effective
	cssLoaderOptions: { modules: true },
	webpack: (config) => {
		return config;
	},
};

const nextConfig = {
	images: {
		domains: ['public-adjusters.s3.amazonaws.com'],
	},
	async redirects() {
		return redirects;
	},
};

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	[withAntdLess, lessConfig],
	nextConfig,
]);
