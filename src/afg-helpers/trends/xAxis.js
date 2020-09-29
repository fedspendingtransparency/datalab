import { axisBottom } from 'd3-axis';
import { scaleLinear } from 'd3-scale';

const d3 = { axisBottom, scaleLinear }

function init(globals) {
    const fiscalYearArraylength = globals.fiscalYearArray.length;
    const first = globals.fiscalYearArray[0];
    const last = globals.fiscalYearArray[fiscalYearArraylength - 1];

    globals.scales.x = d3.scaleLinear()
        .range([0, globals.width])
        .domain([first, last]);
}

function render(globals) {
    const x = this;
    
    x.xAxis = d3.axisBottom(globals.scales.x)
        // .tickValues([2014, 2015, 2016, 2017, 2018])
        .tickValues(globals.fiscalYearArray)
        .tickFormat(t => parseInt(t))

    x.xAxisDom = globals.chart.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + globals.height + ')')
        .call(x.xAxis);

    x.xAxisDom.selectAll('text')
        .attr('font-size', 16)
        .attr('dy', 20)

    x.xAxisDom.selectAll('.tick line').remove();
    x.xAxisDom.selectAll('path').remove();
}

function rescale(globals, duration) {
    const x = this;

    x.xAxisDom.transition()
        .duration(duration)
        .call(x.xAxis)
        .ease();

    x.xAxisDom.selectAll('path').remove();
        
}

export function xAxis(globals) {
    let x = {};
    
    init(globals);
    
    return {
        rescale: rescale.bind(x),
        render: render.bind(x)
    }
}