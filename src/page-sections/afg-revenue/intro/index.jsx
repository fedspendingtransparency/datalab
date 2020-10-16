import React, { useEffect } from 'react';
import { initChart, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import revenueData from '../../../../static/americas-finance-guide/data/federal_revenue_gdp.csv';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const RevenueIntro = () => {
  let debounce;
  const defaultDesc = isMobileDevice() ?
      `${AfgData.current_fy.value} federal revenue using dots, and each dot is equal to ${AfgData.dot_represents_mobile.value}. There are ${AfgData.dot_number_revenue.value} dots.`
      :
      `${AfgData.current_fy.value} federal revenue using dots, and each dot is equal to ${AfgData.dot_represents.value}. There are ${AfgData.dot_number_revenue.value} dots.`;
  const revenueDesc = isMobileDevice() ?
      `${AfgData.current_fy.value} Federal revenue represented by dots, each dot totaling ${AfgData.dot_represents_mobile.value}, with federal spending box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value}.`
      :
      `${AfgData.current_fy.value} Federal revenue represented by dots, each dot totaling ${AfgData.dot_represents.value}, with federal spending box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value}.`
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
	title: `${AfgData.current_fy.value} Federal Revenue`,
	desc: defaultDesc,
      },
      gdp: {
	title: `${AfgData.current_fy.value} Federal Revenue and GDP`,
	desc: `The U.S. economy, as measured by gross domestic product, in ${AfgData.current_fy.value} produced ${AfgData.current_fy_gdp.value} worth of goods and services.`,
      },
      spending: {
	title: `${AfgData.current_fy.value} Federal Revenue and Spending`,
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
};

export default RevenueIntro;
