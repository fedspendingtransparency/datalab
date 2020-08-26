import { select, selectAll, event } from 'd3-selection';
import SwipeListener from 'swipe-listener';
import '../matchesPolyfill';

const d3 = { select, selectAll, event },
    config = {
        anecdoteClass: 'anecdote',
        anecdoteActiveClass: 'anectode--active',
        controlsClass: 'anecdote__controls',
        triggerClass: 'anecdote__trigger',
        navClass: 'anecdote__nav-control',
        navButtonClass: 'anecdote__nav-button',
        closeButtonClass: 'anecdote__close',
        closeButtonIconClass: 'fas fa-times',
        contentsClass: 'anecdote__contents',
        contentsClassActive: 'anecdote__contents--active',
        dotsClass: 'anecdote__dots',
        dotsContainerClass: 'anecdote__dots--container',
        dotClass: 'anecdote__dot',
        dotClassActive: 'anecdote__dot--active',
        dotTextClass: 'anecdote__dots--text',
        infoIcon: {
            class: 'anecdote__icon',
            src: 'assets/icons/anecdote.svg',
            alt: 'anecdote icon'
        },
        linkCtaContainerClass: 'anecdote__cta--container',
        linkButtonContainerClass: 'anecdote__link--button-container',
        linkButtonIconClass: 'anecdote__link--button-icon',
        linkButtonClass: 'link-button anecdote__link--button',
        linkButtonText: '',
        panesClass: 'anecdote__panes',
        paneClass: 'anecdote__pane',
        paneClassActive: 'anecdote__pane--active'
    };

function addCloseIcon(anecdote) {
    const button = anecdote.select(`.${config.controlsClass}`)
        .append('button')
        .classed(config.closeButtonClass, true)
        .on('click', toggleVisibility)

    button.append('i')
        .classed(config.closeButtonIconClass, true);
}

function toggleVisibility() {
    const anecdote = d3.select(this.closest(`.${config.anecdoteClass}`));

    anecdote.classed(config.anecdoteActiveClass, !anecdote.classed(config.anecdoteActiveClass));
}

function setActiveDot(anecdote, index) {
    const dots = anecdote.selectAll(`.${config.dotClass}`);

    dots.classed(config.dotClassActive, false);

    dots.filter((d, i) => i === index).classed(config.dotClassActive, true);

    updateDotText(anecdote, index);
}

function updateDotText(anecdote, i) {
    const dotLength = anecdote.selectAll(`.${config.paneClass}`).size(),
        dotText = anecdote.select(`.${config.dotTextClass}`);

    dotText.html(`${i + 1} of ${dotLength}`);
}

function buildDots(anecdote) {
    const dotLength = anecdote.selectAll(`.${config.paneClass}`).size(),
        dotContainer = anecdote.select(`.${config.contentsClass}`).insert('div').classed(config.dotsContainerClass, true),
        dots = dotContainer.append('div').classed(config.dotsClass, true),
        dotArray = new Array(dotLength);

    dots.selectAll(`.${config.dotClass}`)
        .data(dotArray)
        .enter()
        .append('button')
        .classed(config.dotClass, true)
        .on('click', function (d, i) {
            showPane(anecdote, i);
        });

    dotContainer.append('div')
        .classed(config.dotTextClass, true);

    setActiveDot(anecdote, 0);
}

function showPane(anecdote, index) {
    const panes = anecdote.selectAll(`.${config.paneClass}`).classed(config.paneClassActive, false),
        activePane = panes.filter((d, i) => { return i === index }).classed(config.paneClassActive, true);

    anecdote.attr('data-current', index);

    setActiveDot(anecdote, index);
    enableFocusOnActivePaneLinks(activePane);
}

function addKeyboardNavigation() {
    // Add keyboard navigation (left/right keys).
    window.addEventListener("keydown", function (e) {
        const activeAnecdotes = d3.selectAll(`.${config.anecdoteActiveClass}`);

        let navigateDir, prev;


        switch (e.key) {
            case 'Right':
            case 'ArrowRight':
                navigateDir = 'next';
                break;
            case 'Left':
            case 'ArrowLeft':
                navigateDir = 'previous';
                break;
        }

        if (!navigateDir) {
            return;
        }

        prev = (navigateDir === 'previous');

        activeAnecdotes.each(function () {
            advancePane(d3.select(this), prev);
        })
    });
}

function addMobileSwiping(anecdote) {
    // Add mobile navigation (swipe left/right).
    const anecdoteEl = anecdote.node();

    anecdoteEl.addEventListener('swipe', function (e) {
        const activeAnecdotes = d3.selectAll(`.${config.anecdoteActiveClass}`),
            swipeDirection = e.detail.directions;

        let prev;

        if (swipeDirection.right) {
            prev = 'previous';
        } else if (!swipeDirection.left) {
            return; // Ignore up or down swipes.
        }

        activeAnecdotes.each(function () {
            advancePane(d3.select(this), prev);
        })
    });
}

function setWidthForPanes(anecdote) {
    const count = anecdote.selectAll(`.${config.paneClass}`).size();

    anecdote.select(`.${config.panesClass}`).style('width', `${100 * count}%`)
}

function initNav(anecdote) {
    const buttons = anecdote.selectAll(`.${config.navClass}`).append('button').classed(config.navButtonClass, true),
        icons = buttons.append('i');

    icons.each(function (d, i) {
        const faClass = (i === 0) ? 'fa-chevron-left' : 'fa-chevron-right';

        d3.select(this).classed(`fas fa-lg ${faClass}`, true);
    });

    buttons.each(function (d, i) {
        const button = d3.select(this),
            prev = (i === 0) ? true : null;

        button.on('click', d => advancePane(anecdote, prev));
    })
}

function initPanes(anecdote) {
    const panes = anecdote.selectAll(`.${config.paneClass}`);

    panes.on('click', function (d, i) {
        const paneCount = anecdote.selectAll(`.${config.paneClass}`).size(),
            src = event.srcElement ? event.srcElement : event.target;

        if (src && src.nodeName === 'A') {
            return;
        }

        i += 1;

        if (i === paneCount) {
            i = 0;
        }

        showPane(anecdote, i);
    });
}

function raiseLinkButton(anecdote) {
    anecdote.select('.anecdote__cta').raise();
}

function advancePane(anecdote, prev) {
    const current = Number(anecdote.attr('data-current')),
        size = anecdote.selectAll(`.${config.paneClass}`).size();

    let newPage = prev ? current - 1 : current + 1;

    if (newPage === size) {
        newPage = 0;
    }

    if (newPage < 0) {
        newPage = size - 1;
    }

    showPane(anecdote, newPage);
}

function indexPanes(anecdote) {
    anecdote.selectAll(`.${config.paneClass}`).each(function (d, i) {
        d3.select(this).attr('data-pane-index', i);
    })
}

function buildAnecdote() {
    const anecdote = d3.select(this);
    indexPanes(anecdote);
    setWidthForPanes(anecdote);
    addCloseIcon(anecdote);
    showPane(anecdote, 0);
    buildDots(anecdote);
    initNav(anecdote);
    raiseLinkButton(anecdote);
    initPanes(anecdote);
    addMobileSwiping(anecdote);
}

function onLinkFocus(event) {
    const target = event.target,
        parentPane = d3.select(target.closest('.anecdote__pane')),
        parentAnecdote = d3.select(target.closest('.anecdote')),
        thisPane = Number(parentPane.attr('data-pane-index')),
        currentPane = Number(parentAnecdote.attr('data-current'));

    if (thisPane !== currentPane) {
        showPane(parentAnecdote, thisPane);
    }
}

function enableFocusOnActivePaneLinks(pane) {
    d3.selectAll('.anecdote__pane').selectAll('a').attr('tabindex', -1);

    if (pane) {
        pane.selectAll('a').attr('tabindex', 0);
    }
}

function shiftLinksIntoFocus() {
    const paneLinks = d3.selectAll('.anecdote__pane').selectAll('a').attr('tabindex', -1);

    paneLinks.each(function () {
        this.addEventListener('focus', onLinkFocus);
    })
}

export function anecdoteInit() {
    d3.selectAll(`.${config.anecdoteClass}`).each(buildAnecdote);
    d3.selectAll(`button.${config.triggerClass}`).on('click', toggleVisibility);
    addKeyboardNavigation();
    shiftLinksIntoFocus();
}

anecdoteInit();