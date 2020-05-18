import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callouts/callout-bar';

const barHeight = 20;

export default class Bar extends React.Component {
	/* props notes
		narrow set if label & total should be above bar, not in line
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
		hideBarLabels: don't show details labels below bar segments
		firstBar: should this bar have a top border?
		lastBar: should this bar have a bottom border?
	*/
	static propTypes = {
		'narrow': PropTypes.bool,
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'barLabel': PropTypes.string.isRequired,
		'total': PropTypes.string.isRequired,
		'hideBarLabels': PropTypes.bool,
		'firstBar': PropTypes.bool,
		'lastBar': PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.barPercents = [
			Number.parseFloat(this.props.data[0].percent),
			Number.parseFloat(this.props.data[1].percent)
		];
		// final bar calculated, removing rounding errors
		this.barPercents[2] = 100 - this.barPercents[0] - this.barPercents[1];
	}

	clickHandler = item => {
		alert(item + ' clicked');
	}

	PercentBar = () => {
		return (<g className='bar'>
			<rect className={styles.outlayBar} x='0' width={`${this.props.outlaid}%`} height={barHeight}></rect>
			<rect className={styles.obligatedBar} x={`${props.outlaid}%`} width={`${this.props.obligated}%`} height={barHeight}></rect>
			<rect className={styles.unobligatedBar} x={`${this.props.outlaid + this.props.obligated}%`} width={`${this.props.unobligated}%`} height={barHeight}></rect>
		</g>);
	}

	render = () =>
		<div className={styles.container}>
			{props.narrow ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{props.barLabel}</div>}
			<div className={styles.barContainer}>
				{/* // <div
				// 	className={`${styles.bar} ${this.props.firstBar ? styles.firstBar : ''} ${this.props.lastBar ? styles.lastBar : ''}`}
				// 	onClick={() => clickHandler(this.props.barLabel)}
				// >
				// 	{this.props.narrow ? <div className={styles.sideLabel}>{this.props.barLabel} ({this.props.total})</div> : ''}
				// 	<span className={styles.outlayBar} style={{ width: `${this.barPercents[0]}%` }}>&nbsp;</span>
				// 	<span className={styles.obligatedBar} style={{ width: `${this.barPercents[1]}%` }}>&nbsp;</span>
				// 	<span className={styles.unobligatedBar} style={{ width: `${this.barPercents[2]}%` }}>&nbsp;</span>
				// 	{this.props.hideBarLabels ? '' : <>
				// 		<div className={styles.callout} style={{ height: calloutHeight }} />
				// 		<div className={styles.barLabels}>
				// 			<div className={styles.outlayLabel} style={{ width: `${this.barPercents[0]}%` }}>Outlay{labelBreak}({this.props.data[0].amount})</div>
				// 			<div className={styles.obligatedLabel}>Obligated{labelBreak}({this.props.data[1].amount})</div>
				// 			<div className={styles.unobligatedLabel} style={{ width: `${this.barPercents[2]}%` }}>Unobligated{labelBreak}({this.props.data[2].amount})</div>
				// 		</div>
				// 	</>} */}
				<div
					className={`${styles.bar} ${styles.topPad} ${this.props.firstBar ? styles.firstBar : ''} ${this.props.lastBar ? styles.lastBar : ''}`}
					onClick={() => clickHandler(this.props.barLabel)}
				>
					{this.props.narrow ? <div className={styles.sideLabel}>{this.props.barLabel} ({this.props.total})</div> : ''}
					<svg width='100%' height='56px'>
						<CalloutBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} data={this.props.data} />
						<PercentBar outlaid={barPercents[0]} obligated={barPercents[1]} unobligated={barPercents[2]} />
					</svg>
				</div>
			</div>
			{this.props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{this.props.total}</div>}
		</div>
		;
}
