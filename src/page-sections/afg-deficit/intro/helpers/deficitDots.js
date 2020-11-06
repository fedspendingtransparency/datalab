import { dotsPerRow, dotConstants } from './dotConstants';

let config;
let layer;
let y1;
let deficitCompareDots;
let debtCompareDots;
let remainder;

function dotFactory(x, y) {
  return layer.append('circle')
    .attr('cx', x)
    .attr('cy', y)
    .attr('r', 2)
    .style('fill', config.deficitColor);
}

function makeDotRow(start, max, y, debtOffset) {
  let i = 0;
  let dot;
  let x = start;

  for (i; i < max; i++) {
    dot = dotFactory(x, y);
    x += dotConstants.offset.x;

    if ((i + 1) % dotsPerRow === 0) {
      y += dotConstants.offset.y;
      x = dotConstants.radius;
    }

    if (debtOffset && i < debtOffset) {
      dot.attr('data-debt-only', true)
        .attr('opacity', 0);
    }
  }
}

function markDots(startPosition) {
  const circles = layer.selectAll('circle');
  const size = circles.size();
  const start = size - startPosition.xOffset;

  deficitCompareDots = circles.filter((d, i) => i > start).attr('data-deficit-only', true);
  debtCompareDots = circles.filter('[data-debt-only]');
}

function placeDots(startPosition, width) {
  const isMobile = (width <= 959); // 959 mobile value for afg
  const dotVal = (isMobile) ? 10000000000 : 1000000000;
  const deficitInBillions = config.deficitAmount / dotVal;
  const rowOneCount = dotsPerRow - startPosition.remainder;
  const fullRows = Math.floor((deficitInBillions - rowOneCount) / dotsPerRow);

  let i = 0;
  let y = 2;

  remainder = deficitInBillions - rowOneCount - (fullRows * dotsPerRow);

  // first row with offset
  makeDotRow(2, dotsPerRow, y, startPosition.remainder);

  y += dotConstants.offset.y;

  for (i; i < fullRows; i++) {
    makeDotRow(2, dotsPerRow, y);
    y += dotConstants.offset.y;
  }

  makeDotRow(2, remainder, y);

  y1 = y;

  markDots(startPosition);
}

export function initDeficitDots(c, startPosition) {
  config = c;
  layer = config.mainContainer.append('g')
    .attr('opacity', 0)
    .attr('data-o', 0)
    .classed('deficit-layer', true);

  placeDots(startPosition, window.innerWidth);

  return {
    layer,
    y: y1,
    deficitCompareDots,
    debtCompareDots,
    remainder,
  };
}

export function placeDotsMobile(c, startPosition, separateContainer) {
  config = c;
  const container = separateContainer || config.mainContainer;
  layer = container.append('g')
    .attr('transform', 'translate(0,25)')
    .attr('data-o', 0);

  const dotVal = 10000000000;
  const deficitInBillions = config.deficitAmount / dotVal;
  const fullRows = Math.floor(deficitInBillions / dotsPerRow);

  let i = 0;
  let y = 2 + dotConstants.offset.y;

  for (i; i < fullRows; i++) {
    makeDotRow(2, dotsPerRow, y);
    y += dotConstants.offset.y;
  }

  makeDotRow(2, startPosition.remainder, y);

  y1 = y;

  markDots(startPosition);

  return {
    layer,
    y: y1,
    deficitCompareDots,
    debtCompareDots,
    remainder,
  };
}
