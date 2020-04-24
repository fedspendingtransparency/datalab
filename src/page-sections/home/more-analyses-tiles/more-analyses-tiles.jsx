import React from 'react';
import { Link } from 'gatsby';
import moreAnalysesStyles from './more-analyses-tiles.module.scss';

import { Grid } from '@material-ui/core';

import explorer from 'src/images/more-analyses/explorer.png';
import workers from 'src/images/more-analyses/workers.jpg';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';

const MoreAnalysesTiles = () => {
  const analyses = [{
    href: 'contract-explorer',
    imageSrc: explorer,
    alt: 'A picture of a microscope with a sunburst image overlaid.',
    title: 'Contract Explorer',
    subtitle: 'Who receives federal contracts?'
  }, {
    href: 'federal-employees',
    imageSrc: workers,
    title: 'Federal Employees',
    subtitle: 'Who works in government?',
    alt: 'National Park Service Director talking with Junior Ranger wearing a vest with 32 badges, in front of the El Pueblo De Los Angeles Historic Monument.'
  }, {
    href: 'budget-function',
    imageSrc: budget,
    title: 'Budget Function',
    subtitle: 'Check out how federal spending is categorized',
    alt: 'A close view of the back of a dollar bill focused on the Great Seal of the United States.'
  }, {
    href: 'competition-in-contracting',
    imageSrc: competition,
    title: 'Competition in Contracting',
    subtitle: 'How often do federal agencies compete for contracts?',
    alt: 'Five individuals racing on an orange race track covering four lanes.'
  },
  ]

  return (
    <section className={moreAnalysesStyles.moreAnalyses}>
      <Grid
        container
        justify='space-around'
        spacing={4}>
          {analyses.map((item, index) =>
            <Grid item xs={12} sm={6}
                  key={index}
              className={moreAnalysesStyles.tile}>

              <Link to={item.href}
                    key={'more-tile_' + index}>

                <div className={moreAnalysesStyles.tileHeading}>
                  <p className={moreAnalysesStyles.title}>
                  {item.title}
                  </p>
                  <p className={moreAnalysesStyles.subtitle}>
                  {item.subtitle}
                  </p>
                </div>

                <div className={moreAnalysesStyles.imageContainer}>
                  <img
                    data-src={item.imageSrc}
                    className={`${moreAnalysesStyles.image} lazyload`}
                    alt={item.alt} />
                </div>

              </Link>

            </Grid>

          )}

      </Grid>

    </section>
  )
}

export default MoreAnalysesTiles;
