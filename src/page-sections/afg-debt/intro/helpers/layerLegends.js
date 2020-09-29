import { line } from 'd3-shape';
import colors from '../../../../styles/afg/colors.scss';
import { simplifyNumber } from 'src/afg-helpers/utils';
import { chartWidth } from './widthManager';
import DebtData from '../../../../../static/americas-finance-guide/data/explore_federal_debt.csv';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

const gdpLabelFy = 'FY' + DebtData[0].year.toString().slice(2) ;

const d3 = { select, selectAll, line },
    duration = 1500,
    scaleFactor = 0.6,
    lineFn = d3.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; });

function gdpText(text, amount) {
    text.append('tspan')
        .text(gdpLabelFy)
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 0);

    text.append('tspan')
        .text('U.S.')
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);

    text.append('tspan')
        .text('Gross')
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);

    text.append('tspan')
        .text('Domestic')
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);

    text.append('tspan')
        .text('Product')
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);

    text.append('tspan')
        .text(simplifyNumber(amount))
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);
}

// deficit text
function standardText(text, label, amount) {
    text.append('tspan')
        .text(label)
        .style('font-weight', '600')
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', -24);

    text.append('tspan')
        .text(simplifyNumber(amount))
        .attr('x', -40)
        .attr('dx', 0)
        .attr('dy', 24);
}

export function labelMaker(parent, height, label, amount) {
    const lineData = [
        { x: -20, y: 0 },
        { x: -30, y: 0 },
        { x: -30, y: height },
        { x: -20, y: height }
    ],
        spending = label === 'Spending',
        layer = parent.append('g').attr('opacity', 0).classed('legend', true),
        text = layer.append('text')
            .attr('fill', colors.textColorParagraph)
            .classed('touch-label', true)
            .attr('text-anchor', 'end')
            .attr('x', 0)
            .attr('y', height / 2 + 15)
            .style('font-size', 24);

    layer.append('path')
        .attr('d', lineFn(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    if (label === 'GDP') {
        text.attr('y', height / 2 - 60);

        gdpText(text, amount, text);
    } else {
        standardText(text, label, amount);
    }

    layer.transition().duration(duration * 1.5).attr('opacity', 1);
}

function mobileStandardText(text, label, amount) {
    const vizWidth = d3.select('.debt-layer').node().getBBox().width;
    const padding = 40;
    text.append('tspan')
      .text(label)
      .style('font-size', '.875rem')
      .style('font-weight', '600')
      .attr('x', vizWidth + padding + 30)
      .attr('dx', 0)
      .attr('dy', -10);

    text.append('tspan')
      .text(simplifyNumber(amount))
      .style('font-size', '.875rem')
      .attr('x', vizWidth + padding + 40)
      .attr('dx', 0)
      .attr('dy', 14);
}

function mobileGdpText(text, amount) {
    const vizWidth = d3.select('.gdp-layer').node().getBBox().width;
    const padding = 20;
    text.append('tspan')
      .text(gdpLabelFy)
      .style('font-weight', '600')
      .style('font-size', '.875rem')
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 0);

    text.append('tspan')
      .text('U.S.')
      .style('font-weight', '600')
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 24);

    text.append('tspan')
      .text('Gross')
      .style('font-weight', '600')
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 24);

    text.append('tspan')
      .text('Domestic')
      .style('font-weight', '600')
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 24);

    text.append('tspan')
      .text('Product')
      .style('font-weight', '600')
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 24);

    text.append('tspan')
      .text(simplifyNumber(amount))
      .attr('x', vizWidth + padding)
      .attr('dx', 0)
      .attr('dy', 24);
}

export function mobileLabelMaker(parent, height, label, amount) {
    const vizWidth = d3.select('.debt-layer').node().getBBox().width;
    const padding = 10;
    const lineData = [
          { x: vizWidth + padding, y: 2 },
          { x: vizWidth + padding + 10, y: 2 },
          { x: vizWidth + padding + 10, y: height + 2 },
          { x: vizWidth + padding, y: height + 2 }
      ],
      layer = parent.append('g').attr('opacity', 0).classed('legend', true),
      text = layer.append('text')
        .attr('fill', colors.textColorParagraph)
        .classed('touch-label', true)
        .attr('text-anchor', 'start')
        .attr('x', 0)
        .attr('y', height / 2 + 15)
        .style('font-size', '0.875rem');

    layer.append('path')
      .attr('d', lineFn(lineData))
      .attr('fill', 'none')
      .attr('stroke', '#aaa')
      .attr('stroke-width', 2);

    if (label === 'GDP') {
        text.attr('y', height / 2 - 60);

        mobileGdpText(text, amount, text);
    } else {
        mobileStandardText(text, label, amount);
    }

    layer.transition().duration(duration * 1.5).attr('opacity', 1);
}