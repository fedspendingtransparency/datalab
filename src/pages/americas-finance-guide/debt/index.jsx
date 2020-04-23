import 'src/libs/ffg/src/globalSass/chapterIntroCommon.scss'
import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/debt/intro/debt-intro.scss'

import React from "react"
import { Link } from "gatsby"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import { AFGHeader } from 'src/components/headers/headers';
import GdpTemplate from 'src/components/gdp-template/gdp-template'
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import { Helmet } from 'react-helmet';
import AfgNav from 'src/components/afg-nav/afg-nav';

import AnecdoteDebtSVG from '../../../libs/assets/ffg/icons/anecdote-debt.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';

function ExploreDebtPage(props) {
    return (
        <>
            <Helmet>
                <script defer src="/americas-finance-guide/debt/intro.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Explore Federal Debt – U.S. Treasury'
                description='By the end of 2019, the government had $22.7 trillion in federal debt.'
                excerpt='How did we end up with $22.7 trillion in federal debt? When the U.S. government has a deficit, most of the deficit spending is covered by the government taking on new debt. It is similar to people using their credit card for a purchase rather than cash, check, or a debit card. Over the years, if the federal government experiences more deficits than surpluses, the federal debt grows.'
                keywords={[`debt, national debt, federal debt, U.S. debt, deficit vs. debt, deficit, national deficit, interest, surplus, spending exceeds income, spending exceeds revenue, federal deficit, total debt, federal government’s debt, monthly statement of the public debt, MSPD`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'debt'}></AfgNav>

                <div className="cg-wrapper chapter-intro-common-wrapper debt-intro-wrapper">
                    <div className="ffg-wrapper debt-intro">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Explore Federal Debt – U.S. Treasury"
                                twitter="How much is the federal debt? Check out #YourGuide for visualizations and .CSV data to do your own analysis. #DataLab #OpenGov"
                                />
                        </ControlBar>


                        <h1>By the end of {AfgData.current_fy.value}, the federal government had {AfgData.current_fy_debt.value} in federal debt.
                            <button className="info-box-trigger" data-box-id="per-individual">
                                <img src={AnecdoteDebtSVG} alt="anecdote icon"></img>
                            </button>
                        </h1>

                        <div className="debt-copy">
                            <p>How did we end up with {AfgData.current_fy_debt.value} in federal debt? When the U.S. government has a deficit, most of the deficit spending is covered by the government taking on new debt. It is similar to a person using his or her credit card for a purchase (rather than cash, check, or a debit card) and not paying the full credit card balance each month. Over the years, if the federal government experiences more deficits than surpluses, the federal debt grows.</p>
                        </div>

                        <div className="viz-wrapper-debt">
                            <div id="viz"></div>

                            <div className="intro-math intro-hidden">
                                <FontAwesomeIcon icon={faReply} className="fas fa-reply intro-math__icon"/>{AfgData.dot_number_debt.value} dots x {AfgData.dot_represents.value} = <strong>{AfgData.current_fy_debt.value}</strong>
                            </div>

                            <div className="facts sidebar debt-intro intro-hidden">
                                <div className="facts__inner">
                                    <div id="compare-options">
                                        <p className="facts__prompt">How does the national debt compare to the deficit and the size of the economy?</p>
                                        <div className="facts__triggers">
                                            <button className="facts__trigger" data-trigger-id="deficit">Deficit</button>
                                            <button className="facts__trigger" data-trigger-id="gdp">U.S. Economy</button>
                                        </div>
                                    </div>

                                    <section id="deficit-facts" className="facts__section">
                                        <h1>Deficit</h1>
                                        <p>The change in federal debt each year is heavily influenced by the deficit or surplus that year. When there is not enough revenue to pay for spending, the government borrows money to make up the difference.  When there is excess revenue in a given year, the majority of those funds are used to pay down the federal debt.</p>
                                    </section>

                                    <section id="gdp-facts" className="facts__section">
                                        <h1>U.S. Economy</h1>
                                        <p>By comparing the total federal debt to gross domestic product (GDP), we can observe the government's ability to utilize the resources at hand to finance the debt the same way you and your family manage your finances to make sure that your monthly payments for your mortgage, car loans, and credit cards can be made.</p>
                                    </section>
                                </div>
                            </div>

                            <section className="accordion sidebar intro-hidden">
                                <AccordionList title="Who owns the federal government's debt?">
                                    <div>
                                        <p>Most of the federal government's debt is owned by federal trust funds and domestic investors in the United States. Foreign investors, including other governments, also own part of the debt.</p>
                                    </div>
                                </AccordionList>
                            </section>

                            <section className="tour sidebar intro-hidden">
                                <div className="tour__part-one">
                                    <h1>How has the federal debt changed over time?</h1>
                                    <p>When you are done here, we encourage you to explore trends in the federal debt since {AfgData.debt_trend_start.value}.</p>
                                </div>
                                <a href="/americas-finance-guide/debt/trends/" className="tour__link">Explore<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right" /></a>
                            </section>
                        </div> {/* end viz-wrapper */}

                        <div className="info-box" id="per-individual">
                            <img src={AnecdoteDebtSVG} alt="anecdote icon"></img>
                            <p>How much is {AfgData.current_fy_debt.value} in federal debt? If you take the U.S. population estimate in {AfgData.current_fy.value} of {AfgData.us_population.value} people <a href={AfgData.census_population.value} rel="noopener noreferrer" target="_blank">(U.S. Census Bureau)</a>, {AfgData.current_fy_debt.value} would be equivalent to more than {AfgData.debt_per_individual.value} for every individual in the U.S.</p>
                        </div>

                        <div className="info-box" id="billion-dollars">
                            <img src={AnecdoteDebtSVG} alt="anecdote icon"></img>
                            <p>In this visualization, one dot represents {AfgData.dot_represents.value}.</p>
                        </div>
                    </div> {/* end ffg-wrapper debt-intro */}

                    <section className="hwcta">
                        <AccordionList title="Data Sources and Methodology">
                        <p>This visualization was created using the <a href={AfgData.current_mspd.value} rel="noopener noreferrer" target="_blank">Monthly Statement of the Public Debt (MSPD)</a> as the data source for federal debt of the United States and the <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue and spending. <GdpTemplate></GdpTemplate> Throughout this page, we use the gross domestic product for the Fiscal Year, not the Calendar Year, in order to facilitate an appropriate comparison.</p>
                        <div className="afg__download--div">
                            <div className="afg__download--heading">Download Source Data</div>
                            <ul>
                                <li><a href="/americas-finance-guide/afgData/explore_federal_debt.csv" download="explore_federal_debt.csv">explore_federal_debt.csv</a></li>
                            </ul>
                        </div>
                        </AccordionList>
                    </section>
                </div>
            </Default>
        </>
    )
}
export default ExploreDebtPage
