import { select, selectAll } from 'd3-selection';
import { simplifyNumber } from 'src/utils/utils';
import { initScale, drawChart } from './chart';

const d3 = { select, selectAll };

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function getValueByYear(values, year) {
    let response;

    values.every(r => {
        if (r.year === year) {
            response = r.amount;
            return false;
        }

        return true;
    })

    return response;
}

function buildSummary(row, d, config) {
    const fiscalYearArraylength = config.fiscalYearArray.length;
    const first = config.fiscalYearArray[0];
    const last = config.fiscalYearArray[fiscalYearArraylength - 1];
    const summaryYearsString = first + ' - ' + last + ': ';

    const summary = row.append('div').classed('trend-row__summary', true),
        begin = getValueByYear(d.values, first),
        end = getValueByYear(d.values, last),
        difference = begin - end,
        percentChange = Number.parseFloat((Math.abs(difference / begin) * 100)).toFixed(1);

    let changeSign;

    if (difference > 0) {
        changeSign = '-';
    } else if (difference < 0) {
        changeSign = '+';
    } else {
        changeSign = '';
    }

    summary.append('span').classed('trend-row__summary-years trend-mobile__year', true).text(summaryYearsString);
    summary.append('span').classed('trend-row__summary-amounts trend-mobile__amount', true).text(`${simplifyNumber(begin)} - ${simplifyNumber(end)} `);
    summary.append('span').classed('trend-row__summary-change', true).text(`${changeSign}${percentChange}%`);
}

function placeDataDetail(d) {
    const row = d3.select(this);

    row.append('span')
        .classed('trend-mobile__year', true)
        .text(d.year + ': ');

    row.append('span')
        .classed('trend-mobile__amount', true)
        .text(simplifyNumber(d.amount))
}

function insertChart(row, d, config, detail) {
    const chartRow = row.append('div').classed('chart-row', true),
        dataBox = chartRow.append('div').classed('chart-row__data', true),
        chartBox = chartRow.append('div').classed('chart-row__chart', true);

    dataBox.selectAll('p')
        .data(d)
        .enter()
        .append('p')
        .classed('chart-row__data-line', true)
        .each(placeDataDetail);

    drawChart(chartBox, d, config, detail);
}

function toggleVisibility() {
    const button = d3.select(this),
        activeClass = 'chart-row--active',
        parent = d3.select(this.parentNode.parentNode).select('.chart-row'), //laaaaame. TODO: use more specific selectors to find the desired parent.
        isActive = parent.classed(activeClass);

    parent.classed(activeClass, !isActive);

    button.select('span').text(function () {
        return (isActive) ? 'view chart' : 'hide chart';
    });
    button.select('img').attr('src', () => '/images/chart-' + (isActive ? 'white.svg' : 'green.svg'));
}

function toggleDetail(d) {
    const button = d3.select(this),
        activeClass = 'trend-row--detail-active',
        parent = d3.select(this.parentNode.parentNode), //laaaaame. TODO: use more specific selectors to find the desired parent.
        detail = parent.select('.trend-row__detail'),
        isActive = parent.classed(activeClass);

    let container;

    parent.classed(activeClass, !isActive);

    button.select('span').text(function () {
        return (isActive) ? 'show subcategories' : 'close subcategories';
    });

    if (isActive) {
        // close - empty contents
        detail.selectAll('*').remove();
    } else {
        // load contents
        container = detail.append('div').classed('trend-mobile trend-mobile--detail', true);
        trendMobile(d.subcategories.sort(sortByLatestYear), container, d.config, 'detail')
    }
}

function buildChartButton(buttonRow) {
    const chartButton = buttonRow.append('button').classed('trend-row__chart-toggle trend-row-button', true);
    chartButton.append('span').classed('trend-row-button__toggle-text', true).text('view chart');
    chartButton.append('img').attr('src', '/images/chart-white.svg');
    chartButton.on('click', toggleVisibility);
}

function buildDetailButton(buttonRow, d, config) {
    const detailButton = buttonRow.append('button').classed('trend-row__detail-toggle trend-row-button', true);
    detailButton.append('span').classed('trend-row-button__toggle-text', true).text('show subcategories');
    detailButton.append('img').attr('src', '/images/arrow.svg');
    d.config = config;
    detailButton.on('click', toggleDetail);
}

function buildRow(d, dom, config, detail) {
    const row = d3.select(dom);

    let buttonRow;

    row.append('h3')
        .classed('trend-row__heading', true)
        .text(d.name);

    buildSummary(row, d, config);
    insertChart(row, d.values, config, detail);

    buttonRow = row.append('div').classed('trend-row__buttons', true);

    buildChartButton(buttonRow);

    if (!detail) {
        buildDetailButton(buttonRow, d, config);
    }

    if (!config.detail) {
        row.append('div').classed('trend-row__detail', true)
    }
}

function openFirstChart() {
    const firstButton = d3.select('button.trend-row__chart-toggle');

    toggleVisibility.bind(firstButton.node())();
}

export function trendMobile(data, container, config, detail) {
    initScale(data, container, config);

    container.selectAll('.trend-row')
        .data(data)
        .enter()
        .append('div')
        .classed('trend-row ' + config.chapter, true)
        .each(function (d) {
            buildRow(d, this, config, detail);
        })

    if (!detail) {
        openFirstChart();
    }
}