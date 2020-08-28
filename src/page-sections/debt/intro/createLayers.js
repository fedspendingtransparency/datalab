import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { line } from 'd3-shape';
import { dotsPerRow, dotConstants } from "./dotConstants";
import { labelMaker, deficitLabel } from './layerLegends';
import { initDebtDots } from './debtDots';
import { translator, isMobileDevice } from '../../../utils/utils';
import { chartWidth } from './widthManager';
import { createDonut } from '../../revenue/donut';

const d3 = { select, selectAll, transition, line },
    duration = 1500,
    billion = 1000000000;

export const layers = {};

let config;

function generateOverlay(number, id, label, rectColor) {
    const amount = (id === 'debt') ? number - config.deficitAmount : number,
        count = Math.ceil(amount / billion),
        debtRowOne = (id === 'debt') ? dotsPerRow - deficitRemainder : 0,
        rows = Math.floor((count - debtRowOne) / dotsPerRow),
        remainder = (count - debtRowOne) % dotsPerRow,
        spacing = dotConstants.offset.y - (dotConstants.radius * 2),
        mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2,
        secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2;

    let overlayLayer = config.mainContainer.append('g').classed(id + '-layer', true),
        overlayHeight = mainRectHeight + secondaryRectHeight,
        mainY = 0,
        secondaryY = mainRectHeight;

    overlayLayer.attr('opacity', 0);

    if (id === 'debt') {
        mainY += secondaryRectHeight + deficitY1;
        secondaryY += secondaryRectHeight + deficitY1;
        overlayHeight += secondaryRectHeight + deficitY1;

        overlayLayer.append('rect')
            .attr('width', debtRowOne * dotConstants.offset.x)
            .attr('x', dotsPerRow * dotConstants.offset.x - debtRowOne * dotConstants.offset.x)
            .attr('y', deficitY1)
            .attr('height', secondaryRectHeight)
            .attr('fill', rectColor)
            .attr('opacity', 0.5);
    }

    overlayLayer.append('rect')
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('y', mainY)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('y', secondaryY)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5)

    if (id === 'revenue') {
        deficitStartPosition = {
            remainder: remainder,
            y: mainRectHeight
        }
    }

    if (!isMobileDevice()) {
        labelMaker(overlayLayer, overlayHeight, label, amount);
    }

    overlayLayer.attr('data-height', overlayHeight);

    layers[id] = overlayLayer;
}

function placeDonut(g) {
    const y = 160,
        r = 50,
        x = chartWidth - r * 2 + 10,
        donutContainer = g.append('g')
            .classed('donut', true)
            .attr('transform', translator(x, y) + ' scale(1.67)');

    donutContainer.append('circle')
        .attr('fill', 'white')
        .attr('opacity', 0.85)
        .attr('r', r + 10)
        .attr('cx', r)
        .attr('cy', r);

    createDonut(donutContainer, config.gdpPercent / 100, r * 2, config.debtColor);
}

function createGdp() {
    generateOverlay(config.gdpAmount, 'gdp', 'GDP', '#777');
    if (!isMobileDevice()) {
        placeDonut(layers.gdp);
    }
}

function createDeficit() {
    generateOverlay(config.deficitAmount, 'deficit', 'Deficit', config.deficitColor);
}

export function createLayers(c) {
    config = c;

    layers.master = config.mainContainer;
    layers.debt = initDebtDots(config);

    createDeficit();
    createGdp();
}