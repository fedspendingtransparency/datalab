import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll };

export function findAmountInCsv(str, data) {
  let amount;

  data.every((row) => {
    if (row.category != str) {
      return true;
    }
    amount = row.amount;
    return false;
  });

  return amount;
}

export function getElementBox(d3Selection) {
  const rect = d3Selection.node().getBoundingClientRect();

  return {
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    right: Math.ceil(rect.right),
    bottom: Math.ceil(rect.bottom),
  };
}

export function translator(x, y) {
  return `translate(${x}, ${y})`;
}

export function getTransform(d3Selection) {
  const re = /(\d)+/g;
  const originalTransform = d3Selection.attr('transform').match(re);

  return {
    x: Number(originalTransform[0]),
    y: Number(originalTransform[1]),
  };
}

export function establishContainer(height, width, accessibilityAttrs) {
  const viz = d3.select('#viz');

  let svg = viz.select('svg.main');

  if (svg.size() === 0) {
    height = height || 400;
    width = width || 1200;

    svg = viz.append('svg')
      .classed('main', true)
      .attr('shape-rendering', 'geometricPrecision')
      .attr('height', height)
      .attr('width', width);
  } else if (height) {
    svg.attr('height', height);
  }

  if (accessibilityAttrs && Object.keys(accessibilityAttrs).length) {
    svg.append('desc').attr('id', 'svgMainDesc').text(accessibilityAttrs.desc);
    svg.attr('aria-describedby', 'svgMainDesc');
  }

  return svg;
}

export function simplifyBillions(n) {
  const billion = 1000000000;

  return `$${Math.round(n / billion * 10) / 10} B`;
}

export function simplifyNumber(n) {
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  const negativeSign = (n < 0) ? '-' : '';

  let simplifier = million;
  let letter = 'M';

  if (n === 0) {
    return '$0';
  }

  if (Math.abs(n) >= trillion) {
    simplifier = trillion;
    letter = 'T';
  } else if (Math.abs(n) >= billion) {
    simplifier = billion;
    letter = 'B';
  }

  return `${negativeSign}$${Math.round(Math.abs(n) / simplifier * 10) / 10} ${letter}`;
}

export function wordWrap(text, maxWidth) {
  const words = text.text().split(/\s+/).reverse();
  let word;
  let line = [];
  const lineHeight = 1.1;
  let tspan;

  tspan = text.text(null)
    .append('tspan')
    .attr('x', 0);

  while (words.length > 0) {
    word = words.pop();
    line.push(word);
    tspan.text(line.join(' '));
    if (tspan.node().getComputedTextLength() > maxWidth) {
      line.pop();
      tspan.text(line.join(' '));
      line = [word];
      tspan = text.append('tspan')
        .attr('x', 0)
        .attr('dy', `${lineHeight}em`)
        .text(word);
    }
  }
}

export function initDropShadow() {
  const svg = establishContainer();
  const filter = svg.append('defs').append('filter')
    .attr('id', 'drop1')
    .attr('height', 2.2);

  filter.append('feGaussianBlur')
    .attr('in', 'SourceAlpha')
    .attr('stdDeviation', 2)
    .attr('result', 'blur');

  filter.append('feOffset')
    .attr('in', 'blur')
    .attr('dx', 0)
    .attr('dy', 0)
    .attr('result', 'offsetBlur');

  const feMerge = filter.append('feMerge');

  feMerge.append('feMergeNode')
    .attr('in', 'offsetBlur');
  feMerge.append('feMergeNode')
    .attr('in', 'SourceGraphic');
}

export function fractionToPercent(n, precision) {
  if (!precision) {
    return `${parseInt(n * 100)}%`;
  }

  // TODO: handle precision
  console.warn('need to handle precision');
}

export function stripBr() {
  d3.selectAll('br').remove();
}

export function fadeAndRemove(selection, duration) {
  duration = duration || 1000;

  selection.transition()
    .duration(duration)
    .attr('opacity', 0)
    .on('end', function () {
      d3.select(this).remove();
    });
}

export function isMobileDevice() {
  return typeof window !== 'undefined' && window.innerWidth < 960;
}
