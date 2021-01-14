/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import('normalize-scss');
import React from 'react';
import 'src/styles/variables.scss';
import 'src/styles/progress.scss';
import 'lazysizes';

import TopLayout from './plugins/gatsby-plugin-top-layout/TopLayout';

export const wrapRootElement = ({ element }) => {
	return <TopLayout>{element}</TopLayout>;
};
