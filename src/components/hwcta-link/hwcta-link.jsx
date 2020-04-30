import React from 'react';
import PropTypes from 'prop-types';
import styles from './hwcta-link.module.scss';
import cssVars from 'src/styles/variables.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import Sources from '../logos/sources';
import { Link } from 'gatsby';

export default class HWCTALink extends React.Component {
  static propTypes = {
    pageColor: PropTypes.string
  };
  static defaultProps = {
    pageColor: cssVars.legacyBlue
  };

  constructor(props) {
    super(props);


    console.log(props.pageColor);
    console.log(typeof props.pageColor);


    this.divStyles = { 'color': `${this.props.pageColor}` };


    console.log(this.divStyles);



  }

  render = () => (
    <div
      className={styles.hwcta + ' ' + (this.props._mainClass || '')}
      style={this.divStyles}
    >
      <Link to={this.props.url.replace(/\/\//g, '/')}>
        <Grid container alignItems='center'>
          <Grid item className={styles.icon}>
            <Sources fillColor={this.props.pageColor} />
          </Grid>
          <Grid item>
            <span className={styles.linkText}>
              Data Sources and{' '}
              <Hidden mdUp>
                <br />
              </Hidden>
              Methodologies
            </span>
          </Grid>
          <Grid item className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronRight} width={20} color={this.props.pageColor} />
          </Grid>
        </Grid>
      </Link>
    </div >
  );
};
