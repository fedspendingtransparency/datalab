import { dotsPerRow, dotConstants } from "./dotConstants";
import { translator } from "../../../utils/utils";

let config, layer, y1, deficitCompareDots, debtCompareDots, remainder;

function dotFactory(x, y) {
    return layer.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', config.deficitColor)
}

function makeDotRow(start, max, y, debtOffset) {
    let i = 0,
        dot,
        x = start;

    for (i; i < max; i++) {
        dot = dotFactory(x, y);
        x += dotConstants.offset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotConstants.offset.y;
            x = dotConstants.radius;
        }

        if (debtOffset && i < debtOffset) {
            dot.attr('data-debt-only', true)
                .attr('opacity', 0)
        }
    }
}

function markDots(startPosition) {
    const circles = layer.selectAll('circle'),
        size = circles.size(),
        start = size - startPosition.xOffset;

    deficitCompareDots = circles.filter((d, i) => i > start).attr('data-deficit-only', true);
    debtCompareDots = circles.filter('[data-debt-only]');
}

function placeDots(startPosition) {
    const deficitInBillions = config.deficitAmount / 1000000000,
        rowOneCount = dotsPerRow - startPosition.remainder,
        fullRows = Math.floor((deficitInBillions - rowOneCount) / dotsPerRow);

    let i = 0,
        y = 2;

    remainder = deficitInBillions - rowOneCount - (fullRows * dotsPerRow);

    // first row with offset
    makeDotRow(2, dotsPerRow, y, startPosition.remainder);

    y += dotConstants.offset.y;

    for (i; i < fullRows; i++) {
        makeDotRow(2, dotsPerRow, y)
        y += dotConstants.offset.y;
    }

    makeDotRow(2, remainder, y);

    y1 = y;

    markDots(startPosition);
}

export function initDeficitDots(c, startPosition) {
    config = c;
    layer = config.mainContainer.append('g')
        .attr('opacity', 0)
        .attr('data-o', 0)
        .classed('deficit-layer', true);

    placeDots(startPosition);

    return {
        layer: layer,
        y: y1,
        deficitCompareDots: deficitCompareDots,
        debtCompareDots: debtCompareDots,
        remainder: remainder
    }
}