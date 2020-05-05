import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Share from 'src/components/share/share';

export default function Tracking(props) {

  const data = useStaticQuery(graphql`
    query {
      main: allSf133Viz4Main20200501Csv {
        nodes {
          Agency
          Total_Budgetary_Authority
          Percent_Obligated
          Percent_Unobligated
        }
      }
    }
  `);

  const mainChart = () => {
    const table = data.main.nodes.map(i => {
      return <div className={styles.chartRow}>{i.Agency} ${i.Total_Budgetary_Authority} {i.Percent_Obligated}% {i.Percent_Unobligated}%</div>;
    });

    return table;
  }

  return <>

    <AccordionList title='Instructions'>
      <p>Actual instructions are larger than they appear</p>
    </AccordionList>

    <ControlBar>
      <Share
        siteUrl={props.location.origin}
        pageUrl={props.location.pathname + '#' + props.sectionId}
        title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
        text={'Who watches the Watchmen? Anyone with HBO...'}
      />
    </ControlBar>

    {mainChart()}

    <Downloads
      href={''}
      date={'Flovember 1922'}
    />
  </>;
}