import React from 'react';
import PropTypes from 'prop-types';
import styles from './hwcta-link.module.scss';
import cssVars from 'src/styles/variables.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core';
import Sources from '../logos/sources';
import { Link } from 'gatsby';

const HWCTALink = (props) => {
  return (
    <div
      className={styles.hwcta + ' ' + props._mainClass}
      style={{ color: props.pageColor }}
    >
      <Link to={props.url.replace(/\/\//g, '/')}>
        <Grid container alignItems='center'>
          <Grid item className={styles.icon}>
            <Sources fillColor={props.pageColor} />
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
            <FontAwesomeIcon icon={faChevronRight} width={20} color={props.pageColor} />
          </Grid>
        </Grid>
      </Link>
    </div>
  );
};

HWCTALink.propTypes = {
  pageColor: PropTypes.string
};

HWCTALink.defaultProps = {
  pageColor: cssVars.legacyBlue
};

export default HWCTALink;
