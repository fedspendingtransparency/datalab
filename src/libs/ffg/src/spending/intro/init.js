import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { placeDots } from './placeDots';
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize } from './compareManager';
import { triggerMainInfoBox } from '../../infoBox';

const d3 = { select, selectAll };

let debounce;
let previousWidth;
let config;

export function initChart(_config) {
	triggerMainInfoBox();

	d3.select('#viz').selectAll('*').remove();
	config = _config || config;

	setChartWidth();
	setDotsPerRow();

	establishContainer(500, chartWidth, config.accessibilityAttrs.default);

	startLegendAnimation(config);
}

function resizeChart() {
	if (typeof document !== 'undefined') {
		setChartWidth();
		setDotsPerRow();
		resetForResize();
		d3.select('svg.main')
			.attr('width', chartWidth);
		placeDots(config);
	}
}

if (typeof window !== 'undefined') {
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
}