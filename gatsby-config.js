module.exports = {
	siteMetadata: {
		title: 'Data Lab',
		description:
			'The Data Lab is a U.S. Treasury Department website of topic-based analyses and visualizations to help the public understand government spending.',
		author: '@gatsbyjs',
	},
	plugins: [
		'gatsby-plugin-top-layout',
		'gatsby-plugin-root-import',
		'gatsby-plugin-material-ui',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: true,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/static/data/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-csv',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'datalab',
				path: `${__dirname}/static/data/`,
				crossOrigin: 'use-credentials',
				icon: 'src/images/favicon.png',
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg', // support for svg components
			options: {
				rule: {
					include: /svgs/,
				},
			},
		},
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-19138737-13',
			},
		},
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: `https://datalab.usaspending.gov`,
				noHash: true,
				noQueryString: true,
				exclude: [
					'https://datalab.usaspending.gov',
					'https://datalab.usaspending.gov/',
					'https://datalab.usaspending.gov/index.html',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyzer',
			options: {
				production: true,
				disable: !process.env.ANALYZE_BUNDLE_SIZE,
				generateStatsFile: true,
				analyzerMode: 'static',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
