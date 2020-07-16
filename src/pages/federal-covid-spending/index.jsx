import React from 'react';
import styles from './styles.module.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import globalStyles from 'src/styles/variables.scss';

import StoryLayout from '../../components/layouts/story/story';
import { Grid } from "@material-ui/core";
import Footnotes from "../../components/footnotes/footnotes";
import SEO from '../../components/seo';
import StorySection from 'src/components/section-elements/story-section/story-section';
import Accordion from 'src/components/accordion/accordion';
import Budget from '../../page-sections/federal-covid-spending/budget/budget';
import Overview from '../../page-sections/federal-covid-spending/overview/overview';
import Tracking from '../../page-sections/federal-covid-spending/tracking';


const BudgetAccordionContent = () => (
  <div className={styles.accordionContents}>
    <p>
      All of the data in this analysis comes from agencies’ certified monthly reporting to the <a target='_blank' rel='noopener noreferrer' href="https://www.fiscal.treasury.gov/gtas/">Treasury’s Governmentwide Treasury Account Symbol (GTAS) Adjusted Trial Balance System</a>. While the Treasury validates the data by comparing it to information from other systems, each federal agency’s Chief Financial Officer (CFO) is responsible for certifying their reporting and ensuring their data is correct.
    </p>
    <p>
      For the COVID-19 special appropriations, agencies are required to include a special field called the <b>Disaster Emergency Fund Code (DEFC)</b> in their financial reporting. Data Lab is tracking COVID-19 appropriations through the spending lifecycle using the DEFC that maps to each piece of legislation.
    </p>
    <p>
      To learn more about how we developed this analysis and download the raw data, visit the <a href="/federal-covid-spending/methodologies" target="_blank" rel="noopener noreferrer">Data Sources and Methodologies page</a>
    </p>
  </div>
);

export default class FederalCovidSpending extends React.Component {
  constructor(props) {
    super(props);
  }

  sectionComponents = {
    Overview: Overview,
    Budget: Budget,
    Tracking: Tracking
  };

  sections = [
    {
      section: 'Overview',
      anchor: 'budget',
      number: '01',
      subtext: 'Overview',
      subblurb: 'How is the federal government allocating emergency funds for COVID-19?',
      sectionTeaser: ['How is the federal government', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}> allocating emergency funds of COVID-19?</span>],
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: [
        <>
          <p key='section-1-p-1'>
            To aid the nation’s recovery from the coronavirus disease 2019 (COVID-19) pandemic, the U.S. Congress passed four special appropriations laws, making $2.3 trillion available for the federal government to use in relief efforts.<a id="fr1" href="#fn1" className="footnoteref">1</a> The largest of these was the Coronavirus Aid, Relief, and Economic Security (CARES) Act, which provides almost $2 trillion and is the largest special appropriation in American history. To track how and where COVID-19 funding has been spent, we first look at the major players involved in spending the funds.
          </p>
          <p key='section-1-p-2'>
            Federal agencies play a critical role in COVID-19 relief efforts by executing and administering funding allocated to them through the appropriations process. Approximately 90% of special appropriations for COVID-19 are authorized to four agencies: <a href="https://home.treasury.gov/policy-issues/cares" target="_blank" rel='noopener noreferrer'>the Department of the Treasury</a> (Treasury), the <a href="https://www.sba.gov/page/coronavirus-covid-19-small-business-guidance-loan-resources" target="_blank" rel='noopener noreferrer'>Small Business Administration</a> (SBA), the <a href="https://www.hhs.gov/coronavirus/cares-act-provider-relief-fund/index.html" target="_blank" rel='noopener noreferrer'>Department of Health and Human Services</a> (HHS), and the <a href="https://www.dol.gov/coronavirus" target="_blank" rel='noopener noreferrer'>Department of Labor</a> (DOL).
          </p>
          <p key='section-1-p-3'>
            Each agency serves a unique mission and has been allocated supplemental funding to expand existing programs, or in some cases, establish new programs in response to the pandemic. For example, the Treasury issues Economic Impact Payments through the Internal Revenue Service’s tax system. Funding has also gone to DOL’s unemployment compensation programs and SBA’s grant and loan programs. Examples of new programs include the HHS Provider Relief Fund and Treasury’s Coronavirus Economic Stabilization Act Program. In Section 3, we dive deeper into each agency’s spending accounts for insight into how the agency is spending the money.
          </p>
        </>
      ],
      viztitle: 'COVID-19 Supplemental Funding by Agency',
      tagName: 'Budget'
    },
    {
      section: 'The Flow of Funds',
      anchor: 'overview',
      number: '02',
      subtext: 'The Flow of Funds',
      subblurb: 'How do federal dollars move from Congress to the American people?',
      sectionTeaser: ['How do federal dollars ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>move from Congress to the American people?</span>],
      introBlurb: [
        <>
          <p key='section-2-p-1'>
            There are many steps in the process to move federal dollars through the full budget lifecycle to the American people. In this section, we break down a few key terms and explain how agencies spend supplemental funding to help follow the flow of money.
          </p>
          <p key='section-2-p-2'>
            After a special appropriations law passes, it is the role of the Treasury to review the new legislation and issue funds to agencies’ spending accounts. The <a href="https://www.usaspending.gov/#/?glossary=appropriation" target="_blank" rel='noopener noreferrer'>appropriations</a> process gives agencies the authority to begin using funding according to the purpose assigned in the law. To spend the money, agencies obligate the funds to different programs through contracts, direct payments, grants, or loans. When agencies make an <a href="https://www.usaspending.gov/#/?glossary=obligation" target="_blank" rel='noopener noreferrer'>obligation</a>, they create a binding agreement to use the funds for a particular purpose. An example of an obligation is an agency setting aside adequate funds when it enters into a contract with a vendor to purchase <a href="https://www.usaspending.gov/#/award/CONT_AWD_75A50120C00030_7505_-NONE-_-NONE-" target="_blank" rel='noopener noreferrer'>personal protective equipment, such as masks</a>.
          </p>
          <p key='section-2-p-3'>
            Creating an obligation doesn’t mean the money has been paid, only that the agency has promised to pay the funds. In many cases, the recipients of funds may be required to do something before receiving payment, such as delivering equipment or supplies.
          </p>
          <p key='section-2-p-4'>
            The final step in the process is making a payment, which is called an <a href="https://www.usaspending.gov/#/?glossary=outlay" target="_blank" rel='noopener noreferrer'>outlay</a>. This is the step where the agencies authorize the Treasury to issue funds toward a direct payment, grant, loan, or contract to individuals, businesses, or other organizations.
          </p>
        </>
      ],
      viztitle: 'The Process of COVID-19 Supplemental Spending',
      tagName: 'Overview',
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor }
    },
    {
      section: 'Tracking',
      anchor: 'tracking',
      number: '03',
      subtext: 'Tracking Spending',
      subblurb: 'How much emergency funding has been spent?',
      sectionTeaser: ['How much emergency funding ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>has been spent?</span>],
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: [
        <>
          <p key='section-3-p-1'>
            As of May 1st, the Treasury has tracked $963 billion in obligations, of which $459 billion has been outlayed in COVID-19 relief. These totals are calculated from agencies’ certified monthly reports to the Treasury’s governmentwide accounting system (GTAS), which include how much funding agencies obligated and outlayed from their spending accounts.
          </p>
          <p key='section-3-p-2'>
            In this visualization, we explore the 180 agency spending accounts containing COVID-19 relief funding. These 180 accounts are just a small fraction of the 2,000 accounts used for regular spending. You can click or tab into the visualization to explore how much has been committed and spent by account.
          </p>
          <p key='section-3-p-3'>
            This analysis will be updated monthly as new data becomes available. To learn more about how we developed this analysis and download the raw data, visit the <a href="/federal-covid-spending/methodologies" target="_blank">Data Sources and Methodologies page</a>.
          </p>
        </>
      ],
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking',
      accordion: (
        <aside>
          <Accordion title='How do you track $2.57 trillion?' color='#6F41A7' backgroundColor='#F3EAFF' isCovid>
            {BudgetAccordionContent()}
          </Accordion>
        </aside>
      )
    }
  ];

  render = () =>
    <StoryLayout
      title='The Federal Response To COVID-19'
      introSentence='How is the federal government funding relief efforts for COVID-19?'
      contextStatement='Data Lab explores how supplemental funding for COVID-19 makes its way from Congress into the economy. We break down the steps taken by federal agencies to use the $2.3 trillion and track the status so you can see how much has been spent.'
      sectionToc={this.sections}
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <SEO
        title='Data Lab – The Federal Response to COVID-19 – U.S. Treasury'
        description='SEO description'
        keywords={['federal spending', 'government spending', 'economic relief', 'relief package', 'economic stimulus', 'obligations', 'appropriations', 'covid', 'coronavirus', 'COVID19']}
      />

      {this.sections.map((item, key) => {
        const SectionTag = this.sectionComponents[item.tagName];
        return (
          <StorySection key={key} header={item}>
            <SectionTag sectionId={`section-${item.anchor}`} section={item} location={this.props.location} />
          </StorySection>
        );
      })}
      <Grid container justify="center">
        <Grid item xs={10}>
          <Footnotes
            footnotes={[
              'Coronavirus Preparedness and Response Supplemental Appropriations Act (H.R. 6074) appropriated an estimated $7.8 billion; Families First Coronavirus Response Act (H.R. 6201) appropriated an estimated $3.4 billion; CARES Act (H.R. 748) appropriated an estimated $1.95 trillion of funding; and the Paycheck Protection Program and Health Care Enhancement Act (H.R. 266) appropriated an estimated $483 billion.',
            ]}
          />
        </Grid>
      </Grid>
    </StoryLayout>
}
