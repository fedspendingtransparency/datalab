import React from "react"
import defaults from './utils/defaults'
import PropTypes from "prop-types"

/* props
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xMid = x position of midpoint vertical line (pointing to label #1)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label #2)
*/

JoinedCallout.propTypes = {
  'xStart': PropTypes.number.isRequired,
  'xMid': PropTypes.number.isRequired,
  'xEnd': PropTypes.number.isRequired,
  'labelOffset1': PropTypes.number.isRequired,
  'labelOffset2': PropTypes.number.isRequired,
  'label1': PropTypes.string.isRequired,
  'label2': PropTypes.string.isRequired,
};


export default function JoinedCallout(props) {

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

    <text fill='black' x={`${props.label1Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>{props.label1}</text>
    <text fill='black' x={`${props.label2Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>{props.label2}</text>
  </g>)
  }