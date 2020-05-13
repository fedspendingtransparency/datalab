import React from 'react';


export default function Bar(props) {
  console.log(props);

  const connector = {
    startingPointer: 35,
    endPointer: 10,
    lineWidth: 2
  }

  console.log(props)
  const threshold = {
    left: 1,
    outlayWidth: 10,
    unobligatedWidth: 80,
    right: 90
  }

  const items = props.data.allSf133Viz3AgencyPopout20200506Csv.nodes;

  function LeftLegend(props) {
    if(props.outlaid + props.obligated < threshold.outlayWidth) {
      // joined outlay and obligation
      return(<>
        <g className='outlay-connector'>
          <rect fill='red' x={`${threshold.left}%`} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
          <text fill='black' x={`${threshold.left}%`} y='60' fontSize='14px'>Outlays / Obligated</text>
        </g>
        </>)
    } else if (props.outlaid < threshold.outlayWidth) {
          return(<>
          <g className='outlay-connector'>
          <rect fill='red' x={`${threshold.left}%`} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
          {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
          {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
          <text fill='black' x={`${threshold.left}%`} y='60' fontSize='14px'>Outlays</text>
          </g>
          <g className='obligated-connector'>
          <rect fill='red' x={props.obligatedMidPoint} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
          {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
          {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
          <text fill='black' x={props.obligatedMidPoint} y='60' fontSize='14px'>Obligated</text>
          </g>
          </>)
    }
  }

  function RightLegend(props) {
    return (<>
        {/* this should right aligned */}
        <g className='unobligated-connector'>
          <rect fill='red' x={`${threshold.right}%`} y='0' width={connector.lineWidth} height={connector.startingPointer}></rect>
          {/*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*/}
          {/*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*/}
          <text fill='black' x={`${threshold.right}%`} y='60' fontSize='14px'>UnObligated</text>
        </g>
    </>)
  }

  function PercentBar(props) {
    return(<>
        <g  className='bar'>
          <rect fill='#0074d9' x='0' width={`${props.outlaid}%`} height='25'></rect>
          <rect fill='lightblue' x={`${props.outlaid}%`} width={`${props.obligated}%`} height='25'></rect>
          <rect fill='#ccc' x={`${props.obligated}%`} width={`${props.unobligated}%`} height='25'></rect>
        </g>
      </>)
  }


  return (<>
    {items.map(function(item, key) {
      const outlaid = parseInt(item.Percent_Outlaid);
      const obligated = parseInt(item.Percent_Obligated);
      const unobligated = parseInt(item.Percent_Unobligated);

      const outlayMidPoint = `${Math.round(outlaid / 2)}%`;
      const obligatedMidPoint = `${Math.round(10 + obligated / 2)}%`;
      const unobligatedMidPoint = `${Math.round(outlaid + obligated + unobligated / 2)}%`;

      return(<div key={key}>
        <p>{item.Agency}: {item.Account_Name}</p>
        <svg width='100%' height='65px'>
          <LeftLegend obligatedMidPoint={obligatedMidPoint} outlaid={outlaid} obligated={obligated} />
          <RightLegend />
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