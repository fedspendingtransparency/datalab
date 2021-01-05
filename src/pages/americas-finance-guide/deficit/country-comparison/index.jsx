import 'src/styles/afg/cg.scss';
import 'src/styles/afg/countryCommon.scss';
import 'src/page-sections/afg-deficit/countries/deficit-country-comparison.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import DefecitCountryComparison from 'src/page-sections/afg-deficit/countries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';
import AfgLayout from 'src/components/layouts/afg/afg';

function DeficitCountryComparisonPage(props) {
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
			to={'/americas-finance-guide/debt/'}
			className="chapter-link chapter-link--debt">
			<div className="chapter-link__text-block">
				<div className="chapter-link__learn-more">Learn more about</div>
				Federal Debt
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
				title="Compare the Federal Deficit to Other Countries | U.S. Treasury Data Lab"
				description="Explore a list of countries by budget deficit. Compare deficits in dollars or as a percentage of GDP."
				excerpt={`How does the U.S. deficit compare with other countries? Check out Your Guide America’s Finances for data from ${AfgData.countries_compared_deficit.value}, then download .CSV data files to perform your own analysis. #YourGuide #DataLab #OpenGov https://datalab.usaspending.gov/americas-finance-guide/deficit/country-comparison/`}
				keywords={[
					`Deficit, federal deficit, U.S.deficit, national deficit,  debt, national debt, federal debt, U.S. debt compared to other countries`,
				]}
			/>
			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-revenue.jpg'
				}
			/>
			<AfgLayout location={props.location} chapter={'deficit'}>
				<div className="country-common-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Deficit Country Comparison – U.S. Treasury"
							twitter={`How does the U.S. deficit compare with other countries? Check out Your Guide America’s Finances for data from ${AfgData.countries_compared_deficit.value}, then download .CSV data files to perform your own analysis. #YourGuide #DataLab #OpenGov `}
						/>
					</ControlBar>
					<h1>
						Compare the Federal Deficit of the United States to Other Countries
					</h1>
					<div className="country-copy">
						<div className="country-copy__text">
							<p>
								How does the United States compare to countries of similar size and
								gross domestic product? Explore the chart, which shows the total deficit
								of the United States compared to{' '}
								{AfgData.countries_compared_deficit.value} other countries. You can
								compare deficits (in dollars) and deficit as a percent of gross domestic
								product. Find a country of interest and see for yourself. To ensure an
								accurate comparison, {AfgData.country_compare_year.value} deficit data
								is used in this section, not current fiscal year data.{' '}
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
						<div className="hint">
							Click{' '}
							<FontAwesomeIcon
								icon={faSortAmountDown}
								width={8}
								className={'fas fa-sort-amount-down'}
							/>{' '}
							to sort columns.
						</div>{' '}
						<DefecitCountryComparison />
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
								as the data source for federal government revenue, spending, and deficit
								of the United States. Gross domestic product (GDP) figures for the
								United States come from the{' '}
								<a
									href={AfgData.bea_gdp.value}
									rel="noopener noreferrer"
									target="_blank">
									Bureau of Economic Analysis (BEA)
								</a>
								.
							</p>
							<p>
								In researching potential data sources for information on the revenue and
								spending and deficit as a percent of GDP of other governments for the
								country comparison module, the{' '}
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
								include province, state, and local revenue and spending and are not as
								useful of a comparison to federal financial figures for the United
								States. Some governments rely more heavily on provincial, state, or
								local revenue and spending than on the central government, and as a
								result, this visualization should not be considered an absolute
								comparison of the revenue of central governments for all countries.
							</p>
							<p>
								Deficit figures were converted to U.S. dollars using the{' '}
								<a
									href={AfgData.exchange_url.value}
									rel="noopener noreferrer"
									target="_blank">
									Rates of Exchange
								</a>{' '}
								published by the US Treasury for {AfgData.conversion_date.value}.
								Countries were excluded that did not have revenue, spending, and
								exchange rate data available.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">Download Source Data</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/deficit_country_comparison.csv"
											download="deficit_country_comparison.csv">
											deficit_country_comparison.csv
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

export default DeficitCountryComparisonPage;
