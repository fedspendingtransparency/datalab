import React, { useState } from 'react';
import Sankey from 'src/components/visualizations/sankey/sankey';
import { graphql, useStaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Downloads from '../../components/section-elements/downloads/downloads';

function BudgetFunctionContainer() {
	const data = useStaticQuery(graphql`
		query {
			allSankeyV1Fy19Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyPanelV1Fy19Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyTitlesV1Fy19Csv {
				nodes {
					name
					value
				}
			}
			allSankeyV1Fy18Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyPanelV1Fy18Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyTitlesV1Fy18Csv {
				nodes {
					name
					value
				}
			}
			allSankeyFy17Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyPanelFy17Csv {
				nodes {
					source
					target
					value
				}
			}
			allSankeyTitlesFy17Csv {
				nodes {
					name
					value
				}
			}
			allDescriptionsCsv {
				nodes {
					name
					desc
				}
			}
		}
	`);

	const [year, setFiscalYear] = useState('fy19');
	const [dataLoc, setDataLoc] = useState(
		'/data/budget-function/sankey/2019/sankey_v1_FY19.csv'
	);

	function onFiscalYearChange(e) {
		const year = e.currentTarget.value;
		setFiscalYear(year);
		setDataLocFunc(year);
	}

	// reset to default val of fy19.
	function resetYear() {
		setFiscalYear('fy19');
		setDataLocFunc('fy19');
	}

	function setDataLocFunc(year) {
		let fiscalStr = '';
		switch (year) {
			case 'fy19':
				fiscalStr = '/data/budget-function/sankey/2019/sankey_v1_FY19.csv';
				break;
			case 'fy18':
				fiscalStr = '/data/budget-function/sankey/2018/sankey_v1_FY18.csv';
				break;
			case 'fy17':
				fiscalStr = '/data/budget-function/sankey/2017/sankey_FY17.csv';
				break;
			default:
				fiscalStr = '/data/budget-function/sankey/2019/sankey_v1_FY19.csv';
				break;
		}
		setDataLoc(fiscalStr);
	}

	const fiscalYearData = {
		fy19: {
			data: data.allSankeyV1Fy19Csv.nodes,
			sPanel: data.allSankeyPanelV1Fy19Csv.nodes,
			sTitle: data.allSankeyTitlesV1Fy19Csv.nodes,
			descriptions: data.allDescriptionsCsv.nodes,
		},
		fy18: {
			data: data.allSankeyV1Fy18Csv.nodes,
			sPanel: data.allSankeyPanelV1Fy18Csv.nodes,
			sTitle: data.allSankeyTitlesV1Fy18Csv.nodes,
			descriptions: data.allDescriptionsCsv.nodes,
		},
		fy17: {
			data: data.allSankeyFy17Csv.nodes,
			sPanel: data.allSankeyPanelFy17Csv.nodes,
			sTitle: data.allSankeyTitlesFy17Csv.nodes,
			descriptions: data.allDescriptionsCsv.nodes,
		},
	};

	const altText =
		'Flow chart of Budget Function in relation to Object Class for Fiscal Years 2017 to 2019. The largest Budget Function was Social Security spending.';

	return (
		<>
			<Grid container className="viz-actions">
				<Grid item xs={2} md={1}>
					<input
						type="radio"
						id="contactChoice3"
						name="FiscalYear"
						value="fy17"
						onChange={onFiscalYearChange}
						checked={year === 'fy17'}
					/>
					<label htmlFor="contactChoice3">&nbsp;FY 17</label>
				</Grid>
				<Grid item xs={2} md={1}>
					<input
						type="radio"
						id="contactChoice2"
						name="FiscalYear"
						value="fy18"
						onChange={onFiscalYearChange}
						checked={year === 'fy18'}
					/>
					<label htmlFor="contactChoice2">&nbsp;FY 18</label>
				</Grid>
				<Grid item xs={2} md={1}>
					<input
						type="radio"
						id="contactChoice1"
						name="FiscalYear"
						value="fy19"
						onChange={onFiscalYearChange}
						checked={year === 'fy19'}
					/>
					<label htmlFor="contactChoice1">&nbsp;FY 19</label>
				</Grid>
			</Grid>
			<br />
			<Sankey
				data={fiscalYearData[year].data}
				sPanel={fiscalYearData[year].sPanel}
				sTitle={fiscalYearData[year].sTitle}
				descriptions={fiscalYearData[year].descriptions}
				resetYear={() => resetYear()}
				altText={altText}
			/>
			<Downloads href={dataLoc} date="January 2019" />
		</>
	);
}

export default BudgetFunctionContainer;
