import 'src/styles/afg/cg.scss';
import 'src/page-sections/afg-debt/analysis/debt-analysis.scss';

import React from 'react';
import SEO from 'src/components/seo';
import AfgLayout from 'src/components/layouts/afg/afg';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import DebtCards from 'src/page-sections/afg-debt/analysis/cards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';

function DebtAnalysisPage({ location }) {
	return (
		<>
			<SEO
				title="Data Lab - Federal Debt Analysis – U.S. Treasury"
				description="Who owns the U.S. government’s debt and how much does it cost to maintain?"
				excerpt="Explore this section to learn more about who owns U.S. debt, how much it costs to maintain the debt, and how interest rates affect debt expenses."
				keywords={[
					'debt, national debt, federal debt, U.S.debt, interest rate, interest expense, total debt, cost of debt, cost to maintain debt, federal government’s debt, US investors, social security, Federal Reserve, China,Japan, Brazil top owners of US debt, monthly statement of the public debt, MSPD',
				]}
			/>
			<Og socialMediaImage="/americas-finance-guide/images/social-share/social-media-share-debt.jpg" />
			<AfgLayout location={location} chapter="debt">
				<ControlBar>
					<Share
						location={location}
						title="Data Lab - Federal Debt Analysis – U.S. Treasury"
						twitter="How much does it cost to maintain the federal debt? Who owns the debt? Check out Your Guide to America’s Finances for visualizations and download .CSV data files for your own analysis. #YourGuide #DataLab #OpenGov"
					/>
				</ControlBar>
				<h1>Breakdown of the Federal Government's Debt</h1>
				<p className="debt-analysis-intro">
					What does the U.S. government's debt look like? Similar to people with a
					credit card, mortgage, or car loan, the federal debt consists of different
					parts. See some of the characteristics of the federal debt and how they
					have changed over time.
				</p>
				<div className="cards">
					<section className="card">
						<div className="card__contents">
							<h1 className="card__heading">
								How much does it cost to maintain the federal debt?
							</h1>
							<img
								src="/americas-finance-guide/images/debt-to-interest-expense.svg"
								title={`Cost to Maintain Federal Debt from ${AfgData.year_10.value} to ${AfgData.current_fy.value}`}
								alt={`Federal debt has increased from ${AfgData.year_10.value} to ${AfgData.current_fy.value} (${AfgData.current_fy_debt_short.value}). Interest expense have increased from $402 B in 2015 to ${AfgData.current_interest_expense.value} in ${AfgData.current_fy.value}.`}
								className="card__image"
							/>
							Interest expense is what the government pays to investors who loan money
							to the government. How much the government pays in interest depends on:
							<ul>
								<li>the total federal debt; and</li>
								<li>
									the interest rate investors charge when they loan money to the federal
									government.
								</li>
							</ul>
							Although the total federal debt of the U.S. has increased every year over
							the past ten years, interest expense has remained fairly stable.
						</div>
					</section>
					<section className="card">
						<div className="card__contents">
							<h1 className="card__heading">
								How have interest rates on the federal debt changed?
							</h1>
							<img
								src="/americas-finance-guide/images/debt-to-interest-rate.svg"
								title={`Interest Rate Changes on Federal Debt from ${AfgData.year_10.value} to ${AfgData.current_fy.value}`}
								alt={`Even though federal debt has more than doubled since ${AfgData.year_10.value}, the average interest rate on federal debt has decreased from ${AfgData.year_10_interest_rate.value} in ${AfgData.year_10.value} to ${AfgData.current_interest_rate.value} in ${AfgData.current_fy.value}. Is there more information about who owns the debt?`}
								className="card__image"
							/>
							Interest rates have steadily fallen over the past ten years. Interest
							expenses on the debt paid by the federal government have remained
							relatively stable, even as the federal debt has increased, because of low
							interest rates.
						</div>
					</section>
					<section className="card">
						<div className="card__contents">
							<h1 className="card__heading">
								Is there more information about who owns the debt?
							</h1>
							<img
								src="/americas-finance-guide/images/us-debt-top-investors.svg"
								title="Who Owns Federal Debt"
								alt={`Domestic investors own ${AfgData.debt_owned_us_investors.value} in federal debt and The Social Security trust funds owns ${AfgData.debt_owned_trust_funds.value}. Foreign investors own ${AfgData.debt_owned_foreign_investors.value} of federal debt.`}
								className="card__image card__image--width-constrain"
							/>
							The top 10 owners of debt reflect {AfgData.debt_top10_percent.value} of{' '}
							total debt, which was {AfgData.tic_total.value} as of{' '}
							{AfgData.tic_date.value}. At the end of {AfgData.tic_date.value},{' '}
							{AfgData.debt_owned_us_investors.value} of federal debt was owned by
							investors from the United States, including the Federal Reserve. The
							various trust funds operated by the United States government, like the
							Social Security and Medicare trust fund accounts, held another{' '}
							{AfgData.debt_owned_trust_funds.value} of federal debt. Foreign investors
							owned the remaining {AfgData.debt_owned_foreign_investors.value} of
							federal debt. For a complete list of foreign investors, visit the{' '}
							<a
								href={AfgData.tic_foreign_holders.value}
								target="_blank"
								rel="noopener noreferrer">
								Treasury International Capital (TIC) System
							</a>
							.
						</div>
					</section>
				</div>
				<DebtCards />
				<section className="tour">
					<div className="tour__part-one">
						<h1>
							How does the federal debt of the United States compare to other
							countries?
						</h1>
						<p>
							When you are done here, see how the U.S. federal debt compares to other
							countries.
						</p>
					</div>
					<a
						href="/americas-finance-guide/debt/country-comparison/"
						className="tour__link">
						Continue
						<FontAwesomeIcon
							icon={faAngleRight}
							width={7}
							className="fa fa-angle-right"
						/>
					</a>
				</section>
				<div className="clearfix" />
				<section className="hwcta">
					<AccordionList title="Data Sources and Methodology">
						<p>
							<span>This analysis was created using the </span>
							<a
								href={AfgData.current_mspd.value}
								target="_blank"
								rel="noopener noreferrer">
								{' '}
								Monthly Statement of the Public Debt (MSPD)
							</a>
							<span>
								{' '}
								as the data source for federal debt of the United States and the{' '}
							</span>
							<a
								href={AfgData.current_mts.value}
								target="_blank"
								rel="noopener noreferrer">
								{' '}
								Monthly Treasury Statement (MTS)
							</a>
							<span>
								{' '}
								as the data source for federal government revenue and spending. Average
								interest rates on federal debt come from{' '}
							</span>
							<a
								href={AfgData.debt_interest_rates.value}
								target="_blank"
								rel="noopener noreferrer">
								FiscalData.Treasury.gov
							</a>
							.
							<span>
								{' '}
								Holders of United States Treasury securities were identified using three
								sources: MSPD which contains detailed information on trust funds that
								own Treasury securities, the{' '}
							</span>
							<a
								href={AfgData.tic_foreign_holders.value}
								target="_blank"
								rel="noopener noreferrer">
								Treasury International Capital (TIC)
							</a>
							<span>
								{' '}
								System which identifies foreign holders of U.S. federal debt, and the{' '}
							</span>
							<a
								href={AfgData.soma_domestic_securities.value}
								target="_blank"
								rel="noopener noreferrer">
								System Open Market Account (SOMA)
							</a>
							<span>
								{' '}
								Holdings of Domestic Securities which reports Federal Reserve holdings
								of Treasury securities.
							</span>
						</p>
						<div className="afg__download--div">
							<div className="afg__download--heading">Download Source Data</div>
							<ul>
								<li>
									<a
										href="/americas-finance-guide/data/federal_debt_cost.csv"
										download="federal_debt_cost.csv">
										federal_debt_cost.csv
									</a>
								</li>
								<li>
									<a
										href="/americas-finance-guide/data/federal_debt_average_int_rates.csv"
										download="federal_debt_average_int_rates.csv">
										federal_debt_average_int_rates.csv
									</a>
								</li>
								<li>
									<a
										href="/americas-finance-guide/data/who_owns_federal_debt.csv"
										download="who_owns_federal_debt.csv">
										who_owns_federal_debt.csv
									</a>
								</li>
							</ul>
						</div>
					</AccordionList>
				</section>
			</AfgLayout>
		</>
	);
}

export default DebtAnalysisPage;
