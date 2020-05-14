import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { checkScreenMode } from 'src/utils/screen-mode.js';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bar';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';

export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
			agencies: allSf133Viz3AgencyPopout20200506Csv {
					group(field: Agency) {
						nodes {
							Agency
							Account_Name
							Percent_Outlaid
							Amount_Outlaid
							Percent_Obligated
							Amount_Obligated
							Percent_Unobligated
							Amount_Unobligated
							Total_Budgetary_Authority
						}
					}
				}
				functions: allSf133Viz3FunctionPopout20200506Csv {
					group(field: Function_Description) {
						nodes {
							Function_Description
							Account_Name
							Percent_Outlaid
							Amount_Outlaid
							Percent_Obligated
							Amount_Obligated
							Percent_Unobligated
							Amount_Unobligated
							Total_Budgetary_Authority
						}
					}
				}
			}
  `);

	// const [screenMode, setScreenMode] = useState(0);

	// useEffect(() => {
	// 	resizeWindow();
	// 	window.addEventListener('resize', resizeWindow);
	// 	return () => {
	// 		window.removeEventListener('resize', resizeWindow);
	// 	}
	// });

	// // update state & redraw ONLY if mode changes
	// const resizeWindow = () => {
	// 	const newMode = checkScreenMode(window.innerWidth);
	// 	if (newMode !== screenMode) {
	// 		setScreenMode(newMode);
	// 	}
	// }

	const mainChart = () => {
		const table = data.functions.group.map((g, key) => {
			let total = 0;
			const _data = [
				{ 'amount': 0, 'percent': 0 },
				{ 'amount': 0, 'percent': 0 },
				{ 'amount': 0, 'percent': 0 },
			];

			g.nodes.map(i => {
				_data[0].amount += parseFloat(i.Amount_Outlaid);
				_data[1].amount += parseFloat(i.Amount_Obligated);
				_data[2].amount += parseFloat(i.Amount_Unobligated);
				total += parseFloat(i.Total_Budgetary_Authority);
			});
			_data[0].percent += numberFormatter('percent', _data[0].amount / total);
			_data[1].percent += numberFormatter('percent', _data[1].amount / total);
			_data[2].percent += numberFormatter('percent', _data[2].amount / total);
			_data[0].amount = numberFormatter('dollars suffix', _data[0].amount);
			_data[1].amount = numberFormatter('dollars suffix', _data[1].amount);
			_data[2].amount = numberFormatter('dollars suffix', _data[2].amount);

			console.log(_data);



			return <Bar key={key} data={_data} barLabel={g.nodes[0].Function_Description}
				total={numberFormatter('dollars suffix', total)}
				firstBar={key === 0}
				lastBar={key === data.functions.group.length - 1}
			/>;
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
			date={'MMMM YY'}
		/>
	</>;
}