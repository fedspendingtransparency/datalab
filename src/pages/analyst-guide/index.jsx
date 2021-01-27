import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
/* components */
import FaqLayout from 'src/components/layouts/faq/faq';
import SEO from 'src/components/seo';
import Downloads from 'src/components/section-elements/downloads/downloads';
import AccordionList from 'src/components/accordion-list/accordion-list';
import HeroImage from 'src/images/analyst-guide/hero-img.png';
/* Sections */
import generalQuestions from 'src/page-sections/analyst-guide/general-questions';
import classifications from 'src/page-sections/analyst-guide/classifications';
import agencyRelated from 'src/page-sections/analyst-guide/agency-related';
import loanRelated from 'src/page-sections/analyst-guide/loan-related';
import contractAwards from 'src/page-sections/analyst-guide/contract-awards';
import financialAssistance from 'src/page-sections/analyst-guide/financial-assistance';
import federalAccountData from 'src/page-sections/analyst-guide/federal-account-data';

import styles from './analyst-guide.module.scss';

const AnalystGuidePage = ({ location }) => {
  const title = 'What is the Analyst\'s Guide to Federal Spending Data?';
  const heroImage = (
    <div className={styles.heroImageContainer}>
      <img
        src={HeroImage}
        className={styles.heroImage}
        alt="Treasury Department building in the background overlaid with a floating bar chart with a trend line."
      />
      <div className={styles.heroImageText}>
        <h1>Analyst's Guide to Federal Spending Data</h1>
        <h2>Guidance on effectively using USAspending.gov data.</h2>
      </div>
    </div>
  );

  const introSentence = (
    <>
      <p>
        Welcome to the Analyst’s Guide to Federal Spending Data. Here, you’ll find guidance on
        effectively using USAspending.gov data, making it easier for you to conduct your own
        analyses and develop tools using federal spending data.
      </p>
      <p>
        If you’d like to recommend a question to be added to this guide, please share it on
        our Community page.
      </p>
    </>
  );
  const rawContent = [
    generalQuestions,
    classifications,
    agencyRelated,
    loanRelated,
    contractAwards,
    financialAssistance,
    federalAccountData,
  ];

  const content = (
    <>
      {
        rawContent.map((section, key) => (
          <section key={key} className={styles.section}>
            <div className={styles.sectionHeader}>
              {section.title}
            </div>
            {section.data.map((datum, key1) => {
              let accordionTitle = <></>;
              let accordionContent = <></>;
              if (datum.accordionTitles && datum.accordionTitles.length) {
                accordionTitle = (
                  <div key={key1} className={styles.containerNoFlex}>
                    {datum.accordionTitles.map((t, key2) => (
                      <div key={key2} className={styles.accordionTitleDiv}>
                        {t}
                      </div>
                    ))}
                  </div>
                );
              }
              if (datum.accordionContent && datum.accordionContent.length) {
                accordionContent = datum.accordionContent.map((c, key2) => (
                  <div key={key2}>{c}</div>
                ));
              }
              return (
                <AccordionList
                  key={key1}
                  title={accordionTitle}
                  containerClass={styles.accordionContainer}
                >
                  {accordionContent}
                </AccordionList>
              );
            })}
          </section>
        ))
      }
    </>
  );

  return (
    <>
      <SEO
          title="Analyst's Guide to Federal Spending Data | U.S. Treasury Data Lab"
          description="Find guidance on how to use USAspending.gov data. Get answers to questions to help you conduct your own analyses and develop tools using federal spending data."
      />
      <div id={styles.analystGuidePage}>
        <FaqLayout
          title={title}
          introSentence={introSentence}
          heroImage={heroImage}
          location={location}
          useMoreResources
        >
          {content}
          <Hidden lgDown>
            <Downloads href="/unstructured-data/resources/analyst-guide.pdf" />
          </Hidden>
          <Hidden xlUp>
            <Grid container justify="center" className={styles.download}>
              <Grid item xs={12}>
                <Downloads href="/unstructured-data/resources/analyst-guide.pdf" />
              </Grid>
            </Grid>
          </Hidden>
        </FaqLayout>
      </div>
    </>
  );
};

export default AnalystGuidePage;
