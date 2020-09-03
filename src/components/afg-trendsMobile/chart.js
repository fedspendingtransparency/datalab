import { max, min, extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { getElementBox, translator } from 'src/utils/utils';

const d3 = { max, min, extent, scaleLinear, line },
    idealHeight = 800,
    margin = [5, 6, 30, 6];

let chartWidth, containerScope;

function lineFn(d, config) {
    return d3.line()
        .x(function (d) { return config.scaleX(d.year); })
        .y(function (d) { return config.scaleY(d.amount); })(d);
}

function setYScale(data, config) {
    const extent = d3.extent(data.map(r => {
        return r.values.map(v => v.amount)
    }).reduce((a, c) => a.concat(c), []));

    if (extent[0] > 0) {
        extent[0] = 0;
    }

    config.scaleY = d3.scaleLinear().range([idealHeight, 0]);

    config.scaleY.domain(extent);
}

function setXScale(config) {
    const fiscalYearArraylength = config.fiscalYearArray.length;
    const first = config.fiscalYearArray[0];
    const last = config.fiscalYearArray[fiscalYearArraylength - 1];

    chartWidth = getElementBox(containerScope.select('.chart-row__chart')).width;

    config.scaleX = d3.scaleLinear()
        .range([0, chartWidth - margin[1] - margin[3]])
        .domain([first, last]);
}

function createSvg(container, d, config) {
    const dataExtent = d3.extent(d.map(r => r.amount)),
        chartHeight = Math.ceil(config.scaleY(dataExtent[0]) - config.scaleY(dataExtent[1]));

    container.selectAll('svg').remove();

    return container.append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight + margin[0] + margin[2]);
}

function drawLine(svg, d, config) {
    const max = d3.max(d.map(r => r.amount)),
    shift = config.scaleY(config.scaleY.domain()[1]) - config.scaleY(max),
    lineG = svg.append('g').attr('transform', translator(margin[3], shift + margin[0]));

    lineG.append('path')
        .attr('class', 'trend-line')
        .attr('d', function () {
            return lineFn(d, config);
        })
        .style('fill', 'none')
        .style('stroke', config.baseColor)
        .attr('stroke-width', 2);

    placeDots(lineG, config, d);
    drawAxis(lineG, config, d)
}

function placeDots(lineG, config, d) {
    lineG.selectAll('circle')
        .data(d)
        .enter()
        .append('circle')
        .attr('stroke', config.baseColor)
        .attr('fill', 'white')
        .attr('r', 4)
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('transform', function (d) {
            return translator(config.scaleX(d.year), config.scaleY(d.amount));
        })
}

function drawAxis(g, config, d) {
    const fiscalYearArraylength = config.fiscalYearArray.length;
    const first = config.fiscalYearArray[0];
    const last = config.fiscalYearArray[fiscalYearArraylength - 1];

    const min = d3.min(d.map(r => r.amount));

    g.append('line')
        .attr('stroke', '#ccc')
        .attr('stroke-width', '1')
        .attr('x1', config.scaleX(first))
        .attr('y1', config.scaleY(min) + 9)
        .attr('x2', config.scaleX(last))
        .attr('y2', config.scaleY(min) + 9)

    g.append('text')
        .text(first)
        .attr('fill', '#aaa')
        .attr('x', config.scaleX(first))
        .attr('dy', config.scaleY(min) + 25)

    g.append('text')
        .text(last)
        .attr('fill', '#aaa')
        .attr('x', config.scaleX(last))
        .attr('dy', config.scaleY(min) + 25)
        .attr('text-anchor', 'end')
}

export function drawChart(container, d, config) {
    let svg;

    if (!chartWidth || config.chapter === 'spending') {
        setXScale(config);
    }

    svg = createSvg(container, d, config);

    drawLine(svg, d, config);
}

export function initScale(data, container, config) {
    containerScope = container;

    setYScale(data, config);
}
