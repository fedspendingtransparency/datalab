import React from 'react';
import Grid from '@material-ui/core/Grid';

import apiImg from 'src/images/home/resources-api-2.svg';
import userGuideImg from 'src/images/home/resources-user-guide-2.svg';
import playbookImg from 'src/images/home/resources-playbook-2.svg';

import resourcesRowStyles from './resources-row.module.scss';

const ResourcesRow = () => {
  const resourcesItems = [
    {
      href: '/analyst-guide/',
      imageSrc: userGuideImg,
      altText: 'An icon of a book.',
      title: 'Analyst Guide',
      description: 'Methods to easily navigate data from our sister site, USAspending.gov.'
    },
    {
      href: '/student-innovators-toolbox/',
      imageSrc: playbookImg,
      altText: 'An icon of a notebook.',
      title: 'Student Innovator\'s Toolbox',
      description: 'Ways for professors and students to get involved.'
    },
    {
      imageSrc: apiImg,
      altText: 'An icon of a computer monitor.',
      title: 'API Documentation',
      description: 'Guidance on using the USASpending API and APIs from Fiscal Data API.'
    },
  ];

  return (
    <section className={resourcesRowStyles.resources}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <h1 className={resourcesRowStyles.heading}>Resources</h1>
        </Grid>
        <Grid item sm={12} md={12} lg={3} className={resourcesRowStyles.tile}>
          <p className={resourcesRowStyles.title}>
            Do you want <strong> to conduct your own analysis?</strong>
          </p>
          <p className={resourcesRowStyles.descriptionConduct}>
            Access Treasury data and create your own charts and visualizations!
          </p>
        </Grid>

        {resourcesItems.map((resource, index) =>
          <Grid item xs={12} md={4} lg={3}
            key={index}
            className={resourcesRowStyles.tileRow}
          >
            {index === 2 ?
              <div
                key={'landing-row__tile_' + index}
                className={resourcesRowStyles.tile}
                style={{ display: 'inline' }}
              >
                <div>
                  <img
                    data-src={resource.imageSrc}
                    alt={resource.altText}
                    className={`${resourcesRowStyles.svgImgAPI} lazyload`}
                  />
                </div>
                <div className={resourcesRowStyles.titleContainer}>
                  <h1 className={resourcesRowStyles.titleAPI}>
                    {resource.title}
                  </h1>
                  <p className={resourcesRowStyles.description}>
                    Guidance on using the <a href="https://api.usaspending.gov/" target="_blank" className={resourcesRowStyles.descriptionLink}>USAspending API</a> and APIs
                    from <a href="https://fiscaldata.treasury.gov/api-documentation/" target="_blank" className={resourcesRowStyles.descriptionLink}>Fiscal Data API.</a>
                  </p>
                </div>
              </div>

              :

              <a
                key={'landing-row__tile_' + index}
                className={resourcesRowStyles.tile}
                href={resource.href}
              >
                <div>
                  <img
                    data-src={resource.imageSrc}
                    alt={resource.altText}
                    className={`${resourcesRowStyles.svgImg} lazyload`}
                  />
                </div>
                <div className={resourcesRowStyles.titleContainer}>
                  <h1 className={resourcesRowStyles.title}>
                    {resource.title}
                  </h1>
                  <p className={resourcesRowStyles.description}>
                    {resource.description}
                  </p>
                </div>
              </a>
            }
          </Grid>
        )}
      </Grid>
    </section>
  );
};

export default ResourcesRow;
