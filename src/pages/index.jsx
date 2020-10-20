import React from 'react';
import { Grid } from '@material-ui/core';

import DtsTile from 'src/page-sections/home/dts-tile/dts-tile';
import FeatureRow from 'src/page-sections/home/feature-row/feature-row';
import FeatureTile from 'src/page-sections/home/feature-tile/feature-tile';
import Home from 'src/components/layouts/home/home';
import MoreAnalysesTiles from 'src/page-sections/home/more-analyses-tiles/more-analyses-tiles';
import ResourcesRow from 'src/page-sections/home/resources-row/resources-row';
import SecondaryTile from 'src/page-sections/home/secondary-tile/stacked-layout/secondary-tile';
import SEO from 'src/components/seo';

import afg from 'src/images/home/afg-feature-module.png';
import covid from 'src/images/home/homepage-covid-image.jpg';
import cu from 'src/images/home/collegehomepage.svg';
import homelessImg from 'src/images/home/homelessness.png';
import explorer from 'src/images/home/contractexplorersunburst.png';
import homeStyles from './index.module.scss';
import CovidCopy from 'src/page-sections/federal-covid-funding/_data/covidcopy_yaml_2020-09-22.yml';

function IndexPage(props) {
	console.log(props);

  return (
    <Home>
      <SEO
        title="Data Lab - U.S. Treasury"
        description="The Data Lab is a U.S. Treasury Department website of topic-based analyses and visualizations to help the public understand government spending."
        keywords={[
	  'Federal spending',
	  'data',
	  'visualizations',
	  'contracts',
	  'accounts',
	  'grants',
	  'federal programs',
	  'federal financial data',
	  'government spending',
	  'government programs',
	  'government contracts',
	]}
      />
      <Grid
        container
        spacing={3}
        justify="center"
        className={homeStyles.featuredTileRow}
      >
	<Grid item md={12} lg={8} className={homeStyles.featuredTile}>
	  <FeatureTile
            href="americas-finance-guide"
            imgSrc={afg}
            isMain
            imgAlt="Illustration of finance icons: dollar bill, bag of money, etc. with the text ‘Answer all your questions about federal government finance.” overlaid."
            heading="Your Guide to America's Finances"
            body={`Your Guide to America's Finances is an overview of U.S. government finances for 2020. Here you’ll find information on spending, revenue, the deficit, and debt. The Guide presents a series of interactive visualizations exploring each category and how it has changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of dollars collected and spent by the federal government each year.`}
						mobileBody={[<><p>Your guide to understanding the trillions of dollars that make up the federal <a href='/?glossary=budget_function'>balance sheet</a>. Our interactive visualizations walk you through federal spending, revenue, the deficit, and debt.</p></>]}
	  />
	</Grid>
	<Grid item md={12} lg={4}>
	  <DtsTile
            href="dts"
            heading="Visualizing the Daily Treasury Statement"
            title="How much does the federal government spend each day?"
	  />
	  <Grid item>
	    <SecondaryTile
              heading="The Federal Response to COVID-19"
              subheading="How much does the government spend and collect?"
              href="federal-covid-funding"
              imgSrc={covid}
              imgAlt="Woman standing with medical face mask on, social distanced between two others, with a cartoon image of the U.S. Capitol in the background."
              body="Follow along as Data Lab tracks the flow of funding from four emergency laws for COVID-19. As of July 1, government agencies have reported $1.3 trillion in spending."
							newFlag
	    />
	  </Grid>
	</Grid>
      </Grid>

      {/* The more analyses is outside of the more analyses section on purpose */}
      <Grid item xs={12}>
	<p className={homeStyles.heading}>More Analyses</p>
      </Grid>

      <Grid container spacing={3} className={homeStyles.moreAnalysesRow}>
	<Grid item md={12} lg={6}>
	  <MoreAnalysesTiles />
	</Grid>
	<Grid item md={12} lg={6} className={homeStyles.featuredTile}>
	  <FeatureTile
            href="colleges-and-universities"
            imgSrc={cu}
            imgAlt="A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively."
            heading="Federal Investment in Higher Education"
            body="The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and universities through grants, contracts, and student aid. This interactive analysis gives you an opportunity to search schools and discover how much the government has invested in that institution. In the visualizations you can also break down the investment by federal agency and view data by investment category."
            mobileBody="The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and universities. Dive in and search by individual schools, federal agencies, or investment categories!"
	  />
	</Grid>
      </Grid>

      <div className={homeStyles.featuredRow}>
	<FeatureRow
          href="contract-explorer"
          heading="Contract Explorer"
          title="Who receives federal contracts?"
          blurb="Ever wonder who's getting federal contracts and what agencies are awarding them? This tool lets you explore contract-related information for FY18, including which organizations received federal contracts, contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government."
          imgSrc={explorer}
          imgAlt="A picture of a microscope with a sunburst image overlaid."
	/>
      </div>

      <div className={homeStyles.resourceRow}>
				<ResourcesRow />
      </div>
    </Home>
  );
}

export default IndexPage;
