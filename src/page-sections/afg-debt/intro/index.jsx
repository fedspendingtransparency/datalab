import React, { useEffect } from 'react';
import { createLayers } from './helpers/createLayers';
import { startLegendAnimation } from './helpers/legend';
import { setChartWidth } from './helpers/widthManager';
import { establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import colors from '../../../styles/afg/colors.scss';
import { setDotsPerRow } from './helpers/dotConstants';
import { layersInit, resetLayers } from './helpers/manageLayers';
import DebtData from '../../../../static/americas-finance-guide/data/explore_federal_debt.csv';

const DebtIntro = () => {
  const config = {
    anecdoteName: 'anecdote-debt.svg',
    debtAmount: findAmountInCsv('federal debt', DebtData),
    gdpAmount: findAmountInCsv('gdp', DebtData),
    deficitAmount: Math.abs(findAmountInCsv('federal deficit', DebtData)),
    gdpPercent: findAmountInCsv('federal debt percent of gdp', DebtData) * 100,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs: {
      default: {
	title: '2019 Federal Debt',
	desc: 'The image illustrates the federal government’s debt at the end of 2019 using dots, and each dot is equal to a billion dollars. There are 22,700 dots.',
      },
      deficit: {
	title: '2019 Federal Debt and Deficit',
	desc: 'The change in federal debt each year is heavily influenced by the deficit or surplus that year. When there is not enough revenue to pay for spending the government borrows money to make up the difference. When there is excess revenue in a given year, the majority of those funds are used to pay down the federal debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
      },
      gdp: {
	title: '2019 Federal Debt and GDP',
	desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
      },
    },
  };

  let mainContainer;
  let debounce;
  let previousWidth;

  function setMainContainer() {
    mainContainer = establishContainer(900, null, config.accessibilityAttrs.default)
      .append('g')
      .classed('main', true);

    config.mainContainer = mainContainer;
  }

  useEffect(() => {
    setChartWidth();
    setMainContainer();
    setDotsPerRow();
    startLegendAnimation(config);
    createLayers(config);

    setTimeout(() => {
      layersInit(config);
    }, 4500);
  }, []);


  function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    resetLayers();
    config.mainContainer.selectAll('*')
      .remove();
    createLayers(config);
    layersInit(config);
  }


  useEffect(() => {
    window.addEventListener('resize', () => {
      if (debounce) {
	clearTimeout(debounce);
      }

      if (previousWidth === window.innerWidth) {
	return;
      }

      previousWidth = window.innerWidth;

      debounce = setTimeout(resizeChart, 100);
    });

    return (_) => {
      window.removeEventListener('resize', () => {
	if (debounce) {
	  clearTimeout(debounce);
	}

	if (previousWidth === window.innerWidth) {
	  return;
	}

	previousWidth = window.innerWidth;

	debounce = setTimeout(resizeChart, 100);
      });
    };
  });


  return (<div id="viz" />);
};

export default DebtIntro;
