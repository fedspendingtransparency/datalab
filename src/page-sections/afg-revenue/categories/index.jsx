import * as d3 from "d3v3";
import { receiptsConstants } from 'src/afg-helpers/dots/receipts-utils.js';
import { getDataByYear } from './utils/data';
import { initSankey, destroySankey } from "../../../afg-helpers/sankey/init";
import { init as initBarGraph, initChart } from "src/page-sections/afg-spending/categories/helpers/init";

import colors from 'src/styles/afg/colors.scss';
import React, { useEffect } from 'react';

const config = {
    data: [],
    containerClass: receiptsConstants.shaderContainerClass,
    sectionColor: colors.colorPrimaryDarker,
    accessibilityAttrs: {
        title: '2020 Federal Revenue Categories',
        desc: 'Bar chart showing source categories of revenue collected by the federal government in 2020, with the largest category being individual income taxes.'
    }
};

export default function RevenueCategories() {

    useEffect(() => {
      const data = getDataByYear('2020');
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


