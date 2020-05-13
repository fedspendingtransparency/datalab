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
		firstBar: should this bar have a top border?
		lastBar: should this bar have a bottom border?
	*/
	static propTypes = {
		'narrow': PropTypes.bool,
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'barLabel': PropTypes.string.isRequired,
		'total': PropTypes.string.isRequired,
		'firstBar': PropTypes.bool,
		'lastBar': PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.barPercents = [
			Number.parseFloat(this.props.data[0].percent).toFixed(1),
			Number.parseFloat(this.props.data[1].percent).toFixed(1),
			Number.parseFloat(this.props.data[2].percent).toFixed(1),
		];
	}

	clickHandler = item => {
		alert(item + ' clicked');
	}

	render = () =>
		<div className={styles.container}>
			{this.props.narrow ? '' : <div className={styles.sideLabel}>{this.props.barLabel}</div>}
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar} ${this.props.firstBar ? styles.firstBar : ''} ${this.props.lastBar ? styles.lastBar : ''}`}
					onClick={() => clickHandler(this.props.barLabel)}
				>
					<span className={styles.outlayBar} style={{ width: `${this.barPercents[0]}%` }}>&nbsp;</span>
					<span className={styles.obligatedBar} style={{ width: `${this.barPercents[1]}%` }}>&nbsp;</span>
					<span className={styles.unobligatedBar} style={{ width: `${this.barPercents[2]}%` }}>&nbsp;</span>
					<div className={styles.callout} style={{ height: calloutHeight }} />
					<div className={styles.barLabels}>
						<div className={styles.outlayLabel} style={{ width: `${this.barPercents[0]}%` }}>Outlay ({this.props.data[0].amount})</div>
						<div className={styles.obligatedLabel}>Obligated ({this.props.data[1].amount})</div>
						<div className={styles.unobligatedLabel} style={{ width: `${this.barPercents[2]}%` }}>Unobligated ({this.props.data[2].amount})</div>
						<div className={styles.budget}>{this.props.total}</div>
					</div>
				</div>
			</div>
			{this.props.narrow ? '' : <div className={styles.sideBudget}>{this.props.total}</div>}
		</div>
		;
}
