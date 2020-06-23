import React from 'react';
import PropTypes from 'prop-types';
import hwctaLinkStyles from './hwcta-link.module.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden, Container } from '@material-ui/core';
import { withStyles } from "@material-ui/styles"
import Sources from '../logos/sources';
import { Link } from 'gatsby';

const HWCTALink = (props) => {
  const DSMWrapper = withStyles(() => ({
    'root': {
      '&:hover': {
        '& .hover-color': {
          color: props.fillColor
        }
      },
      '& a': {
        '&:focus': {
          '& .hover-color': {
            color: props.fillColor
          }
        }
      }
    }
  }))(Container)

  return (
    <div className={hwctaLinkStyles.hwcta + ' ' + props._mainClass}>
      <DSMWrapper>
        <Link to={props.url.replace(/\/\//g, '/')} style={{ textDecorationColor: props.fillColor }}>
          <Grid container alignItems='center'>
            <Grid item className={hwctaLinkStyles.icon}>
              <Sources fillColor={props.fillColor} />
            </Grid>
            <Grid item className='hover-color'>
              Data Sources and{' '}
              <Hidden mdUp>
                <br />
              </Hidden>
              Methodologies
            </Grid>
            <Grid item className={hwctaLinkStyles.arrow}>
              <FontAwesomeIcon icon={faChevronRight} width={20} color={props.fillColor} />
            </Grid>
          </Grid>
        </Link>
      </DSMWrapper>
    </div>
  );
};

HWCTALink.propTypes = {
  fillColor: PropTypes.string
};

HWCTALink.defaultProps = {
  fillColor: '#881E3D'
};

export default HWCTALink;
