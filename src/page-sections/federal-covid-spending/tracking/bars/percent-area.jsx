import React from 'react';
import numberFormatter from 'src/utils/number-formatter';
import styles from './bar.module.scss';

export default function PercentBar(props) {
	return (
		<g className="bar">
			<rect
				x="0" width={`${props.outlaid}%`} height={props.barHeight}
				className={styles.outlayBar}
				aria-label={`${numberFormatter('dollars text', props.data[0].amount, 3)} outlaid`}
			/>
			<rect
				x={`${props.outlaid}%`} width={`${props.obligated}%`} height={props.barHeight}
				className={styles.obligatedBar}
				aria-label={`${numberFormatter('dollars text', props.data[1].amount, 3)} obligated`}
			/>
			<rect
				x={`${props.outlaid + props.obligated}%`} width={`${props.unobligated}%`} height={props.barHeight}
				className={styles.unobligatedBar}
				aria-label={`${numberFormatter('dollars text', props.data[2].amount)} unobligated`}
			/>
		</g>
	);
}