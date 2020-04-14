import React from 'react';

import sectionOneStyles from './sectionOne.module.scss';
import storySectionHeadingStyles from "../../../components/section-elements/story-section-heading/story-section-heading.module.scss";

import StorySectionHeading from '../../../components/section-elements/story-section-heading/story-section-heading';
import storyHeadingStyles from "../../../components/section-elements/story-section-heading/story-section-heading.module.scss";
import defaultImage from '../../../images/default-image.jpg';
import Accordion from '../../../components/accordion/accordion';
import Grid from '@material-ui/core/Grid';

const accordionStyle = {border: '1px solid #FC5A20',
                        color: '#FC5A20', // font color
                        backgroundColor: '#FFF4F1'
                       };

const iconStyle = {color: '#FC5A20'};


export default class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rawBlurb = <>
                        <p className={storySectionHeadingStyles.blurbText}>
                          More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has
                          led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid
                          crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs.
                          According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal
                          drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone,
                          codeine, and morphine.
                        </p>
                        <p className={storySectionHeadingStyles.blurbText}>
                          This crisis has had an undeniable effect on the United States. In 2017, the Department of Health and Human
                          Services declared the opioid crisis a public health emergency and created a strategy focusing on five major
                          priorities.
                        </p>
                        <p className={storySectionHeadingStyles.blurbText}>
                          More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has
                          led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid
                          crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs.
                          According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal
                          drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone,
                          codeine, and morphine.
                        </p>
                        <p className={storySectionHeadingStyles.blurbText}>
                          This crisis has had an undeniable effect on the United States. In 2017, the Department of Health and Human
                          Services declared the opioid crisis a public health emergency and created a strategy focusing on five major
                          priorities.
                        </p>
                      </>;
    return(
      <>
        <StorySectionHeading
          number={'01'}
          title={'A $78.5 Billion Dollar Crisis'}
          teaser={['A national view ', <span key='teaser-callout' className={storyHeadingStyles.headingOrange}>of the opioid crisis.</span>]}
          blurb={rawBlurb}
        />

        <div className={sectionOneStyles.accordionContainer}>
          <Accordion altStyleAccordion={accordionStyle} altStyleIcon={iconStyle} title='What is an Opioid?' />
        </div>

        <Grid container justify='center'>
          <section id='section-one-viz'>
            <img src={defaultImage}/>
          </section>
        </Grid>

      </>
    ); // end return
  };
};
