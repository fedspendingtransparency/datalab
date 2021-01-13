import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Mapviz from '../../components/visualizations/homelessness-analysis/mapviz/mapviz';
import filter from 'lodash/filter';
import flatten from 'lodash/flatten';

import dataSource from '../../components/visualizations/homelessness-analysis/utils/data-module';
import Table from 'src/components/table/table';
import styles from '../../components/visualizations/homelessness-analysis/mapviz/mapviz.module.scss';
import mapImg from '../../components/visualizations/homelessness-analysis/mapviz/map.svg';
import tableImg from '../../components/visualizations/homelessness-analysis/mapviz/table.svg';
import ControlBar from '../../components/control-bar/control-bar';
import Reset from '../../components/reset/reset';
import Share from '../../components/share/share';
import SearchIcon from '@material-ui/icons/Search';
import Downloads from '../../components/section-elements/downloads/downloads';
import AccordionList from '../../components/accordion-list/accordion-list';

export default function Geography(props) {
	const [chartView, isChartView] = useState(true);
	const [clicked, setClicked] = useState(false);
	const { mem } = dataSource;
	const populationData = mem.pop;
	const tableData = populationData;

	const switchView = view => {
		setFilteredData(tableData);
		if (view === 'chart') {
			isChartView(true);
		} else {
			isChartView(false);
		}
	};

	const searchList = populationData.map(n => {
		return {
			coc: n.coc_number,
			name: n.coc_name,
		};
	});

	const chartRef = React.createRef();

	const searchItemSelected = id => {
		filterTableData(id);
		if (chartRef && chartRef.current) {
			chartRef.current.clickById(id);
		}
	};

	const tableColumnTitles = [
		{
			title: 'coc_number',
			displayName: 'CoC Number',
			width: 112.5,
			type: 'number',
		},
		{
			title: 'coc_name',
			displayName: 'CoC Name',
			width: 250,
			type: 'number',
		},
		{
			title: 'total_homeless',
			displayName: 'Total Homeless',
			width: 100,
			type: 'number',
		},
		{
			title: 'sheltered_homeless',
			displayName: 'Sheltered Homeless',
			width: 100,
			type: 'number',
		},
		{
			title: 'unsheltered_homeless',
			displayName: 'Unsheltered Homeless',
			width: 100,
			type: 'number',
		},
		{
			title: 'chronically_homeless',
			displayName: 'Chronically Homeless',
			width: 100,
			type: 'number',
		},
		{
			title: 'homeless_veterans',
			displayName: 'Homeless Veterans',
			width: 100,
			type: 'number',
		},
		{
			title: 'homeless_individuals',
			displayName: 'Homeless Individuals',
			width: 100,
			type: 'number',
		},
		{
			title: 'homeless_people_in_families',
			displayName: 'Homeless People in Families',
			width: 137.5,
			type: 'number',
		},
		{
			title: 'total_homeless_unaccompanied_youth_under_25',
			displayName: 'Homeless Unaccompanied Youth (Under 25)',
			width: 150,
			type: 'number',
		},
	];

	const [filteredTableData, setFilteredData] = useState(tableData);

	function filterTableData(id) {
		let data = [];
		let itemList;

		itemList = searchList.find(function(el) {
			return el.id === id;
		});

		let obj = filter(tableData, {
			coc_number: itemList.heading,
			coc_name: itemList.subheading,
		});
		if (obj && obj.length > 0) {
			data.push(obj);
		}

		data = flatten(data);

		setFilteredData(data);
	}

	function searchData(e) {
		const strCap = e.currentTarget.value.toUpperCase();
		let newData;
		if (strCap) {
			newData = tableData.filter(d => {
				const cocName = d['coc_name'].toUpperCase();
				const cocNum = d['coc_number'].toUpperCase();
				return cocName.indexOf(strCap) >= 0 || cocNum.indexOf(strCap) >= 0;
			});
		} else {
			newData = tableData;
		}

		setFilteredData(newData);
	}

	function searchBoxFocus() {
		document.getElementById('homeless-region-search').focus();
	}

	function reset() {
		switchView('chart');

		const searchBox = document.getElementById('homeless-region-search');
		if (searchBox) {
			searchBox.value = '';
		}

		setClicked(true);
	}

	function vizView() {
		if (chartView) {
			return <Mapviz display={chartView} data={dataSource} isClicked={clicked} />;
		} else {
			return (
				<Table
					columns={tableColumnTitles}
					data={filteredTableData}
					defaultField={'coc_number'}
					defaultDirection={'desc'}
				/>
			);
		}
	}

	return (
		<>
			<div className="homelessness-subheading">Homeless Population by Region</div>
			<div className="homelessness-subheading2">
				HUD Point-in-time Count by Continuum of Care Area
			</div>

			<AccordionList title="Instructions">
				<ul>
					<li>Double click on the map to zoom into a region.</li>
					<li>
						Hover over the region to see a pop-up box with the total number of
						homeless for that CoC.
					</li>
					<li>
						Double click that same region to zoom out, or click the Reset button.
					</li>
					<li>
						While zoomed in, double clicking a different region will re-center the map
						on that region.
					</li>
					<li>
						To view this data in table format, click the table icon in the upper-left
						hand corner of the visualization.
					</li>
					<li>
						To return to map view, click on the map icon in the upper-left hand corner
						of the visualization.
					</li>
				</ul>
			</AccordionList>

			<div className="viz-actions">
				<ControlBar>
					<Reset _resetClick={reset} onClick={reset} />
					<Share location={props.location} />
				</ControlBar>
				<Hidden xsDown>
					<div className="homeless-map-options">
						<span className="homeless-style">View</span>
						<img
							id={styles.homelessActionMap}
							src={mapImg}
							onClick={function() {
								switchView('chart');
							}}
						/>
						<img
							id={styles.homelessActionTable}
							src={tableImg}
							onClick={function() {
								switchView('table');
							}}
						/>
						<input
							type="text"
							id="homeless-region-search"
							className={`homeless-region-search ${chartView ? 'invisible' : ''}`}
							onInput={searchData}
							placeholder="Search by CoC Name"
						/>
						<SearchIcon
							className={`homeless-region-search-icon ${chartView ? 'hidden' : ''}`}
							onClick={searchBoxFocus}
						/>
					</div>
				</Hidden>
			</div>
			<div id={styles.chartArea}>{vizView()}</div>
			<Downloads
				href={
					'/unstructured-data/homelessness-analysis/panel_2_table_and_counts_v7_2020_03_27.csv'
				}
				date={'November 2019'}
			/>
		</>
	);
}
