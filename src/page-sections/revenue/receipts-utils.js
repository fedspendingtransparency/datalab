import { translator } from 'src/utils/utils';
import { select } from 'd3-selection';
import colors from '../../ffg/globalSass/colors.scss';

const d3 = { select };

let dotPosition;

function dotPositionGetter() {
    return dotPosition;
}

function dotPositionSetter(position, startIndex) {
    dotPosition = {
        x: position[0],
        y: position[1],
        startIndex: startIndex
    };
}

export const receiptsConstants = {
    dotOffset: {
        x: 5,
        y: 6
    },
    xStart: 2,
    headingHeight: 70,
    dotsPerRow: 203,
    dotContainerClass: 'dot-container',
    incomeContainerClass: 'income-container',
    shaderContainerClass: 'shader-container'
}

export function dotFactory(container, x, y, color) {
    color = color || colors.income;

    container.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', color)
}

export const dotPositionAccessor = {
    get: dotPositionGetter,
    set: dotPositionSetter
}
