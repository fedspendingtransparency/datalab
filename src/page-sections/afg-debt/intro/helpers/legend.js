import * as d3 from 'd3v3';
import { establishContainer, translator, fadeAndRemove } from 'src/afg-helpers/utils';
import { triggerInfoBox, triggerMainInfoBox } from 'src/afg-helpers/infoBox';
import colors from '../../../../styles/afg/colors.scss';
import { chartWidth } from './widthManager';

import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';

const introWidth = 365;
const radius = 75;

let svg;
let largeDot;
let billion;
let explanation;
let callback;
let config = {};

function buildLegend() {
  const g = d3.select('.income-dot-legend');
  const duration = 2000;
  const w = 126;
  const xOffset = 4;

  fadeAndRemove(explanation, 1000);
  fadeAndRemove(billion, 500);

  setTimeout(callback, 1000);

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
		.text(`= ${AfgData.dot_represents.value}`)
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
}

function addText() {
  explanation = this.largeDot.append('text')
    .attr('y', 54)
    .attr('opacity', 0)
    .attr('transform', translator(this.radius * 2 + 20, 0))
    .attr('fill', colors.textColorParagraph);

  explanation.append('tspan')
    .attr('x', 0)
    .attr('font-size', 18)
    .text('In this analysis');

  explanation.append('tspan')
    .attr('x', 0)
    .attr('dy', 28)
    .attr('font-size', '1.5rem')
    .attr('font-weight', '600')
    .text('One Dot');

  explanation.append('tspan')
    .attr('font-size', '1.5rem')
    .text(' represents');

  explanation.append('tspan')
    .attr('x', 0)
    .attr('font-size', '1.5rem')
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


  setTimeout(buildLegend, 2000);
}

function initDot() {
  largeDot.append('circle')
    .attr('cx', radius)
    .attr('cy', radius)
    .attr('r', 1)
    .attr('fill', config.debtColor)
    .transition()
    .duration(1500)
    .attr('r', radius)
    .on('end', addText.bind({
      largeDot,
      radius,
    }))
    .ease();
  triggerMainInfoBox();
}

export function startLegendAnimation(_config, _callback) {
  const introX = chartWidth < introWidth ? 0 : (chartWidth / 2) - (introWidth / 2);
  const scaleDotLegend = chartWidth < 430 ? 0.85 : 1;

  config = _config || config;
  svg = establishContainer();
  callback = _callback;
  largeDot = svg.append('g')
    .classed('income-dot-legend', true)
    .attr('transform', `${translator(introX, 40)} scale(${scaleDotLegend})`);

  initDot();
}
