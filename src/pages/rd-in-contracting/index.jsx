import React from 'react';
import styles from './rd-in-contracting.module.scss';
import globalStyles from 'src/styles/variables.scss';

import Categories from 'src/page-sections/rd-in-contracting/categories/categories.jsx';
import Footnotes from "../../components/footnotes/footnotes"
import { Hidden } from '@material-ui/core';
import ReadMore from '../../components/read-more/read-more';
import SEO from 'src/components/seo';
import Spending from 'src/page-sections/rd-in-contracting/spending/spending-chart';
import Studies from 'src/page-sections/rd-in-contracting/studies/studies';
import StoryLayout from "../../components/layouts/story/story";
import StorySection from 'src/components/section-elements/story-section/story-section';

import Accordion from 'src/components/accordion/accordion';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import microscope from 'src/images/rd-in-contracting/microscope.svg';
import science from 'src/images/rd-in-contracting/science.svg';
import bottle from 'src/images/rd-in-contracting/bottle.svg';
import bulb from 'src/images/rd-in-contracting/bulb.svg';
import Grid from '@material-ui/core/Grid';

// Coming Soon only!
import Default from 'src/components/layouts/default/default';
import Desktop from 'src/svgs/rd-and-contracting/comingsoon/desktop.svg';
import Tablet from 'src/svgs/rd-and-contracting/comingsoon/tablet.svg';
import Mobile from 'src/svgs/rd-and-contracting/comingsoon/mobile.svg';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import { HeadOnly } from "src/components/headers/headers"

export default class RdInContractingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { screenMode: 0 };
  }

  componentDidMount() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    const newMode = checkScreenMode(window.innerWidth);
    if (newMode !== this.state.screenMode) {
      this.setState({ screenMode: newMode });
    }
  }


  whatIsContents = () =>
    <div className={styles.accordionContents}>
      <img src={microscope} role='presentation' className={styles.centerImg} />
      <p className={styles.extraSpace}>Research and development are part of a process to help us
        find solutions to problems using science, engineering, and technology.</p>
      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div style={{ width: '100%' }}>
          <span className={styles.heading}>Basic Research</span>
          <p>The intent of basic research is to study more about a subject, to expand upon what we
          already know about it. This type of research usually doesn't result in solving a
            specific problem.</p>
          <div className={styles.flexContainer}>
            <img src={science} role='presentation' className={styles.leftImg} />
            <div style={{ width: '100%' }}>
              <p>EXAMPLE: NASA's International Space Station is using a platform to gather data on
                temperature, light cycle, humidity control, and more.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_NNJ15GU47T_8000_NNJ15GU31B_8000'
                target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div style={{ width: '100%' }}>
          <span className={styles.heading}>Applied Research</span>
          <p>Applied research has a more specific goal of finding solutions to current problems
            using the accumulated knowledge from basic research.</p>
          <div className={styles.flexContainer}>
            <img src={bottle} role='presentation' className={styles.leftImg} />
            <div style={{ width: '100%' }}>
              <p>EXAMPLE: The Department of Health and Human Services is researching a drug that
                could counteract damage caused by radiation exposure.</p>
              <a
                href='https://www.usaspending.gov/#/award/CONT_AWD_HHSO100201700026C_7505_-NONE-_-NONE-'
                target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div style={{ width: '100%' }}>
          <span className={styles.heading}>Development</span>
          <p>Development refers to the innovative process of using applied research to create
            prototypes of potential solutions to real-world problems.</p>
          <div className={styles.flexContainer}>
            <img src={bulb} role='presentation' className={styles.leftImg} />
            <div style={{ width: '100%' }}>
              <p>EXAMPLE: The Department of Energy developed a long-term solution for storing spent
              nuclear fuel and studied its impact on licensing and operations of nuclear
                plants.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_DENE0000593_8900_-NONE-_-NONE-'
                target='_blank' rel='noopener noreferrer'>
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
  }

  secBlurbs = [
    <>
      <p key={'si1'}>Investment in Research and Development, or R&D, is largely seen as a driver of
        innovation in both the public and private sectors.<a id='fr1' href='#fn1'
          className='footnoteref'>1</a> From
        medicine to autonomous vehicles, R&D investments lead to new products, technology
        advancements, and improved quality of life. To fund R&D work, federal agencies can use
        grants, loans, and contracts. In this analysis we focus on contracts.</p>
      <p key={'si2'}>Each of the 24 Chief Financial Officers (CFO) Act agencies awarded contracts to
      perform R&D work in fiscal year 2019 (FY 2019), totaling $41.5B. Let’s take a look at the
        top ten CFO Act agencies by R&D contract spending.</p>
      <aside>
        <Accordion title='What is R&D?' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
          {this.whatIsContents()}
        </Accordion>
      </aside>
    </>,
    'Federal R&D contract spending supports a wide range of objectives, including agriculture, education, energy, housing, and national defense. When the government uses contracts to buy products and services, like leasing laboratory space or conducting field research, they use the General Services Administration’s Product and Services Codes (PSC).  Using PSCs, we grouped R&D contract spending into 20 spending categories.',
    <>
      <p>The federal government is one of the largest and most consistent funding sources of R&D in
        the United States,<a id='fr2' href='#fn2' className='footnoteref'>2</a> where total R&D
        obligations had only a net 1% change over the last decade. In total, the National Science
        Foundation reports that the federal government obligated $146B to R&D initiatives in its
        2019 budget, which includes contracts as well as other key funding sources such as grants.<a
          id='fr3' href='#fn3' className='footnoteref'>3</a></p>
      <p><span className={styles.bold}>Why does the government invest in R&D?</span>
        <br />A common rationale for federal R&D spending is that many socially beneficial research
        projects would not be attempted if society depended on the private sector alone for funding.<a
          id='fr4' href='#fn4' className='footnoteref'>4</a>
      </p>
    </>
  ];

  sections = [
    {
      section: 'Spending',
      anchor: 'spending',
      header: <div className={styles.title} key={'spending-header'}>2019 Agency Spending</div>,
      sectionTeaser: <>What <span className={styles.subtitleHighlight}>portion of federal agency contract spending</span> goes
        to R&D initiatives?</>,
      introBlurb: <>
        <p key={'si1'}>Investment in Research and Development, or R&D, is largely seen as a driver
          of innovation in both the public and private sectors.<a id='fr1' href='#fn1'
            className='footnoteref'>1</a> From
          medicine to autonomous vehicles, R&D investments lead to new products, technology
          advancements, and improved quality of life. To fund R&D work, federal agencies can use
          grants, loans, and contracts. In this analysis we focus on contracts.</p>
        <p key={'si2'}>Each of the 24 Chief Financial Officers (CFO) Act agencies awarded contracts
        to perform R&D work in fiscal year 2019 (FY 2019), totaling $41.5B. Let’s take a look at
          the top ten CFO Act agencies by R&D contract spending.</p>
      </>,
      accordion: <aside>
        <Accordion title='What is R&D?' color='#1302D9' backgroundColor='#E7E5FB'>
          {this.whatIsContents()}
        </Accordion>
      </aside>,
      viztitle: 'R&D as a Portion of Total Federal Contract Spending by Agency',
      tagName: 'spending'
    },
    {
      section: 'Categories',
      anchor: 'categories',
      header: <div className={styles.title} key={'categories-header'}>R&D Spending Categories</div>,
      sectionTeaser: <>20 <span className={styles.subtitleHighlight} key={'categories-teaser'}>categories of R&D</span> contract
        spending in FY 2019</>,
      introBlurb: <>
        <Hidden smDown>
          {this.secBlurbs[1]}
        </Hidden>
        <Hidden mdUp>
          <ReadMore buttonStyle={{ color: globalStyles.rdBlue }}>
            {this.secBlurbs[1]}
          </ReadMore>
        </Hidden>
      </>,
      viztitle: 'R&D Federal Spending in Contracting by Category',
      tagName: 'categories'
    },
    {
      section: 'Studies',
      anchor: 'studies',
      header: <span className={styles.title} key={'studies-header'}>The Big Picture for R&D</span>,
      sectionTeaser: <><span className={styles.subtitleHighlight} key={'studies-teaser'}>Long-term trends</span> in
        federal R&D spending</>,
      introBlurb: <>
        <Hidden smDown>
          {this.secBlurbs[2]}
        </Hidden>
        <Hidden mdUp>
          <ReadMore buttonStyle={{ color: globalStyles.rdBlue }}>
            {this.secBlurbs[2]}
          </ReadMore>
        </Hidden>
      </>,
      viztitle: 'Federal R&D Obligations 2009-2019',
      tagName: 'studies'
    }
  ];

  prerelease = () => {
    let isQAT = false;
    if (typeof window !== 'undefined') {
      isQAT = window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('datalab-qat') > -1 ? true : false;
    }

     if(!isQAT) {
       return (
         <Default>
           <HeadOnly/>
           <div className={styles.comingSoon}>
             <h1>Research & Development in Contract Spending</h1>
             {
               this.state.screenMode === ScreenModeEnum.mobile ?
                 <Mobile/> :
                 this.state.screenMode === ScreenModeEnum.tablet ?
                   <Tablet/> :
                   <Desktop/>
             }
           </div>
         </Default>
       )
     } else {
       return (
         <StoryLayout hwctaLink={this.props.location.pathname + '/methodologies'}
                      title='Research & Development in Contract Spending'
                      introSentence='How much did the federal government invest in Research & Development with FY 2019 Contract Spending?'
                      hwctaLink={this.props.location.pathname + '/methodologies'} >
           <SEO
             description='How much does the federal government invest in Research & Development? In FY 2019, $41.5 billion was contracted to R&D initiatives.'
             keywords={['research and development', 'federal research contracts', 'federal spending', 'R&D funding', 'R&D', 'federal contract spending']}
             title='U.S. Treasury Data Lab – Research & Development in Contract Spending'
           />

           {this.sections.map((item, key) => {
             const SectionTag = this.sectionComponents[item.tagName];
             return (
               <StorySection key={key} header={item}>
                 <SectionTag sectionId={`section-${item.anchor}`} section={item} location={this.props.location} />
               </StorySection>
             );
           })}

           <Grid container className={styles.footnotes}>
             <Grid item xs={10}>
               <Footnotes footnotes={[
                 <>
                   Global R&D: One Measure of Commitment to Innovation, Global R&D: One Measure of Commitment to Innovation § (2018).<br />
                   <a href='https://www.nsf.gov/statistics/2018/nsb20181/digest/sections/global-r-d-one-measure-of-commitment-to-innovation'
                      rel='noreferrer noopener' target='_blank'
                      className={styles.link}
                   >
                     https://www.nsf.gov/statistics/2018/nsb20181/digest/sections/global-r-d-one-measure-of-commitment-to-innovation
                     <LaunchOutlinedIcon className={styles.extLink} />
                   </a>
                 </>,
                 <>
                   Sargent, John F. "Federal Research and Development (R&D) Funding: FY2019." Federal Research and Development (R&D) Funding: FY2019, October 4, 2018.<br />
                   <a href='https://fas.org/sgp/crs/misc/R45150.pdf'
                      rel='noreferrer noopener' target='_blank'
                      className={styles.link}
                   >
                     https://fas.org/sgp/crs/misc/R45150.pdf
                     <LaunchOutlinedIcon className={styles.extLink} />
                   </a>
                 </>,
                 <>National Center for Science and Engineering Statistics, National Science Foundation. 2019. Federal R&D Funding, by Budget Function: Fiscal Years 2018–20. Detailed Statistical Tables NSF 20-305. Alexandria, VA. Available at{' '}
                   <a href='https://ncses.nsf.gov/pubs/nsf20305/'
                      rel='noreferrer noopener' target='_blank'
                      className={styles.link}
                   >
                     https://ncses.nsf.gov/pubs/nsf20305/
                     <LaunchOutlinedIcon className={styles.extLink} />
                   </a>.</>,
                 <>
                   Maloney, Carolyn B, and Charles E Schumer. “The Pivotal Role of Government Investment in Basic Research.” U.S. Congress Joint Economic Committee. U.S. Congress Joint Economic Committee, May 2010.<br />
                   <a href='https://www.jec.senate.gov/public/_cache/files/29aac456-fce3-4d69-956f-4add06f111c1/rd-report--final-report.pdf'
                      rel='noreferrer noopener' target='_blank'
                      className={styles.link}
                   >
                     https://www.jec.senate.gov/public/_cache/files/29aac456-fce3-4d69-956f-4add06f111c1/rd-report--final-report.pdf
                     <LaunchOutlinedIcon className={styles.extLink} />
                   </a>
                 </>
               ]} />
             </Grid>
           </Grid>
         </StoryLayout>
       )
     }
  }

  render = () => {
    return(this.prerelease())
  }

}