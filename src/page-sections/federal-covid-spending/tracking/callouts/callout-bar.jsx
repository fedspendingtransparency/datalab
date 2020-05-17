import React from "react"
import ElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-elbow';
import JoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/straight';

export default function CalloutBar(props) {

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
  }

  if(barStatus.unobligated === barState[0]) {
    calloutComponent.push(<StraightCallout
      xStart={threshold.rightOffset - 2}
      labelOffset={threshold.unobligatedLabelOffset}
      label={'Unobligated ($XX B)'}/>)

  } else if(barStatus.unobligated === barState[1]) {
    calloutComponent.push(<ReversedElbowCallout
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
