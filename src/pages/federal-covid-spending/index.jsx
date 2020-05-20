import React from 'react';
import styles from './styles.module.scss';
import storyHeadingStyles from '../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import globalStyles from 'src/styles/variables.scss';

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
      section: 'Budget',
      anchor: 'budget',
      number: '01',
      subtext: 'Budget',
      subblurb: 'Blurb',
      blurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada.',
      sectionTeaser: ['How is the federal government', <span key='teaser-callout' className={storyHeadingStyles.headingPurple}> allocating emergency funds of COVID-19</span>],
      introBlurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada.',
      viztitle: 'Covid-19 Supplemental Funding by Budget Function',
      tagName: 'Budget',
      accordion: <aside>
                   <Accordion title='What does $2 trillion look like?' color='#6F41A7' backgroundColor='#F3EAFF'>
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
      introBlurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met.',
      viztitle: 'Title for Overview viz',
      tagName: 'Overview',
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: 'Nam quis nulla.Integer malesuada.In in enim a arcu imperdiet malesuada.Sed vel lectus.Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.Phasellus rhoncus.Aenean id metus id velit ullamcorper pulvinar.Vestibulum fermentum tortor id mi.Pellentesque ipsum.Nulla non arcu lacinia neque faucibus fringilla.Nulla non lectus sed nisl molestie malesuada.Proin in tellus sit amet nibh dignissim sagittis.Vivamus luctus egestas leo.Maecenas sollicitudin.Nullam rhoncus aliquam met.Nam quis nulla.Integer malesuada.In in enim a arcu imperdiet malesuada.Sed vel lectus.Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem.Phasellus rhoncus.Aenean id metus id velit ullamcorper pulvinar.Vestibulum fermentum tortor id mi.Pellentesque ipsum.Nulla non arcu lacinia neque faucibus fringilla.Nulla non lectus sed nisl molestie malesuada.Proin in tellus sit amet nibh dignissim sagittis.Vivamus luctus egestas leo.Maecenas sollicitudin.Nullam rhoncus aliquam met.',
      viztitle: 'Title for Overview viz',
      tagName: 'Overview'
    },
    {
      section: 'Tracking',
      anchor: 'tracking',
      number: '03',
      subtext: 'Tracking subtext',
      subblurb: 'Tracking subblurb',
      sectionTeaser: 'Tracking teaser',
      readMoreOnMobile: true,
      readMoreStyle: { color: globalStyles.covidColor },
      introBlurb: 'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam met',
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking'
    }
  ];

  render = () =>
    <StoryLayout
      title='The Federal Response To COVID-19'
      introSentence='Tracking emergency funding through the federal financial system'
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
