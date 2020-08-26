import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../../assets/ffg/data/deficit_country_comparison.csv';
import { chartInit } from '../../revenue/countries/chart';
import colors from '../../globalSass/colors.scss';

const spendingConfig = {
    accessibilityAttrs : {
        title: 'Federal Deficit Country Comparison',
        desc: `While the U.S. had the largest deficit in 2017 of $666 billion, the deficit as a percent of gross domestic product was smaller for the U.S. than other countries like China, Japan, and India. Of the five largest countries in terms of federal revenue and spending, four of them had a deficit in 2017: $666 billion (3.40% of its gross domestic product) for the United States, $513 billion (4.3%) for China, $224 billion (4.6%) for Japan, and $69 billion (2.7%) for France. Germany was the only country of the five with a surplus in 2017 of $25 billion or 0.7% of gross domestic product.`
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
    }]
};

loadSourceData(CountryData);
chartInit(spendingConfig);
