import React from 'react';
import styles from './footnotes.module.scss';

const FootnotePadding = ({ footnoteId }) => {
  return (
    <span className={styles.paddingContainer}>
      <span id={footnoteId} className={styles.anchor} />
    </span>
  );
}
 
export default FootnotePadding;