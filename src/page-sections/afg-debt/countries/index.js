import React, { useEffect } from 'react';
import '../../afg-revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../afg-revenue/countries/data.js';
import CountryData from '../../../../static/americas-finance-guide/data/debt_country_comparison.csv';
import { chartInit } from '../../afg-revenue/countries/chart.js';
import colors from 'src/styles/afg/colors.scss';

const spendingConfig = {
    amountField: 'debt_usd',
    gdpField: 'debt_gdp',
    amountLabel: 'Debt',
    sourceFields: ['spending_source', 'gdp_source'],
    primaryColor: colors.colorDebtPrimary,
    chapter: 'debt',
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
        title: 'Federal Debt Country Comparison',
        desc: `By the end of 2017, the five largest countries in terms of federal revenue and spending had the following government debt outstanding: the United States with $20.2 trillion (103% of gross domestic product), Japan with $11.6 trillion (239%), China with $5.8 trillion (48%), France with $2.6 trillion (101%), and Germany with $2.5 trillion (68%).`
    }
};

const DebtCountryComparison = () => {
    const init = () => {
        loadSourceData(CountryData);
        chartInit(spendingConfig);
    }

    useEffect(() => {
        init();
        window.addEventListener('resize', init);
        return () => {
            window.removeEventListener('resize', init);
        }
    }, []);

    return (
        <div id="viz" className="debt-country" />
    );
}

export default DebtCountryComparison;

