import React from 'react';
import styles from './tab-panel.module.scss'

const TabPanel = ({ value, index, children, ...other }) => (
  <div
    className={styles.tabPanel}
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && (
      <>{children}</>
    )}
  </div>
)

export default TabPanel;

