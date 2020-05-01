import React from 'react';
import styles from './spending-chart.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from '../../../components/section-elements/downloads/downloads';
import ControlBar from "../../../components/control-bar/control-bar";
import Share from '../../../components/share/share';

import SectionOneChartDesktop from '../../../svgs/rd-and-contracting/chart1.svg';
import SectionOneChartTablet from '../../../svgs/rd-and-contracting/chart1-tablet.svg';
import SectionOneChartMobile from '../../../svgs/rd-and-contracting/chart1-mobile.svg';

import CloseIcon from '@material-ui/icons/Close';
import SectionOneChartPopupDesktop from '../../../svgs/rd-and-contracting/chart1-desktop-popup.svg';
import SectionOneChartPopupTablet from '../../../svgs/rd-and-contracting/chart1-tablet-popup.svg';
import SectionOneChartPopupMobile from '../../../svgs/rd-and-contracting/chart1-mobile-popup.svg';

import Legend from './legend.jsx';

export default class SpendingChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bWidth: 1200, // start desktop size
      showDetails: false,
    };
  }

  componentDidMount() {
    this.setState({ bWidth: window.innerWidth }); // set initial width for render
    this.handleWindowSizeChange();

    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('click', this.detailsListener);
    this.detailsKeyup();
    this.closeDetailResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('resize', this.closeDetailResize);
  }

  closeDetailResize = () => {
    let that = this;
    window.addEventListener('resize', function () {
      that.setState({ showDetails: false });
    });
  };

  handleWindowSizeChange = () => {
    this.setState({ bWidth: window.innerWidth });
  };

  detailsKeyup = () => {
    let that = this;
    document.getElementById('Show-Details').addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        that.setState({ showDetails: !that.state.showDetails });
      };
    });
    document.getElementById('Show-Details-Text').addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        that.setState({ showDetails: !that.state.showDetails });
      };
    });
  }

  /* 
    - Dynamic Event Listener - 
    Use "e.target" and not element directly as some are not drawn
    on the DOM yet. 
  */
  detailsListener = e => {
    let element = e.target;

    if (element.id === 'Show-Details-Text') {
      this.setState({ showDetails: !this.state.showDetails });
    };

    if (element.id === 'path-10') {
      this.setState({ showDetails: !this.state.showDetails });
    }

    if (element.id === 'mask-11') {
      this.setState({ showDetails: !this.state.showDetails });
    }

    /* Little Person Icon */
    if (element.id === 'Detail-Icon') {
      this.setState({ showDetails: !this.state.showDetails });
    };

    /* Region bounded by dotted lines */
    /* This region is covered in IE11... */
    if (element.id === 'toggle-region') {
      this.setState({ showDetails: !this.state.showDetails });
    };
    
    /* The 'x' on "popup-x.svg" to close! */
    if (element.id === 'x-icon') {
      this.setState({ showDetails: false });
    }

    /* selectors for IE11... */
    if (element.correspondingElement) {
      if (element.correspondingElement.id === 'path-10') {
        this.setState({ showDetails: !this.state.showDetails });
      }
  
      if (element.correspondingElement.id === 'Show-Details-Text') {
        this.setState({ showDetails: !this.state.showDetails });
      }
  
      if (element.correspondingElement.id === 'Detail-Icon') {
        this.setState({ showDetails: !this.state.showDetails });
      }  
    }
    
  };

  closePopup = () => {
    this.setState({ showDetails: false });
  }

  /* We have to layer the popup over the svg 
    with position absolute. This can get a bit messy.
    We want to offset the chart where it doesn't overlay the axis
    so we'll use these checkers to shift it over on certain sizes.
  */

  /* Tablet Checker */
  tabletChecker = () => {
    if (this.state.bWidth <= 780) {
      return '33%';
    } else if (this.state.bWidth <= 675) {
      return '28%';
    };
  }

  /* Desktop Inline Style Checker */
  desktopChecker = () => {
    if (this.state.bWidth <= 1000) {
      return '35%';
    } 
  }

  instructions = () => (
    <AccordionList title='Instructions'>
      <ul>
        <li>To better view the values for DHS, AID, DoEd, DOC, and the VA, click or tap on the values for any of these agencies</li>
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
    let bWidth = this.state.bWidth;
    let isTabletSvg = bWidth <= 768 && bWidth >= 576;
    let isMobileSvg = bWidth <= 576;
    let largestSvg = bWidth >= 769;

    let tabletVal = this.tabletChecker();
    let desktopVal = this.desktopChecker();

    let tabletPopupStyle = {
      left: tabletVal
    };

    let desktopPopupStyle = {
      left: desktopVal
    };

    if (isTabletSvg) {
      return (<>
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
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`} style={tabletPopupStyle}>
            <SectionOneChartPopupTablet />
            <CloseIcon className={styles.closeIcon} onClick={this.closePopup}/>
          </div>
          <SectionOneChartTablet />
          <Legend />
          <Downloads
            href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
            date={'December 2019'}
          />
        </div>
      </>);
    } else if (isMobileSvg) {
      return (<>
        <h2 className='rd-viztitle'>{this.props.section.viztitle}</h2>
        {this.instructions()}
        <div className={styles.svgContainerMobile}>
          <ControlBar>
            <Share
              siteUrl={this.props.location.origin}
              pageUrl={this.props.location.pathname + '#' + this.props.sectionId}
              title='Data Lab - R&D in Contract Spending - U.S. Treasury'
              text={`Which agencies had the highest proportion of contract spend devoted to R&D initiatives in FY19? Find out in #DataLab's newest analysis, R&D in Contract Spending! #OpenData #RandD`}
              hoverColor='#1302d9'
            />
          </ControlBar>
          <div className={`${this.state.showDetails ? styles.svgPopoutShowMobile : styles.svgPopout}`}>
            <SectionOneChartPopupMobile />
            <CloseIcon className={styles.closeIcon} onClick={this.closePopup}/>
          </div>
          <SectionOneChartMobile />
          <Legend />
          <Downloads
            href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
            date={'December 2019'}
          />
        </div>
      </>);
    } else if (largestSvg) {
      return (<>
        <h2 className='rd-viztitle'>{this.props.section.viztitle}</h2>
        {this.instructions()}
        <div className={styles.svgContainerDesktop}>
          <ControlBar>
            <Share
              siteUrl={this.props.location.origin}
              pageUrl={this.props.location.pathname + '#' + this.props.sectionId}
              title='Data Lab - R&D in Contract Spending - U.S. Treasury'
              text={`Which agencies had the highest proportion of contract spend devoted to R&D initiatives in FY19? Find out in #DataLab's newest analysis, R&D in Contract Spending! #OpenData #RandD`}
              hoverColor='#1302d9'
            />
          </ControlBar>
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`} style={desktopPopupStyle}>
            <SectionOneChartPopupDesktop />
            <CloseIcon className={styles.closeIcon} onClick={this.closePopup}/>
          </div>
          <SectionOneChartDesktop />
          <Legend />
          <Downloads
            href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
            date={'December 2019'}
          />
        </div>
      </>);
    } else {
      return null;
    }

  };
};
