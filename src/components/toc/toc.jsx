import styles from './toc.module.scss';
import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import Radium, { Style } from 'radium';
import styleVariables from '../../styles/variables.scss';

const Toc = (props) => {
  const inlineStyles = {
    legacy: styleVariables.legacyBlue,
    'colleges-and-universities': styleVariables.cuRed,
    'federal-covid-spending': styleVariables.covidColor
  };

  let selectedStyle = inlineStyles.legacy;

  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname.replace(/\//g, "");
    const index = Object.keys(inlineStyles).indexOf(pathname);

    if (index > -1) {
      selectedStyle = inlineStyles[pathname];
    }
  }

  return (
    <section id={styles.TOC}>
      <Grid container justify='space-around'>
        {props.sections.map((item, key) =>

          <Grid item key={key} className={`${styles.tile}`} xs={12} md={6} xl>
            <a href={`#section-${item.anchor}`} className='hover-color'>
              <Style
                scopeSelector=".hover-color:hover .number, .hover-color:hover .section, .hover-color:hover .subtitle, .hover-color:hover .blurb"
                rules={{
                  color: `${selectedStyle} !important`,
                  textDecoration: 'underline'
                }}
              />
              <Grid container className={styles.content} justify='center'>
                <Grid item className={styles.a}>
                  <Grid container>
                    <Grid item className={`${styles.number} number`} xs={2} lg={3}>
                      {item.number}
                    </Grid>
                    <Grid item className={`${styles.section} section`}>
                      <Style
                        scopeSelector=".section"
                        rules={{
                          color: `${selectedStyle} !important`,
                        }}
                      />
                      {item.section}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <div className={`${styles.subtitle} subtitle`}>{item.subblurb}</div>
                    <div className={`${styles.blurb} blurb`}>{item.blurb}</div>
                  </Grid>

                </Grid>
              </Grid>
            </a>
          </Grid>
        )}
      </Grid>
    </section>
  )
}

Toc.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
}

const TocDownloads = Radium(Toc);

export default TocDownloads;
