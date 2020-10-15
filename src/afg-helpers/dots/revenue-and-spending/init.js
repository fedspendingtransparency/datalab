import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from 'src/afg-helpers/utils';
import { placeDots } from './placeDots';
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import {
  resetForResize,
  setFactsTrigger,
  toggleFactsMobile,
  toggleSelectedFacts,
} from './compareManager';
import { triggerMainInfoBox } from 'src/afg-helpers/infoBox';

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

export function initChartMobile(_config) {
  triggerMainInfoBox();

  d3.select('#viz').selectAll('*').remove();
  config = _config || config;

  setChartWidth();
  setDotsPerRow();
  establishContainer(500, chartWidth, config.accessibilityAttrs.default);
  placeDots(config);
};
