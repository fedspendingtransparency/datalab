import React, { useState, useEffect } from 'react';
import '../../../afg-helpers/countries/selectCountry.scss';
import colors from 'src/styles/afg/colors.scss';
import { loadSourceData } from '../../../afg-helpers/countries/data';
import CountryData from '../../../../static/americas-finance-guide/data/deficit_country_comparison.csv';
import { chartInit } from '../../../afg-helpers/countries/chart';

const spendingConfig = {
  accessibilityAttrs: {
    title: 'Federal Deficit Country Comparison',
    desc: 'While the U.S. had the largest deficit in 2017 of $666 billion, the deficit as a percent of gross domestic product was smaller for the U.S. than other countries like China, Japan, and India. Of the five largest countries in terms of federal revenue and spending, four of them had a deficit in 2017: $666 billion (3.40% of its gross domestic product) for the United States, $513 billion (4.3%) for China, $224 billion (4.6%) for Japan, and $69 billion (2.7%) for France. Germany was the only country of the five with a surplus in 2017 of $25 billion or 0.7% of gross domestic product.',
  },
  amountField: 'deficit_usd',
  amountInverse: true,
  gdpField: 'deficit_gdp',
  amountLabel: 'Deficit',
  negativeAmountLabel: 'Surplus',
  sourceFields: ['source'],
  primaryColor: colors.colorDeficitPrimary,
  negativeValueColor: colors.colorDeficitSurplus,
  chapter: 'deficit',
  defaultCountries: [{
    display: 'United States',
    plainName: 'United States',
  }, {
    display: 'Germany',
    plainName: 'Germany',
  }, {
    display: 'United Kingdom',
    plainName: 'United Kingdom',
  }, {
    display: 'France',
    plainName: 'France',
  }, {
    display: 'Australia',
    plainName: 'Australia',
  }, {
    display: 'Korea',
    plainName: 'Korea',
  }, {
    display: 'Canada',
    plainName: 'Canada',
  }]
};

const DefecitCountryComparison = () => {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);

    const init = () => {
      loadSourceData(CountryData);
      chartInit(spendingConfig);
    };

    const handleResize = () => {
      const countrySearch = document.getElementsByClassName('list-div')[0];
      if (countrySearch && !countrySearch.classList.contains('hidden')) {
        const input = document.getElementById('country-search');
        if (document.activeElement !== input) {
          setWidth(window.innerWidth);
        }
      } else {
        setWidth(window.innerWidth);
      }
    };

    useEffect(() => {
      init();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      init();
    }, [width]);
  }

  return (
    <div id="viz" className="deficit-country" style={{ overflow: 'visible' }} />
  );
};

export default DefecitCountryComparison;
