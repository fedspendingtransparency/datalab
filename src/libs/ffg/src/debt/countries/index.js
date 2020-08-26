import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../../assets/ffg/data/debt_country_comparison.csv';
import { chartInit } from '../../revenue/countries/chart';
import colors from '../../globalSass/colors.scss';

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

loadSourceData(CountryData);
chartInit(spendingConfig);
