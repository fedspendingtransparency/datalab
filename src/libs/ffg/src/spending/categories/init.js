import * as d3 from 'd3v3';
import { byYear } from '../data-spending';
import { drawChart as barChart } from './bar/chart';
import colors from '../../globalSass/colors.scss';

const chartSectionTextStr = 'Click to see subcategories';

let svg,
    config = {
        data: byYear('2019'),
        filteredData: null,
        sectionColor: colors.colorSpendingPrimary,
        dataType: 'category',
        accessibilityAttrs : {
            title: '2019 Federal Spending by Category and Agency',
            desc: 'The federal government reports spending by category and by agency. The top five spending categories for 2019 were Social Security with $1 trillion (24% of total spending), National Defense with $688 billion (15%), Medicare with $651 billion (15%), Health with $585 billion (13%) and Income Security with $515 billion (12%). The top five agencies by federal spending for 2019 were Department of Health and Human Services with $1.2 trillion (27% of total spending), Social Security Administration with $1.1 trillion (25%), Department of the Treasury with $689 billion (16%), Department of Defense – Military Programs with $654 billion (15%) and Department of Veterans Affairs with $200 billion (4%).'
        }
    },
    currentlyActive,
    debounce,
    top10 = true,
    chartType = 'bar';

function initSection() {
    const chartContainer = d3.select('#viz-chart-container');
    chartContainer.select('#vizChartSectionText').remove();
    const chartSectionText = chartContainer.insert("div","#viz").attr('id', 'vizChartSectionText');
    chartSectionText.text(chartSectionTextStr);

    initChart();
}

export function initChart(showMoreFlag) {
    const configData = config.dataType ? config.data[config.dataType] : config.data;

    const d = config.filteredData || configData;

    if(!showMoreFlag){
        if(d.length <= 10){
            top10 = false;
            displayShowMoreSection(top10);
        } else {
            top10 = true;
            displayShowMoreSection(top10);
        }
    }

    const chartData = top10 ? d.slice(0,10) : d;

    if (typeof document !== 'undefined') {
      d3.selectAll('svg.main').remove();

      /* Checking the parent width to set the width of the bar chart */
      const parentWidth = document.getElementById('viz').clientWidth;
      barChart(chartData, config.dataType, config, null, parentWidth);
    }

}

function showMore() {
    const showMoreFlag = true;
    top10 = !top10;

    this.innerText = top10 ? 'Show More' : 'Show Less';

    initChart(showMoreFlag)
}

function changeDataTypeClickFunction(){
    d3.select('#toggle-spending-data-type')
        .on('click', toggleDataType);

    d3.selectAll('.spending-chart-toggle__label')
        .on('click', toggleDataType);
}

function toggleDataType() {
    let dataType;
        const dataController = d3.select("#spending-chart-toggle"),
            curData = dataController.attr('data-active');

        if (curData === 'category') {
            dataType = 'agency';
        } else {
            dataType = 'category';
        }

        changeDataType(dataType, dataController);
}

function changeDataType(dataType, dataController){
    config.dataType = dataType;
    config.filteredData = null;
    d3.select('#filter-by-name').node().value = null;
    d3.select('#show-more-button').text('Show More');
    dataController.attr('data-active', dataType);
    initChart();
}

function spendingIndexClickFunctions() {
    d3.select('#filter-by-name')
        .on('input', function () {
            const v = this.value.toLowerCase(),
                curData = config.dataType ? config.data[config.dataType] : config.data;
            config.filteredData = curData.filter(r => {
                    return (r.activity.toLowerCase().indexOf(v) !== -1);
                });
            d3.select('#show-more-button').text('Show More');
            initChart()
        });

    d3.select('#show-more-button')
        .on('click', showMore);
}

function displayShowMoreSection(showMoreInd){
    d3.selectAll('.categories__show-more').classed('hidden', !showMoreInd);
}

export function init(_config){
    config = _config || config;

    spendingIndexClickFunctions();

    if (config.dataType) {
        changeDataTypeClickFunction();
    }

    if (typeof document !== "undefined") {
      d3.select("#spending-chart-toggle").attr('data-active', 'category');
    }

    initSection();
}
