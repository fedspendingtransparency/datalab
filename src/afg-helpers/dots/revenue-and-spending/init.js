import { select, selectAll } from 'd3-selection';
import { establishContainer } from 'src/afg-helpers/utils';
import { placeDots, readyDots } from './placeDots';
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize, setFactsTrigger, toggleSelectedFacts } from './compareManager';
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

export function resizeChart(_config, selection) {
  config = _config || config;

  if(selection) {
    initChartMobile(config);
    setFactsTrigger();
    toggleSelectedFacts(props.selection);

    setTimeout(function() {
      d3.select('svg.main').attr('height', 2050)
      console.log(d3.select('svg.main').node().getBBox().height);
    }, 1000);

  } else {
    if (typeof document !== 'undefined') {
      if (Object.keys(config)
        .indexOf('mainContainer') !== -1) {
        config.mainContainer.selectAll('*')
          .remove();
      }
      setChartWidth();
      setDotsPerRow();
      resetForResize();
      placeDots(config);
    }
  }
}
