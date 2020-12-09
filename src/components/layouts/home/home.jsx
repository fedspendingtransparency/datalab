import React from 'react';
import PropTypes from 'prop-types';
import Default from '../default/default';
import { HomepageHeader } from '../../headers/headers';

import homeTemplateStyles from './home.module.scss';
import { Helmet } from 'react-helmet';

const Home = ({ children }) => (
	<>
		<Helmet>
			<link rel="canonical" href="https://datalab.usaspending.gov" />
		</Helmet>
		<Default>
			<HomepageHeader />
			<div className={homeTemplateStyles.default}>{children}</div>
		</Default>
	</>
);

Home.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Home;
