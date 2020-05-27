import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callout-area';
import PercentBar from './percent-area';

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
		'lastBar': PropTypes.bool,
		'isModal': PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	clickHandler = item => {
		this.props.openModal(item);
	}

	keyUpHandler = (e, item) => {
		if (e.keyCode === 13) {
			this.props.openModal(item);
		}
	}

	render = () =>
		<div className={this.props.isModal ? '' : styles.container}>
      {this.props.isModal ? '' : <div className={`${styles.sideLabel} ${styles.topPad}`}>{this.props.barLabel}</div>}
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar}
					${this.props.isModal ? '' : styles.topPad}
					${this.props.isModal ? '' : styles.barBorder}
					${this.props.firstBar ? styles.firstBar : ''}
					${this.props.lastBar ? styles.lastBar : ''}`}
					style={{ cursor: this.props.isModal ? 'default' : 'pointer' }}
					tabIndex='0'
					onClick={() => this.props.isModal ? '' : this.clickHandler(this.props.barLabel)}
					onKeyUp={e => this.props.isModal ? '' : this.keyUpHandler(e, this.props.barLabel)}
				>
					<svg width='100%' height={this.props.isModal ? '70px' : '56px'}>
            <g style={{display: this.props.isModal || this.props.showDetails ? 'block' : 'none' }}>
              <CalloutBar
                  outlaid={parseFloat(this.props.data[0].percent)}
                  obligated={parseFloat(this.props.data[1].percent)}
                  unobligated={parseFloat(this.props.data[2].percent)}
                  data={this.props.data}
                  isModal={this.props.isModal}
                />
            </g>
						<PercentBar
							outlaid={parseFloat(this.props.data[0].percent)}
							obligated={parseFloat(this.props.data[1].percent)}
							unobligated={parseFloat(this.props.data[2].percent)}
							data={this.props.data}
							barHeight={barHeight}
						/>
					</svg>
				</div>
			</div>
      {this.props.isModal ? '' : <div className={`${styles.sideBudget} ${styles.topPad}`}>{this.props.total}</div>}
		</div>
		;
}
