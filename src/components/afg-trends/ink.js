import { line } from 'd3-shape';
import { range } from 'd3-array';

const d3 = { line, range };

export function addVerticalShading(globals) {
    const ctrl = [globals.fiscalYearArray[0], globals.fiscalYearArray[2]];

    globals.verticalStripes = globals.chart.selectAll('.shading')
        .data(ctrl)
        .enter()
        .append('rect')
        .attr('x', function (d) { return globals.scales.x(d) })
        .attr('y', 0)
        .attr('width', globals.width / 4)
        .attr('height', globals.height)
        .attr('fill', '#FAFAFA')
}

export function addHorizontalGridlines(globals) {
    const ctrl = d3.range(0, globals.scales.y.domain()[1], 200000000000);

    globals.horizontalGridlines = globals.chart.append('g').selectAll('.gridlines')
        .data(ctrl)
        .enter()
        .append('path')
        .classed('gridlines', true)
        .attr('d', function (d) {
            const points = [
                [globals.scales.x(2013), globals.scales.y(d)],
                [globals.scales.x(2017), globals.scales.y(d)]
            ]

            return d3.line()(points);
        })
        .attr('stroke', '#ddd')
        .attr('stroke-width', 1)
}

function rescale(globals, duration) {
    globals.verticalStripes.transition()
        .duration(duration)
        .attr('x', function (d) { return globals.scales.x(d) })
        .attr('width', globals.width / 4);

    // globals.horizontalGridlines.transition()
    //     .duration(duration)
    //     .attr('d', function (d) {
    //         const points = [
    //             [globals.scales.x(2013), globals.scales.y(d)],
    //             [globals.scales.x(2017), globals.scales.y(d)]
    //         ]

    //         return d3.line()(points);
    //     })
}

export function ink(globals) {
    addVerticalShading(globals);
    //addHorizontalGridlines(globals);

    return {
        rescale: rescale
    }
}