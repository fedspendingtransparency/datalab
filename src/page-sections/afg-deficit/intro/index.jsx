import React, { useEffect } from 'react';
import {
	establishContainer,
	findAmountInCsv,
	isMobileDevice,
} from 'src/afg-helpers/utils';
import { createLayers } from './helpers/createLayers';
import { startLegendAnimation } from './helpers/legend';
import { setChartWidth } from './helpers/widthManager';
import colors from '../../../styles/afg/colors.scss';
import { setDotsPerRow } from './helpers/dotConstants';
import { layersInit, resetLayers } from './helpers/manageLayers';
import 'src/afg-helpers/matchesPolyfill';
import DeficitData from '../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const DeficitIntro = () => {
	const defaultDesc = isMobileDevice()
		? `The image illustrates the federal government’s deficit in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents_mobile.value}. There are Federal Revenue and GDP dots.`
		: `The image illustrates the federal government’s deficit in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents.value}.`;
	const config = {
		anecdoteName: 'anecdote-deficit.svg',
		revenueAmount: findAmountInCsv('federal revenue', DeficitData),
		spendingAmount: findAmountInCsv('federal spending', DeficitData),
		debtBalance: findAmountInCsv('federal debt', DeficitData),
		reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
		deficitAmount: Math.abs(findAmountInCsv('federal deficit', DeficitData)),
		compareString: 'revenue',
		revenueColor: colors.colorPrimary,
		spendingColor: colors.colorSpendingPrimary,
		deficitColor: colors.colorDeficitPrimary,
		debtColor: colors.colorDebtPrimary,
		accessibilityAttrs: {
			default: {
				title: `${AfgData.current_fy.value} Federal Deficit`,
				desc: defaultDesc,
			},
			debt: {
				title: `${AfgData.current_fy.value} Federal Deficit and Debt`,
				desc: `The ${AfgData.current_fy_deficit_short.value} deficit contributed to the ${AfgData.added_debt_short.value} increase in debt from ${AfgData.prior_fy_debt.value} at the end of ${AfgData.prior_fy.value} to ${AfgData.current_fy_debt_short.value} by the end of ${AfgData.current_fy.value}.`,
			},
			deficit: {
				title: `${AfgData.current_fy.value} Federal Deficit, Revenue, and Spending`,
				desc: `In ${AfgData.current_fy.value}, the ${AfgData.current_fy_spending_short.value} in federal spending exceeded ${AfgData.current_fy_revenue_short.value} in federal revenue leading to a deficit of ${AfgData.current_fy_deficit_short.value}.`,
			},
		},
	};

	let mainContainer;
	let debounce;
	let previousWidth;

	// the math needs to be precise for the chart to work - no rounding
	config.deficitAmount = config.spendingAmount - config.revenueAmount;
	config.priorDebtBalance = config.debtBalance - config.deficitAmount;

	function setMainContainer() {
		mainContainer = establishContainer(
			300,
			null,
			config.accessibilityAttrs.default
		)
			.append('g')
			.classed('main', true);
		config.mainContainer = mainContainer;
	}

	useEffect(() => {
		setChartWidth();
		setMainContainer();
		setDotsPerRow();
		startLegendAnimation(config);
		createLayers(config);

		setTimeout(() => {
			layersInit(config);
		}, 4500);
	}, []);

	function resizeChart() {
		setChartWidth();
		setDotsPerRow();
		config.mainContainer.selectAll('*').remove();
		createLayers(config);
		layersInit(config);
		resetLayers();
	}

	useEffect(() => {
		const handleResize = () => {
			if (debounce) {
				clearTimeout(debounce);
			}

			if (previousWidth === window.innerWidth) {
				return;
			}

			previousWidth = window.innerWidth;

			debounce = setTimeout(resizeChart, 100);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return <div id="viz" />;
};

export default DeficitIntro;
