import colors from "src/styles/afg/colors.scss";
import { translator, establishContainer } from "src/afg-helpers/utils";
import { select } from 'd3-selection';

const d3 = { select },
    triangleLeftClass = 'triangle-left',
    triangleRightClass = 'triangle-right',
    outGroupClass = 'out-group',
    discGroupClass = 'disc-group',
    trianglePoints = {
        in: {
            left: '16,16 10,13 10,19',
            right: '16,16 22,13 22,19'
        },
        out: {
            left: '5,16 10,13 10,19',
            right: '27,16 22,13 22,19'
        }
    };

let triangleLeft,
    triangleRight,
    svg,
    state = 'out';

function zoomOut(g) {
    g.select('.' + outGroupClass)
        .attr('opacity', 1)
        .transition()
        .duration(1000)
        .attr('opacity', 0)
        .on('end', function () {
            d3.select(this).attr('transform', 'scale(0)')
        })

    g.select('.' + discGroupClass)
        .transition()
        .delay(500)
        .duration(700)
        .attr('transform', translator(0, -140))

    triangleLeft.transition()
        .delay(1200)
        .duration(500)
        .attr('points', trianglePoints.in.left);

    triangleRight.transition()
        .delay(1200)
        .duration(500)
        .attr('points', trianglePoints.in.right)
}

function zoomIn(g) {
    g.select('.' + outGroupClass)
        .attr('transform', 'scale(1)')
        .transition()
        .delay(500)
        .duration(1000)
        .attr('opacity', 1)

    g.select('.' + discGroupClass)
        .transition()
        .delay(1000)
        .duration(700)
        .attr('transform', translator(10, 7));

    triangleLeft.transition()
        .delay(1700)
        .duration(500)
        .attr('points', trianglePoints.out.left);

    triangleRight.transition()
        .delay(1700)
        .duration(500)
        .attr('points', trianglePoints.out.right)
}

function init(g, baseDimensions, zoomTriggerX) {
    const outGroup = g.append('g')
        .classed(outGroupClass, true);

    let text, disc;

    outGroup.append('rect')
        .attr('width', baseDimensions.width - zoomTriggerX)
        .attr('height', baseDimensions.height)
        .attr('fill', colors.revenuePrimary)
        .attr('x', 0)
        .attr('y', 0);

    text = outGroup.append('text')
        .text('Zoom for')
        .attr('style', 'fill:white')
        .attr('font-size', 12)
        .attr('x', 10)
        .attr('y', 56);

    text.append('tspan')
        .text('more')
        .attr('style', 'fill:white')
        .attr('font-size', 18)
        .attr('x', 10)
        .attr('dy', 18);

    text.append('tspan')
        .text('categories')
        .attr('style', 'fill:white')
        .attr('font-size', 18)
        .attr('x', 10)
        .attr('dy', 18);

    disc = g.append('g')
        .classed(discGroupClass, true)
        .attr('transform', translator(10, 7));

    disc.append('circle')
        .attr('fill', colors.colorPrimaryDarker)
        .attr('r', 16)
        .attr('cx', 16)
        .attr('cy', 16);

    disc.append('line')
        .attr('stroke', 'white')
        .attr('x1', 5)
        .attr('y1', 16)
        .attr('x2', 27)
        .attr('y2', 16)
        .attr('stroke-width', 1);

    triangleLeft = disc.append('polygon')
        .attr('points', trianglePoints.out.left)
        .attr('fill', 'white');

    triangleRight = disc.append('polygon')
        .attr('points', trianglePoints.out.right)
        .attr('fill', 'white');
}

function transformTrigger(state, g) {
    if (state === 'out') {
        zoomIn(g);
    } else {
        zoomOut(g);
    }
}

function resizeSvg() {
    const height = (state === 'in') ? 270 : 170,
        delay = (state === 'in') ? 0 : 1000,
        duration = (state === 'in') ? 1000 : 750;

    svg.transition()
        .duration(duration)
        .delay(delay)
        .attr('height', height);
}

export function zoomInit(baseContainer, baseDimensions, zoomTriggerX, zoomCallback) {
    const g = baseContainer.append('g')
        .attr('style', 'cursor:pointer')
        .attr('transform', translator(zoomTriggerX, 0));

    svg = establishContainer();

    g.on('click', function () {
        state = (state === 'out') ? 'in' : 'out';

        resizeSvg()

        zoomCallback(state);
        transformTrigger(state, g)
    })

    init(g, baseDimensions, zoomTriggerX);

    return 'zoomComponent';
}

export function resetZoom(){
    state = 'out';
}

export function getZoomState() {
    return state;
}
