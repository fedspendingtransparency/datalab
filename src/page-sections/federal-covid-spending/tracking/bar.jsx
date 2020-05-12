import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
// import globals from 'src/styles/variables.scss';

// import numberFormatter from 'src/utils/number-formatter';

const calloutHeight = 10;

export default class Bar extends React.Component {
	/* props notes
		narrow set if label & total should be above bar, not in line
		data: outlay, obligated and unobligated as {'amount': amount, 'percent': percentage value}
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
	*/
	static propTypes = {
		'narrow': PropTypes.bool,
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'barLabel': PropTypes.string.isRequired,
		'total': PropTypes.string.isRequired
	};
	// static defaultProps = {
	// };

	constructor(props) {
		super(props);
	}

	clickHandler = item => {
		alert(item + ' clicked');
	}

	render = () => <>
		<div className={styles.barContainer}>
			<div className={styles.sideLabel}>{this.props.barLabel}</div>
			<div className={styles.bar} onClick={() => clickHandler(this.props.barLabel)}>
				<span className={styles.outlayBar} style={{ width: `${Number.parseFloat(this.props.data[0].percent).toFixed(1)}%` }}>&nbsp;</span>
				<span className={styles.obligatedBar} style={{ width: `${Number.parseFloat(this.props.data[1].percent).toFixed(1)}%` }}>&nbsp;</span>
				<span className={styles.unobligatedBar} style={{ width: `${Number.parseFloat(this.props.data[2].percent).toFixed(1)}%` }}>&nbsp;</span>
			</div>
			<div className={styles.sideBudget}>{this.props.total}</div>
			<div style={{ height: calloutHeight, position: 'relative' }}>
			</div>
			<div className={styles.barLabels}>
				<div className={styles.outlayLabel} style={{ width: `${i.Percent_Outlaid}%` }}>Outlay ({numberFormatter('dollars suffix', i.Amount_Outlaid)})</div>
				<div id={`obligated-label-${key}`} className={styles.obligatedLabel}>
					Obligated ({numberFormatter('dollars suffix', i.Amount_Obligated)})
					</div>
				<div className={styles.unobligatedLabel} style={{ width: `${i.Percent_Unobligated}%` }}>Unobligated ({numberFormatter('dollars suffix', i.Amount_Unobligated)})</div>
				<div className={styles.budget}>{numberFormatter('dollars suffix', i.Total_Budgetary_Authority)}</div>
			</div>

			{/*
			</div>



		</div>
		
		);
*/}

		</div>
	</>;
}
