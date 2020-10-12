import React, { useEffect } from 'react';
import { initChart, initChartMobile, resizeChart } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import revenueData from '../../../../static/americas-finance-guide/data/federal_revenue_gdp.csv';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';
import {
  setFactsTrigger,
  toggleFactsMobile,
  toggleSelectedFacts,
} from '../../../afg-helpers/dots/revenue-and-spending/compareManager';
import * as d3 from 'd3v3';

const RevenueIntro = (props) => {
  let debounce;
  const config = {
    anecdoteName: 'anecdote-revenue.svg',
    comparisonAmount: findAmountInCsv('federal spending', revenueData),
    compareString: 'spending',
    gdpAmount: findAmountInCsv('gdp', revenueData),
    gdpPercent: findAmountInCsv('federal revenue percent of gdp', revenueData) * 100,
    sectionAmount: findAmountInCsv('federal revenue', revenueData),
    sectionName: 'revenue',
    comparisonColor: colors.colorSpendingPrimary,
    sectionColor: colors.revenuePrimary,
    accessibilityAttrs: {
      default: {
        title: '2019 Federal Revenue',
        desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots.',
      },
      gdp: {
        title: '2019 Federal Revenue and GDP',
        desc: 'The U.S. economy, as measured by gross domestic product, produced $21.3 trillion worth of goods and services. In 2019, federal revenue was equivalent to 16% of gross domestic product.',
      },
      spending: {
        title: '2019 Federal Revenue and Spending',
        desc: 'The image illustrates federal spending in 2019 using dots, and each dot is equal to a billion dollars. There are 4,400 dots. Due to rounding, there are 900 more spending dots than revenue dots, representing the deficit for 2019, $984 billion.',
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

    // window.addEventListener('resize', () => {
    //   if (debounce) {
    //     clearTimeout(debounce);
    //   }
    //
    //   debounce = setTimeout(() => resizeChart(config, props.selection), 100);
    // });
    //
    // return () => {
    //   window.removeEventListener('resize', () => {
    //     if (debounce) {
    //       clearTimeout(debounce);
    //     }
    //
    //     debounce = setTimeout(() => resizeChart(config, props.selection), 100);
    //   });
    // };
  }, []);

  return (<>
    <div className='dotScale'>
      <svg width='1.5rem' height='1.5rem'>
        <circle cx='6' cy='13' r='4' />
      </svg>
      <span>= $10 billion</span>
    </div>
    <div id="viz"></div>
  </>
  );
};

export default RevenueIntro;
