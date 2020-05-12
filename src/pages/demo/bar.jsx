import React from 'react';


export default function Bar(props) {
  console.log(props);

  const connector = {
    startingPointer: 35,
    endPointer: 10,
    lineWidth: 2
  }

  const items = props.data.allSf133Viz3AgencyPopout20200506Csv.nodes;
  return (<>
    {items.map(function(item, key) {

      console.log(props)
      const outlaid = parseInt(item.Percent_Outlaid);
      const obligated = parseInt(item.Percent_Obligated);
      const unobligated = parseInt(item.Percent_Unobligated);

      const outlayMidPoint = `${Math.round(outlaid / 2)}%`;
      const obligatedMidPoint = `${Math.round(10 + obligated / 2)}%`;
      const unobligatedMidPoint = `${Math.round(outlaid + obligated + unobligated / 2)}%`;

      return(<div key={key}>
        <p>{item.Agency}: {item.Account_Name}</p>
        <svg width='100%' height='65px'>
          <g className='outlay-connector'>
            <rect fill='red' x={outlayMidPoint} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
            {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
            {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
            <text fill='black' x='1%' y='60' fontSize='14px'>Outlays</text>
          </g>
          <g className='obligated-connector'>
            <rect fill='red' x={obligatedMidPoint} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
            {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
            {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
            <text fill='black' x={obligatedMidPoint} y='60' fontSize='14px'>Obligated</text>
          </g>
          {/* this should right aligned */}
          <g className='unobligated-connector'>
            <rect fill='red' x={unobligatedMidPoint} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
            {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
            {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
            <text fill='black' x='90%' y='60' fontSize='14px'>UnObligated</text>
          </g>
          <g  className='bar'>
            <rect fill='#0074d9' x='0' width={`${outlaid}%`} height='25'></rect>
            <rect fill='lightblue' x={`${outlaid}%`} width={`${obligated}%`} height='25'></rect>
            <rect fill='#ccc' x={`${obligated}%`} width={`${unobligated}%`} height='25'></rect>
          </g>
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