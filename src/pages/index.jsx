import React from 'react';
import Grid from '@material-ui/core/Grid';

import DtsTile from 'src/page-sections/home/dts-tile/dts-tile';
import FeatureRow from 'src/page-sections/home/feature-row/feature-row';
import FeatureTile from 'src/page-sections/home/feature-tile/feature-tile';
import Home from 'src/components/layouts/home/home';
import MoreAnalysesTiles from 'src/page-sections/home/more-analyses-tiles/more-analyses-tiles';
import ResourcesRow from 'src/page-sections/home/resources-row/resources-row';
import SecondaryTile from 'src/page-sections/home/secondary-tile/stacked-layout/secondary-tile';
import SEO from 'src/components/seo';

import afg from 'src/images/home/AFG_Desktop.png';
import covid from 'src/images/home/covid.png';
import cu from 'src/images/home/collegehomepage.svg';
import explorer from 'src/images/home/contractexplorersunburst.png';
import homeStyles from './index.module.scss';
import { Helmet } from 'react-helmet';

function IndexPage(props) {
	return (
		<Home>
			<Helmet>
				<link rel="canonical" href="https://datalab.usaspending.gov" />
			</Helmet>
			<SEO
				title="Data Lab - Federal Finance Data Visualizations"
				description="Data Lab, a U.S. Treasury website, presents topic-based analyses and visualizations to help you understand government finance. Data Lab’s mission is to provide open data on federal spending to promote government transparency."
			/>
			<Grid
				container
				spacing={3}
				justify="center"
				className={homeStyles.featuredTileRow}>
				<Grid item md={12} lg={8} className={homeStyles.featuredTile}>
					<FeatureTile
						href="/federal-covid-funding/"
						imgSrc={covid}
						isMain
						imgAlt="Woman standing with medical face mask on, social distanced between two others, with a cartoon image of the U.S. Capitol in the background."
						heading="The Federal Response to COVID-19"
						body="How is the federal government funding relief efforts for COVID-19?
To aid the nation’s recovery from the COVID-19 pandemic, the U.S. Congress passed five special appropriations laws, which provide multiple forms of financial relief through agency spending, tax relief, and lending. In this analysis, we break down how the funding provides financial relief, explain the process of how the money moves from legislation to the American people, and track the progress of spending."
						mobileBody={[
							<>
								<p>
									Follow along as Data Lab tracks the flow of four emergency funding laws for COVID-19.
								</p>
							</>,
						]}
					/>
				</Grid>
				<Grid item md={12} lg={4}>
					<DtsTile
						href="/dts/"
						heading="Visualizing the Daily Treasury Statement"
						title="How much does the federal government spend each day?"
					/>
					<Grid item>
						<SecondaryTile
							href="/americas-finance-guide/"
							imgSrc={afg}
							imgAlt="Illustration of finance icons: dollar bill, bag of money, etc. with the text ‘Answer all your questions about federal government finance.” overlaid."
							heading="Your Guide to America's Finances"
							subheading="How much does the government spend and collect?"
							body={[
								<>
									<p>
										Your guide to understanding the trillions of dollars that make up the federal <a href="?glossary=balance_sheet">balance sheet</a>. Our interactive visualizations walk you through federal spending, revenue, the deficit, and debt.
									</p>
								</>
							]}
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
						href="/colleges-and-universities/"
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
					href="/contract-explorer/"
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
