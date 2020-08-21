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
import Budget from '../../page-sections/federal-covid-funding/budget/budget';
import Overview from '../../page-sections/federal-covid-funding/overview/overview';
import Tracking from '../../page-sections/federal-covid-funding/tracking';
import CovidCopy from 'src/page-sections/federal-covid-funding/_data/covidcopy_yaml_2020-08-21.yml'

const BudgetAccordionContent = () => (
  <div className={styles.accordionContents}>
    <p>
    All of the data in this analysis comes from agencies’ certified monthly reporting to the <a href="https://www.fiscal.treasury.gov/gtas/" target="_blank">Treasury’s Governmentwide Treasury Account Symbol Adjusted Trial Balance System (GTAS)</a>. Agencies are also mandated to report spending to USAspending.gov on a monthly basis, starting in July 2020. While the Treasury validates the data by comparing it to information from other systems, each federal agency’s Chief Financial Officer (CFO) is responsible for certifying all of the agency’s reporting, and ensuring the data is correct.
    </p>
    <p>
      For the COVID-19 special appropriations, agencies are required to include a special field called the <b>Disaster Emergency Fund Code (DEFC)</b> in their financial reporting. Data Lab is tracking COVID-19 appropriations through the spending lifecycle using the DEFC that can be used to map transactions to each piece of legislation.
    </p>
  </div>
);

export default class FederalCovidFunding extends React.Component {
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
      subblurb: 'What types of financial relief is the government providing?',
      sectionTeaser: ['What', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}> types of financial relief</span>, ' is the government providing?'],
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: [
        <>
          <p key='section-1-p-1'>
To aid the nation’s recovery from the coronavirus disease 2019 (COVID-19) pandemic, the U.S. Congress passed four special appropriations laws for the federal government to use in relief efforts. The largest of these was the Coronavirus Aid, Relief, and Economic Security (CARES) Act, which provides approximately $2.07 trillion and is the largest supplemental appropriation in American history.
          </p>
          <p key='section-1-p-2'>
In this analysis, we explore the four COVID-19 supplemental appropriation laws passed by the U.S. Congress, starting with the amount of funding budgeted for agencies and how that money can provide financial relief. Next, we walk through the process of how the money moves from appropriations to individuals and businesses, and finally, we dive into how agencies are spending the money.
          </p>
        </>
      ],
      viztitle: 'A Breakdown of COVID-19 Financial Relief',
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
There are many steps in the process to move the ${CovidCopy.totalbudgetresources} trillion in supplemental funds through the full budget lifecycle to the American people. In this section, we follow the flow of money by breaking down a few key terms and explaining how agencies spend supplemental funding.
          </p>
          <p key='section-2-p-2'>
            After a special appropriations law passes, it is the role of the Department of the Treasury (Treasury) to review the new legislation and issue funds to agencies’ spending accounts. The <a href="https://www.usaspending.gov/#/?glossary=appropriation" target="_blank" rel='noopener noreferrer'>appropriations</a> process gives agencies the authority to begin using funding according to the purpose assigned in the law. To spend the money, agencies obligate the funds to different programs through contracts, direct payments, grants, or loans. When agencies make an <a href="https://www.usaspending.gov/#/?glossary=obligation" target="_blank" rel='noopener noreferrer'>obligation</a>, they create a binding agreement to use the funds for a particular purpose. An example of an obligation is an agency setting aside adequate funds when it enters into a contract with a vendor to purchase <a href="https://www.usaspending.gov/#/award/CONT_AWD_75A50120C00030_7505_-NONE-_-NONE-" target="_blank" rel='noopener noreferrer'>personal protective equipment, such as masks</a>.
          </p>
          <p key='section-2-p-3'>
            Creating an obligation doesn’t mean the money has been paid, only that the agency has promised to pay the funds. In many cases, the recipients of funds may be required to do something before receiving payment, such as delivering equipment or supplies.
          </p>
          <p key='section-2-p-4'>
            The final step in the process is making a payment, which is called an <a href="https://www.usaspending.gov/#/?glossary=outlay" target="_blank" rel='noopener noreferrer'>outlay</a>. This is the step where the agencies authorize the Treasury to issue a payment to individuals, businesses, or other organizations.
          </p>
        </>
      ],
      viztitle: 'The Process of COVID-19 Supplemental Spending',
      tagName: 'Overview',
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor }
    },
    {
      section: 'Tracking Spending',
      anchor: 'tracking',
      number: '03',
      subtext: 'Tracking Spending',
      subblurb: 'How much funding has been spent?',
      sectionTeaser: ['How much supplemental funding ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>has been spent?</span>],
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: [
        <>
          <p key='section-3-p-1'>
Ninety-two percent of the ${CovidCopy.totalbudgetresources} trillion in COVID-19 funding was appropriated to four agencies: The Treasury, Health and Human Services, Labor, and the Small Business Administration (SBA). Of those funds, roughly half, or ${CovidCopy.loanspending_trillions} trillion, were allocated to fund loan and loan guarantee programs. These funds could be used to generate an estimated ${CovidCopy.totcredit_trillions} trillion in loans and loan guarantees to businesses and individuals.  This includes loans which will be disbursed directly by the government, like the SBA’s Economic Injury Disaster Loan (EIDL) Program. It also includes funds for loan guarantee programs, such as the SBA’s Paycheck Protection Program (PPP), which are disbursed by partner financial institutions.
          </p>
          <p key='section-3-p-2'>
            As of {CovidCopy.monthday}, the federal government had made ${CovidCopy.totobligations_trillions} trillion in obligations, of which ${CovidCopy.totoutlays_trillions} trillion was outlayed. These totals were calculated from agencies’ certified monthly reporting to the Treasury’s Governmentwide Treasury Account Symbol Adjusted Trial Balance System (GTAS).
          </p>
          <p key='section-3-p-3'>
This analysis will be updated monthly as new data becomes available. To learn more about how we developed this analysis and download the raw data, visit the <a href="/federal-covid-funding/methodologies">Data Sources and Methodologies</a> page.
          </p>
        </>
      ],
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking',
      accordion: (
        <aside>
          <Accordion
            title={`How do you track $${CovidCopy.totalbudgetresources} trillion?`}
            color='#6F41A7'
            backgroundColor='#F3EAFF'
            isCovid>
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
      contextStatement={'Data Lab explores how supplemental funding for COVID-19 makes its way from Congress into the economy. We break down the steps taken by federal agencies to use the $' + CovidCopy.totalbudgetresources + ' trillion and track the status of funds so you can see how much has been spent.'}
      sectionToc={this.sections}
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <SEO
        title='Data Lab – The Federal Response to COVID-19 – U.S. Treasury'
        description='SEO description'
        keywords={['federal spending', 'government spending', 'economic relief', 'relief p ackage', 'economic stimulus', 'obligations', 'appropriations', 'covid', 'coronavirus', 'COVID19']}
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
              'This estimate represents the maximum amount of credit possible given the current amounts commited by Treasury to various Federal Reserve loan facilities and total loans and loan guarantees available through agency programs. This number could grow with additional commitments by Treasury. For more information and detail on this estimate, see the Data Sources and Methodologies section.'
            ]}
          />
        </Grid>
      </Grid>
    </StoryLayout>
}
