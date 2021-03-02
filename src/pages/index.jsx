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

import afg from 'src/images/home/AFG_Desktop.webp';
import afgFallback from 'src/images/home/AFG_Desktop.png';

import covid from 'src/images/home/covid.webp';
import covidFallback from 'src/images/home/covid.png';

import rd from 'src/images/home/RD-Homepage-cut.webp';
import rdFallback from 'src/images/home/R&D-Homepage-cut.png';

import explorer from 'src/images/home/contractexplorersunburst.webp';
import explorerFallback from 'src/images/home/contractexplorersunburst.png';

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
						href="/rd-in-contracting/"
						imgSrc={rd}
						imgSrcFallBack={rdFallback}
						isMain
						imgAlt="Abstract Brain with 4 categories: Aeronautics, Infectious Disease, Renewable Energy & Anti-Terrorism. This analysis shows federal R&D funding in 2020."
						width="748"
						height="504"
						heading="Research & Development in Contracting"
						body={[
							<p>
								R&D is often associated with the private sector, but in 2020 the federal
								government backed more than $47 billion in research initiatives through
								contracts. Our analysis looks at the top agencies by R&D contract
								funding and where the money is going. See how categories such as energy,
								education, and space flight stack up and how R&D funding has trended
								over the last decade.
							</p>,
						]}
						mobileBody={[
							<>
								<p>
									R&D is often associated with the private sector, but in 2020 the
									government backed more than $47B in research contracts. Our analysis
									looks at the top agencies by contract funding and where it went.
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
							href="/federal-covid-funding/"
							imgSrc={covid}
							imgSrcFallBack={covidFallback}
							imgAlt="Woman standing with medical face mask on, social distanced between two others, with a cartoon image of the U.S. Capitol in the background."
							width="364"
							height="258"
							heading="The Federal Response to COVID-19"
							subheading="How is the federal government funding relief efforts for COVID-19?"
							body={[
								<>
									<p>
										Follow along as Data Lab tracks the flow of four emergency funding
										laws for COVID-19.
									</p>
								</>,
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
						href="/americas-finance-guide/"
						imgSrc={afg}
						imgSrcFallBack={afgFallback}
						imgAlt="Illustration of finance icons: dollar bill, bag of money, etc. with the text ‘Answer all your questions about federal government finance.” overlaid."
						width="358"
						height="255"
						heading="Your Guide to America's Finances"
						body={[
							<p>
								Your Guide to America's Finances is an overview of U.S. government
								finances for 2020. Here you’ll find information on spending, revenue,
								the deficit, and debt. The Guide presents a series of interactive
								visualizations exploring each category and how it has changed over time.
								Ultimately, the Guide seeks to provide a comprehensive overview of the
								trillions of dollars collected and spent by the federal government each
								year.
							</p>,
						]}
						mobileBody={[
							<p>
								Your guide to understanding the trillions of dollars that make up the
								federal <a href="?glossary=balance_sheet">balance sheet</a>. Our
								interactive visualizations walk you through federal spending, revenue,
								the deficit, and debt.
							</p>,
						]}
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
					imgSrcFallBack={explorerFallback}
					imgAlt="A picture of a microscope with a sunburst image overlaid."
					width="554"
					height="335"
				/>
			</div>

			<div className={homeStyles.resourceRow}>
				<ResourcesRow />
			</div>
		</Home>
	);
}

export default IndexPage;
