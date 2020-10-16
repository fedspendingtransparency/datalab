import React, { useEffect } from 'react';
import { initChart, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import revenueData from '../../../../static/americas-finance-guide/data/federal_revenue_gdp.csv';
import { findAmountInCsv } from 'src/afg-helpers/utils';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const RevenueIntro = () => {
  let debounce;
  const config = {
    anecdoteName: 'anecdote-revenue.svg',
    comparisonAmount: findAmountInCsv('federal spending', revenueData),
    compareString: 'spending',
    gdpAmount: findAmountInCsv('gdp', revenueData),
    gdpPercent: findAmountInCsv('federal revenue percent of gdp', revenueData) * 100,
    sectionAmount: findAmountInCsv('federal revenue', revenueData),
    comparisonColor: colors.colorSpendingPrimary,
    sectionColor: colors.revenuePrimary,
    accessibilityAttrs: {
      default: {
	title: '2020 Federal Revenue',
	desc: '2020 federal revenue using dots, and each dot is equal to $1 billion. There are 3,420 dots.',
      },
      gdp: {
	title: '2020 Federal Revenue and GDP',
	desc: 'The U.S. economy, as measured by gross domestic product, in 2020 produced $19.5 worth of goods and services.',
      },
      spending: {
	title: '2020 Federal Revenue and Spending',
	desc: '2020 Federal revenue represented by dots, each dot totaling $1 billion, with federal spending box overlaying the dots, representing a $3.13 T.',
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
};

export default RevenueIntro;
