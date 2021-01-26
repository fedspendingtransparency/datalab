import React from 'react';
import PropTypes from 'prop-types';
import secondaryAnalysesTileStyles from './secondary-tile.module.scss';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import flag from '../../../../images/home/new-data-flag.svg';

const hiddenDate = '12/06/2020';

const SecondaryTile = props => (
	<section className={secondaryAnalysesTileStyles.highlight}>
		<a
			href={props.href}
			className={secondaryAnalysesTileStyles.highlightLink}
			ga-on="click"
			ga-event-category="Data Lab Home Page"
			ga-event-action={'Clicked ' + props.heading}>
			<Hidden only="md">
				{/* <Grid container spacing={3}> */}
				{/* <Grid item className={secondaryAnalysesTileStyles.headings}> */}
				<div className={secondaryAnalysesTileStyles.headings}>
					<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
					<Hidden mdUp>
						<p className={secondaryAnalysesTileStyles.subheading}>
							{props.subheading}
						</p>
					</Hidden>
				</div>
				{/* <Grid item> */}
				<div>
					{Date.parse(hiddenDate) > Date.now() ? (
						<img
							style={{
								position: 'absolute',
								marginTop: '10px',
								marginLeft: '-8px',
							}}
							src={flag}
							role="presentation"
							alt=""
						/>
					) : (
						''
					)}
					<img
						style={{ width: '100%' }}
						data-src={props.imgSrc}
						className="lazyload"
						alt={props.imgAlt}
					/>
				</div>
				<Hidden mdDown>
					<p className={secondaryAnalysesTileStyles.subheading}>
						{props.subheading}
					</p>
				</Hidden>
				{/* </Grid> */}
				{/* <Grid item> */}
				<p className={secondaryAnalysesTileStyles.text}>{props.body}</p>
				{/* </Grid>
				</Grid> */}
			</Hidden>

			<Hidden only={['xs', 'sm', 'lg', 'xl']}>
				<Grid container spacing={3}>
					<Grid item md={6} className={secondaryAnalysesTileStyles.headings}>
						<p className={secondaryAnalysesTileStyles.heading}>{props.heading}</p>
						<p className={secondaryAnalysesTileStyles.subheading}>
							{props.subheading}
						</p>
						<p className={secondaryAnalysesTileStyles.text}>{props.body}</p>
					</Grid>
					<Grid item xs={12} md={6}>
						<div>
							{Date.parse(hiddenDate) > Date.now() ? (
								<img
									style={{
										position: 'absolute',
										marginTop: '10px',
										marginLeft: '-8px',
									}}
									src={flag}
									role="presentation"
									alt=""
								/>
							) : (
								''
							)}
							<img
								style={{ width: '100%' }}
								data-src={props.imgSrc}
								className="lazyload"
								alt={props.imgAlt}
							/>
						</div>
					</Grid>
				</Grid>
			</Hidden>
		</a>
	</section>
);

export default SecondaryTile;

SecondaryTile.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
