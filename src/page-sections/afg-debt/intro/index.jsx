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


const DebtIntro = () => {
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

  let mainContainer;
  let debounce;
  let previousWidth;

  function setMainContainer() {
    mainContainer = establishContainer(900, null, config.accessibilityAttrs.default)
      .append('g')
      .classed('main', true);

    config.mainContainer = mainContainer;
  }

  useEffect(() => {

		const d3 = { select, selectAll },
			duration = 1000;

		let activeCompare;

		function revealHiddenElements() {
			d3.selectAll('.intro-hidden').classed('intro-hidden', null);
			resizeSvg();
		}

		function resizeSvg() {
			const scaleFactor = 1.1;
			const h = vizHeight * scaleFactor + 40;
			establishContainer().transition().duration(duration).attr('height', h);
		}

		function zoom(out) {
			const yOffset = 35;

			if (out) {
				layers.master.transition()
					.duration(duration)
					.attr('transform', function() {
						if (isMobileDevice()) {
							return translator(0, yOffset);
						}

						return translator((chartWidth - chartWidth * scaleFactor) / 2, yOffset) + ` scale(${scaleFactor})`;
					})
					.ease();
			} else {

				layers.master.transition()
					.duration(duration)
					.attr('transform', translator(0, yOffset) + ` scale(1)`)
					.ease();
			}
		}

		function setAccessibility(type){
			const svgEl = d3.select('svg.main'),
				descEl = svgEl.select('desc');

			let accessibilityAttr = config.accessibilityAttrs.default;

			if(type){
				accessibilityAttr = config.accessibilityAttrs[type];
			}

			descEl.text(accessibilityAttr.desc);
		}

		function drawLayer(redraw, clicked, id) {
			if (id === activeCompare) {
				setAccessibility();
				activeCompare = null;
				zoom();
			} else {
				setAccessibility(id);
				zoom('out');

				if (!redraw) {
					clicked.classed('facts__trigger--active', true);
					activeCompare = id;
				}
			}
			transitionLayers();
			toggleFacts();
			resizeSvg();
		}

		function drawMobileLayer(redraw, clicked, id) {
			if (!redraw) {
				clicked.classed('facts__trigger--active', true);
				activeCompare = id;
			}
			setTimeout(() => transitionLayers(), 100);
			toggleFacts();
			resizeSvg();
		}

		function toggleLayer(redraw) {
			const clicked = (redraw) ? null : d3.select(this),
				id = (redraw) ? null : clicked.attr('data-trigger-id');

			d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);

			typeof window !== 'undefined' && window.innerWidth > 959 ? drawLayer(redraw, clicked, id) : drawMobileLayer(redraw, clicked, id);

		}

		function toggleFacts() {
			const currentFact = typeof window !== 'undefined' && window.innerWidth > 959 ? activeCompare : `mobile-${activeCompare}`
			const targetSection = d3.select(`#${currentFact}-facts`),
				sectionActive = 'facts__section--active';

			d3.selectAll('.facts__section').classed(sectionActive, null);

			targetSection.classed(sectionActive, true);
		}

		function transitionLayers() {
			const unSelectedLayer = activeCompare === 'deficit' ? 'gdp' : 'deficit';

			d3.selectAll(`.${unSelectedLayer}-layer`)
				.attr('opacity', 0);

			d3.selectAll(`.${activeCompare}-layer`)
				.transition()
				.duration(duration)
				.attr('opacity', 1)
				.ease();
		}

		function showDebt() {
			layers.debt.transition()
				.duration(duration)
				.attr('opacity', 1)
				.on('end', touchIe)
				.ease();
		}

		function resetLayers() {
			if (activeCompare) {
				setTimeout(toggleLayer, 2000, 'redraw');
			}
		}

		function layersInit() {
			d3.selectAll('.facts__trigger').on('click', toggleLayer);
			if(typeof window !== 'undefined' && window.innerWidth > 959) zoom();
			showDebt();
			setTimeout(revealHiddenElements, duration);
		}


    setChartWidth();
    setMainContainer();
    setDotsPerRow();

    if (typeof window !== 'undefined' && window.innerWidth > 959) {
			startLegendAnimation(config);
		}

		createLayers(config);

    if(typeof window !== 'undefined') {
			let timer = window.innerWidth < 959 ? 0 : 4500;

			setTimeout(() => {
				layersInit();
			}, timer);
		}

		function resizeChart() {
			setChartWidth();
			setDotsPerRow();
			resetLayers();

			if(Object.keys(config).indexOf('mainContainer') !== -1) {
				config.mainContainer.selectAll('*')
					.remove();
			}

			createLayers(config);
			layersInit();
		}

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

    return () => {
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
  }, []);


  return (<>
		<div className='dotScale'>
			<svg width='.75rem' height='1rem'>
				<circle cx='3' cy='12' r='3' />
			</svg>
			<span>= {AfgData.dot_represents_mobile.value}</span>
		</div>
		<div id="viz" />
		</>);
};

export default DebtIntro;
