import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { line } from 'd3-shape';
import { isMobileDevice, translator } from 'src/afg-helpers/utils';
import { dotsPerRow, dotConstants } from "./dotConstants";
import { labelMaker, mobileLabelMaker } from './layerLegends';
import { initDebtDots } from './debtDots';
import { chartWidth } from './widthManager';
import { createDonut, createMobileDonut } from '../../../../afg-helpers/dots/donut';

const d3 = {
  select, selectAll, transition, line,
};
const billion = 1000000000;
const tenbillion = 10000000000;

export const layers = {};

let config;

function generateOverlay(number, id, label, rectColor) {
  const dotScale = typeof window !== 'undefined' && window.innerWidth > 959 ? billion : tenbillion;
  const amount = (id === 'debt') ? number - config.deficitAmount : number;
  const count = Math.ceil(amount / dotScale);
  const debtRowOne = (id === 'debt') ? dotsPerRow - deficitRemainder : 0;
  const rows = Math.floor((count - debtRowOne) / dotsPerRow);
  const remainder = (count - debtRowOne) % dotsPerRow;
  const spacing = dotConstants.offset.y - (dotConstants.radius * 2);
  const mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2;
  const secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2;

  const overlayLayer = config.mainContainer.append('g').classed(`${id  }-layer`, true);
  let overlayHeight = mainRectHeight + secondaryRectHeight;
  let mainY = 0;
  let secondaryY = mainRectHeight;

  overlayLayer.attr('opacity', 0);

  if (id === 'debt') {
    mainY += secondaryRectHeight + deficitY1;
    secondaryY += secondaryRectHeight + deficitY1;
    overlayHeight += secondaryRectHeight + deficitY1;

    overlayLayer.append('rect')
      .attr('width', debtRowOne * dotConstants.offset.x)
      .attr('x', dotsPerRow * dotConstants.offset.x - debtRowOne * dotConstants.offset.x)
      .attr('y', deficitY1)
      .attr('height', secondaryRectHeight)
      .attr('fill', rectColor)
      .attr('opacity', 0.5);
  }

  overlayLayer.append('rect')
    .attr('width', dotsPerRow * dotConstants.offset.x)
    .attr('y', mainY)
    .attr('height', mainRectHeight)
    .attr('fill', rectColor)
    .attr('opacity', 0.5);

  overlayLayer.append('rect')
    .attr('width', remainder * dotConstants.offset.x)
    .attr('y', secondaryY)
    .attr('height', secondaryRectHeight)
    .attr('fill', rectColor)
    .attr('opacity', 0.5);

  // if (id === 'revenue') {
  //     deficitStartPosition = {
  //         remainder: remainder,
  //         y: mainRectHeight
  //     }
  // }

  if (typeof window !== 'undefined' && window.innerWidth > 959) {
    labelMaker(overlayLayer, overlayHeight, label, amount);
  } else {
    mobileLabelMaker(overlayLayer, overlayHeight, label, amount);
  }

  overlayLayer.attr('data-height', overlayHeight);

  layers[id] = overlayLayer;
}

function placeDonut(g) {
  const y = 160;
  const r = 50;
  const x = chartWidth - r * 2 + 10;
  const donutContainer = g.append('g')
    .classed('donut', true)
    .attr('transform', `${translator(x, y)} scale(1.67)`);

  donutContainer.append('circle')
    .attr('fill', 'white')
    .attr('opacity', 0.85)
    .attr('r', r + 10)
    .attr('cx', r)
    .attr('cy', r);

  createDonut(donutContainer, config.gdpPercent / 100, r * 2, config.debtColor);
}

function mobilePlaceDonut(g) {
  const r = 30;
  const padding = 6;
  const y = d3.select('.debt-layer').node().getBBox().height + 15;
  // const x = chartWidth / 4 - 65;  // from legacy code
  const x = 1;

  const vizDescription = g.append('g')
    .classed('donut', true)
    .attr('transform', translator(x, y));

  vizDescription.append('rect')
    .style('stroke', '#ddd')
    .style('stroke-width', '1px')
    .attr('fill', 'transparent')
    .attr('width', '210px')
    .attr('height', r * 2 + padding * 2)
    .attr('border-radius', '2px');

  const donutContainer = vizDescription.append('g').attr('transform', translator(padding, padding));

  donutContainer.append('circle')
    .attr('fill', 'white')
    .attr('opacity', 0.85)
    .attr('r', r)
    .attr('cx', r)
    .attr('cy', r);

  createMobileDonut(donutContainer, config.gdpPercent / 100, r * 2, config.debtColor, config.sectionName);
}

function createGdp() {
  generateOverlay(config.gdpAmount, 'gdp', 'GDP', '#777');
  if (!isMobileDevice()) {
    placeDonut(layers.gdp);
  } else {
    mobilePlaceDonut(layers.gdp);
  }
}

function createDeficit() {
  generateOverlay(config.deficitAmount, 'deficit', 'Deficit', config.deficitColor);
}

export function createLayers(c) {
  config = c;

  layers.master = config.mainContainer;
  layers.debt = initDebtDots(config);

  createDeficit();
  createGdp();
}
