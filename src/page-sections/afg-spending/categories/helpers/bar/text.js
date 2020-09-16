import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox, wordWrap } from 'src/utils/utils';
import { line } from 'd3-shape';
import { drawChart } from './chart';
import colors from 'src/styles/afg/colors.scss';

const d3 = { select, selectAll };

let maxTextWidth;

function setTextTranslate(d, zoom) {
    const boxHeight = getBoxHeight(d),
        noFit = boxHeight < fitThreshold;

    let x = width / 2,
        y = scaleY(d.stack1 + (d.stack0 - d.stack1) / 2) - 5;

    d.offsetTextY = null; // reset for zoom

    if ((noFit && !d.markForZoom) || noFit && zoom) {
        x = width + noFitXOffset;
        y = height - tracker * fitThreshold;

        d.offsetTextY = y;

        tracker += 1;
    }

    return translator(x, y);
}

function findMaxWidth() {
    const thisWidth = getElementBox(d3.select(this)).width;

    maxTextWidth = (thisWidth > maxTextWidth) ? thisWidth : maxTextWidth;
}

export function placeLabels(containers, config) {
    let detailInnerWidth;

    if (config.detail) {
        detailInnerWidth = d3.select('.detail-background').attr('width') - 40;
    }

    const text = containers.append('text')
        .text(function (d) {
            return d.sub_activity || d.activity;
        })
        .attr('x', function (d) {
            return d.barX1 + 20;
        })
        .attr('y', 20)
        .attr('font-size', 14)
        .attr('font-weight', '600')
        .attr('fill', colors.textColorHeading);

    let xOffset;

    maxTextWidth = 0;

    // test for text fit in detail mode
    if (config.detail) {
        text.each(function (d) {
            const max = detailInnerWidth - d.barX1,
                selection = d3.select(this),
                textWidth = getElementBox(selection).width;

            let x;

            if (textWidth > max) {
                x = selection.attr('x');
                wordWrap(selection, max);
                selection.selectAll('tspan').attr('x', x);
                selection.attr('transform', translator(6, -4) + ' scale(0.9)')
            }
        })
    }

    text.append('tspan')
        .attr('font-size', 14)
        .classed('details', true)
        .attr('dy', function() {
            return config.detail ? 16 : 20;
        })
        .attr('font-weight', '300')
        .attr('x', function (d) {
            return d.barX1 + 20;
        })
        .text(function (d, i) {
            let p = Math.round(parseFloat(d.percent_total));

            if (Math.abs(p) < 1) {
                p = '<1'
            }

            return simplifyNumber(d.amount) + ' (' + p + '%)';
        })

    text.each(findMaxWidth);

    //xOffset = config.width - maxTextWidth;

    // text.attr('x', xOffset);
    // text.selectAll('tspan').attr('x', xOffset);

    //return xOffset - 10;
}
