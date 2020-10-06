import React from 'react';
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
			activeCompare: this.props.selection,
			redraw: false,
			hasDotScale: false
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
		const yOffset = !isMobileDevice() && !this.state.hasDotScale ? 15 : 35;

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
		if(this.props.setDesktopActiveLayer && typeof this.props.setDesktopActiveLayer === 'function') {
			this.props.setDesktopActiveLayer(this.state.activeCompare);
		}
		this.transitionLayers();
		this.toggleFacts();
		this.resizeSvg();
	}

	toggleLayer = (context) => {
		const clicked = (this.state.redraw) ? null : d3.select(context);
		const id = (this.state.redraw) ? null : !isMobileDevice() ? clicked.node().getAttribute('data-trigger-id') : this.state.activeCompare;
		d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);

		if(!isMobileDevice()) {
			if (id === this.state.activeCompare) {
				this.setAccessibility();
				this.zoom();
				this.setState({ activeCompare: null }, this.updateLayers);

			} else {
				this.setAccessibility(id);
				this.zoom('out');

				if (!this.state.redraw) {
					clicked.classed('facts__trigger--active', true);
				}

				this.setState({ activeCompare: id }, this.updateLayers);
			}

		} else {
			this.updateLayers();
		}
	}

	toggleFacts = () => {
		const currentFact =!isMobileDevice() ? this.state.activeCompare : `mobile-${this.state.activeCompare}`
		const targetSection = d3.select(`#${currentFact}-facts`),
			sectionActive = 'facts__section--active';

		d3.selectAll('.facts__section').classed(sectionActive, null);

		targetSection.classed(sectionActive, true);
	}

	transitionLayers = () => {
		d3.selectAll(`.gdp-layer, .deficit-layer`)
			.attr('opacity', 0);

		if (this.state.activeCompare) {
			d3.selectAll(`.${this.state.activeCompare}-layer`)
				.attr('opacity', 1)
		}
	}

	showDebt = () =>  {
		layers.debt.transition()
			.duration(this.duration)
			.attr('opacity', 1)
			.on('end', touchIe)
			.ease();
	}

	layersInit = () => {
		const classContext = this;
		if(!isMobileDevice()) {
			d3.selectAll('.facts__trigger')
				.on('click', function () {
					classContext.toggleLayer(this);
				});
		} else {
			classContext.toggleLayer(this);
		}

		if(!isMobileDevice()) this.zoom();
		this.showDebt();
		setTimeout(this.revealHiddenElements, this.duration);
	}

	selectedLayersInit = () => {
		const classContext = this;
		d3.selectAll('.facts__trigger')
			.on('click', function () {
				classContext.toggleLayer(this);
			});
		this.showDebt();
		d3.select(`#${this.state.activeCompare}-facts__trigger`).classed('facts__trigger--active', true);
		this.setAccessibility(this.state.activeCompare);
		if(!isMobileDevice()) this.zoom('out');
		this.updateLayers();
		setTimeout(this.revealHiddenElements, this.duration);
	}

	resizeUpdate = () => {
		if(this.state.activeCompare) {
			this.selectedLayersInit();
		} else {
			setChartWidth();
			setDotsPerRow();

			if (Object.keys(config)
				.indexOf('mainContainer') !== -1) {
				config.mainContainer.selectAll('*')
					.remove();
			}

			createLayers(config);
			this.layersInit();
		}
		this.setState({redraw: false});
	}

	resizeChart = () => {
		this.setState({redraw: true}, this.resizeUpdate)
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

	addDotScale = () => {
		this.mainContainer.append('g')
			.classed('.dotScale', true)
			.append('svg')
			.attr('width', '0.75rem')
			.attr('height', '1rem')
			.append('circle')
			.attr('cx', 3)
			.attr('cy', 12)
			.attr('r', 3)
	}

	componentDidMount() {
		setChartWidth();
		this.setMainContainer();
		setDotsPerRow();

		if (!isMobileDevice() && this.state.activeCompare) {
			// this.addDotScale();
			createLayers(config);
			this.selectedLayersInit();

		} else {
			let timer = isMobileDevice() ? 0 : 4500;

			if (!isMobileDevice()) {
				startLegendAnimation(config);
				this.setState({hasDotScale: true});
			}

			createLayers(config);

			setTimeout(() => {
				this.layersInit();
			}, timer);
		}

		window.addEventListener('resize', this.resizeWindow);
		return () => {
			if(Object.keys(config).indexOf('mainContainer') !== -1) {
				config.mainContainer.selectAll('*')
					.exit()
					.remove();
			}
			window.removeEventListener('resize', this.resizeWindow);
		}
	}

	topLegend = () => {
		const label = this.state.activeCompare ? this.state.activeCompare === 'gdp' ? 'FY20 U.S. Gross Domestic Product' : 'Federal Deficit' : '';

		const isMobile = <div className='dotScale'>
											<svg width='.75rem' height='1rem'>
												<circle cx='3' cy='12' r='3' />
											</svg>
											<span>= {AfgData.dot_represents_mobile.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
											<svg fill={this.state.activeCompare ? this.state.activeCompare === 'gdp' ? '#b1b1b1' : '#b3532d' : '#fff'}
													 width='10px'
													 height='10px'>
												<rect width='10' height='10' />
											</svg>
											<span>&nbsp;&nbsp;{label}</span>
										</div>

		const isDesktop = <div className='dotScale'>
												<svg width='.75rem' height='1rem'>
													<circle cx='3' cy='12' r='3' />
												</svg>
												<span>= {AfgData.dot_represents.value}</span>
											</div>

		let toRender = <></>

		if(!isMobileDevice() && !this.state.hasDotScale) {
			toRender = isDesktop;
		}	else if (isMobileDevice()) {
			toRender = isMobile;
		}

		return toRender;
	}

	render() {
		return (<>
			<div id="viz">
				{this.topLegend()}
			</div>
		</>);
	}
};
