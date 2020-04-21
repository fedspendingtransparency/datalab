import React from 'react';
import Share from '../../../components/share/share';

export default function Spending(props) {
  return (<>
    <Share
      siteUrl={props.location.origin}
      pageUrl={props.location.pathname + '#' + props.sectionId}
      title='Data Lab - R&D in Contract Spending - U.S. Treasury'
      text={`Which agencies had the highest proportion of contract spend devoted to R&D initiatives in FY19? Find out in #DataLab's newest analysis, R&D in Contract Spending! #OpenData #RandD`}
      hoverColor='#1302d9'
    />

    <p>spending chart</p>
  </>);
}