import { select } from 'd3-selection';
import { getElementBox, translator } from '../../utils';
import { getActiveSort } from './data';
import { transition } from 'd3-transition';
import colors from '../../globalSass/colors.scss';

const d3 = { select },
    iconHeight = 16,
    triangleWidthHalf = 4,
    triangleTop = iconHeight - triangleWidthHalf - 2,
    lineLengths = [8, 6, 4, 2],
    lineLengthsAsc = lineLengths.slice().reverse(),
    lineStart = triangleWidthHalf * 2 + 2,
    lineYOffset = 4,
    sortIcons = {},
    colorFade = 300,
    barAnimation = 400,
    colorInactive = '#ddd';

let colorPrimary, legendIconExists;

function setIconColor(k) {
    const activeSort = this;

    sortIcons[k].selectAll('line')
        .transition()
        .duration(colorFade)
        .attr('stroke', function () {
            return (k === activeSort.activeSortField) ? colorPrimary : colorInactive;
        })

    sortIcons[k].selectAll('polygon')
        .transition()
        .duration(colorFade)
        .attr('fill', function () {
            return (k === activeSort.activeSortField) ? colorPrimary : colorInactive;
        })
}

function sortDesc(g) {
    g.selectAll('line.sort')
        .transition()
        .duration(barAnimation)
        .attr('x2', function (d) {
            return lineStart + lineLengths[d];
        })
}

function sortAsc(g) {
    g.selectAll('line.sort')
        .transition()
        .duration(barAnimation)
        .attr('x2', function (d) {
            return lineStart + lineLengthsAsc[d];
        })
}

function setSortDirection(k) {
    if (k !== this.activeSortField || (k === this.activeSortField && this.activeSortDirection === 'desc')) {
        sortDesc(sortIcons[k]);
    } else {
        sortAsc(sortIcons[k]);
    }
}

function addIconToLegend() {
    const placeholder = d3.select('.sort-button-placeholder');

    legendIconExists = true;

    renderSortIcon(placeholder, 'legend', colorPrimary);

    placeholder.selectAll('line').attr('stroke', colorPrimary);
    placeholder.selectAll('polygon').attr('fill', colorPrimary);
}

export function updateIcons() {
    const activeSort = getActiveSort(),
        iconKeys = Object.keys(sortIcons);

    iconKeys.forEach(setIconColor, activeSort);

    setTimeout(function () {
        iconKeys.forEach(setSortDirection, activeSort);
    }, colorFade);

}

export function renderSortIcon(container, legend, color) {
    const parent = (legend) ? container.append('svg').attr('width', 18).attr('height', 16) : d3.select(container),
        parentBox = (legend) ? null : getElementBox(parent),
        sortType = parent.attr('data-type'),
        iconGroup = parent.append('g');

    colorPrimary = color;

    if (!legend) {
        iconGroup.attr('transform', translator(parentBox.width + 16, 8 + iconHeight));
    }

    iconGroup.append('rect')
        .attr('fill', 'white')
        .attr('width', lineStart + lineLengths[0])
        .attr('height', iconHeight)

    iconGroup.append('line')
        .attr('x1', triangleWidthHalf)
        .attr('x2', triangleWidthHalf)
        .attr('y1', 0)
        .attr('y2', iconHeight - 1)
        .attr('stroke', colorInactive)
        .attr('stroke-width', 2)

    iconGroup.append('polygon')
        .attr('points', `${triangleWidthHalf},${iconHeight} 0,${triangleTop} ${triangleWidthHalf * 2},${triangleTop}`)
        .attr('fill', colorInactive);

    iconGroup.selectAll('line.sort')
        .data([0, 1, 2, 3])
        .enter()
        .append('line')
        .attr('class', 'sort')
        .attr('stroke-width', 2)
        .attr('stroke', colorInactive)
        .attr('x1', lineStart)
        .attr('x2', function (d) {
            return lineStart + lineLengths[d];
        })
        .attr('y1', function (d) {
            return lineYOffset * d + 1;
        })
        .attr('y2', function (d) {
            return lineYOffset * d + 1;
        })

    if (!legend) {
        sortIcons[sortType] = iconGroup;
    }

    if (!legendIconExists) {
        addIconToLegend();
    }
}
