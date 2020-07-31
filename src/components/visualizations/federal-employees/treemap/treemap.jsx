import React, { useEffect } from 'react';
import * as d3 from 'd3v4';
import Tooltip from '../util/tooltip';
import treemapStyles from './treemap.module.scss';

/* Extracted and adapted from fedscope.js an trreemap-module.js */

export default function Treemap(props) {
	const TreemapModule = {
		draw: (data, { agencies }) => {
			const svg = d3.select('#treemapSvg');
			const width = +svg.attr('width');
			const height = +svg.attr('height');

			const treemap = d3
				.treemap()
				.tile(d3.treemapResquarify)
				.size([width, height])
				.round(true)
				.paddingInner(1);

			function handleMouseOver(d) {
				const formatNumber = d3.format('$,d');
				Tooltip.draw('#tooltip', agencies[d.data.agencyId].name, {
					'Employee Salaries': formatNumber(d.value),
				});
				d3.select(this).style('fill', '#2fbab7');
			}

			function handleMouseOut() {
				Tooltip.remove('#tooltip');
				d3.select(this).style('fill', '#2272ce');
			}

			function handleMouseMove() {
				Tooltip.move('#tooltip');
			}

			const root = d3
				.hierarchy(data)
				.sum((d) => d.obligations)
				.sort((a, b) => b.height - a.height || b.value - a.value);

			treemap(root);

			const cell = svg
				.selectAll('g')
				.data(root.leaves())
				.enter()
				.append('g')
				.attr('transform', (d) => `translate(${d.x0},${d.y0})`);

			cell
				.append('rect')
				.attr('id', (d) => d.data.agencyId)
				.attr('width', (d) => d.x1 - d.x0)
				.attr('height', (d) => d.y1 - d.y0)
				.attr('fill', '#2272ce')
				.on('mouseover', handleMouseOver)
				.on('mousemove', handleMouseMove)
				.on('mouseout', handleMouseOut);

			cell
				.append('clipPath')
				.attr('id', (d) => `clip-${d.data.agencyId}`)
				.append('use')
				.attr('xlink:href', (d) => `#${d.data.agencyId}`);

			cell
				.append('text')
				.text((d) => agencies[d.data.agencyId].abbreviation)
				.attr('dy', 12)
				.attr('dx', 2)
				.attr('fill', 'white')
				.attr('pointer-events', 'none');
		},
	};

	const {
		loadStates,
		loadAgencies,
		loadEmployeeSalaryData,
	} = props.dataSource;

	useEffect(() => {
		loadStates((states) => {
			loadAgencies((agencies) => {
				loadEmployeeSalaryData([TreemapModule.draw], {
					agencies,
				});
			});
		});
	});

	return (
		<>
			<div id="tooltip" className="tooltip-module" />
			<div className={treemapStyles.treemapContainer}>
				<svg width="1200" height="700" viewBox="0 0 1200 700" id="treemapSvg" className={treemapStyles.treemapVisualization} aria-labelledby="treemap-desc">
					<desc id="treemap-desc">Diagram showing a breakdown of the 24 CFO Act Agencies, and their respective personnel compensation amounts from Fiscal Year 2017.</desc>
				</svg>
			</div>
		</>
	);
}
