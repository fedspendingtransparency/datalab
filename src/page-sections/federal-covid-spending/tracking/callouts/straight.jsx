import React from 'react';
import PropTypes from 'prop-types';
import defaults from './utils/defaults';
import numberFormatter from '../../../../utils/number-formatter';
import styles from '../bars/bar.module.scss';

/* props
  xStart = x position vertical line
*/

export default function StraightCallout(props) {
	const {
		xStart, xEnd, isModal, labelOffset, label, labelAmount,
	} = props;
	const shiftLabel = label === 'Unobligated' ? 10 : 0;
	const shiftAmount = label === 'Unobligated' ? 16 : 0;

	function TextBlock() {
		if (isModal) {
			return (
				<>
					<text
						fill={defaults.fontColor}
						x={`${labelOffset + shiftLabel}%`}
						y={defaults.textPosition}
						fontSize={defaults.fontSize}
						fontWeight="bold"
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
  			fill={defaults.fontColor}
  			x={`${labelOffset}%`}
				y={defaults.textPosition}
				fontSize={defaults.fontSize}
			>
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
				height={defaults.starterHeight + defaults.endingHeight}
			/>

			<TextBlock />
		</g>
	);
}

StraightCallout.propTypes = {
	xStart: PropTypes.number.isRequired,
	xEnd: PropTypes.number.isRequired,
	isModal: PropTypes.bool.isRequired,
	labelOffset: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	labelAmount: PropTypes.string.isRequired,
};
