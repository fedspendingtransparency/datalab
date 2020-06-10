import React from "react"
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callout-area';
import PercentBar from './percent-area';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

const barHeight = 30;

export default class Bar extends React.Component {
	/* props notes
		showDetails set if bar details (Outlay etc) should be shown
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
		totalBar: is this the top, US total bar? (to format differently)
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
		hideBarLabels: don't show details labels below bar segments
		firstBar: should this bar have a top border?
		lastBar: should this bar have a bottom border?
	*/
	static propTypes = {
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'totalBar': PropTypes.bool,
		'barLabel': PropTypes.string,
		'total': PropTypes.string,
		'hideBarLabels': PropTypes.bool,
		'firstBar': PropTypes.bool,
		'lastBar': PropTypes.bool,
		'isModal': PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {
			showDetails: false,
			screenMode: null
		};
	}

	clickHandler = item => {
		if (!this.props.totalBar) {
			this.props.openModal(item);
		}
	};

	keyUpHandler = (e, item) => {
		if (e.keyCode === 13) {
			this.props.openModal(item);
		}
	};

	componentDidMount() {
		this.resizeWindow();
		window.addEventListener('resize', this.resizeWindow);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeWindow);
	}

	resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== this.state.screenMode) {
			this.setState({ screenMode: newMode });
		}
	};

	onHover = () => {
		if (this.state.screenMode !== ScreenModeEnum.mobile) {
			this.setState({ showDetails: true })
		}
	};

	onBlur = () => {
		if (this.state.screenMode !== ScreenModeEnum.mobile) {
			this.setState({ showDetails: false })
		}
	};

	containerClass = () => {
		if (this.props.isModal) {
			return null;
		} else if (this.props.totalBar) {
			return `${styles.container} ${styles.totalBar}`
		} else {
			return `${styles.container}`
		}
	};

	render = () =>
		<div className={this.containerClass()}>
			{this.props.isModal ?
				'' :
				<div className={`${styles.sideLabel} ${styles.topPad}`}>
					{this.props.totalBar ?
						'TOTAL U.S. GOVERNMENT FUNDING'
						:
						this.props.barLabel
					}
				</div>
			}
			<div className={styles.barContainer}>
				<div
					className={`${styles.bar}
					${this.props.isModal ? '' : styles.topPad}
					${this.props.isModal ? '' : styles.barBorder}
					${this.props.firstBar ? styles.firstBar : ''}
					${this.props.lastBar ? styles.lastBar : ''}`}
					style={{ cursor: this.props.isModal || this.props.totalBar ? 'default' : 'pointer' }}
					tabIndex={this.props.isModal ? '' : '0'}
					onClick={() => this.props.isModal ? '' : this.clickHandler(this.props.barLabel)}
					onKeyUp={e => this.props.isModal ? '' : this.keyUpHandler(e, this.props.barLabel)}
				>
					<svg
						width='100%'
						height={this.props.isModal ? '70px' : '56px'}
						onMouseOver={this.onHover}
						onMouseOut={this.onBlur}
					>
						<g style={{ display: this.props.isModal|| this.props.totalBar || this.state.showDetails ? 'block' : 'none' }}>
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
