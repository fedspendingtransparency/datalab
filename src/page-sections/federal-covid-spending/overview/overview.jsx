import React, { useState, useEffect } from 'react';

import overviewStyles from './overview.module.scss';

import { Grid } from "@material-ui/core";
import Share from '../../../components/share/share';
import Downloads from '../../../components/section-elements/downloads/downloads';

import DesktopChart from '../../../images/covid/overview/desktop-chart.svg';
import TabletChart from '../../../images/covid/overview/tablet-chart.svg';
import MobileChartA from '../../../images/covid/overview/mobile-chart-a.svg';
import MobileChartB from '../../../images/covid/overview/mobile-chart-b.svg';
import MobileChartC from '../../../images/covid/overview/mobile-chart-c.svg';

const Overview = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const appropriationsSection = (
    <Grid xs={12} sm={4} item className={overviewStyles.textContainer}>
      <div className={overviewStyles.overviewNumber}>1</div>
      <div className={overviewStyles.overviewSubtitle}>Appropriations</div>
      <div className={overviewStyles.overviewText}>
        After an appropriation law is passed, The Treasury issues funds to specific agency spending accounts.
      </div>
    </Grid>
  );

  const obligationsSection = (
    <Grid xs={12} sm={4} item className={overviewStyles.textContainer}>
      <div className={overviewStyles.overviewNumber}>2</div>
      <div className={overviewStyles.overviewSubtitle}>Obligations</div>
      <div className={overviewStyles.overviewText}>
        Federal agencies obligate funds towards contracts, loans, grants, direct payments, and other financial assistance. 
      </div>
    </Grid>
  );

  const outlaysSection = (
    <Grid xs={12} sm={4} item className={overviewStyles.textContainer}>
      <div className={overviewStyles.overviewNumber}>3</div>
      <div className={overviewStyles.overviewSubtitle}>Outlays</div>
      <div className={overviewStyles.overviewText}>
        Federal agencies authorize payments, called outlays, indicating that the money has been paid. 
      </div>
    </Grid>
  );

  let chartComponent = <img src={DesktopChart} alt="section-2-desktop-svg" />
  if (screenWidth < 992 && screenWidth >= 768) {
    chartComponent = <img src={TabletChart} alt="section-2-tablet-svg" />;
  }

  const visualizationComponent = screenWidth < 768 ? (
    <>
      <Grid container className={overviewStyles.overviewMobileContainer}>
        {appropriationsSection}
        <Grid item className={overviewStyles.overviewMobileSvgContainer}>
          <img src={MobileChartA} alt="section-2-mobile-svg-a" />
        </Grid>
        {obligationsSection}
        <Grid item className={overviewStyles.overviewMobileSvgContainer}>
          <img src={MobileChartB} alt="section-2-mobile-svg-b" />
        </Grid>
        {outlaysSection}
        <Grid item className={overviewStyles.overviewMobileSvgContainer}>
          <img src={MobileChartC} alt="section-2-mobile-svg-c" />
        </Grid>
      </Grid>
      <div className={overviewStyles.updatedDate}>
        <Downloads justify='center' date='May 2020' />
      </div>
    </>
  ) : (
    <>
      <Grid container>
        {appropriationsSection}
        {obligationsSection}
        {outlaysSection}
      </Grid>
      {chartComponent}
      <div className={overviewStyles.updatedDate}>
        <Downloads date='May 2020' />
      </div>
    </>
  );

  return (
    <>
      <Grid container alignItems='center' style={{ marginBottom: 30 }}>
        <Grid item xs={10}>
          <div className={overviewStyles.overviewTitle}>
            The Process of Spending COVID-19 Funds
          </div>
        </Grid>
        <Grid item xs={2}>
          <Share
            location={props.location}
            title='Check out this analysis on Data Lab'
            text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!'
            twitter='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending'
          />
        </Grid>
      </Grid>
      {visualizationComponent}
    </>
  );
}

export default Overview;
