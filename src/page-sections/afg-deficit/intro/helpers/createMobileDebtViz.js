import * as d3 from 'd3v3';
import { establishContainer, wordWrap } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { createMobileLayers } from './createLayers';
import { dotConstants } from './dotConstants';
import drawBracket from './drawBracket';

export function createMobileDebtViz(config, height, width, dotsHeight) {
  let svg;
  let federalDebtRect;
  let federalDebtText;
  let priorYearDebtRect;
  let priorYearDebtText;
  let dotsContainer

  svg = establishContainer(height, width, config.accessibilityAttrs);

  federalDebtRect = svg.append('rect')
    .attr('height', height - 35)
    .attr('width', width * .7)
    .attr('fill', config.federalDebtColor)
    .attr('transform', 'translate(0,35)')

  dotsContainer = svg.append('g')
    .classed('dots-container', true)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', dotsHeight)
    .attr('width', (width * .7) - 8)
    .attr('transform', `translate(4,4)`);

  createMobileLayers(config, dotsContainer);
  
  priorYearDebtRect = svg.append('rect')
    .attr('height', height - dotsHeight - 49)
    .attr('width', (width * .7) - 8)
    .attr('fill', config.priorYearDebtColor)
    .attr('transform', `translate(4,${44 + dotsHeight})`)
    
  const textWidth = 142;
    
  priorYearDebtText = svg.append('g')
    .classed('prior-year-debt-balance', true)
    .attr('transform', `translate(${(((width * .7) - textWidth) / 2) - 10},${62 + dotsHeight})`);
    
  priorYearDebtText.append('rect')
    .attr('height', 28)
    .attr('width', textWidth + 20)
    .attr('fill', config.federalDebtColor)
    .attr('rx', 2)
    .attr('ry', 2)
    
  priorYearDebtText.append('g')
    .attr('width', textWidth)
  .append('text')
    .text('Prior Year Debt Balance*')
    .attr('font-size', 14)
    .attr('fill', '#555')
    .attr('text-anchor', 'middle')
    .attr('transform', `translate(${(textWidth / 2) + 10},18)`);

  federalDebtText = svg.append('g')
    .classed('federal-debt-text', true)
    .attr('transform', `translate(${(width * .7) + 22},35)`)
    .attr('width', (width * .3) - 22)

  federalDebtText.append('text')
    .text('Federal Debt')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .call(wordWrap, (width * .3) - 22)
  .append('tspan')
    .text(formatNumber('dollars suffix', config.debtBalance))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', '1.1rem')

  const federalDebtTextHeight = d3.selectAll('.federal-debt-text').node().getBoundingClientRect().height;

  d3.selectAll('.federal-debt-text>text')
    .attr('y', (height - 35) * .5)

  drawBracket(svg, (width * .7) + 1, height - 35, 2)
    
}