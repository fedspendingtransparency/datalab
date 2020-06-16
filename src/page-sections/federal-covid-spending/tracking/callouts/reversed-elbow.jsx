import React from 'react';
import PropTypes from 'prop-types';
import defaults from './utils/defaults';
import numberFormatter from '../../../../utils/number-formatter';
import styles from '../bars/bar.module.scss';

/* props
lineColor = hex value for line color
xStart = x position of starting vertical line, start of the horizontal line (pointing to bar)
xEnd = x position of ending vertical line, end of the horizontal line (pointing to label)
*/

export default function ReversedElbowCallout(props) {
	const {
		xStart, xEnd, isModal, labelOffset, label, labelAmount, mobile,
	} = props;
	const shiftLabel = label === 'Unobligated' ? 14 : 10;
	const shiftAmount = label === 'Unobligated' ? 18 : 0;

	function TextBlock() {
		if (isModal) {
			return (
				<>
					<text
						fill={defaults.fontColor} x={`${labelOffset + shiftLabel}%`} y={defaults.textPosition}
						fontSize={defaults.mdFontSize}
						fontWeight="600"
					>
						{label}
					</text>
					<text
  					fill={defaults.fontColor}
						x={`${labelOffset + shiftAmount}%`}
						y={defaults.textPosition + defaults.lineHeight}
						fontSize={defaults.smFontSize}
					>
						{numberFormatter('dollars suffix', labelAmount)}
					</text>
				</>
			);
		}
		return (
			<text
				fill={defaults.fontColor} x={`${labelOffset}%`} y={defaults.textPosition}
				fontSize={defaults.fontSize}
			>
				<tspan className={styles.label} style={{ display: mobile ? 'none' : 'block' }} fontWeight="600">
					{label}
					{' '}
				</tspan>
				<tspan
					className={styles.amountLabel}
					style={{ fontWeight: mobile ? '600' : '0' }}
				>
					{numberFormatter('dollars suffix', labelAmount)}
				</tspan>
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
				x={`${xEnd}%`}
				y={defaults.starterHeight}
				width={`${xStart - xEnd}%`}
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


ReversedElbowCallout.propTypes = {
	xStart: PropTypes.number.isRequired,
	xEnd: PropTypes.number.isRequired,
	isModal: PropTypes.bool.isRequired,
	labelOffset: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	labelAmount: PropTypes.string.isRequired,
	mobile: PropTypes.bool.isRequired,
};
