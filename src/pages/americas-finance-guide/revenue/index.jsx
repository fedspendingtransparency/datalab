import 'src/styles/afg/chapterIntroCommon.scss';
import 'src/styles/afg/cg.scss';
import 'src/page-sections/afg-revenue/intro/revenue-intro.scss';

import React, { useState, useEffect, useRef } from 'react';
import SEO from 'src/components/seo';
import GdpTemplate from 'src/components/gdp-template/gdp-template';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Og from 'src/components/og-tag/og';
import TabsWrapper from 'src/components/tabs/tabs';
import RevenueIntro from 'src/page-sections/afg-revenue/intro/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply';
import AfgLayout from 'src/components/layouts/afg/afg';
import DefinitionSVG from '../../../../static/americas-finance-guide/icons/definition.svg';
import AnecdoteRevenueSVG from '../../../../static/americas-finance-guide/icons/anecdote-revenue.svg';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';
import { isMobileDevice } from '../../../afg-helpers/utils';
import { activeLayer, setActiveLayer } from '../../../afg-helpers/dots/revenue-and-spending/compareManager';
import styles from './revenue.module.scss';

function RevenueAndGdpPage({ location }) {
  const layers = ['', 'spending', 'gdp'];

  const handleTabChange = (newTabValue) => {
    setActiveLayer(layers[newTabValue]);
  };

  const setDesktopActiveLayer = (newLayer) => {
    setActiveLayer((prevActiveLayer) => {
      if (prevActiveLayer === newLayer) {
        return '';
      }
      return newLayer;
    });
  };

  const tabs = [
    {
      label: 'Revenue',
      component: <RevenueIntro selection="" />,
      trigger: 'revenue',
    },
    {
      label: 'Spending',
      component: <RevenueIntro selection="spending" />,
      trigger: 'spending',
    },
    {
      label: 'U.S. Economy',
      component: <RevenueIntro selection="gdp" />,
      trigger: 'gdp',
    },
  ];

  const [vizComponent, updateVizComponent] = useState(
    <RevenueIntro selection={activeLayer} />,
  );

  const handleResize = () => {
    updateVizComponent(
      !isMobileDevice() ? (
        <RevenueIntro
          selection={activeLayer}
          setDesktopActiveLayer={setDesktopActiveLayer}
        />
      ) : (
        <TabsWrapper
          tabs={tabs}
          handleTabChange={handleTabChange}
          activeTab={layers.indexOf(activeLayer)}
        />
      ),
    );
  };

  useEffect(() => {
    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [activeLayer]);

  return (
    <>
      <SEO
        title="Government Revenue | U.S. Treasury Data Lab"
        description="Learn how much the U.S. government collects in revenue. Compare federal revenue to federal spending and the size of the U.S. economy."
        excerpt="Federal revenue consists mostly of individual, corporate, and social insurance taxes collected from the people who live, work, or do business in the United States each Fiscal Year."
      />
      <Og socialMediaImage="/americas-finance-guide/images/social-share/social-media-share-revenue.jpg" />
      <AfgLayout location={location} chapter="revenue">
        <div className="chapter-intro-common-wrapper revenue-intro-wrapper">
          <ControlBar>
            <Share
              location={location}
              title="Data Lab - Federal Revenue and GDP – U.S. Treasury"
              twitter="How does federal revenue compare to spending and the size of the economy? Download the .CSV data files from Your Guide to America’s Finances and perform your own analysis! #YourGuide #DataLab #OpenGov"
            />
          </ControlBar>
          <h1>
            In
            {' '}
            {AfgData.current_fy.value}
            , the government collected
            {' '}
            {AfgData.current_fy_revenue.value}
            {' '}
            in revenue.
            <button className="info-box-trigger" data-box-id="per-individual">
              <img src={AnecdoteRevenueSVG} alt="anecdote icon" />
            </button>
          </h1>
          <div className={styles.mobileHeading}>
            How does federal spending compare to federal revenue and the size of the
            economy?
          </div>
          <div className="info-box" id="fiscal-year">
            <img src={AnecdoteRevenueSVG} alt="anecdote icon" />
            <p>
              Fiscal Year refers to the period of time used by the government for
              accounting and budget purposes. For the federal government, the fiscal
              year runs from October 1 through September 30.
            </p>
          </div>
          <div className="info-box" id="per-individual">
            <img src={AnecdoteRevenueSVG} alt="anecdote icon" />
            <p>
              How much is
              {' '}
              {AfgData.current_fy_revenue.value}
              ? If you divide it by the
              U.S. population estimate in
              {AfgData.current_fy.value}
              ,
              {' '}
              {AfgData.us_population.value}
              {' '}
              (
              <a
                href={AfgData.census_population.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                U.S. Census Bureau
              </a>
              ), it would equate to a little more than
              {' '}
              {AfgData.revenue_per_individual.value}
              {' '}
              in revenue for every individual in
              the U.S.
            </p>
          </div>
          <div className="info-box" id="billion-dollars">
            <img src={AnecdoteRevenueSVG} alt="anecdote icon" />
            <p>
              In this visualization, one dot represents
              {' '}
              {AfgData.dot_represents.value}
              {' '}
              dollars.
            </p>
          </div>
          <div className="info-box" id="gdp-info">
            <img src={DefinitionSVG} alt="definition icon" />
            <p>
              <strong>Gross domestic product (GDP)</strong>
              {' '}
              measures the size of the
              nation's economy by the total value of final goods and services that are
              produced in a year. Gross domestic product is used to compare the
              economies of different countries, measure growth in the economy, and
              determine the right monetary policies to address inflation and
              unemployment.
            </p>
          </div>
          <div className="viz-wrapper">
            {vizComponent}
            <div className="intro-math intro-hidden">
              <FontAwesomeIcon
                icon={faReply}
                className="fas fa-reply intro-math__icon"
              />
              {isMobileDevice()
							  ? AfgData.dot_number_revenue_mobile.value
							  : AfgData.dot_number_revenue.value}
              {' '}
              dots x
              {' '}
              {isMobileDevice()
							  ? AfgData.dot_represents_mobile.value
							  : AfgData.dot_represents.value}
              {' '}
              =
              {' '}
              <strong>{AfgData.current_fy_revenue.value}</strong>
            </div>
            {activeLayer === 'spending' && (
            <div className={styles.mobileCopy}>
              <p className={styles.mobileCopyHeading}>
                In Fiscal Year
                {' '}
                {AfgData.current_fy.value}
                , the federal government spent
                {' '}
                {AfgData.current_fy_spending.value}
                .
              </p>
              <p className={styles.mobileCopySubheading}>
                Since the government spent more than it collected, the deficit for
                {' '}
                {AfgData.current_fy.value}
                {' '}
                was
                {AfgData.current_fy_deficit.value}
                .
              </p>
            </div>
            )}
            {activeLayer === 'gdp' && (
            <div className={styles.mobileCopy}>
              <p className={styles.mobileCopyHeading}>
                In Fiscal Year
                {' '}
                {AfgData.current_fy.value}
                , federal revenue was equal to
                {' '}
                {AfgData.revenue_percent_gdp.value}
                {' '}
                of total gross domestic product
                (GDP), or economic activity, of the United States that year (
                {AfgData.current_fy_gdp.value}
                ).
              </p>
              <p className={styles.mobileCopySubheading}>
                Why do we compare federal revenue to gross domestic product? For one,
                the comparison serves as a rough gauge of the size of the federal
                government's footprint related to size of the entire country's economic
                activity. In addition, federal taxes are based on a percentage of
                income for people and businesses. If an economy is performing well,
                people and businesses earn more, and federal revenue from taxes
                increases.
              </p>
              <p className={styles.mobileCopyGdpLine}>
                What is gross domestic product?
                <button className="info-box-trigger" data-box-id="gdp-info">
                  <img src={DefinitionSVG} alt="definition icon" />
                </button>
              </p>
            </div>
            )}
            <div id="copy" className={`intro-hidden ${styles.mainMobileCopy}`}>
              <p>
                Where does the money come from? If you lived or worked in the United
                States in
                {' '}
                {AfgData.current_fy.value}
                , most likely your contributions are
                part of the
                {AfgData.current_fy_revenue.value}
                . Federal revenue consists
                mostly of individual, corporate, and social insurance taxes collected
                from the people who live, work, or do business in the United States each
                Fiscal Year.
                <button className="info-box-trigger" data-box-id="fiscal-year">
                  <img src={AnecdoteRevenueSVG} alt="anecdote icon" />
                </button>
              </p>
            </div>
            <div className="facts sidebar intro-hidden">
              <div className="facts__inner">
                <div id="compare-options">
                  <p className="facts__prompt">
                    How does federal revenue compare to federal spending and the size of
                    the economy?
                  </p>
                  <div className="facts__triggers">
                    <button className="facts__trigger" id="facts__trigger-spending" data-trigger-id="spending">
                      Federal Spending
                    </button>
                    <button className="facts__trigger" id="facts__trigger-gdp" data-trigger-id="gdp">
                      U.S. Economy
                    </button>
                  </div>
                </div>
                <section id="spending-facts" className="facts__section">
                  <h1>
                    In Fiscal Year
                    {' '}
                    {AfgData.current_fy.value}
                    , the federal government
                    spent
                    {AfgData.current_fy_spending.value}
                    .
                  </h1>
                  <p>
                    Since the government spent more than it collected, the deficit for
                    {' '}
                    {AfgData.current_fy.value}
                    {' '}
                    was
                    {AfgData.current_fy_deficit.value}
                    .
                  </p>
                </section>
                <section id="gdp-facts" className="facts__section">
                  <h1>
                    In Fiscal Year
                    {' '}
                    {AfgData.current_fy.value}
                    , federal revenue was equal
                    to
                    {AfgData.revenue_percent_gdp.value}
                    {' '}
                    of total gross domestic product
                    (GDP), or economic activity, of the United States that year (
                    {AfgData.current_fy_gdp.value}
                    ).
                  </h1>
                  <p>
                    Why do we compare federal revenue to gross domestic product? For one,
                    the comparison serves as a rough gauge of the size of the federal
                    government's footprint related to size of the entire country's
                    economic activity. In addition, federal taxes are based on a
                    percentage of income for people and businesses. If an economy is
                    performing well, people and businesses earn more, and federal revenue
                    from taxes increases.
                  </p>
                  <strong>
                    What is gross domestic product?
                    <button className="info-box-trigger" data-box-id="gdp-info">
                      <img src={DefinitionSVG} alt="definition icon" />
                    </button>
                  </strong>
                </section>
              </div>
            </div>
            {' '}
            {/* end facts sidebar intro-hidden */}
            <section className="tour sidebar intro-hidden">
              <h1 className="tour__heading">
                What are the sources of government revenue?
              </h1>
              <a
                href="/americas-finance-guide/revenue/categories/"
                id="tour-continue"
                className="tour__link"
              >
                Discover
                <FontAwesomeIcon
                  icon={faAngleRight}
                  width={7}
                  className="fa fa-angle-right"
                />
              </a>
            </section>
          </div>
          {' '}
          {/* end viz-wrapper  */}
          {' '}
          {/* end ffg-wrapper revenue-intro */}
          <section className="hwcta">
            <AccordionList title="Data Sources and Methodology">
              <p>
                The visualization was created using the
                {' '}
                <a
                  href={AfgData.current_mts.value}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Monthly Treasury Statement (MTS)
                </a>
                {' '}
                as the data source for federal government revenue of the United States.
                <GdpTemplate />
                {' '}
                The revenue-to-gross domestic product ratio is included
                to provide you with context for the trillions of dollars that come in to
                the federal government annually. Throughout this page, we use the gross
                domestic product for the Fiscal Year, not the Calendar Year, in order to
                facilitate an appropriate comparison.
              </p>
              <div className="afg__download--div">
                <div className="afg__download--heading">Download Source Data</div>
                <ul>
                  <li>
                    <a
                      href="/americas-finance-guide/data/federal_revenue_gdp.csv"
                      download="federal_revenue_gdp.csv"
                    >
                      federal_revenue_gdp.csv
                    </a>
                  </li>
                </ul>
              </div>
            </AccordionList>
          </section>
        </div>
      </AfgLayout>
    </>
  );
}

export default RevenueAndGdpPage;
