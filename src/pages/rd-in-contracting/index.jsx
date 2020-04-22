import React from 'react';
import SEO from 'src/components/seo';
import Categories from 'src/page-sections/rd-in-contracting/categories/categories.jsx';
import Spending from 'src/page-sections/rd-in-contracting/spending/spending';
import Studies from "src/page-sections/rd-in-contracting/studies/studies";
import ExpressLayout from "src/components/layouts/express/express";
import styles from './rd-in-contracting.module.scss';
import StorySection from "src/components/section-elements/story-section/story-section"

export default function RdInContractingPage(props) {
  const sectionComponents = {
    spending: Spending,
    categories: Categories,
    studies: Studies
  };

  const sections =
    [
      {
        section: 'Spending',
        anchor: 'spending',
        header: [<div className={styles.title} key={'spending-header'}>AMOUNT SPENT IN FY2018</div>],
        sectionTeaser: [<>In Fiscal Year 2018, <span className={styles.subtitleHighlight} key={'spending-teaser'}>categories that R&D $119 billion were devoted </span>to contracted R&D initiatives.</>],
        introBlurb: [<><p key={'spending-intro'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>],
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

  return (
    <ExpressLayout
      title={'Research & Development in Contracting'}
      introSentence={'How much did the federal government invest in Research & Development with FY18 Contract Spending?'}
      hwctaLink={props.location.pathname + '/methodologies'}
    >
      <SEO title='Federal R&D in Contracting' keywords={['gatsby', 'application', 'react']} />

      {sections.map((item, key) => {
        const SectionTag = sectionComponents[item.tagName];
        return (
          <StorySection key={key} header={item}>
            <SectionTag sectionId={`section-${item.section}`} section={item} />
          </StorySection>
        )
      })}
    </ExpressLayout>
  );
}
