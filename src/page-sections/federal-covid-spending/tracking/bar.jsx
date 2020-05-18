import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from "./callouts/callout-bar"
// import globals from 'src/styles/variables.scss';

const calloutHeight = 10;

Bar.propTypes = {
  'narrow': PropTypes.bool,
  'data': PropTypes.arrayOf(PropTypes.object).isRequired,
  'barLabel': PropTypes.string.isRequired,
  'total': PropTypes.string.isRequired,
  'firstBar': PropTypes.bool,
  'lastBar': PropTypes.bool
};

export default function Bar(props) {
	/* props notes
		narrow set if label & total should be above bar, not in line
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
		firstBar: should this bar have a top border?
		lastBar: should this bar have a bottom border?
	*/


	const barPercents = [
		parseFloat(props.data[0].percent),
		parseFloat(props.data[1].percent),
		parseFloat(props.data[2].percent),
	];

	console.log(typeof barPercents[0]);

	const clickHandler = item => {
		alert(item + ' clicked');
	}

	const labelBreak = props.narrow ? <br /> : ' ';

  function PercentBar(props) {
  	console.log(props);
    return(<g  className='bar'>
      <rect className={styles.outlayBar} x='0' width={`${props.outlaid}%`} height='22'></rect>
      <rect className={styles.obligatedBar} x={`${props.outlaid}%`} width={`${props.obligated}%`} height='22'></rect>
      <rect className={styles.unobligatedBar} x={`${props.outlaid + props.obligated}%`} width={`${props.unobligated}%`} height='22'></rect>
    </g>)
  }

	return (
    <div className={styles.container}>
      {props.narrow ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{props.barLabel}</div>}
			<svg width='100%' height='65px'>
				<CalloutBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} data={props.data} />
				<PercentBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} {...props} />
			</svg>
      {props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{props.total}</div>}
		</div>)
  //   <div className={styles.container}>
	// 	<div className={styles.barContainer}>
	// 		<div
	// 			className={`${styles.bar} ${props.firstBar ? styles.firstBar : ''} ${props.lastBar ? styles.lastBar : ''}`}
	// 			onClick={() => clickHandler(props.barLabel)}
	// 		>
	// 			{props.narrow ? <div className={styles.sideLabel}>{props.barLabel} ({props.total})</div> : ''}
	// 			<span className={styles.outlayBar} style={{ width: `${barPercents[0]}%` }}>&nbsp;</span>
	// 			<span className={styles.obligatedBar} style={{ width: `${barPercents[1]}%` }}>&nbsp;</span>
	// 			<span className={styles.unobligatedBar} style={{ width: `${barPercents[2]}%` }}>&nbsp;</span>
	// 			<div className={styles.callout} style={{ height: calloutHeight }} />
	// 			<div className={styles.barLabels}>
	// 				<div className={styles.outlayLabel} style={{ width: `${barPercents[0]}%` }}>Outlay{labelBreak}({props.data[0].amount})</div>
	// 				<div className={styles.obligatedLabel}>Obligated{labelBreak}({props.data[1].amount})</div>
	// 				<div className={styles.unobligatedLabel} style={{ width: `${barPercents[2]}%` }}>Unobligated{labelBreak}({props.data[2].amount})</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	{props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{props.total}</div>}
	// </div>)

}
