import React from 'react';
import defaults from './utils/defaults';
import PropTypes from 'prop-types';

/* props
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xMid = x position of midpoint vertical line (pointing to label #1)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label #2)
*/

ReversedJoinedCallout.propTypes = {
	'xStart': PropTypes.number.isRequired,
	'xMid': PropTypes.number.isRequired,
	'xEnd': PropTypes.number.isRequired,
	'label1Offset': PropTypes.number.isRequired,
	'label2Offset': PropTypes.number.isRequired,
	'label1': PropTypes.string.isRequired,
	'label2': PropTypes.string.isRequired,
};


export default function ReversedJoinedCallout(props) {
  const shiftLabel = 10;
  const shiftAmount = 12;

  function TextBlock() {
    if(props.isModal) {
			return <>
				<text fill={defaults.fontColor} x={`${props.label1Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize} fontWeight='bold'>
					{props.label1}
				</text>
        <text fill={defaults.fontColor} x={`${props.label1Offset}%`} y={defaults.textPosition + defaults.lineHeight} fontSize={defaults.smFontSize}>
          {props.label1Amount}&nbsp;({`${props.label1Percent}%`})
        </text>

				<text fill={defaults.fontColor} x={`${props.label2Offset + shiftLabel}%`} y={defaults.textPosition} fontSize={defaults.fontSize} fontWeight='bold'>
					{props.label2}
				</text>
				<text fill={defaults.fontColor} x={`${props.label2Offset + shiftAmount}%`} y={defaults.textPosition + defaults.lineHeight} fontSize={defaults.smFontSize}>
          {props.label2Amount}&nbsp;({`${props.label2Percent}%`})
				</text>
			</>
    } else {
      return <>
				<text fill={defaults.fontColor} x={`${props.label1Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
					{props.label1} ({props.label1Amount})
				</text>
				<text fill={defaults.fontColor} x={`${props.label2Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
					{props.label2} ({props.label2Amount})
				</text></>
    }
  }

	return (<g className='outlay-connector'>
		<rect
			fill={defaults.lineColor}
			x={`${props.xStart}%`}
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
			x={`${props.xMid}%`}
			y={defaults.starterHeight}
			width={defaults.lineStroke}
			height={defaults.endingHeight}
		/>

		<rect
			fill={defaults.lineColor}
			x={`${props.xEnd}%`}
			y={defaults.starterHeight}
			width={defaults.lineStroke}
			height={defaults.endingHeight}
		/>

		<TextBlock />
	</g>)
}