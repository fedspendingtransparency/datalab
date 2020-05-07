import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import ReadMore from 'src/components/read-more/read-more'
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
		const table = data.main.nodes.map(i => <>
			<div className={styles.label}>{i.Agency}</div>
			<div className={styles.bars}>
				<span className={styles.outlayBar} style={{ width: `${i.Percent_Outlay}%` }}>&nbsp;</span>
				<span className={styles.obligatedBar} style={{ width: `${i.Percent_Obligated}%` }}>&nbsp;</span>
				<span className={styles.unobligatedBar} style={{ width: `${i.Percent_Unobligated}%` }}>&nbsp;</span>
				<div className={styles.barLabels}>
					<div className={styles.outlayLabel} style={{ width: `${i.Percent_Outlay}%` }}>Outlay ({i.Percent_Outlay}%)</div>
					<div className={styles.obligatedLabel}>Obligated ({i.Percent_Obligated}%)</div>
					<div className={styles.unobligatedLabel} style={{ width: `${i.Percent_Unobligated}%` }}>Unobligated ({i.Percent_Unobligated}%)</div>
				</div>
			</div>
			<div className={styles.budget}>{numberFormatter('dollars suffix', i.Total_Budgetary_Authority)}</div>
		</>);

		const readMoreStyle = {
			width: '100%',
			color: 'purple'
		};

		return (
			<ReadMore
				maxHeight={2500}
				collapsedHeight={575} // top 10 bars
				expandText='See More'
				collapseText='Show Less'
				buttonStyle={readMoreStyle}
			>
				<div className={styles.barContainer}>
					{table}
				</div>
			</ReadMore>
		);
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