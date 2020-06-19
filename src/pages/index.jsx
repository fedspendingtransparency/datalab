import React from 'react';
import { Grid } from '@material-ui/core';
import homeStyles from './index.module.scss';

import DtsTile from 'src/page-sections/home/dts-tile/dts-tile';
import FeatureRow from 'src/page-sections/home/feature-row/feature-row';
import FeatureTile from 'src/page-sections/home/feature-tile/feature-tile';
import Home from 'src/components/layouts/home/home';
import MoreAnalysesTiles from 'src/page-sections/home/more-analyses-tiles/more-analyses-tiles';
import ResourcesRow from 'src/page-sections/home/resources-row/resources-row';
import SecondaryTile from 'src/page-sections/home/secondary-tile/stacked-layout/secondary-tile';
import SEO from 'src/components/seo';

import afg from 'src/images/home/afg.png';
import cu from 'src/images/home/collegehomepage.svg';
import homelessImg from 'src/images/home/homelessness.png';
import rd from 'src/images/home/rd-homepage-v4.gif';
import covid from 'src/images/home/covid.png';

function IndexPage() {
  return (
    <Home>
      <SEO
        title='Data Lab - U.S. Treasury'
        description='The Data Lab is a U.S. Treasury Department website of topic-based analyses and visualizations to help the public understand government spending.'
        keywords={[`Federal spending`,`data`,`visualizations`,`contracts`,`accounts`,`grants`,`federal programs`,`federal financial data`,`government spending`,`government programs`,`government contracts`]}
      />
      <Grid
        container
        spacing={3}
        justify='center'
        className={homeStyles.featuredTileRow}
      >
        <Grid item md={12} lg={8} className={homeStyles.featuredTile}>
          <FeatureTile
            href='federal-covid-spending'
            imgSrc={covid}
            isMain={true}
            imgAlt=''
            heading='Federal Response to COVID-19'
            body='To aid the nation’s recovery from the COVID-19 pandemic, the U.S. Congress passed four special appropriations laws, making $2.3 trillion available for the federal government to use in relief efforts.  As of May 1, the U.S. Department of the Treasury has tracked $963 billion COVID-19-related obligations made by agencies, of which $459 billion has been spent. In this analysis, we break down the funding by agency and describe the flow of money from legislation to the American people.'
            mobileBody='Follow along as Data Lab tracks the flow of four supplemental funding bills for COVID-19. As of May 1, the U.S. Department of the Treasury has tracked $963 billion in agency spending.'
          />
        </Grid>
        <Grid item md={12} lg={4}>
          <DtsTile
            href={'dts'}
            heading='Visualizing the Daily Treasury Statement'
            title='How much does the federal government spend each day?'
          />
          <Grid item>
            <SecondaryTile
              heading='Fiscal Year 2019'
              subheading={`America's Finance Guide`}
              href='americas-finance-guide'
              imgSrc={afg}
              imgAlt='The Department of Treasury building, in Washington, D.C., that includes a bronze statue of Albert Gallatin, the fourth Secretary of the Treasury.'
              body='Your guide to understanding the trillions of dollars that make up the federal balance sheet. Our interactive visualizations walk you through federal spending, revenue, the deficit, and debt.'
            />
          </Grid>
        </Grid>
      </Grid>

      {/* The more analyses is outside of the more analyses section on purpose */}
      <Grid item xs={12}>
        <p className={homeStyles.heading}>
          More Analyses
        </p>
      </Grid>

      <Grid container spacing={3} className={homeStyles.moreAnalysesRow}>
        <Grid item md={12} lg={6}>
          <MoreAnalysesTiles />
        </Grid>
        <Grid item md={12} lg={6} className={homeStyles.featuredTile}>
          <FeatureTile
            href='homelessness-analysis'
            imgSrc={homelessImg}
            imgAlt='A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.'
            heading='Explore federal programs that address homelessness'
            body='On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With our visualizations, you can see which federal programs are addressing homelessness, the amount of federal spending on homelessness by region, and where individuals experiencing homelessness are located. We also provide information about which regions are similar to others based on their homeless populations and funding profiles.'
            mobileBody='On a single night in 2018, more than 550,000 people experienced homelessness in the United States. With our visualization you can explore federal spending on programs that address homelessness and where individuals experiencing homeless are located.'
          />
        </Grid>
      </Grid>

      <div className={homeStyles.featuredRow}>
        <FeatureRow
          href='colleges-and-universities'
          heading='Colleges & Universities'
          title='Federal Investment in Higher Education'
          blurb='The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and universities through grants, contracts, and student aid. This interactive analysis gives you an opportunity to search schools and discover how much the government has invested in that institution. In the visualizations you can also break down the investment by federal agency and view data by investment category.'
          imgSrc={cu}
          imgAlt='A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively.'
        />
      </div>

      <div className={homeStyles.resourceRow}>
        <ResourcesRow />
      </div>
    </Home>
  );
}

export default IndexPage;
