import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import storySectionHeadingStyles from './story-section-heading.module.scss';
import ReadMore from '../../read-more/read-more';

const propTypes = {
  accordion: PropTypes.element,
};

const defaultProps = {
  accordion: null,
};

const StorySectionHeading = (props) => {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  })

  function NumberItem () {
    if(props.number) {
      return (
        <Grid item xs={1} sm={12} xl={1} className={storySectionHeadingStyles.headerNumber}>
          <h2>{props.number}</h2>
        </Grid>
      )
    }
    return <></>;
  }

  const blurb = props.readMoreOnMobile && screenWidth < 768
    ? (
      <ReadMore buttonStyle={{color: props.toggleColor}}>
        <div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>
      </ReadMore>
    ) :
    <div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>;

  return (
    <header>
      <section className={storySectionHeadingStyles.header}>
        <Grid container>
          {props.header}
          <NumberItem />
          <Hidden smUp>
            <Grid item xs={1} />
          </Hidden>
          <Grid item xs={10} sm={12} xl={11} className={storySectionHeadingStyles.headerTitle}>
            {props.title}
          </Grid>
        </Grid>
        <Grid container className={storySectionHeadingStyles.introContainer}>
          <Grid item xs={12} xl={5} className={storySectionHeadingStyles.intro}>{props.teaser}</Grid>
          <Grid item xs={12} xl={7} className={storySectionHeadingStyles.intro}>
            {blurb}
            {props.accordion}
          </Grid>
        </Grid>
      </section>
    </header>
  );
};

StorySectionHeading.propTypes = propTypes;
StorySectionHeading.defaultProps = defaultProps;

export default StorySectionHeading;
