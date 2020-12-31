import 'src/styles/afg/cg.scss';
import 'src/page-sections/afg-spending/categories/spending-categories.scss';

import React from 'react';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import SpendingCategories from 'src/page-sections/afg-spending/categories/index';
import Og from 'src/components/og-tag/og';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons/faSortAlphaDown';
import { faSortAlphaUp } from '@fortawesome/free-solid-svg-icons/faSortAlphaUp';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons/faSortAmountDown';
import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons/faSortAmountUp';
import AfgLayout from 'src/components/layouts/afg/afg';

function SpendingCategoriesPage(props) {
	return (
		<>
			<SEO
				title="Data Lab - Federal Spending Categories – U.S. Treasury"
				description={`In ${AfgData.current_fy.value}, the U.S. government spent ${AfgData.current_fy_spending_short.value}. Explore the breakdown of federal spending by category or agency.`}
				excerpt={`You can explore ${AfgData.current_fy_spending_short.value} in spending either by category or by agency.  Curious to find out more? Dive deeper to see spending details by sub-category and other options.`}
				keywords={[
					`federal spending, revenue, federal revenue, U.S. spending, social security, national defense, medicare, health,  interest from debt, veteran’s benefits`,
				]}
			/>

			<Og
				socialMediaImage={
					'/americas-finance-guide/images/social-share/social-media-share-spending.jpg'
				}
			/>

			<AfgLayout location={props.location} chapter={'spending'}>
				<div className="spending-categories-wrapper">
					<div className="spending-categories">
						<ControlBar>
							<Share
								location={props.location}
								title="Data Lab - Federal Spending Categories – U.S. Treasury"
								twitter="Check out Your Guide to America’s Finances to search federal spending by category or by agency, then download .CSV files with the data to perform your own analysis! #YourGuide #DataLab #OpenGov"
							/>
						</ControlBar>

						<h1>Federal Spending by Category and Agency</h1>
						<div id="viz-wrapper">
							<h2 className="chart-title">
								<div
									id="spending-chart-toggle"
									className="spending-chart-toggle clearfix"
									data-active="function">
									<span className="spending-chart-toggle__label spending-chart-toggle__label--categories">
										Category
									</span>
									<button
										id="toggle-spending-data-type"
										className="toggle-control"
										aria-label="Toggle spending data type">
										<div className="toggle-control__background">
											<div className="toggle-control__dot" />
										</div>
									</button>
									<span className="spending-chart-toggle__label spending-chart-toggle__label--agency">
										Agency
									</span>
								</div>
							</h2>

							<div id="viz-chart-container">
								<div id="bar-controls">
									<div className="bar-controls__left">
										Sort by:
										<div className="bar-controls__left--button-div">
											<button id="sort-amount" className="active">
												Amount{' '}
												<FontAwesomeIcon
													id="sortAmountDown"
													width={11}
													icon={faSortAmountDown}
													className="svg-inline--fa fa-w-16"
												/>
												<FontAwesomeIcon
													id="sortAmountUp"
													icon={faSortAmountUp}
													width={11}
													className="svg-inline--fa fa-w-16 hidden"
												/>
											</button>
											<button id="sort-name">
												Name{' '}
												<FontAwesomeIcon
													id="sortAlphaDown"
													width={11}
													icon={faSortAlphaDown}
													className="svg-inline--fa fa-w-16"
												/>
												<FontAwesomeIcon
													id="sortAlphaUp"
													icon={faSortAlphaUp}
													width={11}
													className="svg-inline--fa fa-w-16 hidden"
												/>
											</button>
										</div>
									</div>
									<div className="bar-controls__right">
										<div className="bar-controls__right--div">
											<input
												type="text"
												placeholder="Search by a term..."
												id="filter-by-name"
											/>
											<FontAwesomeIcon
												icon={faSearch}
												id="filter-by-name-icon"
												width={16}
												className="fa fa-search spending__search--icon"
											/>
										</div>
									</div>
								</div>

								<hr />
								<SpendingCategories />
								<hr className="categories__show-more" />
								<div id="show-more-container" className="categories__show-more">
									<button id="show-more-button" className="chart__show-more">
										Show More
									</button>
								</div>
							</div>
						</div>

						<div className="poc-content" id="income-facts">
							<p>
								In this section, you can explore federal spending either by category or
								by agency. Curious to find out more? Dive deeper to see spending details
								by subcategory and other options.
							</p>

							<section className="accordion">
								<AccordionList
									title="What does the government buy?"
									className="accordion__heading">
									<div className="accordion__content">
										<p>
											Well, a lot. The government buys a variety of products and services
											used to serve the public &mdash; everything from military aircraft,
											construction and highway maintenance equipment, buildings, and
											livestock, to research, education, and training. These purchases are
											classified by Object Classes, a classification system that describes
											the types of goods and services purchased by the government.
										</p>
										<p>
											Our partner site,{' '}
											<a
												href={AfgData.usaspending_home.value}
												rel="noopener noreferrer"
												target="_blank">
												USAspending.gov
											</a>
											, allows visitors to explore federal spending by the types of items
											and services purchased by the federal government. Go explore federal
											spending by{' '}
											<a
												href={AfgData.usaspending_object_class.value}
												rel="noopener noreferrer"
												target="_blank">
												Object Class
											</a>{' '}
											or to learn how spending categories and subcategories breakdown, go
											explore federal spending by{' '}
											<a
												href="https://www.usaspending.gov/explorer/budget_function"
												rel="noopener noreferrer"
												target="_blank">
												Budget Function
											</a>
											.
										</p>
									</div>
								</AccordionList>
							</section>

							<section className="accordion">
								<AccordionList
									title="What are mandatory, discretionary, and supplemental spending?"
									className="accordion__heading">
									<div className="accordion__content">
										<p>
											The difference between mandatory and discretionary spending relates
											to whether spending is dictated by prior law or voted on in the
											annual appropriations process. Programs like Social Security,
											Medicare, and various income security programs, are based on laws
											previously established that dictate the money budgeted for spending
											each year, which is why spending for those programs is referred to as
											mandatory.
										</p>
										<p>
											Discretionary spending is money formally approved by the President
											and voted on by Congress during the appropriations process each year.
											Generally, a majority of the discretionary spending is budgeted
											towards national defense. The rest of discretionary spending is
											budgeted to other federal agency programs ranging from
											transportation, education, housing, social service programs, as well
											as science and environmental organizations.
										</p>
										<p>
											An additional type of spending that impacts federal spending is{' '}
											<a
												href={
													'https://www.senate.gov/reference/glossary_term/supplemental_appropriation.htm#:~:text=supplemental%20appropriation%20-%20Budget%20authority%20provided%2cor%20continuing%20appropriations%20already%20provided.'
												}
												rel="noopener noreferrer"
												target="_blank">
												supplemental appropriations
											</a>
											, also referred to as supplemental spending. In 2020, the U.S.
											Congress passed four supplemental{' '}
											<a
												href={'https://www.usaspending.gov/?glossary=appropriation'}
												rel="noopener noreferrer"
												target="_blank">
												appropriations
											</a>{' '}
											laws for the federal government to use in relief efforts, to aid the
											nation’s recovery from the coronavirus disease 2019 (COVID-19). These
											four supplemental appropriations laws, including the Coronavirus Aid,
											Relief, and Economic Security (CARES) Act, totaled $2.58 trillion for
											use by federal agencies. You can take an in-depth look at those
											supplemental appropriation laws in the{' '}
											<a href={'/federal-covid-funding/'} rel="noopener noreferrer">
												COVID-19 funding analysis
											</a>
											.
										</p>
									</div>
								</AccordionList>
							</section>

							<section className="accordion">
								<AccordionList
									title="What does the future of Social Security and Medicare look like?"
									className="accordion__heading">
									<div className="accordion__content">
										<p>
											Each year, the Social Security and Medicare Boards of Trustees
											publish their{' '}
											<a
												href={AfgData.trustees_report.value}
												rel="noopener noreferrer"
												target="_blank">
												Annual Report
											</a>{' '}
											on the financial status of Social Security and Medicare. The Boards’
											projections indicate that spending will continue to increase. As the
											average age of Americans increases, more funding is needed to support
											entitlement programs like Social Security, Medicare, and retirement
											and disability services for both military and civil servants. In{' '}
											{AfgData.trustees_fy.value}, the cost of the Social Security and
											Medicare programs was {AfgData.ss_med_cost.value}.
										</p>
										<p>
											The majority of Social Security and Medicare funding comes from tax
											revenue and interest on trust fund reserves. For{' '}
											{AfgData.trustees_fy.value}, income for these programs was{' '}
											{AfgData.ss_med_income.value}. However, costs exceeded revenue
											starting in {AfgData.med_deficit_year.value} for Medicare Part A and
											are expected to exceed revenue beginning in{' '}
											{AfgData.ss_deficit_year.value} for Social Security. This will
											require the federal government to begin drawing down trust fund
											balances in order to continue paying full benefits. While Medicare
											Parts B and D are largely funded by general revenues and beneficiary
											premiums, the Boards project that Medicare Part A trust fund will be
											depleted by {AfgData.med_deplete_year.value} and the Social Security
											trust fund will be depleted by {AfgData.ss_deplete_year.value}.
										</p>
										<p>
											It is important to note that these projections do not include the
											possible impacts the COVID-19 pandemic may have on the Social
											Security and Medicare programs.
										</p>
									</div>
								</AccordionList>
							</section>

							<section className="tour">
								<div className="tour__part-one">
									<h1>How has federal spending changed over time?</h1>
									<p>
										When you are done here, we encourage you to explore trends in
										government spending over the past {AfgData.number_trend_years.value}{' '}
										years.
									</p>
								</div>
								<a
									href="/americas-finance-guide/spending/trends/"
									className="tour__link">
									Continue
									<FontAwesomeIcon
										icon={faAngleRight}
										width={7}
										className="fa fa-angle-right"
									/>
								</a>
							</section>
						</div>

						<section className="hwcta">
							<AccordionList title="Data Sources and Methodology">
								<p>
									This visualization was created using the{' '}
									<a
										href={AfgData.current_mts.value}
										rel="noopener noreferrer"
										target="_blank">
										Monthly Treasury Statement (MTS)
									</a>{' '}
									as the data source for federal government spending of the United
									States. Some categories from the MTS have been renamed in order to be
									more easily understood.
								</p>
								<p>
									The Social Security and Medicare Boards of Trustees publish their{' '}
									<a
										href={AfgData.trustees_report.value}
										rel="noopener noreferrer"
										target="_blank">
										Annual Report
									</a>{' '}
									in April for the prior Fiscal Year. For example, the 2019 Annual Report
									contains financial information for the 2018 Fiscal Year. Based on
									information available at the time of publication, it is believed that
									the 2019 Annual Report will be available in Fiscal Year 2020.
								</p>
								<div className="afg__download--div">
									<div className="afg__download--heading">Download Source Data</div>
									<ul>
										<li>
											<a
												href="/americas-finance-guide/data/federal_spending_categories.csv"
												download="federal_spending_categories.csv">
												federal_spending_categories.csv
											</a>
										</li>
									</ul>
								</div>
							</AccordionList>
						</section>
					</div>
				</div>
			</AfgLayout>
		</>
	);
}

export default SpendingCategoriesPage;
