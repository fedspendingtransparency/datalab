import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { establishContainer } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { generateOverlay, registerLayer } from './compareManager';
import colors from '../../../styles/afg/colors.scss';
import { isMobileDevice } from '../../utils';

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
    .style('font-size', '1.5rem');

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
    .text(formatNumber('dollars suffix', comparisonAmount, 3))
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 30);
}

function placeLegendMobile(g) {
  const legendContainer = g.append('g')
    .classed(`${config.compareString}-step-two`, true)
    .attr('opacity', 1);
  const { compareString } = config;
  const comparisonAmount = config.comparisonAmount || 0;
  const height = Number(compareLayer.attr('data-rect-height'));
  const rectWidth = d3.select('.spending-dots').node().getBoundingClientRect().width;

  const line = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);
  const lineData = [
    { x: rectWidth + 10, y: 0 },
    { x: rectWidth + 20, y: 0 },
    { x: rectWidth + 20, y: height },
    { x: rectWidth + 10, y: height },
  ];
  const text = legendContainer.append('text')
    .classed('reset touch-label', true)
    .attr('fill', colors.textColorParagraph)
    .attr('text-anchor', 'start')
    .attr('x', 0)
    .attr('y', 0)
    .attr('font-size', '0.875rem');

  legendContainer.append('path')
    .attr('d', line(lineData))
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
    .attr('stroke-width', 2);

  text.append('tspan')
    .text('Federal ')
    .style('font-weight', '600')
    .attr('x', rectWidth + 40)
    .attr('dx', 0)
    .attr('dy', height / 4);

  text.append('tspan')
    .text(`${compareString.charAt(0).toUpperCase()}${compareString.slice(1)}`)
    .style('font-weight', '600')
    .attr('x', rectWidth + 40)
    .attr('dx', 0)
    .attr('dy', 20);

  text.append('tspan')
    .text(formatNumber('dollars suffix', comparisonAmount, 3))
    .attr('x', rectWidth + 40)
    .attr('dx', 0)
    .attr('dy', 20);
}

export function initRevenueOverlay(_config) {
  config = _config || config;

  const svg = establishContainer();
  const billion = 1000000000;
  const tenbillion = 10000000000;
  const dotScale = isMobileDevice() ? tenbillion : billion;
  const compareCount = Math.ceil(config.comparisonAmount / dotScale);

  compareLayer = generateOverlay(compareCount, svg.select('.main-container'), `${config.compareString}-layer`, config.comparisonColor);

  if (typeof window !== 'undefined' && window.innerWidth <= 959) {
    placeLegendMobile(compareLayer);
  } else {
    placeLegend(compareLayer);
  }

  registerLayer(config.compareString, compareLayer, null, config);
}
