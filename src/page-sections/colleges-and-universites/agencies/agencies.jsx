import React, { useState }  from "react";
import { graphql, useStaticQuery } from 'gatsby';

import storyHeadingStyles from '../../../components/section-elements/story-heading/story-heading.module.scss';

import Accordion from '../../../components/accordion/accordion';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import Downloads from '../../../components/section-elements/downloads/downloads';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import SearchPanel from '../../../components/chartpanels/search';
import StoryHeading from '../../../components/section-elements/story-heading/story-heading';
import VizControlPanel from '../../../components/chartpanels/viz-control';
import Share from "../../../components/share/share";
import VizContainer from "./viz-container/viz-container";
import TableContainer from "./table-container";
import * as _ from 'lodash';

const Agencies = (props) => {
  const _data = useStaticQuery(graphql`
    query {
      allUnivBubbleChartCsv {
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
      isChartView(false);
    }
  }

  const searchList = _data.allUnivBubbleChartCsv.nodes.map(n => {
    return {
      id: n.id,
      heading: n.agency,
      subheading: n.subagency
    }
  });

  const chartRef = React.createRef();

  const searchItemSelected = id => {
    filterTableData(id);
    if (chartRef && chartRef.current) { chartRef.current.clickById(id); }
  }

  const tableColumnTitles = [{title: 'Recipient'}, {title: 'Agency'}, {title: 'SubAgency'}, {title:'Family'}, {title: 'Type'}, {title: 'Obligation'}];
  const tableData = _data.allCuBubbleChartTableV2Csv.nodes.map(n => [n.Recipient, n.agency, n.subagency, n.family, n.type, parseInt(n.obligation)]);

  const [filteredTableData, setFilteredData] = useState(tableData);
  const tableRef = React.createRef();

  function filterTableData(id) {
    let data = [];
    let itemList;

    itemList = searchList.find(function(el){
      return el.id === id;
    });

    let obj = _.filter(tableData, {1: itemList.heading, 2:itemList.subheading});
    if(obj && obj.length > 0) {
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
      number={'03'}
      title={'AGENCY INVESTMENTS'}
      teaser={['Connect the agency ', <span className={storyHeadingStyles.headingRed}>to the federal investment.</span>]}
      blurb={`Federal agencies are organizations in the executive branch with specific missions to serve the public, ranging from promoting the progress of science to ensuring national security. Use the chart below to discover the financial breakdown of each agency’s investment, including which colleges and universities get funds,
      and what investment vehicles they are using. In this visualization we focus on funding through grants and contracts.`}
    />

    <Hidden lgUp>
      <SearchPanel
        searchList={searchList}
        listDescription='Agencies'
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
            listDescription='Agencies'
            onSelect={searchItemSelected}
            switchView={switchView} >
            <BubbleChartOutlinedIcon />
          </VizControlPanel>
        </Hidden>
      </Grid>
      <VizContainer
        display={chartView}
        data = {_data.allUnivBubbleChartCsv.nodes}
        chartRef = {chartRef} />
      <TableContainer
        display={!chartView}
        tableColumnTitles = {tableColumnTitles}
        tableData = {filteredTableData}
        tableRef = {tableRef} />
    </Grid>

    <Downloads
      href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
      date={'March 2019'}
    />
  </>);
}

export default Agencies;
