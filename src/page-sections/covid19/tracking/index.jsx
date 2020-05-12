import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum } from 'src/utils/enums.js';
import styles from './tracking.module.scss';
import globals from 'src/styles/variables.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bar';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';

export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
      main: allSf133Viz3FunctionMain20200506Csv {
        nodes {
          Function_Description
          Total_Budgetary_Authority
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

	const [screenMode, setScreenMode] = useState(0);

	useEffect(() => {
		updateScreenMode(window.innerWidth);
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		}
	});

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
		switch (screenMode) {
			case ScreenModeEnum.mobile:
				if (window.innerWidth >= globals.md) {
					updateScreenMode(window.innerWidth);
				}
				break;
			case ScreenModeEnum.tablet:
				if (window.innerWidth < globals.md || window.innerWidth >= globals.lg) {
					updateScreenMode(window.innerWidth);
				}
				break;
			case ScreenModeEnum.desktop:
				if (window.innerWidth < globals.lg || window.innerWidth >= globals.xl) {
					updateScreenMode(window.innerWidth);
				}
				break;
			case ScreenModeEnum.desktop_xl:
				if (window.innerWidth < globals.xl) {
					updateScreenMode(window.innerWidth);
				}
		}
	}

	const calloutHeight = 10;

	const mainChart = () => {
		const table = data.main.nodes.map((i, key) => {
			const data = [{
				'amount': i.Amount_Outlaid,
				'percent': i.Percent_Outlaid
			}, {
				'amount': i.Amount_Obligated,
				'percent': i.Percent_Obligated
			}, {
				'amount': i.Amount_Unobligated,
				'percent': i.Percent_Unobligated
			}];
			return <Bar key={key} data={data} barLabel={i.Function_Description} total={i.Total_Budgetary_Authority} />;
		});

		return (<>
			<div className={styles.legend}>
				<div></div>
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