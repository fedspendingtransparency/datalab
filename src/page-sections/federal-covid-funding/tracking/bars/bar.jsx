import React from "react"
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callout-area';
import PercentBar from './percent-area';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

const barHeight = 30;

export default class Bar extends React.Component {
	/* props notes
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
		totalBar: is this the top, US total bar? (to format differently)
		barLabel: words to left or top of bar
		total: bar total amount (not necessarily sum of data amounts) in desired format
		hideBarLabels: don't show details labels below bar segments
	*/
	static propTypes = {
		'data': PropTypes.arrayOf(PropTypes.object).isRequired,
		'totalBar': PropTypes.bool,
		'barLabel': PropTypes.string,
		'total': PropTypes.string,
		'hideBarLabels': PropTypes.bool,
		'isModal': PropTypes.bool,
		'loanProgramAcct': PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			screenMode: null
		};
	}

	// barClickHandler = () => {
	// 	// if (!this.props.isModal && this.state.screenMode >= ScreenModeEnum.desktop && !this.props.totalBar) {
	// 	// 	this.props.openModal(this.props.barLabel);
	// 	// }
	// };

	//TODO need to move to the main index page
	barKeyUpHandler = (e) => {
		if (!this.props.isModal && this.state.screenMode >= ScreenModeEnum.desktop && !this.props.totalBar && e.keyCode === 13) {
			this.props.openModal(this.props.barLabel);
		}
	};

	// labelClickHandler = () => {
	// 	if (!this.props.isModal && this.state.screenMode < ScreenModeEnum.desktop && !this.props.totalBar) {
	// 		this.props.openModal(this.props.barLabel);
	// 	}
	// };

	// labelKeyUpHandler = (e) => {
	// 	if (!this.props.isModal && this.state.screenMode < ScreenModeEnum.desktop && !this.props.totalBar && e.keyCode === 13) {
	// 		this.props.openModal(this.props.barLabel);
	// 	}
	// };

	componentDidMount() {
          console.log(this.props.data);
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

	containerClass = () => {
		if (this.props.isModal) {
			return null;
		} else if (this.props.totalBar) {
			return `${styles.container} ${styles.totalBar}`
		} else {
			return `${styles.container}`
		}
	};

	render = () => {
		const boldOnHover = this.props.totalBar ? '' : styles.boldOnHover;

		return (
			<div className={this.containerClass()}>
				<div className={styles.barContainer}>
					<div
						className={`
							${styles.bar}
							${this.props.isModal ? '' : styles.barBorder}
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
							<g style={{ display: this.props.isModal|| this.props.totalBar ? 'block' : 'none' }}>
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
					<div className={`${styles.sideBudget} ${this.props.totalBar ? styles.totalBarSideBudget : ''}`}>
						<span className={styles.sideBudgetOfTotal}>{this.props.total}</span>
						<br/>
				</div>}
			</div>
		)
	}
}
