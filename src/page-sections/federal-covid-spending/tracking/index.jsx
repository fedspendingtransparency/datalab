import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { checkScreenMode } from 'src/utils/screen-mode.js';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bar';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';
import Toggle from 'src/components/toggle/toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import ListAltIcon from '@material-ui/icons/ListAlt';



export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
      main: allCovid19ResponseViz3FunctionMain20200519Csv {
        nodes {
          Function_Description
          Total_Budgetary_Resources
					Percent_Outlaid
					Amount_Outlaid
					Percent_Obligated
					Amount_Obligated
					Percent_Unobligated
					Amount_Unobligated
        }
      }
    }
	`);
	
	const first = {
    name: 'Budget Function',
    icon: <ListAltIcon className={styles.toggleIcon} />
  }

  const second = {
    name: 'Agency',
    icon: <FontAwesomeIcon icon={faUniversity} className={styles.toggleIcon} />
  }

  const [checked, toggleChecked] = useState(false);
	const [screenMode, setScreenMode] = useState(0);
	
	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		}
	});

	const handleToggle = (e) => {
		toggleChecked(e.target.checked)
	}

	const updateScreenMode = currentWidth => {
		if (currentWidth < globals.md) {
			setScreenMode(ScreenModeEnum.mobile);
		} else if (currentWidth < globals.lg) {
			setScreenMode(ScreenModeEnum.tablet);
		} else if (currentWidth < globals.xl) {
			setScreenMode(ScreenModeEnum.desktop);
		} else {
			setScreenMode(ScreenModeEnum.desktop_xl);
		}
	}

	// update state & redraw ONLY if mode changes
	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	}

	const mainChart = () => {
		const table = data.main.nodes.map((i, key) => {
			const _data = [{
				'amount': numberFormatter('dollars suffix', i.Amount_Outlaid),
				'percent': i.Percent_Outlaid
			}, {
				'amount': numberFormatter('dollars suffix', i.Amount_Obligated),
				'percent': i.Percent_Obligated
			}, {
				'amount': numberFormatter('dollars suffix', i.Amount_Unobligated),
				'percent': i.Percent_Unobligated
			}];
			return <Bar key={key} data={_data} barLabel={i.Function_Description}
				total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
				firstBar={key === 0}
				lastBar={key === data.main.nodes.length - 1}
			/>;
		});

		return (<>
			<div className={styles.legend}>
				<div className={styles.toggleContainer}>
					<Toggle
						first={first}
						second={second}
						checked={checked}
						handleToggle={handleToggle}
					/>
				</div>
				<div className={styles.blockContainer}>
					<span className={`${styles.block} ${styles.outlayBar}`}></span><span>Outlay</span>
					<span className={`${styles.block} ${styles.obligatedBar}`}></span><span>Obligated</span>
					<span className={`${styles.block} ${styles.unobligatedBar}`}></span><span>Unobligated</span>
				</div>
			</div>
			<div className={styles.percentLegend}>
				<span>0%</span><span>50%</span><span>100%</span>
			</div>
			<div className={styles.barContainer}>
				{table}
			</div>
		</>);
	}

	return <>
		<AccordionList title='Instructions'>
			<p>Actual instructions are larger than they appear</p>
		</AccordionList>

		<ControlBar>
			<Share
				siteUrl={props.location.origin}
				pageUrl={props.location.pathname + '#' + props.sectionId}
				title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
				text={'Who watches the Watchmen? Anyone with HBO...'}
			/>
		</ControlBar>

		{mainChart()}

		<Downloads
			href={''}
			date={'Flovember 1922'}
		/>
	</>;
}