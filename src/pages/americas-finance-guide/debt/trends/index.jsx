import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/globalSass/trendsCommon.scss'
import 'src/libs/ffg/src/debt/trends/debt-trends.scss'

import React from "react"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import { Helmet } from 'react-helmet';
import GdpTemplate from 'src/components/gdp-template/gdp-template'
import AfgNav from 'src/components/afg-nav/afg-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from 'src/components/headers/headers';

function DebtTrendsPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/debt/trends.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Debt Trends – U.S. Treasury'
                description='The U.S. has generally increased the federal debt since 2000.'
                excerpt=' In the U.S., federal debt has generally increased over the past two decades. According to the most recent Financial Report of the United States Government (FR), the current fiscal policy is not sustainable. By the end of 2019, federal debt was $22.7 trillion.'
                keywords={[`debt, national debt, federal debt, U.S. debt, deficit vs. debt, deficit, national deficit, surplus, spending exceeds income, spending exceeds revenue, federal deficit, total debt, federal government’s debt, monthly statement of the public debt, MSPD`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'debt'}></AfgNav>

                <div className="cg-wrapper trends-common-wrapper debt-trends-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Federal Debt Trends – U.S. Treasury"
                                twitter="What is the ratio of debt to GDP? How has the debt changed over time? Your Guide to America’s Finances has data from 2000-2019 and .CSV data files available for download. #YourGuide #DataLab #OpenGov"
                                />
                        </ControlBar>

                        <h1>Federal Debt Trends Over Time</h1>

                        <div className="toggle-component toggle-component--debt clearfix">
                            <span className="toggle-component__label" data-target="debt-image">Debt</span>
                            <button id="toggle-image" className="toggle-control">
                                <div className="toggle-control__background">
                                    <div className="toggle-control__dot"></div>
                                </div>
                            </button>
                            <span className="toggle-component__label" data-target="gdp-image">Debt to GDP</span>
                        </div>

                        <div className="trend-chart-container">
                            <img id="debt-image" className="trend-chart-container__image trend-chart-container__image--active" src="/americas-finance-guide/images/debt-trend.svg" alt="Federal debt steadily rose from $5.7 trillion in 2000 to $10 trillion in 2008. In response to actions taken to address the Great Recession, federal debt increased at a faster rate after 2008. Federal debt rose from $10 trillion in 2008 to $16 trillion in 2012. Federal debt exceeded $20 trillion for the first time in 2017 and reached $22.7 trillion by the end of 2019. "></img>
                            <img id="gdp-image" className="trend-chart-container__image" src="/americas-finance-guide/images/debt-gdp-ratio-trend.svg" alt="Another way to look at trends in federal debt is to compare it to the size of the economy, as measured by gross domestic product. Federal debt as a percent of gross domestic product in 2000 was 55%. By 2008, this ratio had reached 68%. From 2008 to 2012 federal debt as a percent of gross domestic product increased to 99% and has remained above 100% since 2016. By the end of 2019 the ratio stood at 107%."></img>
                        </div>

                        <aside className="debt-aside">
                            <p>The U.S. has steadily increased the federal debt since {AfgData.debt_trend_start.value}. Another way to view the federal debt over time is to look at the ratio of federal debt related to gross domestic product (GDP). This ratio has also increased over time. According to the most recent <a href={AfgData.financial_report.value} rel="noopener noreferrer" target="_blank">Financial Report of the United States Government (FR)</a>, the current fiscal policy is not sustainable.</p>

                            <section className="tour">
                                <div className="tour__part-one">
                                    <h1>What else is important to know about the federal debt?</h1>
                                    <p>When you are done here, continue on for a breakdown of the federal debt.</p>
                                </div>
                                <a href="/americas-finance-guide/debt/analysis/" className="tour__link">Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right" /></a>
                            </section>
                        </aside>

                        <div className="clearfix"></div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>This visualization was created using the <a href={AfgData.mspd_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Statement of the Public Debt (MSPD)</a> as the data source for federal debt of the United States. <GdpTemplate></GdpTemplate> Throughout this page, we use the gross domestic product for the Fiscal Year, not the Calendar Year, in order to facilitate an appropriate comparison.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/federal_debt_trends.csv" download="federal_debt_trends.csv">federal_debt_trends.csv</a></li>
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

export default DebtTrendsPage
