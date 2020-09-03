// this is a hack to fix an issue in Edge

import { establishContainer } from "./utils";
import { selectAll } from 'd3-selection';

const d3 = { selectAll };

let counter = 0;

export function touchIe() {
    counter += 1;

    establishContainer().attr('data-ie-touch', counter);
    d3.selectAll('.touch-label').attr('dx', 0)
}