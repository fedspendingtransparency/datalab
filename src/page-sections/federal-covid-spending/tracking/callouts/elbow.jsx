/* props
  lineColor = hex value for line color
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/
import React from "react"

export default function ElbowCallout(props) {

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