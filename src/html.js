import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
				/>
				<link
					rel="preconnect"
					as="script"
					href="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=TRE"
					id="_fed_an_ua_tag"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-semibolditalic-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-semibold-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-regular-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-lightitalic-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-light-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-italic-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-extralightitalic-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-extralight-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-bolditalic-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-bold-webfont.woff"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-semibolditalic-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-semibold-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-regular-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-lightitalic-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-light-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-italic-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-extralightitalic-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-extralight-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-bolditalic-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/Source_Sans_Pro/woff/sourcesanspro-bold-webfont.woff2"
					as="font"
					crossOrigin="anonymous"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
