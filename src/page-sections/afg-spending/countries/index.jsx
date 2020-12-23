import React, { useState, useEffect } from 'react';
import '../../../afg-helpers/countries/selectCountry.scss';

import { loadSourceData } from 'src/afg-helpers/countries/data';
import { chartInit } from 'src/afg-helpers/countries/chart';
import colors from 'src/styles/afg/colors.scss';
import CountryData from '../../../../static/americas-finance-guide/data/spending_country_comparison.csv';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const spendingConfig = {
  amountField: 'spending_usd',
  gdpField: 'spending_gdp',
  amountLabel: 'Spending',
  sourceFields: ['source'],
  primaryColor: colors.colorSpendingPrimary,
  chapter: 'spending',
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
    title: 'Federal Spending Country Comparison',
    desc: `${AfgData.country_compare_year.value} top five countries in terms of federal spending: United States ($4T), China ($3.1T) Japan ($1.9T) Germany ($1.6T) and France $1.5T.`,
  },
};

const SpendingCountryComparison = () => {
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
    <div id="viz" className="spending-country" style={{ overflow: 'visible' }} />
  );
};

export default SpendingCountryComparison;
