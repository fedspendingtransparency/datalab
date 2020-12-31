import 'src/styles/afg/cg.scss';
import 'src/styles/afg/trendsCommon.scss';

import React, { useEffect, useState } from 'react';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import RevenueTrends from 'src/page-sections/afg-revenue/trends/index';
import AfgLayout from 'src/components/layouts/afg/afg';

function RevenueTrendsPage(props) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 830);
		};

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const breadcrumbs = (
		<section className="tour tour__revenue-trends">
			<div className="tour__part-one">
				<h1>
					How does the revenue of the United States compare to other countries?
				</h1>
				<p>
					When you're done here, see how revenue collected by the U.S. government
					compares to other countries.
				</p>
			</div>
			<a
				href="/americas-finance-guide/revenue/country-comparison/"
				className="tour__link">
				Continue
				<FontAwesomeIcon
					width={7}
					icon={faAngleRight}
					className="fas fa-chevron-right"
				/>
			</a>
		</section>
	);

	return (
		<>
			<SEO
				title="Data Lab - Federal Revenue Trends – U.S. Treasury"
				description="Find out how U.S. federal revenue has changed over time."
				excerpt="This chart shows the categories for federal revenue sources over a five year period. Explore the interactive visualization to see what changes have occurred over the past five years."
				keywords={[
					`federal revenue, revenue trends over time, federal revenue sources, federal income sources, U.S. revenue categories`,
				]}
			/>
			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-revenue.jpg'
				}
			/>
			<AfgLayout location={props.location} chapter={'revenue'}>
				<div className="trends-common-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Federal Revenue Trends – U.S. Treasury"
							twitter="Wondering how federal revenue has changed over the years? Your Guide to America’s Finances has the .CSV data file. Download and perform your own analysis. #YourGuide #DataLab #OpenGov"
						/>
					</ControlBar>
					<h1>Federal Revenue Trends Over Time</h1>
					<div className="trend-flex">
						<div className="trend-copy">
							<div className="tend-copy__text">
								<p>
									How has federal revenue changed over the past few years? This chart
									shows the various source categories for federal revenue over a{' '}
									{AfgData.number_trend_years.value} year period. Click a category to
									view revenue by subcategory. What changes have occurred over the past{' '}
									{AfgData.number_trend_years.value} years? What impact do changes in a
									subcategory have on government revenue?
								</p>
							</div>
							{!isMobile && breadcrumbs}
						</div>
						<div className="trend-chart">
							<h2 className="chart-title">
								Federal Revenue Trends over Time by Category
							</h2>
							<div className="hint">Click a revenue category to view more</div>
							<RevenueTrends />
						</div>
					</div>
					<div className="clearfix"></div>
					{isMobile && breadcrumbs}
					<section className="hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								The visualization was created using{' '}
								<a
									href={AfgData.mts_homepage.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Treasury Statement (MTS)
								</a>{' '}
								as the data source for federal government revenue of the United States.
								Some categories from the MTS have been renamed in order to be more
								easily understood. When payments of Individual Income and Social
								Security and Medicare taxes are made, the taxpayer makes a single,
								combined payment and does not report the amounts attributable to each
								tax. Thus, the MTS reports Social Security and Medicare taxes as
								estimated amounts and reports Individual Income taxes as the residual of
								the combined payments minus the Social Security and Medicare estimated
								amounts. When the actual amounts of Social Security and Medicare taxes
								are determined, the MTS reflects the difference between the initial
								estimates and the actual amounts as an adjustment for prior years' taxes
								with an offsetting adjustment to individual income taxes. In Fiscal Year
								2020, estimates of Social Security and Medicare taxes were made prior to
								the onset of the coronavirus disease 2019 (COVID-19).{' '}
								<a
									href={AfgData.bls_cpiu.value}
									rel="noopener noreferrer"
									target="_blank">
									The Bureau of Labor Statistics (BLS) Consumer Price Index for All Urban
									Consumers (CPI-U)
								</a>{' '}
								was used to adjust revenue in fiscal years{' '}
								{AfgData.inflation_adj_years.value} for inflation. Adjusting for
								inflation allows users to see real, not nominal, changes in sources of
								revenue over time.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">Download Source Data</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/federal_revenue_trends.csv"
											download="federal_revenue_trends.csv">
											federal_revenue_trends.csv
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

export default RevenueTrendsPage;
