import style from './customHeader.module.scss';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/*
  This file will contain the Banner and the Table of Contents header sections for templates.
*/

const CustomOpioidHeader = props => {
	return (
		<section className={style.headerHero}>
			<div id={style.banner}>
				<p className={style.subtext}>{props.subtext}</p>
				<p className={style.subblurb}>{props.subblurb}</p>
				<p className={style.blurb}>{props.blurb.map(item => item)}</p>
			</div>
		</section>
	);
};

const CustomOpioidTocHeader = props => {
	return (
		<>
			<section id={style.toc}>
				<Grid container wrap="nowrap">
					{props.sections.map((item, key) => (
						<Grid item xs={12} md={6} xl={3} key={key} className={style.tile}>
							<a href={`#section-${item.section}`}>
								<Grid container alignItems="center">
									<Grid item xs={6} md={12} xl={6} className={style.number}>
										{item.number}
									</Grid>
									<Grid item xs style={{ color: props.colors.opioidOrange }}>
										{item.subtext}
									</Grid>
								</Grid>
								<Hidden smDown>
									<p className={style.blurb}>{item.blurb}</p>
								</Hidden>
							</a>
						</Grid>
					))}
				</Grid>
			</section>
		</>
	);
};

export { CustomOpioidTocHeader, CustomOpioidHeader };
