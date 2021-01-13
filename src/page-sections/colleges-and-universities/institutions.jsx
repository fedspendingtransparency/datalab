import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../styles/index.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import styles from './cu.module.scss';
import refreshLogo from '../../images/colleges-and-universities/refresh.svg';
import AccordionList from '../../components/accordion-list/accordion-list';
import { Hidden } from '@material-ui/core';
import SearchPanel from 'src/components/chartpanels/search';
import ControlBar from '../../components/control-bar/control-bar';
import Table from '../../components/table/table';
import Downloads from '../../components/section-elements/downloads/downloads';
import GeolocationIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';
import Share from '../../components/share/share';
import StoryHeading from 'src/components/section-elements/story-section-heading/story-section-heading';
import VizControlPanel from '../../components/chartpanels/viz-control';
import VizDetails from '../../components/chartpanels/viz-detail';
import Reset from '../../components/reset/reset';

import dataTableData from '../../../static/unstructured-data/mapbox/tableData.csv';
import GeoDataMapbox from '../../../static/unstructured-data/mapbox/mapData.json';

import loadable from '@loadable/component';
const Mapbox = loadable(() =>
	import('../../components/visualizations/mapbox/mapbox')
);

export default function Institutions(props) {
	// check required data properties/format to fail 'gracefully'
	if (
		!GeoDataMapbox.features ||
		!Array.isArray(GeoDataMapbox.features) ||
		!GeoDataMapbox.features[0].id ||
		!GeoDataMapbox.features[0].properties ||
		!GeoDataMapbox.features[0].properties.Recipient
	) {
		return <div>Cannot display this information; error in data file format.</div>;
	}

	if (!GeoDataMapbox.features[0].properties.schoolId) {
		GeoDataMapbox.features.forEach(d => {
			d.properties.schoolId = d.id; // add school ID to properties until source file includes it
		});
	}

	const [clickedSchool, setSchool] = useState(null);
	let searchList = GeoDataMapbox.features
		.map(school => ({
			id: school.id,
			display: school.properties.Recipient,
		}))
		.sort((a, b) => a.display > b.display);

	function filterByClicked(clickedId) {
		let filteredList = GeoDataMapbox.features.filter(x => x.id == clickedId);
		if (!chartView) {
			filterTableData(clickedId);
		}
		setSchool(filteredList);
		return filteredList;
	}

	const initializeTable = dataTableData => {
		return dataTableData.map(x => {
			return {
				Recipient: x.Recipient,
				Inst_Type: x.INST_TYPE_1 + ' / ' + x.INST_TYPE_2,
				contracts: parseInt(x.contracts),
				grants: parseInt(x.grants),
				student_aid: parseInt(x.student_aid),
				Total_Federal_Investment: parseInt(x.Total_Federal_Investment),
			};
		});
	};

	const [filteredTableData, setFilteredData] = useState(null);

	useEffect(() => {
		setFilteredData(initializeTable(dataTableData));
	}, []);

	const tableColumnTitles = [
		{
			title: 'Recipient',
			displayName: 'Institution',
		},
		{
			title: 'Inst_Type',
			displayName: 'Type',
		},
		{
			title: 'contracts',
			displayName: 'Contracts',
		},
		{
			title: 'grants',
			displayName: 'Grants',
		},
		{
			title: 'student_aid',
			displayName: 'Student Aid',
		},
		{
			title: 'Total_Federal_Investment',
			displayName: 'Total $ Received',
		},
	];

	const [chartView, isChartView] = useState(true);

	const switchView = view => {
		if (view === 'chart') {
			isChartView(true);
		} else {
			setFilteredData(initializeTable(dataTableData));
			isChartView(false);
			detailPanelRef.current && detailPanelRef.current.closeDetails(); // hide details if open
		}
	};

	const panelDetails = useStaticQuery(graphql`
		query {
			investments: allTop5InvestmentsPerSchoolV3Csv {
				nodes {
					source
					target
					value
				}
			}
			agencies: allTop5AgenciesPerSchoolV3Csv {
				nodes {
					source
					target
					value
				}
			}
		}
	`);

	let schoolDetails = {};
	const getClickedDetails = id => {
		const schoolProperties = GeoDataMapbox.features.find(s => s.id === id)
			.properties;
		const institutionName = schoolProperties.Recipient;
		const studentAid = dataTableData.find(s => s.Recipient === institutionName)
			.student_aid;

		const invTop5 = {};
		panelDetails.investments.nodes
			.filter(node => node.source === institutionName)
			.forEach(row => {
				invTop5[row.target] = row.value;
			});
		const agencyTop5 = {};
		panelDetails.agencies.nodes
			.filter(node => node.source === institutionName)
			.forEach(row => {
				agencyTop5[row.target] = row.value;
			});

		schoolDetails = {
			header: {
				title: 'Institution',
				itemName: institutionName,
				label: schoolProperties.INST_TYPE_1 + schoolProperties.INST_TYPE_2,
				subItemName: null,
				totalLabel: 'Total $ Received',
				totalValue: schoolProperties.Total_Federal_Investment,
			},
			tables: [
				{
					col1Title: 'Funding Instrument Type',
					rows: {
						Contracts: schoolProperties.contracts_received,
						Grants: schoolProperties.grants_received,
						'   Grants (Research)': schoolProperties.research_grants_received,
						'Student Aid ': studentAid,
					},
				},
				{
					col1Title: (
						<>
							Investment Categories <div className={styles.top5Div}>(Top 5)</div>
						</>
					),
					col2Title: 'Total Investment',
					rows: invTop5,
				},
				{
					col1Title: (
						<>
							Funding Agencies <div className={styles.top5Div}>(Top 5)</div>
						</>
					),
					col2Title: 'Total Investment',
					rows: agencyTop5,
				},
			],
		};
		detailPanelRef.current && detailPanelRef.current.updateDetails(schoolDetails);
	};

	const detailPanelRef = React.createRef();

	function filterTableData(id) {
		let data = [];
		const itemList = searchList.find(x => x.id == id);
		const obj = _.filter(dataTableData, { Recipient: itemList.display });

		if (obj && obj.length > 0) {
			data.push(obj);
		}

		data = _.flatten(data);

		setFilteredData(data);
	}

	function vizView() {
		if (chartView) {
			return (
				<>
					<Grid item xs={10}>
						<Mapbox
							display={chartView}
							data={GeoDataMapbox}
							showDetails={getClickedDetails}
							clickedSchool={clickedSchool}
							altText={
								'U.S. map that displays FY2018 investment by regional cluster and institution. Institutional level data includes contracts, grants, and student aid.'
							}
						/>
					</Grid>
					<Grid item xs={1}>
						<VizDetails
							showDetails={getClickedDetails}
							details={schoolDetails}
							ref={detailPanelRef}
						/>
					</Grid>
				</>
			);
		} else {
			return (
				<Table
					data={filteredTableData}
					columns={tableColumnTitles}
					idName={'institutionsTable'}
					defaultField={'Recipient'}
					defaultDirection={'desc'}
				/>
			);
		}
	}

	return (
		<>
			<StoryHeading
				number={'02'}
				title={'My Alma Mater'}
				teaser={[
					'Find how much your Alma Mater ',
					<span key="02-teaser-callout" className={storyHeadingStyles.headingRed}>
						received in federal funds.
					</span>,
				]}
				blurb={`The federal government may have invested in your college or university, whether it is public, private, four year, or two year. Use the map below to uncover the amount and type of investment for individual schools. Click on a regional cluster to expand the area and see the schools in that area. `}
			/>

			<Hidden lgUp>
				<SearchPanel
					searchList={searchList}
					listDescription="Search Institutions"
					showIcon
					showCollapse
					onSelect={filterByClicked}
				/>
			</Hidden>

			<AccordionList title="Instructions">
				<p>Click the map to get started</p>
				<p>
					The number displayed on each cluster is the number of institutions in that
					area
				</p>
				<p>
					Click on a regional cluster to expand the area and display details for each
					school
				</p>
				<p>Use the zoom in and zoom out keys to adjust the map view</p>
				<p>
					For a specific search, use the search tool to type in the school by name
				</p>
			</AccordionList>

			<ControlBar>
				<div className={styles.refreshBtn} id="refresh-btn">
					<Reset />
				</div>
				<Share
					location={props.location}
					title="Check out this analysis on Data Lab"
					text="Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!"
					twitter="Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending"
				/>
			</ControlBar>

			<Grid container>
				<Grid item xs={1}>
					<Hidden mdDown>
						<VizControlPanel
							searchList={searchList}
							listDescription="Search Institutions"
							onSelect={filterByClicked}
							switchView={switchView}
							listId="search-institutions">
							<GeolocationIcon />
						</VizControlPanel>
					</Hidden>
				</Grid>
				{vizView()}
			</Grid>

			<Downloads
				href={'/unstructured-data/mapbox/tableData.csv'}
				date={'October 2019'}
			/>
		</>
	);
}
