import React from 'react';
import defaults from './utils/defaults';
import PropTypes from 'prop-types';

/* props
  xStart = x position vertical line
*/

StraightCallout.propTypes = {
  'xStart': PropTypes.number.isRequired,
  'labelOffset': PropTypes.number.isRequired,
  'label': PropTypes.string.isRequired,
  'labelAmount': PropTypes.string.isRequired
};

export default function StraightCallout(props) {
  const shiftLabel = props.label === 'Unobligated' ? 10 : 0;
  const shiftAmount = props.label === 'Unobligated' ? 10 : 0;

  function TextBlock() {
    if(props.narrow) {
      return (<>
        <text fill={defaults.fontColor}
              x={`${props.labelOffset + shiftLabel}%`}
              y={defaults.textPosition}
              fontSize={defaults.fontSize}
              fontWeight='bold'>
          {props.label}
        </text>
        <text fill={defaults.fontColor}
              x={`${props.labelOffset + shiftAmount}%`}
              y={defaults.textPosition + defaults.lineHeight}
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

  return (<g className='outlay-connector'>
    <rect
      fill={defaults.lineColor}
      x={`${props.xStart}%`}
      y='0'
      width={defaults.lineStroke}
      height={defaults.starterHeight + defaults.endingHeight}
    />

    <TextBlock/>
  </g>)
}