/* props
  lineColor = hex value for line color
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/
import React from 'react';
import defaults from './utils/defaults';
import PropTypes from 'prop-types';
import numberFormatter from "src/utils/number-formatter"

ElbowCallout.propTypes = {
  'xStart': PropTypes.number.isRequired,
  'xEnd': PropTypes.number.isRequired,
  'labelOffset': PropTypes.number.isRequired,
  'label': PropTypes.string.isRequired,
  'labelAmount': PropTypes.string.isRequired

};

export default function ElbowCallout(props) {
  function TextBlock() {
    if(props.narrow) {
      return (<>
        <text fill={defaults.fontColor} x={`${props.labelOffset}%`} y={defaults.textPosition}
              fontSize={defaults.fontSize} fontWeight='bold'>
          {props.label}&nbsp;
        </text>
        <text fill={defaults.fontColor} x={`${props.labelOffset}%`} y={defaults.textPosition + defaults.lineHeight}
              fontSize={defaults.smFontSize}>
          {props.labelAmount}&nbsp;({numberFormatter('percent', parseInt(props.labelPercent))})
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
      fill={defaults.lineColor}
      x={`${props.xStart}%`}
      y='0'
      width={defaults.lineStroke}
      height={defaults.starterHeight}
    />

    <rect
      fill={defaults.lineColor}
      x={`${props.xStart}%`}
      y={defaults.starterHeight}
      width={`${props.xEnd - props.xStart}%`}
      height={defaults.lineStroke}
    />

    <rect
      fill={defaults.lineColor}
      x={`${props.xEnd}%`}
      y={defaults.starterHeight}
      width={defaults.lineStroke}
      height={defaults.endingHeight}
    />

    <TextBlock />

  </>)
}