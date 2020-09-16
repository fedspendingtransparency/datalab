import * as d3 from "d3v3";
import { receiptsConstants } from 'src/components/afg-dots/revenue/receipts-utils.js';
import { getDataByYear } from './helpers/data';
import { initSankey, destroySankey } from "./helpers/sankey/init";
import { init as initBarGraph, initChart } from "src/page-sections/afg-spending/categories/init";

import colors from 'src/styles/afg/colors.scss';
import React, { useEffect } from 'react';

const config = {
    data: [],
    containerClass: receiptsConstants.shaderContainerClass,
    sectionColor: colors.colorPrimaryDarker,
    accessibilityAttrs: {
        title: '2019 Federal Revenue Categories',
        desc: 'The federal government collected $1.7 trillion in individual income taxes in 2019. That represented 49.6% of all federal revenue for the year. Social Security and Medicare taxes added another $1.2 trillion (or 34%) of total federal revenue. Corporate income taxes were the third largest source of revenue for the federal government in 2019 with $2.3 billion collected. Miscellaneous revenue, excise taxes, unemployment insurance, customs duties, estate and gift taxes, and other retirement taxes contributed the remaining $322 billion of federal revenue for 2019.'
    }
};

export default function RevenueCategories() {

    useEffect(() => {
      const data = getDataByYear('2019');
      const viz = d3.select('#viz');

      let isDesktopInd = false,
        debounce,
        resizeBarGraphDebounce,
        mainSvg;

      function init() {
        config.data = JSON.parse(JSON.stringify(data));
        if (window.innerWidth >= 1200) {
          isDesktopInd = true;
          initSankey(config);
        } else {
          initBarGraph(config);
        }
      }

      window.addEventListener('resize', function () {
        const defaultTimeout = 100;
        if (debounce) {
          clearTimeout(debounce);
        }

        let actualTimeout = defaultTimeout;

        if (window.innerWidth < 1200 && isDesktopInd) {
          actualTimeout = 0;
        } else if (window.innerWidth >= 1200 && !isDesktopInd) {
          actualTimeout = 0;
        }

        debounce = setTimeout(function () {
          config.data = JSON.parse(JSON.stringify(data));
          if (window.innerWidth < 1200) {
            if (isDesktopInd) {
              isDesktopInd = false;
              d3.select('#viz svg').html(null);
              destroySankey();
              initBarGraph(config);
            } else {
              if (resizeBarGraphDebounce) {
                clearTimeout(resizeBarGraphDebounce);
              }
              resizeBarGraphDebounce = setTimeout(initChart, 100);
            }
          } else {
            if (!isDesktopInd) {
              d3.select('#viz svg').html(null);
              destroySankey();
              initSankey(config);
              isDesktopInd = true;
            }
          }
        }, actualTimeout);
      });

      if (typeof window !== `undefined`) {
        init();
      }

    }, []);

    return (<div id="viz"></div>);

}


