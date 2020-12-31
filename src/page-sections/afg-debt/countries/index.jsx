import React, { useEffect, useState } from 'react';
import '../../../afg-helpers/countries/selectCountry.scss';
import colors from 'src/styles/afg/colors.scss';
import { loadSourceData } from '../../../afg-helpers/countries/data';
import CountryData from '../../../../static/americas-finance-guide/data/debt_country_comparison.csv';
import { chartInit } from '../../../afg-helpers/countries/chart';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const spendingConfig = {
	amountField: 'debt_usd',
	gdpField: 'debt_gdp',
	amountLabel: 'Debt',
	sourceFields: ['source'],
	primaryColor: colors.colorDebtPrimary,
	chapter: 'debt',
	defaultCountries: [
		{
			display: 'United States',
			plainName: 'United States',
		},
		{
			display: 'Germany',
			plainName: 'Germany',
		},
		{
			display: 'United Kingdom',
			plainName: 'United Kingdom',
		},
		{
			display: 'France',
			plainName: 'France',
		},
		{
			display: 'Australia',
			plainName: 'Australia',
		},
		{
			display: 'Italy',
			plainName: 'Italy',
		},
		{
			display: 'Turkey',
			plainName: 'Turkey',
		},
	],
	accessibilityAttrs: {
		title: 'Federal Debt Country Comparison',
		desc: `${AfgData.country_compare_year.value} Top countries in Outstanding Govt. Debt: U.S. ($20.2T), Japan ($11.6T) China ($5.8T) France ($2.6T) & Germany ($2.5T).`,
	},
};

const DebtCountryComparison = () => {
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
		<div id="viz" className="debt-country" style={{ overflow: 'visible' }} />
	);
};

export default DebtCountryComparison;
