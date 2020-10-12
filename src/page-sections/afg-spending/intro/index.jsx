import React, { useEffect } from 'react';
import { initChart, initChartMobile, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import SpendingData from '../../../../static/americas-finance-guide/data/federal_spending_gdp.csv';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';
import {
	setFactsTrigger,
	toggleFactsMobile,
	toggleSelectedFacts,
} from '../../../afg-helpers/dots/revenue-and-spending/compareManager';
import * as d3 from 'd3v3';

export default function SpendingIntro(props) {
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
	title: '2019 Federal Spending',
	desc: 'The image illustrates federal spending in 2019 using dots, and each dot is equal to a billion dollars. There are 4,400 dots.',
      },
      gdp: {
	title: '2019 Federal Spending and GDP',
	desc: 'The U.S. economy, as measured by gross domestic product, produced $21.3 trillion worth of goods and services. In 2019, federal spending was equivalent to 21% of gross domestic product.',
      },
      revenue: {
	title: '2019 Federal Spending and Revenue',
	desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots. Due to rounding, there are 900 more spending dots than revenue dots, representing the deficit for 2019, $984 billion. ',
      },
    },
  };

  useEffect(() => {
		if (isMobileDevice()) {
			config.selectedLayer = props.selection;
			initChartMobile(config);
			toggleFactsMobile(props.selection);
		} else {
			if (props.selection) {
				initChartMobile(config);
				setFactsTrigger();
				toggleSelectedFacts(props.selection);

				setTimeout(function() {
					d3.select('svg.main').attr('height', 2050)
					console.log(d3.select('svg.main').node().getBBox().height);
				}, 1000);


			} else {
				initChart(config);
				setFactsTrigger();
			}
		}
  }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     if (debounce) {
	// clearTimeout(debounce);
  //     }
  //     debounce = setTimeout(resizeChart, 100);
  //   });
	//
  //   return (_) => {
  //     window.removeEventListener('resize', () => {
	// if (debounce) {
	//   clearTimeout(debounce);
	// }
	//
	// debounce = setTimeout(resizeChart, 100);
  //     });
  //   };
  // });

  return (<div id="viz" />);
}
