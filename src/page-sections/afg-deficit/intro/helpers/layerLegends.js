import { line } from 'd3-shape';
import { simplifyNumber } from 'src/afg-helpers/utils';
import colors from '../../../../styles/afg/colors.scss';
import { chartWidth } from './widthManager';
import { dotConstants } from './dotConstants';

const d3 = { line };
const duration = 1500;
const lineFn = d3.line()
  .x((d) => d.x)
  .y((d) => d.y);

export function deficitLabel(yMax, parent, amount) {
  const layer = parent.append('g').classed('legend', true);
  const lineData = [
    { x: -20, y: dotConstants.offset.y },
    { x: -30, y: dotConstants.offset.y },
    { x: -30, y: dotConstants.offset.y + yMax },
    { x: -20, y: dotConstants.offset.y + yMax },
  ];
  const textX = -60;
  const text = layer.append('text')
    .attr('fill', colors.textColorParagraph)
    .classed('touch-label', true)
    .attr('text-anchor', 'middle')
    .attr('x', 0)
    .attr('y', dotConstants.offset.y + (yMax / 2) + 44)
    .attr('font-size', '1.5rem');

  layer.append('path')
    .attr('d', lineFn(lineData))
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
    .attr('stroke-width', 2);

  text.append('tspan')
    .text(simplifyNumber(amount))
    .attr('x', textX)
    .attr('dx', -30)
    .attr('dy', -30);

  text.append('tspan')
    .text('Deficit')
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', -30)
    .attr('dy', -30);
}

export function labelMaker(parent, height, label, amount) {
  const lineData = [
    { x: -20, y: 0 },
    { x: -30, y: 0 },
    { x: -30, y: height },
    { x: -20, y: height },
  ];
  const spending = label === 'Spending';
  const layer = parent.append('g').attr('opacity', 0).classed('legend', true);
  const textX = spending ? chartWidth + 40 : -40;
  const text = layer.append('text')
    .attr('fill', colors.textColorParagraph)
    .classed('touch-label', true)
    .attr('text-anchor', 'end')
    .attr('x', 0)
    .attr('y', height / 2 + 15)
    .attr('font-size', '1.5rem');

  if (spending) {
    lineData.forEach((r, i) => {
      r.x = (i === 0 || i === 3) ? chartWidth + 20 : chartWidth + 30;
    });

    text.attr('text-anchor', 'start');
  }

  layer.append('path')
    .attr('d', lineFn(lineData))
    .attr('fill', 'none')
    .attr('stroke', '#aaa')
    .attr('stroke-width', 2);

  text.append('tspan')
    .text(label)
    .style('font-weight', '600')
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', -24);

  text.append('tspan')
    .text(simplifyNumber(amount))
    .attr('x', textX)
    .attr('dx', 0)
    .attr('dy', 24);

  layer.transition().duration(duration * 1.5).attr('opacity', 1);
}
