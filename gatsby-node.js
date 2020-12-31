require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const LoadablePlugin = require('@loadable/webpack-plugin');

// window does not exist when we do builds.
// to account for this, we will check and use null loaders.
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
	actions.setWebpackConfig({
		devtool: 'eval-source-map',
		plugins: [new LoadablePlugin()],
		module: {
			rules: [
				{
					test: /\.csv$/,
					loader: 'csv-loader',
					options: {
						dynamicTyping: true,
						header: true,
						skipEmptyLines: true,
					},
				},
			],
		},
	});

	if (stage === 'build-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /mapbox-gl/,
						use: loaders.null(),
					},
					{
						test: /vega-embed/,
						use: loaders.null(),
					},
					{
						test: /lazysizes/,
						loader: 'null-loader',
					},
					{
						test: /compareManager/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
