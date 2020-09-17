import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { getElementBox, translator, wordWrap } from 'src/afg-helpers/utils';
import colors from 'src/styles/afg/colors.scss';

const d3 = { select, selectAll, max };

let pendingTransitionParent,
    pendingInactive;

function _setInactive(g) {
    const bar = g.select('.color-bar');

    g.classed('active', false)

    g.select('text').transition()
        .duration(500)
        .attr('fill', colors.textColorParagraph)
        .ease();

    bar.transition()
        .duration(700)
        .attr('width', 3)
        .attr('x', 5)
        .attr('opacity', 1)
        .ease()
}

function deselectOthers(labelGroups) {
    labelGroups.filter('.selected')
        .classed('selected', false)
        .each(setLabelInactive);
}

function setLabelActive(name) {
    const g = (name && typeof name === 'string') ? this.filter(`g[data-id="${name}"]`) : d3.select(this),
        bar = g.select('.color-bar'),
        targetWidth = getElementBox(g).width;

    if (pendingTransitionParent === this && pendingInactive) {
        clearTimeout(pendingInactive);
    }

    if (g.classed('active')) {
        return;
    }

    g.classed('active', true);

    g.select('text').transition()
        .duration(300)
        .attr('fill', 'white')
        .ease();

    bar.transition()
        .duration(300)
        .attr('width', targetWidth)
        .attr('x', 8 - targetWidth)
        .ease()
}

function setLabelInactive(name, source) {
    const g = (name && typeof name === 'string') ? this.filter(`g[data-id="${name}"]`) : d3.select(this);

    if (source === 'tooltip' && g.classed('selected')) {
        return;
    }

    pendingTransitionParent = this;
    pendingInactive = setTimeout(_setInactive, 200, g);
}

function setLabelYTranslate(d, elem, runningY, globals) {
    const box = getElementBox(d3.select(elem));

    let yTranslate;

    d.y0 = globals.scales.y(d.values[0].amount);
    d.y1 = globals.scales.y(d.values[d.values.length - 1].amount);

    runningY = runningY || d.y0;

    if (d.y0 < runningY) {
        yTranslate = runningY + 5;
    } else {
        yTranslate = d.y0
    }

    return {
        yTranslate: yTranslate,
        boxHeight: box.height
    };
}

function sortByFirstYear(a, b) {
    a = a.values[0].amount;
    b = b.values[0].amount;

    if (a > b) { return -1 }
    if (a < b) { return 1 }
    return 0;
}

function placeLabels(globals) {
    const labelContainer = globals.chart.append('g')
        .classed('labels', true);

    let runningY,
        labelGroups;

    labelGroups = labelContainer.selectAll('g')
        .data(globals.data.sort(sortByFirstYear))
        .enter()
        .append('g')
        .attr('class', 'line-label')
        .attr('data-id', function (d) {
            return d.name
        })
        .attr('opacity', function (d) {
            if (globals.noZoom || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        });

    labelGroups.append('text')
        .text(function (d) {
            return d.name;
        })
        .attr('fill', colors.textColorHeading)
        .attr('y', -2)
        .attr('font-size', 14)
        .attr('text-anchor', 'end')
        .each(function (d) {
            const t = d3.select(this);

            wordWrap(t, globals.labelWidth - 60);
        });


    // color bar
    labelGroups.append('rect')
        .classed('color-bar', true)
        .attr('width', 3)
        .attr('height', function () {
            return this.previousSibling.getBoundingClientRect().height + 10;
        })
        .attr('x', 5)
        .attr('y', -20)
        .attr('fill', globals.baseColor)
        .each(function () {
            d3.select(this).lower();
        })

    // ghost rectangle
    if (!globals.noDrilldown) {
        labelGroups.append('rect')
            .attr('width', function () {
                return this.previousSibling.getBoundingClientRect().width + 10;
            })
            .attr('height', function () {
                return this.previousSibling.getBoundingClientRect().height + 10;
            })
            .attr('x', function () {
                return 0 - this.previousSibling.getBoundingClientRect().width - 5;
            })
            .attr('y', function () {
                return - 20;
            })
            .attr('fill', function (d) {
                return 'white';
            })
            .each(function () {
                d3.select(this).lower();
            })
    }

    labelGroups.attr('transform', function (d) {
        const yTranslate = setLabelYTranslate(d, this, runningY, globals);

        runningY = yTranslate.yTranslate + yTranslate.boxHeight;

        d3.select(this).attr('data-y', yTranslate.yTranslate);

        return translator(-globals.labelPadding, yTranslate.yTranslate);
    });

    return labelGroups;
}

function enableSelect(labelGroups, globals) {
    labelGroups.attr('style', 'cursor:pointer')
        .on('click', function (d) {
            if (d3.select(this).classed('selected')) {
                // toggle off
                deselectOthers(labelGroups);
                globals.onSelect(d, 'reset');
            } else {
                // toggle on
                deselectOthers(labelGroups);
                //d3.select(this).classed('selected', true);
                globals.onSelect(d);
            }
        })
        .on('mouseover', function (d) {
            setLabelActive.bind(this)();
            globals.trendLines.deEmphasize(d.name, globals, 'on')
        })
        .on('mouseout', function (d) {
            globals.trendLines.deEmphasize(d.name, globals, 'off')

            if (!d3.select(this).classed('selected')) {
                setLabelInactive.bind(this)();
            }
        });
}

function nudge(labelGroups) {
    labelGroups.sort(function (a, b) {
        a = a.values[0].amount;
        b = b.values[0].amount;

        if (a < b) {
            return 1;
        }

        if (a > b) {
            return -1;
        }

        return 0;
    })
        .each(function (d, i) {
            const self = this,
                initialPause = 1000;

            setTimeout(function () {
                setLabelActive.bind(self)();
            }, initialPause + i * 150)

            setTimeout(function () {
                setLabelInactive.bind(self)();
            }, initialPause + i * 150)
        })
}

function findLowestVisibleLabel() {
    const activeDrilldown = d3.select('.detail-layer').size(),
        detailPrefix = activeDrilldown ? '.detail-layer' : '',
        visible = d3.selectAll(detailPrefix + '.line-label[opacity="1"]'),
        yValues = [];

    visible.each(function() {
        yValues.push(Number(d3.select(this).attr('data-y')))
    })

    if (!yValues.length) {
        return 0;
    }

    return d3.max(yValues);
}

function rescale(globals, duration, labelCallback) {
    let runningY;

    this.transition()
        .duration(duration)
        .attr('opacity', function (d) {
            if (globals.noZoom || globals.zoomState === 'in' || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .attr('transform', function (d) {
            let yTranslate = setLabelYTranslate(d, this, runningY, globals),
                yOffset = yTranslate.yTranslate;

            runningY = yTranslate.yTranslate + yTranslate.boxHeight;

            if(yOffset < 0 && yOffset > -200){
                yOffset = -200;
            }

            return translator(-globals.labelPadding, yOffset);
        })
        .on('end', function() {
            if (globals.zoomState === 'in') {
                labelCallback(runningY)
            } else {
                labelCallback(findLowestVisibleLabel());
            }
        })
        .ease();
}

export function renderLabels(globals) {
    const labels = placeLabels(globals);

    enableSelect(labels, globals);

    if (!globals.noDrilldown) {
        nudge(labels);
    }

    return {
        rescale: rescale.bind(labels),
        setLabelActive: setLabelActive.bind(labels),
        setLabelInactive: setLabelInactive.bind(labels),
        findLowestVisibleLabel: findLowestVisibleLabel
    }
}
