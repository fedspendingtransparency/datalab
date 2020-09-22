import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faReply } from '@fortawesome/free-solid-svg-icons';
import AfgData from '../../../../../static/americas-finance-guide/_data/object_mapping.yml';

const SpendingTab = () => {
  return (
    <>
      <div className="deficit-tab-viz">
        <div id="viz">
          Spending
        </div>
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