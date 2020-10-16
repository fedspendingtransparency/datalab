import React, { useEffect } from 'react';
import { initChart, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import SpendingData from '../../../../static/americas-finance-guide/data/federal_spending_gdp.csv';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';

export default function SpendingIntro() {
  let debounce;
  const defaultDesc = isMobileDevice() ?
      `The image illustrates federal spending in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents_mobile.value}. There are ${AfgData.dot_number_spending.value} dots.`
      :
      `The image illustrates federal spending in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents.value}. There are ${AfgData.dot_number_spending.value} dots.`;
  const revenueDesc = isMobileDevice() ?
      `${AfgData.current_fy.value} Federal spending using dots, each dot totaling ${AfgData.dot_represents_mobile.value}, with federal revenue box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value} deficit.`
      :
      `${AfgData.current_fy.value} Federal spending using dots, each dot totaling ${AfgData.dot_represents.value}, with federal revenue box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value} deficit.`;
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
	title: `${AfgData.current_fy.value} Federal Spending`,
	desc: defaultDesc,
      },
      gdp: {
	title: `${AfgData.current_fy.value} Federal Spending and GDP`,
	desc: `The U.S. economy, as measured by GDP, produced ${AfgData.current_fy_gdp.value} worth of goods and services. In ${AfgData.current_fy.value}, federal spending was equivalent to ${AfgData.spending_percent_gdp.value} of GDP.`,
      },
      revenue: {
	title: `${AfgData.current_fy.value} Federal Spending and Revenue`,
	desc: revenueDesc,
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
