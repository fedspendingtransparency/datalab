import React from 'react';
import styles from './spending-chart.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from '../../../components/section-elements/downloads/downloads';
import ControlBar from '../../../components/control-bar/control-bar';
import Share from '../../../components/share/share';
import Toggle from "../../../components/toggle/toggle";

import SectionOneChartDesktopAll
	from 'src/images/rd-in-contracting/spending/sectionOneChartDesktopAll.svg';
import SectionOneChartDesktopCovid
	from 'src/images/rd-in-contracting/spending/sectionOneChartDesktopCovid.svg';
import SectionOneChartTabletAll
	from 'src/images/rd-in-contracting/spending/SectionOneChartTabletAll.svg';
import SectionOneChartTabletCovid
	from 'src/images/rd-in-contracting/spending/SectionOneChartTabletCovid.svg';
import SectionOneChartMobileAll
	from 'src/images/rd-in-contracting/spending/SectionOneChartMobileAll.svg';
import SectionOneChartMobileCovid
	from 'src/images/rd-in-contracting/spending/SectionOneChartMobileCovid.svg';

const desktopSvgs = [
	{
		img: SectionOneChartDesktopAll,
		width: 953,
		height: 618,
	},
	{
		img: SectionOneChartDesktopCovid,
		width: 955,
		height: 619,
	},
]

const tabletSvgs = [
	{
		img: SectionOneChartTabletAll,
		width: 613,
		height: 615,
	},
	{
		img: SectionOneChartTabletCovid,
		width: 613,
		height: 615,
	},
]

const phoneSvgs = [
	{
		img: SectionOneChartMobileAll,
		width: 336,
		height: 613,
	},
	{
		img: SectionOneChartMobileCovid,
		width: 337,
		height: 613,
	},
]

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
          To better view the values for DHS, AID, DoEd, DOC, and the VA, click or
          tap
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
        USAID – US Agency for International Development
        DoEd – Department of Education
        DOC – Department of Commerce
        VA – Department of Veterans’ Affairs`}
      </div>
    </AccordionList>
  );


  render() {
    const {bWidth} = this.state;
    const isTabletSvg = bWidth <= 991 && bWidth >= 768;
    const isMobileSvg = bWidth < 768;
    const largestSvg = bWidth >= 992;

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

    return (
      <>
        <h2 className='rd-viztitle'>{this.props.section.viztitle}</h2>
        {this.instructions()}
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
        <div className={styles.svgContainer}>
          {isMobileSvg && (
            <>
              {this.state.checked ?
                <img
                  src={phoneSvgs[1].img}
                  width={phoneSvgs[1].width}
                  height={phoneSvgs[1].height}
                />
                :
                <img
                  src={phoneSvgs[0].img}
                  width={phoneSvgs[0].width}
                  height={phoneSvgs[0].height}
                />
              }
            </>
          )}
          {isTabletSvg && (
            <>
              {this.state.checked ?
                <img
                  src={tabletSvgs[1].img}
                  width={tabletSvgs[1].width}
                  height={tabletSvgs[1].height}
                />
                :
                <img
                  src={tabletSvgs[0].img}
                  width={tabletSvgs[0].width}
                  height={tabletSvgs[0].height}
                />
              }
            </>
          )}
          {largestSvg && (
            <>
              {this.state.checked ?
                <img
                  src={desktopSvgs[1].img}
                  width={desktopSvgs[1].width}
                  height={desktopSvgs[1].height}
                />
                :
                <img
                  src={desktopSvgs[0].img}
                  width={desktopSvgs[0].width}
                  height={desktopSvgs[0].height}
                />
              }
            </>
          )}
        </div>
        <Downloads
          href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
          date={'October 2019'}
        />
      </>
    )
  }
}
