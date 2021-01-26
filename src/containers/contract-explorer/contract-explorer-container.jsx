import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Sunburst from 'src/components/visualizations/sunburst-vega/sunburst-vega';
import BreadCrumbs from 'src/components/breadcrumbs/breadcrumbs';
import Search from 'src/components/chartpanels/search';
import * as d3 from 'd3v3';
import SunburstDetails from './details/sunburst-details';
import styles from './contract-explorer-container.module.scss';
import appendColors from './utils/colors';
import findArcById from './utils/find-by-id';
import findArcByName from './utils/find-by-name';
import filterSunburst from './utils/filter';
/* Import DATA */
import flareData from '../../../static/unstructured-data/contract-explorer/flare.json';
import agencyAbbrv
	from '../../../static/unstructured-data/contract-explorer/Agency_Abbreviations_2020_02_14_v1.csv';
import subagencyNames from '../../../static/unstructured-data/contract-explorer/subagencies_.json';
import subagencyAbbrv
	from '../../../static/unstructured-data/contract-explorer/subagencies_abbrv_.json';

const SunburstVegaContainer = () => {
	const defaultSelection = {
		name: 'flare',
		depth: 0,
	};

	const [arc, setSelectedArc] = useState(defaultSelection);
	const [previousArc, setPreviousArc] = useState(null);
	const [breadcrumbs, setBreadcrumbs] = useState(null);
	const [sunburstDetails, setDetails] = useState({});
	const [sunData, setOriginalData] = useState(flareData);
	const [updatedSunData, setData] = useState(sunData);
	const [pscData, setPscData] = useState([]);
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		d3.csv(
			'/unstructured-data/contract-explorer/PSC_by_Recip_FY18_v2.csv',
			data => {
				setPscData(data);
			}
		);

		const details = getDetails();
		setDetails(details);
		setOriginalData(appendColors(flareData));

		// create arrays of unique agencies, subagencies and recipients with ID for search list
		const agencies = [];
		const subagencies = [];
		const recipients = [];
		const searchList = [];

		sunData.tree.forEach(e => {
			switch (e.type) {
				case 'agency':
					if (agencies.findIndex(a => a.display === e.name) === -1) {
						agencies.push({
							id: `a${e.name}`,
							display: e.name,
						});
					}
					break;

				case 'subagency':
					if (subagencies.findIndex(s => s.display === e.name) === -1) {
						subagencies.push({
							id: `s${e.name}`,
							display: e.name,
						});
					}
					break;

				case 'recipient':
					if (recipients.findIndex(r => r.display === e.name) === -1) {
						recipients.push({
							id: `r${e.name}`,
							display: e.name,
						});
					}
					break;
			}
		});

		setSearchList(agencies.concat(subagencies).concat(recipients));
	}, []);

	const sunburstRef = React.createRef();

	const searchSelect = id => {
		const selectedArc = findArcById(sunData, id);
		const details = getSearchResults(selectedArc);
		updateAfterSearch(selectedArc, details);
	};

	function updateSunburst(selectedArc) {
		const newData =
			selectedArc.id === 1
				? sunData
				: { tree: filterSunburst(sunData, selectedArc) };
		if (sunburstRef && sunburstRef.current) {
			sunburstRef.current.updateData(newData);
		}
		return newData;
	}

	function getTop5(items, type) {
		// get all unique values of the item type
		const unique = [...new Set(items.map(item => item[type]))];
		const summedItems = [];

		for (let i = 0; i < unique.length; i++) {
			const name =
				type === 'parent'
					? sunData.tree.find(node => node.id === unique[i]).name
					: unique[i];
			summedItems.push({
				name,
				type,
				obligation: items
					.filter(node => node[type] === unique[i])
					.reduce((a, b) => a + (b.size || 0), 0),
			});
		}

		return summedItems
			.sort((a, b) => (a.obligation < b.obligation ? 1 : -1))
			.slice(0, 5);
	}

	function createBreadcrumbTrail(selectedArc) {
		if (!selectedArc) {
			return;
		}

		const breadcrumbs = [];
		const agency = sunData.tree.find(node => node.name === selectedArc.agency);
		const trail = [defaultSelection];

		switch (selectedArc.depth) {
			case 0:
				return;
				break;
			case 1:
				breadcrumbs.push(agency);
				break;
			case 2:
				breadcrumbs.push(agency);
				breadcrumbs.push(selectedArc);
				break;
			case 3:
				const subagency = sunData.tree.find(node => node.id === selectedArc.parent);
				breadcrumbs.push(agency);
				breadcrumbs.push(subagency);
				breadcrumbs.push(selectedArc);
				break;
		}

		breadcrumbs.forEach(item => {
			trail.push({
				name: item.depth < 3 ? findAbbrv(item) : item.name,
				fullName: item.name,
				depth: item.depth,
				id: item.id,
				arc: selectedArc,
			});
		});

		return trail;
	}

	function findAbbrv(item) {
		let abbrv = '';
		if (item.depth === 1) {
			// find the agency name in the csv
			const agency = agencyAbbrv.find(node => node.agency === item.name);
			abbrv = agency.abbrv;
		} else if (item.depth === 2) {
			const subagencyIndex = Object.keys(subagencyNames).find(
				key => subagencyNames[key] === item.name
			);
			abbrv = subagencyAbbrv[subagencyIndex];
		}
		return abbrv;
	}

	function selectBreadcrumb(d) {
		// if depth is 0, the item flare will be selected
		const selectedArc = findArcByName(sunData, d);
		updateAll(selectedArc);
	}

	const breadcrumbRef = React.createRef();

	function updateBreadcrumbs(selectedArc) {
		const trail = createBreadcrumbTrail(selectedArc);
		if (breadcrumbRef && breadcrumbRef.current) {
			breadcrumbRef.current.updateBreadcrumbs(selectedArc.colorHex, trail);
		}
		return trail;
	}

	// list the agencies for the selected
	function getSearchResults(selectedArc) {
		const depth = selectedArc && selectedArc.depth ? selectedArc.depth : 0;
		const pretext = 'Total Contracts Related To';

		const details = {
			heading: `${pretext} ${selectedArc.name}`,
			label: null,
			total: null,
			top5: [],
			name: null,
			subheading: null,
			allItems: [],
			type: 'search',
		};

		const allRecipients = sunData.tree.filter(node => node.type === 'recipient');

		// get the top contribution for the selection
		switch (depth) {
			case 0:
				details.total = sunData.tree
					.filter(node => node.hasOwnProperty('size'))
					.reduce((a, b) => a + (b.size || 0), 0);
				break;
			case 1:
				details.label = `${pretext} ${selectedArc.name}`;
				details.total = sunData.tree
					.filter(
						node => node.agency === selectedArc.name && node.hasOwnProperty('size')
					)
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(
					allRecipients.filter(node => node.agency === selectedArc.agency),
					'parent'
				);
				details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';
				// find all instances of the agency
				break;
			case 2:
				const { id } = sunData.tree.find(
					node => node.type === 'subagency' && node.name === selectedArc.name
				);
				details.label = `${pretext} ${selectedArc.name}`;
				details.total = sunData.tree
					.filter(node => node.parent === id && node.hasOwnProperty('size'))
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(
					allRecipients.filter(node => node.parent === id),
					'agency'
				);
				details.name = selectedArc.name;
				details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';
				// find all instances of the agency
				break;
			case 3:
				details.label = `${pretext} ${selectedArc.name}`;
				details.total = sunData.tree
					.filter(
						node =>
							node.type === 'recipient' &&
							node.name === selectedArc.name &&
							node.hasOwnProperty('size')
					)
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(
					allRecipients.filter(node => node.name === selectedArc.name),
					'agency'
				);
				details.subheading = details.top5.length > 1 ? 'Agencies' : 'Agency';
				break;
		}

		return details;
	}

	function getDetails(selectedArc) {
		const depth = selectedArc && selectedArc.depth ? selectedArc.depth : 0;

		const details = {
			label: null,
			total: null,
			top5: [],
			name: null,
			allItems: [],
			contractTotal: null,
			contractBySubagency: null,
			type: 'default',
		};

		const allRecipients = sunData.tree.filter(node => node.type === 'recipient');

		switch (depth) {
			case 0:
				// Nothing is selected
				details.label = 'Agencies';
				details.total = sunData.tree
					.filter(node => node.hasOwnProperty('size'))
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(allRecipients, 'agency');
				details.name = 'Contract Spending In Fiscal Year 2018';
				break;
			case 1:
				// Agency is selected
				details.label = 'Subagencies';
				details.total = sunData.tree
					.filter(
						node => node.agency === selectedArc.name && node.hasOwnProperty('size')
					)
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(
					allRecipients.filter(node => node.agency === selectedArc.agency),
					'parent'
				);
				details.name = selectedArc.name;
				break;
			case 2:
				// Subagency is selected
				details.label = 'Contractors';
				const { id } = sunData.tree.find(
					node => node.type === 'subagency' && node.name === selectedArc.name
				);
				details.total = sunData.tree
					.filter(node => node.parent === id && node.hasOwnProperty('size'))
					.reduce((a, b) => a + (b.size || 0), 0);
				details.top5 = getTop5(
					allRecipients.filter(node => node.parent === id),
					'name'
				);
				details.name = selectedArc.name;
				break;
			case 3:
				// total awards for the contractor and selected agency / subagency
				// total awards for the contractor in total
				// list the PSC
				const subagency = sunData.tree.find(node => node.id === selectedArc.parent);
				details.type = 'recipient';
				details.contractBySubagencyHeading = `Contracts for ${subagency.name}`;
				details.total = sunData.tree
					.filter(
						node =>
							node.type === 'recipient' &&
							node.name === selectedArc.name &&
							node.hasOwnProperty('size')
					)
					.reduce((a, b) => a + (b.size || 0), 0);
				details.contractTotal = sunData.tree
					.filter(
						node =>
							node.type === 'recipient' &&
							node.name === selectedArc.name &&
							node.parent === selectedArc.parent &&
							node.hasOwnProperty('size')
					)
					.reduce((a, b) => a + (b.size || 0), 0);
				details.name = selectedArc.name;
				details.allItems = pscData.filter(
					node =>
						node.subagency === subagency.name && node.recipient === selectedArc.name
				);
				break;
		}

		return details;
	}

	// Upon arc selection, sunburst sends the arc info to the container
	// Use arc to the arc color, selected arc, update breadcrumbs and get details
	function updatePanels(tempArc) {
		if (tempArc !== arc) {
			const item = tempArc || arc;
			const trail = updateBreadcrumbs(item);
			const details = getDetails(item);

			// set state
			setBreadcrumbs(trail);
			setDetails(details);
		}
	}

	function updateAfterSearch(selectedArc, details) {
		const previousArc = arc;
		const newData = updateSunburst(selectedArc);
		const trail = updateBreadcrumbs(selectedArc);

		// set state
		setBreadcrumbs(trail);
		setDetails(details);
		setSelectedArc(selectedArc);
		setPreviousArc(previousArc);
		setData(newData);
	}

	function updateAll(selectedArc) {
		const previousArc = arc;
		const trail = updateBreadcrumbs(selectedArc);
		const details = getDetails(selectedArc);
		const newData = updateSunburst(selectedArc);

		// set state
		setData(newData);
		setBreadcrumbs(trail);
		setDetails(details);
		setSelectedArc(selectedArc);
		setPreviousArc(previousArc);
	}

	return (
		<>
			<Hidden smDown>
				<Grid container spacing={4} className={styles.sectionContainer}>
					<Grid item md={6}>
						<Search
							searchList={searchList}
							listDescription="Search List of Contracts and Agencies"
							showIcon
							onSelect={searchSelect}
						/>
						<div className={styles.sunburstDetails}>
							<SunburstDetails details={sunburstDetails} />
						</div>
					</Grid>
					<Grid item md={6} className="viz-container">
						<BreadCrumbs
							className={`${styles.header} ${styles.breadcrumbsContainer}`}
							items={breadcrumbs}
							onSelect={selectBreadcrumb}
							ref={breadcrumbRef}
						/>
						<Sunburst
							data={updatedSunData}
							updatePanels={updatePanels}
							updateSunburst={updateAll}
							default={defaultSelection}
							altText="Sunburst chart of contracts awards to recipients by agency for Fiscal Year 2017. The Defense Department received the largest contract amount ($329B)."
							ref={sunburstRef}
						/>
						<div className={styles.sunburstMessage}>
							The visualization contains data on primary awards to recipients.
							Sub-awards are not included.
						</div>
						<Downloads
							className={styles.downloadContainer}
							href="/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv"
							date="October 2019"
						/>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Search
					searchList={searchList}
					listDescription="Search List of Contracts and Agencies"
					onSelect={searchSelect}
				/>
				<BreadCrumbs
					className={`${styles.header} ${styles.breadcrumbsContainer}`}
					items={breadcrumbs}
					onSelect={selectBreadcrumb}
					ref={breadcrumbRef}
				/>
				<Sunburst
					data={updatedSunData}
					updatePanels={updatePanels}
					updateSunburst={updateAll}
					default={defaultSelection}
					altText="Sunburst chart of contracts awards to recipients by agency for Fiscal Year 2017. The Defense Department received the largest contract amount ($329B)."
					ref={sunburstRef}
				/>
				<div className={styles.sunburstMessage}>
					The visualization contains data on primary awards to recipients. Sub-awards
					are not included.
				</div>
				<Downloads
					className={styles.downloadContainer}
					href="/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv"
					date="October 2019"
				/>
				<SunburstDetails details={sunburstDetails} />
			</Hidden>
		</>
	);
};

export default SunburstVegaContainer;
