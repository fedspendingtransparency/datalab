import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
// import globals from 'src/styles/variables.scss';

const calloutHeight = 10;

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

	render = () => {
		const labelBreak = this.props.narrow ? <br /> : ' ';

		return <div className={styles.container}>
			{this.props.narrow ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{this.props.barLabel}</div>}
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar} ${this.props.firstBar ? styles.firstBar : ''} ${this.props.lastBar ? styles.lastBar : ''}`}
					onClick={() => clickHandler(this.props.barLabel)}
				>
					{this.props.narrow ? <div className={styles.sideLabel}>{this.props.barLabel} ({this.props.total})</div> : ''}
					<span className={styles.outlayBar} style={{ width: `${this.barPercents[0]}%` }}>&nbsp;</span>
					<span className={styles.obligatedBar} style={{ width: `${this.barPercents[1]}%` }}>&nbsp;</span>
					<span className={styles.unobligatedBar} style={{ width: `${this.barPercents[2]}%` }}>&nbsp;</span>
					{this.props.hideBarLabels ? '' : <>
						<div className={styles.callout} style={{ height: calloutHeight }} />
						<div className={styles.barLabels}>
							<div className={styles.outlayLabel} style={{ width: `${this.barPercents[0]}%` }}>Outlay{labelBreak}({this.props.data[0].amount})</div>
							<div className={styles.obligatedLabel}>Obligated{labelBreak}({this.props.data[1].amount})</div>
							<div className={styles.unobligatedLabel} style={{ width: `${this.barPercents[2]}%` }}>Unobligated{labelBreak}({this.props.data[2].amount})</div>
						</div>
					</>}
				</div>
			</div>
			{this.props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{this.props.total}</div>}
		</div>
	};
}
