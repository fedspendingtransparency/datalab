import React from 'react';

import CustomHeader from '../../page-sections/colleges-and-universities/custom-header/custom-header';
import Footnotes from '../../components/footnotes/footnotes';
import Overview from '../../page-sections/colleges-and-universities/overview';
import SEO from '../../components/seo';
import StoryLayout from '../../components/layouts/story/story';
import { Grid } from "@material-ui/core";
import loadable from "@loadable/component";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import styles from './cu.module.scss';

const Agencies = loadable(() => import('../../page-sections/colleges-and-universities/agencies/agencies'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const Categories = loadable(() => import('../../page-sections/colleges-and-universities/categories/categories'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const Institutions = loadable(() => import('../../page-sections/colleges-and-universities/institutions'),  {
  fallback: <div className='progress_wrapper'>
    <CircularProgress className='progress' size={70} color='inherit' />
  </div>
});

const sections=
  [{
    section: 'Investment Overview',
    number: '01',
    anchor: 'overview',
    subblurb: 'WHAT IS A FEDERAL INVESTMENT?',
    blurb: 'Learn more about the three categories of federal investments: student aid, grants, and contracts.'
  },
  {
    section: 'My Alma Mater',
    number: '02',
    anchor: 'institutions',
    subblurb: 'How much did my school receive?',
    blurb: 'Search for your school and discover details about federal funding at your alma mater.'
  },
  {
    section: 'Agency Investment',
    number: '03',
    anchor: 'agencies',
    subblurb: 'Which federal agencies are involved?',
    blurb: 'Find out which federal agencies provide investments and in what amounts.'
  },
  {
    section: 'Investment Categories',
    number: '04',
    anchor: 'categories',
    subblurb: 'What are the investments used for?',
    blurb: 'Discover more about what is funded by federal investment.'
  }];

export default class CollegesAndUniversitiesPage extends React.Component {

  render = () =>
    <StoryLayout isCustomHeader={true}
                 hwctaLink={this.props.location.pathname + '/methodologies'} >
      <SEO title='U.S. Treasury Data Lab – Federal Funding in Colleges and Universities'
           description="The U.S. Treasury’s Data Lab presents an analysis on federal funding in colleges and universities. In 2018 the Federal government invested over $149 billion, affecting over 3,000 schools, 15 million undergraduate students and over 2.5 million graduate students."
           keywords={[`universities`, `colleges`, `higher education`, `funding`, `government spending`, `federal funding`, `government funding`,
						 `federal grants`, `research grants`, `federal contracts`, `bubble chart`, `sunburst`]} />

      <CustomHeader
        subtext={'Federal Investment in Higher Education'}
        subblurb={['Explore the Federal Investment in your ', <br key='subblurb-linebreak' />,
          <span key='subblurb-callout' className={styles.headerRed}>Alma Mater</span>]}
        blurb={['Did you know the federal government invested over $149 billion in colleges and universities in fiscal year 2018?',
          <br key='blurb-linebreak' />,
          'Those funds made an impact on over 3,000 schools, approximately 15 million undergraduates, and a little over 2.5 million graduate students.']}
        sectionToc={sections}
      />

      <Grid container
            justify="center"
            className={styles.cu}>
        <Grid item xs={10} className={styles.section} id={"section-overview"}>
          <Overview location={this.props.location} />
        </Grid>

        <Grid item xs={10} className={styles.section} id={"section-institutions"}>
          <Institutions location={this.props.location} />
        </Grid>

        <Grid item xs={10} className={styles.section} id={"section-agencies"}>
          <Agencies location={this.props.location} />
        </Grid>

        <Grid item xs={10} className={styles.section} id={"section-categories"}>
          <Categories location={this.props.location} />
        </Grid>

        <Grid item xs={10} className={styles.section}>
          <Footnotes footnotes={['Financial obligations represent outstanding debt or regular payments to another party. A negative value obligation (de-obligation) results from a transaction that lowers the debt amount. A grant or contract has a negative obligation for a given fiscal year when it spans multiple fiscal years and the sum of the transactions for that particular fiscal year was a net reduction of the original obligation.',
            'Due to the way military academies are funded, they have not been included in this analysis.']}
          />
        </Grid>

      </Grid>

    </StoryLayout>
}
