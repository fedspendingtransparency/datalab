import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callouts/callout-bar';
import PercentBar from './percent-bar';
import { Hidden } from '@material-ui/core';

const barHeight = 30;

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
	}

	clickHandler = item => {
		alert(item + ' clicked');
	}

	render = () =>
		<div className={styles.container}>
			{this.props.narrow ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{this.props.barLabel}</div>}
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar} ${styles.topPad} ${this.props.firstBar ? styles.firstBar : ''} ${this.props.lastBar ? styles.lastBar : ''}`}
					onClick={() => clickHandler(this.props.barLabel)}
				>
					{this.props.narrow ? <div className={styles.sideLabel}>{this.props.barLabel} ({this.props.total})</div> : ''}
					<svg width='100%' height='56px'>
						<Hidden smDown>
							<CalloutBar
								outlaid={parseFloat(this.props.data[0].percent)}
								obligated={parseFloat(this.props.data[1].percent)}
								unobligated={parseFloat(this.props.data[2].percent)}
								data={this.props.data}
							/>
						</Hidden>
						<PercentBar
							outlaid={parseFloat(this.props.data[0].percent)}
							obligated={parseFloat(this.props.data[1].percent)}
							unobligated={parseFloat(this.props.data[2].percent)}
							barHeight={barHeight}
						/>
					</svg>
				</div>
			</div>
			{this.props.narrow ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{this.props.total}</div>}
		</div>
		;
}
