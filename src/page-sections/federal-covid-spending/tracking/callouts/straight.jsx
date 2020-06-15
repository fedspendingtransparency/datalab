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
		xStart, isModal, labelOffset, label, labelAmount, mobile,
	} = props;
	const shiftLabel = label === 'Unobligated' ? 14 : 0;
	let shiftAmount = 0;

	if (label === 'Unobligated') {
		if (isModal) {
			shiftAmount = 18;
		} else if (mobile) {
			shiftAmount = 2;
		}
	}

	function TextBlock() {
		if (isModal) {
			return (
				<>
					<text
						fill={defaults.fontColor}
						x={`${labelOffset + shiftLabel}%`}
						y={defaults.textPosition}
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
  			fill={defaults.fontColor}
  			x={`${labelOffset + shiftAmount}%`}
				y={defaults.textPosition}
				fontSize={defaults.fontSize}
			>
				<tspan
					className={styles.label}
					style={{ display: mobile ? 'none' : 'block' }}
					fontWeight="600"
				>
					{label}
					{' '}
				</tspan>
				<tspan style={{ fontWeight: mobile ? '600' : '0' }}>
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
				height={defaults.starterHeight + defaults.endingHeight}
			/>

			<TextBlock />
		</g>
	);
}

StraightCallout.propTypes = {
	xStart: PropTypes.number.isRequired,
	isModal: PropTypes.bool.isRequired,
	labelOffset: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	labelAmount: PropTypes.string.isRequired,
	mobile: PropTypes.bool.isRequired,
};
