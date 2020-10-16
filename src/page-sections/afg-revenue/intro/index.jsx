import React, { useEffect, useState } from 'react';
import { initChart, initChartMobile } from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import revenueData from '../../../../static/americas-finance-guide/data/federal_revenue_gdp.csv';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';
import {
  resetForResize,
  setFactsTrigger,
  toggleFactsMobile,
  toggleSelectedFacts,
} from '../../../afg-helpers/dots/revenue-and-spending/compareManager';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const RevenueIntro = (props) => {
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

  const [hasDotScale, setHasDotScale] = useState(false);
  let debounce, previousWidth;

  function resizeChart () {
    resetForResize();
    initChartMobile(config);

    if (isMobileDevice()) {
      toggleFactsMobile(props.selection);

    } else {
      setFactsTrigger();

      if (props.selection) {
        toggleSelectedFacts(props.selection);

      } else {
        setHasDotScale(true);

      }
    }
  }

  useEffect(() => {
    resetForResize();
    if (isMobileDevice()) {
      initChartMobile(config);
      toggleFactsMobile(props.selection);

    } else {
      if (props.selection) {
        initChartMobile(config);
        setFactsTrigger();
        toggleSelectedFacts(props.selection);

      } else {
        initChart(config);
        setFactsTrigger();
        setHasDotScale(true);
      }
    }
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (debounce) {
        clearTimeout(debounce);
      }

      if (previousWidth === window.innerWidth) {
        return;
      }

      previousWidth = window.innerWidth;

      debounce = setTimeout(resizeChart, 100);

    }

    window.addEventListener('resize',resizeHandler);

    return () => {
      window.removeEventListener('resize',resizeHandler);
    }
  });

  const topLegend = () => {
    const label = props.selection ? props.selection === 'gdp' ? 'FY20 U.S. Gross Domestic Product' : 'Federal Spending' : '';

    const isMobile = <div className='dotScale'>
      <svg width='.75rem' height='1rem'>
        <circle cx='3' cy='12' r='3' />
      </svg>
      <span>= {AfgData.dot_represents_mobile.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <svg fill={props.selection ? props.selection === 'gdp' ? '#dddddd' : '#a6c9c4' : '#fff'}
           width='10px'
           height='10px'>
        <rect width='10' height='10' />
      </svg>
      <span>&nbsp;&nbsp;{label}</span>
    </div>

    const isDesktop = <div className='dotScale'>
      <svg width='.75rem' height='1rem'>
        <circle cx='3' cy='12' r='3' />
      </svg>
      <span>= {AfgData.dot_represents.value}</span>
    </div>

    let toRender = <></>

    if(!isMobileDevice() && !hasDotScale) {
      toRender = isDesktop;
    }	else if (isMobileDevice()) {
      toRender = isMobile;
    }

    return toRender;
  }

  return (<>
    {topLegend()}
    <div id="viz"></div>
  </>
  );
};

export default RevenueIntro;
