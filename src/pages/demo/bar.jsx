import React from 'react';


export default function Bar(props) {
  console.log(props);

  const callout = {
    starterHeight: 30,
    endingHeight: 5,
    lineStroke: 1,
    lineHeight: 14,
    lineColor: '#ddd'
  }

  // threshold is an estimated percentage of the bar
  const threshold = {
    outlayLabelOffset: 1,
    outlayLabelWidth: 3,
    padding: 5,
    obligatedLabelWidth: 5,
    unobligatedLabelOffset: 90,
    right: 95
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
    return(<g className='outlay-connector'>
    <rect fill={props.lineColor}
            x={`${props.xStart}%`}
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

      <text fill='black' x={`${props.label1Offset}%`} y={props.textPosition} fontSize='14px'>{props.label1}</text>
      <text fill='black' x={`${props.label2Offset}%`} y={props.textPosition} fontSize='14px'>{props.label2}</text>
    </g>)
  }

  /* props
    lineColor = hex value for line color
    xStart = x position vertical line
  */
  function StraightCallout(props) {
    return(<g className='outlay-connector'>
      <rect fill={props.lineColor}
          x={`${props.xStart}%`}
          y='0'
          width={callout.lineStroke}
          height={callout.starterHeight + callout.endingHeight} />

        <text fill='black' x={`${props.labelOffset}%`} y={props.textPosition} fontSize='14px'>
          {props.label}
        </text>
      </g>)
  }

  const items = props.data.allSf133Viz3AgencyPopout20200506Csv.nodes;

  function CalloutBar(props) {
    const calloutBeginning = Number.parseFloat(threshold.outlayLabelOffset / 2).toFixed(2);
    const calloutMidpoint = Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2).toFixed(2);
    const obligatedLabelMidPoint = Number.parseFloat(threshold.outlayLabelOffset / 2 + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2).toFixed(2);
    const textPosition = Number.parseFloat(callout.starterHeight + callout.lineStroke + callout.endingHeight + callout.lineHeight).toFixed(2);
    const obligatedLabelOffset = Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding).toFixed(2);
    const unObligatedMidpoint = Number.parseFloat(props.outlaid + props.obligated + props.unobligated / 2).toFixed(2);


    // joined outlay and obligation callout
    if(props.outlaid + props.obligated < threshold.outlayLabelOffset) {
      return(<>
          <JoinedCallout
              lineColor='#ddd'
              xStart={calloutBeginning}
              xMid={calloutMidpoint}
              xEnd={obligatedLabelMidPoint}
              label1Offset={threshold.outlayLabelOffset}
              label2Offset={obligatedLabelOffset}
              textPosition={textPosition}
              label1={'Outlays ($XX B)'}
              label2={'Obligated ($XX B)'} />

          <StraightCallout
            lineColor='#ddd'
            xStart={unObligatedMidpoint}
            labelOffset={threshold.unobligatedLabelOffset}
            textPosition={textPosition}
            label={'Unobligated ($XX B)'} />
      </>)

    // could be missing the following condition, but not sure how important
    } else if (props.outlaid + props.obligated < threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth) {
        return (<>
          <JoinedCallout
            lineColor='#ddd'
            xStart={calloutBeginning}
            xMid={calloutMidpoint}
            xEnd={obligatedLabelMidPoint}
            label1Offset={threshold.outlayLabelOffset}
            label2Offset={obligatedLabelOffset}
            textPosition={textPosition}
            label1={'Outlays ($XX B)'}
            label2={'Obligated ($XX B)'}  />

          <StraightCallout
            lineColor='#ddd'
            xStart={unObligatedMidpoint}
            labelOffset={threshold.unobligatedLabelOffset}
            textPosition={textPosition}
            label={'Unobligated ($XX B)'} />
        </>)

    } else if (props.outlaid > threshold.outlayLabelOffset && props.obligated > obligatedLabelOffset) {
      const outlaidMidpoint = Number.parseFloat(props.outlaid / 2).toFixed(2);
      const outlaidTextPosition = Number.parseFloat(outlaidMidpoint + threshold.outlayLabelOffset).toFixed(2);
      const obligatedMidpoint = Number.parseFloat(props.outlaid + props.obligated / 2).toFixed(2);
      const obligatedTextPosition = Number.parseFloat(obligatedMidpoint - threshold.obligatedLabelWidth / 2).toFixed(2); // minus half of the text width


      return (<>
          <StraightCallout
            lineColor='#ddd'
            xStart={outlaidMidpoint}
            labelOffset={threshold.outlayLabelOffset}
            textPosition={textPosition}
            label={'Outlays ($XX B)'} />

          <StraightCallout
            lineColor='#ddd'
            xStart={obligatedMidpoint}
            labelOffset={obligatedTextPosition}
            textPosition={textPosition}
            label={'Obligated ($XX B)'} />

          <StraightCallout
            lineColor='#ddd'
            xStart={unObligatedMidpoint}
            labelOffset={threshold.unobligatedLabelOffset}
            textPosition={textPosition}
            label={'Unobligated ($XX B)'} />

      </>)
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
          <CalloutBar obligatedMidPoint={obligatedMidPoint} outlaid={outlaid} obligated={obligated} />
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