import { select, selectAll } from 'd3-selection';
import { establishContainer, translator, isMobileDevice } from 'src/afg-helpers/utils';
import { dotConstants, dotsPerRow } from './dotConstants';
import { initRevenueOverlay } from './compareRevenue';
import { initGdp } from './compareGdp';
import { revealCompare } from './compareManager';


const d3 = { select, selectAll };

let svg;
let config = {};

function dotFactory(container, x, y) {
  const color = config.sectionColor;

  container.append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', 2)
    .style('fill', color);
}

export function readyDots(width, activeLayer) {
  if (typeof window !== 'undefined') {
    const isMobile = (width <= 959);

    const dotContainer = svg.append('g')
      .classed('main-container', true)
      .attr('transform', translator(0, 15))
      .append('g')
      .classed('spending-dots', true)
      .attr('opacity', 0);

    const dotVal = (isMobile) ? 10000000000 : 1000000000;
    let i = 0;
    let dotRectHeight;
    const sectionAmountInBillions = config.sectionAmount / dotVal;
    let x = dotConstants.radius;
    let y = 2;

    for (i; i < sectionAmountInBillions; i++) {
      dotFactory(dotContainer, x, y);
      x += dotConstants.offset.x;

      if ((i + 1) % dotsPerRow === 0) {
        y += dotConstants.offset.y;
        x = dotConstants.radius;
      }
    }

    dotContainer.transition()
      .delay(1000)
      .duration(1000)
      .attr('opacity', 1)
      .on('end', revealCompare)
      .ease();

    dotRectHeight = d3.select('g.spending-dots')
      .node()
      .getBoundingClientRect().height;

    dotContainer.attr('data-rect-height', dotRectHeight);

    setTimeout(() => {
      if (activeLayer !== '') {
        dotRectHeight = svg.select(`.${activeLayer}-layer`)
          .node()
          .getBoundingClientRect().height;
      }

      svg.style('height', dotRectHeight + 30);
    }, 1000);
  }
}


export function placeDots(_config, activeLayer) {
  d3.select('.main-container').remove();
  config = _config || config;
  svg = establishContainer();
  readyDots(window.innerWidth, activeLayer);
  initRevenueOverlay(config);
  initGdp(config);
}
