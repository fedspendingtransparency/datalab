import { line } from 'd3-shape';
import colors from '../../../ffg/globalSass/colors.scss';
import { simplifyNumber } from '../../../utils/utils';
import { chartWidth } from './widthManager';

const d3 = { line },
    duration = 1500,
    scaleFactor = 0.6,
    lineFn = d3.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; });

export function deficitLabel(yMax, parent, amount) {
    const layer = parent.append('g').classed('legend', true),
        mid = yMax / 2,
        lineData = [
            { x: -20, y: mid },
            { x: -30, y: mid },
            { x: -30, y: mid + yMax },
            { x: -20, y: mid + yMax }
        ],
        textX = -30,
        text = layer.append('text')
            .attr('fill', colors.textColorParagraph)
            .classed('touch-label', true)
            .attr('text-anchor', 'middle')
            .attr('x', 0)
            .attr('y', lineData[2].y + 24)
            .style('font-size', 24);

    layer.append('path')
        .attr('d', lineFn(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text('Deficit')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dx', 0)
        .attr('dy', 0);

    text.append('tspan')
        .text(simplifyNumber(amount))
        .attr('x', textX)
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
        textX = spending ? chartWidth + 40 : -40,
        text = layer.append('text')
            .attr('fill', colors.textColorParagraph)
            .classed('touch-label', true)
            .attr('text-anchor', 'end')
            .attr('x', 0)
            .attr('y', height / 2 + 15)
            .style('font-size', 24);

    if (spending) {
        lineData.forEach((r, i) => {
            r.x = (i === 0 || i === 3) ? chartWidth + 20 : chartWidth + 30;
        });

        text.attr('text-anchor', 'start');
    }

    layer.append('path')
        .attr('d', lineFn(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text(label)
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dx', 0)
        .attr('dy', -24);

    text.append('tspan')
        .text(simplifyNumber(amount))
        .attr('x', textX)
        .attr('dx', 0)
        .attr('dy', 24);

    layer.transition().duration(duration * 1.5).attr('opacity', 1);
}
