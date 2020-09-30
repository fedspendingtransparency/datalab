import React from 'react';
import PageHeader from './page';

export default class GenericHeader extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (<PageHeader headerItems={['Analyses', "America's Finance Guide", 'Resources', 'Glossary']}
              megamenuItems={[
                {
                  analyses: [
                    { name: 'COVID-19 Funding', link: '/federal-covid-funding/' },
                    { name: 'Colleges and Universities', link: '/colleges-and-universities/' },
                    { name: 'Homelessness Analysis', link: '/homelessness-analysis/' },
                    { name: 'Federal Employees', link: '/federal-employees/' },
                    { name: 'Competition In Contracting', link: '/competition-in-contracting/' },
                    { name: 'Contract Explorer', link: '/contract-explorer/' },
                    { name: 'DTS Tracker', link: '/dts/' },
                    { name: 'Budget Function', link: '/budget-function/' },
                    { name: 'Federal Account Explorer', link: '/federal-account-explorer/' },
                  ]
                },
                {
                  express: [
                    /* {name: 'Research and Development in Contracting', link: '/test-link'}, */
                    /* {name: 'Women-Owned Small Businesses', link: '/test-link'} */
                  ]
                },
                {
                  ffg: [
                    { header: 'Overview', name: "America's Finance Guide", link: '/americas-finance-guide/' },
                    { header: 'Revenue', name: 'Revenue and GDP', link: '/americas-finance-guide/revenue/' },
                    { header: 'Revenue', name: 'Revenue Categories', link: '/americas-finance-guide/revenue/categories/' },
                    { header: 'Revenue', name: 'Federal Revenue Trends', link: '/americas-finance-guide/revenue/trends/' },
                    { header: 'Revenue', name: 'Country Comparison', link: '/americas-finance-guide/revenue/country-comparison/' },
                    { header: 'Spending', name: 'Spending and GDP', link: '/americas-finance-guide/spending/' },
                    { header: 'Spending', name: 'Spending Categories', link: '/americas-finance-guide/spending/categories/' },
                    { header: 'Spending', name: 'Federal Spending Trends', link: '/americas-finance-guide/spending/trends/' },
                    { header: 'Spending', name: 'Country Comparison', link: '/americas-finance-guide/spending/country-comparison/' },
                    { header: 'Deficit', name: 'Explore Deficit', link: '/americas-finance-guide/deficit/' },
                    { header: 'Deficit', name: 'Federal Deficit Trends', link: '/americas-finance-guide/deficit/trends/' },
                    { header: 'Deficit', name: 'Country Comparison', link: '/americas-finance-guide/deficit/country-comparison/' },
                    { header: 'Debt', name: 'Explore Debt', link: '/americas-finance-guide/debt/' },
                    { header: 'Debt', name: 'Federal Debt Trends', link: '/americas-finance-guide/debt/trends/' },
                    { header: 'Debt', name: 'Federal Debt Analysis', link: '/americas-finance-guide/debt/analysis/' },
                    { header: 'Debt', name: 'Country Comparison', link: '/americas-finance-guide/debt/country-comparison/' },
                  ]
                },
                {
                  resources: [
                    { name: 'Analyst Guide', link: '/analyst-guide/' },
                    { name: "Student Innovator's Toolbox", link: '/student-innovators-toolbox/' },
                    { name: 'USAspending API', link: 'https://api.usaspending.gov/' },
                    { name: 'Fiscal Data API', link: 'https://fiscaldata.treasury.gov/api-documentation/' },
                    { name: 'DATA ACT Schema', link: 'https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html' },
                  ]
                },
                {
                  glossary: [
                    { name: 'Glossary', link: '#' }
                  ]
                },
              ]
                            }
              isHome={this.props.isHome}
            />);
  }

};
