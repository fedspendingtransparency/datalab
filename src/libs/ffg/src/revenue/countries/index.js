import { loadSourceData } from './data';
import { chartInit } from './chart';
import CountryData from '../../../../assets/ffg/data/revenue_country_comparison.csv';
import colors from '../../globalSass/colors.scss';

const incomeConfig = {
    amountField: 'revenue_usd',
    gdpField: 'revenue_gdp',
    amountLabel: 'Revenue',
    sourceFields: ['revenue_source','gdp_source'],
    chapter: 'revenue',
    primaryColor: colors.revenuePrimary,
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
        title: 'Federal Revenue Country Comparison',
        desc: `The top five countries in terms of federal revenue in 2019 were the United States with $3.5 trillion, 17% of its gross domestic product), China with $2.6 trillion (22%), Japan with $1.7 trillion (34%), Germany with $1.6 trillion (43%), and France with $1.4 trillion (56%).`
    }
};

loadSourceData(CountryData);
chartInit(incomeConfig);
