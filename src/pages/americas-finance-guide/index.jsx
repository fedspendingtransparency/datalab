import '../../libs/ffg/src/globalSass/cg.scss'
import '../../libs/ffg/src/bigPicture/scss/bp.scss'

import React from "react"
import SEO from "../../components/seo"
import AfgData from "../../libs/_data/object_mapping.yml"
import Default from "../../components/layouts/default/default"
import AccordionList from '../../components/accordion-list/accordion-list'
import ControlBar from '../../components/control-bar/control-bar'
import Share from '../../components/share/share'
import { Helmet } from 'react-helmet';
import BpToc from '../../components/bpToc/bpToc'
import AfgAnecdote from '../../libs/ffg/src/anecdote/anecdote';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from '../../components/headers/headers';

function OverviewPage(props) {
    return (
        <>
            <Helmet>
                <script defer src="/americas-finance-guide/index.js"></script>
            </Helmet>

            <SEO
                title=' Data Lab - Your Guide to America’s Finances – U.S. Treasury'
                description='Explore U.S. revenue, spending, deficit, and debt with Your Guide to America’s Finances, an accessible and open-source guide to federal finances.'
                excerpt='Your Guide to America’s Finances visualizes federal revenue, spending, deficit, and debt. It was created in response to the public’s desire to learn more about the financial picture of the United States. The federal financial information is open and accessible to all - the very principles that our founding fathers set forth when the United States was formed.'
                keywords={[`federal, revenue, federal income, federal taxes, federal spending, deficit, debt`]}
            />

            <Default>
							<AFGHeader />
                <div className="cg-wrapper bp-wrapper">
                    <header>
                        <div className="bp-header">
                            <div className="bp-header__bg"></div>
                            <div className="ffg-share ffg-share--big-picture">
                                <ControlBar>
                                    <Share
                                        location={props.location}
                                        title="Data Lab - Your Guide to America’s Finances – U.S. Treasury"
                                        twitter="How much did the federal government collect and spend last year? Your Guide to America’s Finances has federal revenue, spending, deficit, and debt data available for .CSV download. #YourGuide #DataLab #OpenGov"
                                        />
                                </ControlBar>
                            </div>

                            <div className="bp-header__main">
                                <h3 className="bp-header__app-name">
                                    YOUR GUIDE TO AMERICA'S FINANCES
                                </h3>
                                <h1 className="bp-header__heading">
                                    How much money did the federal <span className="bp-header__break">government <span className="bp-header__collect-text">collect</span> and <span className="bp-header__spend-text">spend</span> in {AfgData.current_fy.value}?</span>
                                </h1>
                                <div className="bp-header__text">
                                    Interested in learning about the deficit or federal debt? Keep reading or <a href="#deficit-debt-heading" className="scroll-to">jump to the deficit and federal debt section</a>.
                                </div>
                            </div>
                            <div className="bp-header__scroll scroll-to">
                                <a href="#revenue-chapter"><FontAwesomeIcon icon={faAngleDown} width={20} className="fa fa-chevron-down"/></a>
                            </div>
                        </div>
                    </header>

                    {/* <!-- begin REVENUE chapter --> */}
                    <section className="chapter chapter--revenue">
                        <div className="chapter-scroll-target" id="revenue-chapter"></div>
                        <div className="chapter__content">
                            <BpToc></BpToc>

                            <div className="chapter__flex">
                                <div className="chapter__primary">
                                    <h1 className="chapter__heading">In {AfgData.current_fy.value},<br></br>the federal government <span className="chapter__big-number">collected {AfgData.current_fy_revenue.value} in revenue.</span></h1>

                                    <section className="anecdote">
                                        {/* <!-- controls --> */}
                                        <div className="anecdote__controls">
                                            <button className="anecdote__trigger">
                                            <FontAwesomeIcon icon={faStreetView} width={11} className="fas fa-street-view"/> <span className="anecdote__teaser"> Show me what {AfgData.current_fy_revenue_short.value} is equal to</span>
                                            </button>
                                        </div>

                                        {/* <!-- contents --> */}
                                        <div className="anecdote__contents">
                                            <h1 className="anecdote__heading">Did you know?</h1>
                                            <div className="anecdote__nav">
                                                <div className="anecdote__nav-control"></div>
                                                <div className="anecdote__nav-contents">
                                                    {/* <!-- panes --> */}
                                                    <div className="anecdote__panes">
                                                        <div className="anecdote__pane">
                                                            <p>Federal government revenue equates to about <strong>{AfgData.revenue_second.value} of revenue per second</strong>.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/revenue-1-outline.svg" alt=""></img>
                                                            <p>In the time it takes you to read this statement, that’s <strong>roughly {AfgData.revenue_during_read.value} in revenue</strong>.</p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_revenue.value} is the same amount as <strong>{AfgData.number_of_salaries.value}</strong> individuals each receiving a salary of <strong>{AfgData.individual_salary.value} per year</strong></p>
                                                            <img className="anecdote__illustration" src="/americas-finance-guide/images/revenue-2-outline.svg" alt=""></img>
                                                            <p><strong>(roughly equal to the average annual salary of {AfgData.salary_job_type.value})</strong>.</p>
                                                            <p className="source">Source - <a href={AfgData.bls_occ_employment.value} rel="noopener noreferrer" target="_blank">Bureau of Labor Statistics</a></p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_revenue.value} equates to the average U.S. household contributing <strong>{AfgData.household_contribution.value} per month</strong>.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/revenue-4-outline.svg" alt=""></img>
                                                            <p>That is roughly equal to the cost of <strong>renting a {AfgData.household_contribution_type.value}</strong> in {AfgData.household_contribution_city.value}.</p>
                                                            <p className="source">Source - <a href={AfgData.hud_median_rent.value} rel="noopener noreferrer" target="_blank">Department of Housing and Urban Development</a> & <a href={AfgData.census_household.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_revenue.value} equates to the <strong>revenue of the top {AfgData.sp_companies.value} companies</strong> in the S&P 500.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/revenue-5-outline.svg" alt=""></img>
                                                            <p className="source">Figures based on {AfgData.sp_year.value} 10-K reports for S&P 500 Companies</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="anecdote__nav-control"></div>
                                            </div>
                                            <a href="/americas-finance-guide/revenue/" className="anecdote__cta link-button">Go Explore Revenue <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right"/></a>
                                        </div>
                                    </section>

                                    <p className="chapter__paragraph--tightened">The federal government collects revenue from a variety of sources, including individual income taxes, payroll taxes, corporate income taxes, and excise taxes. It also collects revenue from services like admission to national parks and customs duties.</p>

                                    <section className="accordion">
                                        <AccordionList title="What makes federal revenue increase or decrease?">
                                            <div className="accordion__content">
                                                <p>The majority of federal revenue comes from individual and corporate income taxes as well as social insurance taxes. When individuals and corporations earn more money, they pay more in taxes, and thus federal revenue increases. Alternatively, if they make the same amount, but tax rates increase, the federal revenue will also increase. Decreases in federal revenue are largely due to either individuals or corporations making less money or a decrease in tax rates.</p>
                                            </div>
                                        </AccordionList>
                                    </section>

                                    <a href="/americas-finance-guide/revenue/" className="link-button chapter__cta" >
                                        <div className="link-button__text--block">
                                            <div className="link-button__text--top cg-learn-more-button-text">Learn more about</div>
                                            <div className="link-button__text--bottom cg-learn-more-button-text">Federal Revenue</div>
                                        </div>
                                        <div className="link-button__icon--block">
                                            <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right cg-learn-more-button-text"/>
                                        </div>
                                    </a>
                                </div>

                                <div className="chapter__chart">
                                    <img src="/americas-finance-guide/images/revenue-graph-outline.svg" alt="Federal revenue has increased over the past five years. Annual revenue was $3.25 trillion, $3.27 trillion, $3.31 trillion $3.33 trillion and $3.5 trillion for the years 2015 to 2019 respectively. "></img>
                                    <p className="chapter__chart--reference">Data used throughout this site is provided by the <a href={AfgData.overview_mts.value} target="_blank" rel="noopener noreferrer">U.S. Department of the Treasury</a> and refers to Fiscal Year {AfgData.current_fy.value}.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="chapter-break"></section>

                    {/* <!-- begin SPENDING chapter --> */}
                    <section className="chapter chapter--spending">
                        <div className="chapter-scroll-target" id="spending-chapter"></div>
                            <div className="chapter__content">
                            <BpToc></BpToc>

                            <div className="chapter__flex">
                                <div className="chapter__primary">
                                    <h1 className="chapter__heading">In {AfgData.current_fy.value},<br></br>the federal government <span className="chapter__big-number">spent {AfgData.current_fy_spending.value}.</span></h1>

                                    <section className="anecdote">
                                        {/* <!-- controls --> */}
                                        <div className="anecdote__controls">
                                            <button className="anecdote__trigger">
                                                <FontAwesomeIcon icon={faStreetView} width={11} className="fas fa-street-view"/>
                                                <span className="anecdote__teaser"> Show me what {AfgData.current_fy_spending_short.value} is equal to</span></button>
                                        </div>

                                        {/* <!-- contents --> */}
                                        <div className="anecdote__contents">
                                            <h1 className="anecdote__heading">Did you know?</h1>
                                            <div className="anecdote__nav">
                                                <div className="anecdote__nav-control"></div>
                                                <div className="anecdote__nav-contents">
                                                    {/* <!-- panes --> */}
                                                    <div className="anecdote__panes">
                                                            <div className="anecdote__pane">
                                                                <p>Federal government spending equates to about <strong>{AfgData.spending_second.value}</strong> per second.</p>
                                                                <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/spending-1-outline.svg" alt=""></img>
                                                                <p>In just 10 seconds, that's <strong>{AfgData.spending_ten_seconds.value} in spending.</strong></p>
                                                            </div>
                                                            <div className="anecdote__pane">
                                                                <p>{AfgData.current_fy_spending.value} is equivalent to a little more than <strong>{AfgData.spending_per_individual.value}</strong> in spending <strong>per U.S. individual</strong>.</p>
                                                                <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/spending-2-outline.svg" alt=""></img>
                                                                <p className="source">Source - <a href={AfgData.census_population.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                            </div>
                                                            <div className="anecdote__pane">
                                                                <p>{AfgData.current_fy_spending.value} equates to the average household spending <strong>{AfgData.household_spending_month.value}</strong> per month.</p>
                                                                <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/spending-3-outline.svg" alt=""></img>
                                                                <p>That is roughly equal <strong>to renting a {AfgData.household_spending_type.value}</strong> in {AfgData.household_spending_city.value}.</p>
                                                                <p className="source">Source - <a href={AfgData.hud_median_rent.value} rel="noopener noreferrer" target="_blank">Department of Housing and Urban Development</a> & <a href={AfgData.census_household.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                            </div>
                                                            <div className="anecdote__pane">
                                                                <p>{AfgData.current_fy_spending.value} is equivalent to building a new <strong>four-lane road from Washington D.C. to San Francisco and back...{AfgData.dc_sf_trips.value} times!</strong> (That's {AfgData.dc_sf_miles.value} miles of roadway!)</p>
                                                                <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/spending-4-outline.svg" alt=""></img>
                                                                <p className="source">Source - <a href={AfgData.artba_road_cost.value} rel="noopener noreferrer" target="_blank">American Road & Transportation Builders Association</a></p>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div className="anecdote__nav-control"></div>
                                            </div>
                                            <a href="/americas-finance-guide/spending/" className="anecdote__cta link-button" >Go Explore Spending <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right"/></a>
                                        </div>
                                    </section>

                                    <p className="chapter__paragraph--tightened">The federal government funds a variety of programs and services that support the American public. The federal government also spends money on interest it has incurred on outstanding federal debt, including Treasury notes and bonds.</p>

                                    <section className="accordion">
                                        <AccordionList title="Who controls government spending anyway?">
                                            <div className="accordion__content">
                                                <p>Government spending can be broken down into two categories: mandatory and discretionary. Mandatory spending is determined by previous law and includes spending for programs like Social Security and Medicare. Discretionary spending is determined by the President and Congress each year in the budget and appropriations process. First, the President puts together a budget proposal and sends it to Congress. Then, the House and Senate both draft budget resolutions. Congress can change funding levels, as well as add or eliminate programs, taxes, and other sources of revenue. Once the budget resolutions have been finalized in the House and Senate, Congress reconciles the differences and votes on a final budget. The discretionary spending levels in the budget are divided among the twelve Appropriations Subcommittees, who then draft bills providing funding levels for the Departments, bureaus and agencies within their jurisdiction. After the House and Senate agree to a final funding level for each bill, they are sent to the President for approval or veto.</p>
                                            </div>
                                        </AccordionList>
                                    </section>

                                    <a href="/americas-finance-guide/spending/" className="link-button chapter__cta">
                                        <div className="link-button__text--block">
                                            <div className="link-button__text--top cg-learn-more-button-text">Learn more about</div>
                                            <div className="link-button__text--bottom cg-learn-more-button-text">Federal Spending</div>
                                        </div>
                                        <div className="link-button__icon--block">
                                            <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right cg-learn-more-button-text"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="chapter__chart">
                                    <img src="/americas-finance-guide/images/spending-graph-outline.svg" alt="Federal spending has increased steadily over the past five years. Annual spending was $3.69 trillion, $3.85 trillion, $3.98 trillion $4.11 trillion, and $4.4 trillion for the years 2015 to 2019 respectively."></img>
                                    <p className="chapter__chart--reference">Data used throughout this site is provided by the <a href={AfgData.overview_mts.value} target="_blank" rel="noopener noreferrer">U.S. Department of the Treasury</a> and refers to Fiscal Year {AfgData.current_fy.value}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="deficit-debt-heading" id="deficit-debt-heading">
                        <h1 className="deficit-debt-heading__heading">
                            How did federal revenue and spending affect the <span className="chapter__divider--text-deficit">deficit</span> and federal <span className="chapter__divider--text-debt">debt</span> in {AfgData.current_fy.value}?
                        </h1>
                        <div className="deficit-debt-heading__arrow-container scroll-to">
                            <a href="#deficit-chapter"><FontAwesomeIcon icon={faAngleDown} width={11} className="fa fa-angle-down"/></a>
                        </div>
                    </section>

                    {/* <!-- begin DEFICIT chapter --> */}
                    <section className="chapter chapter--deficit">
                        <div className="chapter-scroll-target" id="deficit-chapter"></div>

                        <div className="chapter__content">
                            <BpToc></BpToc>

                            <div className="chapter__flex">
                                <div className="chapter__primary">
                                    <h1 className="chapter__heading">In {AfgData.current_fy.value},<br></br>the federal government<br></br>spent {AfgData.current_fy_deficit.value} more than it collected, <span className="chapter__big-number">resulting in a deficit.</span></h1>

                                    <section className="anecdote">
                                        {/* <!-- controls --> */}
                                        <div className="anecdote__controls">
                                            <button className="anecdote__trigger">
                                            <FontAwesomeIcon icon={faStreetView} width={11} className="fas fa-street-view"/>
                                            <span className="anecdote__teaser"> Show me what {AfgData.current_fy_deficit_short.value} is equal to</span></button>
                                        </div>

                                        {/* <!-- contents --> */}
                                        <div className="anecdote__contents">
                                            <h1 className="anecdote__heading">Did you know?</h1>
                                            <div className="anecdote__nav">
                                                <div className="anecdote__nav-control"></div>
                                                <div className="anecdote__nav-contents">
                                                    {/* <!-- panes --> */}
                                                    <div className="anecdote__panes">
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_deficit.value} is almost <strong>{AfgData.times_cc_debt.value} times the amount of credit card debt Americans created in {AfgData.current_fy.value}</strong> ({AfgData.cc_debt_total.value}).</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/deficit-1-outline.svg" alt=""></img>
                                                            <p className="source">Source - <a href={AfgData.frbny_microecon.value} rel="noopener noreferrer" target="_blank">Federal Reserve Bank of New York</a></p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_deficit.value} breaks down to about <strong>{AfgData.deficit_per_household.value} of deficit spending</strong> per household in {AfgData.current_fy.value}.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/deficit-2-outline.svg" alt=""></img>
                                                            <p>In {AfgData.current_fy.value}, there were an estimated <strong>{AfgData.us_households.value} households</strong> in the United States.</p>
                                                            <p className="source">Source - <a href={AfgData.census_household.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_deficit.value} equates to <strong>{AfgData.deficit_minute.value}</strong> in deficit spending <strong>every minute</strong> for an entire year.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/deficit-3-outline.svg" alt=""></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="anecdote__nav-control"></div>
                                            </div>
                                            <a href="/americas-finance-guide/deficit/" className="anecdote__cta link-button">Go Explore Deficit
                                              <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right"/></a>
                                        </div>
                                    </section>

                                    <p className="chapter__paragraph--tightened">A deficit occurs when money going out exceeds the money coming in. In {AfgData.current_fy.value}, the federal government spent more than it collected.</p>

                                    <section className="accordion">
                                        <AccordionList title="What happens when there is a surplus?">
                                            <div className="accordion__content">
                                                <p>A surplus occurs when the government collects more money than it spends. The last federal surplus occurred in {AfgData.last_surplus.value}. The government primarily uses surpluses to reduce the federal debt.</p>
                                            </div>
                                        </AccordionList>
                                    </section>

                                    <a href="/americas-finance-guide/deficit/" className="link-button chapter__cta">
                                        <div className="link-button__text--block">
                                            <div className="link-button__text--top cg-learn-more-button-text">Learn more about</div>
                                            <div className="link-button__text--bottom cg-learn-more-button-text">Federal Deficit</div>
                                        </div>
                                        <div className="link-button__icon--block">
                                        <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right cg-learn-more-button-text"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="chapter__chart">
                                    <img src="/americas-finance-guide/images/deficit-graph-outline.svg" alt="Since the government spent $4.4 trillion in 2019 and collected $3.5 trillion, the deficit for the year was $984 billion."></img>
                                    <p className="chapter__chart--reference">Data used throughout this site is provided by the <a href={AfgData.overview_mts.value} target="_blank" rel="noopener noreferrer">U.S. Department of the Treasury</a> and refers to Fiscal Year {AfgData.current_fy.value}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="chapter-break"></section>

                    {/* <!-- begin DEBT chapter --> */}
                    <section className="chapter chapter--debt">
                        <div className="chapter-scroll-target" id="debt-chapter"></div>

                        <div className="chapter__content">
                            <BpToc></BpToc>

                            <div className="chapter__flex">
                                <div className="chapter__primary">
                                    <h1 className="chapter__heading">By the end of {AfgData.current_fy.value},<br></br>the government had <span className="chapter__big-number">{AfgData.current_fy_debt.value} in federal debt.</span></h1>

                                    <section className="anecdote">
                                        {/* <!-- controls --> */}
                                        <div className="anecdote__controls">
                                            <button className="anecdote__trigger">
                                            <FontAwesomeIcon icon={faStreetView} width={11} className="fas fa-street-view"/>
                                            <span className="anecdote__teaser"> Show me what {AfgData.current_fy_debt_short.value} is equal to</span></button>
                                        </div>

                                        {/* <!-- contents --> */}
                                        <div className="anecdote__contents">
                                            <h1 className="anecdote__heading">Did you know?</h1>
                                            <div className="anecdote__nav">
                                                <div className="anecdote__nav-control"></div>
                                                <div className="anecdote__nav-contents">
                                                    {/* <!-- panes --> */}
                                                    <div className="anecdote__panes">
                                                        <div className="anecdote__pane">
                                                            <p>If the federal debt was split evenly among households, <strong>your household's share</strong> would be roughly <strong>{AfgData.household_share_debt.value}</strong>.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/debt-2-outline.svg" alt=""></img>
                                                            <p>That is about equal to the <strong>median home price in {AfgData.share_debt_city.value}</strong> ({AfgData.share_debt_city_price.value}).</p>
                                                            <p className="source">Source - <a href={AfgData.census_median_home.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                        </div>
                                                        <div className="anecdote__pane">
                                                            <p>{AfgData.current_fy_debt.value} equates to a little less than <strong>{AfgData.debt_per_individual.value}</strong> per individual in the U.S.</p>
                                                            <img role="presentation" className="anecdote__illustration" src="/americas-finance-guide/images/debt-3-outline.svg" alt=""></img>
                                                            <p>That is equal to the <strong>average salary of {AfgData.debt_average_salary_type.value}</strong>.</p>
                                                            <p className="source">Source - <a href={AfgData.bls_occ_employment .value} rel="noopener noreferrer" target="_blank">Bureau of Labor Statistics</a> & <a href={AfgData.census_population.value} rel="noopener noreferrer" target="_blank">U.S. Census Bureau</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="anecdote__nav-control"></div>
                                            </div>
                                            <a href="/americas-finance-guide/debt/" className="anecdote__cta link-button">Go Explore Debt
                                              <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right"/></a>
                                        </div>
                                    </section>

                                    <p className="chapter__paragraph--tightened">To pay for a deficit, the federal government borrows additional funds, which increases the debt. The total debt that the federal government owes is essentially the accumulation of deficits over time, minus debt repaid by any surpluses, plus debt that the Treasury owes to other parts of the federal government. Other activities contribute to the change in federal debt, such as changes in the Treasury's operating cash account and federal student loans.</p>
                                    <p className="chapter__paragraph--tightened">Are federal debt and deficit the same thing? No, but they do affect one another.</p>

                                    <section className="accordion">
                                        <AccordionList title="Why can’t the government just print more money?">
                                            <div className="accordion__content">
                                                <p>It can, and does. While the Department of the Treasury prints actual dollars, “printing money” is also a term that is sometimes used to describe a means of <a href={AfgData.monetary_policy.value} rel="noopener noreferrer" target="_blank">monetary policy</a>, which is conducted by the Federal Reserve. Monetary policy involves controlling the supply of money and the cost of borrowing. The Federal Reserve uses monetary policy to promote maximum employment, stable prices, and moderate long-term interest rates on the behalf of the Congress. The federal government uses fiscal policy, or the control of taxation and government spending, to promote economic activity.</p>
                                            </div>
                                        </AccordionList>
                                    </section>

                                    <a href="/americas-finance-guide/debt/" className="link-button chapter__cta">
                                        <div className="link-button__text--block">
                                            <div className="link-button__text--top cg-learn-more-button-text">Learn more about</div>
                                            <div className="link-button__text--bottom cg-learn-more-button-text">Federal Debt</div>
                                        </div>
                                        <div className="link-button__icon--block">
                                        <FontAwesomeIcon icon={faAngleRight} width={11} className="fa fa-chevron-right cg-learn-more-button-text"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="chapter__chart">
                                    <img src="/americas-finance-guide/images/debt-graph-outline.svg" alt="Federal debt has increased over the past five years. Federal debt was $18.2 trillion, $19.6 trillion, $20.2 trillion, $21.5 trillion and $22.7 trillion at the end of the years 2015 to 2019 respectively."></img>
                                    <p className="chapter__chart--reference">Data used throughout this site is provided by the <a href={AfgData.overview_mspd.value} rel="noopener noreferrer" target="_blank">U.S. Department of the Treasury</a> and refers to Fiscal Year {AfgData.current_fy.value}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="hwcta">
                        <AccordionList title="Data Sources and Methodology">
                            <p>This analysis was conducted using the <a href={AfgData.mts_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue and spending of the United States and the <a href={AfgData.mspd_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Statement of the Public Debt (MSPD)</a> as the data source for federal debt.</p>
                            <p>U.S. Census Bureau data was used for <a href={AfgData.census_population.value} rel="noopener noreferrer" target="_blank">population</a> and <a href={AfgData.census_household.value} rel="noopener noreferrer" target="_blank">household</a> estimates. <a href={AfgData.census_median_home.value} rel="noopener noreferrer" target="_blank">Median home price estimates</a> are also provided by the U.S. Census Bureau. Rent estimates come from the <a href={AfgData.hud_median_rent.value} rel="noopener noreferrer" target="_blank">Department of Housing and Urban Development (HUD)</a>. The Bureau of Labor Statistics (BLS) <a href={AfgData.bls_occ_employment.value} rel="noopener noreferrer" target="_blank">Occupational Employment Statistics</a> was used for wage estimates. Information on the amount of credit card debt added by Americans comes from the Federal Reserve Bank of New York’s <a href={AfgData.frbny_microecon.value} rel="noopener noreferrer" target="_blank">Center for Microeconomic Data</a>. The annual 10-K reports of the top S&P 500 companies were compiled in order to find the equivalent revenue from companies to match the federal government’s revenue for the year. The <a href={AfgData.artba_road_cost.value} rel="noopener noreferrer" target="_blank">American Road and Transportation Builders Association</a> provides information about the cost of building new roads derived from the cost models of different states.</p>
                            <div className="afg__download--div">
                                <div className="afg__download--heading">Download Source Data</div>
                                <ul>
                                    <li><a href="/americas-finance-guide/afgData/overview_federal_revenue.csv" download="overview_federal_revenue.csv">overview_federal_revenue.csv</a></li>
                                    <li><a href="/americas-finance-guide/afgData/overview_federal_spending.csv" download="overview_federal_spending.csv">overview_federal_spending.csv</a></li>
                                    <li><a href="/americas-finance-guide/afgData/overview_federal_deficit.csv" download="overview_federal_deficit.csv">overview_federal_deficit.csv</a></li>
                                    <li><a href="/americas-finance-guide/afgData/overview_federal_debt.csv" download="overview_federal_debt.csv">overview_federal_debt.csv</a></li>
                                </ul>
                            </div>
                        </AccordionList>
                    </section>

                    <div className="historical-quote">
                        <blockquote>We might hope to see the finances of the Union as <strong>clear and intelligible as a merchant's books</strong>, so that every member of Congress, and <strong>every person</strong> of any mind in the Union should be able to <strong>comprehend them</strong>, to investigate abuses, and consequently to control them.</blockquote>
                        <img role="presentation" className="historical-quote__image" src="/americas-finance-guide/images/jefferson.png" alt=""></img>
                        <p className="historical-quote__credit"><strong>Thomas Jefferson</strong> to Albert Gallatin, 1802<br/>(edited)</p>
                    </div>

                    <div className="about-us">
                        <h1 className="about-us__heading">Americans asked. We listened.</h1>
                        <p className="about-us__main-copy"><em>Your Guide to America's Finances</em> is a re-invention of the <a href={AfgData.citizens_guide_link.value} rel="noopener noreferrer" target="_blank">Citizen’s Guide to the Financial Report of the U.S. Government</a>. This site was created in response to the public’s desire to learn more about the financial picture of the United States. Where does the money come from? Where does it go? What are the trends over time, and how does the U.S. compare to other countries?  This guide was created to make federal financial information open and accessible to all - reflecting the very principles that our founding fathers set forth when the United States was formed.</p>
                        <p className="about-us__source"><strong>Your Guide to America's Finances</strong> is brought to you by the U.S. Department of the Treasury</p>
                        <img src="/americas-finance-guide/images/treasury-seal.svg" className="about-us__logo" alt="U.S. Treasury Logo"></img>
                    </div>
                </div>
            </Default>
            <AfgAnecdote/>
        </>
    )
}

export default OverviewPage
