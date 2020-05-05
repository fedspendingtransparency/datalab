import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '@material-ui/core';
import moreAnalysesStyles from './more-analyses.module.scss';

import federal from 'src/images/more-analyses/federal.jpg';
import workers from 'src/images/more-analyses/workers.jpg';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';
import cu from 'src/images/more-analyses/cu.png';
import homeless from 'src/images/more-analyses/homeless.png';
import dts from 'src/images/more-analyses/dts.png';
import explorer from 'src/images/more-analyses/explorer.png';
import rd from 'src/images/more-analyses/rd.png';


export default class MoreAnalyses extends React.Component {
  constructor(props) {
    super(props);
  }

  analyses = [{
    href: 'federal-account-explorer',
    imageSrc: federal,
    altText: 'A close view of a withered copy of the Statement of the Income and Expenditures of the United States.',
    title: 'Federal Account Explorer',
    subtitle: 'Discover the federal government\'s spending accounts'
  }, {
    href: 'federal-employees',
    imageSrc: workers,
    altText: 'National Park Service Director talking with Junior Ranger wearing a vest with 32 badges, in front of the El Pueblo De Los Angeles Historic Monument.',
    title: 'Federal Employees',
    subtitle: 'Who works in government?'
  }, {
    href: 'budget-function',
    imageSrc: budget,
    altText: 'A close view of the back of a dollar bill focused on the Great Seal of the United States.',
    title: 'Budget Function',
    subtitle: 'Check out how federal spending is categorized'
  }, {
    href: 'competition-in-contracting',
    imageSrc: competition,
    altText: 'Five individuals racing on an orange race track covering four lanes.',
    title: 'Competition in Contracting',
    subtitle: 'How often do federal agencies compete for contracts?'
  }, {
    href: 'colleges-and-universities',
    imageSrc: cu,
    altText: 'A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively.',
    title: 'Colleges and Universities',
    subtitle: 'Federal investment in higher education'
  }, {
    href: 'homelessness-analysis',
    imageSrc: homeless,
    altText: 'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.',
    title: 'Homelessness Analysis',
    subtitle: 'Explore federal programs that address homelessness'
  }, {
    href: 'dts',
    imageSrc: dts,
    altText: 'Line graph of the Daily Treasury Statement with data from June 2005 through today.',
    title: 'Visualizing the Daily Treasury Statement',
    subtitle: 'How much does the federal government spend each day?'
  }, {
    href: 'contract-explorer',
    imageSrc: explorer,
    altText: 'A picture of a microscope with a sunburst image overlaid.',
    title: 'Contract Explorer',
    subtitle: 'Who receives federal contracts?'
  },
  {
    href: 'rd-in-contracting',
    imageSrc: rd,
    altText: 'Abstract Brain with 4 categories: Aeronautics, Infectious Disease, Renewable Energy & Anti-Terrorism.',
    title: 'R&D In Contracting',
    subtitle: 'How does the government invest in research & development?'
  }];

  show = { // key is current page URL frag, value is array of analyses (above) to show
    'federal-employees': [8, 0, 4, 5],
    'colleges-and-universities': [8, 5, 6, 1],
    'dts': [8, 2, 0, 7],
    'federal-account-explorer': [8, 6, 7, 2],
    'contract-explorer': [8, 3, 0, 2],
    'homelessness-analysis': [8, 1, 4, 3],
    'budget-function': [8, 0, 6, 1],
    'competition-in-contracting': [8, 7, 5, 4],
    'rd-in-contracting': [5, 4, 7, 6],
    'covid19': [8, 5, 7, 0]
  };

  showAnything = () => {
    if (typeof window !== 'undefined') {
      if (this.showAnalyses = this.show[window.location.pathname.replace(new RegExp(/\//, 'g'), '')]) {
        return true;
      }
    }
    return false;
  }

  render = () =>
    <section className={moreAnalysesStyles.analyses}>
      <div className={moreAnalysesStyles.heading}>
        More Analyses
      </div>
      <Grid container spacing={3} className={moreAnalysesStyles.tiles}>
        {this.showAnything() &&
          this.showAnalyses.map((analysesIndex, i) =>
            <Grid item xs={12} sm={6} xl={3}
              key={'analyses_tile_' + i}
              className={`tile ${moreAnalysesStyles.tile}`}
            >
              <Link to={this.analyses[analysesIndex].href}>
                <div className={moreAnalysesStyles.text}>
                  <div className={moreAnalysesStyles.title}>
                    {this.analyses[analysesIndex].title}
                  </div>
                  <p className={moreAnalysesStyles.subtitle}>
                    {this.analyses[analysesIndex].subtitle}
                  </p>
                </div>
                <img
                  data-src={this.analyses[analysesIndex].imageSrc}
                  alt={this.analyses[analysesIndex].altText}
                  className={`${moreAnalysesStyles.image} lazyload`}
                />
              </Link>
            </Grid>
          )
        }
      </Grid>
    </section>
}


