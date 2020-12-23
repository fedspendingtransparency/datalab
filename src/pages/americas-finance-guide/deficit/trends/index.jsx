import "src/styles/afg/cg.scss"
import "src/styles/afg/trendsCommon.scss"
import "src/page-sections/afg-deficit/trends/deficit-trends.scss"

import React from "react"
import SEO from "src/components/seo"
import AfgData from "../../../../../static/americas-finance-guide/_data/object_mapping.yml"
import AccordionList from "src/components/accordion-list/accordion-list"
import ControlBar from "src/components/control-bar/control-bar"
import Share from "src/components/share/share"
import Tabs from "src/components/afg-tabs/tabs"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Og from "../../../../components/og-tag/og"
import AfgLayout from "../../../../components/layouts/afg/afg"

function DeficitTrendsPage(props) {
	const tabContainer = "#surplusComponent",
		config = {
			accessibilityAttributes: {
				title: `${AfgData.current_fy.value} Federal Deficit Trends over Time`,
				desc: `Since ${AfgData.last_surplus.value}, the federal government has not had another surplus. The annual deficit has grown each year to ${AfgData.current_fy_deficit_short.value}  in ${AfgData.current_fy.value}.`,
			},
			tabs: [
				{
					name: "Surplus",
					selector: ".deficit--surplus__surplus",
				},
				{
					name: "Balanced Budget",
					selector: ".deficit--surplus__balanced",
				},
				{
					name: "Deficit",
					selector: ".deficit--surplus__deficit",
				},
			],
			selectedTabIdx: 0,
		}

	return (
		<>
			<Tabs tabContainer={tabContainer} config={config} />

			<SEO
				title="Data Lab - Federal Deficit Trends – U.S. Treasury"
				description="The federal government has run deficits for the last 18 years. A deficit occurs when the government spends more money than it collects."
				excerpt="The U.S. has experienced a deficit each year since 2001. Beginning in 2016, increases in spending on Social Security, health care, and interest on federal debt have outpaced the growth of federal revenue."
				keywords={[
					`Deficit, surplus, national deficit, debt, national debt, federal deficit, U.S. deficit, spending, revenue, money going out, money coming in, debtdeficit vs. debt, deficit trends, balanced budget`,
				]}
			/>

			<Og
				socialMediaImage={
					"/americas-finance-guide/images/social-share/social-media-share-deficit.jpg"
				}
			/>

			<AfgLayout location={props.location} chapter={"deficit"}>
				<div className="cg-wrapper trends-common-wrapper deficit-trends-wrapper">
					<ControlBar>
						<Share
							location={props.location}
							title="Data Lab - Federal Deficit Trends – U.S. Treasury"
							twitter="How has the federal deficit changed over the past few years? Check out Your Guide to America’s Finances for federal deficit trends and to download .CSV files of the data. #YourGuide #DataLab #OpenGov"
						/>
					</ControlBar>

					<h1>Federal Deficit Trends Over Time</h1>

					<img
						className="deficit-trend"
						src="/americas-finance-guide/images/deficit-trends-viz.svg"
						alt={`Since the government spent ${AfgData.current_fy_spending_short.value} and collected ${AfgData.current_fy_revenue_short.value} in ${AfgData.current_fy.value}, the deficit for the year was ${AfgData.current_fy_deficit_short.value}.`}
					/>

					<aside className="deficit-aside">
						<p>
							Since {AfgData.last_surplus.value}, the U.S. has experienced a
							deficit each year. Beginning in 2016, increases in spending on
							Social Security, health care, and interest on federal debt have
							outpaced the growth of federal revenue.
						</p>
						<p>
							In {AfgData.current_fy.value}, federal spending increased in
							response to the COVID-19 pandemic. Visit our{" "}
							<a href={"/federal-covid-funding/"} rel="noopener noreferrer">
								The Federal Response to COVID-19
							</a>{" "}
							analysis to learn more.
						</p>
						<p>
							If you are interested in learning more and seeing how the federal
							spending and debt have changed over time, you can view the{" "}
							<a
								href={
									"https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding"
								}
								rel="noopener noreferrer"
								target="_blank">
								Historical Debt Outstanding
							</a>{" "}
							dataset to see outstanding debt from 1789 to the current year.
						</p>

						<section className="accordion">
							<AccordionList
								title="What does it mean when there is a surplus, balanced budget, and deficit?"
								className="accordion__heading">
								<div className="accordion__content">
									<div id="surplusComponent">
										<div className="deficit--surplus__component--content deficit--surplus__surplus">
											<img
												className="deficit__tabs-image"
												src="/americas-finance-guide/images/surplus.svg"
												alt=""
												role="presentation"></img>
											A surplus occurs when the government collects more money
											than it spends. The last surplus for the federal
											government was in {AfgData.last_surplus.value}.
										</div>
										<div className="deficit--surplus__component--content deficit--surplus__balanced">
											<img
												className="deficit__tabs-image"
												src="/americas-finance-guide/images/balanceBudget.svg"
												alt=""
												role="presentation"></img>
											A balanced budget occurs when the amount the government
											spends equals the amount the government collects.
											Sometimes the term balanced budget is used more broadly to
											refer to instances where there is no deficit.
										</div>
										<div className="deficit--surplus__component--content deficit--surplus__deficit">
											<img
												className="deficit__tabs-image"
												src="/americas-finance-guide/images/deficit.svg"
												alt=""
												role="presentation"></img>
											A deficit occurs when the government spends more money
											than it collects. The federal government has run deficits
											for the last {AfgData.consecutive_deficits.value} years.
										</div>
									</div>
								</div>
							</AccordionList>
						</section>

						<section className="tour">
							<div className="tour__part-one">
								<h1>
									How does the deficit in the United States compare to other
									countries?
								</h1>
								<p>
									When you are done here, see how the U.S. deficit compares to
									other countries.
								</p>
							</div>
							<a
								href="/americas-finance-guide/deficit/country-comparison/"
								className="tour__link">
								Continue
								<FontAwesomeIcon
									icon={faAngleRight}
									width={7}
									className="fa fa-angle-right"
								/>
							</a>
						</section>
					</aside>

					<div className="clearfix"></div>

					<section className="hwcta deficit-trends__hwcta">
						<AccordionList title="Data Sources and Methodology">
							<p>
								The visualization was created using the{" "}
								<a
									href={AfgData.mts_homepage.value}
									rel="noopener noreferrer"
									target="_blank">
									Monthly Treasury Statement (MTS)
								</a>{" "}
								as the data source for federal government revenue and spending
								of the United States.
							</p>
							<div className="afg__download--div">
								<div className="afg__download--heading">
									Download Source Data
								</div>
								<ul>
									<li>
										<a
											href="/americas-finance-guide/data/federal_deficit_trends.csv"
											download="federal_deficit_trends.csv">
											federal_deficit_trends.csv
										</a>
									</li>
								</ul>
							</div>
						</AccordionList>
					</section>
				</div>
			</AfgLayout>
		</>
	)
}

export default DeficitTrendsPage
