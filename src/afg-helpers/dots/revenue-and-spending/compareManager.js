import * as d3 from 'd3v3';
import { chartWidth } from './widthManager';
import { dotConstants, dotsPerRow } from './dotConstants';
import { translator } from 'src/afg-helpers/utils';
import { touchIe } from 'src/afg-helpers/touchIe';
import { addSpendingLegend } from 'src/afg-helpers/dots/revenue-and-spending/legend';

const layers = {};
const duration = 500;
const scaleFactor = 0.6;
const sectionActive = 'facts__section--active';
const buttonActive = 'facts__trigger--active';

let gdpHeight; let originalHeight; let config = {};

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

function updateMainSvg(id) {
  if (id === 'spending') {
    d3.select('svg.main')
    .transition()
    .duration(200)
    .attr('height', 410); 
  } else if (id === 'gdp') {
    d3.select('svg.main')
    .transition()
    .duration(200)
    .attr('height', 510); 
  }
}

function handleLayers(id, reset) {
  if (id === 'gdp') {
    if (window.innerWidth < 959) {
      updateMainSvg(id)
      // add gdp legend (todo)
    }
    handleGdpLayer(reset);
  } else {
    // spending
    if (window.innerWidth < 959) {
      updateMainSvg(id)
      addSpendingLegend();
    }
    handleRevenueLayer(reset);
  }
}

function toggleFacts() {
  const button = d3.select(this);
  const desktop = (document.documentElement.clientWidth > 959);
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

  if (!wasPreviouslyActive && desktop) {
    handleLayers(id);
  } else if (desktop) {
    handleLayers(id, true);
  }
}

function toggleFactsMobile() {
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
  if (!wasPreviouslyActive) {
    handleLayers(id);
  } else {
    handleLayers(id, true);
  }

  if (window.innerWidth < 959) {
    return;
  } else {
    resizeSvg((id === 'gdp' && !wasPreviouslyActive));
  }

}

function resizeSvg(gdp) {
  const h = gdp ? gdpHeight : originalHeight;

  d3.select('svg.main')
    .transition()
    .duration(500)
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

  /* need this for mobile.. */
  if (window.innerWidth < 959) {
    setTimeout(() => {
      d3.selectAll('.facts__trigger').on('click', toggleFactsMobile);
    }, 2000);
  }
}
