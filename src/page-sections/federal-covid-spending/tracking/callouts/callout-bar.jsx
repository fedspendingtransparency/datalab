import React from "react"
import ElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-elbow';
import JoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/straight';
import threshold from './utils/thresholds'
import PropTypes from "prop-types"

CalloutBar.propTypes = {
  'outlaid': PropTypes.number.isRequired,
  'obligated': PropTypes.number.isRequired,
  'unobligated': PropTypes.number.isRequired,
};

export default function CalloutBar(props) {

  const barState = ['straight', 'elbow', 'joined'];

  const barStatus = {
    outlay: barState[1],
    obligated: barState[1],
    unobligated: barState[1]
  };

  const outlayLabelMidPoint = parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2).toFixed(2);
  const obligatedLabelMidPoint = parseFloat(threshold.outlayLabelOffset / 2 + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2).toFixed(2);

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
      console.error("Uncaught condition 1 in callbar-bar.jsx")
    }

  } else if (props.outlaid > outlayLabelMidPoint) {
    barStatus.outlay = barState[0];

    if (props.outlaid + props.obligated * .75 > obligatedLabelMidPoint) {
      barStatus.obligated = barState[0];

    } else {
      barStatus.obligated = barState[1];
    }
  } else {
    console.error("Uncaught condition 2 in callbar-bar.jsx")
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
      start: parseFloat(threshold.outlayLabelOffset / 2).toFixed(2),
      labelMidpoint: parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2).toFixed(2),
    }

    const obligatedSettings = {
      labelOffset: parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding).toFixed(2),
      labelMidpoint: parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2).toFixed(2),
    }

    calloutComponent.push(<JoinedCallout
      xStart={props.outlaid / 2}
      xMid={outlaySettings.labelMidpoint}
      xEnd={obligatedSettings.labelMidpoint}
      label1Offset={threshold.outlayLabelOffset}
      label2Offset={obligatedSettings.labelOffset}
      label1={`Outlays (${props.data[0].amount})`}
      label2={`Obligated (${props.data[1].amount})`}/>)

  } else if(barStatus.outlay === barState[0]) {
    calloutComponent.push(<StraightCallout
      xStart={2}
      labelOffset={threshold.outlayLabelOffset}
      label={`Outlays (${props.data[0].amount})`}/>)

  } else {
    calloutComponent.push(<ElbowCallout
      xStart={props.outlaid / 2}
      xEnd={threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2}
      labelOffset={threshold.outlayLabelOffset}
      label={`Outlays (${props.data[0].amount})`} />)
  }

  if(barStatus.obligated === barState[0]) {
    calloutComponent.push(<StraightCallout
      xStart={parseFloat(props.outlaid + props.obligated / 2)}
      labelOffset={parseFloat(props.outlaid + props.obligated / 2 - threshold.obligatedLabelWidth / 2)}
      label={`Obligated (${props.data[1].amount})`}/>)

  } else if(barStatus.obligated === barState[1]) {
    calloutComponent.push(<ElbowCallout
      xStart={props.outlaid + props.obligated / 2}
      xEnd={threshold.obligatedLabelOffset + threshold.outlayLabelWidth / 2}
      labelOffset={threshold.obligatedLabelOffset}
      label={`Obligated (${props.data[1].amount})`} />)
  }

  if(barStatus.unobligated === barState[0]) {
    calloutComponent.push(<StraightCallout
      xStart={threshold.rightOffset - 2}
      labelOffset={threshold.unobligatedLabelOffset}
      label={`Unobligated (${props.data[2].amount})`}/>)

  } else if(barStatus.unobligated === barState[1]) {
    calloutComponent.push(<ReversedElbowCallout
      xStart={props.outlaid + props.obligated + props.unobligated / 2}
      xEnd={90}
      labelOffset={threshold.unobligatedLabelOffset}
      label={`Unobligated (${props.data[2].amount})`}/>)
  }

  return(<>
    {calloutComponent[0]}
    {calloutComponent[1]}
    {calloutComponent[2]}
  </>)
}
