import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply';

import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import DeficitData from '../../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';

import { establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import { resetForResizeMobile } from 'src/afg-helpers/dots/revenue-and-spending/compareManager';
import { setChartWidth } from '../helpers/widthManager';
import { dotsPerRow, setDotsPerRow } from '../helpers/dotConstants';
import { createMobileLayers } from '../helpers/createLayers';
import colors from 'src/styles/afg/colors.scss';
import { initMobileLegend } from '../helpers/legend';

const DeficitTab = () => {
	const config = {
		anecdoteName: 'anecdote-deficit.svg',
		revenueAmount: findAmountInCsv('federal revenue', DeficitData),
		spendingAmount: findAmountInCsv('federal spending', DeficitData),
		debtBalance: findAmountInCsv('federal debt', DeficitData),
		deficitAmount: Math.abs(findAmountInCsv('federal deficit', DeficitData)),
		reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
		compareString: 'revenue',
		revenueColor: colors.colorPrimary,
		spendingColor: colors.colorSpendingPrimary,
		deficitColor: colors.colorDeficitPrimary,
		debtColor: colors.colorDebtPrimary,
		accessibilityAttrs: {
			title: `${AfgData.current_fy.value} Federal Deficit`,
			desc: `The image illustrates the federal government’s deficit in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents_mobile.value}. There are Federal Revenue and GDP dots.`,
		},
	};

	const setMainContainer = () => {
		const count = config.deficitAmount / 10000000000;
		const rows = Math.ceil(count / dotsPerRow);
		const chartHeight = rows * 5 + 45;

		const mainContainer = establishContainer(
			chartHeight,
			null,
			config.accessibilityAttrs
		)
			.append('g')
			.classed('main', true);
		config.mainContainer = mainContainer;
	};

	const init = () => {
		setChartWidth(0.7);
		setDotsPerRow();
		setMainContainer();
		initMobileLegend(config);
		createMobileLayers(config);
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
				<div className="intro-math">
					<FontAwesomeIcon
						icon={faReply}
						className="fas fa-reply intro-math__icon"
					/>
					{AfgData.dot_number_deficit_mobile.value} dots x{' '}
					{AfgData.dot_represents_mobile.value} ={' '}
					<strong>{AfgData.current_fy_deficit.value}</strong>
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

export default DeficitTab;
