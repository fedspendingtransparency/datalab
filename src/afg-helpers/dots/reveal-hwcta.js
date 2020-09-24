import { selectAll } from 'd3-selection';

const d3 = { selectAll };

function removeClass() {
    d3.selectAll('.hwcta').classed('hwcta--staged', null);
}

export function revealHwcta() {
    if (d3.selectAll('.hwcta').size()) {
        removeClass();
    } else {
        setTimeout(revealHwcta, 100)
    }
}