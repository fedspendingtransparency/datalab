import React from 'react';
import styles from './spendingChart.module.scss';

import SectionOneChartDesktop from '../../../svgs/rd-and-contracting/chart1.svg';
import SectionOneChartTablet from '../../../svgs/rd-and-contracting/chart1-tablet.svg';
import SectionOneChartMobile from '../../../svgs/rd-and-contracting/chart1-mobile.svg';

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

    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('click', this.detailsListener);
    this.detailsClose();
    this.detailsKeyup();
    this.closeDetailResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('resize', this.closeDetailResize);
  }

  closeDetailResize = () => {
    let that = this;
    window.addEventListener('resize', function() {
      that.setState({ showDetails: false });
    });
  };

  handleWindowSizeChange = () => {
    this.setState({ bWidth: window.innerWidth });
  };

  detailsClose = () => {
    let that = this;
    document.getElementById('clear-24px').addEventListener('click', function() {
      that.setState({ showDetails: false });
    });

    /* add keyboard enter click support */
    document.getElementById('clear-24px').addEventListener('keyup', function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        that.setState({ showDetails: false });
      };
    });
  };

  detailsKeyup = () => {
    let that = this;
    document.getElementById('Show-Details').addEventListener('keyup', function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        that.setState({showDetails: !that.state.showDetails});
      };
    });
    document.getElementById('Show-Details-Text').addEventListener('keyup', function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        that.setState({showDetails: !that.state.showDetails});
      };
    });
  }

  /* 
    - Dynamic Event Listener - 
    Use "e.target" and not element directly as some are not drawn
    on the DOM yet. 
  */
  detailsListener = (e) => {
    let element = e.target;

    if (element.id === 'Show-Details-Text') {
      this.setState({showDetails: !this.state.showDetails});
    };

    /* Little Person Icon */
    if (element.id === 'Detail-Icon') {
      this.setState({showDetails: !this.state.showDetails});
    };

    /* Region bounded by dotted lines */
    if (element.id === 'toggle-region') {
      this.setState({showDetails: !this.state.showDetails});
    };
    
    /* The 'x' on "popup-x.svg" to close! */
    if (element.id === 'x-icon') {
      this.setState({showDetails: false});
    }
  };


  /* We have to layer the popup over the svg 
    with position absolute. This can get a bit messy.
    We want to offset the chart where it doesn't overlay the axis
    so we'll use these checkers to shift it over on certain sizes.
  */

  /* Tablet Checker */
  tabletChecker = () => {
    if (this.state.bWidth <= 900) {
      return '35%';
    } else if (this.state.bWidth <= 675) {
      return '28%';
    };
  }

  /* Desktop Inline Style Checker */
  desktopChecker = () => {
    if (this.state.bWidth <= 970) {
      return '36%';
    };
  }
  
  render() {
    console.log(this.state);
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
      return(
        <div className={styles.svgContainerTablet}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`} style={tabletPopupStyle}>
            <SectionOneChartPopupTablet/>
          </div>
          <SectionOneChartTablet/>
          <Legend/>
        </div>
      );
    } else if (isMobileSvg) {
      return(
        <div className={styles.svgContainerMobile}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShowMobile : styles.svgPopout}`}>
            <SectionOneChartPopupMobile/>
          </div>
          <SectionOneChartMobile/>
          <Legend/>
        </div>
      );
    } else if (largestSvg) {
      return(
        <div className={styles.svgContainerDesktop}>
          <div className={`${this.state.showDetails ? styles.svgPopoutShow : styles.svgPopout}`} style={desktopPopupStyle}>
            <SectionOneChartPopupDesktop/>
          </div>
          <SectionOneChartDesktop/>
          <Legend/>
        </div>
      );
    } else {
      return null;
    }

  };
};
