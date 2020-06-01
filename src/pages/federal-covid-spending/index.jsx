import React from 'react';
import styles from './styles.module.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import styleVars from 'src/styles/variables.scss';

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
      $2.4 trillion dollars breaks down to about $7,300 per person living in the U.S.
    </p>
    <p>
      $2.4 trillion dollars is roughly 11% of fiscal year 2019's gross domestic product
      or GDP for the U.S. ($21.3 trillion).
    </p>
    <div className={styles.heading}>What is Gross Domestic Product?</div>
    <p>
      Gross domestic product (GDP) measures the size of the nation's econmy by the total value of
      final goods and services that are produced in a year. Gross domestic product is used to compare
      the economies of different countries, measure growth in the economy, and determine the right monetary
      policies to address inflation and unemployment.
    </p>
    <p>
      If you stacked 2.4 trillion $1 bills, it would be
      162,878.40 miles high and reach more than two-thirds
      of the way to the moon.
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
      subblurb: '',
      blurb: 'How is the federal government allocating emergency funds for COVID-19?',
      sectionTeaser: ['How is the federal government', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}> allocating emergency funds of COVID-19?</span>],
      readMoreOnMobile: true,
      readMoreStyle: { color: styleVars.covidColor },
      introBlurb: [
        <>
          <p key='section-1-p-1'>
            To aid the nation’s recovery from the coronavirus disease 2019 (COVID-19) pandemic, the U.S. Congress passed four special appropriations laws, making $2.4 trillion available for the federal government to use in relief efforts.<sup>1</sup> The largest of these was the Coronavirus Aid, Relief, and Economic Security (CARES) Act, which provided almost $2 trillion and is the largest special appropriation in American history. It is the role of the Treasury Department (the Treasury) to review new legislation and issue funds to federal agencies. Agencies are then required to report how they are spending these funds to the Treasury’s governmentwide accounting system and certify its accuracy.
          </p>
          <p key='section-1-p-2'>
            In this analysis of COVID-19 spending, Data Lab uses this certified data to track the progress of spending, starting with the distribution of special appropriations across federal agencies.
          </p>
        </>
                                                                                                                                                                                          ],
      viztitle: 'Covid-19 Supplemental Funding by Budget Function',
      tagName: 'Budget',
      accordion: <aside>
                   <Accordion title='What does $2.4 trillion look like?' color='#6F41A7' backgroundColor='#F3EAFF'>
                     {BudgetAccordionContent()}
                   </Accordion>
                 </aside>
    },
    {
      section: 'The Flow of Funds',
      anchor: 'overview',
      number: '02',
      subtext: 'The Flow of Funds', // <a href='' target='_blank' rel='noopener noreferrer'>
      subblurb: '',
      blurb: 'How do federal dollars move from Congress to the American people?',
      sectionTeaser: ['How do federal dollars ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>move from congress to the American people?</span>],
      introBlurb: [
        <>
          <p key='section-2-p-1'>
            There are many steps to move federal dollars through the full budget lifecycle. Here, we focus on a few key parts of the process that help us track the progress of agency spending for COVID-19.
          </p>
          <p key='section-2-p-2'>
            After COVID-19 special <a href='https://www.usaspending.gov/#/?glossary=appropriation' target='_blank' rel='noopener noreferrer'>appropriations</a> laws are passed, Treasury issues funding to different spending accounts so federal agencies can begin using it according to the purpose assigned in the law. Large federal agencies typically have multiple accounts that exist for different purposes.
            Across the 100 agencies who routinely report data to <a href='https://www.usaspending.gov/#/' target='_blank' rel='noopener noreferrer'>USAspending.gov</a>, there are roughly 2,000 accounts that are used for regular spending. However, with the almost $2.4 trillion of emergency funding related to COVID-19, spending has been allocated to a targeted group of about 180 accounts.
          </p>
          <p key='section-2-p-3'>
            The appropriations give agencies the authority to obligate the funds to different programs through contracts, direct payments, grants, or loans. This step, where agencies make a binding agreement to use funds for a particular purpose, is called an <a href='https://www.usaspending.gov/#/?glossary=obligation' target='_blank' rel='noopener noreferrer'>obligation. </a>
            An example of an obligation is an agency setting aside adequate funds when it enters into a contract with a vendor to purchase <a href='https://www.usaspending.gov/#/award/CONT_AWD_75A50120C00030_7505_-NONE-_-NONE-' target='_blank' rel='noopener noreferrer'>personal protective equipment such as masks.</a>
          </p>
          <p key='section-2-p-4'>
            Creating an obligation doesn’t mean the money has been paid, only that the federal agency has promised to pay the funds. In many cases, the recipients of funds may be required to do something before receiving payment, such as delivering equipment or supplies. 
          </p>
          <p key='section-2-p-5'>
            The final step in the process is making a payment, which is called an <a href='https://www.usaspending.gov/#/?glossary=outlay' target='_blank' rel='noopener noreferrer'>outlay.</a> This is the step when the funds for a direct payment, grant, loan, or contract are received by individuals, businesses or other organizations.
          </p>
        </>
                                                                                                                                                                                                ],
      viztitle: 'Title for Overview viz',
      tagName: 'Overview',
      readMoreOnMobile: true,
      readMoreStyle: { color: styleVars.covidColor }
    },
    {
      section: 'Tracking',
      anchor: 'tracking',
      number: '03',
      subtext: 'Tracking Spending',
      subblurb: '',
      blurb: 'How much emergency funding has been spent?',
      sectionTeaser: ['How much emergency funding ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>has been spent?</span>],
      readMoreOnMobile: true,
      readMoreStyle: { color: styleVars.covidColor },
      introBlurb: [
        <>
          <p key='section-3-p-1'>
            As of May 1st, the Treasury has tracked $963 billion in obligations and $459 billion in outlays paid out by agencies related to COVID-19 relief.
          </p>
          <p key='section-3-p-2'>
            Federal agencies report data in the Treasury’s governmentwide accounting systems each month, including how much funding they have obligated and outlaid from their spending accounts. Agencies also certify the accuracy of these reports. While the Treasury validates the data by comparing it to information from other systems, each federal agency’s Chief Financial Officer (CFO) is responsible for ensuring their data is correct. 
          </p>
          <p key='section-3-p-3'>
            Under the normal reporting process, the data agencies report and certify on <a href='https://www.usaspending.gov/#/' target='_blank' rel='noopener noreferrer'>USAspending.gov</a> each quarter is not tracked by the specific appropriation bill by which it was initially authorized. With the COVID-19 appropriations, spending is tracked with a special field called the
            Disaster Emergency Fund Code (DEFC). Using this code allows for funds to be followed through the spending lifecycle. Data Lab will continue to update this analysis on a monthly basis with each reporting window. In addition, agencies will begin reporting spending data using the DEFC to USAspending.gov in July 2020.
          </p>
        </>
                                                                                                                                                                                                                                                                                                                                                                                                                   ],
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking'
    }
  ];

  render = () =>
    <StoryLayout
      title='The Federal Response To COVID-19'
      introSentence='How is the federal government funding relief efforts for COVID-19?'
      contextStatement='Data Lab explores how emergency funding for COVID-19 makes its way from Congress into the economy. We break down the steps taken by federal agencies to use the $2.4 trillion and track the status so you can see how much has been spent.'
      sectionToc={this.sections}
      hwctaLink={this.props.location.pathname + '/methodologies'}
      pageColor={styleVars.covidColor}
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
        <Grid item xl={10}>
          <Footnotes footnotes={['Coronavirus Preparedness and Response Supplemental Appropriations Act (H.R. 6074) appropriated an estimated $7.8 billion; Families First Coronavirus Response Act (H.R. 6201) appropriated an estimated $3.4 billion; CARES Act (H.R. 748) appropriated an estimated $1.95 trillion of funding; and the Paycheck Protection Program and Health Care Enhancement Act (H.R. 266) appropriated an estimated $483 billion.', <>OMB Guidance on reporting requirements and DEFC values provided for the four bills are provided in OMB M20-21:<a target='_blank' rel='noopener noreferrer' href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf"> https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf</a></>, <>Values were calculating according to the USSGL Supplement of the Treasury Financial Manual - Section V: Crosswalks to Standard External Reports for FY 2020 GTAS Reporting, SF 133: Report on Budget Execution and Budgetary Resources & Schedule P Budget Program and Financing Schedule. <a target='_blank' rel='noopener noreferrer' href="https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_2/sec5/sec5_sf133_schp_2020.xlsx">https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_2/sec5/sec5_sf133_schp_2020.xlsx</a></>, <>GTAS data is collected monthly, each month’s agencies report data for all transactions occurring through the end of the prior month. Data for this analysis published May 28, 2020 includes data reported through the close of April 2020.</>,  <>Detailed instructions on how agencies should be classified is provided here: <a target='_blank' rel='noopener noreferrer' href="https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md">https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md.</a> The list of shared agencies identified by FREC can be found here: <a target='_blank' rel='noopener noreferrer' href="https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker">https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a></>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ]}
          />
        </Grid>
      </Grid>
    </StoryLayout>
}
