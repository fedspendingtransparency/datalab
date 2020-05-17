import React from "react"

/* props
  lineColor = hex value for line color
  xStart = x position vertical line
*/
export default function StraightCallout (props){

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