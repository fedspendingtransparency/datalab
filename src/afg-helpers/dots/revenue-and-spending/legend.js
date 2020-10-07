import { select, selectAll } from 'd3-selection';
import { establishContainer, translator, fadeAndRemove } from 'src/afg-helpers/utils';
import colors from '../../../styles/afg/colors.scss';
import { placeDots } from './placeDots';
import { chartWidth } from './widthManager';
import { triggerInfoBox } from 'src/afg-helpers/infoBox';

const d3 = { select, selectAll };
const introWidth = 365;
const radius = 75;

let svg; let largeDot; let billion; let explanation; let
config = {};

function buildLegend() {
  const g = d3.select('.income-dot-legend');
  const duration = 2000;
  const w = 126;
  const xOffset = 4;

  placeDots(config);

  fadeAndRemove(explanation, 1000);
  fadeAndRemove(billion, 500);

  g.transition()
    .duration(duration)
    .attr('transform', translator(xOffset, 14));

  g.select('circle')
    .attr('opacity', 1)
    .transition()
    .duration(duration)
    .attr('r', 3)
    .attr('cx', 0)
    .attr('cy', 0)
    .ease();

  g.append('text')
    .text('= $1 Billion')
    .attr('fill', colors.textColorParagraph)
    .attr('opacity', 0)
    .style('font-size', 16)
    .attr('y', 5)
    .attr('x', 7)
    .transition()
    .delay(duration * 0.7)
    .duration(duration / 2)
    .attr('opacity', 1)
    .ease();

  /* g.append('image')
    .attr('height', 16)
    .attr('width', 20)
    .attr('x', 80)
    .attr('y', -14)
    .attr('opacity', 0)
    .attr('data-box-id', 'billion-dollars')
    .attr('xlink:href', `/americas-finance-guide/icons/${config.anecdoteName}`)
    .attr('style', 'cursor:pointer')
    .on('click', triggerInfoBox)
    .transition()
    .delay(duration * 0.7)
    .duration(duration / 2)
    .attr('opacity', 1)
    .ease(); */
}

function addText() {
  const duration = 500;

  explanation = this.largeDot.append('text')
    .attr('y', 54)
    .attr('opacity', 0)
    .attr('transform', translator(radius * 2 + 20, 0))
    .attr('fill', colors.textColorParagraph);

  explanation.append('tspan')
    .attr('x', 0)
    .attr('font-size', 18)
    .text('In this analysis');

  explanation.append('tspan')
    .attr('x', 0)
    .attr('dy', 28)
    .attr('font-size', 24)
    .attr('font-weight', '600')
    .text('One Dot');

  explanation.append('tspan')
    .attr('font-size', 24)
    .text(' represents');

  explanation.append('tspan')
    .attr('x', 0)
    .attr('font-size', 24)
    .attr('font-weight', '600')
    .attr('dy', 30)
    .text('One Billion Dollars');

  billion = this.largeDot.append('text')
    .text('$1,000,000,000')
    .attr('text-anchor', 'middle')
    .attr('font-size', 18)
    .attr('x', this.radius)
    .attr('y', this.radius + 7)
    .attr('fill', 'white')
    .attr('opacity', 0);

  this.largeDot.selectAll('text')
    .transition()
    .duration(500)
    .attr('opacity', 1)
    .ease();

    if (window.innerWidth < 959) {
      //setTimeout(buildLegend, 1000);
      placeDots(config);
      return;
    } else {
      setTimeout(buildLegend, 200);
    }
}

// export function addSpendingLegend() {
//   let anchor = d3.select('.dotScale');
//   d3.select('#spending-legend-svg').remove(); // remove after rerender
//
//   let svg = anchor.append('svg').attr('id', 'spending-legend-svg');
//   svg.attr('width', '1.5rem').attr('height', '1.5rem');
//
//   svg.append('circle')
//     .attr('opacity', 1)
//     .attr('r', 4)
//     .attr('cx', 6)
//     .attr('cy', 13)
//
//   anchor.append('text')
//     .text('Federal Spending')
//     .attr('fill', colors.textColorParagraph)
//     .attr('opacity', 1)
//     .style('font-size', 14)
// }

export function initDot() {
  const dotColor = config.sectionColor;
  largeDot.append('circle')
    .attr('cx', radius)
    .attr('cy', radius)
    .attr('r', 1)
    .attr('fill', dotColor)
    .transition()
    .duration(1500)
    .attr('r', radius)
    .on('end', addText.bind({
      largeDot,
      radius,
    }))
    .ease();
}

// export function initDotMobile() {
//   const dotColor = config.sectionColor;
//   largeDot.append('circle')
//     .attr('cx', radius)
//     .attr('cy', radius)
//     .attr('r', 1)
//     .attr('fill', dotColor)
//     .transition()
//     .duration(100)
//     .attr('r', radius)
//     .on('end', addText.bind({
//       largeDot,
//       radius,
//     }))
//     .ease();
// }

export function startLegendAnimation(_config) {
  const introX = chartWidth < introWidth ? 0 : (chartWidth / 2) - (introWidth / 2);
  const scaleDotLegend = chartWidth < 430 ? 0.85 : 1;

  config = _config || config;
  svg = establishContainer(),
  largeDot = svg.append('g')
    .classed('income-dot-legend', true)
    .attr('transform', `${translator(introX, 40)} scale(${scaleDotLegend})`);

  initDot();
}
