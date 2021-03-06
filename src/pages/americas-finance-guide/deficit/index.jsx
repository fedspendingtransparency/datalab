import 'src/styles/afg/chapterIntroCommon.scss';
import 'src/styles/afg/cg.scss';
import 'src/page-sections/afg-deficit/intro/deficit-intro.scss';

import React, { useState, useEffect } from 'react';
import SEO from 'src/components/seo';
import TabsWrapper from 'src/components/tabs/tabs';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import DeficitIntro from 'src/page-sections/afg-deficit/intro/index';
import DeficitTab from 'src/page-sections/afg-deficit/intro/mobile/deficit';
import SpendingTab from 'src/page-sections/afg-deficit/intro/mobile/spending';
import DebtTab from 'src/page-sections/afg-deficit/intro/mobile/debt';
import { activeLayer, setActiveLayer } from 'src/page-sections/afg-deficit/intro/helpers/manageLayers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';
import AfgLayout from 'src/components/layouts/afg/afg';
import AnecdoteDeficitSVG from '../../../../static/americas-finance-guide/icons/anecdote-deficit.svg';
import Og from '../../../components/og-tag/og';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const desktopVizComponent = (
  <>
    <DeficitIntro />
    <div className="intro-math intro-hidden">
      <FontAwesomeIcon icon={faReply} className="fas fa-reply intro-math__icon" />
      {AfgData.dot_number_deficit.value}
      {' '}
      dots x
      {' '}
      {AfgData.dot_represents.value}
      {' '}
      =
      {' '}
      <strong>{AfgData.current_fy_deficit.value}</strong>
    </div>
    <div className="facts sidebar intro-hidden">
      <div className="facts__inner">
        <div id="compare-options">
          <p className="facts__prompt">What is the deficit and how does that compare to the national debt?</p>
          <div className="facts__triggers">
            <button id="data-trigger-deficit" className="facts__trigger" data-trigger-id="deficit">Deficit</button>
            <button id="data-trigger-debt" className="facts__trigger" data-trigger-id="debt">Debt</button>
          </div>
        </div>
        <section id="deficit-facts" className="facts__section">
          <p>When spending exceeds revenue, the difference is a deficit, which the federal government finances mainly by borrowing from the public.</p>
        </section>
        <section id="debt-facts" className="facts__section">
          <p>To pay for a deficit, the government takes on debt. The total debt that the government owes is essentially the accumulation of deficits over time, minus repayments of debt.</p>
          <p>
            *The&nbsp;
            {AfgData.added_debt_short.value}
            {' '}
            increase in federal debt actually consists of the&nbsp;
            {AfgData.current_fy_deficit_short.value}
            {' '}
            deficit along with changes to operating cash balance, intergovernmental holdings, and other financial activities. In the visualization, the operating cash balance, intergovernmental holdings, and other financial activities were combined with the prior year debt balance for simplicity.
          </p>
        </section>
      </div>
    </div>
  </>
);

const tabs = [
  {
    label: 'Deficit',
    component: <DeficitTab />,
  },
  {
    label: 'Spending',
    component: <SpendingTab />,
  },
  {
    label: 'Debt',
    component: <DebtTab />,
  },
];

function ExploreDeficitPage({ location }) {
  const layers = ['', 'deficit', 'debt'];

  const handleTabChange = (newTabValue) => {
    setActiveLayer(layers[newTabValue]);
  };

  const mobileVizComponent = (
    <TabsWrapper
      tabs={tabs}
      handleTabChange={handleTabChange}
      activeTab={layers.indexOf(activeLayer)}
    />
  );

  const [isMobile, setIsMobile] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 960);
  };

  useEffect(() => {
    handleResize();
    setIsReady(true);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const renderVizComponent = () => {
    if (isReady) {
      return isMobile ? mobileVizComponent : desktopVizComponent;
    }
    return null;
  };

  return (
    <>
      <SEO
        title="Federal Deficit | U.S. Treasury Data Lab"
        description="Learn about the national deficit, the difference between deficit and debt, and how the government pays for deficit spending."
        excerpt={`How did we end up with a deficit? A deficit occurs when the money going out exceeds the money coming in. Since the federal government spent ${AfgData.current_fy_spending_short.value} and collected ${AfgData.current_fy_revenue_short.value} in ${AfgData.current_fy.value}, the government ran a deficit for the year.`}
      />
      <Og socialMediaImage="/americas-finance-guide/images/social-share/social-media-share-deficit.jpg" />
      <AfgLayout location={location} chapter="deficit">
        <div className="chapter-intro-common-wrapper deficit-intro-wrapper">
          <div className="deficit-intro">
            <ControlBar>
              <Share
                location={location}
                title="Data Lab - Explore Federal Deficit – U.S. Treasury"
                twitter="How much is the federal deficit? Check out #YourGuide for visualizations and .CSV data to do your own analysis. #DataLab #OpenGov"
              />
            </ControlBar>
            <h1>
              In&nbsp;
              {AfgData.current_fy.value}
              , the federal government spent&nbsp;
              {AfgData.current_fy_deficit.value}
              {' '}
              more than it collected, resulting in a deficit.
              <button className="info-box-trigger" data-box-id="per-individual">
                <img src={AnecdoteDeficitSVG} alt="anecdote icon" />
              </button>
            </h1>
            <div className="debt-copy desktop-only">
              <p>
                How did we end up with a deficit? A deficit occurs when the money going out exceeds the money coming in. Since the federal government spent&nbsp;
                {AfgData.current_fy_spending.value}
                {' '}
                and collected&nbsp;
                {AfgData.current_fy_revenue.value}
                {' '}
                in&nbsp;
                {AfgData.current_fy.value}
                , the government ran a deficit for the year.
              </p>
            </div>
            <div className="debt-copy mobile-only">
              What is the deficit and how does that compare to the national debt?
            </div>
            <div className="viz-wrapper">
              {renderVizComponent()}
              <section className={`accordion sidebar ${isMobile && isReady ? '' : 'intro-hidden'}`}>
                <AccordionList title="How else does the government finance a deficit?">
                  <div>
                    <p>The government can also use operating cash, which is available from an account at the Federal Reserve, to pay for deficit spending. This would be similar to an individual using their debit card to pay for purchases.</p>
                  </div>
                </AccordionList>
              </section>
              <section className="tour sidebar intro-hidden desktop-only">
                <div className="tour__part-one">
                  <h1>How has the federal deficit changed over time?</h1>
                  <p>
                    When you are done here, we encourage you to explore trends in the federal deficit since&nbsp;
                    {AfgData.deficit_trend_start.value}
                    .
                  </p>
                </div>
                <a href="/americas-finance-guide/deficit/trends/" className="tour__link">
                  Explore
                  <FontAwesomeIcon icon={faAngleRight} width={7} className="fa fa-angle-right" />
                </a>
              </section>
            </div>
            {' '}
            {/* end viz-wrapper */}
            <div className="info-box" id="per-individual">
              <img src={AnecdoteDeficitSVG} alt="anecdote icon" />
              <p>
                How much is&nbsp;
                {AfgData.current_fy_deficit.value}
                {' '}
                in deficit spending? If you take the U.S. population estimate in&nbsp;
                {AfgData.current_fy.value}
                {' '}
                of&nbsp;
                {AfgData.us_population.value}
                {' '}
                people&nbsp;
                <a href={AfgData.census_population.value} rel="noopener noreferrer" target="_blank">(U.S. Census Bureau)</a>
                ,
                {' '}
                {AfgData.current_fy_deficit.value}
                {' '}
                would be equivalent to a little less than&nbsp;
                {AfgData.deficit_per_individual.value}
                {' '}
                in deficit spending for every individual in the U.S.
              </p>
            </div>
            <div className="info-box" id="billion-dollars">
              <img src={AnecdoteDeficitSVG} alt="anecdote icon" />
              <p>
                In this visualization, one dot represents&nbsp;
                {AfgData.dot_represents.value}
                .
              </p>
            </div>
          </div>
          <section className="hwcta">
            <AccordionList title="Data Sources and Methodology">
              <p>
                This visualization was created using the
                <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank"> Monthly Treasury Statement (MTS)</a>
                {' '}
                as the data source for federal government revenue, spending, and deficit and the&nbsp;
                <a href={AfgData.current_mspd.value} rel="noopener noreferrer" target="_blank"> Monthly Statement of the Public Debt (MSPD)</a>
                {' '}
                as the data source of federal debt.
              </p>
              <div className="afg__download--div">
                <div className="afg__download--heading">Download Source Data</div>
                <ul>
                  <li><a href="/americas-finance-guide/data/explore_federal_deficit.csv" download="explore_federal_deficit.csv">explore_federal_deficit.csv</a></li>
                </ul>
              </div>
            </AccordionList>
          </section>
        </div>
      </AfgLayout>
    </>
  );
}
export default ExploreDeficitPage;
