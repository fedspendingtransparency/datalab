import React from 'react';
import PropTypes from 'prop-types';


import Default from '../default/default';
import { AFGHeader } from '../../headers/headers';
import MoreAnalyses from '../../more-analyses/more-analyses';

import styles from './afg.module.scss';
import '../../../styles/index.scss';
import AfgNav from '../../afg-nav/afg-nav';

const AfgLayout = (props) => {
	return <Default>
		<AFGHeader />
		<AfgNav location={props.location} chapter={props.chapter} />
			<div className="cg-wrapper debt-analysis-wrapper">
				<div className="ffg-wrapper debt-analysis">
					{props.children}
					<MoreAnalyses className={styles.moreAnalyses}/>
				</div>
			</div>
		</Default>
}

export default AfgLayout;

AfgLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

