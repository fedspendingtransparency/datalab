import React from 'react';
import styles from './styles.module.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';

import StoryLayout from '../../components/layouts/story/story';
import SEO from '../../components/seo';
import StorySection from 'src/components/section-elements/story-section/story-section';
import Accordion from 'src/components/accordion/accordion';
import Budget from '../../page-sections/federal-covid-spending/budget/budget';
import Overview from '../../page-sections/federal-covid-spending/overview/overview';
import Tracking from '../../page-sections/federal-covid-spending/tracking';

const BudgetAccordionContent = () => (
  <div className={styles.accordionContents}>
    <p>
      Some kind of text about top 5 and to see full list please go to the Data Sources and Methodologies.
    </p>
    <div className={styles.heading}>Commercial and Housing Credit</div>
    <p>
      Funding for commerce and the housing credit and deposit insurance industries, including business tax refunds; Housing and Urban Development’s loan guarantees; and collection and dissemination of social and economic data by the Census Bureau. However, in the case of the COVID-19 appropriations, this category mainly consists of small business loans, as well as emergency lending programs for businesses.
    </p>
    <div className={styles.heading}>Community and Regional Development</div>
    <p>
    Funding for the development of physical facilities or financial infrastructures designed to promote viable community economies. Includes transportation facilities developed as an integral part of a community development program (rather than a transportation program).
    </p>
    <div className={styles.heading}>Education, Training, Employment, and Social Services</div>
    <p>
      Funding for the Department of Education; social services programs within the Department of Health and Human Services; and employment and training programs within the Department of Labor. Also includes funding for the Library of Congress and independent research and art agencies, such as the Corporation for Public Broadcasting, the Smithsonian, the National Gallery of Art, the Kennedy Center, the National Endowment for the Arts, and the National Endowment for the Humanities.
    </p>
    <div className={styles.heading}>General Government</div>
    <p>
      Funding for the activities of the Executive Office of the President; programs designed to carry out the legislative and administrative responsibilities of the federal government, including personnel management, fiscal operations, and property control.
    </p>
    <div className={styles.heading}>Health</div>
    <p>
      Funding for health care service programs and mandatory programs such as Medicaid, Children's Health Insurance Program (CHIP), and federal and retiree's health benefits. Other programs include anti-bioterrorism activities, national biomedical research, providing health services for under-served populations, and promoting training for the health care workforce.
    </p>
    <div className={styles.heading}>Income Security</div>
    <p>
      Funding for programs that provide cash or assistance (e.g. housing, nutrition, and energy assistance) to low-income persons, and benefits to certain retirees, persons with disabilities, and the unemployed. Also includes entitlement programs such as unemployment insurance, trade adjustment assistance income support, Supplemental Nutrition Assistance Program (SNAP - formerly food stamps), Temporary Assistance for Needy Families (TANF), foster care, and Supplemental Security Income (SSI).
    </p>
  </div>
)

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
      section: 'Budget',
      anchor: 'budget',
      number: '01',
      subtext: 'Function breakdown',
      subblurb: '',
      blurb: 'How is the federal government allocating emergency funds for COVID-19?',
      sectionTeaser: ['How is the federal government funding relief efforts ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>broken down?</span>],
      introBlurb: [
        <>
          <p key="budget-p1">
            To aid the nation’s recovery from the coronavirus disease 2019 (COVID-19) pandemic, the U.S. Congress passed four special appropriations laws, making $2.4 trillion available for the federal government to use in relief efforts.  The largest of these was the Coronavirus Aid, Relief, and Economic Security (CARES) Act, which provided almost $2 trillion and is the largest special appropriation in American history. After reviewing the legislation, it is the role of the Treasury Department (the Treasury) to issue funds to federal agencies. Agencies are then required to report how they are spending these funds to the Treasury’s centralized accounting system and certify its accuracy.
          </p>
          <p key="budget-p2">
            In this analysis of COVID-19 spending, Data Lab tracks the progress of spending by looking at the allocation of dollars across COVID-19 special appropriations. The following visualization breaks down the $2 trillion into high-level categories called budget functions, which are used to organize how the government spends money. The largest of these, Commerce and Housing Credit, typically includes funding for things like business tax refunds, the Department of Housing and Urban Development’s loan programs, and the work done by the Census Bureau. However, in the case of the COVID-19 appropriations, this category mainly consists of small business loans and emergency lending programs for businesses. 
          </p>
        </>
      ],
      viztitle: 'Title for Function viz',
      tagName: 'Budget',
      accordion: <aside>
      <Accordion title='Budget Function Descriptions' color='#6F41A7' backgroundColor='#F3EAFF'>
        {BudgetAccordionContent()}
      </Accordion>
    </aside>
    },
    {
      section: 'Overview',
      anchor: 'overview',
      number: '02',
      subtext: 'The Flow of Funds',
      subblurb: '',
      blurb: 'How do federal dollars move from Congress to the American people?',
      sectionTeaser: ['How do federal dollars ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>move from congress to the American people?</span>],
      introBlurb: [
        <>
          <p key="overview-p1">
            Once funding has been appropriated by Congress and assigned to spending accounts, federal agencies can begin using the funds according to the purpose assigned in the law. Spending accounts are similar to bank accounts, and large federal agencies typically have multiple accounts that exist for different purposes. Across the 100 agencies who routinely report data to USAspending.gov, there are roughly 2,000 accounts that are used for regular spending. However, with the almost $2 trillion of emergency funding related to COVID-19, spending has been allocated to a targeted group of about 160 accounts. 
          </p>
          <p key="overview-p2">
            After COVID-19 special appropriations laws passed, the Treasury assigned funds to different spending accounts, giving agencies the authority to obligate the funds to different programs through contracts, direct payments, grants, or loans. This step, where agencies designate funds for a particular purpose, is called an obligation. An example of an obligation is an agency setting aside adequate funds when it enters into a contract with a vendor to purchase personal protective equipment such as masks. 
          </p>
          <p key="overview-p3">
            Creating an obligation doesn’t mean the money has been paid, only that the federal agency has designated the funds so they can’t be used for another purpose. In many cases, the recipients of funds may be required to do something before receiving payment, such as delivering equipment or supplies. 
          </p>
          <p key="overview-p4">
            The final step in the process is making a payment, which is called an outlay. This is the step when the funds for a direct payment, grant, or contract are actually received by individuals, businesses or other organizations. 
          </p>
        </>
      ],
      viztitle: 'Title for Overview viz',
      tagName: 'Overview',
      readMoreOnMobile: true,
      toggleColor: '#6f41a7'
    },
    {
      section: 'Tracking',
      anchor: 'tracking',
      number: '03',
      subtext: 'Tracking spending',
      subblurb: '',
      blurb: 'How much emergency funding has been spent?',
      sectionTeaser: ['How much emergency funding ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>has been spent?</span>],
      introBlurb: [
        <>
          <p key="tracking-p1">
            As of the end of April, the Treasury has tracked $ZZZ billion/trillion COVID-19 relief-related obligations made by agencies, and $XX billion/trillion in COVID-19 relief spending.
          </p>
          <p key="tracking-p2">
            Federal agencies report data in the Treasury’s governmentwide accounting systems each month, including how much funding they have obligated and outlaid from their spending accounts. Agencies also certify the accuracy of these reports. While the Treasury validates the data by comparing it to information from other systems, each federal agency’s Chief Financial Officer (CFO) is responsible for ensuring their data is correct. 
          </p>
          <p key="tracking-p3">
            Under the normal reporting process, the data agencies report and certify on USAspending.gov each quarter is not tracked by the specific appropriation bill by which it was initially authorized. With the COVID-19 appropriations, spending is tracked with a special field called the Disaster Emergency Fund Code (DEFC). Using this code allows for funds to be followed through the spending lifecycle. Data Lab will continue to provide this information on a monthly basis. 
          </p>
        </>
      ],
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking'
    }
  ];

  render = () =>
    <StoryLayout
      title='required title'
      introSentence='required intro'
      contextStatement='Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met'
      sectionToc={this.sections}
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <SEO
        title='SEO title'
        description='SEO description'
        keywords={['SEO keyword 1', 'SEO keyword 2']}
      />

      {this.sections.map((item, key) => {
        const SectionTag = this.sectionComponents[item.tagName];
        return (
          <StorySection key={key} header={item}>
            <SectionTag sectionId={`section-${item.anchor}`} section={item} location={this.props.location} />
          </StorySection>
        );
      })}
    </StoryLayout>
}
