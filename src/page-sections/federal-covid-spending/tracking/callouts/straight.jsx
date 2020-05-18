import React from "react"
import defaults from './utils/defaults'
import PropTypes from "prop-types"
/* props
  xStart = x position vertical line
*/

StraightCallout.propTypes = {
  'xStart': PropTypes.number.isRequired,
  'labelOffset': PropTypes.number.isRequired,
  'label': PropTypes.string.isRequired,
};

export default function StraightCallout (props){

  return(<g className='outlay-connector'>
    <rect fill={defaults.lineColor}
          x={`${props.xStart}%`}
          y='0'
          width={defaults.lineStroke}
          height={defaults.starterHeight + defaults.endingHeight} />

    <text fill={defaults.fontColor} x={`${props.labelOffset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
      {props.label}
    </text>
  </g>)
}