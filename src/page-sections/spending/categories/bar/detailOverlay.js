import { select, selectAll, mouse } from 'd3-selection';
import { translator, fadeAndRemove, getElementBox, establishContainer, wordWrap } from '../../../../utils/utils';
import { closeDetail } from './sort';

const d3 = { select, selectAll, mouse },
    overlayPadding = 20;

let previousHeight, closeText;

function closeOverlay() {
    const detailLayer = d3.select('.detail-layer'),
        mask = d3.select('rect.mask');

    fadeAndRemove(detailLayer, 300);
    fadeAndRemove(mask, 300);

    d3.select('g.pan-apply')
        .transition()
        .duration(500)
        .attr("transform", translator(0, 0))
        .ease();

    closeDetail();

    resizeSvg();
}

function placeCloseButton(container, innerWidth) {
    const closeButtonWidth = 30,
        closeGroup = container.append('g')
            .classed('pointer', true)
            .on('click', closeOverlay)
            .attr('transform', translator(innerWidth + overlayPadding - closeButtonWidth, 0));

    closeGroup.append('rect')
        .attr('fill', '#fff')
        .attr('stroke', '#fff')
        .attr('height', 20)
        .attr('width', closeButtonWidth)

    closeText = closeGroup.append('text')
        .text('x')
        .attr('stroke', '#ccc')
        .attr('font-size', 24)
        .attr('text-anchor', 'middle')
        .attr('x', closeButtonWidth / 2)
        .attr('y', 20)
}

function renderHeader(detailLayer, title, innerWidth) {
    const headerTextMaxWidth = innerWidth - 60,
        header = detailLayer.append('g')
            .attr('transform', translator(0, overlayPadding));

    let headerText, calculatedHeaderHeight;

    headerText = header.append('text')
        .text(title)
        .attr('x', overlayPadding)
        .attr('y', 20)
        .attr('font-size', function () {
            const svgWidth = document.getElementById('viz').getBoundingClientRect().width;

            return svgWidth < 500 ? 16 : 20;
        });

    wordWrap(headerText, headerTextMaxWidth)

    headerText.attr('transform', translator(20, 0))

    placeCloseButton(header, innerWidth);

    calculatedHeaderHeight = header.selectAll('tspan').size() * 20;

    return calculatedHeaderHeight;
}

function renderMask() {
    const parent = d3.select('g.pan-apply'),
        parentBox = getElementBox(establishContainer());

    parent.append('rect')
        .classed('mask', true)
        .attr('fill', 'black')
        .attr('opacity', 0.3)
        .attr('height', parentBox.height)
        .attr('width', parentBox.width)
        .on('click', closeOverlay)
}

function setOverlayY(clickY, overlayHeight) {
    const ideal = clickY - overlayHeight / 2,
        svgHeight = getElementBox(d3.select('svg.main')).height;

    let returnY = ideal;

    if (returnY + overlayHeight > svgHeight) {
        returnY = svgHeight - overlayHeight - 5;
    }

    if (returnY < 5) {
        returnY = 5;
    }
    return returnY;
}

function resizeSvg(finalRectHeight) {
    const mainSvg = establishContainer(),
        svgBox = getElementBox(mainSvg),
        svgHeight = svgBox.height,
        newWidth = getElementBox(mainSvg.select('.pan-listen')).width;

    let detailHeightWithPadding,
        newHeight = previousHeight;

    if (finalRectHeight) {
        previousHeight = svgHeight;
        detailHeightWithPadding = finalRectHeight + 20;
        newHeight = detailHeightWithPadding > previousHeight ? detailHeightWithPadding : previousHeight;
    }

    d3.select('.mask')
        .attr('width', newWidth)
        .attr('height', newHeight);

    mainSvg.transition()
        .duration(500)
        .attr('height', newHeight)
        .ease();
}

export function initOverlay(title, config, callback) {

  const startCoords = d3.mouse(d3.select('svg.main').node());

    let headerHeight, detailLayerYOffset, rect, detailLayer, finalRectHeight;

    renderMask();

    detailLayer = d3.select('g.pan-apply').append('g')
        .classed('detail-layer', true)
        .attr('transform', translator(startCoords[0], startCoords[1]) + ' scale(0)')
        .attr('opacity', 1);

    config.width = config.width - 10 - overlayPadding * 2;

    rect = detailLayer.append('rect')
        .classed('detail-background', true)
        .attr('fill', 'white')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('width', config.width + overlayPadding * 2)
        .attr('rx', 10)
        .attr('ry', 10);

    headerHeight = renderHeader(detailLayer, title, config.width);

    detailLayerYOffset = headerHeight + overlayPadding + overlayPadding;

    finalRectHeight = detailLayerYOffset + config.data.length * config.rowHeight + overlayPadding;

    rect.attr('height', finalRectHeight);

    resizeSvg(finalRectHeight);

    config.svg = detailLayer.append('g')
        .attr('transform', translator(overlayPadding, detailLayerYOffset))
        .classed('detail-chart', true);

    //match current sort if needed
    if (d3.select('#sort-name').classed('active')) {
        config.data.sort((a, b) => {
            if (b.activity < a.activity) {
                return 1;
            }

            if (b.activity > a.activity) {
                return -1;
            }

            return 0;
        })
    }

    // append to the detailLayer here
    detailLayer.transition()
        .duration(750)
        .attr('transform', translator(5, setOverlayY(startCoords[1], finalRectHeight)) + ' scale(1)')
        .on('end', function () {
            setTimeout(function () {
                closeText.attr('stroke-width', 1);
            }, 10)

            callback(config, true)
        })
        .ease();
}