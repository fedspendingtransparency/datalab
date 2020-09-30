import React from 'react';
import PropTypes from 'prop-types';
import defaults from './utils/defaults';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import styles from '../bars/bar.module.scss';

/* props
  xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
  xMid = x position of midpoint vertical line (pointing to label #1)
  xEnd = x position of ending vertical line, end of the horizontal line (pointing to label #2)
*/

export default function ReversedJoinedCallout(props) {
	const {
		// eslint-disable-next-line max-len
		xStart, xMid, isModal, xEnd, label1Offset, label2Offset, label1, label2, label1Amount, label2Amount, mobile,
	} = props;

	function TextBlock() {
		if (isModal) {
			return (
				<>
					<text fill={defaults.fontColor} x={`${label1Offset}%`} y={defaults.textPosition} fontSize={mobile ? defaults.smFontSize : defaults.mdFontSize} fontWeight="600">
						{label1}
					</text>
					<text fill={defaults.fontColor} x={`${label1Offset}%`} y={defaults.textPosition + defaults.lineHeight} fontSize={defaults.smFontSize}>
						&nbsp;
						{numberFormatter('dollars suffix', label1Amount, 3)}
					</text>

					<text fill={defaults.fontColor} x={`${label2Offset}%`} y={defaults.textPosition} fontSize={mobile ? defaults.smFontSize : defaults.mdFontSize} fontWeight="600">
						{label2}
					</text>
					<text fill={defaults.fontColor} x={`${label2Offset}%`} y={defaults.textPosition + defaults.lineHeight} fontSize={defaults.smFontSize}>
						&nbsp;
						{numberFormatter('dollars suffix', label2Amount, 3)}
					</text>
				</>
			);
		}
		return (
			<>
				<text fill={defaults.fontColor} x={`${label1Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
					<tspan className={styles.label} style={{ display: mobile ? 'none' : 'block' }} fontWeight="600">{label1}</tspan>
					{' '}
					{numberFormatter('dollars suffix', label1Amount, 3)}
				</text>
				<text fill={defaults.fontColor} x={`${label2Offset}%`} y={defaults.textPosition} fontSize={defaults.fontSize}>
					<tspan className={styles.label} style={{ display: mobile ? 'none' : 'block' }} fontWeight="600">
						{label2}
						{' '}
					</tspan>
					<tspan
						className={styles.amountLabel}
						style={{ fontWeight: mobile ? '600' : '0' }}
					>
						{numberFormatter('dollars suffix', label2Amount, 3)}
					</tspan>
				</text>
			</>
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
				x={`${xEnd}%`}
				y={defaults.starterHeight}
  			width={`${xStart - xEnd}%`}
				height={defaults.lineStroke}
			/>

			<rect
				fill={defaults.lineColor}
				x={`${xMid}%`}
				y={defaults.starterHeight}
  			width={defaults.lineStroke}
  			height={defaults.endingHeight}
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

ReversedJoinedCallout.propTypes = {
	xStart: PropTypes.number.isRequired,
	xMid: PropTypes.number.isRequired,
	xEnd: PropTypes.number.isRequired,
	label1Offset: PropTypes.number.isRequired,
	label2Offset: PropTypes.number.isRequired,
	label1: PropTypes.string.isRequired,
	label2: PropTypes.string.isRequired,
	label1Amount: PropTypes.string.isRequired,
	label2Amount: PropTypes.string.isRequired,
	isModal: PropTypes.bool.isRequired,
	mobile: PropTypes.bool.isRequired,
};
