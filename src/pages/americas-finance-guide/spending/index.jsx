import '../../../libs/ffg/src/globalSass/chapterIntroCommon.scss'
import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/ffg/src/spending/intro/spending-intro.scss'

import React from "react"
import SEO from "../../../components/seo"
import AfgData from "../../../libs/_data/object_mapping.yml"
import Default from "../../../components/layouts/default/default"
import { AFGHeader } from '../../../components/headers/headers';
import GdpTemplate from '../../../components/gdp-template/gdp-template'
import AccordionList from '../../../components/accordion-list/accordion-list'
import ControlBar from '../../../components/control-bar/control-bar'
import Share from '../../../components/share/share'
import { Helmet } from 'react-helmet';
import AfgNav from '../../.../../../components/afg-nav/afg-nav';

import AnecdoteSpendingSVG from '../../../libs/assets/ffg/icons/anecdote-spending.svg';
import DefinitionSpendingSVG from '../../../libs/assets/ffg/icons/definition.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';

function SpendingAndGdpPage(props) {
    return (
        <>
            <Helmet>
                <script defer src="/americas-finance-guide/spending/intro.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Spending and GDP – U.S. Treasury'
                description='In 2019, the U.S. government spent $4.4 trillion.'
                excerpt='Where does all the money go? Most government spending is concentrated on programs that ensure the health and well-being of the people of the United States. Explore how spending compares to the size of the economy or to federal revenue.'
                keywords={[`federal spending, outlays, U.S. spending, U.S. revenue, gross domestic product, GDP, deficit, debt, mandatory spending, discretionary spending`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'spending'}></AfgNav>

                <div className="cg-wrapper chapter-intro-common-wrapper spending-intro-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Federal Spending and GDP – U.S. Treasury"
                                twitter="How much money did the government spend last year? How does it compare with federal revenue and the size of the economy? Download the federal spending and GDP .CSV file from Your Guide to America’s Finances. #YourGuide #DataLab #OpenGov"
                                facebook='' reddit='' linkedin='' tumblr='' email=''/>
                        </ControlBar>

                        <h1>In {AfgData.current_fy.value}, the government spent {AfgData.current_fy_spending.value}.
                                <button className="info-box-trigger" data-box-id="per-individual">
                                <img src={AnecdoteSpendingSVG} alt="anecdote icon"></img>
                            </button>
                        </h1>

                        <div className="viz-wrapper">
                            <div id="viz"></div>

                            <div className="intro-math intro-hidden">
                                <FontAwesomeIcon icon={faReply} className="fas fa-reply intro-math__icon"/>{AfgData.dot_number_spending.value} dots x {AfgData.dot_represents.value} = <strong>{AfgData.current_fy_spending.value}</strong>
                            </div>

                            <div id="copy" className="intro-hidden">
                                <p>Where does all the money go? The government spends money on a variety of programs to promote the well-being of Americans. Why does the federal government do this? The Constitution provides an answer! The Constitution’s preamble states that the purpose of our government is “…to establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity.”</p>
                            </div>

                            <div className="facts sidebar intro-hidden">
                                <div className="facts__inner">
                                    <div id="compare-options">
                                        <p className="facts__prompt">How does federal spending compare to federal revenue and the size of the economy?</p>
                                        <div className="facts__triggers">
                                            <button className="facts__trigger" data-trigger-id="revenue">Federal Revenue</button>
                                            <button className="facts__trigger" data-trigger-id="gdp">U.S. Economy</button>
                                        </div>
                                    </div>

                                    <section id="revenue-facts" className="facts__section">
                                        <h1>In Fiscal Year {AfgData.current_fy.value}, the federal government collected {AfgData.current_fy_revenue.value} in federal revenue.</h1>
                                        <p>Since the government spent more than it collected, the deficit for {AfgData.current_fy.value} was {AfgData.current_fy_deficit.value}.</p>
                                        <p>
                                            <a href="/americas-finance-guide/revenue/">Go Explore Federal Revenue.</a>
                                        </p>
                                    </section>

                                    <section id="gdp-facts" className="facts__section">
                                        <h1>In Fiscal Year {AfgData.current_fy.value}, federal spending was equal to {AfgData.spending_percent_gdp.value} of the total gross domestic product (GDP), or economic activity, of the United States that year ({AfgData.current_fy_gdp.value}).</h1>

                                        <p>Why do we compare federal spending to gross domestic product? One reason is to give a reference point for the size of the federal government, as measured by the amount it spends. U.S. gross domestic product is much larger than government spending, because it includes all the economic activity of the entire nation. Government spending equates to roughly {AfgData.spending_proportion.value} of the goods produced and services provided in the United States.</p>

                                        <strong>What's gross domestic product?
                                            <button className="info-box-trigger" data-box-id="gdp-info">
                                                <img src={DefinitionSpendingSVG} alt="definition icon"></img>
                                            </button>
                                        </strong>
                                    </section>
                                </div>
                            </div>

                            <section className="tour sidebar intro-hidden">
                                <h1 className="tour__heading">What are the categories of federal spending?</h1>
                                <a href="/americas-finance-guide/spending/categories/" className="tour__link" >Discover<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right" /></a>
                            </section>
                        </div> {/* end viz-wrapper */}

                        <div className="info-box" id="per-individual">
                            <img src={AnecdoteSpendingSVG} alt="anecdote icon"></img>
                            <p>How much is {AfgData.current_fy_spending.value} in federal spending?  If you divide it by the U.S. population estimate in {AfgData.current_fy.value}, {AfgData.us_population.value} (<a target="_blank" href={AfgData.census_population.value} target="_blank">U.S. Census Bureau</a>), it would equate to a little more than {AfgData.spending_per_individual.value} in federal spending for every individual.</p>
                        </div>

                        <div className="info-box" id="gdp-info">
                            <img src={DefinitionSpendingSVG} alt="definition icon"></img>
                            <p><strong>Gross domestic product (GDP)</strong> measures the size of the nation's economy by the total value of final goods and services that are produced in a year. Gross domestic product is used to compare the economies of different countries, measure growth in the economy, and determine the right monetary policies to address inflation and unemployment.</p>
                        </div>

                        <div className="info-box" id="billion-dollars">
                            <img src={AnecdoteSpendingSVG} alt="anecdote icon"></img>
                            <p>In this visualization, one dot represents {AfgData.dot_represents.value} of federal spending. </p>
                        </div>
                    </div> {/* end "ffg-wrapper spending-intro" */}

                    <section className="hwcta">
                        <AccordionList title="Data Sources and Methodology">
                            <p>The visualization was created using the <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government spending of the United States. <GdpTemplate></GdpTemplate> The spending-to-gross domestic product ratio is included to provide you with context for the trillions of dollars that go out from the federal government annually. Throughout this page, we use the gross domestic product for the Fiscal Year, not the Calendar Year, in order to facilitate an appropriate comparison.</p>
                            <div className="afg__download--div">
                                <div className="afg__download--heading">Download Source Data</div>
                                <ul>
                                    <li><a href="/americas-finance-guide/afgData/federal_spending_gdp.csv" download="federal_spending_gdp.csv">federal_spending_gdp.csv</a></li>
                                </ul>
                            </div>
                        </AccordionList>
                    </section>
                </div>
            </Default>
        </>
    )
}

export default SpendingAndGdpPage
