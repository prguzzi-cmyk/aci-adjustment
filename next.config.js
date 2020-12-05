const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const themeVariables = lessToJS(
	fs.readFileSync(path.resolve(__dirname, './styles/theme.less'), 'utf8')
);

const lessConfig = {
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: themeVariables, // make your antd custom effective
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			const antStyles = /(antd\/.*?\/style).*(?<![.]js)$/;
			const origExternals = [...config.externals];
			config.externals = [
				(context, request, callback) => {
					if (request.match(antStyles)) return callback();
					if (typeof origExternals[0] === 'function') {
						origExternals[0](context, request, callback);
					} else {
						callback();
					}
				},
				...(typeof origExternals[0] === 'function' ? [] : origExternals),
			];

			config.module.rules.unshift({
				test: antStyles,
				use: 'null-loader',
			});
		}
		return config;
	},
};

module.exports = withPlugins([
	[withBundleAnalyzer({})],
	[withLess, lessConfig],
]);
