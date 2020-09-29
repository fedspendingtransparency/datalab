import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import styleVariables from '../../styles/variables.scss';
import styles from './toc.module.scss';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode';

const Toc = (props) => {
	const [selectedStyle, setSelectedStyle] = useState('');
	const inlineStyles = {
		legacy: 'legacy',
		'colleges-and-universities': 'collegesAndUniversities',
		'federal-covid-funding': 'federalCovidFunding',
		'homelessness-analysis': 'homelessnessAnalysis',
	}

	const [screenMode, setScreenMode] = useState(0);

	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
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

			resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => {
        window.removeEventListener('resize', resizeWindow);
      }
		}
	})

	const anchorClassName = `${selectedStyle}Anchor`
	const sectionClassName = `${selectedStyle}Section`

	const lgGridSize = props.sections.length <= 4 ? (12 / props.sections.length) : 3;

	const isTablet = screenMode === ScreenModeEnum.tablet;

	return (
		<section id={styles.TOC}>
			<Grid container className={styles.container}>
				{props.sections.map((item, key) => (
					<Grid item key={key} className={styles.tile} xs={12} md={6} lg={lgGridSize}>
						<a href={`#section-${item.anchor}`} className={styles[anchorClassName]}>
							<Grid
								container
								justify={isTablet ? "flex-start" : "center"}
								className={`${styles.content} ${isTablet && key <= 1 ? styles.bottomBorder : ''}`}
							>
								<Grid item className={styles.a}>
									<Grid container className={styles.numberContainer}>
										<Grid item xs={2} lg={3} className={styles.number}>
											{item.number}
										</Grid>
										<Grid item className={styles.section}>
											<span className={styles[sectionClassName]}>{item.section}</span>
										</Grid>
									</Grid>
									<Grid item>
										<div className={styles.subblurb}>{item.subblurb}</div>
										<div className={styles.blurb}>{item.blurb}</div>
									</Grid>
								</Grid>
							</Grid>
							{screenMode === ScreenModeEnum.tablet &&
								<div className={`${styles.tabletDivider} ${isTablet && (key === 0 || key === 2) ? styles.sideBorder : ''}`} />
							}
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
