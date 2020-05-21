import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callout-area';
import PercentBar from './percent-area';
import { Hidden } from '@material-ui/core';

const barHeight = 30;

export default class Bar extends React.Component {
	/* props notes
		showDetails set if bar details (Outlay etc) should be shown
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
		hideBarLabels: don't show details labels below bar segments
		firstBar: should this bar have a top border?
		lastBar: should this bar have a bottom border?
	*/
	static propTypes = {
		'showDetails': PropTypes.bool,
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'barLabel': PropTypes.string,
		'total': PropTypes.string,
		'hideBarLabels': PropTypes.bool,
		'firstBar': PropTypes.bool,
		'lastBar': PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	clickHandler = item => {
		this.props.openModal(item);
	}

  keyUpHandler = (e, item) => {
		if(e.keyCode === 13) {
      this.props.openModal(item);
    }
  }

	render = () =>
		<div className={styles.container}>
			<div className={`${styles.sideLabel} ${styles.topPad}`}>{this.props.barLabel}</div>
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar}
					${this.props.narrow ? '' : styles.topPad}
					${this.props.narrow ? '' : styles.barBorder}
					${this.props.firstBar ? styles.firstBar : ''}
					${this.props.lastBar ? styles.lastBar : ''}`}
          tabIndex='0'
					onClick={() => this.props.narrow ? '' : this.clickHandler(this.props.barLabel)}
					onKeyUp={e => this.props.narrow ? '' : this.keyUpHandler(e, this.props.barLabel)}
				>
					<svg width='100%' height={this.props.narrow ? '70px' : '56px'}>
						<Hidden smDown>
							<CalloutBar
								outlaid={parseFloat(this.props.data[0].percent)}
								obligated={parseFloat(this.props.data[1].percent)}
								unobligated={parseFloat(this.props.data[2].percent)}
								data={this.props.data}
                narrow={this.props.narrow}
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
