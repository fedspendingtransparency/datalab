import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../globalSass/colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit, resetLayers } from "./manageLayers";
import '../../matchesPolyfill';
import DeficitData from '../../../../assets/ffg/data/explore_federal_deficit.csv';
import { findAmountInCsv } from '../../../src/utils';

const config = {
    anecdoteName: 'anecdote-deficit.svg',
    revenueAmount: findAmountInCsv('federal revenue', DeficitData), 
    spendingAmount: findAmountInCsv('federal spending', DeficitData), 
    debtBalance: findAmountInCsv('federal debt', DeficitData), 
    reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData), 
    compareString: 'revenue',
    revenueColor: colors.colorPrimary,
    spendingColor: colors.colorSpendingPrimary,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs: {
        default: {
            title: '2019 Federal Deficit',
            desc: 'The image illustrates the federal government’s deficit in 2019 using dots, and each dot is equal to a billion dollars. There are 984 dots.'
        },
        debt: {
            title: '2019 Federal Deficit and Debt',
            desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.'
        },
        deficit: {
            title: '2019 Federal Deficit, Revenue, and Spending',
            desc: 'A deficit occurs when spending exceeds revenue. For 2019, the $4.4 trillion in federal spending exceeded the $3.5 trillion in federal revenue leading to a deficit of $984 billion.'
        }
    }
};

let mainContainer, debounce, previousWidth;

// the math needs to be precise for the chart to work - no rounding
config.deficitAmount = config.spendingAmount - config.revenueAmount;
config.priorDebtBalance = config.debtBalance - config.deficitAmount;

function setMainContainer() {
    mainContainer = establishContainer(300, null, config.accessibilityAttrs.default).append('g')
        .classed('main', true);

    config.mainContainer = mainContainer;
}

function legendCallback() {

}

(function init() {
    setChartWidth();
    setMainContainer();
    setDotsPerRow();
    startLegendAnimation(config, legendCallback);
    createLayers(config);

    setTimeout(function () {
        layersInit(config)
    }, 4500);
})();

function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    config.mainContainer.selectAll('*').remove();
    createLayers(config);
    layersInit(config);
    resetLayers();
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    if (previousWidth === window.innerWidth) {
        return;
    }

    previousWidth = window.innerWidth;

    debounce = setTimeout(resizeChart, 100);
});
