import React from 'react';
import resetStyles from './reset.module.scss';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/styles';

import pageColorMap from '../../utils/page-color';
import { legacyBlue } from '../../styles/variables.scss';

const Reset = (props) => {
  let fillColor = legacyBlue;

  if (typeof window !== 'undefined') {
    fillColor = pageColorMap[window.location.pathname]
  }

  const StyledButton = withStyles(() => ({
    'root': {
      marginLeft: '5%',
      padding: 0,
      textTransform: 'none',
      color: '#555',
      '&:hover': {
        backgroundColor: 'transparent',
        color: fillColor,
        textDecoration: 'underline'
      },
      '&:focus': {
        backgroundColor: 'transparent',
        color: fillColor,
        textDecoration: 'underline'
      }
    }
  }))(Button)
  
  return (
    <StyledButton
      id={props.id}
      className={`reset-button ${resetStyles.resetButton}`}
      onClick={props._resetClick}
    >
      <RefreshIcon />
      <span> Reset</span>
    </StyledButton>
  )
}

export default Reset;
