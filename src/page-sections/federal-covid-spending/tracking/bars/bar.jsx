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
		'isModal': PropTypes.bool,
		'loanProgramAcct': PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			showDetails: false,
			screenMode: null
		};
	}

	phaseDetail = {
		'1': 'Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020',
		'2': 'Families First Coronavirus Response Act',
		'3': 'Coronavirus Aid, Relief, and Economic Security Act',
		'3.5': 'Paycheck Protection Program and Health Care Enhancement Act'

	}

	barClickHandler = () => {
		if (!this.props.isModal && this.state.screenMode >= ScreenModeEnum.desktop && !this.props.totalBar) {
			this.props.openModal(this.props.barLabel);
		}
	};

	barKeyUpHandler = (e) => {
		if (!this.props.isModal && this.state.screenMode >= ScreenModeEnum.desktop && !this.props.totalBar && e.keyCode === 13) {
			this.props.openModal(this.props.barLabel);
		}
	};

	labelClickHandler = () => {
		if (!this.props.isModal && this.state.screenMode < ScreenModeEnum.desktop && !this.props.totalBar) {
			this.props.openModal(this.props.barLabel);
		}
	};

	labelKeyUpHandler = (e) => {
		if (!this.props.isModal && this.state.screenMode < ScreenModeEnum.desktop && !this.props.totalBar && e.keyCode === 13) {
			this.props.openModal(this.props.barLabel);
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
		if (this.state.screenMode >= ScreenModeEnum.desktop) {
			this.setState({ showDetails: true })
		}
	};

	onBlur = () => {
		if (this.state.screenMode >= ScreenModeEnum.desktop) {
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

	phaseLabel = () => {
		switch (this.props.loanProgramAcct) {
			case 'Law Total':
				return (
					<>
						<div>Phase {this.props.barLabel}</div>
						<br/>
						<div>{this.phaseDetail[this.props.barLabel]}</div>
					</>
				)
				break;
			case 'No':
				return (
					<div>General Account Spending</div>
				)
				break;
			case 'Yes':
				return (
					<div>Loan Account Spending</div>
				)
				break;
		}
	}

	render = () => {
		const boldOnHover = this.props.totalBar ? '' : styles.boldOnHover;

		return (
			<div className={this.containerClass()}>
				{this.props.isModal ?
					'' :
					<div
						className={`${this.props.totalBar ? styles.totalBarSideLabel : styles.sideLabel} ${boldOnHover} ${styles.topPad}`}
						onClick={this.labelClickHandler}
						onKeyUp={this.labelKeyUpHandler}
						tabIndex={this.props.isModal || this.state.screenMode >= ScreenModeEnum.desktop || this.props.totalBar ? '' : '0'}
					>
						{this.props.totalBar ?
							<span className={styles.totalBarLabel}>New Agency Funding</span>
							:
							this.phaseLabel()
						}
					</div>
				}
				<div className={styles.barContainer}>
					<div
						className={`
							${styles.bar}
							${this.props.isModal ? '' : styles.topPad}
							${this.props.isModal ? '' : styles.barBorder}
							${this.props.firstBar ? styles.firstBar : ''}
							${this.props.lastBar ? styles.lastBar : ''}
						`}
						style={{ cursor: this.state.screenMode < ScreenModeEnum.desktop || this.props.isModal || this.props.totalBar ? 'default' : 'pointer' }}
						tabIndex={this.props.isModal || this.state.screenMode < ScreenModeEnum.desktop ? '' : '0'}
						onClick={this.barClickHandler}
						onKeyUp={this.barKeyUpHandler}
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
				{this.props.isModal ? '' :
					<div className={`${styles.sideBudget} ${styles.topPad} ${boldOnHover} ${this.props.totalBar ? styles.totalBarSideBudget : ''}`}>
						<span className={styles.sideBudgetOfTotal}>{this.props.total}</span>
						<br/>
						<span className={`${styles.sideBudgetTotal} ${this.props.totalBar ? styles.totalBarSideBudgetTotal : boldOnHover}`}>{this.props.allTotal ? `of ${this.props.allTotal}` : ''}</span>
				</div>}
			</div>
		)
	}
}
