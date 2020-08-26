import 'src/libs/ffg/src/globalSass/cg.scss'
import 'src/libs/ffg/src/globalSass/countryCommon.scss'

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

function SpendingCountryComparisonPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/spending/countryComparison.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Spending Country Comparison – U.S. Treasury'
                description='Compare federal spending of the United States to other countries.'
                excerpt=' Check out total spending of the United States compared to 169 different countries in 2017. In this section, figures are presented using financial data from 2017 which allows us to provide you with the most recent spending data. In 2017, the United States spent $4 trillion, which is equivalent to about 21% of U.S. gross domestic product (GDP).'
                keywords={[`spending, federal spending, U.S. spending, gross domestic product, GDP,  federal spending per capita, country comparison, federal spending of the United States compared to other countries`]}
            />

            <Default>
							<AFGHeader />
                <AfgNav location={props.location} chapter={'spending'}></AfgNav>

                <div className="cg-wrapper country-common-wrapper">
                    <div className="ffg-wrapper">
                        <ControlBar>
                            <Share
                                location={props.location}
                                title='Data Lab - Spending Country Comparison – U.S. Treasury'
                                twitter='How does U.S. federal spending compare to other countries? Check out Your Guide to America’s Finances for data from 169 countries. #YourGuide #DataLab #OpenGov'
                                />
                        </ControlBar>

                        <h1>Compare Federal Spending of the United States to other Countries</h1>

                        <div className="country-copy">
                            <div className="country-copy__text">
                                <p>How does the United States compare to countries of similar size and gross domestic product? Explore the chart, which shows the total spending of the United States compared to {AfgData.countries_compared.value} other countries listed in the CIA World Factbook.  You can compare spending (in dollars) and spending as a percent of gross domestic product. Find a country of interest and see for yourself. To ensure an accurate comparison, {AfgData.country_compare_year.value} spending data is used in this section, not current fiscal year data.</p>
                                <p><em>Please note that the countries depicted in this chart have different forms of government, and these differences may impact the scope of finances reported by each country.</em></p>
                            </div>
                            <Link to={"/americas-finance-guide/deficit/"} className="chapter-link chapter-link--deficit" >
                                <div className="chapter-link__text-block">
                                    <div className="chapter-link__learn-more">Learn more about</div>
                                    Federal Deficit
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right tour__angle-right" />
                            </Link>
                        </div>

                        <div className="country-chart">
                            <h2 className="chart-title">Country Comparison</h2>
                            <div className="hint">Click <span className="sort-button-placeholder"></span> to sort columns.</div>

                            <div id="viz" className="spending-country"></div>
                        </div>

                        <div className="clearfix"></div>

                        <section className="hwcta">
                            <AccordionList title="Data Sources and Methodology">
                                <p>The visualization was created using the <a href={AfgData.country_comparison_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government spending of the United States. Gross domestic product (GDP) figures come from the <a href={AfgData.bea_gdp.value} rel="noopener noreferrer" target="_blank">Bureau of Economic Analysis (BEA)</a>. Gross domestic product data for countries other than the United States comes from the <a href={AfgData.imf_gdp.value} rel="noopener noreferrer" target="_blank">International Monetary Fund (IMF) World Economic Outlook Database (WEOD)</a>.</p>
                                <p>In researching potential data sources for information on the spending of other governments for the country comparison module, we chose the <a href={AfgData.cia_world_factbook.value} rel="noopener noreferrer" target="_blank">CIA World Factbook</a> because it provides the best comparison for the following reasons:</p>
                                <ul>
                                    <li>the number of countries with {AfgData.country_compare_year.value} data,</li>
                                    <li>relative consistency with the level of government measured (central government only as a standard),</li>
                                    <li>all figures expressed in US dollars</li>
                                </ul>
                                <p>Countries with figures before {AfgData.country_compare_year.value} were excluded from the country comparison data set. Although most countries in the data set feature spending from central government sources only, some countries included state/provincial/local spending. As a result, this visualization should not be considered an absolute comparison of the spending of central governments for all countries.</p>
                                <p>To finish the data set for Country Comparison, gross domestic product figures from BEA and the IMF WEOD were combined with spending figures from the CIA World Factbook data set, excluding countries that did not have data available from both sources.</p>
                                <div className="afg__download--div">
                                    <div className="afg__download--heading">Download Source Data</div>
                                    <ul>
                                        <li><a href="/americas-finance-guide/afgData/spending_country_comparison.csv" download="spending_country_comparison.csv">spending_country_comparison.csv</a></li>
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

export default SpendingCountryComparisonPage
