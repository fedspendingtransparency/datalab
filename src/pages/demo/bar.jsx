import React from 'react';
import CalloutBar from 'src/page-sections/federal-covid-spending/tracking/callouts/callout-bar';

export default function Bar(props) {
    const items = props.data.allSf133Viz3AgencyPopout20200506Csv.nodes;

    const defaults = {
      starterHeight: 30,
      endingHeight: 5,
      lineStroke: 1,
      lineHeight: 14,
      lineColor: '#ddd',
      textPosition: null
    }

    defaults['textPosition'] = Number.parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight).toFixed(2);

    // threshold is an estimated percentage of the bar
    const threshold = {
      outlayLabelOffset: 1,
      outlayLabelWidth: 7,
      padding: 5,
      obligatedLabelWidth: 7,
      unobligatedLabelOffset: 89,
      rightOffset: 99,
    }

    threshold['obligatedLabelOffset'] = Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding);

  function PercentBar(props) {
    return(<g  className='bar'>
          <rect fill='#0074d9' x='0' width={`${props.outlaid}%`} height='25'></rect>
          <rect fill='lightblue' x={`${props.outlaid}%`} width={`${props.obligated}%`} height='25'></rect>
          <rect fill='#ccc' x={`${props.outlaid + props.obligated}%`} width={`${props.unobligated}%`} height='25'></rect>
        </g>)
  }


  return (<>
    {items.map(function(item, key) {
      const outlaid = parseFloat(item.Percent_Outlaid);
      const obligated = parseFloat(item.Percent_Obligated);
      const unobligated = parseFloat(item.Percent_Unobligated);

      return(<div key={key}>
        <p>{item.Agency}: {item.Account_Name}</p>
        <svg width='100%' height='65px'>
          <CalloutBar outlaid={outlaid} obligated={obligated} unobligated={unobligated} agency={item.Agency}/>
          <PercentBar outlaid={outlaid} obligated={obligated} unobligated={unobligated} />
        </svg>
      </div>);
    })}
  </>)
}

export const IndexQuery = graphql`
  query {
    allSf133Viz3AgencyPopout20200506Csv {
      nodes {
        Account_Name
        Agency
        Amount_Obligated
        Amount_Outlaid
        Amount_Unobligated
        Percent_Obligated
        Percent_Outlaid
        Percent_Unobligated
        Total_Budgetary_Authority
      }
    }
  }
`