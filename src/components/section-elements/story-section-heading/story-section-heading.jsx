import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import storySectionHeadingStyles from './story-section-heading.module.scss';
import ReadMore from '../../read-more/read-more';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

StorySectionHeading.propTypes = {
  accordion: PropTypes.element
};

StorySectionHeading.defaultProps = {
  accordion: null
};

export default function StorySectionHeading(props) {

  // update state & redraw ONLY if mode changes
  const [screenMode, setScreenMode] = useState(0);
  const resizeWindow = () => {
    const newMode = checkScreenMode(window.innerWidth);
    if (newMode !== screenMode) {
      setScreenMode(newMode);
    }
  }
  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  });

  function NumberItem() {
    if (props.number) {
      return (
        <Grid item xs={1} sm={12} xl={1} className={storySectionHeadingStyles.headerNumber}>
          <h2>{props.number}</h2>
        </Grid>
      )
    }
    return <></>;
  }

  const blurb = props.readMoreOnMobile && screenMode < ScreenModeEnum.tablet ? (
    <ReadMore buttonStyle={props.readMoreStyle} collapsedHeight='72px'>
      <div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>
    </ReadMore>
  ) :
    <div className={storySectionHeadingStyles.blurb}>{props.blurb}</div>
    ;

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
