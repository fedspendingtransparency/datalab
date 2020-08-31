import { select, selectAll } from 'd3-selection';
import { axisLeft } from 'd3-axis';
import { min, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { simplifyNumber } from 'src/utils/utils';
import colors from 'src/ffg/globalSass/colors.scss';

const d3 = { select, selectAll, axisLeft, min, range, scaleLinear };

function init(globals) {
    const dataMin = d3.min(globals.data.map(row => d3.min(row.values.map(v => v.amount))));

    let ratio;

    globals.scales.y = d3.scaleLinear().range([globals.height, 0]);

    globals.scales.y.domain([
        d3.min([0, dataMin]),
        globals.domainMax,
    ]).nice();

    ratio = dataMin / globals.scales.y.domain()[0]

    // shorten up the bottom end of the scale if .nice() pushes it too far away
    if (dataMin < 0 && dataMin / globals.scales.y.domain()[0] < 0.5) {
        globals.scales.y.domain([globals.scales.y.domain()[0] * ratio * 1.1, globals.scales.y.domain()[1]]);
    }
}

function render(globals) {
    const y = {},
        yTicks = d3.range(0, globals.scales.y.domain()[1], 100000000000);

    yTicks.push(globals.scales.y.domain()[1]);

    y.yAxis = d3.axisLeft(globals.scales.y)
        .tickPadding(10)
        .tickFormat(simplifyNumber)
        .tickSize(0 - globals.width)

    y.yAxisDom = globals.chart.append('g')
        .attr('class', 'axis axis--y')
        .call(y.yAxis);

    y.yAxisDom.selectAll('.tick line')
        .attr('stroke-width', 1)

    y.yAxisDom.select('.domain')
        .attr('stroke', '#aaa')
        .raise();

    modify(y, globals);

    return y;
}

function modify(y, globals) {
    y.yAxisDom.selectAll('.tick text')
        .attr('fill', function (d, i) {
            return (i % 2 && d !== 0) ? '#eee' : colors.textColorParagraph;
        })

    y.yAxisDom.selectAll('.tick line')
        .attr('stroke', function (d, i) {
            if (d === 0) {
                return "#888";
            }

            return (i % 2) ? 'none' : '#ddd';
        })
        .attr('stroke-width', function (d, i) {
            if (d === 0) {
                return 2;
            }
        })
}

function rescale(globals, duration) {
    this.yAxis.tickSize(0 - globals.width);

    this.yAxisDom.transition()
        .duration(duration)
        .call(this.yAxis)
        .ease();

    modify(this, globals);
}

export function yAxis(globals) {
    let y;

    init(globals);

    y = render(globals);

    return {
        rescale: rescale.bind(y)
    }
}
