import React from 'react';
import ElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-elbow';
import ReversedJoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-joined';
import JoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/straight';
import threshold from '../callouts/utils/thresholds';
import PropTypes from 'prop-types';

CalloutBar.propTypes = {
  'outlaid': PropTypes.number.isRequired,
  'obligated': PropTypes.number.isRequired,
  'unobligated': PropTypes.number.isRequired,
};

export default function CalloutBar(props) {

  const barState = ['straight', 'elbow', 'joined', 'reversed-elbow', 'reversed-joined'];

  const barStatus = {
    outlay: barState[1],
    obligated: barState[1],
    unobligated: barState[1]
  };

  const outlayLabelMidPoint = parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2);
  const obligatedLabelMidPoint = parseFloat(threshold.outlayLabelOffset / 2 + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2);
  const unObligatedLabelMidPoint = parseFloat(100 - ((threshold.rightOffset - threshold.unobligatedLabelOffset) / 2));


  // joined
  if (props.outlaid + props.obligated < threshold.outlayLabelOffset) {
    barStatus.outlay = barState[2];
    barStatus.obligated = barState[2];

  } else if (props.outlaid <= outlayLabelMidPoint) {
    if (props.outlaid + props.obligated / 2 <= outlayLabelMidPoint) {
      barStatus.outlay = barState[2];
      barStatus.obligated = barState[2];

    } else if (props.outlaid + props.obligated / 2 > obligatedLabelMidPoint) {
      if(props.outlaid + props.obligated > unObligatedLabelMidPoint) {
        barStatus.obligated = barState[4];
        barStatus.unobligated = barState[4];

      } else if (props.outlaid + props.obligated > threshold.unobligatedLabelOffset) {
        barStatus.obligated = barState[3];
      } else {
        barStatus.outlay = barState[1];
        barStatus.obligated = barState[0];
      }

    } else if (props.outlaid + props.obligated / 2 > outlayLabelMidPoint) {
      barStatus.outlay = barState[1];
      barStatus.obligated = barState[1];

      // not sure about this state
    } else if (props.outlaid + props.obligated / 2 <= obligatedLabelMidPoint) {
      barStatus.outlay = barState[2];
      barStatus.obligated = barState[2];
    } else {
      console.error('Uncaught condition 1 in callout bar');
    }

  } else if (props.outlaid > outlayLabelMidPoint) {
    barStatus.outlay = barState[0];

    if (props.outlaid + props.obligated * .5 > obligatedLabelMidPoint) {
      if(props.outlaid + props.obligated > threshold.rightOffset) {
        barStatus.obligated = barState[4];
        barStatus.unobligated = barState[4];

      } else if (props.outlaid + props.obligated > unObligatedLabelMidPoint) {
        barStatus.obligated = barState[3];
      } else {
        barStatus.obligated = barState[0];
      }

    } else if (props.outlaid + props.obligated / 2 > outlayLabelMidPoint) {
      barStatus.obligated = barState[1];

      // not sure about this state
    } else if (props.outlaid + props.obligated / 2 <= obligatedLabelMidPoint) {
      barStatus.outlay = barState[2];
      barStatus.obligated = barState[2];
    }
     else {
      barStatus.obligated = barState[1];
    }
  } else {
    console.error('Uncaught condition 2 in callout bar');
  }

  if (props.unobligated < 100 - threshold.rightOffset) {
    if(barStatus.unobligated !== barState[4]) barStatus.unobligated = barState[1];

  } else {
    if(barStatus.unobligated !== barState[4]) barStatus.unobligated = barState[0];
  }

  let calloutComponent = [];

  setOutlays();
  setObligated();
  setUnobligated();

  function setOutlays() {
    const outlaySettings = {
      defaultStartingPoint: 2,
      outlaidBarMidpoint: props.outlaid / 2,
      labelMidpoint: threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2,
    };

    const obligatedSettings = {
      labelOffset: threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding,
      labelMidpoint: threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding + threshold.obligatedLabelWidth / 2,
    };

    // joined label
    if (barStatus.outlay === barState[2]) {
      calloutComponent.push(<JoinedCallout
        xStart={outlaySettings.outlaidBarMidpoint}
        xMid={outlaySettings.labelMidpoint}
        xEnd={obligatedSettings.labelMidpoint}
        label1Offset={threshold.outlayLabelOffset}
        label2Offset={obligatedSettings.labelOffset}
        label1={'Outlays'}
        label2={'Obligated'}
        label1Amount={props.data[0].amount}
        label2Amount={props.data[1].amount}
        narrow={props.narrow}
      />)

    } else if (barStatus.outlay === barState[0]) {
      calloutComponent.push(<StraightCallout
        xStart={outlaySettings.defaultStartingPoint}
        labelOffset={threshold.outlayLabelOffset}
        label={`Outlays`}
        labelAmount={props.data[0].amount}
        narrow={props.narrow}
      />)

    } else {
      calloutComponent.push(<ElbowCallout
        xStart={outlaySettings.outlaidBarMidpoint}
        xEnd={outlaySettings.labelMidpoint}
        labelOffset={threshold.outlayLabelOffset}
        label={`Outlays`}
        labelAmount={props.data[0].amount}
        narrow={props.narrow}
      />)
    }
  }

  function setObligated() {
    if (barStatus.obligated === barState[0]) {
      calloutComponent.push(<StraightCallout
        xStart={parseFloat(props.outlaid + props.obligated / 2)}
        labelOffset={parseFloat(props.outlaid + props.obligated / 2 - threshold.obligatedLabelWidth / 2)}
        label={`Obligated`}
        labelAmount={props.data[1].amount}
        narrow={props.narrow}
      />)

    } else if (barStatus.obligated === barState[1]) {
      calloutComponent.push(<ElbowCallout
        xStart={props.outlaid + props.obligated / 2}
        xEnd={threshold.obligatedLabelOffset + threshold.outlayLabelWidth / 2}
        labelOffset={threshold.obligatedLabelOffset}
        label={`Obligated`}
        labelAmount={props.data[1].amount}
        narrow={props.narrow}
      />)
    } else if(barStatus.obligated === barState[3]) {
      calloutComponent.push(<ReversedElbowCallout
        xStart={props.outlaid + props.obligated / 2}
        xEnd={threshold.obligatedLabelOffset + threshold.outlayLabelWidth / 2}
        labelOffset={threshold.obligatedLabelOffset}
        label={`Obligated`}
        labelAmount={props.data[1].amount}
        narrow={props.narrow}
      />)
    } else if(barStatus.obligated === barState[4]) {
      // reversed joined
      calloutComponent.push(<ReversedJoinedCallout
        xStart={(props.outlaid + props.obligated + props.unobligated / 2) - 0.5}
        xMid={90}
        xEnd={60}
        label1Offset={55}
        label2Offset={threshold.unobligatedLabelOffset}
        label1={'Obligated'}
        label2={'Unobligated'}
        label1Amount={props.data[1].amount}
        label2Amount={props.data[2].amount}
        narrow={props.narrow}
      />)
    }

  }

  function setUnobligated() {
    if (barStatus.unobligated === barState[0]) {
      calloutComponent.push(<StraightCallout
        xStart={threshold.rightOffset}
        labelOffset={threshold.unobligatedLabelOffset}
        label={`Unobligated`}
        labelAmount={props.data[2].amount}
        narrow={props.narrow}
      />)

    } else if (barStatus.unobligated === barState[1]) {
      calloutComponent.push(<ReversedElbowCallout
        xStart={props.outlaid + props.obligated + props.unobligated / 2}
        xEnd={90}
        labelOffset={threshold.unobligatedLabelOffset}
        label={`Unobligated`}
        labelAmount={props.data[2].amount}
        narrow={props.narrow}
      />)
    }
  }

  return (<>
    {calloutComponent[0]}
    {calloutComponent[1]}
    {calloutComponent[2]}
  </>);
}
