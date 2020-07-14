import React, { useEffect, useState } from 'react';
import * as d3 from 'd3v4';
import Tooltip from '../util/tooltip';
import mapStyles from './mapviz.module.scss';
import Multiselector from '../../../multiselector/multiselector';
import barChartStyles from '../bar-chart/bar-chart.module.scss';
import ControlBar from '../../../control-bar/control-bar';
import Reset from '../../../reset/reset';
import Share from '../../../share/share';

/* Extracted and adapted from fedscope.js an trreemap-module.js */

export default function Mapviz(props) {
	const MapvizModule = {
		draw: (data, { states }) => {
			const svg = d3.select('#mapSvg');
			svg.selectAll('*').remove();

			svg.attr('aria-labelledby', 'map-desc')
				.append('desc')
				.attr('id', 'map-desc')
				.text('U.S. map showing the distribution of CFO Act Agency employees by agency and occupation. California, D.C., and Virginia had the most.');

			const filteredData = [...data];

			const initialStateData = Object.keys(states).reduce((a, c) => {
				a[c] = 0;
				return a;
			}, {});

			const dataByState = filteredData.reduce((a, c) => {
				a[c.stateAbbreviation] += c.employeeCount;
				return a;
			}, initialStateData);

			const max = d3.max(Object.values(dataByState), (d) => d);
			const min = d3.min(Object.values(dataByState), (d) => d);

			const formatNumber = d3.format(',d');

			const colors = ['#f2f1f8', '#3f3c7d'];

			const color = d3
				.scaleLinear()
				.domain([min, max])
				.range(colors)
				.interpolate(d3.interpolateRgb);

			function handleMouseOver(d) {
				Tooltip.draw('#tooltip', d.name, {
					Employees: formatNumber(dataByState[d.abbreviation]),
				});
				d3.select(this).style('fill', '#D334BA');
			}

			function handleMouseOut() {
				Tooltip.remove('#tooltip');
				d3.select(this).style('fill', (d) => color(dataByState[d.abbreviation]));
			}

			function handleMouseMove() {
				Tooltip.move('#tooltip');
			}

			const mapGroup = svg
				.append('g')
				.attr('transform', 'scale(1.3)');

			mapGroup
				.selectAll(`.${mapStyles.state}`)
				.data(Object.values(states))
				.enter()
				.append('path')
				.attr('class', mapStyles.state)
				.attr('d', (d) => d.path)
				.style('fill', (d) => color(dataByState[d.abbreviation]))
				.on('mouseover', handleMouseOver)
				.on('mousemove', handleMouseMove)
				.on('mouseout', handleMouseOut);

			const svgWidth = 1200;
			const scaleWidth = 400;

			const scaleGroup = svg
				.append('g')
				.attr('transform', `translate(${(svgWidth - scaleWidth) / 2}, 10)`);

			const linearGradient = scaleGroup
				.append('defs')
				.append('linearGradient')
				.attr('id', 'linear-gradient');

			linearGradient
				.append('stop')
				.attr('offset', '0%')
				.attr('stop-color', colors[0]);

			linearGradient
				.append('stop')
				.attr('offset', '100%')
				.attr('stop-color', colors[1]);

			scaleGroup
				.append('rect')
				.attr('height', 10)
				.attr('width', scaleWidth)
				.attr('fill', 'url(#linear-gradient)');

			scaleGroup
				.append('text')
				.text(`${formatNumber(min)}`)
				.attr('transform', 'translate(0, 20)')
				.attr('text-anchor', 'middle')
				.attr('font-size', '0.75rem');

			scaleGroup
				.append('text')
				.text(`${formatNumber(max)}`)
				.attr('transform', `translate(${scaleWidth}, 20)`)
				.attr('text-anchor', 'middle')
				.attr('font-size', '0.75rem');
		},
	};

	const {
		loadStates,
		loadAgencies,
		loadEmployeeCountData,
		loadOccupationCategories,
		mem,
	} = props.dataSource;

	const occupationName = 'mapVizOccupations';
	let agencyOptionList = [];
	const agencyOccupationIds = [];

	const [selectedOccupations, setSelectedOccupations] = useState([]);
	let [occupationOptionList, setOccupationList] = useState([]);
	const [selectedAgencies, setSelectedAgencies] = useState([]);

	// create array of agency IDs, each an array of occupation IDs within that agency
	function initAgencyOccupationIds() {
		for (const e of mem.employeeCounts) {
			if (!agencyOccupationIds[e.agencyId]) {
				agencyOccupationIds[e.agencyId] = [];
			}
			if (!agencyOccupationIds[e.agencyId].includes(e.occupationCategoryId)) {
				agencyOccupationIds[e.agencyId].push(e.occupationCategoryId);
			}
		}
	}

	function reset() {
		setSelectedAgencies([]);
		setSelectedOccupations([]);
	}


	loadStates((states) => {
		loadAgencies((agencies) => {
			loadOccupationCategories((occupationCategories) => {
				loadEmployeeCountData([initAgencyOccupationIds], {
					states,
					agencies,
					occupationCategories,
				});

				const sorter = (a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				};

				function filterOccupationsList() {
					if (selectedAgencies.length) {
						const currentOccupations = [];
						selectedAgencies.forEach((agency) => {
							if (agencyOccupationIds[agency.id]) {
								agencyOccupationIds[agency.id].forEach((occupationId) => {
									if (!currentOccupations.includes(occupationId)) {
										currentOccupations.push(occupationId);
									}
								});
							}
						});

						occupationOptionList = currentOccupations.map((occupationId) => Object.values(occupationCategories).find((occupation) => occupation.id === occupationId)).sort(sorter);
					} else {
						occupationOptionList = Object.values(occupationCategories).sort(sorter);
					}
				}

				filterOccupationsList();
				agencyOptionList = Object.values(agencies).sort(sorter);
			});
		});
	});

	useEffect(() => {
		function filterBySelections() {
			const filterOccupations = selectedOccupations.map((item) => item.id);
			const filterAgencies = selectedAgencies.map((item) => item.id);
			const {
				employeeCounts, agencies, states, occupationCategories,
			} = mem;

			let newData = employeeCounts;

			if (filterOccupations && filterOccupations.length) {
				newData = newData.filter((e) =>
					filterOccupations.some((s) => e.occupationCategoryId === s));
			}

			if (filterAgencies && filterAgencies.length) {
				newData = newData.filter((e) =>
					filterAgencies.some((a) => e.agencyId === +a));
			}

			MapvizModule.draw(newData, {
				states,
				agencies,
				occupationCategories,
			});
		}

		filterBySelections();
	}, [selectedOccupations, selectedAgencies]);

	return (
		<>
			<ControlBar isFed>
				<Reset _resetClick={reset} />
				<Share location={props.location} />
			</ControlBar>
			<div id="tooltip" className="tooltip-module" />
			<div id="mapVizToolbar" className={`row ${barChartStyles.toolbar}`}>
				<div className={`filter-tools ${barChartStyles.formItem}`}>
					<Multiselector
  key="mapVizAgencies"
  optionList={agencyOptionList}
  valueKey="id"
  labelKey="name"
  selectedVal={selectedAgencies}
  placeholder="Agencies"
  id="mapVizAgencies"
  changeHandler={setSelectedAgencies}
					/>
				</div>
				<div className={`filter-tools ${barChartStyles.formItem}`}>
					<Multiselector
  key="mapVizOccupations"
  optionList={occupationOptionList}
  valueKey="id"
  labelKey="name"
  selectedVal={selectedOccupations}
  placeholder="Occupations"
  id={occupationName}
  changeHandler={setSelectedOccupations}
					/>
				</div>
			</div>
			<div className={mapStyles.mapContainer}>
				<svg width="947" height="700" viewBox="0 0 1200 700" id="mapSvg" className={mapStyles.mapSvg} aria-labelledby="map-desc" />
			</div>
		</>
	);
}
