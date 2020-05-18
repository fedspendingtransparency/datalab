import React from "react"
import defaults from './utils/defaults'
/* props
  lineColor = hex value for line color
  xStart = x position vertical line
*/
export default function StraightCallout (props){

  return(<g className='outlay-connector'>
    <rect fill={defaults.lineColor}
          x={`${props.xStart}%`}
          y='0'
          width={defaults.lineStroke}
          height={defaults.starterHeight + defaults.endingHeight} />

    <text fill='black' x={`${props.labelOffset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
      {props.label}
    </text>
  </g>)
}