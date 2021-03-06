import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import {
	establishContainer,
	findAmountInCsv,
	isMobileDevice,
	translator,
} from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { generateOverlay, registerLayer } from './compareManager';
import { createDonut, createMobileDonut } from '../donut';
import colors from '../../../styles/afg/colors.scss';
import { chartWidth } from './widthManager';
import SpendingData from '../../../../static/americas-finance-guide/data/federal_spending_gdp.csv';

const d3 = { select, selectAll, line };

let gdpLayer;
let config = {};

const gdpLabelFy = `FY${SpendingData[0].year.toString().slice(2)}`;

function getNewSvgHeight() {
	return Number(gdpLayer.attr('data-rect-height'));
}

function placeLegend(g) {
	const legendContainer = g
		.append('g')
		.classed('gdp-step-two', true)
		.attr('opacity', 0);
	const textX = -50;
	const height = getNewSvgHeight();
	const { gdpAmount } = config;
	const line = d3
		.line()
		.x(d => d.x)
		.y(d => d.y);
	const lineData = [
		{ x: textX + 30, y: 0 },
		{ x: textX + 20, y: 0 },
		{ x: textX + 20, y: height },
		{ x: textX + 30, y: height },
	];
	const text = legendContainer
		.append('text')
		.classed('reset touch-label', true)
		.attr('fill', colors.textColorParagraph)
		.attr('text-anchor', 'end')
		.attr('x', 0)
		.attr('y', height / 2 - 60)
		.style('font-size', '1.5rem');

	legendContainer
		.append('path')
		.attr('d', line(lineData))
		.attr('fill', 'none')
		.attr('stroke', '#aaa')
		.attr('stroke-width', 2);

	text
		.append('tspan')
		.text(gdpLabelFy)
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 0);

	text
		.append('tspan')
		.text('U.S.')
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Gross')
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Domestic')
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Product')
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text(formatNumber('dollars suffix', gdpAmount, 4))
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 25);
}

function placeLegendMobile(g) {
	const legendContainer = g
		.append('g')
		.classed('gdp-step-two', true)
		.attr('opacity', 1);
	const rectWidth = d3
		.select('g.gdp-layer')
		.node()
		.getBoundingClientRect().width;
	const { height } = d3
		.select('g.gdp-layer')
		.node()
		.getBoundingClientRect();
	const { gdpAmount } = config;
	const line = d3
		.line()
		.x(d => d.x)
		.y(d => d.y);
	const lineData = [
		{ x: rectWidth + 10, y: 0 },
		{ x: rectWidth + 20, y: 0 },
		{ x: rectWidth + 20, y: height },
		{ x: rectWidth + 10, y: height },
	];
	const text = legendContainer
		.append('text')
		.classed('reset touch-label', true)
		.attr('fill', colors.textColorParagraph)
		.attr('text-anchor', 'start')
		.attr('x', 0)
		.attr('y', height / 2 - 60)
		.attr('font-size', '0.875rem');

	legendContainer
		.append('path')
		.attr('d', line(lineData))
		.attr('fill', 'none')
		.attr('stroke', '#aaa')
		.attr('stroke-width', 2);

	text
		.append('tspan')
		.text(`${gdpLabelFy} U.S.`)
		.style('font-weight', '600')
		.attr('x', rectWidth + 40)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Gross')
		.style('font-weight', '600')
		.attr('x', rectWidth + 40)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Domestic')
		.style('font-weight', '600')
		.attr('x', rectWidth + 40)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text('Product')
		.style('font-weight', '600')
		.attr('x', rectWidth + 40)
		.attr('dx', 0)
		.attr('dy', 20);

	text
		.append('tspan')
		.text(formatNumber('dollars suffix', gdpAmount, 4))
		.attr('x', rectWidth + 40)
		.attr('dx', 0)
		.attr('dy', 20);
}

function placeDonut(g) {
	const y = d3.select('.spending-dots').attr('data-rect-height');
	const r = 50;
	const x = chartWidth - (r + 25) * 1.2;
	const donutContainer = g
		.append('g')
		.classed('gdp-step-two', true)
		.attr('opacity', 0)
		.attr('transform', `${translator(x, y - r * 2 + 5)} scale(1.67)`);

	donutContainer
		.append('circle')
		.attr('fill', 'white')
		.attr('opacity', 0.85)
		.attr('r', r + 10)
		.attr('cx', r)
		.attr('cy', r);

	createDonut(
		donutContainer,
		config.gdpPercent / 100,
		r * 2,
		config.sectionColor
	);
}

function placeDonutMobile(g) {
	const r = 30;
	const reScaleDonut = 1.4;
	const x = (chartWidth * 0.627 - 190) / 2;
	const spendDotHeight = d3
		.select('.spending-dots')
		.node()
		.getBBox().height;
	const vizHeight = d3
		.select('svg.main')
		.node()
		.getBBox().height;
	const y = (vizHeight - spendDotHeight) / reScaleDonut - 35;

	const vizDescription = g
		.append('g')
		.classed('donut', true)
		.attr('transform', `${translator(x - 10, y - 10)}`);

	vizDescription
		.append('rect')
		.attr('fill', 'white')
		.attr('width', '210px')
		.style('border', 'solid 1px #dddddd')
		.style('border-radius', '2px')
		.attr('height', r * 2.75);

	const donutContainer = g
		.append('g')
		.classed('gdp-step-two', true)
		.attr('opacity', 0)
		.attr('transform', `${translator(x, y)}`);

	createMobileDonut(
		donutContainer,
		config.gdpPercent / 100,
		r * 2,
		config.sectionColor,
		config.sectionName
	);
}

export function initGdp(_config) {
	config = _config || config;
	const svg = establishContainer().attr('height', 1000);
	const dotScale = isMobileDevice() ? 1000000000000 : 100000000000;
	let gdpCount = findAmountInCsv('gdp', SpendingData) / dotScale;
	gdpCount = Math.round(gdpCount) * 100;

	gdpLayer = generateOverlay(
		gdpCount,
		svg.select('.main-container'),
		'gdp-layer'
	);

	if (isMobileDevice()) {
		placeLegendMobile(gdpLayer);
		placeDonutMobile(gdpLayer);
	} else {
		placeLegend(gdpLayer);
		placeDonut(gdpLayer);
	}

	registerLayer('gdp', gdpLayer, getNewSvgHeight());
}
