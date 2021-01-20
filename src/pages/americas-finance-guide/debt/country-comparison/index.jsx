import 'src/styles/afg/cg.scss';
import 'src/styles/afg/countryCommon.scss';
import 'src/page-sections/afg-debt/countries/debt-country-comparison.scss';

import React, { useState, useEffect } from 'react';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import DebtCountryComparison from 'src/page-sections/afg-debt/countries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';
import AfgLayout from 'src/components/layouts/afg/afg';

function DebtCountryComparisonPage(props) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1000);
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const breadcrumbs = (
		<a
			href="/americas-finance-guide/revenue/"
			className="chapter-link chapter-link--revenue">
			<div className="chapter-link__text-block">
				<div className="chapter-link__learn-more">Learn more about</div>
				Federal Revenue
			</div>
			<FontAwesomeIcon
				icon={faAngleRight}
				width={7}
				className="fa fa-angle-right tour__angle-right"
			/>
		</a>
	);

	return (
		<>
			<SEO
				title="Compare the U.S. Debt to Other Countries | U.S. Treasury Data Lab"
				description={`How does the United States compare to countries of similar size and GDP? Explore this interactive bar chart showing the U.S. debt compared to ${AfgData.countries_compared_debt.value} countries.`}
				excerpt={`How does the federal debt of the U.S. compare to other countries? Check out Your Guide to America’s Finances for data from ${AfgData.countries_compared_debt.value}.  Check out the site’s data visualizations, then download .CSV files of the data to perform your own analysis. #YourGuide #DataLab #OpenGov" https://datalab.usaspending.gov/americas-finance-guide/debt/country-comparison/`}
			/>
			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-debt.jpg'
				}
			/>
			<AfgLayout location={props.location} chapter={'debt'}>
				<div className="country-common-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Debt Country Comparison – U.S. Treasury"
							twitter={`How does the federal debt of the U.S. compare to other countries? Check out Your Guide to America’s Finances for data from ${AfgData.countries_compared_debt.value}. Check out the site’s data visualizations, then download .CSV files of the data to perform your own analysis. #YourGuide #DataLab #OpenGov"`}
						/>
					</ControlBar>
					<h1>Compare the Federal Debt of the United States to Other Countries</h1>
					<div className="country-copy">
						<div className="country-copy__text">
							<p>
								How does the United States compare to countries of similar size and
								gross domestic product? Explore the chart, which shows the total federal
								debt of the United States compared to total government debt of{' '}
								{AfgData.countries_compared_debt.value} other countries. You can compare
								total debt (in dollars) and debt as a percent of gross domestic product.
								Find a country of interest and see for yourself. Because the U.S.
								government has more money coming in and going out than any other
								country, it helps to compare the debt of the U.S. government to other
								countries based on the size of their economies. To ensure an accurate
								comparison, {AfgData.country_compare_year.value} debt data is used in
								this section, not current fiscal year data.
							</p>
							<p>
								<em>
									Please note that the countries depicted in this chart have different
									forms of government, and these differences may impact the scope of
									finances reported by each country.
								</em>
							</p>
						</div>
						{!isMobile && breadcrumbs}
					</div>
					<div className="country-chart">
						<h2 className="chart-title">
							{AfgData.country_compare_year.value} Country Comparison
						</h2>
						<div className="country-hint">
							Click{' '}
							<FontAwesomeIcon
								icon={faSortAmountDown}
								width={8}
								className={'fas fa-sort-amount-down'}
							/>{' '}
							to sort columns.
						</div>
						<DebtCountryComparison />
					</div>
					<div className="clearfix"></div>
					{isMobile && breadcrumbs}
					<section className="hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								This visualization was created using the{' '}
								<a
									href={AfgData.country_comparison_mspd.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Statement of the Public Debt (MSPD)
								</a>{' '}
								as the data source for federal government debt of the United States.
								Gross domestic product (GDP) figures come from the{' '}
								<a
									href={AfgData.bea_gdp.value}
									rel="noopener noreferrer"
									target="_blank">
									Bureau of Economic Analysis (BEA)
								</a>
								. Debt figures for countries other than the United States come from the{' '}
								<a
									href={AfgData.gfs_url.value}
									rel="noopener noreferrer"
									target="_blank">
									International Monetary Fund Global Financial Statistics
								</a>{' '}
								and{' '}
								<a
									href={AfgData.eurostats_url.value}
									rel="noopener noreferrer"
									target="_blank">
									Eurostats
								</a>
								. These sources were chosen because they provide the best comparison for
								the following reasons:
								<ul>
									<li>
										consistency with the level of government measured (central government
										only as a standard),
									</li>
									<li>frequency of updates to the data,</li>
									<li>use of real figures over estimates in these datasets.</li>
								</ul>
							</p>
							<p>
								Countries without {AfgData.country_compare_year.value} figures were
								excluded from the country comparison data set, as well as countries
								reporting only general government figures. General government figures
								include province, state, and local debt and are not as useful of a
								comparison to federal financial figures for the United States. Some
								governments rely on provincial, state, or local debt than on the central
								government, and as a result, this visualization should not be considered
								an absolute comparison of the debt of central governments for all
								countries.
							</p>
							<p>
								Debt figures were converted to U.S. dollars using the{' '}
								<a
									href={AfgData.exchange_url.value}
									rel="noopener noreferrer"
									target="_blank">
									Rates of Exchange
								</a>{' '}
								published by the US Treasury for {AfgData.conversion_date.value}.
								Countries were excluded that did not have both debt, and exchange rate
								data available.
							</p>
							<p>
								The conversion of debt figures to U.S. dollars makes comparisons among
								countries more convenient. However, the implied burden of debt may be
								misrepresented for a given country if the majority of that nation’s debt
								was represented in a currency other than U.S. dollars, and the currency
								in which the debt was held had an abnormal valuation relative to the
								U.S. dollar on the date of currency conversion.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">Download Source Data</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/debt_country_comparison.csv"
											download="debt_country_comparison.csv">
											debt_country_comparison.csv
										</a>
									</li>
								</ul>
							</div>
						</AccordionList>
					</section>
				</div>
			</AfgLayout>
		</>
	);
}

export default DebtCountryComparisonPage;
