import React, { useEffect, useState } from "react";
import * as d3 from 'd3v3';
import styles from './mapviz.module.scss';

import tooltipModule from "../../../tooltip-legacy/tooltip";
import tipStyles from '../../../tooltip-legacy/tooltip.module.scss';

/* Extracted and adapted from fedscope.js an trreemap-module.js */

export default function Mapviz(props) {

  const { mem } = props.data;
  const us = mem.us;
  const tableData = mem.pop;
  let Tooltip;

  const absWidth = 1024;
  const absHeight = 575;
  const margin = {
    top: 100,
    right: 50,
    bottom: 15,
    left: 100
  };
  const getformattedNumber = d3.format(',.0f');

  const width = 1000;
  const height = 600;
  let mapHeight = null;
  let map1Centered = null;
  let path, g;

  function OtherformatNumber (number) {
    if(isNaN(number)) {
      return 'NA';
    } else {
      return getformattedNumber(number);
    }
  }

  function GenMap() {
    d3.select('#container').append('div').attr('id', 'viz_container');
    // let centered = null;

    // D3 Projection
    const projection = d3.geo.albersUsa()
      .translate([width / 2, height / 2]) // translate to center of screen
      .scale([1200]); // scale things down so see entire US ---1455

    // Define path generator
    path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
      .projection(projection); // tell path generator to use albersUsa projection

    d3.select('#viz_container')
      .append('div')
      .attr('id', 'map_container')
      .attr('width', width)
      .attr('height', height);

    const mapSvg = d3.select('#map_container')
      .append('svg')
      .attr('id', 'svg')
      .attr('width', '100%')
      .attr('height', mapHeight)
      .attr('viewBox', '0 0 950 575')
      .attr('preserveAspectRatio', 'xMidYMid meet');

    mapSvg.append('circle').attr('id', 'tipfollowscursor_1');

    g = mapSvg.append('g')
      .attr('class', 'counties')
      .selectAll('path')
      .data(us.features)
      .enter()
      .append('path')
      .attr('class', 'coc')
      .attr('data-coc', (d) => d.properties.coc_number)
      .attr('data-state', (d) => d.properties.state)
      .attr('data-name', (d) => d.properties.name)
      .attr('d', path);

    // todo - Add in functionality for the click function which includes updating
    // the tables in the 'Federal Spending on Homelessness by Region' section
    g.on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut)
      .on('dblclick', setZoom)
      .style('fill', getColor);
  }

  function setZoom(d) {
    let x;
    let y;
    let k;

    // todo - Add in tracking event
    // window.Analytics.event({
    //   category: 'Homelessness Analysis - Panel 1 - Double Click CoC',
    //   action: `${d.properties.coc_number} - ${d.properties.COCNAME}`
    // });

    if (d && map1Centered !== d) {
      const centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];

      if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
        k = 6.0;
      } else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
        k = 4.0;
      } else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
        k = 5.0;
      } else if (d.properties.Shape__Are <= 0.4) {
        k = 17.0;
      } else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
        k = 14.0;
      } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
        k = 12.0;
      } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
        k = 6.0;
      } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
        k = 3.0;
      } else {
        k = 2.0;
      }
      map1Centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      map1Centered = null;
    }

    g = d3.select('#map_container g.counties');

    g.selectAll('path')
      .classed('active', map1Centered && d === map1Centered);

    g.transition()
      .duration(750)
      .attr('transform', `translate(${width / 2},${height / 2})scale(${k})translate(${-x},${-y})`)
      .style('stroke-width', `${0.25 / k}px`);
  }

  function handleMouseOver(d) {
    const html = `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0;`
      + ` padding-bottom:15px; font-weight: bold; color:#555555">`
      + `${d.properties.coc_number}: ${d.properties.COCNAME}</p><br>` +
      `<p style="color: #0071BC; margin: 0; padding-bottom:0; font-size: 20px; line-height: 22px">`
      + `Total Homeless: ${getValue(d)}</p><br>` +
      `<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">` +
      `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
      + `Sheltered Homeless: ${getSheltered(d)}</li>` +
      `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
      + `Unsheltered Homeless: ${getUnsheltered(d)}</li></ul><br>` +
      `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">`
      + ` Double click to zoom in/zoom out</p>`;
    Tooltip.draw("tooltipMapViz", null, null, null, html);
    d3.select(this).style("fill", "#D334BA");
  }

  function handleMouseOut() {
    Tooltip.remove("tooltipMapViz");
    d3.select(this).style('fill', getColor);
  }

  function handleMouseMove() {
    Tooltip.move("tooltipMapViz");
  }

  function getColor(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        if (tableData[i].total_homeless <= 0) { return ('#EEEEFF'); }
        else if (tableData[i].total_homeless <= 200) { return ('#E1E1F4'); }
        else if (tableData[i].total_homeless <= 300) { return ('#D6D6EA'); }
        else if (tableData[i].total_homeless <= 500) { return ('#D0D0F0'); }
        else if (tableData[i].total_homeless <= 700) { return ('#B8B8D1'); }
        else if (tableData[i].total_homeless <= 1000) { return ('#ACACC6'); }
        else if (tableData[i].total_homeless <= 1500) { return ('#9E9EBA'); }
        else if (tableData[i].total_homeless <= 2000) { return ('#9595AD'); }
        else if (tableData[i].total_homeless <= 2500) { return ('#8888A5'); }
        else if (tableData[i].total_homeless <= 3000) { return ('#7F7FA0'); }
        else if (tableData[i].total_homeless <= 3500) { return ('#72729B'); }
        else if (tableData[i].total_homeless <= 4000) { return ('#656593'); }
        else if (tableData[i].total_homeless <= 5000) { return ('#5E5D91'); }
        else if (tableData[i].total_homeless <= 6000) { return ('#534E89'); }
        else if (tableData[i].total_homeless <= 7000) { return ('#4D4484'); }
        else if (tableData[i].total_homeless <= 8000) { return ('#45387A'); }
        else if (tableData[i].total_homeless <= 12000) { return ('#392870'); }
        else if (tableData[i].total_homeless <= 80000) { return ('#311C66'); }

        return ('#FFAD29');
      }
    }
    return '#000000';
  }

  function filterCfdaAmount(x) {
    return x.fed_funding > 0;
  }

  function getValue(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].total_homeless);
      }
    }
    return 0;
  }

  function getSheltered(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].sheltered_homeless);
      }
    }
    return 0;
  }

  function getUnsheltered(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].unsheltered_homeless);
      }
    }
    return 0;
  }

  useEffect(() => {

    if (window.innerWidth > 575) {
      mapHeight = '575px';
    } else {
      mapHeight = '275px';
    }

    if (props.display) {
      if (!d3.select('#viz_container')[0][0]) {
        Tooltip = tooltipModule();
        GenMap();
      } else {
        setZoom(null);
      }
    }

    if (props.isClicked) {
      setZoom(null);
    }


  });

  return (<div className={props.display ? '' : 'hidden'}>
    <div id="tooltipMapViz" className={tipStyles.tooltipModule} />
    <div className={`${styles.vizContainer} ${styles.homelessAnalysis}`}>
      <div id="container" />
    </div>
    <div className={styles.homelessPanelOneInfo}>
      <p>* White areas with no hover-over represent areas of the country that are not represented by a Continuum of
          Care area.</p>
      <p>** This map reflects the most up-to-date HUD map available; however, some Continuum of Care areas merged together in 2018 after this map was created.</p>
      <p>See our section on How We Conducted This Analysis for more information.</p>
    </div>
  </div>
  )
}
