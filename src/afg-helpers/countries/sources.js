import { select } from 'd3-selection';
import { getSources } from './data';

const d3 = { select };

function addLink(source, i, list) {
    const hint = this,
        length = list.length,
        a = hint.append('a')
            .attr('target', '_blank')
            .attr('rel', 'noopener noreferrer')
            .attr('href', source.url);

    a.node().innerText = source.name;

    if (i === length - 2) {
        hint.node().innerHTML += ' and ';
    } else if (i < length - 2) {
        hint.node().innerHTML += ' ';
    }
}

export function showSources() {
    const sources = getSources(),
        target = d3.select('#sources');

    if (!sources.length) {
        return;
    }

    sources.forEach(addLink, target);
}