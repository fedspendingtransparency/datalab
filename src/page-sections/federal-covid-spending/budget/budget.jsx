import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Downloads from 'src/components/section-elements/downloads/downloads';

import Desktop from 'src/svgs/federal-covid-spending/budget/viz1Desktop.svg';
import Mobile from 'src/svgs/federal-covid-spending/budget/viz1Mobile.svg';

import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode'
import styles from './budget.module.scss';

export default function Budget(props) {
	const [screenMode, setScreenMode] = useState(0);

  if (typeof window !== 'undefined') {
    const resizeWindow = () => {
      const newMode = checkScreenMode(window.innerWidth);
      if (newMode !== screenMode) {
        setScreenMode(newMode);
      }
    }
  
    useEffect(() => {
      window.addEventListener('resize', resizeWindow);
      return () => {
        window.removeEventListener('resize', resizeWindow);
      }
    }, []);
  }

	function Chart() {
		if (screenMode >= ScreenModeEnum.tablet) {
			return <Desktop />;
		}
		return <Mobile />;
	}

	function Header() {
		if (screenMode >= ScreenModeEnum.tablet) {
			return (
				<>
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
				</>
			);
		}
		return (
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
		);
	}
	console.log(screenMode)

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
				date="July 2020"
				mobileSpace
				justify={screenMode <= ScreenModeEnum.tablet ? "center" : ""}
			/>
		</>
	);
}
