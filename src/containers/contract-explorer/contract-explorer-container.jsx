import React, { useState, useEffect } from 'react'

import { Grid, Hidden } from '@material-ui/core';

const sunData = flareData;
import Downloads from "src/components/section-elements/downloads/downloads"
import flareData from '../../../static/unstructured-data/contract-explorer/flare.json';
import awardsData from '../../../static/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv';
import SunburstDetails from './details/sunburst-details';
import Sunburst from 'src/components/visualizations/sunburst-vega/sunburst-vega';
import Breadcrumbs from './breadcrumbs/sunburst-breadcrumbs';
import styles from './contract-explorer-container.module.scss';
import Search from 'src/components/chartpanels/search';


const SunburstVegaContainer = () => {

  // create arrays of unique agencies, subagencies and recipients with ID for search list
  const agencies = [];
  const subagencies = [];
  const recipients = [];
  awardsData.map((e, i) => {

    if (agencies.findIndex(a => a.display === e.agency) === -1) {
      agencies.push({
        id: `a${i}`,
        display: e.agency
      });
    }

    if (subagencies.findIndex(s => s.display === e.subagency) === -1) {
      subagencies.push({
        id: `s${i}`,
        display: e.subagency
      });
    }

    if (recipients.findIndex(r => r.display === e.recipient) === -1) {
      recipients.push({
        id: `r${i}`,
        display: e.recipient
      });
    }
  });
  const searchList = agencies.concat(subagencies).concat(recipients);

  // try to force redraw of sunburst (or entire container); NOT WORKING
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({ 'thing': 'one' }), ['thing', 'two']);

  const searchSelect = (id) => {
    sunData.tree = flareData.tree.slice(0, 50);  // filter data in chart (future: to selected); WORKS, BUT DOESN'T REDRAW
    forceUpdate();
  }

  useEffect(() => {
    getDetails();
  }, []);

  const breadcrumbsDefaults = {
    agency: null,
    subagency: null,
    recipient: null
  };

  const detailDefaults = {
    label: null,
    total: null,
    top5: [],
    name: null
  }

  const colors = ['#7A2149', '#61344A', '#4E4861', '#3F566E', '#3C596A', '#2F6567', '#38705F', '#517852', '#88923D',
    '#AE933D', '#D39248', '#EA8052'];

  const [breadcrumbs, setBreadcrumbs] = useState(breadcrumbsDefaults);
  const [details, setDetails] = useState(detailDefaults);

  function getTop5(items, type) {
    // get all unique values of the item type
    let unique = [...new Set(items.map(item => item[type]))];
    let summedItems = [];

    for (let i = 0; i < unique.length; i++) {
      summedItems.push({
        name: unique[i],
        type: type,
        obligation: items.filter(node => node[type] === unique[i]).reduce((a, b) => a + (b.obligation || 0), 0)
      });
    }
    return summedItems.sort((a, b) => (a.obligation < b.obligation) ? 1 : -1).slice(0, 5);
  }

  function getDetails(item) {
    const depth = item && item.depth ? item.depth : 0;
    let breadcrumbs = {
      agency: null,
      subagency: null,
      recipient: null
    };

    let details = {
      label: null,
      total: null,
      top5: [],
      name: null
    };

    switch (depth) {
      case 0:
        details.label = 'Agencies';
        details.total = awardsData.reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData, 'agency');
        details.name = 'Contract Spending In Fiscal Year 2019';
        break;
      case 1:
        breadcrumbs.agency = item.agency;
        details.label = 'Subagencies';
        details.total = awardsData.filter(node => node.agency === item.agency).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === item.agency), 'subagency');
        details.name = item.name;
        break;
      case 2:
        breadcrumbs.agency = item.agency;
        breadcrumbs.subagency = item.name;
        details.label = 'Contractors';
        details.total = awardsData.filter(node => node.agency === item.agency && node.subagency === item.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.top5 = getTop5(awardsData.filter(node => node.agency === item.agency && node.subagency === item.name), 'recipient');
        details.name = item.name;
        break;
      case 3:
        const subagency = sunData.tree.filter(node => node.id === item.parent);
        breadcrumbs.agency = item.agency;
        breadcrumbs.subagency = subagency[0].name;
        breadcrumbs.recipient = item.name;
        details.total = awardsData.filter(node => node.agency === item.agency && node.subagency === subagency[0].name && node.recipient === item.name).reduce((a, b) => a + (b.obligation || 0), 0);
        details.name = item.name;
        break;
    }
    setBreadcrumbs(breadcrumbs);
    setDetails(details);
  }

  return <>
    <Hidden smDown>
      <Grid container spacing={4} className={styles.sectionContainer}>
        <Grid item md={6}>
          <Search
            searchList={searchList}
            listDescription='Search List of Contracts and Agencies'
            onSelect={searchSelect}
          />
          <div className={styles.sunburstDetails}>
            <SunburstDetails details={details} />
          </div>
        </Grid>
        <Grid item md={6}>
          <Breadcrumbs className={`${styles.header} ${styles.breadcrumbsContainer}`} items={breadcrumbs} />
          <Sunburst data={sunData} getDetails={getDetails} colors={colors} />
          <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
          <Downloads className={styles.downloadContainer}
            href={'/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv'} />
        </Grid>
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <Search
        searchList={searchList}
        listDescription='Search List of Contracts and Agencies'
        onSelect={searchSelect}
      />
      <Breadcrumbs className={styles.header} items={breadcrumbs}></Breadcrumbs>
      <Sunburst data={sunData} getDetails={getDetails} colors={colors} />
      <div className={styles.sunburstMessage}>The visualization contains data on primary awards to recipients. Sub-awards are not included.</div>
      <Downloads className={styles.downloadContainer}
                 href={'/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv'} />
      <SunburstDetails details={details} />
    </Hidden>
  </>;
}

export default SunburstVegaContainer;
