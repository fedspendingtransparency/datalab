import React from 'react';
import styles from './styles.module.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';

import StoryLayout from '../../components/layouts/story/story';
import SEO from '../../components/seo';
import StorySection from 'src/components/section-elements/story-section/story-section';
import Accordion from 'src/components/accordion/accordion';
import Budget from '../../page-sections/federal-covid-spending/budget/budget';
import Overview from '../../page-sections/federal-covid-spending/overview';
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
      subtext: 'Function subtext',
      subblurb: 'Function subblurb',
      sectionTeaser: 'Function teaser',
      introBlurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met',
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
      subblurb: 'Overview subblurb',
      sectionTeaser: ['How do federal dollars ', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}>move from congress to the American people?</span>],
      introBlurb: [
        <p key="p1">Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met. Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met.</p>,
        <p key="p2">Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met.</p>
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
      subtext: 'Tracking subtext',
      subblurb: 'Tracking subblurb',
      sectionTeaser: 'Tracking teaser',
      introBlurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met',
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
