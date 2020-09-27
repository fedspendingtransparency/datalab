import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import {
  establishContainer, translator, simplifyNumber, findAmountInCsv,
} from 'src/afg-helpers/utils';
import { generateOverlay, registerLayer} from './compareManager';
import { createDonut } from '../donut';
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
  const legendContainer = g.append('g')
	.classed('gdp-step-two', true)
	.attr('opacity', 0);
  const textX = -50;
  const height = getNewSvgHeight();
  const { gdpAmount } = config;
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
	.attr('y', (height / 2) - 60)
	.style('font-size', 24);

  legendContainer.append('path')
    .attr('d', line(lineData))
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
    .attr('stroke-width', 2);

  text.append('tspan')
    .text(gdpLabelFy)
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 0);

  text.append('tspan')
    .text('U.S.')
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 20);

  text.append('tspan')
    .text('Gross')
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 20);

  text.append('tspan')
    .text('Domestic')
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 20);

  text.append('tspan')
    .text('Product')
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 20);

  text.append('tspan')
    .text(simplifyNumber(gdpAmount))
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 25);
}

function placeDonut(g) {
  const y = d3.select('.spending-dots').attr('data-rect-height');
  const r = 50;
  const x = chartWidth - (r + 25) * 1.2;
  const donutContainer = g.append('g')
	.classed('gdp-step-two', true)
	.attr('opacity', 0)
	.attr('transform', `${translator(x, y - r * 2 + 5)} scale(1.67)`);

  donutContainer.append('circle')
    .attr('fill', 'white')
    .attr('opacity', 0.85)
    .attr('r', r + 10)
    .attr('cx', r)
    .attr('cy', r);

  createDonut(donutContainer, config.gdpPercent / 100, r * 2, config.sectionColor);
}

export function initGdp(_config) {
  config = _config || config;
  const svg = establishContainer();
  let gdpCount = (findAmountInCsv('gdp', SpendingData)) / 100000000000;
  gdpCount = Math.round(gdpCount) * 100;

  gdpLayer = generateOverlay(gdpCount, svg.select('.main-container'), 'gdp-layer');

  if (typeof document !== 'undefined' && document.documentElement.clientWidth > 959) {
    placeDonut(gdpLayer);
    placeLegend(gdpLayer);
  }

  registerLayer('gdp', gdpLayer, getNewSvgHeight());
}
