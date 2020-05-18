import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from "./callouts/callout-bar"
// import globals from 'src/styles/variables.scss';

const barHeight = 20;

/* props notes
  narrow set if label & total should be above bar, not in line
  data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
  barLabel: words to left or top of bar
  total: bar total amount (not necessarily sum of data amounts) in desired format
  firstBar: should this bar have a top border?
  lastBar: should this bar have a bottom border?
*/
Bar.propTypes = {
  'narrow': PropTypes.bool,
  'data': PropTypes.arrayOf(PropTypes.object).isRequired,
  'barLabel': PropTypes.string.isRequired,
  'total': PropTypes.string.isRequired,
  'firstBar': PropTypes.bool,
  'lastBar': PropTypes.bool
};

export default function Bar(props) {
	const barPercents = [
		parseFloat(props.data[0].percent),
		parseFloat(props.data[1].percent),
		parseFloat(props.data[2].percent),
	];

	const clickHandler = item => {
		alert(item + ' clicked');
	}

  function PercentBar(props) {
    return(<g  className='bar'>
      <rect className={styles.outlayBar} x='0' width={`${props.outlaid}%`} height={barHeight}></rect>
      <rect className={styles.obligatedBar} x={`${props.outlaid}%`} width={`${props.obligated}%`} height={barHeight}></rect>
      <rect className={styles.unobligatedBar} x={`${props.outlaid + props.obligated}%`} width={`${props.unobligated}%`} height={barHeight}></rect>
    </g>)
  }

	return (
    <div className={styles.container}>
      {props.narrow ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{props.barLabel}</div>}
			<div className={styles.barContainer}>
			<div
				className={`${styles.bar} ${styles.topPad} ${props.firstBar ? styles.firstBar : ''} ${props.lastBar ? styles.lastBar : ''}`}
      	onClick={() => clickHandler(props.barLabel)}>
						<svg width='100%' height='56px'>
							<CalloutBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} data={props.data} />
							<PercentBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} />
						</svg>
				</div>
			</div>
			{props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{props.total}</div>}
		</div>)
}
