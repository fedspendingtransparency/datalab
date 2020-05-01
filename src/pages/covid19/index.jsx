import React from 'react';
import styles from './styles.module.scss';

import StoryLayout from '../../components/layouts/story/story';
import SEO from '../../components/seo';
import StorySection from 'src/components/section-elements/story-section/story-section';
import Funding from '../../page-sections/covid19/funding';
import Overview from '../../page-sections/covid19/overview';
import Resources from '../../page-sections/covid19/resources';
import Tracking from '../../page-sections/covid19/tracking';

export default class Covid19 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <StoryLayout
      title='required title'
      introSentence='required intro'
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <SEO
        title='SEO title'
        description='SEO description'
        keywords={['SEO keyword 1', 'SEO keyword 2']}
      />

      <StorySection header='header'>
        <Overview />
      </StorySection>

      <StorySection header='header'>
        <Funding />
      </StorySection>

      <StorySection header='header'>
        <Tracking />
      </StorySection>

      <StorySection header='header'>
        <Resources />
      </StorySection>

    </StoryLayout>
}