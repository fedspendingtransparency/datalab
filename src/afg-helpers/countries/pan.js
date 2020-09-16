import { select } from 'd3-selection';
import { zoom } from 'd3-zoom';
import { translator } from 'src/afg-helpers/utils';

const d3 = { select, zoom }

export function pan(chartWidth, parentWidth) {
    d3.select('g.pan-listen').call(d3.zoom().on("zoom", function () {
        let maxShift = chartWidth - parentWidth,
            xShift,
            yShift;

        if (maxShift < 0) {
            return;
        }

        d3.getEvent = () => require("d3-selection").event;

        xShift = d3.getEvent().transform.x;
        yShift = d3.getEvent().transform.y;

        xShift = (xShift > 0) ? 0 : xShift;

        xShift = (Math.abs(xShift) > maxShift) ? 0 - maxShift : xShift;

        d3.select('g.pan-apply').attr("transform", translator(xShift, 0));
        d3.select('g.detail-layer').attr('transform', translator(0, yShift));
    }))
        .on("wheel.zoom", null);
}