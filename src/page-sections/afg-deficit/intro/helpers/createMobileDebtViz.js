import * as d3 from 'd3v3';
import { establishContainer, wordWrap } from 'src/afg-helpers/utils';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import { createMobileLayers } from './createLayers';
import drawBracket from './drawBracket';

export default function createMobileDebtViz(config, height, width, dotsHeight) {
  const svg = establishContainer(height, width, config.accessibilityAttrs);

  svg.append('rect')
    .attr('height', height - 35)
    .attr('width', width * 0.7)
    .attr('fill', config.federalDebtColor)
    .attr('transform', 'translate(0,35)');

  const dotsContainer = svg.append('g')
    .classed('dots-container', true)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', dotsHeight)
    .attr('width', (width * 0.7) - 8)
    .attr('transform', 'translate(4,4)');

  createMobileLayers(config, dotsContainer);

  svg.append('rect')
    .attr('height', height - dotsHeight - 49)
    .attr('width', (width * 0.7) - 8)
    .attr('fill', config.priorYearDebtColor)
    .attr('transform', `translate(4,${44 + dotsHeight})`);

  const textWidth = 142;

  const priorYearDebtText = svg.append('g')
    .classed('prior-year-debt-balance', true)
    .attr('transform', `translate(${(((width * 0.7) - textWidth) / 2) - 10},${62 + dotsHeight})`);

  priorYearDebtText.append('rect')
    .attr('height', 28)
    .attr('width', textWidth + 20)
    .attr('fill', config.federalDebtColor)
    .attr('rx', 2)
    .attr('ry', 2);

  priorYearDebtText.append('g')
    .attr('width', textWidth)
    .append('text')
    .text('Prior Year Debt Balance*')
    .attr('font-size', 14)
    .attr('fill', '#555')
    .attr('text-anchor', 'middle')
    .attr('transform', `translate(${(textWidth / 2) + 10},18)`);

  const federalDebtText = svg.append('g')
    .classed('federal-debt-text', true)
    .attr('transform', `translate(${(width * 0.7) + 22},35)`)
    .attr('width', (width * 0.3) - 22);

  federalDebtText.append('text')
    .text('Federal Debt')
    .attr('font-size', 14)
    .attr('font-weight', 600)
    .attr('fill', '#555')
    .attr('x', 0)
    .call(wordWrap, (width * 0.3) - 22)
    .append('tspan')
    .text(formatNumber('dollars suffix', config.debtBalance, 4))
    .attr('font-size', 14)
    .attr('font-weight', 'normal')
    .attr('x', 0)
    .attr('dy', 16);

  d3.selectAll('.federal-debt-text>text')
    .attr('y', (height - 35) * 0.5);

  drawBracket(svg, (width * 0.7) + 1, height - 35, 2);
}
