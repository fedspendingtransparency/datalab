import React, { useEffect } from 'react';
import { createLayers } from './createLayers';
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator, findAmountInCsv } from 'src/utils/utils';
import colors from '../../../styles/afg/colors.scss';
import { setDotsPerRow } from './dotConstants';
import { layersInit, resetLayers } from './manageLayers';
import 'src/utils/matchesPolyfill';
import DeficitData from '../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';

const DeficitIntro = () => {
	const config = {
		anecdoteName: 'anecdote-deficit.svg',
		revenueAmount: findAmountInCsv('federal revenue', DeficitData),
		spendingAmount: findAmountInCsv('federal spending', DeficitData),
		debtBalance: findAmountInCsv('federal debt', DeficitData),
		reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
		compareString: 'revenue',
		revenueColor: colors.colorPrimary,
		spendingColor: colors.colorSpendingPrimary,
		deficitColor: colors.colorDeficitPrimary,
		debtColor: colors.colorDebtPrimary,
		accessibilityAttrs: {
			default: {
				title: '2019 Federal Deficit',
				desc: 'The image illustrates the federal government’s deficit in 2019 using dots, and each dot is equal to a billion dollars. There are 984 dots.',
			},
			debt: {
				title: '2019 Federal Deficit and Debt',
				desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
			},
			deficit: {
				title: '2019 Federal Deficit, Revenue, and Spending',
				desc: 'A deficit occurs when spending exceeds revenue. For 2019, the $4.4 trillion in federal spending exceeded the $3.5 trillion in federal revenue leading to a deficit of $984 billion.',
			},
		},
	};

	let mainContainer; let debounce; let
		previousWidth;

	// the math needs to be precise for the chart to work - no rounding
	config.deficitAmount = config.spendingAmount - config.revenueAmount;
	config.priorDebtBalance = config.debtBalance - config.deficitAmount;

	function setMainContainer() {
		mainContainer = establishContainer(300, null, config.accessibilityAttrs.default).append('g')
			.classed('main', true);

		config.mainContainer = mainContainer;
	}

	function legendCallback() {

	}

	useEffect(() => {
		setChartWidth();
		setMainContainer();
		setDotsPerRow();
		startLegendAnimation(config, legendCallback);
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
		window.addEventListener('resize', () => {
			if (debounce) {
				clearTimeout(debounce);
			}

			if (previousWidth === window.innerWidth) {
				return;
			}

			previousWidth = window.innerWidth;

			debounce = setTimeout(resizeChart, 100);
		});

		return (_) => {
			window.removeEventListener('resize', () => {
				if (debounce) {
					clearTimeout(debounce);
				}

				if (previousWidth === window.innerWidth) {
					return;
				}

				previousWidth = window.innerWidth;

				debounce = setTimeout(resizeChart, 100);
			});
		};
	});


	return (<div id="viz" />);
};

export default DeficitIntro;