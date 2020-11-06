import 'src/styles/afg/cg.scss';
import 'src/styles/afg/trendsCommon.scss';
import 'src/page-sections/afg-debt/trends/debt-trends.scss';

import React from 'react';
import SEO from 'src/components/seo';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import GdpTemplate from 'src/components/gdp-template/gdp-template';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import DebtTrendsToggle from 'src/page-sections/afg-debt/trends/index';
import AfgLayout from 'src/components/layouts/afg/afg';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';

function DebtTrendsPage({ location }) {
	return (
		<>
			<Og socialMediaImage="/americas-finance-guide/images/social-share/social-media-share-debt.jpg" />

			<SEO
				title="Data Lab - Federal Debt Trends – U.S. Treasury"
				description={`The U.S. has generally increased the federal debt since ${AfgData.debt_trend_start.value}.`}
				excerpt={`In the U.S., federal debt has generally increased over the past two decades. According to the most recent Financial Report of the United States Government (FR), the current fiscal policy is not sustainable. By the end of ${AfgData.current_fy.value}, federal debt was ${AfgData.current_fy_debt.value} trillion.`}
				keywords={[
					'debt, national debt, federal debt, U.S. debt, deficit vs. debt, deficit, national deficit, surplus, spending exceeds income, spending exceeds revenue, federal deficit, total debt, federal government’s debt, monthly statement of the public debt, MSPD',
				]}
			/>

			<AfgLayout location={location} chapter="debt">
				<div className="trends-common-wrapper debt-trends-wrapper">
					<ControlBar>
						<Share
							location={location}
							title="Data Lab - Federal Debt Trends – U.S. Treasury"
							twitter="What is the ratio of debt to GDP? How has the debt changed over time? Your Guide to America’s Finances has data from 2000-2019 and .CSV data files available for download. #YourGuide #DataLab #OpenGov"
						/>
					</ControlBar>

					<h1>Federal Debt Trends Over Time</h1>

					<DebtTrendsToggle />

					<div className="trend-chart-container">
						<img
							id="debt-image"
							className="trend-chart-container__image trend-chart-container__image--active"
							src="/americas-finance-guide/images/debt-trends-dollar.svg"
							title={`${AfgData.current_fy.value} Federal Debt Trends by Total Dollar and Percent of GDP`}
							alt={`Federal debt has steadily risen since ${AfgData.debt_trend_start.value} and reached ${AfgData.current_fy_debt_short.value}  by the end of ${AfgData.current_fy.value}. Federal debt as a percent of GDP for ${AfgData.current_fy.value} stood at ${AfgData.debt_percent_gdp.value}.`}
						/>
						<img
							id="gdp-image"
							className="trend-chart-container__image"
							src="/americas-finance-guide/images/debt-trends-gdp.svg"
							title={`${AfgData.current_fy.value} Federal Debt Trends by Total Dollar and Percent of GDP`}
							alt={`Federal debt has steadily risen since ${AfgData.debt_trend_start.value} and reached ${AfgData.current_fy_debt_short.value}  by the end of ${AfgData.current_fy.value}. Federal debt as a percent of GDP for ${AfgData.current_fy.value} stood at ${AfgData.debt_percent_gdp.value}.`}
						/>
					</div>

					<aside className="debt-aside">
						<p>
							The U.S. has steadily increased the federal debt since{' '}
							{AfgData.debt_trend_start.value}. Another way to view the federal debt
							over time is to look at the ratio of federal debt related to gross
							domestic product (GDP). This ratio has also increased over time.
							According to the most recent{' '}
							<a
								href={AfgData.financial_report.value}
								rel="noopener noreferrer"
								target="_blank">
								Financial Report of the United States Government (FR)
							</a>
							, the current fiscal policy is not sustainable.
						</p>

						<section className="tour">
							<div className="tour__part-one">
								<h1>What else is important to know about the federal debt?</h1>
								<p>
									When you are done here, continue on for a breakdown of the federal
									debt.
								</p>
							</div>
							<a href="/americas-finance-guide/debt/analysis/" className="tour__link">
								Continue
								<FontAwesomeIcon
									icon={faAngleRight}
									width={7}
									className="fa fa-angle-right"
								/>
							</a>
						</section>
					</aside>

					<div className="clearfix" />

					<section className="hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								This visualization was created using the{' '}
								<a
									href={AfgData.mspd_homepage.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Statement of the Public Debt (MSPD)
								</a>{' '}
								as the data source for federal debt of the United States.{' '}
								<GdpTemplate /> Throughout this page, we use the gross domestic product
								for the Fiscal Year, not the Calendar Year, in order to facilitate an
								appropriate comparison.
							</p>
							{/*<div className="afg__download--div">*/}
							{/*  <div className="afg__download--heading">Download Source Data</div>*/}
							{/*  <ul>*/}
							{/*    <li><a href="/americas-finance-guide/data/federal_debt_trends.csv" download="federal_debt_trends.csv">federal_debt_trends.csv</a></li>*/}
							{/*  </ul>*/}
							{/*</div>*/}
						</AccordionList>
					</section>
				</div>
			</AfgLayout>
		</>
	);
}

export default DebtTrendsPage;
