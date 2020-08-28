import { establishContainer } from '../../../utils/utils';

// with thanks to http://bl.ocks.org/cpbotha/5200394

export function initDropShadow() {
    const svg = establishContainer();

    var defs = svg.append('defs');

    var filter = defs.append('filter')
        .attr('id', 'drop-shadow')
        .attr('height', 1.1);

    filter.append('feGaussianBlur')
        .attr('in', 'SourceAlpha')
        .attr('stdDeviation', 4)
        .attr('result', 'blur');

    filter.append('feOffset')
        .attr('in', 'blur')
        .attr('dx', 0)
        .attr('dy', 0)
        .attr('result', 'offsetBlur');

    var feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
        .attr('in', 'offsetBlur')
    feMerge.append('feMergeNode')
        .attr('in', 'SourceGraphic');
}