import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ControlBar from "src/components/control-bar/control-bar";
import Share from "src/components/share/share";
import Downloads from "src/components/section-elements/downloads/downloads";
import CloseIcon from '@material-ui/icons/Close';

import Desktop from 'src/svgs/federal-covid-spending/budget/viz1Desktop.svg';
import Mobile from 'src/svgs/federal-covid-spending/budget/viz1Mobile.svg';

import AccordionList from 'src/components/accordion-list/accordion-list';
import variables from "src/styles/variables.scss";
import styles from './budget.module.scss';

export default function Budget(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const title = 'Budget Functions under $2 B';

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {

    window.addEventListener('resize', e => handleResize());


    return () => {
      window.removeEventListener('resize', e => handleResize(e));
    };

  });

  function handleResize() {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
  }

  function Chart() {
    if (windowWidth) {
      if (windowWidth >= parseInt(variables.lg)) {
        return <Desktop />;
      } else if (windowWidth >= parseInt(variables.md)) {
        return <Desktop />;
      } else {
        return <Mobile />;
      }
    } else {
      return <></>;
    }
  }

  return (
    <>
      <Grid container alignItems='center' style={{ marginBottom: 30 }}>
        <Grid item xs={10}>
          <div className={styles.vizTitle}>
            {props.section.viztitle}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Share
	    siteUrl={props.location.origin}
	    pageUrl={props.location.pathname + '#' + props.sectionId}
	    title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
	    text={'Who watches the Watchmen? Anyone with HBO...'}
            hoverColor='#1302d9'
	  />
        </Grid>
      </Grid>

      <div className="chart-container">
        <Chart />
      </div>

      <Downloads
        href={'/data/federal-covid-spending/overview/covid19_response_viz1_2020-05-21.csv'}
        date={'May 2020'}
      />
    </>);
}
