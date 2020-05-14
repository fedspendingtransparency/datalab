import React from 'react';


export default function Bar(props) {
  console.log(props);

  const callout = {
    starterHeight: 30,
    endingHeight: 10,
    lineStroke: 1,
    lineHeight: 20,
    lineColor: '#ddd'
  }

  const threshold = {
    outlayLabelOffset: 1,
    outlayLabelWidth: 5,
    padding: 2,
    obligatedLabelWidth: 10,
    unobligatedWidth: 80,
    right: 90
  }

  /* props
    lineColor = hex value for line color
    xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
    xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
  */
  function ElbowCallout(props) {
    return (<>
      <rect fill={props.lineColor} x={`${props.xStart}%`}
            y='0'
            width={callout.lineStroke}
            height={callout.starterHeight}/>

      <rect fill={props.lineColor}
            x={`${props.xStart}%`}
            y={callout.starterHeight}
            width={`${props.xEnd - props.xStart}%`}
            height={callout.lineStroke}/>

      <rect fill={props.lineColor}
            x={`${props.xEnd}%`}
            y={callout.starterHeight}
            width={callout.lineStroke}
            height={callout.endingHeight}/>
    </>)
  }

  /* props
    lineColor = hex value for line color
    xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
    xMid = x position of midpoint vertical line (pointing to label #1)
    xEnd = x position of ending vertical line, end of the horizontal line (pointing to label #2)
  */
  function JoinedCallout(props) {
    return(<>
      <rect fill={props.lineColor} x={`${props.xStart}%`}
            y='0'
            width={callout.lineStroke}
            height={callout.starterHeight} />

      <rect fill={props.lineColor}
            x={`${props.xStart}%`}
            y={callout.starterHeight}
            width={`${props.xEnd - props.xStart}%`}
            height={callout.lineStroke} />

      <rect fill={props.lineColor}
            x={`${props.xMid}%`}
            y={callout.starterHeight}
            width={callout.lineStroke}
            height={callout.endingHeight} />

      <rect fill={props.lineColor}
            x={`${props.xEnd}%`}
            y={callout.starterHeight}
            width={callout.lineStroke}
            height={callout.endingHeight} />
    </>)
  }

  /* props
    lineColor = hex value for line color
    xStart = x position vertical line
  */
  function straightCallout(props) {
    <rect fill={props.lineColor} x={`${props.xStart}%`}
          y='0'
          width={callout.lineStroke}
          height={callout.starterHeight} />
  }

  const items = props.data.allSf133Viz3AgencyPopout20200506Csv.nodes;

  function LeftLegend(props) {
    const calloutBeginning = threshold.outlayLabelOffset / 2;
    const calloutMidpoint = threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2;
    const obligatedLabelMidPoint = threshold.outlayLabelOffset / 2 + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2;
    const textPosition = callout.starterHeight + callout.lineStroke + callout.endingHeight + callout.lineHeight;
    const obligatedLabelOffset = threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding;

    // joined outlay and obligation callout
    if(props.outlaid + props.obligated < threshold.outlayLabelOffset) {
      return(<>
        <g className='outlay-connector'>
          <JoinedCallout
            lineColor='#ddd'
            xStart={calloutBeginning}
            xMid={calloutMidpoint}
            xEnd={obligatedLabelMidPoint} />
          <text fill='black' x={`${threshold.outlayLabelOffset}%`} y={textPosition} fontSize='14px'>Outlays</text>
          <text fill='black' x={`${obligatedLabelOffset}%`} y={textPosition} fontSize='14px'>Obligated</text>
        </g>
        </>)

    } else if (props.outlaid < threshold.outlayLabelOffset) {
      if (props.outlaid + props.obligated < threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth) {
        return (<>
          <g className='outlay-connector'>
            <JoinedCallout
              lineColor='#ddd'
              xStart={calloutBeginning}
              xMid={calloutMidpoint}
              xEnd={obligatedLabelMidPoint}/>
            <text fill='black' x={`${threshold.outlayLabelOffset}%`} y={textPosition}
                  fontSize='14px'>Outlays
            </text>
            <text fill='black' x={`${obligatedLabelOffset}%`} y={textPosition}
                  fontSize='14px'>Obligated
            </text>
          </g>
        </>)
      }
    }

    //   else {
    //
    //   }
    //   return (<>
    //     {/*<g className='outlay-connector'>*/}
    //       {/*<rect fill='red' x={`${threshold.outlayLabelOffset}%`} y='0' width={callout.lineStroke}*/}
    //             {/*height={connector.starterHeight}></rect>*/}
    //       {/*/!*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*!/*/}
    //       {/*/!*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*!/*/}
    //       {/*<text fill='black' x={`${threshold.outlayLabelOffset}%`} y='60' fontSize='14px'>Outlays</text>*/}
    //     {/*</g>*/}
    //     {/*<g className='obligated-connector'>*/}
    //       {/*<rect fill='red' x={props.obligatedMidPoint} y='0' width={callout.lineStroke}*/}
    //             {/*height={callout.starterHeight}></rect>*/}
    //       {/*/!*<rect fill='red' x='50%' y={connector.startingPointer} width='10%' height={connector.lineWidth}></rect>*!/*/}
    //       {/*/!*<rect fill='red' x='60%' y={connector.startingPointer} width={connector.lineWidth} height={connector.endPointer}></rect>*!/*/}
    //       {/*<text fill='black' x={props.obligatedMidPoint} y='60' fontSize='14px'>Obligated</text>*/}
    //     {/*</g>*/}
    //   </>)
    // }

    return<></>
  }

  function RightLegend(props) {
    return (<>
        {/* this should right aligned */}
        <g className='unobligated-connector'>
          <rect fill='red' x={`${threshold.right}%`} y='0' width={callout.lineStroke} height={callout.starterHeight}></rect>
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