import React, { Component } from "react";
import styles from './analyst-guide.module.scss';

/* components */
import FaqLayout from "../../components/layouts/faq/faq";
import Downloads from '../../components/section-elements/downloads/downloads';
import { Hidden, Grid } from '@material-ui/core';
import AccordionList from "../../components/accordion-list/accordion-list";
import HeroImage from '../../images/analyst-guide/hero-img.png';

/* Sections */
import generalQuestions from '../../page-sections/analyst-guide/general-questions';
import classifications from '../../page-sections/analyst-guide/classifications';
import agencyRelated from '../../page-sections/analyst-guide/agency-related';
import loanRelated from '../../page-sections/analyst-guide/loan-related';
import contractAwards from '../../page-sections/analyst-guide/contract-awards';
import financialAssistance from '../../page-sections/analyst-guide/financial-assistance';
import federalAccountData from '../../page-sections/analyst-guide/federal-account-data';

class AnalystGuidePage extends Component {

  render() {
    const title = `What is the Analyst's Guide to Federal Spending Data?`;
    const heroImage = <div className={styles.heroImageContainer}>
      <img src={HeroImage} className={styles.heroImage} />
      <div className={styles.heroImageText}>
        <h1>Analyst's Guide to Federal Spending Data</h1>
        <h2>Guidance on effectively using USAspending.gov data.</h2>
      </div>
    </div>;

    const introSentence = <>
      <p>
        Welcome to the Analyst’s Guide to Federal Spending Data. Here, you’ll find guidance on effectively using USAspending.gov data, making it easier for you to conduct your own analyses and develop tools using federal spending data. 
      </p>
      <p>
        If you’d like to recommend a question to be added to this guide, please share it on USAspending.gov’s Community page.
      </p>
    </>;
    const rawContent = [
      generalQuestions,
      classifications,
      agencyRelated,
      loanRelated,
      contractAwards,
      financialAssistance,
      federalAccountData
    ];

    const content = <>
      {
        rawContent.map((section, key) => {
          return <section key={key} className={styles.section}>
            <div className={styles.sectionHeader}>
              {section.title}
            </div>
            {
              section.data.map((datum, key1) => {
                let accordionTitle = <></>;
                let accordionContent = <></>;
                if (datum.accordionTitles && datum.accordionTitles.length) {
                  accordionTitle = <div key={key1} className={styles.containerNoFlex}>
                    {datum.accordionTitles.map((title, key2) => {
                      return <div key={key2} className={styles.accordionTitleDiv}>
                        {title}
                      </div>;
                    })}
                  </div>;
                }
                if (datum.accordionContent && datum.accordionContent.length) {
                  accordionContent = datum.accordionContent.map((content, key2) => <div key={key2}>{content}</div>);
                }
                return <AccordionList key={key1} title={accordionTitle} containerClass={styles.accordionContainer}>
                  {accordionContent}
                </AccordionList>;
              })
            }
          </section>;
        })
      }
    </>;

    return <>
      <div id={styles.analystGuidePage}>
        <FaqLayout
          title={title}
          introSentence={introSentence}
          heroImage={heroImage}
          location={this.props.location}
          useMoreResources
        >
          {content}
          <Hidden lgDown>
            <Downloads href={'/unstructured-data/resources/analyst-guide.pdf'} />
          </Hidden>
          <Hidden xlUp>
            <Grid container justify='center' className={styles.download}>
              <Grid item xs={12}>
                <Downloads href={'/unstructured-data/resources/analyst-guide.pdf'} />
              </Grid>
            </Grid>
          </Hidden>
        </FaqLayout>
      </div>
    </>;
  }
}

export default AnalystGuidePage;
