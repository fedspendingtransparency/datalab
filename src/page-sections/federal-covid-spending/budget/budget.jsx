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
import PurpleDot from 'src/svgs/federal-covid-spending/budget/purpleDot.svg';

import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode'
import styles from './budget.module.scss';

export default function Budget(props) {
	const [screenMode, setScreenMode] = useState(checkScreenMode(window.innerWidth));

  if (typeof window !== 'undefined') {
    const resizeWindow = () => {
			const newMode = checkScreenMode(window.innerWidth);
			setScreenMode(newMode);
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

	// All heights and widths are based on SVG sizes
	let firstHeight = 285
	let secondHeight = 313
	let thirdHeight = 225
	let firstSVG = <img src={DesktopA} width={497} alt="DesktopA placeholder alt text"/>
	let secondSVG = <img src={DesktopB} width={588} alt="DesktopB placeholder alt text"/>
	let thirdSVG = <img src={DesktopC} alt="DesktopC placeholder alt text"/>

	if (screenMode === ScreenModeEnum.mobile) {
		firstHeight = 355
		secondHeight = 427
		thirdHeight = 265
		firstSVG = <img src={MobileA} width={317} alt="MobileA placeholder alt text"/>
		secondSVG = <img src={MobileB} width={315} alt="MobileB placeholder alt text"/>
		thirdSVG = <img src={MobileC} width={350} alt="MobileC placeholder alt text"/>
	} else if (screenMode === ScreenModeEnum.tablet) {
		firstSVG = <img src={TabletA} width={418} alt="TabletA placeholder alt text"/>
		secondSVG = <img src={TabletB} width={432} alt="TabletB placeholder alt text"/>
		thirdSVG = <img src={TabletC} width={692} alt="TabletC placeholder alt text"/>
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
