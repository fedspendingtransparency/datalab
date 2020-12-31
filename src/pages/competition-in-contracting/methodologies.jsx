import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';

function CICHWCTA(props) {
  const title = 'COMPETITION IN CONTRACTING';


  const methodologies = [{
   content: <p>
     This analysis is generated directly from data available in the Federal Procurement Data System Next Generation,
     which is the source of U.S. federal procurement data on USASpending.gov. Data updated Dec 2017.
   </p>
  }];

  return (
    <HWCTA location={props.location} title={title} methodologies={methodologies}>
    </HWCTA>
  )
}

export default CICHWCTA;
