import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './tool.module.scss';

import Grid from '@material-ui/core/Grid';
import Default from '../default/default';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';
import { ToolpageHeader } from '../../headers/headers';
import pageColorMap from '../../../utils/page-color';
import { legacy } from '../../../styles/variables.scss';

const ToolLayout = (props) => {
  const [color, setColor] = useState(legacy);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setColor(pageColorMap[window.location.pathname.split('/').join('')])
    }
  }, [props.color])

  return (
    <Default>
      <ToolpageHeader />
      <div className={styles.toolPage}>
        <header className={styles.header}>
          <Grid container justify='space-between'>
            <Grid item className={styles.title}>{props.title}</Grid>
          </Grid>
        </header>
        <section>
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: props.introSentence }}></p>
          <p className={styles.p} dangerouslySetInnerHTML={{ __html: props.contextStatement }}></p>
        </section>

        <div className={styles.main}>
          <article>
            <section className={styles.childrenSection}>
              {props.children}
            </section>
            <section className={styles.followUp}>
              <Grid container>
                <Grid item xs={12} sm={4} lg={5}>
                  <div className={styles.bodyIntro} dangerouslySetInnerHTML={{ __html: props.sectionTitle }}></div>
                </Grid>
                <Grid item xs={12} sm={8} lg={7}>
                  <div dangerouslySetInnerHTML={{ __html: props.sectionText }}></div>
                </Grid>
              </Grid>
            </section>
          </article>
        </div>
        <HWCTALink url={props.hwctaLink || '#'} _mainClass={styles.hwcta} _noOffset='true' fillColor={color} />
        <MoreAnalyses />
      </div>
    </Default>
  )
}

ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionText: PropTypes.string,
  hwctaLink: PropTypes.string
}

export default ToolLayout;