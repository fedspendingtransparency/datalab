import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll },
    disabledClass = 'tour__link--disabled';

function disableButton(e) {
    e.preventDefault();
}

export function initTwoPartTour() {
    const linkButton = d3.select('a.tour__link');

    linkButton.node().addEventListener('click', disableButton);
    linkButton.classed(disabledClass, true)
}

export function activateTourPartTwo() {
    const linkButton = d3.select('a.tour__link');

    d3.select('.tour__part-two').classed('active', true);
    d3.select('.tour__part-one').remove();

    linkButton.node().removeEventListener('click', disableButton);
    linkButton.classed(disabledClass, null)
}