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

    this.state = {
      linkStyle: {}
    }
  }

  hoverStyle = hovering => this.setState({ linkStyle: (hovering ? { 'color': this.props.pageColor, 'text-decoration': `underline ${this.props.pageColor}` } : {}) });

  render = () => (
    <div
      className={`${styles.hwcta} ${(this.props._mainClass || '')}`}
      onMouseOver={() => this.hoverStyle(true)} onMouseOut={() => this.hoverStyle(false)}
      onFocus={() => this.hoverStyle(true)} onBlur={() => this.hoverStyle(false)}
    >
      <Link to={this.props.url.replace(/\/\//g, '/')}>
        <Grid container alignItems='center'>
          <Grid item className={styles.icon}>
            <Sources fillColor={this.props.pageColor} />
          </Grid>
          <Grid item style={this.state.linkStyle}>
            Data Sources and{' '}
            <Hidden mdUp>
              <br />
            </Hidden>
            Methodologies
          </Grid>
          <Grid item className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronRight} width={20} color={this.props.pageColor} />
          </Grid>
        </Grid>
      </Link>
    </div>
  );
};
