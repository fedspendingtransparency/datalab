import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as _ from 'lodash';
import storyHeadingStyles from 'src/components/section-elements/story-section-heading/story-section-heading.module.scss';
import styles from './agencies.module.scss';

import Accordion from 'src/components/accordion/accordion';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import DataTable from 'src/components/table/data-table';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import SearchPanel from 'src/components/chartpanels/search';
import Share from 'src/components/share/share';
import StoryHeading from 'src/components/section-elements/story-section-heading/story-section-heading';
import VizControlPanel from 'src/components/chartpanels/viz-control';
import VizContainer from './bubble-chart-container/bubble-chart-container';

const Agencies = (props) => {
  const _data = useStaticQuery(graphql`
    query {
      allCuBubbleChartV2Csv {
        nodes {
          id
          agency
          subagency
          obligation
        }
      }
      allCuBubbleChartTableV2Csv {
        nodes {
          id
          Recipient
          agency
          subagency
          family
          type
          obligation
        }
      }
    }`
  )

  const [chartView, isChartView] = useState(true);
  const switchView = view => {
    if (view === 'chart') {
      isChartView(true);
    } else {
      updateTableData(tableData);
      isChartView(false);
    }
  };

  const searchList = _data.allCuBubbleChartV2Csv.nodes.map(n => {
    return {
      id: n.id,
      display: <><span className={styles.searchListAgency}>{n.agency}</span><p className={styles.searchListSubagency}>{n.subagency}</p></>,
      filterText: n.agency + n.subagency,
      heading: n.agency,
      subheading: n.subagency
    }
  });

  const chartRef = React.createRef();

  const searchItemSelected = id => {
    filterTableData(id);
    if (chartRef && chartRef.current) { chartRef.current.clickById(id); }
  };

  const tableColumnTitles = [{ title: 'Recipient' }, { title: 'Agency' }, { title: 'SubAgency' }, { title: 'Family' }, { title: 'Type' }, { title: 'Obligation' }];
  const tableData = _data.allCuBubbleChartTableV2Csv.nodes.map(n => [n.Recipient, n.agency, n.subagency, n.family, n.type, parseInt(n.obligation)]);

  const [filteredTableData, setFilteredData] = useState(tableData);
  const tableRef = React.createRef();

  function filterTableData(id) {
    let data = [];
    const itemList = searchList.find(el => el.id === id);
    const obj = _.filter(tableData, { 1: itemList.heading, 2: itemList.subheading });

    if (obj && obj.length > 0) {
      data.push(obj);
    }

    data = _.flatten(data);

    updateTableData(data);
  }

  function updateTableData(data) {
    setFilteredData(data);
    if (tableRef && tableRef.current) { tableRef.current.updateTableData(data); }
  }

  return (<>
    <StoryHeading
      bottomMargin={25}
      number={'03'}
      title={'AGENCY INVESTMENTS'}
      teaser={['Connect the agency ', <span key='03-teaser-callout' className={storyHeadingStyles.headingRed}>to the federal investment.</span>]}
      blurb={`Federal agencies are organizations in the executive branch with specific missions to serve the public, ranging from promoting the progress of science to ensuring national security. Use the chart below to discover the financial breakdown of each agency’s investment, including which colleges and universities get funds,
      and what investment vehicles they are using. In this visualization we focus on funding through grants and contracts.`}
    />

    <Hidden lgUp>
      <SearchPanel
        searchList={searchList}
        listDescription='Search Agencies'
        showIcon
        showCollapse
        onSelect={searchItemSelected}
      />
    </Hidden>

    <Accordion title='Instructions'>
      <p>In this visualization sub-agencies are represented by colorful circles and grouped together by their agency symbolized by the light gray bubble</p>
      <ul>
        <li>Hover over the circle cluster or individual circle for the total investment of the agency or sub-agency</li>
        <li>Click on a circle to view more details for each sub-agency</li>
        <li>Click anywhere in the gray circle to return to the original view</li>
      </ul>
    </Accordion>

    <Share
      location={props.location}
      title='Check out this analysis on Data Lab'
      text='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds!'
      twitter='Did you know the federal government invested over $149 billion in higher education? Check out this analysis and discover how much your Alma Mater received in federal funds! #DataLab #Treasury #DataTransparency #USAspending'
    />

    <Grid container justify='center'>
      <Grid item>
        <Hidden mdDown>
          <VizControlPanel
            searchList={searchList}
            listDescription='Search Agencies'
            onSelect={searchItemSelected}
            switchView={switchView} >
            <BubbleChartOutlinedIcon />
          </VizControlPanel>
        </Hidden>
      </Grid>
      <VizContainer
        display={chartView}
        data={_data.allCuBubbleChartV2Csv.nodes}
        chartRef={chartRef}
      />
      <DataTable
        display={!chartView}
        data={filteredTableData}
        columnTitles={tableColumnTitles}
        idName={'agenciesTable'}
        ref={tableRef}
      />
    </Grid>

    <Downloads
      href={'/data/colleges-and-universities/agencies/CU_bubble_chart_table_v2.csv'}
      date={'October 2019'}
    />
  </>);
}

export default Agencies;
