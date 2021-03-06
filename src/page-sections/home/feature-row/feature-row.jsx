import React from 'react';
import featuredAnalysesStyles from './feature-row.module.scss';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ImageFallback from "../../../components/image-fallback/image-fallback";

const FeatureRow = props => {
	return (
		<a href={props.href}>
			<Grid container spacing={3} className={featuredAnalysesStyles.container}>
				<Grid item xs={12} md={6} className={featuredAnalysesStyles.content}>
					<h1 className={featuredAnalysesStyles.heading}>{props.heading}</h1>
					<p className={featuredAnalysesStyles.title}>{props.title}</p>
					<p className={featuredAnalysesStyles.blurb}>{props.blurb}</p>
				</Grid>
				<Grid item xs={12} md={6} className={featuredAnalysesStyles.image}>
					<ImageFallback {...props}/>
				</Grid>
			</Grid>
		</a>
	);
};

export default FeatureRow;

FeatureRow.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
};
