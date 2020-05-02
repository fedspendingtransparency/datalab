import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/debt/analysis/debt-analysis.scss'

import React from "react"
import { Link } from "gatsby"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import { Helmet } from 'react-helmet';
import AfgNav from 'src/components/afg-nav/afg-nav';
import DebtCards from "src/libs/ffg/src/debt/analysis/cards";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from 'src/components/headers/headers';

function DebtAnalysisPage(props) {
    return (
        <>

            <SEO
                title='Data Lab - Federal Debt Analysis – U.S. Treasury'
                description='Who owns the U.S. government’s debt and how much does it cost to maintain?'
                excerpt='Explore this section to learn more about who owns U.S. debt, how much it costs to maintain the debt, and how interest rates affect debt expenses.'
                keywords={[`debt, national debt, federal debt, U.S.debt, interest rate, interest expense, total debt, cost of debt, cost to maintain debt, federal government’s debt, US investors, social security, Federal Reserve, China,Japan, Brazil top owners of US debt, monthly statement of the public debt, MSPD`]}
            />

            <Default>
							  <AFGHeader />
                <AfgNav location={props.location} chapter={'debt'}></AfgNav>

                <div className="cg-wrapper debt-analysis-wrapper">
                    <div className="ffg-wrapper debt-analysis">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title="Data Lab - Federal Debt Analysis – U.S. Treasury"
                                twitter="How much does it cost to maintain the federal debt? Who owns the debt? Check out Your Guide to America’s Finances for visualizations and download .CSV data files for your own analysis. #YourGuide #DataLab #OpenGov"
                                />
                        </ControlBar>

                        <h1>Breakdown of the Federal Government's Debt</h1>

                        <p className="debt-analysis-intro">What does the U.S. government's debt look like? Similar to people with a credit card, mortgage, or car loan, the federal debt consists of different parts. See some of the characteristics of the federal debt and how they have changed over time.</p>

                        <div className="cards">
                            <section className="card">
                                <div className="card__contents">
                                    <h1 className="card__heading">How much does it cost to maintain the federal debt?</h1>
                                    <img src="/americas-finance-guide/images/debt-to-interest-expense.svg" alt="Federal debt has increased steadily from $10.0 trillion in 2008 to $22.7 trillion in 2019. Interest expense varied some from 2008 to 2015 but has increased consistently from $402 billion in 2015 to $573 billion in 2019." className="card__image"></img>
                                    Interest expense is what the government pays to investors who loan money to the government. How much the government pays in interest depends on:
                                    <ul>
                                        <li>the total federal debt; and</li>
                                        <li>the interest rate investors charge when they loan money to the federal government.</li>
                                    </ul>
                                    Although the total federal debt of the U.S. has increased every year over the past ten years, interest expense has remained fairly stable.
                                </div>
                            </section>

                            <section className="card">
                                <div className="card__contents">
                                    <h1 className="card__heading">How have interest rates on the federal debt changed?</h1>
                                    <img src="/americas-finance-guide/images/debt-to-interest-rate.svg" alt="Similarly, even though federal debt has more than doubled since 2008, the average interest rate on federal debt has decreased from 4.2% in 2008 to 2.5% in 2019." className="card__image"></img>
                                    Interest rates have steadily fallen over the past ten years. Low interest rates are the reason for the interest expense the federal government pays on its debt remaining stable, even as the federal debt has increased.
                                </div>
                            </section>

                            <section className="card">
                                <div className="card__contents">
                                    <h1 className="card__heading">Is there more information about who owns the debt?</h1>
                                    <img src="/americas-finance-guide/images/us-debt-top-investors.svg" alt="The largest segment of federal debt holders is made up of domestic investors. Domestic investors hold $7.5 trillion in federal debt.  The Social Security trust funds have $2.9 trillion of federal debt and the Federal Reserve holds another $2.1 trillion. Chinese and Japanese investors hold $1.1 trillion each." className="card__image"></img>
                                    At the end of {AfgData.tic_date.value}, {AfgData.debt_owned_us_investors.value} of federal debt was owned by investors from the United States, including the Federal Reserve. The various trust funds operated by the United States government, like the Social Security and Medicare trust fund accounts, held another {AfgData.debt_owned_trust_funds.value} of federal debt. Foreign investors owned the remaining {AfgData.debt_owned_foreign_investors.value} of federal debt. For a complete list of foreign investors, visit the <a href={AfgData.tic_foreign_holders.value} target="_blank" rel="noopener noreferrer">Treasury International Capital (TIC) System</a>.
                                </div>
                            </section>
                        </div>
                        <DebtCards/>

                        <section className="tour">
                            <div className="tour__part-one">
                                <h1>How does the federal debt of the United States compare to other countries?</h1>
                                <p>When you are done here, see how the U.S. federal debt compares to other countries.</p>
                            </div>
                            <a href="/americas-finance-guide/debt/country-comparison/" className="tour__link">Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right"/></a>
                        </section>

                        <div className="clearfix"></div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>
                                  <span>This analysis was created using the </span>
                                  <a href={AfgData.current_mspd.value} rel="noopener noreferrer" target="_blank">Monthly Statement of the Public Debt (MSPD)</a>
                                  <span>as the data source for federal debt of the United States and the </span>
                                  <a href={AfgData.current_mts.value}rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a>
                                  <span>as the data source for federal government revenue and spending. Average interest rates on federal debt come from </span>
                                  <a href={AfgData.treasury_direct_int_rates.value} rel="noopener noreferrer" target="_blank">TreasuryDirect.gov</a>.
                                  <span>Holders of United States Treasury securities were identified using three sources: MSPD which contains detailed information on trust funds that own Treasury securities, the </span>
                                  <a href={AfgData.tic_foreign_holders.value} rel="noopener noreferrer" target="_blank">Treasury International Capital (TIC)</a>
                                  <span>System which identifies foreign holders of U.S. federal debt, and the </span>
                                  <a href={AfgData.soma_domestic_securities.value} rel="noopener noreferrer" target="_blank">System Open Market Account (SOMA)</a>
                                  <span>Holdings of Domestic Securities which reports Federal Reserve holdings of Treasury securities.</span>
                                </p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/federal_debt_cost.csv" download="federal_debt_cost.csv">federal_debt_cost.csv</a></li>
                                        <li><a href="/americas-finance-guide/afgData/federal_debt_average_int_rates.csv" download="federal_debt_average_int_rates.csv">federal_debt_average_int_rates.csv</a></li>
                                        <li><a href="/americas-finance-guide/afgData/who_owns_federal_debt.csv" download="who_owns_federal_debt.csv">who_owns_federal_debt.csv</a></li>
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

export default DebtAnalysisPage
