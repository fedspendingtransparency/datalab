import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './categories.module.scss';
import storyHeadingStyles from "src/components/section-elements/story-section-heading/story-section-heading.module.scss";
import * as _ from 'lodash';

import AccordionList from 'src/components/accordion-list/accordion-list';
import CategoriesVizContainer from './sunburst-container/sunburst-container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Downloads from 'src/components/section-elements/downloads/downloads';
import { Grid, Hidden } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SearchPanel from 'src/components/chartpanels/search';
import StoryHeading from 'src/components/section-elements/story-section-heading/story-section-heading';
import SunburstIcon from 'src/images/sunburst_icon.svg';
import TableContainer from "./categories-table-container";
import VizControlPanel from 'src/components/chartpanels/viz-control';

const Categories = () => {
	const [chartView, isChartView] = useState(true);
	const switchView = view => {
		updateTableData(tableData[fundingType]);
		if (view === 'chart') {
			isChartView(true);
		} else {
			isChartView(false);
		}
	}

	const [fundingType, setFundingType] = useState('contracts');
	function onTypeChange(e) {
		setFundingType(e.currentTarget.value);
		updateTableData(tableData[e.currentTarget.value]);
	};

	const titlesByType = {
		contracts: {
			categoryLabel: 'Contract',
			dataType: 'PSC',
			centerText: 'Total FY2018 Contract Funding'
		},
		grants: {
			categoryLabel: 'Grant',
			dataType: 'CFDA',
			centerText: 'Total FY2018 Grant Funding'
		},
		research: {
			categoryLabel: 'Research Grant',
			dataType: 'CFDA',
			centerText: 'Total FY2018 Research Grants Funding'
		}
	}

	const _data = useStaticQuery(graphql`
    query {
      contracts: allInvestmentSectionContractsV2Csv {
        nodes {
          id
          Agency
          Obligation
          Program_Title
          Recipient
          Subagency
          family
        }
      }
      grants: allInvestmentSectionGrantsV2Csv {
        nodes {
          id
          Agency
          Obligation
          Program_Title
          Recipient
          Research
          Subagency
          family
        }
      }
      research: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
        nodes {
          id
          Agency
          Obligation
          Program_Title
          Recipient
          Research
          Subagency
          family
        }
      }
      contractsSearch: allInvestmentSectionContractsV2Csv {
        group(field: Program_Title) {
          nodes {
            id
            family
            Program_Title
          }
        }
      }
      grantsSearch: allInvestmentSectionGrantsV2Csv {
        group(field: Program_Title) {
          nodes {
            id
            family
            Program_Title
          }
        }
      }
      researchSearch: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
        group(field: Program_Title) {
          nodes {
            id
            family
            Program_Title
          }
        }
      }
    }
  `);

	const searchSort = (a, b) => a.filterText > b.filterText;

	// each group includes all recipients, which we don't care about, so we only want the first of each group
	const searchList = {
		contracts: _data.contractsSearch.group
			.map(n => ({
				id: n.nodes[0].id,
				display: <><span className={styles.searchListFamily}>{n.nodes[0].family}</span><p className={styles.searchListProgram}>{n.nodes[0].Program_Title}</p></>,
				filterText: n.nodes[0].family + n.nodes[0].Program_Title,
				heading: n.nodes[0].family,
				subheading: n.nodes[0].Program_Title
			}))
			.sort(searchSort),
		grants: _data.grantsSearch.group
			.map(n => ({
				id: n.nodes[0].id,
				display: <><span className={styles.searchListFamily}>{n.nodes[0].family}</span><p className={styles.searchListProgram}>{n.nodes[0].Program_Title}</p></>,
				filterText: n.nodes[0].family + n.nodes[0].Program_Title,
				heading: n.nodes[0].family,
				subheading: n.nodes[0].Program_Title
			}))
			.sort(searchSort),
		research: _data.researchSearch.group
			.map(n => ({
				id: n.nodes[0].id,
				display: <><span className={styles.searchListFamily}>{n.nodes[0].family}</span><p className={styles.searchListProgram}>{n.nodes[0].Program_Title}</p></>,
				filterText: n.nodes[0].family + n.nodes[0].Program_Title,
				heading: n.nodes[0].family,
				subheading: n.nodes[0].Program_Title
			}))
			.sort(searchSort)
	};

	const tableColumnTitles = [{ title: 'Family' }, { title: 'Program Title' }, { title: 'Agency' }, { title: 'Subagency' }, { title: 'Recipient' }, { title: 'Obligation' }];
	const tableData = {
		contracts: _data.contracts.nodes
			.map(n => [n.family, n.Program_Title, n.Agency, n.Subagency, n.Recipient, parseInt(n.Obligation)]),
		grants: _data.grants.nodes
			.map(n => [n.family, n.Program_Title, n.Agency, n.Subagency, n.Recipient, parseInt(n.Obligation)]),
		research: _data.research.nodes
			.map(n => [n.family, n.Program_Title, n.Agency, n.Subagency, n.Recipient, parseInt(n.Obligation)])
	};

	const [filteredTableData, setFilteredData] = useState(tableData[fundingType]);

	function filterTableData(id) {
		let data = [];
		let itemList;

		const searchListByType = searchList[fundingType];
		itemList = searchListByType.find(el => el.id === id);

		const obj = _.filter(tableData[fundingType], { 0: itemList.heading, 1: itemList.subheading });
		if (obj && obj.length > 0) {
			data.push(obj);
		}
		data = _.flatten(data);
		updateTableData(data);
	}

	const tableRef = React.createRef();
	function updateTableData(data) {
		setFilteredData(data);
		if (tableRef && tableRef.current) { tableRef.current.updateTableData(data); }
	}

	const chartRef = React.createRef();
	const searchItemSelected = id => {
		filterTableData(id);
		if (chartRef && chartRef.current) {
			chartRef.current.clickById(id);
		}
	}

	const [grantsInfoShowing, showGrantsInfo] = useState(false);

	const grantsInfo = () => <>
		<IconButton className={styles.infoButton}
			aria-label='details about research grants'
			onClick={() => showGrantsInfo(true)}
		>
			<InfoOutlinedIcon className={styles.icon} />
		</IconButton>
		<Card className={styles.researchInfo} style={{ display: grantsInfoShowing ? 'block' : 'none' }}>
			<IconButton className={styles.closeButton} onClick={() => showGrantsInfo(false)}>
				<HighlightOffIcon />
			</IconButton>
			<CardContent className={styles.text}>
				In this visualization, we identified and set apart grants used for research projects. This subset of grants were awarded to individuals, groups, or institutions.
		</CardContent>
		</Card>
	</>;

	return (<>
		<StoryHeading
			number={'04'}
			title={'Investment Categories'}
			teaser={['How was the ', <span key='04-teaser-callout' className={storyHeadingStyles.headingRed}>money</span>, ' used?']}
			blurb={`Now that we know how much money was invested in higher education, are you curious to know how the money was used? This visualization allows you to discover the various categories the government uses to classify funding. Note: Product and Service Codes (PSCs) are used to categorize contract purchases of products and services and Federal Assistance Listings are used to categorize grant funding.`}
		/>

		<Hidden lgUp>
			<SearchPanel
				searchList={searchList[fundingType]}
				listDescription='Search Categories'
				showIcon
				onSelect={searchItemSelected}
			/>
		</Hidden>

		<AccordionList title='Instructions'>
			<ul>
				<li>Select an investment type: contracts, grants, or research grants</li>
				<li>Hover over each section to determine the category</li>
				<li>Click on a specific section to display the total awards for that category</li>
				<li>Click the center section to return to the original display</li>
			</ul>
		</AccordionList>

		<Grid container className={styles.catContainer}>
			<Grid item>
				<Hidden mdDown>
					<VizControlPanel
						searchList={searchList[fundingType]}
						listDescription='Search Categories'
						onSelect={searchItemSelected}
						switchView={switchView}
					>
						<img src={SunburstIcon} />
					</VizControlPanel>
				</Hidden>
			</Grid>
			<Grid item className={styles.catContainer}>

				<div id='sunburstRadio'>
					<Grid container>
						<Grid item lg={2} xs={4}>
							<input type='radio'
								id='cuContracts'
								name='fundingType'
								value='contracts'
								onChange={onTypeChange}
								checked={fundingType === 'contracts'}
							/>
							<label htmlFor='cuContracts'>&nbsp;Contracts</label>
						</Grid>
						<Grid item lg={2} xs={4}>
							<input type='radio'
								id='cuGrants'
								name='fundingType'
								value='grants'
								onChange={onTypeChange}
								checked={fundingType === 'grants'}
							/>
							<label htmlFor='cuGrants'>&nbsp;Grants</label>
						</Grid>
						<Grid item lg={2} xs={4}>
							<input type='radio'
								id='cuResearch'
								name='fundingType'
								value='research'
								onChange={onTypeChange}
								checked={fundingType === 'research'}
							/>
							<label htmlFor='cuResearch'>&nbsp;Research Grants</label>

							{grantsInfo()}

						</Grid>
					</Grid>
				</div>

				<CategoriesVizContainer
					display={chartView}
					items={_data[fundingType].nodes}
					title={titlesByType[fundingType]}
					chartRef={chartRef}
				/>
				<TableContainer
					fundingType={fundingType}
					display={!chartView}
					title={titlesByType[fundingType].categoryLabel + 's'}
					columnTitles={tableColumnTitles}
					data={filteredTableData}
					tableRef={tableRef}
				/>
				<p className='cu-header__blurb'>To return to a higher level click the center node</p>
			</Grid>
		</Grid>

		<Downloads
			href={
				fundingType === 'contracts' ?
					'/data/colleges-and-universities/categories/investmentSectionContracts_v2.csv'
					:
					'/data/colleges-and-universities/categories/investmentSectionGrants_v2.csv'
			}
			date={'October 2019'}
		/>
	</>)
}

export default Categories;
