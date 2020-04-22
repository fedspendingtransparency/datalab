import styles from './story.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Default from '../default/default';
import { Grid } from '@material-ui/core';
import HwctaLink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';
import { StorypageHeader } from '../../headers/headers';
import Toc from '../../toc/toc';

const StoryLayout = (props) => {
  let header, toc;

  if (!props.isCustomHeader) {
    header =
      <Grid container>
        <Grid item>
          <header className={styles.headerHero}>
            <p className={styles.title}>
              {props.title}
            </p>
            <p className={styles.introSentence}>
              {props.introSentence}
            </p>
            <p className={styles.contextStatement}>
              {props.contextStatement}
            </p>
          </header>
        </Grid>
      </Grid>;


    toc = props.sectionToc ? <Toc sections={props.sectionToc} /> : <></>;
  }

  return <Default>
    <StorypageHeader/>
      <div className={styles.storyPage}>
        {header}
        {toc}
        {props.children}

        <div className={styles.hwcta}>
          <HwctaLink url={props.hwctaLink || '#'} />
        </div>
        <MoreAnalyses />
      </div>
  </Default>
};

export default StoryLayout;

StoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  hwctaLink: PropTypes.string.isRequired,
  contextStatement: PropTypes.string,
  toc: PropTypes.array
}