import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';

import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import DeficitData from '../../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';

import { establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import { resetForResizeMobile } from 'src/afg-helpers/dots/revenue-and-spending/compareManager';
import { setChartWidth } from '../helpers/widthManager';
import { dotsPerRow, setDotsPerRow } from '../helpers/dotConstants';
import { createMobileLayers } from '../helpers/createLayers';
import colors from 'src/styles/afg/colors.scss';
import { initMobileLegend } from '../helpers/legend';
import { layersInitMobile } from '../helpers/manageLayers';
import { createMobileSpendingViz } from '../helpers/createMobileSpendingViz';

const SpendingTab = () => {
  const config = {
    anecdoteName: 'anecdote-deficit.svg',
    revenueAmount: findAmountInCsv('federal revenue', DeficitData),
    spendingAmount: findAmountInCsv('federal spending', DeficitData),
    debtBalance: findAmountInCsv('federal debt', DeficitData),
    deficitAmount: Math.abs(findAmountInCsv('federal deficit', DeficitData)),
    reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
    compareString: 'revenue',
    revenueColor: '#B9C0CB',
    spendingColor: '#BCD7D3',
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs: {
      title: '2019 Federal Deficit, Revenue, and Spending',
      desc: 'A deficit occurs when spending exceeds revenue. For 2019, the $4.4 trillion in federal spending exceeded the $3.5 trillion in federal revenue leading to a deficit of $984 billion.',
    }
  }

  let chartHeight;
  let dotsHeight;

  const setMainContainer = () => {
    const count = config.deficitAmount / 10000000000;
    const rows = Math.ceil(count / dotsPerRow)
    dotsHeight = (rows * 5);
    
    const spendingCount = config.spendingAmount / 10000000000;
    const spendingRows = Math.ceil(spendingCount / dotsPerRow);
    chartHeight = (spendingRows * 5) + 65;
    
    const mainContainer = establishContainer(chartHeight, window.innerWidth - 30, config.accessibilityAttrs).append('g').classed('main', true);
    config.mainContainer = mainContainer;
  }

  const init = () => {
    setChartWidth();
    setDotsPerRow(window.innerWidth * .25);
    setMainContainer();
    initMobileLegend(config);
    createMobileSpendingViz(config, chartHeight, window.innerWidth - 30, dotsHeight)
  }

  useEffect(() => {
    init();

    const resetAndInit = () => {
      const x = config.mainContainer.selectAll('*').remove();

      if (window.innerWidth < 960) {
        init();
      }
    }

    window.addEventListener('resize', resetAndInit);
    return () => {
      window.removeEventListener('resize', resetAndInit);
    }
  }, []);

  return (
    <>
      <div className="deficit-tab-viz">
        <div id="viz" />
        <div className="intro-math">
          <FontAwesomeIcon icon={faReply} className="fas fa-reply intro-math__icon" />
          {AfgData.dot_number_deficit.value} dots x {AfgData.dot_represents.value} = <strong>{AfgData.current_fy_deficit.value}</strong>
        </div>
      </div>
      <div className="deficit-tab-text">
        When spending exceeds revenue, the difference is a deficit, which the federal government finances mainly by borrowing from the public.
      </div>
      <div className="deficit-tab-main-text">
        How did we end up with a deficit? A deficit occurs when the money going out exceeds the money coming in. Since the federal government spent $6.3 trillion and collected $3.4 trillion in 2020, the government ran a deficit for the year.
      </div>
    </>
  );
}
 
export default SpendingTab;