import * as d3 from 'd3v3';
import { establishContainer, wordWrap } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { createMobileLayers } from './createLayers';
import { dotConstants } from './dotConstants';
import drawBracket from './drawBracket';

export function createMobileSpendingViz(config, height, width, dotsHeight) {
  let svg;
  let dots;
  let revenueRect;
  let spendingRect;
  let revenueText;
  let spendingText;

  const rectWidth = width * .25 + dotConstants.radius;

  svg = establishContainer(height, width, config.accessibilityAttrs);

  const dotsContainer = svg.append('g')
    .classed('dots-container', true)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', dotsHeight)
    .attr('width', rectWidth)
    .attr('transform', `translate(${width * .23},${height - 40 - dotsHeight})`);

  createMobileLayers(config, dotsContainer);

  const spendingRectHeight = height - 35;
  const revenueRectHeight = spendingRectHeight - dotsHeight - 8;

  revenueRect = svg.append('g')
    .classed('revenue-rect', true)
    .attr('transform', `translate(${width * .23},35)`);

  revenueRect.append('rect')
    .attr('fill', config.revenueColor)
    .attr('height', revenueRectHeight)
    .attr('width', rectWidth)

  revenueText = svg.append('g')
    .classed('revenue-text', true)
    .attr('transform', `translate(${(width * .08) - 14},35)`)
    .attr('width', width * .15)

  revenueText.append('text')
    .text('Federal Revenue')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .call(wordWrap, width * .15)
  .append('tspan')
    .text(formatNumber('dollars suffix', config.revenueAmount))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', '1.1rem')

  spendingRect = svg.append('g')
    .classed('spending-rect', true)
    .attr('transform', `translate(${width * .52},35)`);

  spendingRect.append('rect')
    .attr('fill', config.spendingColor)
    .attr('height', spendingRectHeight)
    .attr('width', rectWidth)

  spendingText = svg.append('g')
    .classed('spending-text', true)
    .attr('transform', `translate(${(width * .77) + 20},35)`)
    .attr('width', width * .15)

  spendingText.append('text')
    .text('Spending')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .call(wordWrap, width * .15)
  .append('tspan')
    .text(formatNumber('dollars suffix', config.spendingAmount))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', '1.1rem')

  const revenueTextHeight = d3.selectAll('.revenue-text').node().getBoundingClientRect().height;
  const spendingTextHeight = d3.selectAll('.spending-text').node().getBoundingClientRect().height;

  d3.selectAll('.revenue-text>text')
    .attr('y', (spendingRectHeight - revenueTextHeight) * .5);

  d3.selectAll('.spending-text>text')
    .attr('y', (spendingRectHeight - spendingTextHeight) * .5);

  drawBracket(svg, (width * .23) - 1, revenueRectHeight)
  drawBracket(svg, (width * .52) + 1, spendingRectHeight, rectWidth)
    
}