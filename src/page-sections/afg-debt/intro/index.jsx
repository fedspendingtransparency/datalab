import React, { useEffect } from 'react';
import { select, selectAll } from 'd3-selection';
import 'd3-transition';
import { createLayers, layers } from './helpers/createLayers';
import { startLegendAnimation } from './helpers/legend';
import { setChartWidth } from './helpers/widthManager';
import { translator, isMobileDevice, establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import { setDotsPerRow } from './helpers/dotConstants';
import { chartWidth } from './helpers/widthManager';
import { vizHeight } from './helpers/debtDots';
import { touchIe } from 'src/afg-helpers/touchIe';
import DebtData from '../../../../static/americas-finance-guide/data/explore_federal_debt.csv';
import './debt-intro.scss';
import colors from '../../../styles/afg/colors.scss';
import AfgData from '../../../../static/americas-finance-guide/_data/object_mapping.yml';

const config = {
	anecdoteName: 'anecdote-debt.svg',
	debtAmount: findAmountInCsv('federal debt', DebtData),
	gdpAmount: findAmountInCsv('gdp', DebtData),
	deficitAmount: Math.abs(findAmountInCsv('federal deficit', DebtData)),
	gdpPercent: findAmountInCsv('federal debt percent of gdp', DebtData) * 100,
	deficitColor: colors.colorDeficitPrimary,
	debtColor: colors.colorDebtPrimary,
	accessibilityAttrs: {
		default: {
			title: '2019 Federal Debt',
			desc: 'The image illustrates the federal government’s debt at the end of 2019 using dots, and each dot is equal to a billion dollars. There are 22,700 dots.',
		},
		deficit: {
			title: '2019 Federal Debt and Deficit',
			desc: 'The change in federal debt each year is heavily influenced by the deficit or surplus that year. When there is not enough revenue to pay for spending the government borrows money to make up the difference. When there is excess revenue in a given year, the majority of those funds are used to pay down the federal debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
		},
		gdp: {
			title: '2019 Federal Debt and GDP',
			desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
		},
	},
};

const 	d3 = { select, selectAll };

export default class DebtIntro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeCompare: this.props.selection
		};
	}

	duration = 1000;
  mainContainer;
  debounce;
  previousWidth;

	setMainContainer = () => {
    this.mainContainer = establishContainer(900, null, config.accessibilityAttrs.default)
      .append('g')
      .classed('main', true);

    config.mainContainer = this.mainContainer;
  }

	resizeSvg = () => {
		const scaleFactor = 1.3;
		const h = this.state.activeCompare === 'gdp' ? vizHeight * scaleFactor : vizHeight;
		establishContainer().transition().duration(this.duration).attr('height', h);
	}

	revealHiddenElements = () => {
		d3.selectAll('.intro-hidden').classed('intro-hidden', null);
		this.resizeSvg();
	}

	zoom = (out) => {
		const scaleFactor = 0.6;
		const yOffset = 35;

		if (out) {
			layers.master.transition()
				.duration(this.duration)
				.attr('transform', function() {
					return translator((chartWidth - chartWidth * scaleFactor) / 2, yOffset) + ` scale(${scaleFactor})`;
				})
				.ease();

		} else {
			layers.master.transition()
				.duration(this.duration)
				.attr('transform', translator(0, yOffset) + ` scale(1)`)
				.ease();

		}
	}

	setAccessibility = (type) => {
		const svgEl = d3.select('svg.main'),
			descEl = svgEl.select('desc');

		let accessibilityAttr = config.accessibilityAttrs.default;

		if(type){
			accessibilityAttr = config.accessibilityAttrs[type];
		}

		descEl.text(accessibilityAttr.desc);
	}

	updateLayers = () => {
		this.transitionLayers();
		this.toggleFacts();
		this.resizeSvg();
	}

	toggleLayer = (redraw, context) => {
		const clicked = (redraw) ? null : d3.select(context);
		console.log(clicked);
		console.log(context);
		const id = (redraw) ? null : !isMobileDevice() ? clicked.node().getAttribute('data-trigger-id') : this.state.activeCompare;

		// for desktop, toggle the button off.
		d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);

		if(!isMobileDevice()) {
			if (id === this.state.activeCompare) {  // this should be id === this.state.activeCompare?
				this.setAccessibility();
				this.zoom();
				this.setState({ activeCompare: null }, this.updateLayers);

			} else {
				this.setAccessibility(id);
				this.zoom('out');

				if (!redraw) {
					clicked.classed('facts__trigger--active', true);
				}

				this.setState({ activeCompare: id }, this.updateLayers);

			}
		} else {
			this.updateLayers();
		}
	}

	toggleFacts = (id) => {
		const currentFact =!isMobileDevice() ? id : `mobile-${this.state.activeCompare}`
		const targetSection = d3.select(`#${currentFact}-facts`),
			sectionActive = 'facts__section--active';

		d3.selectAll('.facts__section').classed(sectionActive, null);

		targetSection.classed(sectionActive, true);
	}

	transitionLayers = () => {
		if (this.state.activeCompare) {
			const unSelectedLayer = this.state.activeCompare === 'deficit' ? 'gdp' : 'deficit';

			d3.selectAll(`.${unSelectedLayer}-layer`)
				.attr('opacity', 0);

			d3.selectAll(`.${this.state.activeCompare}-layer`)
				.transition()
				.duration(this.duration)
				.attr('opacity', 1)
				.ease();
		} else {
			d3.selectAll(`.gdp-layer, .deficit-layer`)
				.attr('opacity', 0);
		}

	}

	showDebt = () =>  {
		layers.debt.transition()
			.duration(this.duration)
			.attr('opacity', 1)
			.on('end', touchIe)
			.ease();
	}

	resetLayers = () => {
		if (this.state.activeCompare) {
			setTimeout(this.toggleLayer, 2000, 'redraw');
		}
	}

	layersInit = () => {
		const classContext = this;
		if(!isMobileDevice()) {
			d3.selectAll('.facts__trigger')
				.on('click', function () {
					classContext.toggleLayer(false, this);
				});
		} else {
			classContext.toggleLayer(false, this);
		}

		if(!isMobileDevice()) this.zoom();
		this.showDebt();
		setTimeout(this.revealHiddenElements, this.duration);
	}

	resizeChart = () => {
		setChartWidth();
		setDotsPerRow();
		this.resetLayers();

		if(Object.keys(config).indexOf('mainContainer') !== -1) {
			config.mainContainer.selectAll('*')
				.remove();
		}

		createLayers(config);
		this.layersInit();
	}

	resizeWindow = () => {
		if (this.debounce) {
			clearTimeout(this.debounce);
		}

		if (typeof window !== 'undefined') {
			if (this.previousWidth === window.innerWidth) {
				return;
			}

			this.previousWidth = window.innerWidth;

		}

		this.debounce = setTimeout(this.resizeChart, 100);
	}

	componentDidMount() {
		let timer = isMobileDevice() ? 0 : 4500;

		setChartWidth();
		this.setMainContainer();
		setDotsPerRow();

		if(!isMobileDevice()) {
			startLegendAnimation(config);
		}

		createLayers(config);

		setTimeout(() => {
			this.layersInit();
		}, timer);

		this.resizeWindow();
		window.addEventListener('resize', this.resizeWindow);
		return () => {
			window.removeEventListener('resize', this.resizeWindow);
		}
	}

	render() {
		return (<>
			<div className='dotScale'>
				<svg width='.75rem' height='1rem'>
					<circle cx='3' cy='12' r='3' />
				</svg>
				<span>= {AfgData.dot_represents_mobile.value}</span>
			</div>
			<div id="viz" />
		</>);
	}
};
