import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { checkScreenMode, ScreenModeEnum } from 'src/utils/screen-mode';
import styles from './toc.module.scss';

const Toc = ({ sections }) => {
	const [selectedStyle, setSelectedStyle] = useState('');
	const inlineStyles = {
		legacy: 'legacy',
		'colleges-and-universities': 'collegesAndUniversities',
		'federal-covid-funding': 'federalCovidFunding',
		'homelessness-analysis': 'homelessnessAnalysis',
	};

	const [screenMode, setScreenMode] = useState(0);

	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pathname = window.location.pathname.replace(/\//g, '');
			const index = Object.keys(inlineStyles).indexOf(pathname);

			if (index > -1) {
				setSelectedStyle(inlineStyles[pathname]);
			} else {
				setSelectedStyle(inlineStyles.legacy);
			}

			resizeWindow();
			window.addEventListener('resize', resizeWindow);
			return () => {
				window.removeEventListener('resize', resizeWindow);
			};
		}
	});

	const anchorClassName = `${selectedStyle}Anchor`;
	const sectionClassName = `${selectedStyle}Section`;

	const lgGridSize = sections.length <= 4 ? 12 / sections.length : 3;

	const isTablet = screenMode === ScreenModeEnum.tablet;
	const isMobile = screenMode === ScreenModeEnum.mobile;

	return (
		<section id={styles.TOC}>
			<Grid container className={styles.container}>
				{sections.map((section, key) => {
					const LinkWrapper = ({ children }) =>
						section.comingSoon ? (
							<div className={styles.linkContainer}>{children}</div>
						) : (
							<a
								href={`#section-${section.anchor}`}
								className={`${styles[anchorClassName]} ${styles.linkContainer}`}>
								{children}
							</a>
						);

					const mobileStyle = {};
					if (!section.isNew) {
						mobileStyle.paddingLeft = 50;
					}
					if (section.comingSoon) {
						mobileStyle.flexDirection = 'row-reverse';
					}

					return (
						<Grid
							item
							key={key}
							className={styles.tile}
							xs={12}
							md={6}
							lg={lgGridSize}>
							<LinkWrapper>
								<Grid
									container
									justify={isTablet ? 'flex-start' : 'center'}
									className={`${styles.content} ${
										isTablet && key <= 1 ? styles.bottomBorder : ''
									} ${isTablet && key >= 2 ? styles.topPadding : ''}`}
									style={isMobile ? mobileStyle : {}}>
									<Grid item className={styles.newFlagContainer}>
										{section.isNew && <div className={styles.newFlag}>New</div>}
										{section.comingSoon && (
											<Grid item className={styles.comingSoon}>
												Coming Soon!
											</Grid>
										)}
									</Grid>
									<Grid item className={styles.a}>
										<Grid container className={styles.numberContainer}>
											<Grid
												item
												xs={2}
												lg={3}
												className={`${styles.number} ${
													section.comingSoon ? styles.faded : ''
												}`}>
												{section.number}
											</Grid>
											<Grid item className={styles.section}>
												<span
													className={`${styles[sectionClassName]} ${
														section.comingSoon ? styles.faded : ''
													}`}>
													{section.section}
												</span>
											</Grid>
										</Grid>
										<Grid item>
											<div
												className={`${styles.subblurb} ${
													section.comingSoon ? styles.faded : ''
												}`}>
												{section.subblurb}
											</div>
											<div className={styles.blurb}>{section.blurb}</div>
										</Grid>
									</Grid>
								</Grid>
								{screenMode === ScreenModeEnum.tablet && (
									<div
										className={`${styles.tabletDivider} ${
											isTablet && (key === 0 || key === 2) ? styles.sideBorder : ''
										}`}
									/>
								)}
							</LinkWrapper>
						</Grid>
					);
				})}
			</Grid>
		</section>
	);
};

Toc.propTypes = {
	sections: PropTypes.arrayOf(PropTypes.object),
};

Toc.defaultProps = {
	sections: [],
};

export default Toc;
