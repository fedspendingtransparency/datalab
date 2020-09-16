import React, { useEffect } from 'react';
import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from 'src/afg-helpers/utils';
import { trendData } from './helpers/trendData';
import { trendDesktop } from 'src/afg-helpers/trends/chart';
import colors from '../../../styles/afg/colors.scss';
import { trendMobile } from 'src/afg-helpers/trendsMobile/index.js';
import { manualThresholds } from './helpers/manualThresholds';
import CategoryData from '../../../../static/americas-finance-guide/data/federal_revenue_trends.csv';

export default function RevenueTrends() {
  // IE shim
  if (typeof window !== 'undefined' && !Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }

  // get all the fiscal years in this csv, make a set, so we only have unique values
  const fySet = new Set(CategoryData.map(function (c) {
    return c.fiscal_year;
  }));
  // make an array from that set, and filter out any undefined values
  const fyArray = Array.from(fySet)
	.filter(function (value, i, arr) {
	  return value;
	});
  fyArray.sort();

  const d3 = {
    select,
    selectAll
  },
	data = trendData(),
	accessibilityAttrs = {
	  title: 'Federal Revenue Trends Over Time',
	  desc: 'Individual income taxes have increased over the past five years from $1.4 trillion in 2015 to $1.7 trillion in 2019. Social Security and Medicare taxes have also increased from $960 billion in 2015 to $1.2 trillion in 2019. Corporate income taxes have decreased from $320 billion in 2015 to $230 billion in 2019.'
	},
	config = {
	  chapter: 'revenue',
	  baseColor: colors.revenuePrimary,
	  secondaryColor: colors.colorPrimaryDarker,
	  subcategoryThresholds: manualThresholds,
	  fiscalYearArray: fyArray
	};

  let container;

  function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
  }

  function init() {
    if (isMobileDevice()) {
      container = d3.select('#viz')
	.append('div')
	.classed('trend-mobile', true);
      trendMobile(data.sort(sortByLatestYear), container, config);
    } else {
      container = establishContainer(930, null, accessibilityAttrs);
      trendDesktop(data, container, config);
    }
  }


  useEffect(() => {
    init();
  });


  return (<div id='viz'></div>)
}
