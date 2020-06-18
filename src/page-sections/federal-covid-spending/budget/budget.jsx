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

  function Header() {
    if (windowWidth && windowWidth >= parseInt(variables.md)) {
      return (
        <>
          <ControlBar>
            <h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
            <Share
              siteUrl={props.location.origin}
              pageUrl={props.location.pathname + '#' + props.sectionId}
              title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
              text={'Interested in learning how the federal government is allocating supplemental funds for #COVID19? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-spending/'}
              hoverColor='#1302d9'
            />
          </ControlBar>
        </>
      );
    } else {
      return (
        <>
          <h2 className="rd-viztitle">{props.section.viztitle}</h2>
          <ControlBar alignRightOnMobile>
            <Share
              siteUrl={props.location.origin}
              pageUrl={props.location.pathname + '#' + props.sectionId}
              title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
              text={'Interested in learning how the federal government is allocating supplemental funds for #COVID19? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-spending/'}
              hoverColor='#1302d9'
            />
          </ControlBar>
        </>
      );
    }
  }

  return (
    <>
      <Header />
      <div className={styles.chartContainer}>
        <Chart />
      </div>

      <Downloads
        href={'/data/federal-covid-spending/tracking/covid19_response_viz1_2020-05-21.csv'}
        date={'May 2020'}
        mobileSpace
      />
    </>
  );
}
