import {establishContainer, getElementBox, simplifyNumber, translator, wordWrap} from "../../utils";
import { select, selectAll } from 'd3-selection';
import { min, max, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { renderSortIcon, updateIcons } from './sortIcon';
import {refreshData} from "./chart";
import {selectCountryInit} from "./selectCountry";
import { initDropShadow } from './dropShadow';
import {selectedCountries} from "./selectedCountryManager";
import {createDonut} from "../donut";

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition, range }

const mobileDimensions = {
        minChartWidth: 320,
        totalHeight : 0,
        minRowHeight: 60,
        rowHeight: 50,
        barHeight: 16,
        countryColumnWidth: 220,
        gdpColumnWidth: 100,
        header: 50,
        barYOffset: 3
    },
    donutOffset = 5,
    donutRadius = mobileDimensions.rowHeight / 2 - donutOffset,
    scales = {
        x : 0
    },
    scrollbarWidth = 20,
    addRemoveDuration = 1000,
    barFadeTime = 1000,
    fontSize = parseFloat(getComputedStyle(document.body).fontSize),
    maskClass = 'drop-shadow-mask';

let config, data, svg, primaryColor, negativeColor, legendEl;

function buildCountryBoxDropShadow(dataLength) {
    const dropShadow = svg.select('.drop-shadow-base');

    if(dropShadow.size()){
        dropShadow.attr('height', mobileDimensions.rowHeight * dataLength)
        return;
    }

    svg.insert('rect', ':first-child')
        .attr('class', 'drop-shadow-base')
        .attr('width', mobileDimensions.chartWidth)
        .attr('height', mobileDimensions.rowHeight * dataLength)
        .attr('transform', translator(3, mobileDimensions.header + 4))
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

function placeHorizontalStripes(dataLength) {
    let stripes, stripesContainer;
    const chartWidth = (mobileDimensions && mobileDimensions.chartWidth) ? mobileDimensions.chartWidth : 1200;

    stripesContainer = svg.select('.cg-stripes-container');
    stripes = stripesContainer.selectAll('line')
        .data(d3.range(dataLength + 1), function(d){ return d; });

    stripes.exit().remove();

    stripes.enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', function(d){
            return d * mobileDimensions.rowHeight + mobileDimensions.header + 3;
        })
        .attr('x2', chartWidth)
        .attr('y2', function(d){
            return d * mobileDimensions.rowHeight + mobileDimensions.header + 3;
        })
        .attr('stroke', 'rgba(100,100,100,0.1)')
        .attr('stroke-width', 1)
}

function placeMask() {
    // clip the drop shadow

    if (svg.selectAll('rect.' + maskClass).size()) {
        return;
    }

    svg.insert('rect', '.cg-stripes-container')
        .classed(maskClass, true)
        .attr('width', mobileDimensions.chartWidth + 4)
        .attr('height', mobileDimensions.header + 4)
        .attr('stroke', 'none')
        .attr('fill', 'white')
}

function ink(){
    buildCountryBoxDropShadow(data.length);
    placeHorizontalStripes(data.length);
    placeMask();
}

function barTransition(selection, data) {
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

function setScales() {
    const amountVals = data.map(r => Math.abs(r[config.amountField])),
        min = d3.min([0, d3.min(amountVals)]),
        max = d3.max(amountVals);

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, mobileDimensions.countryColumnWidth]);
}

function rescale() {
    const previousMax = scales.x.domain()[1],
        previousMin = scales.x.domain()[0];

    setScales();

    if (previousMax === scales.x.domain()[1] && previousMin === scales.x.domain()[0]) {
        return;
    }

    d3.select('svg.main').selectAll('g.bar-group')
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

function sort() {
    const g = d3.select(this),
        type = g.attr('data-type'),
        isMobileInd = true;

    refreshData(type, null, isMobileInd);

    updateIcons();
}

function placeHeaders(){
    const labelXPadding = 12;

    const percentLabelOffset = Math.min(mobileDimensions.countryColumnWidth + mobileDimensions.gdpColumnWidth / 2 + 10 - fontSize, document.body.clientWidth - 160);

    svg.append('g')
        .classed('header', true)
        .attr('data-type', config.amountField)
        .append('text')
        .attr('transform', translator(- labelXPadding / 2, 0))
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('x', labelXPadding)
        .attr('y', 38)
        .attr('font-size', 14);

    svg.append('g')
        .attr('transform', translator(percentLabelOffset, 0))
        .classed('header', true)
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
        .attr('x', labelXPadding);

    svg.selectAll('g.header')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
        .each(function () {
            renderSortIcon(this, null, primaryColor);
        });

    updateIcons();
}

function placeLegend() {
    const boxSize = 12,
        animationDuration = 0;

    legendEl = svg.append('g').classed('legend', true);

    positionLegend(animationDuration);

    legendEl.append('rect')
        .attr('x1', 0)
        .attr('y', -boxSize)
        .attr('width', boxSize)
        .attr('height', boxSize)
        .attr('fill', primaryColor);

    legendEl.append('g')
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('x', 15)
        .attr('font-size', 14);

    legendEl.append('rect')
        .attr('x', 100)
        .attr('y', -boxSize)
        .attr('width', boxSize)
        .attr('height', boxSize)
        .attr('fill', negativeColor);

    legendEl.append('g')
        .classed('legend', true)
        .attr('data-type', config.gdpField)
        .append('text')
        .attr('x', 115)
        .attr('font-weight', 600)
        .text(config.negativeAmountLabel)
        .attr('font-size', 14);
}

function positionLegend(duration, action){
    const chartHeight = parseInt(d3.select('svg.main').attr('height'),10);
    let yPos = chartHeight;

    switch(action){
        case 'add':
            yPos = chartHeight + mobileDimensions.rowHeight;
            break;
        case 'remove':
            yPos = chartHeight - mobileDimensions.rowHeight;
            break;
        default:
            yPos = chartHeight;
    }

    legendEl.transition()
        .duration(duration)
        .attr('transform', translator(mobileDimensions.chartWidth / 2 - 100, yPos - 5))
        .ease();
}

function addDGPIcon(row, d){
    const dataRows = row.append('g')
            .attr('class', 'donut-container')
            .attr('transform', translator(mobileDimensions.countryColumnWidth + mobileDimensions.gdpColumnWidth / 2, donutOffset * 1.5)),
        timeoutForAdd = 500;

    setTimeout(function () {
        dataRows.each(function () {
            const gdpPercent = d[config.gdpField] / 100,
            donutColor = gdpPercent > 0 ? primaryColor : negativeColor;
            createDonut(d3.select(this), d[config.gdpField] / 100, donutRadius * 2, donutColor);
        })
    }, timeoutForAdd);
}

function redraw(){
    d3.select('#viz').selectAll('*').remove();
    const isMobileInd = true;

    setMobileChartSVG();
    setScales();
    placeHeaders();
    createMobileChart();
    initDropShadow();
    ink();
    selectCountryInit(isMobileInd);

    if(config.negativeAmountLabel){
        setTimeout(function() {
            placeLegend();
        }, addRemoveDuration * 1.1); //Ensure we gave the chart enough time to build its height
    }
}

function buildRow(d,i){
    const row = d3.select(this);

    row.append('text').text(function(d){
        return d.country;
    })
      .attr('y', 20);

    row.transition()
        .attr('transform', translator(0, i * mobileDimensions.rowHeight))
        .ease();

    addMobileBarGroups(row, d);
    addDGPIcon(row, d);
}

function buildRows(rows){
    const svgPadding = config.negativeAmountLabel ? 40 : 20;
    svg.attr('height', data.length * mobileDimensions.rowHeight + mobileDimensions.header + svgPadding);
    const dataRows = rows.selectAll('g.cg-data-row')
        .data(data, function (d) { return d.country });

    dataRows.exit().remove();

    dataRows.enter()
        .append('g')
        .classed('cg-data-row',true)
        .each(buildRow);

    ink();
}

function sortRows(){
    svg.selectAll('g.cg-data-row')
        .data(data, function (d) { return d.country })
        .each(sortRow);

    // sortRow(rows);
}

function sortRow(d, i){
    const row = d3.select(this);
    row.transition()
        .duration(addRemoveDuration)
        .attr('transform', translator(0, (i * mobileDimensions.rowHeight)))
        .ease();
}

function createMobileChart(){
    const rows = svg.append('g').classed('cg-country-comparison-rows', true)
        .attr('transform', translator(5, mobileDimensions.header));
    buildRows(rows);
    sortRows();
}

function setMobileChartSVG(){
    const accessibilityAttrs = null || config.accessibilityAttrs,
        parentWidth = getElementBox(d3.select('#viz')).width;

    svg = establishContainer(null, parentWidth, accessibilityAttrs)
        .classed('country', true)
        .attr('y', 20);
    svg.append('g').classed('cg-stripes-container',true);
}

function addMobileBarGroups(row, d) {
    const barElement = row.append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * mobileDimensions.rowHeight + 10)
        });

    if (!barElement.size()) {
        return;
    }

    barElement.append('rect')
        .attr('width', 0)
        .attr('height', mobileDimensions.barHeight)
        .attr('x', scales.x(0))
        .attr('y', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2)
        .attr('fill', function(d){
            return d[config.amountField] > 0 ? primaryColor : negativeColor;
        })
        .attr('fill-opacity', 0.5)
        .attr('stroke', function(d){
            return d[config.amountField] > 0 ? primaryColor : negativeColor;
        })
        .attr('stroke-width', 1)
        .call(barTransition, d);

    barElement.append('text')
        .text(function () {
            return simplifyNumber(Math.abs(d[config.amountField]))
        })
        .attr('font-size', 12)
        .attr('x', barLabelPosition(d))
        .attr('y', mobileDimensions.rowHeight / 2 + mobileDimensions.barHeight / 2 - 4)
        .attr('opacity', 0)
        .transition()
        .delay(barFadeTime)
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

export function updateMobileTableList(_data, action){
    data = _data;
    const rows = svg.select('.cg-country-comparison-rows');
    rescale();
    buildRows(rows);

    if(config.negativeAmountLabel){
       positionLegend(addRemoveDuration, action);
    }

    sortRows();
}

export function sortMobileTable(_data){
    data = _data;
    sortRows();
}

export function redrawMobile(_config, _data){
    config = _config;
    data = _data;

    primaryColor = config.primaryColor || '#EEE';
    negativeColor = config.negativeValueColor || '#EEE';

    const ffgWrapper = d3.select('.ffg-wrapper');

    let pagePadding = ffgWrapper.style('padding-left');
    pagePadding = pagePadding ? parseInt(pagePadding,10) : 0;
    mobileDimensions.totalHeight = 0;
    // todo - calculate these after the establishContainer, use the svg width
    mobileDimensions.chartWidth = Math.max(mobileDimensions.minChartWidth, window.innerWidth) - pagePadding * 2 - scrollbarWidth;
    mobileDimensions.gdpColumnWidth = Math.max(Math.min(mobileDimensions.chartWidth * 0.2, 130), donutRadius + 4*fontSize);
    mobileDimensions.countryColumnWidth = mobileDimensions.chartWidth - mobileDimensions.gdpColumnWidth - fontSize;
    redraw();
    d3.select('#cgCountryGraphDropShadow').attr('height', 504);
    d3.select('.select-country').classed('mobile', true);
    d3.select('#viz').classed('mobile', true);
}
