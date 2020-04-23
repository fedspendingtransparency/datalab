import React, { Component } from "react";
import styles from './analyst-guide.module.scss';

/* components */
import FaqLayout from "../../components/layouts/faq/faq";
import Downloads from '../../components/section-elements/downloads/downloads';
import { Hidden, Grid } from '@material-ui/core';
import AccordionList from "../../components/accordion-list/accordion-list";
import DesktopImage from '../../images/analyst-guide/Analyst Desktop.png';
import TabletImage from '../../images/analyst-guide/Analyst Tablet.png';
import MobileImage from '../../images/analyst-guide/Analyst Mobile.png';

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
    const heroImage = <>
      <Hidden lgDown>
        <img src={DesktopImage} className={styles.heroImage} />
      </Hidden>
      <Hidden xlUp xsDown>
        <img src={TabletImage} className={styles.heroImage} />
      </Hidden>
      <Hidden smUp>
        <img src={MobileImage} className={styles.heroImage} />
      </Hidden>
    </>;

    const introSentence = <>
      <p>
        The federal government uses contracts to buy the things it needs, from office furniture to airplanes. It also uses contracts to buy services
         ranging from internet to research and development. Federal Agencies and their sub-agencies are responsible for issuing contracts and
         categorizing the goods and services they purchase using Product and Service Codes (PSC).
      </p>
      <p>
        Although contracts and grants share some similarities, each serves a different purpose. Generally, contracts allow the government ot purchase
         goods and services directly to the public. For example, the Air Force uses contracts to acquire fighter jets to execute its mission, while the Federal
         Highway Administration uses grants to provide funds to states for public roads.
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
