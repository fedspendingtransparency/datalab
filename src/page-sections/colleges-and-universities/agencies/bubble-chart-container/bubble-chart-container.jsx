import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import { Hidden } from '@material-ui/core';
import * as d3 from 'd3v3';
import BubbleChart from 'src/components/visualizations/bubble-chart/bubble-chart.jsx';
import VizDetails from 'src/components/chartpanels/viz-detail';
import agenciesStyles from './bubble-chart-container.module.scss';


const AgenciesBubbleContainer = (props) => {
	const _data = useStaticQuery(graphql`
    query {
      allAgenciesRhpSummaryV2Csv {
        nodes {
          subagency
          type
          obligation
        }
      }
      allTop5InvestmentsPerAgencyV2Csv {
        nodes {
          source
          target
          value
        }
      }
      allTop5InstitutionsPerAgencyV2Csv {
        nodes {
          source
          target
          value
        }
      }
    }
  `);

	function setLegendLeft(leftState) {
		d3.select('#agencies-legend-colorkey').classed('left', leftState);
	}


	const detailPanelRef = React.createRef();
	let currentDetails = {};
	const getClickedDetails = (d) => {
		if (!d) {
			detailPanelRef.current && detailPanelRef.current.closeDetails();
		} else {
			const summary = _data.allAgenciesRhpSummaryV2Csv.nodes.filter((i) => i.subagency === d.name);
			const summaryObligations = {};
			if (summary[0].type === 'grant') {
				parseInt(summaryObligations.grant = summary[0].obligation);
				parseInt(summaryObligations.contract = summary[1].obligation);
			} else {
				parseInt(summaryObligations.grant = summary[1].obligation);
				parseInt(summaryObligations.contract = summary[0].obligation);
			}

			const invTop5 = {};
			_data.allTop5InvestmentsPerAgencyV2Csv.nodes
				.filter((i) => i.source === d.name)
				.forEach((j) => {
					invTop5[j.target] = j.value;
				})
			;

			const instTop5 = {};
			_data.allTop5InvestmentsPerAgencyV2Csv.nodes
				.filter((i) => i.source === d.name)
				.forEach((j) => {
					instTop5[j.target] = j.value;
				})
			;

			currentDetails = {
				header: {
					title: 'Agency',
					itemName: d.parent.name,
					label: 'Sub-Agency',
					subItemName: d.name,
					totalLabel: 'Total $ of Awards',
					totalValue: d.size,
				},
				tables: [
					{
						col1Title: 'Funding Instrument Type',
						col2Title: null,
						rows: {
							Grants: summaryObligations.grant,
							Contracts: summaryObligations.contract,
						},
					},
					{
						col1Title: `Investment Categories${Object.keys(invTop5).length > 5 ? ' (Top 5)' : ''}`,
						col2Title: 'Total Investment',
						rows: invTop5,
					},
					{
						col1Title: `Institutions${Object.keys(instTop5).length > 5 ? ' (Top 5)' : ''}`,
						col2Title: 'Total Investment',
						rows: instTop5,
					},
				],
			};
			detailPanelRef.current.updateDetails(currentDetails);
		}
	};

	if (props.display) {
		return (
			<>
				<Grid container>
					<Grid item xs={1}>
						<Hidden smDown>
							<div id="agencies-legend-colorkey">
								<div className={agenciesStyles.legendCirclekeyLabel}><span>Agency</span></div>
								<div className={agenciesStyles.legendCirclekeyLabel}><span>Sub-Agency</span></div>
								<svg id={agenciesStyles.legendScalekey}>
									<circle r="25" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65" />
									<circle r="35" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65" />
									<circle r="45" className={agenciesStyles.legendScalekeyCircle} cx="60" cy="65" />
								</svg>
							</div>
						</Hidden>
					</Grid>
					<Grid item>
						<Grid container justify="center">
							<Grid item xs={10}>
								<BubbleChart
									items={props.data}
									showDetails={getClickedDetails}
									setLegendLeft={setLegendLeft}
									altText="Bubble chart displaying FY2018 grants and contracts data by agency. HHS invested $44B in FY 18, the most of any agency."
									ref={props.chartRef}
								/>
							</Grid>
							<Grid item>
								<VizDetails
  showDetails={getClickedDetails}
  details={currentDetails}
  ref={detailPanelRef}
								/>
							</Grid>
						</Grid>
					</Grid>

				</Grid>
			</>
		);
	}
	return null;
};

export default AgenciesBubbleContainer;