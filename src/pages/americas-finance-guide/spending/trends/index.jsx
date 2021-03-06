import 'src/styles/afg/cg.scss';
import 'src/styles/afg/trendsCommon.scss';

import React, { useEffect, useState } from 'react';
import SEO from 'src/components/seo';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import SpendingTrends from 'src/page-sections/afg-spending/trends/index';
import AfgLayout from 'src/components/layouts/afg/afg';

function SpendingTrendsPage(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 830);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const breadcrumbs = (
        <section className="tour tour__spending-trends">
            <div className="tour__part-one">
                <h1>How does federal spending in the United States compare to other countries?</h1>
                <p>When you're done here, see how federal spending by the U.S. compares to other countries.</p>
            </div>
            <a className="tour__link" href="/americas-finance-guide/spending/country-comparison/">Continue<FontAwesomeIcon icon={faAngleRight} width={7} className="fas fa-chevron-right"/></a>
        </section>
    )

    return (
        <>
            <SEO
                title='Government Spending Trends Over Time | U.S. Treasury Data Lab'
                description='Explore U.S. spending by category and agency over a five-year period using an interactive chart.'
                excerpt='This chart presents federal spending by spending type or by agency over a five year period. Have there been significant changes in federal spending? What impact does an increase or decrease have on spending at the sub-category level? You can track trends in federal spending by category or at the sub-category level.'
            />
            <Og socialMediaImage={"/americas-finance-guide/images/social-share/social-media-share-spending.jpg"} />
            <AfgLayout location={props.location} chapter={'spending'}>
                <div className="trends-common-wrapper">
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
                            {!isMobile && breadcrumbs}
                        </div>
                        <div className="trend-chart">
                            <div id="spending-chart-toggle" className="toggle-component toggle-component--spending clearfix" data-active="function">
                                <span className="toggle-component__label">Category</span>
                                <button id="toggle-spending-data-type" className="toggle-control" aria-label="Toggle spending data type">
                                    <div className="toggle-control__background">
                                        <div className="toggle-control__dot"></div>
                                    </div>
                                </button>
                                <span className="toggle-component__label">Agency</span>
                            </div>
                            <SpendingTrends />
                        </div>
                    </div>
                    {isMobile && breadcrumbs}
                    <section className="hwcta">
                        <AccordionList title="Data Sources and Methodology">
                            <p>The visualization was created using the <a href={AfgData.mts_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government spending of the United States. Some categories from the MTS have been renamed in order to be more easily understood. <a href={AfgData.bls_cpiu.value} rel="noopener noreferrer" target="_blank">The Bureau of Labor Statistics (BLS) Consumer Price Index for All Urban Consumers (CPI-U)</a> was used to adjust spending in fiscal years {AfgData.inflation_adj_years.value} for inflation. Adjusting for inflation allows users to see real, not nominal, changes in sources of spending over time.</p>
                            <div className="afg__download--div">
                                <div className="afg__download--heading">Download Source Data</div>
                                <ul>
                                    <li><a href="/americas-finance-guide/data/federal_spending_trends.csv" download="federal_spending_trends.csv">federal_spending_trends.csv</a></li>
                                </ul>
                            </div>
                        </AccordionList>
                    </section>
                </div>
            </AfgLayout>
        </>
    )
}

export default SpendingTrendsPage;
