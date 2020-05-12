import React, { useState, useEffect } from 'react';

import covidStyles from './covid.module.scss';

import { Grid } from "@material-ui/core";
import Share from '../../components/share/share';
import Downloads from '../../components/section-elements/downloads/downloads';

import DesktopXLChart from '../../svgs/covid19/overview/desktop-xl-chart.svg';
import DesktopChart from '../../svgs/covid19/overview/desktop-chart.svg';
import TabletChart from '../../svgs/covid19/overview/tablet-chart.svg';
import MobileChartA from '../../svgs/covid19/overview/mobile-chart-a.svg';
import MobileChartB from '../../svgs/covid19/overview/mobile-chart-b.svg';
import MobileChartC from '../../svgs/covid19/overview/mobile-chart-c.svg';

const Overview = (props) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  })

  const appropriationsSection = (
    <Grid xs={12} sm={4} item className={covidStyles.textContainer}>
      <div className={covidStyles.overviewNumber}>1</div>
      <div className={covidStyles.overviewSubtitle}>Appropriations</div>
      <div className={covidStyles.overviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (123 characters)
      </div>
    </Grid>
  )

  const obligationsSection = (
    <Grid xs={12} sm={4} item className={covidStyles.textContainer}>
      <div className={covidStyles.overviewNumber}>2</div>
      <div className={covidStyles.overviewSubtitle}>Obligations</div>
      <div className={covidStyles.overviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (123 characters)
      </div>
    </Grid>
  )

  const outlaysSection = (
    <Grid xs={12} sm={4} item className={covidStyles.textContainer}>
      <div className={covidStyles.overviewNumber}>3</div>
      <div className={covidStyles.overviewSubtitle}>Outlays</div>
      <div className={covidStyles.overviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (123 characters)
      </div>
    </Grid>
  )

  let chartComponent = <DesktopXLChart aria-labelledby="section-2-desktop-xl-svg" />
  if (screenWidth < 992 && screenWidth >= 768) {
    chartComponent = <DesktopChart aria-labelledby="section-2-desktop-svg" />
  } else if (screenWidth < 768) {
    chartComponent = <TabletChart aria-labelledby="section-2-tablet-svg" />
  }

  const visualizationComponent = screenWidth < 576 ? (
      <>
        <Grid container>
          {appropriationsSection}
          <Grid item className={covidStyles.overviewMobileSvgContainer}>
            <MobileChartA aria-labelledby="section-2-mobile-svg-a" />
          </Grid>
          {obligationsSection}
          <Grid item className={covidStyles.overviewMobileSvgContainer}>
            <MobileChartB aria-labelledby="section-2-mobile-svg-b" />
          </Grid>
          {outlaysSection}
          <Grid item className={covidStyles.overviewMobileSvgContainer}>
            <MobileChartC aria-labelledby="section-2-mobile-svg-c" />
          </Grid>
        </Grid>
        <div className={covidStyles.updatedDate}>
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
        <div className={covidStyles.updatedDate}>
          <Downloads date='May 2020' />
        </div>
      </>
    )

  return (
    <>
      <Grid container alignItems='center' style={{ marginBottom: 30 }}>
        <Grid item xs={10}>
          <div className={covidStyles.overviewTitle}>
            The Flow of Emergency Supplemental Funding
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