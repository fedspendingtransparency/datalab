import React from 'react';


export default function Bar(props) {
  console.log(props);
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

  /* props
    lineColor = hex value for line color
    xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
    xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
  */
  function ElbowCallout(props) {
    return (<>
      <rect fill={defaults.lineColor} x={`${props.xStart}%`}
            y='0'
            width={defaults.lineStroke}
            height={defaults.starterHeight}/>

      <rect fill={defaults.lineColor}
            x={`${props.xStart}%`}
            y={defaults.starterHeight}
            width={`${props.xEnd - props.xStart}%`}
            height={defaults.lineStroke}/>

      <rect fill={defaults.lineColor}
            x={`${props.xEnd}%`}
            y={defaults.starterHeight}
            width={defaults.lineStroke}
            height={defaults.endingHeight}/>

      <text fill='black' x={`${props.labelOffset}%`} y={defaults.textPosition} fontSize='14px'>
        {props.label}
      </text>
    </>)
  }

  /* props
  lineColor = hex value for line color
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/
  function ReverseElbowCallout(props) {
    return (<>
      <rect fill={defaults.lineColor} x={`${props.xStart}%`}
            y='0'
            width={defaults.lineStroke}
            height={defaults.starterHeight}/>

      <rect fill={defaults.lineColor}
            x={`${props.xEnd}%`}
            y={defaults.starterHeight}
            width={`${props.xStart - props.xEnd}%`}
            height={defaults.lineStroke}/>

      <rect fill={defaults.lineColor}
            x={`${props.xEnd}%`}
            y={defaults.starterHeight}
            width={defaults.lineStroke}
            height={defaults.endingHeight}/>

      <text fill='black' x={`${props.labelOffset}%`} y={defaults.textPosition} fontSize='14px'>
        {props.label}
      </text>
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
    <rect fill={defaults.lineColor}
            x={`${props.xStart}%`}
            y='0'
            width={defaults.lineStroke}
            height={defaults.starterHeight} />

      <rect fill={defaults.lineColor}
            x={`${props.xStart}%`}
            y={defaults.starterHeight}
            width={`${props.xEnd - props.xStart}%`}
            height={defaults.lineStroke} />

      <rect fill={defaults.lineColor}
            x={`${props.xMid}%`}
            y={defaults.starterHeight}
            width={defaults.lineStroke}
            height={defaults.endingHeight} />

      <rect fill={defaults.lineColor}
            x={`${props.xEnd}%`}
            y={defaults.starterHeight}
            width={defaults.lineStroke}
            height={defaults.endingHeight} />

      <text fill='black' x={`${props.label1Offset}%`} y={defaults.textPosition} fontSize='14px'>{props.label1}</text>
      <text fill='black' x={`${props.label2Offset}%`} y={defaults.textPosition} fontSize='14px'>{props.label2}</text>
    </g>)
  }

  /* props
    lineColor = hex value for line color
    xStart = x position vertical line
  */
  function StraightCallout(props) {
    return(<g className='outlay-connector'>
      <rect fill={defaults.lineColor}
          x={`${props.xStart}%`}
          y='0'
          width={defaults.lineStroke}
          height={defaults.starterHeight + defaults.endingHeight} />

        <text fill='black' x={`${props.labelOffset}%`} y={defaults.textPosition} fontSize='14px'>
          {props.label}
        </text>
      </g>)
  }

  function CalloutBar(props) {
    // set bar state
    // joined outlay and obligation callout
    const barState = ['spaced', 'elbow', 'joined'];

    const barStatus = {
      outlay: barState[0],
      obligated: barState[0],
      unobligated: barState[0]
    };

    const outlayLabelMidPoint = Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2).toFixed(2);
    const obligatedLabelMidPoint = Number.parseFloat(threshold.outlayLabelOffset / 2 + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2).toFixed(2);

    // joined
    if (props.outlaid + props.obligated < threshold.outlayLabelOffset) {
      barStatus.outlay = barState[2];
      barStatus.obligated = barState[2];

    } else if (props.outlaid <= outlayLabelMidPoint) {

        if (props.outlaid + props.obligated / 2 <= outlayLabelMidPoint) {
          barStatus.outlay = barState[2];
          barStatus.obligated = barState[2];

        } else if (props.outlaid + props.obligated / 2 > obligatedLabelMidPoint) {
          barStatus.outlay = barState[1];
          barStatus.obligated = barState[0];

        } else if (props.outlaid + props.obligated / 2 > outlayLabelMidPoint) {
          barStatus.outlay = barState[1];
          barStatus.obligated = barState[1];

          // not sure about this state
        } else if (props.outlaid + props.obligated / 2 <= obligatedLabelMidPoint) {
          barStatus.outlay = barState[2];
          barStatus.obligated = barState[2];

        } else {
          console.error("shouldnt be here")
          barStatus.outlay = barState[1];
          barStatus.obligated = barState[1];
        }

    } else if (props.outlaid > outlayLabelMidPoint) {
      barStatus.outlay = barState[0];

      if (props.outlaid + props.obligated * .75 > obligatedLabelMidPoint) {
        barStatus.obligated = barState[0];

      } else {
        barStatus.obligated = barState[1];
      }
    } else {
      // this should be an error!!
      console.error('I think we have an error here', props.agency);
    }

    if(props.unobligated < 100 - threshold.rightOffset) {
      barStatus.unobligated = barState[1];

    } else {
      barStatus.unobligated = barState[0];
    }

    let calloutComponent = [];

    // joined label
    if(barStatus.outlay === barState[2]) {
      const outlaySettings = {
        start: Number.parseFloat(threshold.outlayLabelOffset / 2).toFixed(2),
        labelMidpoint: Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2).toFixed(2),
      }

      const obligatedSettings = {
        labelOffset: Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding).toFixed(2),
        labelMidpoint: Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2).toFixed(2),
      }

      calloutComponent.push(<JoinedCallout
        xStart={props.outlaid / 2}
        xMid={outlaySettings.labelMidpoint}
        xEnd={obligatedSettings.labelMidpoint}
        label1Offset={threshold.outlayLabelOffset}
        label2Offset={obligatedSettings.labelOffset}
        label1={'Outlays ($XX B)'}
        label2={'Obligated ($XX B)'}/>)

    } else if(barStatus.outlay === barState[0]) {
      calloutComponent.push(<StraightCallout
        xStart={2}
        labelOffset={threshold.outlayLabelOffset}
        label={'Outlays ($XX B)'}/>)

    } else {
      calloutComponent.push(<ElbowCallout
        xStart={props.outlaid / 2}
        xEnd={threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2}
        labelOffset={threshold.outlayLabelOffset}
        label={'Outlays ($XX B)'} />)
    }

    if(barStatus.obligated === barState[0]) {
      console.log(props);
      console.log(props.outlaid + props.obligated / 2 - threshold.obligatedLabelWidth / 2)
      calloutComponent.push(<StraightCallout
        xStart={parseFloat(props.outlaid + props.obligated / 2)}
        labelOffset={parseFloat(props.outlaid + props.obligated / 2 - threshold.obligatedLabelWidth / 2)}
        label={'Obligated ($XX B)'}/>)

    } else if(barStatus.obligated === barState[1]) {
    calloutComponent.push(<ElbowCallout
        xStart={props.outlaid + props.obligated / 2}
        xEnd={threshold.obligatedLabelOffset + threshold.outlayLabelWidth / 2}
        labelOffset={threshold.obligatedLabelOffset}
        label={'Obligated ($XX B)'} />)
    } else {
      console.log('should never get here1-', props.agency)
    }

    if(barStatus.unobligated === barState[0]) {
      calloutComponent.push(<StraightCallout
        xStart={threshold.rightOffset - 2}
        labelOffset={threshold.unobligatedLabelOffset}
        label={'Unobligated ($XX B)'}/>)

    } else if(barStatus.unobligated === barState[1]) {
      calloutComponent.push(<ReverseElbowCallout
        xStart={props.outlaid + props.obligated + props.unobligated / 2}
        xEnd={95}
        labelOffset={threshold.unobligatedLabelOffset}
        label={'Unobligated ($XX B)'}/>)
    } else {
      console.error('should never get here2', props.agency)
    }

    return(<>
      {calloutComponent[0]}
      {calloutComponent[1]}
      {calloutComponent[2]}
    </>)
  }

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