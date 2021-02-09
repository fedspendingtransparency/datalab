import React from 'react';
import styles from './spending-chart.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from '../../../components/section-elements/downloads/downloads';
import ControlBar from '../../../components/control-bar/control-bar';
import Share from '../../../components/share/share';

import SectionOneChartDesktopAll from '../../../svgs/rd-and-contracting/spending/sectionOneChartDesktopAll.svg';
import SectionOneChartDesktopCovid from '../../../svgs/rd-and-contracting/spending/sectionOneChartDesktopCovid.svg';
import SectionOneChartTabletAll from '../../../svgs/rd-and-contracting/spending/SectionOneChartTabletAll.svg';
import SectionOneChartTabletCovid from '../../../svgs/rd-and-contracting/spending/SectionOneChartTabletCovid.svg';
import SectionOneChartMobileAll from '../../../svgs/rd-and-contracting/spending/SectionOneChartMobileAll.svg';
import SectionOneChartMobileCovid from '../../../svgs/rd-and-contracting/spending/SectionOneChartMobileCovid.svg';

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
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({bWidth: window.innerWidth});
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
							{this.state.checked ? <SectionOneChartMobileCovid /> : <SectionOneChartMobileAll />}
						</>
						)}
					{isTabletSvg && (
						<>
							{this.state.checked ? <SectionOneChartTabletCovid /> : <SectionOneChartTabletAll />}
						</>
						)}
					{largestSvg && (
						<>
							{this.state.checked ? <SectionOneChartDesktopCovid /> : <SectionOneChartDesktopAll />}
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
