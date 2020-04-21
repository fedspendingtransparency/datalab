import React, { useEffect, useState } from 'react';
import styles from './studies.module.scss';
import Accordion from 'src/components/accordion/accordion';
import GridList from '@material-ui/core/GridList/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Share from '../../../components/share/share';
import 'src/styles/index.scss';

export default function Studies(props) {
  const [windowWidth, setWindowWidth] = useState(null);

  function handleResize() {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    };

  });

  return (<>
    <h2 className='rd-viztitle'>{props.section.viztitle}</h2>
    <Accordion title='Instructions'>
      <ul>
        <li>instructions here</li>
      </ul>
    </Accordion>

    <Share
      siteUrl={props.location.origin}
      pageUrl={props.location.pathname + '#' + props.sectionId}
      title='Data Lab - R&D in Contract Spending - U.S. Treasury'
      text={`#DYK the federal government is one of the largest and most consistent funding sources for Research & Development in the U.S.? Learn more by visiting #Data Lab's newest analysis, R&D in Contract Spending! #OpenData`}
      hoverColor='#1302d9'
    />

    <img src='/images/viz/rd/chart3.svg' className={styles.chart} />
    <GridList className={styles.legend} cols={windowWidth < 768 ? 2 : 5} cellHeight='auto'>
      <GridListTile className={styles.legendTile}>
        <div className={`${styles.legendBar} ${styles.one}`}></div>
        <div className={styles.legendText}>Total R&D</div>
      </GridListTile>
      <GridListTile className={styles.legendTile}>
        <div className={`${styles.legendBar} ${styles.two}`}></div>
        <div className={styles.legendText}>Development</div>
      </GridListTile>
      <GridListTile className={styles.legendTile}>
        <div className={`${styles.legendBar} ${styles.three}`}></div>
        <div className={styles.legendText}>Basic Research</div>
      </GridListTile>
      <GridListTile className={styles.legendTile}>
        <div className={`${styles.legendBar} ${styles.four}`}></div>
        <div className={styles.legendText}>Applied Research</div>
      </GridListTile>
      <GridListTile className={styles.legendTile}>
        <div className={`${styles.legendBar} ${styles.five}`}></div>
        <div className={styles.legendText}>R&D Plant</div>
      </GridListTile>
    </GridList>

    <Downloads
      href={'/unstructured-data/rd-in-contracting/Viz3_mock_ffs18-dt-tab001.csv'}
      date={'December 2019'}
    />
  </>);

}
