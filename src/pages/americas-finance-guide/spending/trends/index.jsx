import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/globalSass/trendsCommon.scss'

import React from "react"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import { Helmet } from 'react-helmet';
import AfgNav from 'src/components/afg-nav/afg-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from '../../../../components/headers/headers';

function SpendingTrendsPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/spending/trends.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Spending Trends – U.S. Treasury'
                description='Find out how federal spending has changed over time.'
                excerpt='This chart presents federal spending by spending type or by agency over a five year period. Have there been significant changes in federal spending? What impact does an increase or decrease have on spending at the sub-category level? You can track trends in federal spending by category or at the sub-category level.'
                keywords={[`federal spending, , revenue, federal revenue, U.S. spending, gross domestic product, GDP, deficit, debt, federal spending trends over time`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'spending'}></AfgNav>

                <div className="cg-wrapper trends-common-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Federal Spending Trends – U.S. Treasury"
                                twitter="How has federal spending changed over the past few years? Check out Your Guide to America’s Finances for federal spending trends and to download .CSV files of the data. #YourGuide #DataLab #OpenGov"
                                facebook='' reddit='' linkedin='' tumblr='' email='' />
                        </ControlBar>

                        <h1>Federal Spending Trends Over Time</h1>

                        <div className="trend-flex">
                            <div className="trend-copy">
                                <div className="trend-copy__text">
                                    <p>How has spending changed over the past few years? This chart presents federal spending by category or by agency over a {AfgData.number_trend_years.value} year period. Have there been significant changes in federal spending? What impact does an increase or decrease have on spending at the subcategory level?</p>
                                    <p>You can track trends in federal spending by category or subcategory.</p>
                                </div>
                                <section className="tour">
                                    <div className="tour__part-one">
                                        <h1>How does federal spending in the United States compare to other countries?</h1>
                                        <p>When you're done here, see how federal spending by the U.S. compares to other countries.</p>
                                    </div>
                                    <a className="tour__link" href="/americas-finance-guide/spending/country-comparison/">Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fas fa-chevron-right"/></a>
                                </section>
                            </div>

                            <div className="trend-chart">
                                <div id="spending-chart-toggle" className="toggle-component toggle-component--spending clearfix" data-active="function">
                                    <span className="toggle-component__label">Category</span>
                                    <button id="toggle-spending-data-type" className="toggle-control">
                                        <div className="toggle-control__background">
                                            <div className="toggle-control__dot"></div>
                                        </div>
                                    </button>
                                    <span className="toggle-component__label">Agency</span>
                                </div>

                                <div id="show-hide">
                                    <button id="activate-show-hide">Filter <FontAwesomeIcon icon={faSlidersH} width={11} className="fa fa-sliders-h"/></button>
                                    <div id="show-hide-tray">
                                        <div className='show-hide__buttons'>
                                            <div className='show-hide__buttons--left'>
                                                <button id="select-all">Select All</button>
                                                <button id="select-none">Remove All</button>
                                            </div>
                                            <div className='show-hide__buttons--right'>
                                                <button id="reset-filters-button">Reset</button>
                                                <button id="save-filters-button">Save</button>
                                            </div>
                                        </div>

                                        <div id="show-hide-list"></div>
                                    </div>
                                </div>

                                <div className="hint">Click a spending category to view more</div>

                                <div id="viz"></div>
                            </div>
                        </div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>The visualization was created using the <a href={AfgData.mts_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government spending of the United States. Some categories from the MTS have been renamed in order to be more easily understood. <a href={AfgData.bls_cpiu.value} rel="noopener noreferrer" target="_blank">The Bureau of Labor Statistics (BLS) Consumer Price Index for All Urban Consumers (CPI-U)</a> was used to adjust spending in fiscal years {AfgData.inflation_adj_years.value} for inflation. Adjusting for inflation allows users to see real, not nominal, changes in sources of spending over time.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/federal_spending_trends.csv" download="federal_spending_trends.csv">federal_spending_trends.csv</a></li>
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

export default SpendingTrendsPage