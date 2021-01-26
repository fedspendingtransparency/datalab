import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import VizDetails from 'src/components/chartpanels/viz-detail';

import Sunburst from 'src/components/visualizations/sunburst/sunburst';

import categoriesStyles from './sunburst-container.module.scss';

const CategoriesVizContainer = props => {
	const _data = useStaticQuery(graphql`
		query {
			top5Agencies: allTop5AgenciesPerInvestmentTypeV2Csv {
				nodes {
					source
					target
					value
				}
			}
			top5InvestmentTypes: allTop5InstitutionsPerInvestmentTypeV2Csv {
				nodes {
					source
					target
					value
				}
			}
		}
	`);

	const levels = ['family', 'Program_Title'];
	const leaf = { name: 'Recipient', size: 'Obligation' };
	const wedgeColors = ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40'];
	const centerColor = 'rgba(0, 0, 0, 0)';

	const detailPanelRef = React.createRef();
	let currentDetails = {};
	const getClickedDetails = d => {
		if (!d) {
			detailPanelRef.current && detailPanelRef.current.closeDetails();
		} else {
			const agenciesTop5 = {};
			_data.top5Agencies.nodes
				.filter(i => i.source === d.name)
				.forEach(j => {
					agenciesTop5[j.target] = j.value;
				});

			const invTop5 = {};
			_data.top5InvestmentTypes.nodes
				.filter(i => i.source === d.name)
				.forEach(j => {
					invTop5[j.target] = j.value;
				});

			currentDetails = {
				header: {
					title: 'Category',
					itemName: d.parent.name,
					label: 'Sub-Category',
					subItemName: d.name,
					totalLabel: 'Total $ of Funding',
					totalValue: d.value,
				},
				tables: [
					{
						col1Title: `Funding Agencies${
							Object.keys(agenciesTop5).length > 4 ? ' (Top 5)' : ''
						}`,
						col2Title: 'Total Investment',
						rows: agenciesTop5,
					},
					{
						col1Title: `Institution${
							Object.keys(invTop5).length > 4 ? ' (Top 5)' : ''
						}`,
						col2Title: 'Total Investment',
						rows: invTop5,
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
							<div id={categoriesStyles.legendColorkey}>
								<div className={categoriesStyles.legendCirclekeyLabel}>
									<span>Program Title</span>
								</div>
								<div className={categoriesStyles.legendCirclekeyLabel}>
									<span>Grant Family</span>
								</div>
								<div className={categoriesStyles.legendCirclekeyLabel}>
									<span>2018 Federal Grants</span>
								</div>
								<svg id={categoriesStyles.legendScalekey}>
									<circle
										r="25"
										className={categoriesStyles.legendScalekeyCircle}
										cx="60"
										cy="65"
									/>
									<circle
										r="35"
										className={categoriesStyles.legendScalekeyCircle}
										cx="60"
										cy="65"
									/>
									<circle
										r="45"
										className={categoriesStyles.legendScalekeyCircle}
										cx="60"
										cy="65"
									/>
								</svg>
							</div>
						</Hidden>
					</Grid>
					<Grid item xs={10}>
						<Sunburst
							items={props.items}
							title={props.title}
							levels={levels}
							leaf={leaf}
							wedgeColors={wedgeColors}
							centerColor={centerColor}
							showDetails={getClickedDetails}
							ref={props.chartRef}
							altText="Sunburst chart that displays how federal funds were used by institutions for contracts ($10B), grants ($41B), and research grants ($29B)."
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
			</>
		);
	}
	return null;
};

export default CategoriesVizContainer;
