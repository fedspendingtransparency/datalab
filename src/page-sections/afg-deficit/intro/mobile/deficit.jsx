import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';

import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';
import DeficitData from '../../../../../static/americas-finance-guide/data/explore_federal_deficit.csv';

import { establishContainer, findAmountInCsv } from 'src/afg-helpers/utils';
import { setChartWidth } from '../helpers/widthManager';
import { setDotsPerRow } from '../helpers/dotConstants';
import { createLayers } from '../helpers/createLayers';
import colors from 'src/styles/afg/colors.scss';
import { layersInitMobile } from '../helpers/manageLayers';

const DeficitTab = () => {
  const config = {
    anecdoteName: 'anecdote-deficit.svg',
    revenueAmount: findAmountInCsv('federal revenue', DeficitData),
    spendingAmount: findAmountInCsv('federal spending', DeficitData),
    debtBalance: findAmountInCsv('federal debt', DeficitData),
    reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData),
    compareString: 'revenue',
    revenueColor: colors.colorPrimary,
    spendingColor: colors.colorSpendingPrimary,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs: {
      title: '2019 Federal Deficit',
      desc: 'The image illustrates the federal government’s deficit in 2019 using dots, and each dot is equal to a billion dollars. There are 984 dots.',
    }
  }

  const setMainContainer = () => {
    const mainContainer = establishContainer(300, null, config.accessibilityAttrs).append('g').classed('main', true);
    config.mainContainer = mainContainer;
  }

  useEffect(() => {
    setChartWidth();
    setMainContainer();
    setDotsPerRow();
    createLayers(config);
    layersInitMobile(config);
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
      <div className="deficit-tab-main-text">
        How did we end up with a deficit? A deficit occurs when the money going out exceeds the money coming in. Since the federal government spent $6.3 trillion and collected $3.4 trillion in 2020, the government ran a deficit for the year.
      </div>
    </>
  );
}
 
export default DeficitTab;