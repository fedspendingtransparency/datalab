import * as d3 from 'd3v3';
import { chartWidth } from './widthManager';
import { dotConstants, dotsPerRow } from './dotConstants';
import { translator } from 'src/afg-helpers/utils';
import { touchIe } from 'src/afg-helpers/touchIe';
import { addSpendingLegend } from 'src/afg-helpers/dots/revenue-and-spending/legend';
import { isMobileDevice } from '../../../afg-helpers/utils';

const layers = {};
const duration = 500;
const scaleFactor = 0.6;
const sectionActive = 'facts__section--active';
const buttonActive = 'facts__trigger--active';

let gdpHeight, originalHeight, spendingHeight, config = {};

function setLayerOpacity(id, active) {
  layers[id].transition()
    .duration(duration)
    .attr('opacity', () => (active ? 1 : 0));
}

function handleGdpLayer(reset) {
  const scale = reset ? 1 : 0.6;
  const x = reset ? 0 : chartWidth * 0.5 - (chartWidth * scale / 2);
  const stepTwoOpacity = reset ? 0 : 1;
  const mainContainer = d3.select('.main-container');

  const accessibilityType = !reset ? 'gdp' : '';

  if (reset && !mainContainer.classed('gdp-active', !reset)) {
    return;
  }

  setAccessibility(accessibilityType);
  mainContainer.classed('gdp-active', !reset);

  if (window.innerWidth < 959) {
    return;
  }

  mainContainer.transition()
    .duration(2000)
    .attr('transform', `${translator(x, 30)} scale(${scale})`)
    .ease();

  d3.selectAll('.gdp-step-two')
    .transition()
    .delay(1000)
    .duration(1500)
    .attr('opacity', stepTwoOpacity)
    .on('end', touchIe)
    .ease();
}

function setAccessibility(type) {
  const svgEl = d3.select('svg.main');
  const descEl = svgEl.select('desc');

  let accessibilityAttr = config.accessibilityAttrs.default;
  if (type) {
    accessibilityAttr = config.accessibilityAttrs[type];
  }

  descEl.text(accessibilityAttr.desc);
}

function handleRevenueLayer(reset) {
  const scale = reset ? 1 : 0.6;
  const x = reset ? 0 : chartWidth * 0.5 - (chartWidth * scale / 2);
  const stepTwoOpacity = reset ? 0 : 1;
  const mainContainer = d3.select('.main-container');

  const accessibilityType = !reset ? config.compareString : '';

  if (reset && !mainContainer.classed('gdp-active', !reset)) {
    return;
  }

  setAccessibility(accessibilityType);
  mainContainer.classed('gdp-active', !reset);

  if (window.innerWidth < 959) {
    return;
  }

  mainContainer.transition()
    .duration(2000)
    .attr('transform', `${translator(x, 30)} scale(${scale})`)
    .ease();

  d3.selectAll(`.${config.compareString}-step-two`)
    .transition()
    .delay(1000)
    .duration(1500)
    .attr('opacity', stepTwoOpacity)
    .on('end', touchIe)
    .ease();
}

function handleLayers(id, reset) {
  if (id === 'gdp') {
    handleGdpLayer(reset);
  } else {
    handleRevenueLayer(reset);
  }
}

function toggleFacts() {
  const button = d3.select(this);
  const id = button.attr('data-trigger-id');
  const targetSection = d3.select(`#${id}-facts`);
  const wasPreviouslyActive = button.classed(buttonActive);

  d3.selectAll('.facts__trigger')
    .classed(buttonActive, null);
  d3.selectAll('.facts__section')
    .classed(sectionActive, null);

  setLayerOpacity(Object.keys(layers)
    .filter((k) => k != id)[0]);

  if (wasPreviouslyActive) {
    setLayerOpacity(id);
  } else {
    button.classed(buttonActive, true);
    targetSection.classed(sectionActive, true);
    setLayerOpacity(id, true);
  }

  resizeSvg((id === 'gdp' && !wasPreviouslyActive));

  if (!wasPreviouslyActive) {
    handleLayers(id);
  } else {
    handleLayers(id, true);
  }
}

export function toggleFactsMobile(id) {
  d3.selectAll(`spending-layer, gdp-layer`).attr('opacity', 0);
  d3.select(`.${id}-layer`).attr('opacity', 1);
  const targetSection = d3.select(`#mobile-${id}-facts`);
  targetSection.classed(sectionActive, true);
  setTimeout(() => resizeSvgMobile(id), 1000);
}

function resizeSvg(gdp) {
  const h = gdp ? gdpHeight : originalHeight;

  d3.select('svg.main')
    .transition()
    .duration(500)
    .attr('height', h + 50);
}

function resizeSvgMobile(id) {
  let h = originalHeight;

  if(id === 'spending') {
    h = spendingHeight;
  } else if (id === 'gdp') {
    h = gdpHeight;
  }

  d3.select('svg.main')
    .transition()
    .attr('height', h + 50);
}

export function generateOverlay(count, container, className, color) {
  const rows = Math.floor(count / dotsPerRow);
  const remainder = count % dotsPerRow;
  const spacing = dotConstants.offset.y - (dotConstants.radius * 2);
  const mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2;
  const secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2;
  const overlayHeight = mainRectHeight + secondaryRectHeight;
  const rectColor = color || '#ccc';
  const opacity = window.innerWidth < 959 ? '0.4' : '0.8';

  const overlayLayer = container.append('g')
    .attr('data-rect-height', overlayHeight)
    .classed(className, true);

  overlayLayer.attr('opacity', 0);

  overlayLayer.append('rect')
    .attr('width', dotsPerRow * dotConstants.offset.x)
    .attr('height', mainRectHeight)
    .attr('fill', rectColor)
    .attr('opacity', opacity);

  overlayLayer.append('rect')
    .attr('width', remainder * dotConstants.offset.x)
    .attr('y', mainRectHeight)
    .attr('height', secondaryRectHeight)
    .attr('fill', rectColor)
    .attr('opacity', opacity);

  return overlayLayer;
}

export function registerLayer(id, layer, _n, _config) {
  config = _config || config;
  layers[id] = layer;
  const n = _n;

  if (n) {
    gdpHeight = n * 0.6;
    spendingHeight = n * 0.2;
  } else if (!originalHeight) {
    originalHeight = d3.select('g.spending-dots')
      .node()
      .getBoundingClientRect().height;
  }
}

export function resetForResize() {
  d3.selectAll('.sidebar')
    .classed('intro-hidden', true);
  Object.keys(layers)
    .forEach(setLayerOpacity);
  d3.selectAll('.facts__trigger')
    .classed(buttonActive, null);
  d3.selectAll('.facts__section')
    .classed(sectionActive, null);
}

export function resetForResizeMobile() {
	d3.select('#viz')
		.selectAll('*')
		.remove();
}

export function revealCompare() {
  setTimeout(() => {
    d3.selectAll('.intro-hidden')
      .classed('intro-hidden', null);
  }, 500);
}

export function setFactsTrigger() {
  d3.selectAll('.facts__trigger').on('click', toggleFacts);
}
