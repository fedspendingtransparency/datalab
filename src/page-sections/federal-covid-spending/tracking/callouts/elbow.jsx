/* props
  lineColor = hex value for line color
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/
import React from 'react';
import PropTypes from 'prop-types';
import numberFormatter from 'src/utils/number-formatter';
import defaults from './utils/defaults';
import styles from '../bars/bar.module.scss';

export default function ElbowCallout(props) {
	const {
		xStart, xEnd, isModal, labelOffset, label, labelAmount,
	} = props;

	function TextBlock() {
		if (isModal) {
			return (
				<>
					<text fill={defaults.fontColor} x={`${labelOffset}%`} y={defaults.textPosition} fontSize={defaults.fontSize} fontWeight="bold">
						{label}
					</text>
					<text fill={defaults.fontColor} x={`${labelOffset}%`} y={defaults.textPosition + defaults.lineHeight} fontSize={defaults.smFontSize}>
						{numberFormatter('dollars suffix', labelAmount)}
					</text>
				</>
			);
		}
		return (
			<text fill={defaults.fontColor} x={`${labelOffset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
				<tspan className={styles.label} fontWeight="bold">{label}</tspan>
				{' '}
				{numberFormatter('dollars suffix', labelAmount)}
			</text>
		);
	}

	return (
		<g className={styles.connector}>
			<rect
  			fill={defaults.lineColor}
				x={`${xStart}%`}
				y="0"
				width={defaults.lineStroke}
				height={defaults.starterHeight}
			/>

			<rect
				fill={defaults.lineColor}
				x={`${xStart}%`}
				y={defaults.starterHeight}
				width={`${xEnd - xStart}%`}
				height={defaults.lineStroke}
			/>

			<rect
				fill={defaults.lineColor}
				x={`${xEnd}%`}
				y={defaults.starterHeight}
				width={defaults.lineStroke}
				height={defaults.endingHeight}
			/>

			<TextBlock />

		</g>
	);
}

ElbowCallout.propTypes = {
	xStart: PropTypes.number.isRequired,
	xEnd: PropTypes.number.isRequired,
	isModal: PropTypes.bool.isRequired,
	labelOffset: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	labelAmount: PropTypes.string.isRequired,
};
