import React, { useEffect } from 'react';
import { initChart, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import SpendingData from '../../../../static/americas-finance-guide/data/federal_spending_gdp.csv';
import { findAmountInCsv } from 'src/afg-helpers/utils';

export default function SpendingIntro() {
  let debounce;
  const config = {
    anecdoteName: 'anecdote-spending.svg',
    comparisonAmount: findAmountInCsv('federal revenue', SpendingData),
    compareString: 'revenue',
    gdpAmount: findAmountInCsv('gdp', SpendingData),
    gdpPercent: findAmountInCsv('federal spending percent of gdp', SpendingData) * 100,
    sectionAmount: findAmountInCsv('federal spending', SpendingData),
    comparisonColor: colors.revenuePrimary,
    sectionColor: colors.colorSpendingPrimary,
    accessibilityAttrs: {
      default: {
	title: '2020 Federal Spending',
	desc: 'The image illustrates federal spending in 2030 using dots, and each dot is equal to a billion dollars. There are 6,550 dots.',
      },
      gdp: {
	title: '2020 Federal Spending and GDP',
	desc: 'The U.S. economy, as measured by GDP, produced $19.5 T worth of goods and services. In 2020, federal spending was equivalent to 34% of GDP.',
      },
      revenue: {
	title: '2020 Federal Spending and Revenue',
	desc: '2020 Federal spending using dots, each dot totaling $1 billion, with federal revenue box overlaying the dots, representing a $3.13 T deficit.',
      },
    },
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initChart(config);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (debounce) {
	clearTimeout(debounce);
      }
      debounce = setTimeout(resizeChart, 100);
    });

    return (_) => {
      window.removeEventListener('resize', () => {
	if (debounce) {
	  clearTimeout(debounce);
	}

	debounce = setTimeout(resizeChart, 100);
      });
    };
  });

  return (<div id="viz" />);
}
