import React from 'react';
import { Link } from 'gatsby';
import featuredAnalysesStyles from './feature-row.module.scss';
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";

const FeatureRow = (props) => {
  return (
    <Link to={props.href}>
      <Grid
        container
        spacing={3}
        className={featuredAnalysesStyles.container}
      >
        <Grid item xs={12} md={6} className={featuredAnalysesStyles.content}>
          <h1 className={featuredAnalysesStyles.heading}>
            {props.heading}
          </h1>
          <p className={featuredAnalysesStyles.title}>
            {props.title}
          </p>
          <p className={featuredAnalysesStyles.blurb}>
            {props.blurb}
          </p>
        </Grid>
        <Grid item xs={12} md={6} className={featuredAnalysesStyles.image}>
          <img
						data-src={props.imgSrc}
            alt={props.imgAlt}
					  className="lazyload"
					/>
        </Grid>
      </Grid>
    </Link>
  );
}

export default FeatureRow;

FeatureRow.propTypes = {
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired

}
