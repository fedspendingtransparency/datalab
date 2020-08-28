import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { translator } from '../../../../utils/utils';

const d3 = { select, selectAll, transition },
    sortManager = {};

let config;

function sort(by, config, dir) {
    if (by === 'name') {
        if(dir === 'default'){
            config.data.sort((a, b) => {
                if (b.activity < a.activity) {
                    return 1;
                }

                if (b.activity > a.activity) {
                    return -1;
                }

                return 0;
            })
        } else {
            config.data.sort((b, a) => {
                if (b.activity < a.activity) {
                    return 1;
                }

                if (b.activity > a.activity) {
                    return -1;
                }

                return 0;
            })
        }
    } else {
        if(dir === 'default') {
            config.data.sort((a, b) => {
                return b.amount - a.amount
            });
        } else {
            config.data.sort((b, a) => {
                return b.amount - a.amount
            });
        }
    }

    if(typeof document !== 'undefined') {
      config.svg.selectAll('g.row')
        .transition()
        .duration(1000)
        .attr('transform', function(d) {
          const position = config.data.indexOf(d);
          return translator(0, position * config.rowHeight);
        })
        .ease()
    }
}

function doSort(name, direction) {
    sort(name, sortManager.main, direction);

    if (sortManager.detail) {
        sort(name, sortManager.detail, direction);
    }
}

function updateSortIcon(containerId, sortId){
  if(typeof document !== 'undefined') {

    const isThisAlreadySortedInd = d3.select(`#${sortId}`)
      .classed('active');

    let sortDir = 'default';

    if (!isThisAlreadySortedInd) {
      resetSortingButtons();
      d3.select(`#${containerId}`)
        .select('button.active')
        .classed('active', false);
      d3.select(`#${sortId}`)
        .classed('active', true);
    } else {
      const sortIcon = d3.selectAll(`#${sortId} svg`);
      sortIcon.each(function(d, i) {
        const isHidden = d3.select(this)
          .classed('hidden');
        if (i === 0 && isHidden !== true) {
          sortDir = 'reverse';
        }
        d3.select(this)
          .classed('hidden', !isHidden);
      });
    }

    return sortDir;
  }
}

function resetSortingButtons(){
  if(typeof document !== 'undefined') {

    const sortNameBtn = d3.selectAll('#sort-name svg'),
      sortAmountBtn = d3.selectAll('#sort-amount svg');

    sortNameBtn.each(function(d, i) {
      if (i === 0) {
        d3.select(this)
          .classed('hidden', null);
      } else {
        d3.select(this)
          .classed('hidden', true);
      }
    });

    sortAmountBtn.each(function(d, i) {
      if (i === 0) {
        d3.select(this)
          .classed('hidden', null);
      } else {
        d3.select(this)
          .classed('hidden', true);
      }
    });
  }
}

if(typeof document !== 'undefined') {

  d3.select('#filter-by-name-icon')
    .on('click', function() {
      d3.select('#filter-by-name')
        .node()
        .focus();
    });

  d3.select('#sort-amount')
    .on('click', function() {
      const containerId = 'bar-controls',
        sortId = 'sort-amount',
        sortDir = updateSortIcon(containerId, sortId);

      doSort('amount', sortDir);
    });

  d3.select('#sort-name')
    .on('click', function() {
      const containerId = 'bar-controls',
        sortId = 'sort-name',
        sortDir = updateSortIcon(containerId, sortId);

      doSort('name', sortDir);
    });
}

function initHighlightedButton(){
  if(typeof document !== 'undefined') {
    d3.select('#bar-controls')
      .select('button.active')
      .classed('active', false);
    d3.select('#sort-amount')
      .classed('active', true);
  }
}

export function initSort(config) {
    if (config.detail) {
        sortManager.detail = config;
    } else {
        resetSortingButtons();
        initHighlightedButton();
        sortManager.main = config;
    }
}

export function closeDetail() {
    sortManager.detail = null;
}
