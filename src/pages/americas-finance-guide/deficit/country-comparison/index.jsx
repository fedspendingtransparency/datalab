import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/globalSass/countryCommon.scss'
import 'src/libs/ffg/src/deficit/countries/deficit-country-comparison.scss'

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from '../../../../components/headers/headers';

function DeficitCountryComparisonPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/deficit/countryComparison.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Deficit Country Comparison – U.S. Treasury'
                description='Compare the federal deficit of the United States to other countries.'
                excerpt='How does the United States compare to countries of similar size and gross domestic product (GDP)? Explore the chart below. You can compare deficits in dollars and deficit as a percent of GDP. Find a country of interest and see for yourself.'
                keywords={[`Deficit, federal deficit, U.S.deficit, national deficit,  debt, national debt, federal debt, U.S. debt compared to other countries`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'deficit'}></AfgNav>

                <div className="cg-wrapper country-common-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title='Data Lab - Deficit Country Comparison – U.S. Treasury'
                                twitter='How does the U.S. deficit compare with other countries? Check out Your Guide America’s Finances for data from 169 countries, then download .CSV data files to perform your own analysis. #YourGuide #DataLab #OpenGov'
                                />
                        </ControlBar>

                        <h1>Compare the Federal Deficit of the United States to Other Countries</h1>

                        <div className="country-copy">
                            <div className="country-copy__text">
                                <p>How does the United States compare to countries of similar size and gross domestic product? Explore the chart, which shows the total revenue of the United States compared to {AfgData.countries_compared.value} other countries listed in the CIA World Factbook.  You can compare deficits (in dollars) and deficit as a percent of gross domestic product. Find a country of interest and see for yourself.  To ensure an accurate comparison, {AfgData.country_compare_year.value} revenue data is used in this section, not current fiscal year data. </p>
                                <p><em>Please note that the countries depicted in this chart have different forms of government, and these differences may impact the scope of finances reported by each country.</em></p>
                            </div>
                            <Link to={"/americas-finance-guide/debt/"} className="chapter-link chapter-link--debt" >
                                <div className="chapter-link__text-block">
                                    <div className="chapter-link__learn-more">Learn more about</div>
                                    Federal Debt
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right tour__angle-right" />
                            </Link>
                        </div>

                        <div className="country-chart">
                            <h2 className="chart-title">Country Comparison</h2>
                            <div className="hint">Click <span className="sort-button-placeholder"></span> to sort columns.</div>

                            <div id="viz" className="deficit-country"></div>
                        </div>

                        <div className="clearfix"></div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>The visualization was created using the <a href={AfgData.country_comparison_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue, spending, and deficit of the United States. Gross domestic product (GDP) figures for the United States come from the <a href={AfgData.bea_gdp.value} rel="noopener noreferrer" target="_blank">Bureau of Economic Analysis (BEA)</a>. GDP data for countries other than the United States comes from the <a href={AfgData.imf_gdp.value} rel="noopener noreferrer" target="_blank">International Monetary Fund (IMF) World Economic Outlook Database (WEOD)</a>.</p>
                                <p>In researching potential data sources for information on the revenue and spending of other governments for the country comparison module, we chose the <a href={AfgData.cia_world_factbook.value} rel="noopener noreferrer" target="_blank">CIA World Factbook</a> because it provides the best comparison for the following reasons:</p>
                                <ul>
                                    <li>the number of countries with {AfgData.country_compare_year.value} data,</li>
                                    <li>relative consistency with the level of government measured (central government only as a standard),</li>
                                    <li>all figures expressed in US dollars.</li>
                                </ul>
                                <p>Countries with figures before {AfgData.country_compare_year.value} were excluded from the country comparison data set. Although most countries in the data set feature revenue and spending from central government sources only, some countries included state/provincial/local data. As a result, this visualization should not be considered an absolute comparison of the revenue and spending of central governments for all countries.</p>
                                <p>To finish the data set for Country Comparison, gross domestic product figures from BEA and the IMF WEOD were combined with revenue and spending figures from the CIA World Factbook data set, excluding countries that did not have data available from both sources.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/deficit_country_comparison.csv" download="deficit_country_comparison.csv">deficit_country_comparison.csv</a></li>
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

export default DeficitCountryComparisonPage
