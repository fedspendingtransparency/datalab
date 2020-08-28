import { line } from 'd3-shape';
import colors from '../../../ffg/globalSass/colors.scss';
import { simplifyNumber } from '../../../utils/utils';
import { chartWidth } from './widthManager';
import DebtData from '../../../../libs/assets-OLD/ffg/data/explore_federal_debt.csv';

const gdpLabelFy = 'FY' + DebtData[0].year.toString().slice(2) ;

const d3 = { line },
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
