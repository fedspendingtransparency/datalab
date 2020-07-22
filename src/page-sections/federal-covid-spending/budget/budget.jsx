import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ControlBar from '../../components/control-bar/control-bar';
import Share from '../../components/share/share';
import Downloads from '../../components/section-elements/downloads/downloads';

import DesktopA from '../../../static/images/covid/viz1ADesktop.svg';
import DesktopB from '../../../static/images/covid/viz1BDesktop.svg';
import DesktopC from '../../../static/images/covid/viz1CDesktop.svg';
import TabletA from '../../../static/images/covid/viz1ATablet.svg';
import TabletB from '../../../static/images/covid/viz1BTablet.svg';
import TabletC from '../../../static/images/covid/viz1CTablet.svg';
import MobileA from '../../../static/images/covid/viz1AMobile.svg';
import MobileB from '../../../static/images/covid/viz1BMobile.svg';
import MobileC from '../../../static/images/covid/viz1CMobile.svg';
import PurpleDot from '../../svgs/federal-covid-spending/budget/purpleDot.svg';

import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode'
import styles from './budget.module.scss';

export default function Budget(props) {
	const [screenMode, setScreenMode] = useState(checkScreenMode(window.innerWidth));

  if (typeof window !== 'undefined') {
    const resizeWindow = () => {
			const newMode = checkScreenMode(window.innerWidth);
      if (newMode !== screenMode) {
        setScreenMode(newMode);
      }
    }
  
    useEffect(() => {
			resizeWindow()
      window.addEventListener('resize', resizeWindow);
      return () => {
        window.removeEventListener('resize', resizeWindow);
      }
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
	)

	let firstHeight = 285
	let secondHeight = 313
	let thirdHeight = 225
	let firstSVG = <img src={DesktopA} />
	let secondSVG = <img src={DesktopB} />
	let thirdSVG = <img src={DesktopC} />

	if (screenMode === ScreenModeEnum.mobile) {
		firstHeight = 333
		secondHeight = 339
		thirdHeight = 221
		firstSVG = <img src={MobileA} />
		secondSVG = <img src={MobileB} />
		thirdSVG = <img src={MobileC} />
	} else if (screenMode === ScreenModeEnum.tablet) {
		firstSVG = <img src={TabletA} />
		secondSVG = <img src={TabletB} />
		thirdSVG = <img src={TabletC} />
	}

	const Chart = () => <>
			<div className={styles.purpleDotContainer}>
				<PurpleDot />
				<Rectangle height={firstHeight} />
				<PurpleDot />
				<Rectangle height={secondHeight} />
				<PurpleDot />
				<Rectangle height={thirdHeight} />
				<PurpleDot />
			</div>
			<div className={styles.svgContainer}>
				<span>
					As of June 1, 2020, roughly <strong>$2.58 trillion</strong> in new budgetary resources have been made available for federal agencies to respond to the pandemic.
				</span>
				{firstSVG}
				<span>
					In addition to the new agency funding granted, the [legislation] mandated the government <strong>defer and reduce taxes to provide relief to individuals and businesses.</strong> As an example, this includes payroll tax deferrals, which mean companies can postpone the deposit and payment of the employer’s share of Social Security taxes. The Congressional Budget Office CBO estimated the two-year impact will be over $902 billion in tax relief.  
				</span>
				{secondSVG}
				<span>
					The four laws also funded <strong>direct and indirect loans which could result in up to $5.25 trillion in additional money flowing into the economy. </strong>
				</span>
				{thirdSVG}
				<span>
					Agencies play a critical role in COVID-19 relief efforts by disbursing the $2.58 trillion in funding allocated through the appropriations process. Next we look at the process of spending from Congressional appropriations to payments to individuals and businesses.
				</span>
			</div>
		</>

	const Header = () => (screenMode >= ScreenModeEnum.tablet)
		?
			<ControlBar>
				<h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
				<Share
					siteUrl={props.location.origin}
					pageUrl={`${props.location.pathname}#${props.sectionId}`}
					title="Data Lab - COVID-19 tracking stuff - U.S. Treasury"
					text="Interested in learning how the federal government is allocating supplemental funds for #COVID19? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-spending/"
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
						text="Interested in learning how the federal government is allocating supplemental funds for #COVID19? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-spending/"
						hoverColor="#1302d9"
					/>
				</ControlBar>
			</>

	return (
		<>
			<Header />
			<div className={styles.chartContainer}>
				<Chart />
			</div>
			<div className={styles.sources}>
				SOURCES: To be added
			</div>
			<Downloads
				href="/data/federal-covid-spending/tracking/covid19_response_viz1_2020-06-19.csv"
				date="June 2020"
				mobileSpace
				justify={screenMode <= ScreenModeEnum.tablet ? "center" : ""}
			/>
		</>
	);
}
