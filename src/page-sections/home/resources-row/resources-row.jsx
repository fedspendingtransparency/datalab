import React from 'react';
import { Link } from 'gatsby';
import { Grid } from "@material-ui/core"


import apiImg from '../../../images/home/resources-api-2.svg'
import userGuideImg from '../../../images/home/resources-user-guide-2.svg'
import playbookImg from '../../../images/home/resources-playbook-2.svg'

import resourcesRowStyles from './resources-row.module.scss'

const ResourcesRow = () => {

  const resourcesItems = [{
    href: 'http://api.usaspending.gov/',
    imageSrc: apiImg,
    title: 'API Guide',
    description: 'Guidance on accessing Treasury data with open source code.'
    }, {
      href: '/assets/analyst-guide-1-2.pdf',
      imageSrc: userGuideImg,
      title: 'Analyst Guide',
      description: 'Methods to easily navigate data from our sister site, USAspending.gov'
    }, {
      href: '/student-innovators-toolbox/',
      imageSrc: playbookImg,
      title: 'Student Innovators Toolbox',
      description: 'Ways for professors and students to get involved.'
    },
  ]

  return (
    <>
      <section className={resourcesRowStyles.resources}>
        <Grid container
              spacing={3}>

          <Grid item xs={12}>
            <h1 className={resourcesRowStyles.heading}>
              Resources
            </h1>
          </Grid>

          <Grid item sm={12} md={12} lg={3}
              className={resourcesRowStyles.tile}>
              <p className={resourcesRowStyles.title}>
                Do you want
                <strong> to conduct your own analysis?</strong>
              </p>
              <p className={resourcesRowStyles.description}>
                Access Treasury data and create your own charts and visualizations!
              </p>
          </Grid>

          {resourcesItems.map((resource, index) =>
            <Grid item xs={12} sm={12} md={4} lg={3}
                  key={index}
                  className={resourcesRowStyles.tileRow}>
              <Link
                key={'landing-row__tile_' + index}
                className={resourcesRowStyles.tile}
                to={resource.href}>

                  <img src={resource.imageSrc}
                       className={resourcesRowStyles.svgImg} />
                  <h1 className={resourcesRowStyles.title}>
                    {resource.title}
                  </h1>
                  <p className={resourcesRowStyles.description}>
                    {resource.description}
                  </p>
              </Link>
            </Grid>
          )}

        </Grid>

      </section>
    </>
  )
}


export default ResourcesRow

