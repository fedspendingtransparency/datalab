import { select, selectAll } from 'd3-selection';
import { establishContainer } from 'src/afg-helpers/utils';
import { triggerMainInfoBox } from 'src/afg-helpers/infoBox';
import { placeDots } from './placeDots';
import { startLegendAnimation } from './legend';
import { chartWidth, setChartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';

const d3 = { select, selectAll };

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

export function initChartMobile(_config, activeLayer) {
  triggerMainInfoBox();

  d3.select('#viz').selectAll('*').remove();
  config = _config || config;

  setChartWidth();
  setDotsPerRow();
  establishContainer(500, chartWidth, config.accessibilityAttrs.default);
  placeDots(config, activeLayer);
}
