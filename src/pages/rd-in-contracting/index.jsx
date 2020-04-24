import React from 'react';
import styles from './rd-in-contracting.module.scss';

import SEO from 'src/components/seo';
import ExpressLayout from 'src/components/layouts/express/express';
import StorySection from 'src/components/section-elements/story-section/story-section'
import Categories from 'src/page-sections/rd-in-contracting/categories/categories.jsx';
import Spending from 'src/page-sections/rd-in-contracting/spending/spending-chart';
import Studies from 'src/page-sections/rd-in-contracting/studies/studies';

import Accordion from 'src/components/accordion/accordion';
import { Hidden } from '@material-ui/core';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import microscope from 'src/images/rd-in-contracting/microscope.svg';
import science from 'src/images/rd-in-contracting/science.svg';
import bottle from 'src/images/rd-in-contracting/bottle.svg';
import bulb from 'src/images/rd-in-contracting/bulb.svg';

export default class RdInContractingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  whatIsContents = () =>
    <div className={styles.accordionContents}>
      <img src={microscope} role='presentation' className={styles.centerImg} />
      <p className={styles.extraSpace}>Research and development are part of a process to help us find solutions to problems using science, engineering, and technology.</p>
      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Basic Research</span>
          <p>The intent of <span className={styles.bold}>basic research</span> is to study more about a subject, to expand upon what we already know about it. This type of research usually doesn't result in solving a specific problem.</p>
          <div className={styles.flexContainer}>
            <img src={science} role='presentation' className={styles.leftImg} />
            <div>
              <p>EXAMPLE:NASA's International Space Station is using a platform to gather data on temperature, light cycle, humidity control, and more.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_NNJ15GU47T_8000_NNJ15GU31B_8000' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Applied Research</span>
          <p><span className={styles.bold}>Applied research</span> has a more specific goal of finding solutions to current problems using the accumulated knowledge from basic research.</p>
          <div className={styles.flexContainer}>
            <img src={bottle} role='presentation' className={styles.leftImg} />
            <div>
              <p>EXAMPLE: The Department of Health and Human Services is researching a drug that could counteract damage caused by radiation exposure.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_HHSO100201700026C_7505_-NONE-_-NONE-' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Development</span>
          <p><span className={styles.bold}>Development</span> refers to the innovative process of using applied research to create prototypes of potential solutions to real-world problems.</p>
          <div className={styles.flexContainer}>
            <img src={bulb} role='presentation' className={styles.leftImg} />
            <div>
              <p>EXAMPLE: The Department of Energy developed a long-term solution for storing spent nuclear fuel and is studying its impact on licensing and operations of nuclear plants.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_DENE0000593_8900_-NONE-_-NONE-' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  sectionComponents = {
    spending: Spending,
    categories: Categories,
    studies: Studies
  };

  sections = [
    {
      section: 'Spending',
      anchor: 'spending',
      header: [<div className={styles.title} key={'spending-header'}>AMOUNT SPENT IN FY2018</div>],
      sectionTeaser: [<>In Fiscal Year 2018, <span className={styles.subtitleHighlight} key={'spending-teaser'}>categories that R&D $119 billion were devoted </span>to contracted R&D initiatives.</>],
      introBlurb: [
        <><p key={'spending-intro'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>,
        <Hidden smDown>
          <aside>
            <Accordion title='What is R&D?' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
              {this.whatIsContents()}
            </Accordion>
          </aside>
        </Hidden>
      ],
      viztitle: 'R&D in Contracting by Category',
      tagName: 'spending'
    },
    {
      section: 'Categories',
      anchor: 'categories',
      header: [<div className={styles.title} key={'categories-header'}>TYPES OF R&D IN CONTRACTING</div>],
      sectionTeaser: [<>What are the types of <span className={styles.subtitleHighlight} key={'categories-teaser'}>categories that R&D funded?</span></>],
      introBlurb: [<><p key={'categories-intro'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>],
      viztitle: 'R&D in Contracting by Category',
      tagName: 'categories'
    },
    {
      section: 'Studies',
      anchor: 'studies',
      header: [<span className={styles.title} key={'studies-header'}>NON R&D STUDIES</span>],
      sectionTeaser: [<>What types of studies were funded that are <span className={styles.subtitleHighlight} key={'studies-teaser'}>classified as non-R&D?</span></>],
      introBlurb: [<><p key={'studies-intro'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>],
      viztitle: 'Non-R&D Studies and Analyses Spending',
      tagName: 'studies'
    }
  ];

  render = () =>
    <ExpressLayout
      title={'Research & Development in Contracting'}
      introSentence={'How much did the federal government invest in Research & Development with FY18 Contract Spending?'}
      hwctaLink={this.props.location.pathname + '/methodologies'}
    >
      <SEO title='Federal R&D in Contracting' keywords={['gatsby', 'application', 'react']} />

      {this.sections.map((item, key) => {
        const SectionTag = this.sectionComponents[item.tagName];
        return (
          <StorySection key={key} header={item}>
            <SectionTag sectionId={`section-${item.anchor}`} section={item} location={this.props.location} />
          </StorySection>
        )
      })}
    </ExpressLayout>
}
