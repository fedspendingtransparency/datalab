import { select, selectAll } from 'd3-selection';
import { establishContainer } from 'src/afg-helpers/utils';
import { placeDots } from './placeDots';
import { startLegendAnimation, initDot } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize } from './compareManager';
import { triggerMainInfoBox } from 'src/afg-helpers/infoBox';

const d3 = { select, selectAll };

let debounce;
let previousWidth;
let config;

export function initChart(_config) {
  triggerMainInfoBox();

  d3.select('#viz').selectAll('*').remove();
  config = _config || config;

  setChartWidth();
  setDotsPerRow();

  establishContainer(500, chartWidth, config.accessibilityAttrs.default);

  startLegendAnimation(config);
}

export function initChartMobile(_config) {
  triggerMainInfoBox();

  d3.select('#viz').selectAll('*').remove();
  config = _config || config;

  setChartWidth();
  setDotsPerRow();

  establishContainer(500, chartWidth, config.accessibilityAttrs.default);
  initDot(); // replace animation.. this gets called at the end of the animation;
};

export function resizeChart() {
  if (typeof document !== 'undefined') {
    if(Object.keys(config).indexOf('mainContainer') !== -1) {
      config.mainContainer.selectAll('*')
	.remove();
    }
    setChartWidth();
    setDotsPerRow();
    resetForResize();
    d3.select('svg.main')
      .attr('width', chartWidth);
    placeDots(config);
  }
}
