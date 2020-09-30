import { dotsPerRow, dotConstants } from "./dotConstants";

let config, layer;

export let vizHeight;

function dotFactory(x, y) {
    return layer.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', config.debtColor)
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

function placeDots() {
    const count = config.debtAmount / 1000000000,
        fullRows = Math.floor(count / dotsPerRow),
        remainder = count - (fullRows * dotsPerRow);

    let i = 0,
        y = 2;

    // full rows
    for (i; i < fullRows; i++) {
        makeDotRow(2, dotsPerRow, y)
        y += dotConstants.offset.y;
    }

    // last row
    makeDotRow(2, remainder, y);

    vizHeight = y + 40;
}

export function initDebtDots(c, startPosition) {
    config = c;
    layer = config.mainContainer.append('g')
        .attr('opacity', 0)
        .classed('debt-layer', true);

    placeDots();

    return layer;
}