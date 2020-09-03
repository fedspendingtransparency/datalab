import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { establishContainer, translator, simplifyNumber } from 'src/utils/utils';
import { dotConstants } from './dotConstants';
import {
	compareOn, compareOff, generateOverlay, registerLayer,
} from './compareManager';
import colors from '../../../styles/afg/colors.scss';

const d3 = { select, selectAll, line };

let compareLayer;
let config = {};

function placeLegend(g) {
	const legendContainer = g.append('g')
		.classed(`${config.compareString}-step-two`, true)
		.attr('opacity', 0);
	const { compareString } = config;
	const textX = -50;
	const comparisonAmount = config.comparisonAmount || 0;
	const height = Number(compareLayer.attr('data-rect-height'));
	const line = d3.line()
		.x((d) => d.x)
		.y((d) => d.y);
	const lineData = [
		{ x: textX + 30, y: 0 },
		{ x: textX + 20, y: 0 },
		{ x: textX + 20, y: height },
		{ x: textX + 30, y: height },
	];
	const text = legendContainer.append('text')
		.classed('reset touch-label', true)
		.attr('fill', colors.textColorParagraph)
		.attr('text-anchor', 'end')
		.attr('x', 0)
		.attr('y', -10)
		.style('font-size', 24);

	legendContainer.append('path')
		.attr('d', line(lineData))
		.attr('fill', 'none')
		.attr('stroke', '#aaa')
		.attr('stroke-width', 2);

	text.append('tspan')
		.text('Federal ' + `${compareString.charAt(0).toUpperCase()}${compareString.slice(1)}`)
		.style('font-weight', '600')
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', height / 2);

	text.append('tspan')
		.text(simplifyNumber(comparisonAmount))
		.attr('x', textX)
		.attr('dx', 0)
		.attr('dy', 30);
}

export function initRevenueOverlay(_config) {
	config = _config || config;

	const svg = establishContainer();
	const billion = 1000000000;
	const compareCount = Math.ceil(config.comparisonAmount / billion);

	compareLayer = generateOverlay(compareCount, svg.select('.main-container'), `${config.comparisonString}-layer`, config.comparisonColor);

	if (typeof document !== 'undefined' && document.documentElement.clientWidth > 959) {
		placeLegend(compareLayer);
	}

	registerLayer(config.compareString, compareLayer, null, config);
}
