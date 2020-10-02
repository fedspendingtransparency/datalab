import React, { useState, useEffect } from 'react';
import '../../../afg-helpers/countries/selectCountry.scss';

import { loadSourceData } from 'src/afg-helpers/countries/data';
import CountryData from '../../../../static/americas-finance-guide/data/spending_country_comparison.csv';
import { chartInit } from 'src/afg-helpers/countries/chart';
import colors from 'src/styles/afg/colors.scss';

const spendingConfig = {
    amountField: 'spending_usd',
    gdpField: 'spending_gdp',
    amountLabel: 'Spending',
    sourceFields: ['spending_source', 'gdp_source'],
    primaryColor: colors.colorSpendingPrimary,
    chapter: 'spending',
    defaultCountries: [{
        display: 'United States',
        plainName: 'United States'
    },{
        display: 'China',
        plainName: 'China'
    },{
        display: 'Japan',
        plainName: 'Japan'
    },{
        display: 'Germany',
        plainName: 'Germany'
    },{
        display: 'United Kingdom',
        plainName: 'United Kingdom'
    },{
        display: 'India',
        plainName: 'India'
    },{
        display: 'France',
        plainName: 'France'
    }],
    accessibilityAttrs : {
        title: 'Federal Spending Country Comparison',
        desc: `The top five countries in terms of federal spending in 2017 were the United States with $4 Trillion (21% of its gross domestic product), China with $3.1 trillion (26%), Japan with $1.9 trillion (39%), Germany with $1.6 trillion (43%), and France with $1.5 trillion (59%). `
    }
};

const SpendingCountryComparison = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const init = () => {
        loadSourceData(CountryData);
        chartInit(spendingConfig);
    }

    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    
    useEffect(() => {
        init();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        init();
    }, [width])


    return (
        <div id="viz" className="spending-country" style={{ overflow: 'visible' }} />
    );
}

export default SpendingCountryComparison;
