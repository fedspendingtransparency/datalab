import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DefaultLayout from 'src/components/layouts/default/default';
import HeaderOnly from 'src/components/layouts/header-only/header-only';
import SEO from 'src/components/seo';
import styles from './about.module.scss';

const AboutUs = () => {
  const getElementHeight = (id) => {
    if (typeof window !== 'undefined' && document.getElementById(id)) {
      return document.getElementById(id).getBoundingClientRect().height;
    }
    return null;
  };

  const headings = [
    {
      name: 'Mission',
      href: 'mission',
      height: getElementHeight('mission'),
      index: 0,
    },
    {
      name: 'Who We Are',
      href: 'who-we-are',
      height: getElementHeight('who-we-are'),
      index: 1,
    },
    {
      name: 'Background',
      href: 'background',
      height: getElementHeight('background'),
      index: 2,
    },
    {
      name: 'Data Sources',
      href: 'data-sources',
      height: getElementHeight('data-sources'),
      index: 3,
    },
    {
      name: 'Contact Us',
      href: 'contact-us',
      height: getElementHeight('contact-us'),
      index: 4,
    },
  ];

  const getElementPosition = (index) => {
    let headingHeight = 0;
    headings.forEach((h) => {
      if (h.index < index) {
        headingHeight += h.height;
      }
    });
    return 326 + headingHeight;
  };

  const [activeHeading, setActiveHeading] = useState(headings[0].name);
  const [fixedClass, setFixedClass] = useState('');
  const [bottomClass, setBottomClass] = useState('');

  useEffect(() => {
    headings.forEach((h) => {
      h.height = getElementHeight(h.href);
    });

    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', () => {
        const bottomLimit = document.getElementById('about-us-container').getBoundingClientRect().height - 4;
        setFixedClass(window.scrollY > 296 && window.scrollY <= bottomLimit ? styles.fixed : '');
        setBottomClass(window.scrollY > bottomLimit ? styles.bottom : '');

        const heading = headings.filter((h) => getElementPosition(h.index) > window.scrollY);
        if (headings.length > 0) {
          setActiveHeading(heading[0].name);
        }
      });

      window.addEventListener('resize', () => {
        headings.forEach((h) => {
          h.height = getElementHeight(h.href);
        });
      })
    }
  }, []);

  const scrollToElement = (name) => {
    const heading = headings.find((h) => h.name === name);
    window.scrollTo(0, getElementPosition(heading.index) - 50);
  };

  return (
    <DefaultLayout>
      <HeaderOnly>
        <SEO
          title="About Us"
          description="Placeholder description"
        />
        <div className={styles.aboutUsHeaderImage}>
          <h1 className={styles.headerTitle}>
            About Data Lab
          </h1>
        </div>
        <div className={styles.container} id="about-us-container">
          <Grid container>
            <Grid className={`${styles.tocContainer} ${bottomClass}`} item lg={4}>
              <div className={`${styles.scrollingToc} ${fixedClass}`}>
                {headings.map((heading) => {
                  const activeClass = activeHeading === heading.name ? styles.active : '';
                  return (
                    <>
                      <h2 className={styles.tocSection}>
                        <a
                          className={`${styles.aboutUsTocLink} ${activeClass}`}
                          onClick={() => scrollToElement(heading.name)}
                        >
                          {heading.name}
                        </a>
                      </h2>
                    </>
                  );
                })}
              </div>
            </Grid>
            <Grid item md={12} lg={8}>
              <div className={styles.sectionContainer} id="mission">
                <div className="anchor-padding" />
                <h1 className={styles.sectionTitle}>
                  Mission
                </h1>
                <p className={styles.sectionBody}>
                  Data Lab’s mission is to promote transparency of government finances by providing engaging and informative data-driven analyses of federal spending data.
                </p>
              </div>
              <div className={styles.sectionContainer} id="who-we-are">
                <div className="anchor-padding" />
                <h1 className={styles.sectionTitle}>
                  Who We Are
                </h1>
                <p className={styles.sectionBody}>
                  This site was created by the Office of the Chief Data Officer at the Bureau of the Fiscal Service (Fiscal Service), which is part of the Department of the Treasury. Fiscal Service is responsible for managing
                  public debt, central payment systems, and government accounting. Our team is comprised of data analysts, developers, and UX designers who are passionate about putting trusted data in the hands of the people.
                </p>
              </div>
              <div className={styles.sectionContainer} id="background">
                <div className="anchor-padding" />
                <h1 className={styles.sectionTitle}>
                  Background
                </h1>
                <p className={styles.sectionBody}>
                  Data Lab launched in September 2017 to provide the public with a better understanding of government spending. Our site demonstrates how open data can be used to inspire innovation both inside and outside of the government. Since launching, we have added
                  {' '}
                  <a href="/americas-finance-guide">Your Guide to America’s Finances</a>
                  , a re-invention of the Financial Report of the U.S. Government and published nine analyses on Data Lab. Additionally, Data Lab helps the Office of Chief
                  {' '}
                  Data Officer, within the Bureau of the Fiscal Service, to deliver on the Department of the Treasury’s strategic goal of increasing access to and the use of federal financial data by the public and federal agencies.
                </p>
              </div>
              <div className={styles.sectionContainer} id="data-sources">
                <div className="anchor-padding" />
                <h1 className={styles.sectionTitle}>
                  Data Sources
                </h1>
                <p className={styles.sectionBody}>
                  Our main data sources are our sister sites,
                  {' '}
                  <a href="https://www.usaspending.gov/" target="_blank" rel="noopener noreferrer">USAspending.gov</a>
                  {' '}
                  and
                  {' '}
                  <a href="http://fiscaldata.treasury.gov/" target="_blank" rel="noopener noreferrer">Fiscal Data</a>
                  .
                </p>
                <br />
                <p className={styles.sectionBody}>
                  Additionally, we partner with other government agencies to acquire data or utilize other publicly available data sources from reliable sources for our analyses.
                  {' '}
                  You can find more detailed information about the data sources used in the “Data Sources and Methodologies” at the end of each analysis.
                </p>
              </div>
              <div className={styles.sectionContainer} id="contact-us">
                <div className="anchor-padding" />
                <h1 className={styles.sectionTitle}>
                  Contact Us
                </h1>
                <p className={styles.sectionBody}>
                  For general inquiries or questions on Data Lab activities or operations, please contact: USAspending.Help@Fiscal.Treasury.gov
                </p>
                <br />
                <p className={styles.sectionBody}>
                  For media inquiries, please contact: Media.relations@fiscal.treasury.gov
                </p>
                <br />
                <p className={styles.sectionBody}>
                  To join our mailing list, send a blank email with no subject to: datalab@lists.fiscal.treasury.gov
                </p>
                <br />
                <p className={styles.sectionBody}>
                  Join the conversation by visiting our Community Page.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </HeaderOnly>
    </DefaultLayout>
  );
};

export default AboutUs;
