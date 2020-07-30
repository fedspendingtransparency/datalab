import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Downloads from 'src/components/section-elements/downloads/downloads';

import DesktopA from 'src/images/covid/budget/viz1ADesktop.svg';
import DesktopB from 'src/images/covid/budget/viz1BDesktop.svg';
import DesktopC from 'src/images/covid/budget/viz1CDesktop.svg';
import TabletA from 'src/images/covid/budget/viz1ATablet.svg';
import TabletB from 'src/images/covid/budget/viz1BTablet.svg';
import TabletC from 'src/images/covid/budget/viz1CTablet.svg';
import MobileA from 'src/images/covid/budget/viz1AMobile.svg';
import MobileB from 'src/images/covid/budget/viz1BMobile.svg';
import MobileC from 'src/images/covid/budget/viz1CMobile.svg';
import PurpleDot from 'src/svgs/federal-covid-spending/purpleDot.svg';

import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode';
import styles from './budget.module.scss';

// All heights and widths are based on SVG sizes
const desktopSVGs = [
  {
    img: DesktopA,
    width: 497,
    alt: "Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.",
  },
  {
    img: DesktopB,
    width: 588,
    alt: "Bar chart of the total estimated value of legislation ($3.48T), which include New Agency Funding ($2.58T) and Tax Relief ($902B).",
  },
  {
    img: DesktopC,
    width: 944,
    alt: "Bar chart showing total estimated lending ($3.91T) broken down by utilized lending ($765B) and available lending ($3.15T).",
  }
];

const mobileSVGs = [
  {
    img: MobileA,
    width: 261,
    alt: "Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.",
  },
  {
    img: MobileB,
    width: 191,
    alt: "Bar chart of the total estimated value of legislation ($3.48T), which include New Agency Funding ($2.58T) and Tax Relief ($902B).",
  },
  {
    img: MobileC,
    width: 266,
    alt: "Bar chart showing total estimated lending ($3.91T) broken down by utilized lending ($765B) and available lending ($3.15T).",
  }
];

const tabletSVGs = [
  {
    img: TabletA,
    width: 418,
    alt: "Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.",
  },
  {
    img: TabletB,
    width: 432,
    alt: "Bar chart of the total estimated value of legislation ($3.48T), which include New Agency Funding ($2.58T) and Tax Relief ($902B).",
  },
  {
    img: TabletC,
    width: 692,
    alt: "Bar chart showing total estimated lending ($3.91T) broken down by utilized lending ($765B) and available lending ($3.15T).",
  }
];

const desktopHeights = [290, 314, 218]
const mobileHeights = [392, 444, 255]
const tabletHeights = [294, 316, 212]

export default function Budget(props) {
  const [screenMode, setScreenMode] = useState(0);

  const [svgs, setSvgs] = useState(mobileSVGs);
  const [heights, setHeights] = useState(mobileHeights);

  if (typeof window !== 'undefined') {
    const resizeWindow = () => {
      const newMode = checkScreenMode(window.innerWidth);
      setScreenMode(newMode);

      if (newMode >= ScreenModeEnum.desktop) {
	setSvgs(desktopSVGs);
	setHeights(desktopHeights);
      } else if (newMode === ScreenModeEnum.mobile) {
	setSvgs(mobileSVGs);
	setHeights(mobileHeights);
      } else if (newMode === ScreenModeEnum.tablet) {
	setSvgs(tabletSVGs);
	setHeights(tabletHeights);
      }
    };

    useEffect(() => {
      resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => {
        window.removeEventListener('resize', resizeWindow);
      };
    }, []);
  }

  const Rectangle = ({ height }) => (
    <svg style={{ height }}>
      <rect
	fill='#d8d8d8'
	x='50%'
	width='1'
	height={height}
      />
    </svg>
  );

  const Chart = () => <>
	                <div className={styles.purpleDotContainer}>
	                  <PurpleDot />
	                  <Rectangle height={heights[0]} />
	                  <PurpleDot />
	                  <Rectangle height={heights[1]} />
	                  <PurpleDot />
	                  <Rectangle height={heights[2]} />
	                  <PurpleDot />
	                </div>
	                <div className={styles.svgContainer}>
	                  <span>
		            As of June 1, 2020, roughly <strong>$2.58 trillion in new budgetary resources</strong> have been made available for federal agencies to respond to the pandemic.
	                  </span>
	                  <img src={svgs[0].img} width={svgs[0].width} alt={svgs[0].alt} />
	                  <span>
		            In addition to the new agency funding granted, the [legislation] mandated the government <strong>defer and reduce taxes to provide relief to individuals and businesses.</strong> As an example, this includes payroll tax deferrals, which mean companies can postpone the deposit and payment of the employer’s share of Social Security taxes. The Congressional Budget Office CBO estimated the two-year impact will be over $902 billion in tax relief.
	                  </span>
	                  <img src={svgs[1].img} width={svgs[1].width} alt={svgs[1].alt} />
	                  <span>
The four laws included <strong>funding for credit, loan and loan guarantee programs, which could result in an estimated total of $3.91 trillion in total lending.</strong><a id="fr1" href="#fn1" className="footnoteref">1</a> To date $765 billion in credit, loans and loan guarantees have been reported and more than $3 trillion remain available. This includes the Federal Reserve’s emergency lending facilities, which have reported $88 billion utilized out of $2.3 trillion in potential credit.
	                  </span>
	                  <img src={svgs[2].img} width={svgs[2].width} alt={svgs[2].alt} />
	                  <span>
The CARES Act and other supplemental legislation are providing financial relief in response to the pandemic through agency funding, tax deferrals, and lending. While the total impact of this legislation may not be measured until years from now, agencies are already playing a critical role by disbursing the $2.58 trillion in funding allocated through the appropriations process. Next, we look at the process of how funds are spent, from Congressional appropriations to payments to individuals and businesses. 
	                  </span>
	                </div>
	              </>;

  const Header = () => (screenMode >= ScreenModeEnum.tablet)
	?
	<ControlBar>
	  <h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
	  <Share
	    siteUrl={props.location.origin}
	    pageUrl={`${props.location.pathname}#${props.sectionId}`}
	    title="Data Lab - COVID-19 tracking stuff - U.S. Treasury"
	    text="Interested in learning about #COVID19 supplemental funding? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-funding/"
	    hoverColor="#1302d9"
	  />
	</ControlBar>
  :
  <>
    <h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
    <ControlBar alignRightOnMobile>
      <Share
	siteUrl={props.location.origin}
	pageUrl={`${props.location.pathname}#${props.sectionId}`}
	title="Data Lab - COVID-19 tracking stuff - U.S. Treasury"
	text="Interested in learning about #COVID19 supplemental funding? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-funding/"
	hoverColor="#1302d9"
      />
    </ControlBar>
  </>;

  return (
    <>
      <Header />
      <div className={styles.chartContainer}>
	<Chart />
      </div>
      <Downloads
	href="/data/federal-covid-spending/budget/covid19_Viz_1_Data_Download_2020_07_29.csv"
	date="July 2020"
	mobileSpace
	justify={screenMode <= ScreenModeEnum.tablet ? "center" : ""}
      />
    </>
  );
}
