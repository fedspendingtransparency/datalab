import 'src/styles/afg/cg.scss';
import 'src/styles/afg/countryCommon.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import RevenueCountryComparison from 'src/page-sections/afg-revenue/countries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons/faSortAmountDown';
import AfgLayout from 'src/components/layouts/afg/afg';

function RevenueCountryComparisonPage(props) {
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
			to={'/americas-finance-guide/spending/'}
			className="chapter-link chapter-link--spending">
			<div className="chapter-link__text-block">
				<div className="chapter-link__learn-more">Learn more about</div>
				Federal Spending
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
				title="U.S. Revenue Compared to Other Countries | U.S. Treasury Data Lab"
				description="Compare the federal revenue of the United States to other countries, both in dollars and as a percentage of GDP. "
				excerpt="How does the U.S. compare to other countries? We encourage you to check out the chart below. You can compare total revenue (in dollars) and revenue as a percent of gross domestic product (GDP). Find a country of interest and see for yourself."
			/>
			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-revenue.jpg'
				}
			/>
			<AfgLayout location={props.location} chapter={'revenue'}>
				<div className="country-common-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Revenue Country Comparison – U.S. Treasury"
							twitter="How does U.S. federal revenue compare to other countries? Check out the visualizations from Your Guide to America’s Finances to find out. #YourGuide #DataLab #OpenGov"
							facebook=""
							reddit=""
							linkedin=""
							tumblr=""
							email=""
						/>
					</ControlBar>
					<h1>Compare Federal Revenue of the United States to other Countries</h1>
					<div className="country-copy">
						<div className="country-copy__text">
							<p>
								How does U.S. revenue compare to other countries? Explore the chart,
								which shows the total revenue of the United States compared to{' '}
								{AfgData.countries_compared_revenue.value} other countries. You can
								compare total revenue (in dollars) and revenue as a percent of gross
								domestic product. Find a country of interest and see for yourself. To
								ensure an accurate comparison, {AfgData.country_compare_year.value}{' '}
								revenue data is used in this section, not current fiscal year data.
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
						<RevenueCountryComparison />
					</div>
					<div className="clearfix"></div>
					{isMobile && breadcrumbs}
					<section className="hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								The visualization was created using the{' '}
								<a
									href={AfgData.country_comparison_mts.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Treasury Statement (MTS)
								</a>{' '}
								as the data source for federal government revenue of the United States.
								Gross domestic product (GDP) figures for the United States come from the{' '}
								<a
									href={AfgData.bea_gdp.value}
									rel="noopener noreferrer"
									target="_blank">
									Bureau of Economic Analysis (BEA)
								</a>
								. In researching potential data sources for information on the revenue
								and revenue as a percent of GDP of other governments for the country
								comparison module, we chose the{' '}
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
								because they provide the best comparison for the following reasons:
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
								governments rely more heavily on provincial, state, or local revenue and
								than on the central government, and as a result, this visualization
								should not be considered an absolute comparison of the revenue of
								central governments for all countries.
							</p>
							<p>
								Revenue figures were converted to U.S. dollars using the{' '}
								<a
									href={AfgData.exchange_url.value}
									rel="noopener noreferrer"
									target="_blank">
									Rates of Exchange
								</a>{' '}
								published by the US Treasury for {AfgData.conversion_date.value}.
								Countries were excluded that did not have both revenue and exchange rate
								data available.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">Download Source Data</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/revenue_country_comparison.csv"
											download="revenue_country_comparison.csv">
											revenue_country_comparison.csv
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

export default RevenueCountryComparisonPage;
