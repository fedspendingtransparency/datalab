import { select, selectAll } from 'd3-selection';
import 'd3-transition';
import { layers } from './createLayers';
import { translator, establishContainer, isMobileDevice } from '../../../utils/utils';
import { chartWidth } from './widthManager';
import { touchIe } from '../../../utils/touchIe';

const d3 = { select, selectAll },
    scaleFactor = 0.6,
    duration = 1000;

let activeCompare, revenueFirstTime, debtFirstTime, doubleClickBlock, blockTimer, config;

function revealHiddenElements() {
    d3.selectAll('.intro-hidden').classed('intro-hidden', null);
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

function resizeSvg() {
    let h = 300;

    if (activeCompare === 'debt') {
        h = layers.debt.attr('data-height') * scaleFactor * 1.2;
    } else if (!activeCompare) {
        h = 120;
    }

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

function showHideMath() {
    d3.selectAll('.intro-math').classed('intro-math--hidden', activeCompare);
}

function doubleClickBlocker(id) {
    if (doubleClickBlock === id) {
        return true;
    }

    clearTimeout(blockTimer);

    doubleClickBlock = id;

    blockTimer = setTimeout(
        function () {
            doubleClickBlock = null;
        }, 1000);
}

function setAccessibility(type) {
    const svgEl = d3.select('svg.main'),
        descEl = svgEl.select('desc');

    let accessibilityAttr = config.accessibilityAttrs.default;
    if (type) {
        accessibilityAttr = config.accessibilityAttrs[type];
    }

    descEl.text(accessibilityAttr.desc);
}

function toggleLayer(redraw) {
    const clicked = (redraw) ? null : d3.select(this),
        id = (redraw) ? null : clicked.attr('data-trigger-id'),
        noDelay = (!redraw && id === 'debt' && activeCompare !== 'deficit');

    if (doubleClickBlocker(id) && !redraw) {
        return;
    };

    if (id === activeCompare) {
        d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);
        zoom();
        deficitOnly();
        activeCompare = null;
        toggleFacts();
        resizeSvg();
        showHideMath();
        setAccessibility();
        return;
    }

    if (!redraw) {
        d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);
        setAccessibility(id);
        activeCompare = id;
        clicked.classed('facts__trigger--active', true);
    }

    if (activeCompare === 'deficit' && !revenueFirstTime) {
        initialRevenueSpendingCompare();
        revenueFirstTime = true;
    } else if (activeCompare === 'deficit') {
        subsequentRevenueSpendingCompare();
    } else {
        initialDebtCompare(noDelay);
    }

    if (activeCompare) {
        zoom('out');
    } else {
        zoom()
    }

    toggleFacts();
    resizeSvg();
    showHideMath();
}

function initialDebtCompare(noDelay) {
    const delay = noDelay ? 0 : duration * 1.5;

    layers.revenue.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.spending.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.debt.select('.legend').attr('opacity', 0)

    layers.deficit.select('.legend').transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.debt.transition()
        .delay(delay)
        .duration(function () {
            return debtFirstTime ? duration : duration * 2;
        })
        .attr('transform', translator(0, 0))
        .attr('opacity', 1)
        .on('end', function () {
            layers.debt.select('.legend')
                .transition()
                .duration(duration)
                .on('end', touchIe)
                .attr('opacity', 1)
        })
        .ease();

    setTimeout(deficitTransform, duration, 'debt');

    debtFirstTime = true;
}

function deficitTransform(state, now) {
    const deficitDots = (state === 'debt') ? 0 : 1,
        debtDots = (state === 'debt') ? 1 : 0,
        y = (state === 'debt') ? 0 : Number(layers.deficit.attr('data-y')),
        localDuration = now ? 0 : duration;

    layers.deficit.transition()
        .duration(localDuration)
        .attr('transform', translator(0, y))
        .ease();

    layers.deficitCompareDots.transition()
        .duration(localDuration)
        .attr('opacity', deficitDots);

    if (layers.debtCompareDots.size()) {
        layers.debtCompareDots.transition()
            .duration(localDuration)
            .attr('opacity', debtDots)
            .on('end', touchIe)
            .ease();
    }
}

function subsequentRevenueSpendingCompare() {
    layers.debt.transition().duration(duration).attr('opacity', 0);

    layers.revenue.transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1)
        .ease();

    layers.spending.transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1)
        .ease();

    layers.deficit.select('.legend').transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1)
        .on('end', touchIe)
        .ease();

    setTimeout(deficitTransform, duration / 2);
}

function initialRevenueSpendingCompare() {
    const step1 = 100,
        step2 = duration * 1.5,
        step3 = step2 * 2;

    layers.debt.transition()
        .duration(duration)
        .attr('opacity', 0);

    layers.deficit.transition()
        .duration(step1)
        .attr('opacity', 0)
        .on('end', function () {
            deficitTransform(null, true);
        });

    setTimeout(function () {
        layers.deficit.transition()
            .duration(duration * 1.5)
            .on('end', touchIe)
            .attr('opacity', 1)
    }, step3)

    layers.revenue.transition()
        .duration(duration)
        .attr('opacity', 1);

    layers.spending.transition()
        .delay(step2)
        .duration(duration)
        .attr('opacity', 1);

    layers.spending.selectAll('rect').transition()
        .delay(step3)
        .duration(duration * 1.5)
        .attr('opacity', 0)

    layers.deficit.select('.legend').transition()
        .delay(step3)
        .duration(duration)
        .attr('opacity', 1);
}

function deficitOnly() {
    deficitTransform('debt');

    layers.revenue.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.spending.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.debt.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.deficit.transition()
        .duration(duration)
        .attr('transform', translator(0, 0))
        .on('end', touchIe)
        .attr('opacity', 1);

    layers.deficit.select('.legend')
        .attr('opacity', 0)
}

export function resetLayers() {
    if (activeCompare) {
        setTimeout(toggleLayer, 1000, 'redraw');
    }
}

export function layersInit(_config) {
    config = _config;
    d3.selectAll('.facts__trigger').on('click', toggleLayer);
    zoom();
    deficitOnly();
    setTimeout(showHideMath, duration * 2);
    setTimeout(revealHiddenElements, duration);
}