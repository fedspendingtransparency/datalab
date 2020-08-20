const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const build = process.env.BUILD ? process.env.BUILD : false;
const devtool = build ? '' : 'inline-source-map';
const mode = build ? 'production' : 'development';

const cssRules = [
	{
		test: /\.scss$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].css',
					publicPath: '/assets/ffg/css/',
				},
			},
			{
				loader: 'extract-loader',
			},
			{
				loader: 'css-loader?-url',
			},
			{
				loader: 'sass-loader',
			},
		],
	},
];

const moduleRules = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	},
	{
		test: /\.(css|scss)$/,
		use: [
			'style-loader',
			'css-loader',
			'sass-loader',
		],
	},
	{
		test: /\.csv$/,
		use: {
			loader: 'csv-loader',
			options: {
				dynamicTyping: true,
				header: true,
			},
		},
	},
	{
		test: /\.yml$/,
		use: 'js-yaml-loader',
	},
];
const devServer = {
	contentBase: [path.resolve('static-snapshots'), path.resolve('')],
	watchContentBase: true,
};

module.exports = [{
	entry: {
		index: './src/libs/ffg/src/bigPicture/index.js',
	},
	devtool,
	devServer,
	mode,
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: '[name].js',
		path: `${__dirname}/static/americas-finance-guide/`,
		publicPath: '/static/americas-finance-guide/',
	},
	module: {
		rules: moduleRules,
	},
}, {
	entry: {
		countryComparison: './src/libs/ffg/src/revenue/countries/index.js',
	},
	devtool,
	devServer,
	mode,
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: '[name].js',
		path: `${__dirname}/static/americas-finance-guide/revenue/`,
		publicPath: '/static/americas-finance-guide/revenue/',
	},
	module: {
		rules: moduleRules,
	},
}, {
	entry: {
		countryComparison: './src/libs/ffg/src/spending/countries/index.js',
	},
	devtool,
	devServer,
	mode,
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: '[name].js',
		path: `${__dirname}/static/americas-finance-guide/spending/`,
		publicPath: '/static/americas-finance-guide/spending/',
	},
	module: {
		rules: moduleRules,
	},
}, {
	entry: {
		countryComparison: './src/libs/ffg/src/deficit/countries/index.js',
	},
	devtool,
	devServer,
	mode,
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: '[name].js',
		path: `${__dirname}/static/americas-finance-guide/deficit/`,
		publicPath: '/static/americas-finance-guide/deficit/',
	},
	module: {
		rules: moduleRules,
	},
}, {
	entry: {
		trends: './src/libs/ffg/src/debt/trends/index.js',
		countryComparison: './src/libs/ffg/src/debt/countries/index.js',
	},
	devtool,
	devServer,
	mode,
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	output: {
		filename: '[name].js',
		path: `${__dirname}/static/americas-finance-guide/debt/`,
		publicPath: '/static/americas-finance-guide/debt/',
	},
	module: {
		rules: moduleRules,
	},
}];
