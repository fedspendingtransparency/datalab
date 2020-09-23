import * as d3 from 'd3v3';
import { establishContainer, wordWrap } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { createMobileLayers } from './createLayers';
import { dotConstants } from './dotConstants';

function drawBracket(svg, xPosition, height, rightSide) {
  const bracket = svg.append('g')
    .classed('bracket', true)
    .attr('transform', `translate(${xPosition},35)`);

  let x1 = -7;
  let x2 = -7;
  let x3 = -13;

  if (rightSide) {
    x1 = rightSide + 2;
    x2 = rightSide + 8;
    x3 = rightSide + 8;
  }

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '6')
    .attr('height', '1')
    .attr('x', x1)
    
  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '1')
    .attr('height', height)
    .attr('x', x2)

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '6')
    .attr('height', '1')
    .attr('x', x1)
    .attr('y', height - 1)

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '6')
    .attr('height', '1')
    .attr('x', x3)
    .attr('y', (height - 1) / 2)
  }

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
    .attr('y', revenueRectHeight * .5)
    .attr('aligntment-baseline', 'middle')
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
    .attr('y', spendingRectHeight * .5)
    .attr('aligntment-baseline', 'middle')
    .call(wordWrap, width * .15)
  .append('tspan')
    .text(formatNumber('dollars suffix', config.spendingAmount))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', '1.1rem')

  drawBracket(svg, (width * .23) - 1, revenueRectHeight)
  drawBracket(svg, (width * .52) + 1, spendingRectHeight, rectWidth)
    
}