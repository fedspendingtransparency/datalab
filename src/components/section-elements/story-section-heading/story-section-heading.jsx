import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import storySectionHeadingStyles from './story-section-heading.module.scss';
import ReadMore from '../../read-more/read-more';

StorySectionHeading.propTypes = {
	accordion: PropTypes.element,
};

StorySectionHeading.defaultProps = {
	accordion: null,
};

export default function StorySectionHeading(props) {
	// update state & redraw ONLY if mode changes
	const [screenMode, setScreenMode] = useState(0);
	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	};
	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		};
	});

	function NumberItem() {
		if (props.number) {
			return (
				<Grid item xs={1} md={12} lg={1} className={storySectionHeadingStyles.headerNumber}>
					<span>{props.number}</span>
				</Grid>
			);
		}
		return <></>;
	}

	const blurb = props.readMoreOnMobile && screenMode < ScreenModeEnum.tablet ? (
		<ReadMore buttonStyle={props.readMoreStyle} sectionId={props.sectionId} collapsedHeight="5.5rem">
			<div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>
		</ReadMore>
	)
		: <div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>
    ;

	return (
		<header>
			<section className={storySectionHeadingStyles.header}>
				<Grid container className={storySectionHeadingStyles.headerTitleContainer}>
					{props.header}
					<NumberItem />
					<Hidden smUp>
						<Grid item xs={1} />
					</Hidden>
					<Grid item xs={10} md={12} lg={11} className={storySectionHeadingStyles.headerTitle}>
						{props.title}
					</Grid>
				</Grid>
				<Grid container className={storySectionHeadingStyles.introContainer}>
					<Grid item xs={12} lg={5} className={`${storySectionHeadingStyles.intro} ${storySectionHeadingStyles.introTeaser}`}>{props.teaser}</Grid>
					<Grid item xs={12} lg={7} className={`${storySectionHeadingStyles.intro} ${storySectionHeadingStyles.introBlurb}`}>
						{blurb}
						{props.accordion}
					</Grid>
				</Grid>
			</section>
		</header>
	);
}
