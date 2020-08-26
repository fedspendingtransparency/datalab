import { select, selectAll } from 'd3-selection';
import { min, max, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { translator, simplifyNumber, establishContainer, wordWrap, getElementBox } from '../../utils';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { ink, placeHorizontalStripes } from './ink';
import { selectCountryInit } from './selectCountry'
import { selectedCountries } from './selectedCountryManager';
import { createDonut } from "../donut";
import { redrawMobile, updateMobileTableList, sortMobileTable } from './chartmobile';
import './selectCountry.scss';
import { setData, prepareData, setMobileData } from './data';
import { renderSortIcon, updateIcons } from './sortIcon';
import { pan } from './pan';

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition },
    dimensions = {
        chartWidth: 800,
        rowHeight: 72,
        barHeight: 22,
        countryColumnWidth: 210,
        gdpColumnWidth: 140,
        header: 50,
        barYOffset: 3
    },
    addRemoveDuration = 1000,
    barFadeTime = 1000,
    scales = {},
    containers = {};

let data, config, primaryColor, negativeColor, debounce, previousWidth, svg;

dimensions.dataWidth = dimensions.chartWidth - dimensions.countryColumnWidth - dimensions.gdpColumnWidth;

function barTransition(selection) {
    selection.transition()
        .duration(barFadeTime)
        .attr('x', function (d) {
            return scales.x(0);
        })
        .attr('width', function (d) {
            return Math.abs(scales.x(Math.abs(d[config.amountField])) - scales.x(0));
        })
        .ease();
}

function barLabelPosition(d) {
    return scales.x(Math.abs(d[config.amountField])) + 10;
}

function establishContainers() {
    sizeSvg(800);

    containers.chart = svg.append('g').classed('pan-listen', true)
        .append('g').classed('pan-apply', true).classed('master', true);

    dimensions.totalHeight = dimensions.rowHeight * data.length;
    containers.data = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth, dimensions.header));
    containers.country = containers.chart.append('g').attr('transform', translator(0, dimensions.header));
    containers.gdp = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, dimensions.header));
    containers.columnHeaders = containers.chart.append('g').classed('headers', true);
    containers.legend = containers.chart.append('g').classed('legends', true);
}

function addBarGroups() {
    const groups = containers.data.selectAll('g.bar-group')
        .data(data, function (d) { return d.country });

    let enterGroups;

    if (groups.size()) {
        groups.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(0, (i * dimensions.rowHeight))
            })
            .ease();
    }

    groups.exit().remove();

    enterGroups = groups.enter()
        .append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * dimensions.rowHeight)
        });

    if (!enterGroups.size()) {
        return;
    }
    enterGroups.append('rect')
        .attr('width', 0)
        .attr('height', dimensions.barHeight)
        .attr('x', scales.x(0))
        .attr('y', dimensions.rowHeight / 2 - dimensions.barHeight / 2)
        .attr('fill', function(d){
            return d[config.amountField] > 0 ? primaryColor : negativeColor;
        })
        .attr('fill-opacity', 0.5)
        .attr('stroke', function(d){
            return d[config.amountField] > 0 ? primaryColor : negativeColor;
        })
        .attr('stroke-width', 1)
        .call(barTransition);

    enterGroups.append('text')
        .text(function (d) {
            return simplifyNumber(Math.abs(d[config.amountField]))
        })
        .attr('font-size', 12)
        .attr('x', barLabelPosition)
        .attr('y', dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 8)
        .attr('opacity', 0)
        .transition()
        .delay(barFadeTime)
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function setScales() {
    const amountVals = data.map(r => Math.abs(r[config.amountField])),
        min = d3.min([0, d3.min(amountVals)]),
        max = d3.max(amountVals) * 1.15;

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, dimensions.dataWidth]);
}

function placeCountryLabels() {
    const countryLabels = containers.country.selectAll('text')
        .data(data, function (d) { return d.country });
    const countryBoxWidth = containers.country.select('.drop-shadow-base').attr('width') - 40;

    let timeoutForAdd = 0;

    if (countryLabels.size()) {
        timeoutForAdd = 500;

        countryLabels.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(0, (i * dimensions.rowHeight))
            })
            .ease();
    }

    countryLabels.exit().remove();

    setTimeout(function () {
        const textHeight = 16; //16 pixel height
        countryLabels.enter()
            .append('text')
            .attr('transform', function (d, i) {
                return translator(0, i * dimensions.rowHeight)
            })
            .text(d => d.country)
            .attr('y', dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 6)
            .attr('x', 20)
            .attr('font-size', textHeight)
            .each(function (d) {
                const max = countryBoxWidth,
                    selection = d3.select(this),
                    textWidth = getElementBox(selection).width;

                let x, y;
                if (textWidth > max) {
                    x = selection.attr('x');
                    y = selection.attr('y') - textHeight / 2;
                    wordWrap(selection, max);
                    selection.selectAll('tspan').attr('x', x).attr('y', y);
                }
            });
    }, timeoutForAdd)
}

function placeGdpFigures() {
    const donutRadius = dimensions.rowHeight / 2 - 10,
        gdpG = containers.gdp.selectAll('.donut-container')
            .data(data, function (d) {
                return d.country
            });

    let timeoutForAdd = 0;

    if (gdpG.size()) {
        timeoutForAdd = 500;

        gdpG.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(dimensions.gdpColumnWidth / 2 - donutRadius, i * dimensions.rowHeight + dimensions.rowHeight / 2 - donutRadius);
            })
            .ease();

    }

    gdpG.exit().remove();

    setTimeout(function () {
        gdpG.enter()
            .append('g')
            .attr('class', 'donut-container')
            .attr('transform', function (d, i) {
                return translator(dimensions.gdpColumnWidth / 2 - donutRadius, i * dimensions.rowHeight + dimensions.rowHeight / 2 - donutRadius);
            })
            .each(function (d) {
                const gdpPercent = d[config.gdpField] / 100,
                    donutColor = gdpPercent > 0 ? primaryColor : negativeColor;
                createDonut(d3.select(this), d[config.gdpField] / 100, donutRadius * 2, donutColor);
            });
    }, timeoutForAdd);
}

function sort() {
    const g = d3.select(this),
        type = g.attr('data-type');

    refreshData(type);

    updateIcons();
}

function placeHeaders(config) {
    const labelXPadding = 12;

    containers.columnHeaders.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('y', 38)
        .attr('x', labelXPadding)
        .attr('font-size', 14);

    containers.columnHeaders.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.gdpField)
        .append('text')
        .attr('x', labelXPadding)
        .attr('y', 24)
        .attr('font-weight', 600)
        .text(config.amountLabel + ' as')
        .attr('font-size', 14)
        .append('tspan')
        .text('Percent of GDP')
        .attr('dy', 14)
        .attr('x', labelXPadding)

    containers.columnHeaders.selectAll('g.legend')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
        .each(function () {
            renderSortIcon(this, null, primaryColor);
        });

    d3.select('.select-country').classed('mobile', null);
    d3.select('#viz').classed('mobile', null);

    updateIcons();
}

function placeLegend(config) {
    const boxSize = 12,
        animationDuration = 0;

    positionLegend(animationDuration);

    containers.legend.append('rect')
        .attr('x1', 0)
        .attr('y', -boxSize)
        .attr('width', boxSize)
        .attr('height', boxSize)
        .attr('fill', primaryColor);

    containers.legend.append('g')
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('x', 15)
        .attr('font-size', 14);

    containers.legend.append('rect')
        .attr('x', 100)
        .attr('y', -boxSize)
        .attr('width', boxSize)
        .attr('height', boxSize)
        .attr('fill', negativeColor);

    containers.legend.append('g')
        .classed('legend', true)
        .attr('data-type', config.gdpField)
        .append('text')
        .attr('x', 115)
        .attr('font-weight', 600)
        .text(config.negativeAmountLabel)
        .attr('font-size', 14);
}

function sizeSvg(transitionTime, delay) {
    delay = delay || 0;
    establishContainer().transition().delay(delay).duration(transitionTime).attr('height', dimensions.header + data.length * dimensions.rowHeight + 30);
}

function repositionXAxis() {
    containers.chart.selectAll('.drop-shadow-base').transition()
        .duration(addRemoveDuration)
        .attr('height', dimensions.totalHeight);
}

function positionLegend(duration, action){
    const chartHeight = parseInt(d3.select('svg.main').attr('height'),10);
    let yPos = chartHeight;

    switch(action){
        case 'add':
            yPos = chartHeight + dimensions.rowHeight;
            break;
        case 'remove':
            yPos = chartHeight - dimensions.rowHeight;
            break;
        default:
            yPos = chartHeight;
    }

    containers.legend
        .transition()
        .duration(duration)
        .attr('transform', translator(dimensions.chartWidth / 2 - 100, yPos - 5))
        .ease();
}

function rescale() {
    const previousMax = scales.x.domain()[1],
        previousMin = scales.x.domain()[0];

    setScales();

    if (previousMax === scales.x.domain()[1] && previousMin === scales.x.domain()[0]) {
        return;
    }

    containers.data.selectAll('g.bar-group')
        .each(function () {
            const group = d3.select(this),
                labels = group.selectAll('text'),
                zeroLines = group.selectAll('line'),
                bars = group.selectAll('rect');

            bars.call(barTransition);

            if(zeroLines.size()){
                zeroLines.transition()
                    .duration(barFadeTime)
                    .attr('x1', scales.x(0))
                    .attr('x2', scales.x(0))
                    .ease();
            }

            labels.transition()
                .duration(addRemoveDuration)
                .attr('x', barLabelPosition)
        });

    return true;
}

export function refreshData(sortField, countriesUpdated, isMobileInd) {
    const action = selectedCountries.lastUpdate.action;

    let duration = addRemoveDuration;

    data = setData(sortField, countriesUpdated);
    dimensions.totalHeight = dimensions.rowHeight * data.length;

    if(isMobileInd){
        if(countriesUpdated){
            updateMobileTableList(data);
        } else {
            sortMobileTable(data);
        }
        return;
    }

    if (action === 'add') {
        sizeSvg(addRemoveDuration);
        duration = (rescale()) ? duration : 0;

        setTimeout(function () {
            repositionXAxis();
            addBarGroups();
            placeCountryLabels();
            placeGdpFigures();
            placeHorizontalStripes(data.length, dimensions);
            if(countriesUpdated){
                positionLegend(addRemoveDuration, action);
            }
        }, duration)
    } else {
        addBarGroups();
        placeCountryLabels();
        placeGdpFigures();

        duration = (rescale()) ? duration : 0;

        setTimeout(function () {
            sizeSvg(300, addRemoveDuration);
            repositionXAxis();
            placeHorizontalStripes(data.length, dimensions);
            if(countriesUpdated){
                positionLegend(addRemoveDuration, action);
            }
        }, duration)
    }
}

function redraw() {
    establishContainers();
    ink(containers, dimensions, data.length);
    setScales();
    addBarGroups();
    placeCountryLabels();
    placeGdpFigures();
    placeHeaders(config);
    selectCountryInit();

    if(config.negativeAmountLabel){
        setTimeout(function() {
            placeLegend(config);
        }, addRemoveDuration * 1.1); //Ensure we gave the chart enough time to build its height
    }
}

function setContainer(){
    d3.select('#viz').selectAll('*').remove();

    const accessibilityAttrs = null || config.accessibilityAttrs,
    parentWidth = getElementBox(d3.select('#viz')).width;

    svg = establishContainer(null, parentWidth, accessibilityAttrs)
            .classed('country', true);
}

function isMobile(){
    return parseInt(d3.select('svg.main').attr('width'),10) < 800;
}

export function chartInit(_config) {
    config = _config;

    primaryColor = config.primaryColor || '#EEE';
    negativeColor = config.negativeValueColor || '#EEE';

    selectedCountries.set(config.defaultCountries);
    data = prepareData(config);

    setContainer();

    if(isMobile()){
        redrawMobile(config, data);
    } else {
        redraw();
    }
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    if(previousWidth === window.innerWidth){
        return;
    }

    previousWidth = window.innerWidth;
    setContainer();

    if(isMobile()){
        debounce = setTimeout(redrawMobile, 100, config, data);
    } else {
        debounce = setTimeout(redraw, 100);
    }
});
