import React from 'react';
import defaults from './utils/defaults';
import PropTypes from 'prop-types';

/* props
lineColor = hex value for line color
xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/

ReversedElbowCallout.propTypes = {
  'xStart': PropTypes.number.isRequired,
  'xEnd': PropTypes.number.isRequired,
  'labelOffset': PropTypes.number.isRequired,
  'label': PropTypes.string.isRequired,
  'labelAmount': PropTypes.string.isRequired
};


export default function ReversedElbowCallout(props) {
  const shiftLabel = 10;
  const shiftAmount = 12;

  function TextBlock() {
    if(props.isModal) {
      return (<>
        <text fill={defaults.fontColor} x={`${props.labelOffset + shiftLabel}%`} y={defaults.textPosition}
              fontSize={defaults.fontSize} fontWeight='bold'>
          {props.label}&nbsp;
        </text>
        <text fill={defaults.fontColor} x={`${props.labelOffset + shiftAmount}%`} y={defaults.textPosition + defaults.lineHeight}
              fontSize={defaults.smFontSize}>
          {props.labelAmount}&nbsp;({`${props.labelPercent}%`})
        </text>
      </>)
    } else {
      return <text fill={defaults.fontColor} x={`${props.labelOffset}%`} y={defaults.textPosition}
                   fontSize={defaults.fontSize}>
        {props.label} ({props.labelAmount})
      </text>
    }
  }

  return (<>
    <rect
      fill={defaults.lineColor} x={`${props.xStart}%`}
      y='0'
      width={defaults.lineStroke}
      height={defaults.starterHeight}
    />

    <rect
      fill={defaults.lineColor}
      x={`${props.xEnd}%`}
      y={defaults.starterHeight}
      width={`${props.xStart - props.xEnd}%`}
      height={defaults.lineStroke}
    />

    <rect
      fill={defaults.lineColor}
      x={`${props.xEnd}%`}
      y={defaults.starterHeight}
      width={defaults.lineStroke}
      height={defaults.endingHeight}
    />

    <TextBlock/>
  </>)
}