import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import styleVariables from '../../styles/variables.scss';
import styles from './toc.module.scss';

const Toc = (props) => {
	const [selectedStyle, setSelectedStyle] = useState('');
	const inlineStyles = {
		legacy: 'legacy',
		'colleges-and-universities': 'collegesAndUniversities',
		'federal-covid-spending': 'federalCovidSpending',
		'homelessness-analysis': 'homelessnessAnalysis',
	}
		
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathname = window.location.pathname.replace(/\//g, '');
			const index = Object.keys(inlineStyles).indexOf(pathname);
		
			if (index > -1) {
				setSelectedStyle(inlineStyles[pathname]);
			} else {
				setSelectedStyle(inlineStyles.legacy)
			}
		}
	})

	const anchorClassName = `${selectedStyle}Anchor`
	const sectionClassName = `${selectedStyle}Section`

	return (
		<section id={styles.TOC}>
			<Grid container className={styles.container}>
				{props.sections.map((item, key) => (
					<Grid item key={key} className={`${styles.tile}`} xs={12} md={6} lg={3}>
						<a href={`#section-${item.anchor}`} className={`${styles[anchorClassName]}`}>
							<Grid container justify="center" className={styles.content}>
								<Grid item className={styles.a}>
									<Grid container>
										<Grid item xs={2} lg={3} className={`${styles.number}`}>
											{item.number}
										</Grid>
										<Grid item className={`${styles.section}`}>
											<span className={`${styles[sectionClassName]}`}>{item.section}</span>
										</Grid>
									</Grid>
									<Grid item>
										<div className={`${styles.subblurb}`}>{item.subblurb}</div>
										<div className={`${styles.blurb}`}>{item.blurb}</div>
									</Grid>
								</Grid>
							</Grid>
						</a>
					</Grid>
				))}
			</Grid>
		</section>
	)
};

Toc.propTypes = {
	sections: PropTypes.arrayOf(PropTypes.object),
};

export default Toc;
