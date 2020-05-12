import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum } from 'src/utils/enums.js';
import styles from './tracking.module.scss';
import globals from 'src/styles/variables.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';

export default function Tracking(props) {
	const [screenMode, setScreenMode] = useState(ScreenModeEnum.desktop);

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

	const calloutHeight = 10;

	const mainChart = () => {
		const table = data.main.nodes.map((i, key) => <>
			<div className={styles.label}>{i.Function_Description}</div>
			<div className={styles.bars} onClick={() => clickHandler(i.Function_Description)}>
				<span className={styles.outlayBar} style={{ width: `${i.Percent_Outlaid}%` }}>&nbsp;</span>
				<span id={`obligated-bar-${key}`}
					className={styles.obligatedBar}
					style={{ width: `${i.Percent_Obligated}%` }}
				>&nbsp;</span>
				<span className={styles.unobligatedBar} style={{ width: `${i.Percent_Unobligated}%` }}>&nbsp;</span>
				<div style={{ height: calloutHeight, position: 'relative' }}>
				</div>
				<div className={styles.barLabels}>
					<div className={styles.outlayLabel} style={{ width: `${i.Percent_Outlaid}%` }}>Outlay ({numberFormatter('dollars suffix', i.Amount_Outlaid)})</div>
					<div id={`obligated-label-${key}`} className={styles.obligatedLabel}>
						Obligated ({numberFormatter('dollars suffix', i.Amount_Obligated)})
					</div>
					<div className={styles.unobligatedLabel} style={{ width: `${i.Percent_Unobligated}%` }}>Unobligated ({numberFormatter('dollars suffix', i.Amount_Unobligated)})</div>
				</div>
			</div>
			<div className={styles.budget}>{numberFormatter('dollars suffix', i.Total_Budgetary_Authority)}</div>
		</>);

		const clickHandler = (item) => {
			alert(item + ' clicked');
		}

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

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		}
	});

	const updateScreenMode = currentWidth => {

		console.log(currentWidth);


		if (currentWidth < globals.md) {
			setScreenMode(ScreenModeEnum.mobile);
		}
	}

	const resizeWindow = () => {
		switch (screenMode) {
			case ScreenModeEnum.mobile:
				if (window.innerWidth >= globals.md) {
					updateScreenMode(window.innerWidth);
				}
		}
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