import React, { useEffect } from 'react';
import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from 'src/utils/utils';
import { trendData } from './trendData';
import { setThreshold } from "./setThreshold";
import { trendDesktop } from '../../../components/afg/trends/chart';
import { manualThresholds } from './manualThresholds';
import { trendMobile } from '../../../components/afg/trendsMobile';
import colors from '../../../styles/afg/colors.scss';
import CategoryData from '../../../../static/americas-finance-guide/data/federal_spending_trends.csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

export default function SpendingTrends() {
// IE shim
  if (typeof window !== 'undefined' && !Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }

  const d3 = { select, selectAll };

  let showHideData,
    callback,
    showHideButtons,
    activeArr = [];

  useEffect(() => {
    function initActiveFunction(row, input) {
      const numValsToShow = 5,
        force = ['Net Interest'];

      return (input < numValsToShow || force.indexOf(row.officialName) !== -1);
    }

    function placeControls(_data) {
      showHideData = _data;

      showHideButtons = d3.select('#show-hide-list').selectAll('button')
        .data(showHideData)
        .enter()
        .append('button')
        .classed('active', function (d) {
          return d.active ? true : null;
        })
        .text(function (d) {
          return d.name;
        })
        .on('click', function (d, i) {
          const curEl = d3.select(this);
          toggleActive(curEl, d)
        })
    }

    function filterForActiveData() {
      return showHideData.filter(r => r.active);
    }

    function showHideInit(data, cb) {
    if (cb) {
      callback = cb;
    }

    d3.select('#show-hide-list').selectAll('*').remove();

    data.forEach((r, i) => {
      r.active = initActiveFunction(r, i);
    });

    placeControls(data);

    return filterForActiveData(data);
  }

    d3.select('#activate-show-hide')
      .on('click', function () {
        const isTrayOpenInd = d3.select('#show-hide-tray')
          .classed('active');

        if (isTrayOpenInd) {
          resetFilters();
          activeArr.length = 0;
        } else {
          showHideButtons.each(function (d, i) {
            activeArr[i] = d3.select(this).classed('active');
          });
        }

        d3.select('#show-hide-tray').classed('active', !isTrayOpenInd);
      });

    d3.select('#select-all')
      .on('click', function () {
        showHideButtons
          .classed('active', function (d) {
            d.active = true;
            return true;
          })
      });

    d3.select('#select-none')
      .on('click', function () {
        showHideButtons
          .classed('active', function (d) {
            d.active = null;
            return null;
          })
      });

    d3.select('#reset-filters-button')
      .on('click', function () {
        showHideButtons
          .each(function (d, i) {
            const isActiveInd = initActiveFunction(d, i);
            d3.select(this).classed('active', isActiveInd);
            d.active = isActiveInd;
          });
      });

    d3.select('#save-filters-button')
      .on('click', function () {
        d3.select('#show-hide-tray')
          .classed('active', null);

        callback(filterForActiveData())
      });

    function resetFilters() {
      if (activeArr.length) {
        const showHideListData = showHideButtons;
        showHideListData.each(function (d, i) {
          const curEl = d3.select(this);
          if (curEl.classed('active') !== activeArr[i]) {
            toggleActive(curEl, d);
          }
        });
      }
    }

    function toggleActive(button, d) {
      const setToThis = d.active ? null : true;

      d.active = setToThis;
      button.classed('active', setToThis);
    }

  // get all the fiscal years in this csv, make a set, so we only have unique values
  // this gets attached to the config object, which gets passed to the d3 functions
    const fySet = new Set(CategoryData.map(function (c) {
      return c.fiscal_year
    }));
  // make an array from that set, and filter out any undefined values
    const fyArray = Array.from(fySet)
      .filter(function (value, i, arr) {
        return value;
      });
    fyArray.sort();

    const accessibilityAttrs = {
      title: '2019 Federal Spending Trends by Category and Agency over Time',
      desc: 'Each spending category has seen its own trends develop over the last five years. Social Security has increased from $958 billion in 2015 to $1.0 trillion in 2019. National Defense spending in 2015 was $670 billion and $688 billion in 2019. Medicare spending has increased in the past five years from $589 billion in 2015 to $651 billion in 2019. Health spending over the past five years has also increased from $489 billion to $585 billion. Income Security has remained relatively stable from 2015 to 2019, with $550 billion and $515 billion respectively. Net Interest from Debt, Trust Funds, and Other Investments has increased significantly since 2015 from $241 billion to $376 billion. Spending related to the Department of Health and Human Services has increased slightly over the last five years from $1.1 trillion to $1.2 trillion. The Social Security Administration has seen similar increases from $1.0 trillion in 2015 to $1.1 trillion in 2019. Department of the Treasury spending has increased from $524 billion to $689 billion, mainly due to the increased spending on interest on the federal debt. Department of Defense – Military Programs spending has remained steady over the past five years, from $607 billion to $654 billion. Spending related to the Department of Veterans Affairs has increased from $172 billion in 2015 to $200 billion in 2019. Note: Data for 2015 is adjusted for inflation.'
    },
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    data = showHideInit(setData('category'), renderChart);

    let svg;

    function init() {
    d3.select("#spending-chart-toggle")
      .attr('data-active', 'category');
  }

    function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
  }

    function setData(type) {
    return trendData(type)
      .sort(sortByLatestYear);
  }

    function renderChart(data) {
    const zoomThreshold = setThreshold(data),
      config = {
        chapter: 'spending',
        baseColor: colors.colorSpendingPrimary,
        secondaryColor: '#00766C',
        zoomThreshold,
        subcategoryThresholds: manualThresholds,
        fiscalYearArray: fyArray
      };

    let container;

    // console.log('isMobileDevice()', isMobileDevice());

    if (isMobileDevice()) {
      container = d3.select('#viz');
      container.selectAll('*')
        .remove();
      container.append('div')
        .classed('trend-mobile', true);
      trendMobile(data, container, config);
    } else {
      svg = svg || establishContainer(930, null, accessibilityAttrs);
      svg.selectAll('*')
        .remove();
      container = establishContainer(930, null, accessibilityAttrs);
      trendDesktop(data, svg, config);
    }
  }

    function changeDataTypeClickFunctions() {
    d3.select('#toggle-spending-data-type')
      .on('click', function () {
        let dataType;
        const dataController = d3.select("#spending-chart-toggle"),
          curData = dataController.attr('data-active');

        if (curData === 'category' || curData === 'function') {
          dataType = 'agency';
          changeDataType(dataType);
        } else {
          dataType = 'category';
          changeDataType(dataType);
        }
      });

    d3.selectAll('.toggle-component__label')
      .on('click', function () {
        const textValue = d3.select(this)
            .text(),
          type = (textValue === 'Agency') ? 'agency' : 'category';

        changeDataType(type);
      })
  }

    function changeDataType(dataType) {
    const dataController = d3.select("#spending-chart-toggle");
    const data = showHideInit(setData(dataType));
    dataController.attr('data-active', dataType);
    renderChart(data);
  }

    init();
    renderChart(data);
    changeDataTypeClickFunctions();
  });


  return(<>
    <div id="show-hide">
      <button id="activate-show-hide">Filter <FontAwesomeIcon icon={faSlidersH} width={11} className="fa fa-sliders-h"/></button>
      <div id="show-hide-tray">
        <div className='show-hide__buttons'>
          <div className='show-hide__buttons--left'>
            <button id="select-all">Select All</button>
            <button id="select-none">Remove All</button>
          </div>
          <div className='show-hide__buttons--right'>
            <button id="reset-filters-button">Reset</button>
            <button id="save-filters-button">Save</button>
          </div>
        </div>

        <div id="show-hide-list"></div>
      </div>
    </div>

    <div className="hint">Click a spending category to view more</div>

    <div id='viz'></div>
    </>)
}
