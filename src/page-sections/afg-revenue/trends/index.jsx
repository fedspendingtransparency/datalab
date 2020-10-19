import React, { useEffect } from 'react';
import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from 'src/afg-helpers/utils';
import { trendData } from './utils/trendData';
import { trendDesktop } from 'src/afg-helpers/trends/chart';
import colors from '../../../styles/afg/colors.scss';
import { trendMobile } from 'src/afg-helpers/trendsMobile/index';
import { manualThresholds } from './utils/manualThresholds';
import CategoryData from '../../../../static/americas-finance-guide/data/federal_revenue_trends.csv';
import AfgData from "../../../../static/americas-finance-guide/_data/object_mapping.yml";

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
	  title: `${AfgData.current_fy.value} Federal Revenue Trends Over Time`,
	  desc: 'Line charts showing federal revenue changes of the last five years by category of revenue.'
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
  }, []);

  return (<div id='viz'></div>)
}
