import 'src/styles/afg/cg.scss';
import 'src/styles/afg/countryCommon.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import SpendingCountryComparison from 'src/page-sections/afg-spending/countries/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons/faSortAmountDown';
import AfgLayout from 'src/components/layouts/afg/afg';

function SpendingCountryComparisonPage(props) {
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
		<Link
			to={'/americas-finance-guide/deficit/'}
			className="chapter-link chapter-link--deficit">
			<div className="chapter-link__text-block">
				<div className="chapter-link__learn-more">Learn more about</div>
				Federal Deficit
			</div>
			<FontAwesomeIcon
				icon={faAngleRight}
				width={7}
				className="fa fa-angle-right tour__angle-right"
			/>
		</Link>
	);

	return (
		<>
			<SEO
				title="Compare Federal Spending to Other Countries | U.S. Treasury Data Lab "
				description={`How does government spending in the United States compare to ${AfgData.countries_compared_spending.value} other countries? Explore and compare spending using the interactive bar chart.`}
				excerpt={`Check out total spending of the United States compared to ${AfgData.countries_compared_spending.value} different countries in ${AfgData.country_compare_year.value}.`}
			/>
			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-spending.jpg'
				}
			/>
			<AfgLayout location={props.location} chapter={'spending'}>
				<div className="country-common-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Spending Country Comparison – U.S. Treasury"
							twitter={`How does U.S. federal spending compare to other countries? Check out Your Guide to America’s Finances for data from ${AfgData.countries_compared_spending.value}. #YourGuide #DataLab #OpenGov`}
						/>
					</ControlBar>
					<h1>Compare Federal Spending of the United States to other Countries</h1>
					<div className="country-copy">
						<div className="country-copy__text">
							<p>
								How does the United States compare to countries of similar size and
								gross domestic product? Explore the chart, which shows the total
								spending of the United States compared to{' '}
								{AfgData.countries_compared_spending.value} other countries. You can
								compare spending (in dollars) and spending as a percent of gross
								domestic product. Find a country of interest and see for yourself. To
								ensure an accurate comparison, {AfgData.country_compare_year.value}{' '}
								spending data is used in this section, not current fiscal year data.
							</p>
							<p>
								Interested in seeing a longer period of GDP data? U.S. GDP data is
								available from 1947 to present day on{' '}
								<a
									href={'https://fred.stlouisfed.org/series/GDP'}
									rel="noopener noreferrer"
									target="_blank">
									FRED
								</a>
								.
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
						<SpendingCountryComparison />
					</div>
					<div className="clearfix"></div>
					{isMobile && breadcrumbs}
					<section className="hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								The visualization was created using the{' '}
								<a
									href={AfgData.country_comparison_mts.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Treasury Statement (MTS)
								</a>{' '}
								as the data source for federal government spending of the United States.
								Gross domestic product (GDP) figures for the United States come from the{' '}
								<a
									href={AfgData.bea_gdp.value}
									rel="noopener noreferrer"
									target="_blank">
									Bureau of Economic Analysis (BEA)
								</a>
								.
							</p>
							<p>
								In researching potential data sources for information on the spending
								and spending as a percent of GDP of other governments for the country
								comparison module, the{' '}
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
								</a>{' '}
								were chosen because they provide the best comparison for the following
								reasons:
							</p>
							<ul>
								<li>
									consistency with the level of government measured (central government
									only as a standard),
								</li>
								<li>frequency of updates to the data,</li>
								<li>use of real figures over estimates in these datasets.</li>
							</ul>
							<p>
								Countries without {AfgData.country_compare_year.value} figures were
								excluded from the country comparison data set, as well as countries
								reporting only general government figures. General government figures
								include province, state, and local revenue and are not as useful of a
								comparison to federal financial figures for the United States. Some
								governments rely more heavily on provincial, state, or local revenue
								than on the central government, and as a result, this visualization
								should not be considered an absolute comparison of the revenue of
								central governments for all countries.
							</p>
							<p>
								Spending figures were converted to U.S. dollars using the{' '}
								<a
									href={AfgData.exchange_url.value}
									rel="noopener noreferrer"
									target="_blank">
									Rates of Exchange
								</a>{' '}
								published by the US Treasury for {AfgData.conversion_date.value}.
								Countries were excluded that did not have both spending and exchange
								rate data available.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">Download Source Data</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/spending_country_comparison.csv"
											download="spending_country_comparison.csv">
											spending_country_comparison.csv
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

export default SpendingCountryComparisonPage;
