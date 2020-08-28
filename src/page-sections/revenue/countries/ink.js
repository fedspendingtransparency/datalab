import { initDropShadow } from "./dropShadow";
import { range } from 'd3-array';
import { translator } from "../../../utils/utils";

const d3 = { range },
    maskClass = 'drop-shadow-mask';

let containers, dimensions;

function buildCountryBox() {
    containers.country.append('rect')
        .attr('class', 'drop-shadow-base')
        .attr('width', dimensions.countryColumnWidth)
        .attr('height', dimensions.totalHeight)
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

function buildGdpBox() {
    containers.gdp.append('rect')
        .attr('class', 'drop-shadow-base')
        .attr('width', dimensions.gdpColumnWidth)
        .attr('height', dimensions.totalHeight)
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

export function placeHorizontalStripes(dataLength, dimensions) {
    let stripes;
    const chartWidth = (dimensions && dimensions.chartWidth) ? dimensions.chartWidth : 1200;

    stripes = containers.stripes.selectAll('line')
        .data(d3.range(dataLength + 1), function(d){ return d; })

    stripes.exit().remove();

    stripes.enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', function(d){
            return d * dimensions.rowHeight;
        })
        .attr('x2', chartWidth)
        .attr('y2', function(d){
            return d * dimensions.rowHeight;
        })
        .attr('stroke', 'rgba(100,100,100,0.1)')
        .attr('stroke-width', 1)
}

function placeMask() {
    // clip the drop shadow

    if (containers.columnHeaders.selectAll('rect.' + maskClass).size()) {
        return;
    }

    containers.columnHeaders.append('rect')
        .classed(maskClass, true)
        .attr('width', 1200)
        .attr('height', dimensions.header)
        .attr('stroke', 'none')
        .attr('fill', 'white')
}

export function ink(_containers, _dimensions, dataLength) {
    containers = _containers;
    dimensions = _dimensions;

    containers.stripes = containers.chart.append('g').attr('transform', translator(0, dimensions.header));

    initDropShadow();
    buildCountryBox();
    buildGdpBox();
    placeHorizontalStripes(dataLength, dimensions);
    placeMask();
}