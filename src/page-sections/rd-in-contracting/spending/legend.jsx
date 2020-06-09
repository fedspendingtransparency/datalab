import React from 'react';
import Percentage from '../../../svgs/rd-and-contracting/spending/Percentage.svg';
import Devotion from '../../../svgs/rd-and-contracting/spending/Devotion.svg';

import styles from '../spending/legend.module.scss';

export default class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legendWidth: 1400, // start desktop size
    };
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ legendWidth: window.innerWidth });
  };

  render() {
    let w = this.state.legendWidth;
    let legendTextwrap = w <= 713;
    let isMobile = w <= 576;

    if (isMobile) {
      return(
        <div className={styles.chartLegendMobile}>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Devotion/> <span>Research and Development Devotion</span></p>
          <p className={`${legendTextwrap ? styles.legendItemSmallSpending : styles.legendItemSpending}`}><Percentage/> <span> Percentage of Agency's Total Contract Spending  </span></p>
        </div>
      );
    } else {
      return(
        <div className={styles.chartLegend}>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Devotion/> <span>Research and Development Devotion</span></p>
          <p className={`${legendTextwrap ? styles.legendItemSmallSpending : styles.legendItemSpending}`}><Percentage/> <span> Percentage of Agency's Total Contract Spending </span></p>
        </div>
      );
    };
  };
};
