import React from 'react';
import PropTypes from 'prop-types';
import secondaryAnalysesTileStyles from './secondary-tile.module.scss';

import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'gatsby';

const SecondaryTile = (props) => (
	<section className={secondaryAnalysesTileStyles.highlight}>
		<Link
			to={props.href}
			className={secondaryAnalysesTileStyles.highlightLink}
			ga-on='click' ga-event-category='Data Lab Home Page'
			ga-event-action={'Clicked ' + props.heading}
		>
			<Hidden only='md'>
				{/* <Grid container spacing={3}> */}
					{/* <Grid item className={secondaryAnalysesTileStyles.headings}> */}
					<div className={secondaryAnalysesTileStyles.headings}>
						<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
						<Hidden mdUp>
							<p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
						</Hidden>
					</div>
					{/* <Grid item> */}
						<img
							style={{ width: '100%' }}
							data-src={props.imgSrc}
							className='lazyload'
							role='presentation'
						/>
						<Hidden mdDown>
							<p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
						</Hidden>
					{/* </Grid> */}
					{/* <Grid item> */}
						<p className={secondaryAnalysesTileStyles.text}>
							{props.body}
						</p>
					{/* </Grid>
				</Grid> */}
			</Hidden>

			<Hidden only={['xs', 'sm', 'lg', 'xl']}>
				<Grid container spacing={3}>
					<Grid item md={6} className={secondaryAnalysesTileStyles.headings}>
						<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
						<p className={secondaryAnalysesTileStyles.subheading}>{props.subheading}</p>
						<p className={secondaryAnalysesTileStyles.text}>
							{props.body}
						</p>
					</Grid>
					<Grid item xs={12} md={6}>
						<img
							style={{ width: '100%' }}
							data-src={props.imgSrc}
							className='lazyload'
							alt={props.imgAlt}
						/>
					</Grid>
				</Grid>
			</Hidden>
		</Link>
	</section>
);

export default SecondaryTile;

SecondaryTile.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}
