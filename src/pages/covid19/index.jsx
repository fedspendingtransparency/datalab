import React from 'react';
import styles from './styles.module.scss';

import StoryLayout from '../../components/layouts/story/story';
import SEO from '../../components/seo';
import StorySection from 'src/components/section-elements/story-section/story-section';
import Funding from '../../page-sections/covid19/funding';
import Overview from '../../page-sections/covid19/overview';
import Function from '../../page-sections/covid19/function';
import Tracking from '../../page-sections/covid19/tracking';

export default class Covid19 extends React.Component {
  constructor(props) {
    super(props);
  }

  sectionComponents = {
    Funding: Funding,
    Overview: Overview,
    Function: Function,
    Tracking: Tracking
  };

  sections = [
    {
      section: 'Function',
      anchor: 'function',
      number: '01',
      subtext: 'Function subtext',
      subblurb: 'Function subblurb',
      sectionTeaser: 'Function teaser',
      introBlurb: 'Function intro blurb',
      viztitle: 'Title for Function viz',
      tagName: 'Function'
    },    {
      section: 'Overview',
      anchor: 'overview',
      number: '02',
      subtext: 'Overview subtext',
      subblurb: 'Overview subblurb',
      sectionTeaser: 'Overview teaser',
      introBlurb: 'Overview intro blurb',
      viztitle: 'Title for Overview viz',
      tagName: 'Overview'
    },    {
      section: 'Funding',
      anchor: 'funding',
      number: '03',
      subtext: 'Funding subtext',
      subblurb: 'Funding subblurb',
      sectionTeaser: 'Funding teaser',
      introBlurb: 'Funding intro blurb',
      viztitle: 'Title for Funding viz',
      tagName: 'Funding'
    },    {
      section: 'Tracking',
      anchor: 'tracking',
      number: '04',
      subtext: 'Tracking subtext',
      subblurb: 'Tracking subblurb',
      sectionTeaser: 'Tracking teaser',
      introBlurb: 'Tracking intro blurb',
      viztitle: 'Title for Tracking viz',
      tagName: 'Tracking'
    }
  ];

  render = () =>
    <StoryLayout
      title='required title'
      introSentence='required intro'
			contextStatement='context statement'
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