import { select, selectAll } from 'd3-selection';
import { establishContainer } from 'src/afg-helpers/utils';
import { placeDots } from './placeDots';
import { startLegendAnimation } from './legend';
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

export function resizeChart() {
  if (typeof document !== 'undefined') {
    setChartWidth();
    setDotsPerRow();
    resetForResize();
    d3.select('svg.main')
      .attr('width', chartWidth);
    placeDots(config);
  }
}
