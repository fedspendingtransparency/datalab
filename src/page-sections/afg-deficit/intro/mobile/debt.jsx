import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

import { establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import { resetForResizeMobile } from 'src/afg-helpers/dots/revenue-and-spending/compareManager';
import colors from 'src/styles/afg/colors.scss';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import DeficitData from '../../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';

import { setChartWidth } from '../helpers/widthManager';
import { dotsPerRow, setDotsPerRow } from '../helpers/dotConstants';
import { initMobileLegend } from '../helpers/legend';
import createMobileDebtViz from '../helpers/createMobileDebtViz';

const DebtTab = () => {
	const config = {
		anecdoteName: 'anecdote-deficit.svg',
		revenueAmount: findAmountInCsv('federal revenue', DeficitData),
		spendingAmount: findAmountInCsv('federal spending', DeficitData),
		debtBalance: findAmountInCsv('federal debt', DeficitData),
		deficitAmount: Math.abs(findAmountInCsv('federal deficit', DeficitData)),
		reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
		compareString: 'revenue',
		revenueColor: '#B9C0CB',
		spendingColor: '#BCD7D3',
		deficitColor: colors.colorDeficitPrimary,
		debtColor: colors.colorDebtPrimary,
		federalDebtColor: '#EEE9F1',
		priorYearDebtColor: '#CFC0D8',
		accessibilityAttrs: {
			title: `${AfgData.current_fy.value} Federal Deficit and Debt`,
			desc: `The ${AfgData.current_fy_deficit_short.value} deficit contributed to the ${AfgData.added_debt_short.value} increase in debt from ${AfgData.prior_fy_debt.value} at the end of ${AfgData.prior_fy.value} to ${AfgData.current_fy_debt_short.value} by the end of ${AfgData.current_fy.value}`,
		},
	};

	let chartHeight;
	let dotsHeight;

	const setMainContainer = () => {
		const count = config.deficitAmount / 10000000000;
		const rows = Math.ceil(count / dotsPerRow);
		dotsHeight = rows * 5;

		const debtCount = config.debtBalance / 10000000000;
		const debtRows = Math.ceil(debtCount / dotsPerRow);
		chartHeight = debtRows * 5 + 35;

		const mainContainer = establishContainer(
			chartHeight,
			window.innerWidth - 30,
			config.accessibilityAttrs
		)
			.append('g')
			.classed('main', true);
		config.mainContainer = mainContainer;
	};

	const init = () => {
		setChartWidth();
		setDotsPerRow((window.innerWidth - 30) * 0.7);
		setMainContainer();
		initMobileLegend(config, true);
		createMobileDebtViz(config, chartHeight, window.innerWidth - 30, dotsHeight);
	};

	useEffect(() => {
		init();

		const resetAndInit = () => {
			resetForResizeMobile();

			if (window.innerWidth < 960) {
				init();
			}
		};

		window.addEventListener('resize', resetAndInit);
		return () => {
			window.removeEventListener('resize', resetAndInit);
		};
	}, []);

	return (
		<>
			<div className="deficit-tab-viz">
				<div id="viz" />
				<div className="intro-math" style={{ marginTop: 15 }}>
					<FontAwesomeIcon
						icon={faReply}
						className="fas fa-reply intro-math__icon"
					/>
					{AfgData.dot_number_deficit_mobile.value} dots x{' '}
					{AfgData.dot_represents_mobile.value} ={' '}
					<strong>{AfgData.current_fy_deficit.value}</strong>
				</div>
			</div>
			<div className="deficit-tab-text">
				To pay for a deficit, the government takes on debt. The total debt that the
				government owes is essentially the accumulation of deficits over time, minus
				repayments of debt.
				<div className="deficit-tab-subtext">
					*The {AfgData.added_debt_short.value} increase in federal debt actually
					consists of the {AfgData.current_fy_deficit_short.value} deficit along with
					changes to operating cash balance, intergovernmental holdings, and other
					financial activities. In the visualization, the operating cash balance,
					intergovernmental holdings, and other financial activities were combined
					with the prior year debt balance for simplicity.
				</div>
			</div>
			<div className="deficit-tab-main-text">
				How did we end up with a deficit? A deficit occurs when the money going out
				exceeds the money coming in. Since the federal government spent{' '}
				{AfgData.current_fy_spending.value} and collected{' '}
				{AfgData.current_fy_revenue.value} in {AfgData.current_fy.value}, the
				government ran a deficit for the year.
			</div>
		</>
	);
};

export default DebtTab;
