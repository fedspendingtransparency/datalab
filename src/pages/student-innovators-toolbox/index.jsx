import React, {Component} from "react";
import styles from './student-innovators-toolbox.module.scss';

/* components */
import FaqLayout from "../../components/layouts/faq/faq";
import Downloads from '../../components/section-elements/downloads/downloads';
import { Hidden, Grid } from '@material-ui/core';
import AccordionList from "../../components/accordion-list/accordion-list"
import DesktopImage from '../../images/student-innovators-toolbox/Toolbox Desktop.png';
import TabletImage from '../../images/student-innovators-toolbox/Toolbox Tablet.png';
import MobileImage from '../../images/student-innovators-toolbox/Toolbox Mobile.png';

/* Sections */
import typesOfEngagement from '../../page-sections/student-innovators-toolbox/engagements';
import rolesResponsibilities from '../../page-sections/student-innovators-toolbox/roles-responsibilities';
import aboutTheData from '../../page-sections/student-innovators-toolbox/about';
import finalProduct from '../../page-sections/student-innovators-toolbox/final-product';
import resources from '../../page-sections/student-innovators-toolbox/resources';
import projects from '../../page-sections/student-innovators-toolbox/projects';

class AnalystGuidePage extends Component {

  render() {
    const title = `What is the Student Innovator’s Toolbox?`;
    const heroImage = <>
      <Hidden lgDown>
        <img src={DesktopImage} className={styles.heroImage}/>
      </Hidden>
      <Hidden xlUp xsDown>
        <img src={TabletImage} className={styles.heroImage}/>
      </Hidden>
      <Hidden smUp>
        <img src={MobileImage} className={styles.heroImage}/>
      </Hidden>
    </>;

    const introSentence = <>
      <p>
        The Student Innovator’s Toolbox was designed to connect students and faculty with data from the U.S. Treasury.
        The purpose is to complement classroom learning about the federal budget, data science, policy analysis as well
        as facilitation of analysis and research.
      </p>
      <p>
        The intended audience for this toolbox includes professors and instructors, directors of graduate and
        undergraduate programs, librarians dealing with data analysis and visualization, and students looking for a
        real-world project to flex their skills and develop data-driven solutions.
      </p>
    </>
    const rawContent = [
      typesOfEngagement,
      rolesResponsibilities,
      aboutTheData,
      finalProduct,
      resources
    ];

    const nonAccordionContent = [
      projects
    ];

    const content = <>
      {
        rawContent.map((section, key) => {
          return <section key={key} className={styles.section}>
            <div className={styles.sectionHeader}>
              {section.title}
            </div>
            {section.introSentence ?
              section.introSentence : ''
            }
            {
              section.data.map((datum, key1) => {
                let accordionTitle = <></>;
                let accordionContent = <></>;
                if(datum.accordionTitles && datum.accordionTitles.length){
                  accordionTitle = <div className={styles.containerNoFlex} key={key1}>
                    {datum.accordionTitles.map((title, key2) => {
                      return <div key={key2} className={styles.accordionTitleDiv}>
                        {title}
                      </div>
                    })}
                  </div>
                }
                if(datum.accordionContent && datum.accordionContent.length){
                  accordionContent =  datum.accordionContent.map((content, key2) => {
                    return <>
                      {content}
                    </>
                  })
                }
                return <AccordionList key={key1} title={accordionTitle} containerClass={styles.accordionContainer}>
                  {accordionContent}
                </AccordionList>
              })
            }
          </section>
        })}
      {
        nonAccordionContent.map((section, key) => {
          return <section key={key} className={styles.section}>
            <div className={styles.sectionHeader}>
              {section.title}
            </div>
            {section.introSentence ?
              section.introSentence : ''
            }
            {
              section.data.map((datum, key1) => {
                return <>
                  {datum.content}
                </>
              })
            }
          </section>
        })
      }
    </>

    return <>
      <div id={styles.analystGuidePage}>
        <FaqLayout
          title={title}
          introSentence={introSentence}
          heroImage={heroImage}
          location={this.props.location}
        >
          {content}
          <Hidden lgDown>
            <Downloads/>
          </Hidden>
          <Hidden xlUp>
            <Grid container justify='center' className={styles.download}>
              <Grid item xs={12}>
                <Downloads/>
              </Grid>
            </Grid>
          </Hidden>
        </FaqLayout>
      </div>
    </>
  }
}

export default AnalystGuidePage
