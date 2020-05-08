import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';

export default function Tracking(props) {

	const data = useStaticQuery(graphql`
    query {
      main: allSf133Viz4Main20200501Csv {
        nodes {
          Agency
          Total_Budgetary_Authority
          Percent_Outlay
					Percent_Obligated
          Percent_Unobligated
        }
      }
    }
  `);

	const mainChart = () => {
		const table = data.main.nodes.map((i, key) => <>
			<div className={styles.label}>{i.Agency}</div>
			<div className={styles.bars}>
				<span className={styles.outlayBar} style={{ width: `${i.Percent_Outlay}%` }}>&nbsp;</span>
				<span className={styles.obligatedBar} style={{ width: `${i.Percent_Obligated}%` }}>&nbsp;</span>
				<span className={styles.unobligatedBar} style={{ width: `${i.Percent_Unobligated}%` }}>&nbsp;</span>
				<canvas id={`callout-${key}`} height={5} width='100%'></canvas>
				<div className={styles.barLabels}>
					<div className={styles.outlayLabel} style={{ width: `${i.Percent_Outlay}%` }}>Outlay ({i.Percent_Outlay}%)</div>
					<div className={styles.obligatedLabel}>Obligated ({i.Percent_Obligated}%)</div>
					<div className={styles.unobligatedLabel} style={{ width: `${i.Percent_Unobligated}%` }}>Unobligated ({i.Percent_Unobligated}%)</div>
				</div>
			</div>
			<div className={styles.budget}>{numberFormatter('dollars suffix', i.Total_Budgetary_Authority)}</div>
		</>);

		return (<>
		<div className={styles.percentLabel}>
			<span>0%</span> <span>50%</span> <span>100%</span>
			</div>
			<div className={styles.barContainer}>
				{table}
			</div>
		</>);
	}

	useEffect(() => {
		const ctx = document.getElementById('callout-0').getContext('2d');
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'black';
		ctx.beginPath();
		ctx.moveTo(10, 0);
		ctx.lineTo(10, 3);
		ctx.lineTo(10, 20);
		ctx.lineTo(20, 5);
		ctx.stroke();
	});

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