import { select, selectAll } from 'd3-selection';
import 'd3-transition';
import { layers } from './createLayers';
import { translator, establishContainer, isMobileDevice } from 'src/afg-helpers/utils';
import { chartWidth } from './widthManager';
import { vizHeight } from './debtDots';
import { touchIe } from 'src/afg-helpers/touchIe';

const d3 = { select, selectAll },
    scaleFactor = 0.6,
    duration = 1000;

let activeCompare, config;

function revealHiddenElements() {
    d3.selectAll('.intro-hidden').classed('intro-hidden', null);
    resizeSvg();
}

function resizeSvg() {
    const h = (activeCompare) ? vizHeight * scaleFactor + 40 : vizHeight;

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
}

function drawMobileLayer(redraw, clicked, id) {
    setTimeout(() => {
        if (!redraw) {
            clicked.classed('facts__trigger--active', true);
            activeCompare = id;
        }
        transitionLayers();
    }, 100)
}

function toggleLayer(redraw) {
    const clicked = (redraw) ? null : d3.select(this),
        id = (redraw) ? null : clicked.attr('data-trigger-id');

    d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);

    typeof window !== 'undefined' && window.innerWidth > 959 ? drawLayer(redraw, clicked, id); : drawMobileLayer(redraw, clicked, id);

    toggleFacts();
    resizeSvg();
}

function toggleFacts() {
    const targetSection = d3.select(`#${activeCompare}-facts`),
        sectionActive = 'facts__section--active';

    d3.selectAll('.facts__section').classed(sectionActive, null);

    if (targetSection.size()) {
        targetSection.classed(sectionActive, true);
    }
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

export function resetLayers() {
    if (activeCompare) {
        setTimeout(toggleLayer, 2000, 'redraw');
    }
}

export function layersInit(_config) {
    config = _config;
    d3.selectAll('.facts__trigger').on('click', toggleLayer);
    if(typeof window !== 'undefined' && window.innerWidth > 959) zoom();
    showDebt();
    setTimeout(revealHiddenElements, duration);
}