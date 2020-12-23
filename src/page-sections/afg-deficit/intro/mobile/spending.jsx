import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"

import { establishContainer, findAmountInCsv } from "src/afg-helpers/utils"
import { resetForResizeMobile } from "src/afg-helpers/dots/revenue-and-spending/compareManager"
import colors from "src/styles/afg/colors.scss"
import AfgData from "../../../../../static/americas-finance-guide/_data/object_mapping.yml"
import DeficitData from "../../../../../static/americas-finance-guide/data/explore_federal_deficit.csv"

import { setChartWidth } from "../helpers/widthManager"
import { dotsPerRow, setDotsPerRow } from "../helpers/dotConstants"
import { initMobileLegend } from "../helpers/legend"
import createMobileSpendingViz from "../helpers/createMobileSpendingViz"

const SpendingTab = () => {
	const config = {
		anecdoteName: "anecdote-deficit.svg",
		revenueAmount: findAmountInCsv("federal revenue", DeficitData),
		spendingAmount: findAmountInCsv("federal spending", DeficitData),
		debtBalance: findAmountInCsv("federal debt", DeficitData),
		deficitAmount: Math.abs(findAmountInCsv("federal deficit", DeficitData)),
		reportedDeficitAmount: findAmountInCsv("federal deficit", DeficitData),
		compareString: "revenue",
		revenueColor: "#B9C0CB",
		spendingColor: "#BCD7D3",
		deficitColor: colors.colorDeficitPrimary,
		debtColor: colors.colorDebtPrimary,
		accessibilityAttrs: {
			title: `${AfgData.current_fy.value} Federal Deficit, Revenue, and Spending`,
			desc: `In ${AfgData.current_fy.value}, the ${AfgData.current_fy_spending_short.value} in federal spending exceeded ${AfgData.current_fy_revenue_short.value} in federal revenue leading to a deficit of ${AfgData.current_fy_deficit_short.value}.`,
		},
	}

	let chartHeight
	let dotsHeight

	const setMainContainer = () => {
		const count = config.deficitAmount / 10000000000
		const rows = Math.ceil(count / dotsPerRow)
		dotsHeight = rows * 5

		const spendingCount = config.spendingAmount / 10000000000
		const spendingRows = Math.ceil(spendingCount / dotsPerRow)
		chartHeight = spendingRows * 5 + 35

		const mainContainer = establishContainer(
			chartHeight,
			window.innerWidth - 30,
			config.accessibilityAttrs
		)
			.append("g")
			.classed("main", true)
		config.mainContainer = mainContainer
	}

	const init = () => {
		setChartWidth()
		setDotsPerRow(window.innerWidth * 0.25)
		setMainContainer()
		initMobileLegend(config)
		createMobileSpendingViz(
			config,
			chartHeight,
			window.innerWidth - 30,
			dotsHeight
		)
	}

	useEffect(() => {
		init()

		const resetAndInit = () => {
			resetForResizeMobile()

			if (window.innerWidth < 960) {
				init()
			}
		}

		window.addEventListener("resize", resetAndInit)
		return () => {
			window.removeEventListener("resize", resetAndInit)
		}
	}, [])

	return (
		<>
			<div className="deficit-tab-viz">
				<div id="viz" />
				<div className="intro-math" style={{ marginTop: 25 }}>
					<FontAwesomeIcon
						icon={faReply}
						className="fas fa-reply intro-math__icon"
					/>
					{AfgData.dot_number_deficit_mobile.value} dots x{" "}
					{AfgData.dot_represents_mobile.value} ={" "}
					<strong>{AfgData.current_fy_deficit.value}</strong>
				</div>
			</div>
			<div className="deficit-tab-text">
				When spending exceeds revenue, the difference is a deficit, which the
				federal government finances mainly by borrowing from the public.
			</div>
			<div className="deficit-tab-main-text">
				How did we end up with a deficit? A deficit occurs when the money going
				out exceeds the money coming in. Since the federal government spent{" "}
				{AfgData.current_fy_spending.value} and collected{" "}
				{AfgData.current_fy_revenue.value} in {AfgData.current_fy.value}, the
				government ran a deficit for the year.
			</div>
		</>
	)
}

export default SpendingTab
