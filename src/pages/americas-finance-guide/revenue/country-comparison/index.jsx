import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/globalSass/countryCommon.scss'

import React from "react"
import { Link } from "gatsby"
import SEO from "src/components/seo"
import AfgData from "src/libs/_data/object_mapping.yml"
import Default from "src/components/layouts/default/default"
import { AFGHeader } from 'src/components/headers/headers';
import AccordionList from 'src/components/accordion-list/accordion-list'
import ControlBar from 'src/components/control-bar/control-bar'
import Share from 'src/components/share/share'
import { Helmet } from 'react-helmet';
import AfgNav from 'src/components/afg-nav/afg-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function RevenueCountryComparisonPage(props) {
    return (
        <>
            <Helmet>
                <script defer src="/americas-finance-guide/revenue/countryComparison.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Revenue Country Comparison – U.S. Treasury'
                description='Compare revenue of the United States to 169 different countries.'
                excerpt='How does the U.S. compare to other countries? We encourage you to check out the chart below. You can compare total revenue (in dollars) and revenue as a percent of gross domestic product (GDP). Find a country of interest and see for yourself.'
                keywords={[`federal revenue, U.S. revenue, gross domestic product, gdp, federal receipts, income taxes, corporate taxes, compare the U.S. GDP to other countries`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'revenue'}></AfgNav>

                <div className="cg-wrapper country-common-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title='Data Lab - Revenue Country Comparison – U.S. Treasury'
                                twitter='How does U.S. federal revenue compare to other countries? Check out the visualizations from Your Guide to America’s Finances to find out. #YourGuide #DataLab #OpenGov'
                                facebook='' reddit='' linkedin='' tumblr='' email='' />
                        </ControlBar>

                        <h1>Compare Federal Revenue of the United States to other Countries</h1>

                        <div className="country-copy">
                            <div className="country-copy__text">
                                <p>
                                How does U.S. revenue compare to other countries? Explore the chart, which shows the total revenue of the United States compared to {AfgData.countries_compared.value} other countries listed in the CIA World Factbook.  You can compare total revenue (in dollars) and revenue as a percent of gross domestic product. Find a country of interest and see for yourself.  To ensure an accurate comparison, {AfgData.country_compare_year.value} revenue data is used in this section, not current fiscal year data.
                            </p>
                                <p><em>Please note that the countries depicted in this chart have different forms of government, and these differences may impact the scope of finances reported by each country.</em></p>
                            </div>
                            <Link to={"/americas-finance-guide/spending/"} className="chapter-link chapter-link--spending">
                                <div className="chapter-link__text-block">
                                    <div className="chapter-link__learn-more">Learn more about</div>
                                    Federal Spending
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right tour__angle-right" />
                            </Link>
                        </div>

                        <div className="country-chart">
                            <h2 className="chart-title">Country Comparison</h2>
                            <div className="hint">Click <span className="sort-button-placeholder"></span> to sort columns</div>

                            <div id="viz"></div>
                        </div>

                        <div className="clearfix"></div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>The visualization was created using the <a href={AfgData.country_comparison_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue of the United States. Gross domestic product (GDP) figures for the United States come from the <a href={AfgData.bea_gdp.value} rel="noopener noreferrer" target="_blank">Bureau of Economic Analysis (BEA)</a>. GDP data for countries other than the United States comes from the <a href={AfgData.imf_gdp.value} rel="noopener noreferrer" target="_blank">International Monetary Fund (IMF) World Economic Outlook Database (WEOD)</a>.</p>
                                <p>In researching potential data sources for information on the revenue of other governments for the country comparison module, we chose the <a href={AfgData.cia_world_factbook.value} rel="noopener noreferrer" target="_blank">CIA World Factbook</a> because it provides the best comparison for the following reasons:</p>
                                <ul>
                                    <li>the number of countries with {AfgData.country_compare_year.value} data,</li>
                                    <li>relative consistency with the level of government measured (central government only as a standard),</li>
                                    <li>all figures expressed in US dollars.</li>
                                </ul>
                                <p>Countries with figures before {AfgData.country_compare_year.value} were excluded from the country comparison data set. Although most countries in the data set feature revenue from central government sources only, some countries included state/provincial/local revenue. As a result, this visualization should not be considered an absolute comparison of the revenue of central governments for all countries.</p>
                                <p>To finish the data set for Country Comparison, gross domestic product figures from BEA and the IMF WEOD were combined with revenue figures from the CIA World Factbook data set, excluding countries that did not have data available from both sources.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/revenue_country_comparison.csv" download="revenue_country_comparison.csv">revenue_country_comparison.csv</a></li>
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

export default RevenueCountryComparisonPage