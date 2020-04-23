import React, { useState } from "react"
import { Hidden } from '@material-ui/core'
import Mapviz from "../../components/visualizations/homelessness-analysis/mapviz/mapviz"
import * as _ from "lodash"

import dataSource from '../../components/visualizations/homelessness-analysis/utils/data-module';
import TableContainer from "../colleges-and-universities/agencies/agencies-table-container";
import styles from "../../components/visualizations/homelessness-analysis/mapviz/mapviz.module.scss";
import mapImg from "../../components/visualizations/homelessness-analysis/mapviz/map.svg";
import tableImg from "../../components/visualizations/homelessness-analysis/mapviz/table.svg";
import ControlBar from "../../components/control-bar/control-bar";
import Reset from "../../components/reset/reset";
import Share from "../../components/share/share";
import SearchIcon from '@material-ui/icons/Search';
import Downloads from "../../components/section-elements/downloads/downloads";
import AccordionList from "../../components/accordion-list/accordion-list";

export default function Geography(props) {

  const [chartView, isChartView] = useState(true);
  const [clicked, setClicked] = useState(false);
  const { mem } = dataSource;
  const populationData = mem.pop;

  const switchView = view => {
    updateTableData(tableData);
    if (view === 'chart') {
      isChartView(true);
    } else {
      isChartView(false);
    }
  }

  const searchList = populationData.map(n => {
    return {
      coc: n.coc_number,
      name: n.coc_name
    }
  });

  const chartRef = React.createRef();

  const searchItemSelected = id => {
    filterTableData(id);
    if (chartRef && chartRef.current) { chartRef.current.clickById(id); }
  }

  const tableColumnTitles = [
    {
      title: 'CoC Number',
      width: 112.5
    },
    {
      title: 'CoC Name',
      width: 250
    },
    {
      title: 'Total Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Sheltered Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Unsheltered Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Chronically Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless Veterans',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless Individuals',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless People in Families',
      width: 137.5,
      type: 'number'
    },
    {
      title: 'Homeless Unaccompanied Youth (Under 25)',
      width: 150,
      type: 'number'
    }];
  const tableData = populationData.map(n =>
    [n.coc_number,
      n.coc_name,
      n.total_homeless,
      n.sheltered_homeless,
      n.unsheltered_homeless,
      n.chronically_homeless,
      n.homeless_veterans,
      n.homeless_individuals,
      n.homeless_people_in_families,
      n.total_homeless_unaccompanied_youth_under_25
  ]);

  const [filteredTableData, setFilteredData] = useState(tableData);
  const tableRef = React.createRef();

  function filterTableData(id) {
    let data = [];
    let itemList;

    itemList = searchList.find(function (el) {
      return el.id === id;
    });

    let obj = _.filter(tableData, { 1: itemList.heading, 2: itemList.subheading });
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

  function searchData(e) {
    const strCap = e.currentTarget.value.toUpperCase();
    let newData;
    if (strCap) {
      newData = tableData.filter((d) => {
        const cocName = d[1].toUpperCase();
        const cocNum = d[0].toUpperCase();
        return (cocName.indexOf(strCap) >= 0 || cocNum.indexOf(strCap) >= 0);
      });
    } else {
      newData = tableData;
    }

    updateTableData(newData);
  }

  function searchBoxFocus() {
    document.getElementById('homeless-region-search').focus();
  }

  function reset() {
    switchView('chart');

    const searchBox = document.getElementById('homeless-region-search');
    if(searchBox){
      searchBox.value = '';
    }

    setClicked(true);
  }

  return (<>
    <div className="homelessness-subheading">Homeless Population by Region</div>
    <div className="homelessness-subheading2">HUD Point-in-time Count by Continuum of Care Area</div>

    <AccordionList
      title='Instructions'>
      <ul>
        <li>Double click on the map to zoom into a region.</li>
        <li>Hover over the region to see a pop-up box with the total number of homeless for that CoC.</li>
        <li>Double click that same region to zoom out, or click the Reset button.</li>
        <li>While zoomed in, double clicking a different region will re-center the map on that region.</li>
        <li>To view this data in table format, click the table icon in the upper-left hand corner of the visualization.</li>
        <li>To return to map view, click on the map icon in the upper-left hand corner of the visualization.</li>
      </ul>
    </AccordionList>

    <div className="viz-actions">
      <ControlBar>
        <Reset _resetClick={reset} onClick={reset} />
        <Share location={props.location} />
      </ControlBar>
      <Hidden xsDown>
        <div className="homeless-map-options">
          <span className="homeless-style">View</span>
          <img id={styles.homelessActionMap} src={mapImg} onClick={function () { switchView('chart'); }} />
          <img id={styles.homelessActionTable} src={tableImg} onClick={function () { switchView('table'); }} />
          <input type='text'
            id='homeless-region-search'
            className={`homeless-region-search ${chartView ? 'invisible' : ''}`}
            onInput={searchData}
            placeholder='Search by CoC Name'
          />
          <SearchIcon
            className={`homeless-region-search-icon ${chartView ? 'hidden' : ''}`}
            onClick={searchBoxFocus}
          />
        </div>
      </Hidden>
    </div>
    <div id='chart-area'>
      <Mapviz
        display={chartView}
        data={dataSource}
        isClicked={clicked}
      />
      <TableContainer
        display={!chartView}
        tableColumnTitles={tableColumnTitles}
        tableData={filteredTableData}
        tableRef={tableRef}
      />

      <Downloads
        href={'/unstructured-data/homelessness-analysis/panel_2_table_and_counts_v7_2020_03_27.csv'}
        date={'November 2019'}
      />
    </div>
  </>)
}
