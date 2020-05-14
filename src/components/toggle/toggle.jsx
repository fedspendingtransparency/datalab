import React from 'react';

import { Switch } from '@material-ui/core';
import { withStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import toggleStyles from './toggle.module.scss';

const StyledSwitch = withStyles(() => ({
  root: {
    width: 45,
    height: 24,
    padding: 0,
    display: 'flex',
    margin: '0 1rem'
  },
  switchBase: {
    padding: 2,
    color: '#fff',
    '&$checked': {
      transform: 'translateX(21px)',
      color: '#fff',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#e6e6e6'
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    boxShadow: 'none',
    border: 'solid 2px #555',
  },
  track: {
    opacity: 1,
    backgroundColor: '#e6e6e6',
    borderRadius: 12
  },
  checked: {},
}))(Switch);

const Toggle = ({ first, second, handleToggle, checked }) => (
  <div className={toggleStyles.toggleContainer}>
    <div className={checked ? toggleStyles.toggleLabelInactive : toggleStyles.toggleLabelActive}>
      <FontAwesomeIcon icon={first.icon} className={toggleStyles.toggleIcon} />
      <p>{first.name}</p>
    </div>
    <StyledSwitch checked={checked} onChange={handleToggle} color='default' />
    <div className={checked ? toggleStyles.toggleLabelActive : toggleStyles.toggleLabelInactive}>
      <FontAwesomeIcon icon={second.icon} className={toggleStyles.toggleIcon} />
      <p>{second.name}</p>
    </div>
  </div>
);
 
export default Toggle;