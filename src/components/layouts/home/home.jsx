import React from 'react';
import PropTypes from 'prop-types';
import Default from '../default/default';
import { HomepageHeader } from '../../headers/headers';

import homeTemplateStyles from './home.module.scss';

const Home = ({ children }) => (
	<>
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
