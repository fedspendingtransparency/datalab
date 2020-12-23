import React, { useState, useEffect } from 'react';
import colors from 'src/styles/afg/colors.scss';
import { loadSourceData } from '../../../afg-helpers/countries/data';
import { chartInit } from '../../../afg-helpers/countries/chart';
import CountryData from '../../../../static/americas-finance-guide/data/revenue_country_comparison.csv';

const revenueConfig = {
  amountField: 'revenue_usd',
  gdpField: 'revenue_gdp',
  amountLabel: 'Revenue',
  sourceFields: ['source'],
  chapter: 'revenue',
  primaryColor: colors.revenuePrimary,
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
  }],
  accessibilityAttrs: {
    title: 'Federal Revenue Country Comparison',
    desc: 'The top five countries in terms of federal revenue in 2019 were the United States with $3.5 trillion, 17% of its gross domestic product), China with $2.6 trillion (22%), Japan with $1.7 trillion (34%), Germany with $1.6 trillion (43%), and France with $1.4 trillion (56%).',
  },
};

const RevenueCountryComparison = () => {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);

    const init = () => {
      loadSourceData(CountryData);
      chartInit(revenueConfig);
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
