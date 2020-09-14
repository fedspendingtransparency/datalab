import { select, selectAll } from "d3-selection";
import { translator } from "src/afg-helpers/utils";

const d3 = { select, selectAll },
    rect = {
        width: 180,
        height: 42
    },
    trianglePoints = {
        in: {
            top: '155,21 158,15 152,15',
            bottom: '155,21 158,27 152,27'
        },
        out: {
            top: '155,10 158,15 152,15',
            bottom: '155,32 158,27 152,27'
        }
    },
    overlayOpacity = 0.2,
    labelWidthOffset = 10;

function getTriggerTop(globals) {
    const floor = globals.scales.y(globals.scales.y.domain()[0]),
        top = globals.scales.y(globals.zoomThreshold);

    console.log(top + (floor-top)/2 - rect.height/2)
    return top + (floor-top)/2 - rect.height/2;
}

function setOverlayPoints(globals, overlayConstants) {
    const boxTop = globals.scales.y(globals.zoomThreshold),
        boxBottom = globals.scales.y(globals.scales.y.domain()[0]),
        triggerX = globals.labelPadding - labelWidthOffset;

    return (globals.zoomState === 'out') ? `0,${boxTop} ${globals.width},${boxTop} ${globals.width},${boxBottom} 0,${boxBottom} -${triggerX},${overlayConstants.triggerBottom} -${triggerX},${overlayConstants.triggerTop}` :
        `0,0 ${globals.width},0 ${globals.width},${boxBottom} 0,${boxBottom} -${triggerX},${overlayConstants.triggerBottom} -${triggerX},${overlayConstants.triggerTop}`;
}

function addOverlay(globals, overlayConstants) {
    return globals.chart.append('polygon')
        .attr('fill', '#ccc')
        .attr('opacity', overlayOpacity)
        .attr('points', setOverlayPoints(globals, overlayConstants))
}

function rescaleOverlay(globals, duration) {
    const overlayConstants = this;

    overlayConstants.overlay.transition()
        .duration(duration)
        .attr('points', setOverlayPoints(globals, overlayConstants))
        .ease();
}

function createTrigger(globals) {
    const selections = {},
        triggerTop = getTriggerTop(globals);

    selections.trigger = globals.chart.append('g').attr('style','cursor:pointer');
    selections.triggerWrapper = selections.trigger.append('g');
    selections.box = selections.triggerWrapper.append('g');
    selections.disc = selections.triggerWrapper.append('g');

    globals.triggerOriginal = {
        x: -globals.labelPadding - rect.width + labelWidthOffset,
        y: triggerTop
    }

    globals.trigger = selections.trigger;

    selections.trigger.attr('style', 'cursor:pointer')
        .attr('transform', translator(globals.triggerOriginal.x, globals.triggerOriginal.y));

    selections.box.append('rect')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .attr('fill', globals.baseColor);

    selections.text = selections.box.append('text')
        .attr('style', 'fill:white');

    selections.text.append('tspan')
        .text('Zoom for')
        .attr('x', 10)
        .attr('dy', 16)
        .attr('font-size', 11);

    selections.text.append('tspan')
        .text('more categories')
        .attr('x', 10)
        .attr('dy', 16)
        .attr('font-size', 16);

    selections.disc.append('circle')
        .attr('fill', globals.secondaryColor)
        .attr('r', 16)
        .attr('cx', 155)
        .attr('cy', 21);

    selections.disc.append('line')
        .attr('stroke', 'white')
        .attr('x1', 155)
        .attr('y1', 11)
        .attr('x2', 155)
        .attr('y2', 31)
        .attr('stroke-width', 1);

    selections.triangleTop = selections.disc.append('polygon')
        .attr('points', trianglePoints.out.top)
        .attr('fill', 'white');

    selections.triangleBottom = selections.disc.append('polygon')
        .attr('points', trianglePoints.out.bottom)
        .attr('fill', 'white');

    return selections;
}

function addHoverEffects(trigger) {
    trigger.on('mouseover', function () {
        d3.select(this).select('rect')
            .transition()
            .duration(300)
            .attr('opacity', '0.9')
            .ease();
    });

    trigger.on('mouseout', function () {
        d3.select(this).select('rect')
            .transition()
            .duration(500)
            .attr('opacity', 1)
            .ease();
    });
}

function setTriggerState(globals, selections, overlayConstants) {
    const boxTiming = (globals.zoomState === 'in') ? [300, 0] : [500, 500],
        triggerWrapperDelay = (globals.zoomState === 'in') ? 300 : 0;

    selections.box.transition()
        .duration(boxTiming[0])
        .delay(boxTiming[1])
        .attr('opacity', function () {
            return (globals.zoomState === 'in') ? 0 : 1;
        })
        .ease();

    selections.overlay.transition()
        .duration(1000)
        .attr('opacity', function () {
            return (globals.zoomState === 'in') ? 0 : overlayOpacity;
        })
        .attr('points', setOverlayPoints(globals, overlayConstants))
        .ease();

    selections.triggerWrapper.transition()
        .duration(1000)
        .delay(triggerWrapperDelay)
        .attr('transform', function () {
            const x = (globals.zoomState === 'in') ? -150 : 0;

            return translator(x, 0);
        });

    selections.triangleTop.transition()
        .duration(500)
        .delay(1300)
        .attr('points', trianglePoints[globals.zoomState].top);

    selections.triangleBottom.transition()
        .duration(500)
        .delay(1300)
        .attr('points', trianglePoints[globals.zoomState].bottom);
}

function repositionButton(y) {
    const newY = (y < this.triggerOriginal.y) ? this.triggerOriginal.y : y;

    this.trigger.transition()
        .duration(500)
        .attr('transform', translator(this.triggerOriginal.x, newY));
}

export function zoomTrigger(globals) {
    const selections = createTrigger(globals),
        triggerTop = getTriggerTop(globals),
        overlayConstants = {
            triggerTop: triggerTop,
            triggerBottom: triggerTop + rect.height
        };

    console.log(triggerTop);

    globals.triggerTop = triggerTop;

    selections.overlay = overlayConstants.overlay = addOverlay(globals, overlayConstants);

    addHoverEffects(selections.trigger);

    selections.trigger.on('click', function () {
        globals.onZoom();
        setTriggerState(globals, selections, overlayConstants);
    })

    return {
        rescale: rescaleOverlay.bind(overlayConstants),
        repositionButton: repositionButton.bind(globals)
    }
}