import React from 'react';
import styles from "./scroll-to-top-button.module.scss";

import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollToTopButton = ({ onClick }) => {
  return (
    <div className={styles.scrollToTopContainer}>
      <IconButton aria-label='scroll-to-top' className={styles.scrollToTopButton} onClick={onClick}>
        <ExpandLessIcon fontSize='large' />
      </IconButton>
    </div>
  );
}
 
export default ScrollToTopButton;