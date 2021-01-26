import React from 'react';
import styles from './spending-chart.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from '../../../components/section-elements/downloads/downloads';
import ControlBar from '../../../components/control-bar/control-bar';
import Share from '../../../components/share/share';

import SectionOneChartDesktop from '../../../svgs/rd-and-contracting/spending/desktop.svg';
import SectionOneChartTablet from '../../../svgs/rd-and-contracting/spending/tablet.svg';
import SectionOneChartMobile from '../../../svgs/rd-and-contracting/spending/mobile.svg';
import SectionOneChartPopupDesktop from '../../../svgs/rd-and-contracting/spending/chart1-desktop-popup.svg';
import SectionOneChartPopupTablet from '../../../svgs/rd-and-contracting/spending/chart1-tablet-popup.svg';
import SectionOneChartPopupMobile from '../../../svgs/rd-and-contracting/spending/chart1-mobile-popup.svg';

import CloseIcon from '@material-ui/icons/Close';

import Legend from './legend.jsx';
import Toggle from "../../../components/toggle/toggle";

export default class SpendingChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bWidth: 1200, // start desktop size
			showDetails: false,
			checked: false
		};
	}

	componentDidMount() {
		this.setState({bWidth: window.innerWidth}); // set initial width for render
		this.handleWindowSizeChange();

		window.addEventListener('resize', this.handleWindowSizeChange);
		document.addEventListener('click', this.detailsListener);
		window.addEventListener('keyup', this.detailsEsc);
		this.detailsKeyup();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
		window.removeEventListener('resize', this.closeDetailResize);
		document.removeEventListener('click', this.detailsListener);
		window.removeEventListener('keyup', this.detailsEsc);
	}

	handleWindowSizeChange = () => {
		this.setState({bWidth: window.innerWidth});
	};

	detailsEsc = event => {
		let that = this;
		if (that.state.showDetails) {
			if (event.keyCode === 27) {
				that.setState({showDetails: false});
			}
		}
	};

	// noinspection JSDeprecatedSymbols
	detailsKeyup = () => {
		let that = this;
		document
			.getElementById('Show-Details')
			.addEventListener('keyup', function (event) {
				event.preventDefault();
				if (event.keyCode === 13) {
					that.setState({showDetails: !that.state.showDetails});
				}
			});
		document
			.getElementById('Show-Details-Text')
			.addEventListener('keyup', function (event) {
				event.preventDefault();
				if (event.keyCode === 13) {
					that.setState({showDetails: !that.state.showDetails});
				}
			});
	};

	/*
    - Dynamic Event Listener -
    Use "e.target" and not element directly as some are not drawn
    on the DOM yet.
  */
	detailsListener = e => {
		let element = e.target;

		if (element.id === 'Show-Details-Text') {
			this.setState({showDetails: !this.state.showDetails});
		}

		if (element.id === 'Show-Details') {
			this.setState({showDetails: !this.state.showDetails});
		}

		if (element.id === 'path-10') {
			this.setState({showDetails: !this.state.showDetails});
		}

		if (element.id === 'mask-11') {
			this.setState({showDetails: !this.state.showDetails});
		}

		/* Little Person Icon */
		if (element.id === 'Detail-Icon') {
			this.setState({showDetails: !this.state.showDetails});
		}

		/* Region bounded by dotted lines */
		/* This region is covered in IE11... */
		if (element.id === 'toggle-region') {
			this.setState({showDetails: !this.state.showDetails});
		}

		/* The 'x' on "popup-x.svg" to close! */
		if (element.id === 'x-icon') {
			this.setState({showDetails: false});
		}

		/* selectors for IE11... */
		if (element.correspondingElement) {
			if (element.correspondingElement.id === 'path-10') {
				this.setState({showDetails: !this.state.showDetails});
			}

			if (element.correspondingElement.id === 'Show-Details-Text') {
				this.setState({showDetails: !this.state.showDetails});
			}

			if (element.correspondingElement.id === 'Detail-Icon') {
				this.setState({showDetails: !this.state.showDetails});
			}
		}
	};

	closePopup = () => {
		this.setState({showDetails: false});
	};

	instructions = () => (
		<AccordionList title="Instructions">
			<ul>
				<li>
					To better view the values for DHS, AID, DoEd, DOC, and the VA, click or tap
					on the values for any of these agencies
				</li>
				<li>To exit the pop-up, click or tap the X</li>
			</ul>
			<span className={styles.instructionHeader}>Label Definitions</span>
			<div className={styles.instructionNotes}>
				{`        DOD – Department of Defense
        NASA – National Aeronautics and Space Administration
        HHS – Department of Health and Human Services
        DOE – Department of Energy
        DOT – Department of Transportation
        DHS – Department of Homeland Security
        AID – Agency for International Development
        DoEd – Department of Education
        DOC – Department of Commerce
        VA – Department of Veterans’ Affairs`}
			</div>
		</AccordionList>
	);


	render() {
		const {bWidth} = this.state;
		const isTabletSvg = bWidth <= 768 && bWidth >= 576;
		const isMobileSvg = bWidth <= 576;
		const largestSvg = bWidth >= 769;

		const tabletPopupStyle = {
			width: 350,
			right: '7.5%',
			top: '10%',
		};

		const firstToggleOption = {
			name: 'All R&D Contracts',
			color: '#002AFF'
		}
		const secondToggleOption = {
			name: 'COVID-19 R&D Contracts',
			color: '#6F41A7'
		}

		const handleToggle = (e) => {
			this.setState((state) => {
				return {checked: !this.state.checked};
			})
		}

		const desktopPopupStyle = {};

		return (
			<>
				<h2 className='rd-viztitle'>{this.props.section.viztitle}</h2>
				{this.instructions()}
				<div className={styles.svgContainerTablet}>
					<ControlBar>
						<Share
							siteUrl={this.props.location.origin}
							pageUrl={this.props.location.pathname + '#' + this.props.sectionId}
							title='Data Lab - R&D in Contract Spending - U.S. Treasury'
							text={`Which agencies had the highest proportion of contract spend devoted to R&D initiatives in FY19? Find out in #DataLab's newest analysis, R&D in Contract Spending! #OpenData #RandD`}
							hoverColor='#1302d9'
						/>
					</ControlBar>
					<Toggle
						first={firstToggleOption}
						second={secondToggleOption}
						handleToggle={handleToggle}
						checked={this.state.checked}
					/>
					{isMobileSvg && (
						<>
						<div className={`${this.state.showDetails ? styles.svgPopoutShowMobile : styles.svgPopout}`}>
							<CloseIcon className={styles.closeIconMobile} onClick={this.closePopup}/>
							<SectionOneChartPopupMobile/>
						</div>
							{this.state.checked ? <span style={{color: 'red', fontSize: '50px', marginBottom: '30px'}}>cat photo here</span> : <SectionOneChartMobile />}
						</>
						)}
					{isTabletSvg && (
						<>
						<div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`}
								 style={tabletPopupStyle}>
							<SectionOneChartPopupTablet/>
							<CloseIcon className={styles.closeIconTablet} onClick={this.closePopup}/>
						</div>
							{this.state.checked ? <span style={{color: 'red', fontSize: '50px', marginBottom: '30px'}}>cat photo here</span> : <SectionOneChartTablet />}
						</>
						)}
					{largestSvg && (
						<>
						<div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`}
								 style={desktopPopupStyle}>
							<SectionOneChartPopupDesktop/>
							<CloseIcon className={styles.closeIconDesktop} onClick={this.closePopup}/>
						</div>
							{this.state.checked ? <span style={{color: 'red', fontSize: '50px', marginBottom: '30px'}}>cat photo here</span> : <SectionOneChartDesktop />}
						</>
						)}
					<Legend/>
					<Downloads
						href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
						date={'October 2019'}
					/>
				</div>
			</>
		)
	}
}
