import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';

const DebtTab = () => {
  return (
    <>
      <div className="deficit-tab-viz" id="viz">
        Debt
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