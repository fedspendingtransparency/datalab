import './selectCountry.scss';
import { event, select } from 'd3-selection';
import { establishContainer } from 'src/afg-helpers/utils';
import { refreshData } from './chart';
import { addButtonIcon, addSearchIcon, addXIcon } from './iconGenerators';
import { selectedCountries } from './selectedCountryManager';
import { getCountryList } from './data';

const d3 = { select, event }
const highlightedCountryClass = 'in-focus';

let parentDiv = "";
let label = "";
let input = "";
let listDiv = "";
let trigger = "";
let isMobileInd = "";
let previousFilter = "";

function createTrigger() {
    let svg;

    trigger = parentDiv.append('button')
        .classed('trigger-button', true)
        .on('click', function () {
            listDiv.classed('hidden', function () {
                if (listDiv.classed('hidden')) {
                    return false;
                } else {
                    setTimeout(function () {
                        input.node().focus()
                    }, 10);

                    return true;
                }
            });
            adjustHeightToSVG();
        });

    trigger.node().innerText = "Add/Remove Countries";

    svg = trigger.append('svg')
        .attr('width', 20)
        .attr('height', 20);

    addButtonIcon(svg);
}

function adjustHeightToSVG() {
    const svg = d3.select('svg.main');
    const listDiv = d3.select('#viz').select('.list-div');
    const svgDimensions = svg.node().getBoundingClientRect();
    const maxIterations = 10;

    let listDivDimensions = listDiv.node().getBoundingClientRect();
    let availableListDivs = listDiv.selectAll('.available:not(hidden)');
    let iterator = 0;

    while(++iterator <= maxIterations && availableListDivs.size() && listDivDimensions.height > svgDimensions.height) {
        d3.select(availableListDivs._groups[0][availableListDivs.size() - 1]).classed('hidden', true);
        availableListDivs = listDiv.selectAll('.available:not(.hidden)');
        listDivDimensions = listDiv.node().getBoundingClientRect();
    }
}

function establishInput() {
    const wrapper = listDiv.append('div').classed('search-wrapper', true);

    let icon;
    let availableContainer;
    let availableCountries;

    // Do not cache the highlighted country index based on key input, because the highlighted country can change by mouse as well.
    function findHighlightedCountry() {
        // The availableCountries will change as user's type characters to filter the list.
        availableCountries = availableContainer.selectAll('div.available');
        for(let i = availableCountries.size(); i--;) {
            if (d3.select(availableCountries._groups[0][i]).classed(highlightedCountryClass)) {
                return i;
            }
        }
        return 0;
    }

    label = wrapper.append('label')
        .attr('for', 'country-search')
        .attr('aria-label', 'search for a country');

    input = wrapper.append('input')
        .attr('id', 'country-search')
        .attr('type', 'text')
        .attr('placeholder', 'search for a country')
        .on('focus', function() {
            availableContainer = listDiv.select('.available-container');
            availableCountries = availableContainer.selectAll('div.available');
            if (availableCountries.size() > 0) {
                availableContainer.selectAll(`.${highlightedCountryClass}`).classed(highlightedCountryClass, false);
                d3.select(availableCountries._groups[0][0]).classed(highlightedCountryClass, true);
            }
        })
        .on('keyup', function () {
            const keyVal = event.key;
            let highlightedCountryIdx = 0;
            switch (keyVal) {
                case 'Up':
                case 'ArrowUp':
                    highlightedCountryIdx = findHighlightedCountry();
                    d3.select(availableCountries._groups[0][highlightedCountryIdx]).classed(highlightedCountryClass, false);
                    if (--highlightedCountryIdx < 0) {
                        highlightedCountryIdx = availableCountries.size() - 1;
                    }
                    d3.select(availableCountries._groups[0][highlightedCountryIdx]).classed(highlightedCountryClass, true);
                    break;
                case 'Down':
                case 'ArrowDown':
                    highlightedCountryIdx = findHighlightedCountry();
                    d3.select(availableCountries._groups[0][highlightedCountryIdx]).classed(highlightedCountryClass, false);
                    if (++highlightedCountryIdx >= availableCountries.size()) {
                        highlightedCountryIdx = 0;
                    }
                    d3.select(availableCountries._groups[0][highlightedCountryIdx]).classed(highlightedCountryClass, true);
                    break;
                case 'Enter':
                    const selectedCountry = listDiv.selectAll(`.${highlightedCountryClass}`);
                    if (selectedCountry.size()) {
                        selectedCountry.node().click();
                        previousFilter = "";
                    }
                    break;
            }
        })
        .on('input', function() {
            if (previousFilter !== this.value) {
                listAvailableCountries(this.value);
                previousFilter = this.value;
            }
        });

    icon = wrapper.append('svg');

    addSearchIcon(icon);
}

function listselectedCountries() {
    const ul = listDiv.select('ul');

    let items, svg;

    ul.selectAll('*').remove();

    items = ul.selectAll('li')
        .data(selectedCountries.list)
        .enter()
        .append('li')
        .on('click', removeCountry)
        .each(function (d) {
            this.innerText = d.display;
        });

    svg = items.append('svg');

    addXIcon(svg);
}

function sortDisplayName(objA, objB) {
    const a = objA.display;
    const b = objB.display;

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

function getAvailableCountries(filterStr) {
    if (filterStr) {
        filterStr = filterStr.toLowerCase();
    }

    return getCountryList().filter(c => {
        if (!c) {
          return false;
        }
        const displayName = c.display;
        return (displayName && selectedCountries.list.filter(d => d.display.match(displayName)).length === 0)
            && (!filterStr || displayName.toLowerCase().indexOf(filterStr) !== -1)
    }).sort(sortDisplayName);
}

function addCountry(d) {
    selectedCountries.add(d);
    onListUpdated(isMobileInd);
}

function removeCountry(d) {
    selectedCountries.remove(d);
    onListUpdated(isMobileInd);
}

function listAvailableCountries(filterStr) {
    const list = getAvailableCountries(filterStr);
    const availableContainer = listDiv.select('.available-container');

    availableContainer.selectAll('*').remove();

    const availableCountries = availableContainer.selectAll('div.available')
        .data(list)
        .enter()
        .append('div')
        .classed('available', true)
        .on('click', addCountry)
        .on('mouseenter', function() {
            availableContainer.selectAll(`.${highlightedCountryClass}`).classed(highlightedCountryClass, false);
            d3.select(this).classed(highlightedCountryClass, true);
        })
        .on('mouseleave', function() {
            d3.select(this).classed(highlightedCountryClass, false);
        })
        .each(function (d) {
            this.innerText = d.display;

            d3.select(this).append('button')
                .classed('add-button', true)
                .node()
                .innerText = 'add';
        });

    if (availableCountries.size() > 0) {
        d3.select(availableCountries._groups[0][0]).classed(highlightedCountryClass, true);
    }
}

function createListDiv() {
    listDiv = parentDiv.append('div')
        .classed('list-div', true)
        .classed('hidden', true);

    listDiv.append('ul');
    listDiv.append('hr');
    establishInput();
    listDiv.append('div').classed('available-container', true)

    listselectedCountries();
    listAvailableCountries();
}

function onListUpdated(isMobileInd) {
    listDiv.classed('hidden', true)
    input.node().value = null;
    listselectedCountries();
    listAvailableCountries();
    refreshData(null, true, isMobileInd);
}

export function selectCountryInit(_isMobileInd) {
    isMobileInd = _isMobileInd;
    const svg = establishContainer();

    parentDiv = document.createElement('div');

    svg.node().parentNode.insertBefore(parentDiv, svg.node());

    parentDiv = d3.select(parentDiv).classed('select-country', true);

    createTrigger();
    createListDiv();
}