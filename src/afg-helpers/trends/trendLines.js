import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { max } from 'd3-array';
import { transition } from 'd3-transition';

const d3 = { select, selectAll, line, max, transition };

function lineFn(d, globals) {
    return d3.line()
        .x(function (d) { return globals.scales.x(d.year); })
        .y(function (d) {
            let yOffset = globals.scales.y(d.amount);
            if(yOffset < 0 && yOffset > -200){
                yOffset = -200;
            }
            return yOffset; })(d);
}

function rescale(globals, duration) {
    this.transition()
        .duration(duration)
        .attr('d', function (d) { return lineFn(d.values, globals); })
        .style('stroke', function (d, i) {
            if (globals.noZoom || globals.zoomState === 'in' || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return globals.baseColor;
            }

            return '#ddd';
        })
        .ease()
}

function deEmphasize(keep, globals, hover) {
    this.attr('stroke-width', function (d) {
        if (globals.noDrilldown && hover === 'on' && keep === d.name) {
            return 3;
        }
        
        if (globals.noDrilldown && hover === 'on') {
            return 0.5;
        }
        
        if ((globals.noDrilldown && hover === 'on') || (!globals.activeDrilldown) || globals.activeDrilldown === d.name || (keep === d.name && hover === 'on')) {
            return 3;
        }

        return 0.5;
    });
}

export function trendLines(globals) {
    const trendLines = globals.chart.selectAll('.trend-line')
        .data(globals.data)
        .enter()
        .append('path')
        .attr('class', 'trend-line')
        .attr('d', function (d) {
            return lineFn(d.values.map(r => {
                return {
                    year: r.year,
                    amount: 0
                }
            }), globals);
        })
        .style('fill', 'none')
        .style('stroke', function (d, i) {
            return (globals.noZoom || d3.max(d.values, r => r.amount) > globals.zoomThreshold) ? globals.baseColor : '#ddd';
        })
        .attr('stroke-width', 3);

    rescale.bind(trendLines)(globals, 1000);

    return {
        rescale: rescale.bind(trendLines),
        deEmphasize: deEmphasize.bind(trendLines)
    }
}