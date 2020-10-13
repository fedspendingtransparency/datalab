import * as d3 from 'd3v3';
import { establishContainer, wordWrap } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { createMobileLayers } from './createLayers';
import { dotConstants } from './dotConstants';
import drawBracket from './drawBracket';

export default function createMobileSpendingViz(config, height, width, dotsHeight) {
  const rectWidth = width * 0.25 + dotConstants.radius;

  const svg = establishContainer(height, width, config.accessibilityAttrs);

  const dotsContainer = svg.append('g')
    .classed('dots-container', true)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', dotsHeight)
    .attr('width', rectWidth)
    .attr('transform', `translate(${width * 0.23},${height - 40 - dotsHeight})`);

  createMobileLayers(config, dotsContainer);

  const spendingRectHeight = height - 35;
  const revenueRectHeight = spendingRectHeight - dotsHeight - 8;

  const revenueRect = svg.append('g')
    .classed('revenue-rect', true)
    .attr('transform', `translate(${width * 0.23},35)`);

  revenueRect.append('rect')
    .attr('fill', config.revenueColor)
    .attr('height', revenueRectHeight)
    .attr('width', rectWidth);

  const revenueText = svg.append('g')
    .classed('revenue-text', true)
    .attr('transform', `translate(${(width * 0.23) - 19},35)`)
    .attr('width', width * 0.15);

  revenueText.append('text')
    .text('Federal Revenue')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .attr('text-anchor', 'end')
    .call(wordWrap, width * 0.15)
    .append('tspan')
    .text(formatNumber('dollars suffix', config.revenueAmount))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', 16);

  const spendingRect = svg.append('g')
    .classed('spending-rect', true)
    .attr('transform', `translate(${width * 0.52},35)`);

  spendingRect.append('rect')
    .attr('fill', config.spendingColor)
    .attr('height', spendingRectHeight)
    .attr('width', rectWidth);

  const spendingText = svg.append('g')
    .classed('spending-text', true)
    .attr('transform', `translate(${(width * 0.77) + 20},35)`)
    .attr('width', width * 0.15);

  spendingText.append('text')
    .text('Spending')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .call(wordWrap, width * 0.15)
    .append('tspan')
    .text(formatNumber('dollars suffix', config.spendingAmount))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', 16);

  const revenueTextHeight = d3.selectAll('.revenue-text').node().getBoundingClientRect().height;

  d3.selectAll('.revenue-text>text')
    .attr('y', (spendingRectHeight - revenueTextHeight) * 0.5);

  d3.selectAll('.spending-text>text')
    .attr('y', (spendingRectHeight * 0.5) - 4);

  drawBracket(svg, (width * 0.23) - 1, revenueRectHeight);
  drawBracket(svg, (width * 0.52) + 1, spendingRectHeight, rectWidth);
}
