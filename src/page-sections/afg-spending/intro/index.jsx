import React, { useEffect, useState } from 'react';
import { findAmountInCsv, isMobileDevice } from 'src/afg-helpers/utils';
import {
	initChart,
	initChartMobile,
} from '../../../afg-helpers/dots/revenue-and-spending/init';
import colors from '../../../styles/afg/colors.scss';
import SpendingData from '../../../../static/americas-finance-guide/data/federal_spending_gdp.csv';
import {
	resetForResize,
	setFactsTrigger,
	toggleFactsMobile,
	toggleSelectedFacts,
} from '../../../afg-helpers/dots/revenue-and-spending/compareManager';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

export default function SpendingIntro({ selection }) {
	const defaultDesc = isMobileDevice()
		? `The image illustrates federal spending in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents_mobile.value}. There are ${AfgData.dot_number_spending.value} dots.`
		: `The image illustrates federal spending in ${AfgData.current_fy.value} using dots, and each dot is equal to ${AfgData.dot_represents.value}. There are ${AfgData.dot_number_spending.value} dots.`;
	const revenueDesc = isMobileDevice()
		? `${AfgData.current_fy.value} Federal spending using dots, each dot totaling ${AfgData.dot_represents_mobile.value}, with federal revenue box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value} deficit.`
		: `${AfgData.current_fy.value} Federal spending using dots, each dot totaling ${AfgData.dot_represents.value}, with federal revenue box overlaying the dots, representing a ${AfgData.current_fy_deficit_short.value} deficit.`;
	const config = {
		anecdoteName: 'anecdote-spending.svg',
		comparisonAmount: findAmountInCsv('federal revenue', SpendingData),
		compareString: 'revenue',
		gdpAmount: findAmountInCsv('gdp', SpendingData),
		gdpPercent:
			findAmountInCsv('federal spending percent of gdp', SpendingData) * 100,
		sectionAmount: findAmountInCsv('federal spending', SpendingData),
		comparisonColor: colors.revenuePrimary,
		sectionColor: colors.colorSpendingPrimary,
		sectionName: 'spending',
		accessibilityAttrs: {
			default: {
				title: `${AfgData.current_fy.value} Federal Spending`,
				desc: defaultDesc,
			},
			gdp: {
				title: `${AfgData.current_fy.value} Federal Spending and GDP`,
				desc: `The U.S. economy, as measured by GDP, produced ${AfgData.current_fy_gdp.value} worth of goods and services. In ${AfgData.current_fy.value}, federal spending was equivalent to ${AfgData.spending_percent_gdp.value} of GDP.`,
			},
			revenue: {
				title: `${AfgData.current_fy.value} Federal Spending and Revenue`,
				desc: revenueDesc,
			},
		},
	};

	const [hasDotScale, setHasDotScale] = useState(false);
	let debounce;
	let previousWidth;

	function resizeChart() {
		resetForResize();
		initChartMobile(config, selection);

		if (isMobileDevice()) {
			toggleFactsMobile(selection);
		} else {
			setFactsTrigger();

			if (selection) {
				toggleSelectedFacts(selection);
			} else {
				setHasDotScale(true);
			}
		}
	}

	useEffect(() => {
		resetForResize();
		if (isMobileDevice()) {
			initChartMobile(config, selection);
			toggleFactsMobile(selection);
		} else if (selection) {
			initChartMobile(config);
			setFactsTrigger();
			toggleSelectedFacts(selection);
		} else {
			initChart(config, selection);
			setFactsTrigger();
			setHasDotScale(true);
		}
	}, []);

	useEffect(() => {
		const resizeHandler = () => {
			if (debounce) {
				clearTimeout(debounce);
			}

			if (previousWidth === window.innerWidth) {
				return;
			}

			previousWidth = window.innerWidth;

			debounce = setTimeout(resizeChart, 100);
		};

		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	});

	const topLegend = () => {
		let label = '';
		let fillColor = '#fff';

		if (selection) {
			if (selection === 'gdp') {
				label = 'FY20 U.S. Gross Domestic Product';
				fillColor = '#dddddd';
			} else {
				label = 'Federal Revenue';
				fillColor = '#a1abb9';
			}
		}

		const isMobile = (
			<div className="dotScale">
				<svg width=".75rem" height="1rem">
					<circle cx="3" cy="12" r="3" fill={colors.colorSpendingPrimary} />
				</svg>
				<span>= {AfgData.dot_represents_mobile.value}</span>
				<svg fill={fillColor} width="10px" height="10px">
					<rect width="10" height="10" />
				</svg>
				<span> {label}</span>
			</div>
		);

		const isDesktop = (
			<div className="dotScale">
				<svg width=".75rem" height="1rem">
					<circle cx="3" cy="12" r="3" />
				</svg>
				<span>={AfgData.dot_represents.value}</span>
			</div>
		);

		let toRender = <></>;

		if (!isMobileDevice() && !hasDotScale) {
			toRender = isDesktop;
		} else if (isMobileDevice()) {
			toRender = isMobile;
		}

		return toRender;
	};

	return (
		<>
			{topLegend()}
			<div id="viz" />
		</>
	);
}
