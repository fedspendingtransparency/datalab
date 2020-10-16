import React, { useState, useEffect } from 'react';
import colors from 'src/styles/afg/colors.scss';
import { loadSourceData } from '../../../afg-helpers/countries/data';
import { chartInit } from '../../../afg-helpers/countries/chart';
import CountryData from '../../../../static/americas-finance-guide/data/revenue_country_comparison.csv';

const incomeConfig = {
  amountField: 'revenue_usd',
  gdpField: 'revenue_gdp',
  amountLabel: 'Revenue',
  sourceFields: ['revenue_source', 'gdp_source'],
  chapter: 'revenue',
  primaryColor: colors.revenuePrimary,
  defaultCountries: [{
    display: 'United States',
    plainName: 'United States',
  }, {
    display: 'China',
    plainName: 'China',
  }, {
    display: 'Japan',
    plainName: 'Japan',
  }, {
    display: 'Germany',
    plainName: 'Germany',
  }, {
    display: 'United Kingdom',
    plainName: 'United Kingdom',
  }, {
    display: 'India',
    plainName: 'India',
  }, {
    display: 'France',
    plainName: 'France',
  }],
  accessibilityAttrs: {
    title: 'Federal Revenue Country Comparison',
    desc: 'Top 5 countries in terms of federal revenue in 2017 were the United States ($3.3T), China ($2.6T) Japan ($1.7T) Germany ($1.6T) and France ($1.4T).',
  },
};

const RevenueCountryComparison = () => {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);

    const init = () => {
      loadSourceData(CountryData);
      chartInit(incomeConfig);
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
    <div id="viz" style={{ overflow: 'visible' }} />
  );
};

export default RevenueCountryComparison;
