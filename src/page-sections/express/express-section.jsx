import React from 'react';
import PropTypes from 'prop-types';
import styles from './express-section.module.scss';
import globalStyles from 'src/styles/variables.scss';

import { Grid, Hidden } from '@material-ui/core';
import ReadMore from '../../components/read-more/read-more';

export default class ExpressSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <section className={styles.section}>
      <div className={styles.title}>
        {this.props.title}
      </div>
      <Grid container className={styles.container}>
        <Grid item xs={12} xl={4}>
          <div className={styles.subtitle}>{this.props.subtitle}</div>
        </Grid>
        <Grid item xl={1} />
        <Grid item xs={12} xl={7}>
          <Hidden xsDown>
            <div className={styles.description}>{this.props.description}</div>
          </Hidden>
          <Hidden smUp>
            <ReadMore buttonStyle={{ color: globalStyles.dlExpressBlue }}>
              {this.props.description}
            </ReadMore>
          </Hidden>
        </Grid>
      </Grid>

      <div className={styles.viztitle}>{this.props.viztitle}</div>
      {this.props.children}
    </section>
}

ExpressSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  viztitle: PropTypes.string
}
