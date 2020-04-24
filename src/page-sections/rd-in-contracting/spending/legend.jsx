import React from 'react';
import Percentage from '../../../svgs/rd-and-contracting/Percentage.svg';
import Devotion from '../../../svgs/rd-and-contracting/Devotion.svg';

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
        <div className={styles.chartLegend}>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Devotion/> R&D Devotion</p>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Percentage/> R&D to Total Contract Spending %</p>
        </div>
      );
    } else {
      return(
        <div className={styles.chartLegend}>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Devotion/> R&D Devotion</p>
          <p className={`${legendTextwrap ? styles.legendItemSmall : styles.legendItem}`}><Percentage/> Percentage of R&D to Total Contract Spending</p>
        </div>
      );
    };
  };
};
