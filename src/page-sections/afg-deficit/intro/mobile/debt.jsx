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
import { createMobileDebtViz } from '../helpers/createMobileDebtViz';

const DebtTab = () => {
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
    federalDebtColor: '#EEE9F1',
    priorYearDebtColor: '#CFC0D8',
    accessibilityAttrs: {
      title: '2019 Federal Deficit and Debt',
      desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.',
    }
  }

  let chartHeight;
  let dotsHeight;

  const setMainContainer = () => {
    const count = config.deficitAmount / 10000000000;
    const rows = Math.ceil(count / dotsPerRow)
    dotsHeight = (rows * 5);
    
    const debtCount = config.debtBalance / 10000000000;
    const debtRows = Math.ceil(debtCount / dotsPerRow);
    chartHeight = (debtRows * 5) + 65;
    
    const mainContainer = establishContainer(chartHeight, window.innerWidth - 30, config.accessibilityAttrs).append('g').classed('main', true);
    config.mainContainer = mainContainer;
  }

  const init = () => {
    setChartWidth();
    setDotsPerRow((window.innerWidth - 30) * .7);
    setMainContainer();
    initMobileLegend(config, true);
    createMobileDebtViz(config, chartHeight, window.innerWidth - 30, dotsHeight)
  }

  useEffect(() => {
    init();

    const resetAndInit = () => {
      resetForResizeMobile();

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
        To pay for a deficit, the government takes on debt. The total debt that the government owes is essentially the accumulation of deficits over time, minus repayments of debt.
        <div className="deficit-tab-subtext">
          *The $1.2 T increase in federal debt actually consists of the $984 B deficit along with changes to operating cash balance, intergovernmental holdings, and other financial activities.
          In the visualization, the operating cash balance, intergovernmental holdings, and other financial activities were combined with the prior year debt balance for simplicity.
        </div>
      </div>
      <div className="deficit-tab-main-text">
        How did we end up with a deficit? A deficit occurs when the money going out exceeds the money coming in. Since the federal government spent $6.3 trillion and collected $3.4 trillion in 2020, the government ran a deficit for the year.
      </div>
    </>
  );
}
 
export default DebtTab;