import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import Default from '../default/default';
import { AFGHeader } from '../../headers/headers';
import MoreAnalyses from '../../more-analyses/more-analyses';

import styles from './afg.module.scss';
import '../../../styles/index.scss';
import AfgNav from '../../afg-nav/afg-nav';

const AfgLayout = (props) => {
	const [marginTop, setMarginTop] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				const margin = window.pageYOffset > 26 ? 62 : 0
				setMarginTop(margin)
			})
		}
	}, [])

	return (
		<Default>
			<AFGHeader />
			<AfgNav location={props.location} chapter={props.chapter} />
			<div className="cg-wrapper debt-analysis-wrapper" style={{ marginTop }}>
				<div className="ffg-wrapper debt-analysis">
					{props.children}
					<MoreAnalyses />
				</div>
			</div>
		</Default>
	)
}

export default AfgLayout;

AfgLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

