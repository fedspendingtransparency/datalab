import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/spending/categories/spending-categories.scss'

import React from "react"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import { AFGHeader } from 'src/components/headers/headers';
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import AfgNav from 'src/components/afg-nav/afg-nav';
import SpendingCategories from 'src/libs/ffg/src/spending/categories/index.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSearch, faSortAlphaDown, faSortAlphaUp, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

function SpendingCategoriesPage(props) {
    return (
        <>
            <SEO
                title='Data Lab - Federal Spending Categories – U.S. Treasury'
                description='In 2019, the U.S. government spent $4.4 trillion. Explore the breakdown of federal spending by category or agency.'
                excerpt='You can explore $4.4 trillion in spending either by category or by agency.  Curious to find out more? Dive deeper to see spending details by sub-category and other options.'
                keywords={[`federal spending, revenue, federal revenue, U.S. spending, social security, national defense, medicare, health,  interest from debt, veteran’s benefits`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'spending'}></AfgNav>

                <div className="cg-wrapper spending-categories-wrapper">
                    <div className="ffg-wrapper spending-categories">
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
                                <div id="spending-chart-toggle" className="spending-chart-toggle clearfix" data-active="function">
                                    <span className="spending-chart-toggle__label spending-chart-toggle__label--categories" >Category</span>
                                    <button id="toggle-spending-data-type" className="toggle-control">
                                        <div className="toggle-control__background">
                                            <div className="toggle-control__dot"></div>
                                        </div>
                                    </button>
                                    <span className="spending-chart-toggle__label spending-chart-toggle__label--agency">Agency</span>
                                </div>
                            </h2>

                            <div id='viz-chart-container'>
                                <div id="bar-controls">
                                    <div className='bar-controls__left'>
                                        Sort by:
                                        <div className='bar-controls__left--button-div'>
                                            <button id="sort-amount" className="active">Amount <FontAwesomeIcon id='sortAmountDown' width={11} icon={faSortAmountDown} className='svg-inline--fa fa-w-16'/><FontAwesomeIcon id='sortAmountUp' icon={faSortAmountUp} width={11} className='svg-inline--fa fa-w-16 hidden'/></button>
                                            <button id="sort-name">Name <FontAwesomeIcon id='sortAlphaDown' width={11} icon={faSortAlphaDown} className='svg-inline--fa fa-w-16'/><FontAwesomeIcon id='sortAlphaUp' icon={faSortAlphaUp} width={11} className='svg-inline--fa fa-w-16 hidden'/></button>
                                        </div>
                                    </div>
                                    <div className='bar-controls__right'>
                                        <div className='bar-controls__right--div'>
                                            <input type="text" placeholder='Search by a term...' id="filter-by-name"></input>
                                            <FontAwesomeIcon icon={faSearch} id='filter-by-name-icon' width={16} className="fa fa-search spending__search--icon"/>
                                        </div>
                                    </div>
                                </div>

                                <hr></hr>
                                <SpendingCategories />
                                <hr className='categories__show-more'></hr>
                                <div id="show-more-container" className='categories__show-more'>
                                    <button id="show-more-button" className="chart__show-more">Show More</button>
                                </div>
                            </div>
                        </div>

                        <div className="poc-content" id="income-facts">
                            <p>In this section, you can explore federal spending either by category or by agency. Curious to find out more? Dive deeper to see spending details by subcategory and other options.</p>

                            <section className="accordion">
                                <AccordionList title="What does the government buy?" className="accordion__heading">
                                    <div className="accordion__content">
                                        <p>Well, a lot. The government buys a variety of products and services used to serve the public &mdash; everything from military aircraft, construction and highway maintenance equipment, buildings, and livestock, to research, education, and training. These purchases are classified by Object Classes, a classification system that describes the types of goods and services purchased by the government.</p>
                                        <p>Our partner site, <a href={AfgData.usaspending_home.value} rel="noopener noreferrer" target="_blank">USASpending.gov</a> allows visitors to explore federal spending by the types of items and services purchased by the federal government. Go explore federal spending by <a href={AfgData.usaspending_object_class.value} rel="noopener noreferrer" target="_blank">Object Class</a>.</p>
                                    </div>
                                </AccordionList>
                            </section>

                            <section className="accordion">
                                <AccordionList title="What are mandatory and discretionary spending?" className="accordion__heading">
                                    <div className="accordion__content">
                                        <p>The difference between mandatory and discretionary spending relates to whether spending is dictated by prior law or voted on in the annual appropriations process. Programs like Social Security, Medicare, and various income security programs, are based on laws previously established that dictate the money budgeted for spending each year, which is why spending for those programs is referred to as mandatory.</p>
                                        <p>Discretionary spending is money formally approved by the President and voted on by Congress during the appropriations process each year. Generally, a majority of the discretionary spending is budgeted towards national defense. The rest of discretionary spending is budgeted to other federal agency programs ranging from transportation, education, housing, social service programs, as well as science and environmental organizations.</p>
                                    </div>
                                </AccordionList>
                            </section>

                            <section className="accordion">
                                <AccordionList title="What does the future of Social Security and Medicare look like?" className="accordion__heading">
                                    <div className="accordion__content">
                                        <p>Each year, the Social Security and Medicare Boards of Trustees publish their <a href={AfgData.trustees_report.value} rel="noopener noreferrer" target="_blank">Annual Report</a> on the financial status of Social Security and Medicare. The Boards’ projections indicate that spending will continue to increase. As the average age of Americans increases, more funding is needed to support entitlement programs like Social Security, Medicare, and retirement and disability services for both military and civil servants. In {AfgData.trustees_fy.value}, the cost of the Social Security and Medicare programs was {AfgData.ss_med_cost.value}.</p>
                                        <p>The majority of Social Security and Medicare funding comes from tax revenue and interest on trust fund reserves. For {AfgData.trustees_fy.value}, income for these programs was {AfgData.ss_med_income.value}. However, costs are expected to exceed revenue starting in {AfgData.med_deficit_year.value} for Medicare Part A and {AfgData.ss_deficit_year.value} for Social Security, and will require the federal government to begin drawing down trust fund balances in order to continue paying full benefits. While Medicare Parts B and D are largely funded by general revenues and beneficiary premiums, the Boards project that Medicare Part A trust fund will be depleted by {AfgData.med_deplete_year.value} and the Social Security trust fund will be depleted by {AfgData.ss_deplete_year.value}.</p>
                                    </div>
                                </AccordionList>
                            </section>

                            <section className="tour">
                                <div className="tour__part-one">
                                    <h1>How has federal spending changed over time?</h1>
                                    <p>When you are done here we encourage you to explore trends in government spending over the past {AfgData.number_trend_years.value} years.</p>
                                </div>
                                <a href="/americas-finance-guide/spending/trends/" className="tour__link" >Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right"/></a>
                            </section>
                        </div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>
                                    This visualization was created using the <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government spending of the United States. Some categories from the MTS have been renamed in order to be more easily understood.
                                </p>
                                <p>
                                    The Social Security and Medicare Boards of Trustees publish their <a href={AfgData.trustees_report.value} rel="noopener noreferrer" target="_blank">Annual Report</a> in April for the prior Fiscal Year. For example, the 2019 Annual Report contains financial information for the 2018 Fiscal Year. Based on information available at the time of publication, it is believed that the 2019 Annual Report will be available in Fiscal Year 2020.
                                </p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/federal_spending_categories.csv" download="federal_spending_categories.csv">federal_spending_categories.csv</a></li>
                                    </ul>
                                </div>
                            </AccordionList>
                        </section>
                    </div>
                </div>
            </Default>
        </>
    )
}

export default SpendingCategoriesPage
