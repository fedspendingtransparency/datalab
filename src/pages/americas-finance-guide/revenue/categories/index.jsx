import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/revenue/categories/revenue-categories.scss'
import RevenueCategories from "src/libs/ffg/src/revenue/categories/index.js";
import 'src/libs/ffg/src/revenue/categories/data.js'

import React from "react"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import { AFGHeader } from 'src/components/headers/headers';
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import AfgNav from 'src/components/afg-nav/afg-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faSearch,
    faSortAlphaDown,
    faSortAmountDown,
    faSortAlphaUp, faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons"

function RevenueCategoriesPage(props) {

    return (
        <>

            <SEO
                title='Data Lab - Revenue Categories – U.S. Treasury'
                description='Explore the breakdown of revenue sources of the federal government.'
                excerpt='Most of the revenue the government collects comes from taxes from individuals, small businesses, and corporations. Other sources of federal revenue include excise, estate, and other taxes and fees.'
                keywords={[`federal revenue, revenue categories, individual taxes, corporate taxes, excise tax, estate tax, payroll tax, Social Security, Medicare, trust fund`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'revenue'}></AfgNav>

                <div className="cg-wrapper revenue-categories-wrapper">
                    <div className="ffg-wrapper revenue-categories">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Revenue Categories – U.S. Treasury"
                                twitter="What are the federal government’s sources of revenue? Search by category with Your Guide to America’s Finances and download .CSV data files for your own analysis! #YourGuide #DataLab #OpenGov"
                                />
                        </ControlBar>

                        <h1>Sources of Revenue for the Federal Government </h1>

                        <h2 className="chart-title">Revenue by Source Categories</h2>
                        <div className="hint">Click <span className="category-bar-legend"></span> to explore sub-categories.</div>
                        <div id="viz-wrapper">
                            <div id='viz-chart-container'>
                                <div id="bar-controls">
                                    <div className='bar-controls__left'>
                                        Sort by:
                                        <div className='bar-controls__left--button-div'>
                                            <button id="sort-amount" className="active">Amount <FontAwesomeIcon id='sortAmountDown' icon={faSortAmountDown} className='svg-inline--fa fa-w-16'/><FontAwesomeIcon id='sortAmountUp' icon={faSortAmountUp} className='svg-inline--fa fa-w-16 hidden'/></button>
                                            <button id="sort-name">Name <FontAwesomeIcon id='sortAlphaDown' icon={faSortAlphaDown} className='svg-inline--fa fa-w-16'/><FontAwesomeIcon id='sortAlphaUp' icon={faSortAlphaUp} className='svg-inline--fa fa-w-16 hidden'/></button>
                                        </div>
                                    </div>
                                    <div className='bar-controls__right'>
                                        <div className='bar-controls__right--div'>
                                            <input type="text" placeholder='Search by a term...' id="filter-by-name"></input>
                                            <FontAwesomeIcon icon={faSearch} id='filter-by-name-icon' className="fa fa-search spending__search--icon"/>
                                        </div>
                                    </div>
                                </div>

                                <hr></hr>

                                <RevenueCategories />

                                <hr className='categories__show-more'></hr>
                                <div id="show-more-container" className='categories__show-more'>
                                    <button id="show-more-button" className="chart__show-more">Show More</button>
                                </div>
                            </div>
                        </div>

                        <div className="poc-content" id="income-facts">
                            <section className="copy-tour-row__copy">
                                <p>Most of the revenue the government collects comes from contributions from individual taxpayers, small businesses, and corporations through taxes that get collected on a yearly or quarterly basis. The remaining sources of federal revenue consist of excise, estate, and other taxes and fees.</p>
                                <p>What makes up individual income taxes? How much federal revenue is contributed by Social Security and Medicare taxes? What's included in the {AfgData.other_revenue_percent.value} of revenue that doesn't come from taxpayers or corporations? Explore the visualization to find out.</p>

                                <section className="accordion">
                                    <AccordionList title="Where do my Social Security and Medicare taxes go?" className="accordion__heading">
                                        <div className="accordion__content">
                                            <p>You may recognize these taxes on your paycheck. Unlike personal income taxes, these taxes are used to help fund specific social service programs. Funds are collected from your paycheck, and in most cases matched by your employer, then divided into the various trust fund accounts.</p>
                                            <p>Social Security has two trust fund accounts: the Old Age and Survivors Insurance Trust Fund (OASI) and the Disability Trust Fund (DI). The funds in these accounts are responsible for providing workers and their families with retirement, disability and survivor's insurance benefits.</p>
                                            <p>Medicare also has two accounts: the Hospital Insurance Trust Fund (HI), also known as Medicare Part A, and the Supplementary Medicare Insurance Trust Fund (SMI). These funds pay for hospital, home health, skilled nursing, and hospice care for the elderly and disabled.</p>
                                        </div>
                                    </AccordionList>
                                </section>
                                <section className="accordion">
                                    <AccordionList title="Why does the Federal Reserve send money to the federal government?" className="accordion__heading">
                                        <div className="accordion__content">
                                            <p>The Federal Reserve Act of 1913 established the Federal Reserve System (the Fed) as the central bank for the United States. The Fed works closely with the Department of the Treasury, which manages the finances of the federal government. The Fed issues Treasury securities and conducts auctions of these securities to raise funds for the federal government. In addition, the Fed also processes monetary transactions on behalf of Treasury, including issuing payments and other government receivables.</p>
                                            <p>The role of the Fed is to support the economy, not to make a profit. Once the Fed pays its expenses, any remaining profits are sent to Treasury to be used by the federal government.</p>
                                        </div>
                                    </AccordionList>
                                </section>
                                <section className="accordion">
                                    <AccordionList title="Are there other types of revenue the federal government receives?" className="accordion__heading">
                                        <div className="accordion__content">
                                            <p>Government revenue also comes from payments to federal agencies like the U.S. Department of the Interior. Have you visited a national park recently? Did you know your national park entry fee also applies towards government revenue? Other agencies generate revenue from leases, the sale of natural resources, and various usage and licensing fees.</p>
                                        </div>
                                    </AccordionList>
                                </section>
                            </section>
                            <div className="copy-tour-row__tour">
                                <section className="tour">
                                    <div className="tour__part-one">
                                        <h1>How has government revenue changed over time?</h1>
                                        <p>When you're done here, explore the trends in federal revenue over the past {AfgData.number_trend_years.value} years.</p>
                                    </div>
                                    <a href="/americas-finance-guide/revenue/trends/" className="tour__link">Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right"/></a>
                                </section>
                            </div>
                        </div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>The visualization was created using the <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue of the United States. Some categories from the MTS have been renamed in order to be more easily understood.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/federal_revenue_categories.csv" download="federal_revenue_categories.csv">federal_revenue_categories.csv</a></li>
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

export default RevenueCategoriesPage
