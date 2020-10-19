import React, { useState, useEffect } from 'react';
import '../../../afg-helpers/countries/selectCountry.scss';
import colors from 'src/styles/afg/colors.scss';
import { loadSourceData } from '../../../afg-helpers/countries/data';
import CountryData from '../../../../static/americas-finance-guide/data/deficit_country_comparison.csv';
import { chartInit } from '../../../afg-helpers/countries/chart';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const spendingConfig = {
  accessibilityAttrs: {
    title: 'Federal Deficit Country Comparison',
    desc: `The U.S. had the largest deficit in ${AfgData.country_compare_year.value} (${AfgData.current_fy_deficit_short.value}), the deficit as a percent of GDP was smaller for the U.S. than other countries.`,
  },
  amountField: 'deficit_usd',
  amountInverse: true,
  gdpField: 'deficit_gdp',
  amountLabel: 'Deficit',
  negativeAmountLabel: 'Surplus',
  sourceFields: ['deficit_source_url_name', 'gdp_source'],
  primaryColor: colors.colorDeficitPrimary,
  negativeValueColor: colors.colorDeficitSurplus,
  chapter: 'deficit',
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
