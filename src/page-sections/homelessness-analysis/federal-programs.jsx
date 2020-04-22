import React, { useEffect } from 'react';
import * as d3 from 'd3v3';
import styles from './federal-programs.module.scss';

import Accordion from '../../components/accordion/accordion';
import Share from '../../components/share/share';
import dataSource from '../../components/visualizations/homelessness-analysis/utils/data-module';
import Downloads from '../../components/section-elements/downloads/downloads';
import { Grid } from '@material-ui/core';
import Search from 'src/components/chartpanels/search';
import tooltipModule from '../../components/tooltip/tooltip';
import tipStyles from '../../components/tooltip/tooltip.module.scss';
import { graphql, useStaticQuery } from "gatsby";

export default function FederalPrograms(props) {
  const data = useStaticQuery(graphql`
    query {
      allCoCcfdAfunding2019V3Csv {
        nodes {
          CFDA_website
          beneficiary_eligability
          category
          cfda_number
          coc_name
          coc_number
          fed_funding
          id
          level_of_detail
          level_of_focus_on_homelessness
          objectives
          program_title
          program_website
          types_of_assistance
        }
      }
    }
  `);

  const { mem } = dataSource;
  const us = mem.us;
  const acr = mem.acr;
  const state = mem.states;
  const tableData = mem.pop;
  const cfdaState = mem.cfdaState;
  let barChrt = [];

  if(data && data.allCoCcfdAfunding2019V3Csv && data.allCoCcfdAfunding2019V3Csv.nodes){
    barChrt = data.allCoCcfdAfunding2019V3Csv.nodes;
  };

  const absWidth = 1024;
  const absHeight = 575;
  const margin = {
    top: 100,
    right: 50,
    bottom: 15,
    left: 100
  };
  const la = us.features.filter((d) => d.properties.coc_number === 'CA-600');

  const dollarFormattedNumber = d3.format('$,.0f');
  const getFormattedNumber = d3.format(',.0f');

  const panel2Width = absWidth - margin.left - margin.right;
  const panel2Height = absHeight - margin.top - margin.bottom;
  const matrixWidth = (absWidth / 1.85) - margin.left - margin.right;
  const mapWidth = panel2Width - matrixWidth - margin.left - margin.right - 45;
  const mapHeight = panel2Height / 3;
  const infoWidth = panel2Width - matrixWidth - margin.left - margin.right;
  const infoHeight = panel2Height / 3;
  let map2Centered = la[0];
  let Tooltip;
  let mapTitle, p21MapSvg, contactPanel, cocPanel, p2MatrixSvg, p21Path, m;

  const searchList = us.features.map(e => ({
    id: e.properties.coc_number,
    display: e.properties.COCNAME
  }));

  function OtherformatNumber (number) {
    if(isNaN(number)) {
      return 'NA';
    } else {
      return getFormattedNumber(number);
    }
  }

  function formatNumber (number) {
    if(isNaN(number)) {
      return 'NA';
    } else {
      return dollarFormattedNumber(number);
    }
  }

  function init() {
    d3.select('#container2_1').append('div').attr('id', 'p2_1').style('top', '150px');
    d3.select('#container2_2').append('div').attr('id', 'p2_2_legend_title');
    d3.select('#container2_2').append('div').attr('id', 'p2_2_legend');
    d3.select('#container2_2').append('div').attr('id', 'p2_2');
    d3.select('#container2_3').append('div').attr('id', 'p2_3_title');
    d3.select('#container2_3').append('div').attr('id', 'p2_3');
    d3.select('#container2_4').append('div').attr('id', 'p2_4_legend_title');
    d3.select('#container2_4').append('div').attr('id', 'p2_4_legend');
    d3.select('#container2_4').append('div').attr('id', 'p2_4');
    d3.select('#CoCcontact').append('div').attr('id', 'p2_5');
    d3.select('#p2_1').append('div').attr('id', 'panel_map');
    d3.select('#p2_2').append('div').attr('id', 'panel_matrix');
    d3.select('#p2_3').append('div').attr('id', 'panel_coc');
    d3.select('#p2_4').append('div').attr('id', 'panel_info');
    d3.select('#p2_5').append('div').attr('id', 'panel_contact');

    mapTitle = d3.select('#container2_title');

    p21MapSvg = d3.select('#panel_map')
      .append('svg')
      .attr('id', 'p2_1_map')
      .attr('width', '100%')
      .attr('height', '350px')
    ;

    contactPanel = d3.select('#CoCcontact')
      .attr('width', infoWidth + margin.left + margin.right)
      .attr('height', infoHeight + margin.top + margin.bottom)
    ;

    cocPanel = d3.select('#panel_coc')
      .attr('height', infoHeight + margin.top + margin.bottom)
      .attr('width', '95%')
    ;

    p2MatrixSvg = d3.select('#panel_matrix').append('svg')
      .attr('width', '100%')
      .attr('height', mapHeight + margin.top + margin.bottom + 40)
    ;


    const p21Projection = d3.geo.albersUsa()
          .translate([mapWidth / 0.9, mapHeight / 0.9]) // translate to center of screen
          .scale([575]) // scale things down so see entire US
    ;

    // Define path generator
    p21Path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
      .projection(p21Projection) // tell path generator to use albersUsa projection
    ;

    m = p21MapSvg.append('g');

    p21MapSvg.append('circle').attr('id', 'tipfollowscursor_2');

    barChrt.forEach((d) => {
      d.fed_funding = +d.fed_funding;
    });

    cfdaState.forEach((d) => {
      d.fed_funding = +d.fed_funding;
    });

    cfdaState.sort((a, b) => b.fed_funding - a.fed_funding);
    barChrt = barChrt.sort((x, y) => d3.descending(x.fed_funding, y.fed_funding));

    tableData.forEach((d) => {
      d.total_homeless = +d.total_homeless;
      d.chronically_homeless = +d.chronically_homeless;
      d.sheltered_homeless = +d.sheltered_homeless;
      d.unsheltered_homeless = +d.unsheltered_homeless;
      d.homeless_individuals = +d.homeless_individuals;
      d.homeless_veterans = +d.homeless_veterans;
      d.homeless_people_in_families = +d.homeless_people_in_families;
      d.homeless_unaccompanied_youth = +d.homeless_unaccompanied_youth;
      d.amount = +d.amount;
    });
  }

  function makeMapTitle(d9) {
    return mapTitle.html(`${d9.properties.coc_number}: ${d9.properties.COCNAME}`);
  }

  /**
   * @return {string}
   */
  function MakeCoCTable(d7) {
    d3.selectAll('#p2_quad3_title').remove();

    d3.select('#p2_3_title')
      .append('div')
      .attr('width', '100%')
      .attr('id', 'p2_quad3_title')
      .attr('class', 'legend-header')
      .html(`<h5>${d7.properties.coc_number} Homeless Population Details</h5>`)
    ;

    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].coc_number === d7.properties.coc_number) {
        const tabDat = tableData[i];

        return `<table><tr><th></th><th class="table-heading">Individuals</th><th class="table-heading">Families</th><th class="table-heading">Total</th></tr>` +
          `<tr><td class="table-heading">Sheltered</td><td>${OtherformatNumber(tabDat.sheltered_total_homeless_individuals)}</td>` +
          `<td>${OtherformatNumber(tabDat.sheltered_total_homeless_people_in_families)}</td>` +
          `<td>${OtherformatNumber(tabDat.sheltered_homeless)}</td></tr>` +
          `<tr><td class="table-heading">Unsheltered</td><td>${OtherformatNumber(tabDat.unsheltered_homeless_individuals)}</td>` +
          `<td>${OtherformatNumber(tabDat.unsheltered_homeless_people_in_families)}</td>` +
          `<td>${OtherformatNumber(tabDat.unsheltered_homeless)}</td>` +
          `</tr><tr><td class="table-heading">Total</td><td>${OtherformatNumber(tabDat.homeless_individuals)}</td>` +
          `<td>${OtherformatNumber(tabDat.homeless_people_in_families)}</td>` +
          `<td>${OtherformatNumber(tabDat.total_homeless)}</td></tr></table><div class="item"><div class="header">Chronically Homeless:</div>` +
          `<div class="value">${OtherformatNumber(tabDat.chronically_homeless)}</div></div><div class="item"><div class="header">Homeless Veterans:</div>` +
          `<div class="value">${OtherformatNumber(tabDat.homeless_veterans)}</div></div><div class="item">` +
          `<div class="header">Average number of days in Emergency Shelters, Safe Havens, or Transitional Housing:</div>` +
          `<div class="value">${OtherformatNumber(tabDat.es_sh_th_avg_days)}</div></div>` +
          `<h3 class="h3-header item">Number of people who return to homelessness within:</h3><div class="item"><div class="header">6 months</div>` +
          `<div class="value">${OtherformatNumber(tabDat.total_persons_returns_in_6_mths)}</div></div><div class="item">` +
          `<div class="header">12 months</div><div class="value">${OtherformatNumber(tabDat.total_persons_returns_in_12_mths_should_include_the_6_month_cohort)}</div>` +
          `</div><div class="item"><div class="header">24 months</div>` +
          `<div class="value">${tabDat.total_persons_returns_in_24_mths_should_include_both_the_6_and_12_month_cohort === 'NA' ? 'NA' : OtherformatNumber(tabDat.total_persons_returns_in_24_mths_should_include_both_the_6_and_12_month_cohort)}</div></div>` +
          `<div class="item"><div class="header">Percentage of people who exit to permanent housing</div><div class="value">${tabDat.percent_with_successful_es_th_sh_ph_rrh_exit}</div></div>` +
          `<div class="item"><div class="header">Percentage of those who retain their permanent housing status</div><div class="value">${tabDat.percent_with_successful_ph_retention_or_exit}</div></div>`;
      }
    }
  }

  function StateBarChart(d) {
    d3.select('#panel_info > svg').remove();
    d3.select('#p2_4_cfda_legend_title').remove();
    d3.select('#p2_4_cfda_legend').remove();

    const cfdaLegend22 = d3.select('#p2_2_legend')
          .append('div')
          .attr('width', '100%')
          .attr('height', '30px')
          .attr('id', 'p2_2_cfda_legend')
    ;

    const cfdaLegend = d3.select('#p2_4_legend')
          .append('div')
          .attr('width', '100%')
          .attr('height', '30px')
          .attr('id', 'p2_4_cfda_legend')
    ;

    const cfdaColor = ['#544E89', '#BD10E0', '#04BCDD', '#F89206', '#06984E', '#F6043F'];

    const cfdaLegendKeyValues = ['Housing', 'Education', 'Employment', 'Support Services', 'Health', 'Food'];

    for (let i = 0; i < cfdaLegendKeyValues.length; i++) {
      const k = cfdaLegend22.append('div')
            .attr('id', 'p2_2_legend_key')
      ;

      k.append('div')
        .attr('id', 'p2_2_key')
        .style('position', 'relative')
        .append('svg')
        .attr('height', '40px')
        .attr('width', '40px')
        .append('circle')
        .attr('cx', 7)
        .attr('cy', 7)
        .attr('r', 7)
        .attr('height', 20)
        .attr('width', 20)
        .attr('transform', `translate(17,0)`)
        .style('fill', () => cfdaColor[i])
      ;

      k.append('div')
        .attr('id', 'p2_2_key_value')
        .style('position', 'relative')
        .style('color', 'blue')
        .html(`<p>${cfdaLegendKeyValues[i]}</p>`)
      ;

      const l = cfdaLegend.append('div')
            .attr('id', 'p2_4_legend_key')
      ;

      l.append('div')
        .attr('id', 'p2_4_key')
        .style('position', 'relative')
        .append('svg')
        .attr('height', '40px')
        .attr('width', '53px')
        .append('circle')
        .attr('cx', 7)
        .attr('cy', 7)
        .attr('r', 7)
        .attr('height', 20)
        .attr('width', 20)
        .attr('transform', `translate(17,0)`)
        .style('fill', () => cfdaColor[i])
      ;

      l.append('div')
        .attr('id', 'p2_4_key_value')
        .style('position', 'relative')
        .style('color', 'blue')
        .html(`<p>${cfdaLegendKeyValues[i]}</p>`)
      ;
    }

    d3.select('#p2_4_legend_title')
      .append('div')
      .attr('id', 'p2_4_cfda_legend_title')
      .attr('class', 'legend-header')
      .html(`<h5>Federal Programs Serving ${getState(d)}</h5>`)
    ;

    const p24MatrixSvg = d3.select('#panel_info').append('svg')
          .attr('width', '100%')
          .attr('height', mapHeight + margin.top + margin.bottom + 140)
          .attr('transform', `translate(${0},${10})`)
    ;

    function filterStateBarChart(cfdaStateData) {
      return cfdaStateData.pop_state_code === d.properties.STUSAB;
    }

    const initial = cfdaState.filter(filterStateBarChart);
    const initialBar = initial.filter(filterCfdaAmount);

    const axisMargin = 5;
    const xWidth = document.getElementById("panel_matrix").offsetWidth - 50;
    const barHeight = 20;
    const barPadding = 5;
    let labelWidth = 0;

    const max = d3.max(initialBar, (da) => da.fed_funding);

    const bar = p24MatrixSvg.selectAll('g')
          .data(initialBar)
          .enter()
          .append('g')
    ;

    bar.attr('class', 'bar')
      .attr('cx', 0)
      .style('fill', (db) => {
        const curCategory = db.category;
        const noColorFound = '#000';
        let matchIdx, fillColor;
        matchIdx = cfdaLegendKeyValues.findIndex(d => d === curCategory);
        if (matchIdx >= 0) {
          fillColor = cfdaColor[matchIdx];
        }
        return fillColor || noColorFound;
      })
      .attr('transform', (db, i) => `translate(5,${i * (barHeight + barPadding)})`)
      .on('mouseover', handleBarChartMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      .on('click', barClick)
    ;

    bar.append('text')
      .attr('class', 'label')
      .attr('x', 0)
      .attr('y', barHeight / 2)
      .attr('dy', '.35em') // vertical align middle
      .text((dc) => getProgram(dc))
      .each(() => {
        labelWidth = 75;
      })
    ;

    const scale = d3.scale.linear()
          .domain([0, max])
          .range([0, xWidth - labelWidth])
    ;

    const p2XAxis = d3.svg.axis()
          .scale(scale)
          .tickSize((-p2MatrixSvg[0][0].attributes[1].nodeValue + axisMargin) - 50)
          .tickFormat((dg) => formatNumber(dg))
    ;

    bar.append('rect')
      .attr('transform', `translate(${labelWidth},0)`)
      .attr('margin-left', 5)
      .attr('height', barHeight)
      .attr('width', (de) => scale(de.fed_funding))
    ;

    p24MatrixSvg.insert('g', ':first-child')
      .attr('class', 'axisHorizontal2')
      .attr('transform', `translate(${80},${325})`)
      .call(p2XAxis)
      .selectAll('text')
      .attr('y', 10)
      .attr('x', 0)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(-35)')
      .style('font-size', '12')
      .style('text-anchor', 'end')
    ;
  }

  function barClick(d) {
    window.open(d.CFDA_website);
  }

  function createContact(d) {
    d3.select('#contact_panel').html(null);
    d3.select('#contact_info').remove();

    contactPanel.append('div')
      .attr('id', 'contact_info')
      .attr("height", infoHeight)
      .attr("width", infoWidth)
      .html(makeContactTable(d))
    ;
  }

  function makeContactTable(df) {
    return `<h4 style="margin-bottom:0">${df.properties.COCNAME}</h4><br>` +
      `<p><b>Contact information for the Continuum of Care program</b>` +
      `<br>${df.properties.CONTACT_TY}<br>` +
      `Name: ${df.properties.FIRST_NAME} ${df.properties.LAST_NAME}<br>` +
      `Email: ${df.properties.EMAIL_ADDR}<br>` +
      `Phone: ${df.properties.PRIMARY_PH}</p>`;
  }

  function makeInfographic(d) {
    d3.selectAll('.homeless-fact-cluster img').remove();
    const svgPath = "/images/homelessness/clusters/Cluster-" + d;
    const clusterAltText = altText.filter(item => item.cluster.indexOf(d) > -1);
    const selectedInforgraphicItem = inforgraphicData.filter(item => item.cluster_final === d);
    d3.select('#cluster-beds #count-img-container').append('img').attr('src', svgPath + '/Bed.svg').attr('alt', clusterAltText[0].beds);
    d3.select('#cluster-circles').append('img').attr('src', svgPath + '/Circles.svg').attr('alt', clusterAltText[0].funding);
    d3.select('#cluster-rent').append('img').attr('src', svgPath + '/Rent.svg').attr('alt', clusterAltText[0].rent);
    d3.selectAll('.cluster-people').append('img').attr('src', svgPath + '/People.svg').attr('alt', clusterAltText[0].homelessness);
    d3.selectAll('.cluster-population').append('img').attr('src', svgPath + '/Total-Population.svg').attr('alt', clusterAltText[0].total_population);
    d3.select('#cluster-land-area').append('img').attr('src', svgPath + '/Land-Area.svg').attr('alt', clusterAltText[0].land_area);
    d3.select('#cluster-income').append('img').attr('src', svgPath + '/Income.svg').attr('alt', clusterAltText[0].income);
    d3.select('#cluster-key').append('img').attr('src', svgPath + '/Key.svg').attr('alt', '');
    d3.selectAll('.cluster-density').append('img').attr('src', svgPath + '/Density.svg').attr('alt', clusterAltText[0].density);
    d3.select('#cluster-rent-as-income').append('img').attr('src', svgPath + '/Rent-as-Income.svg').attr('alt', clusterAltText[0].rent_as_income);
    d3.select('#cluster-number').text(d); d3.select('#cluster-beds-count').text(OtherformatNumber(selectedInforgraphicItem[0].total_beds));
    d3.selectAll('.cluster-people-count').text(OtherformatNumber(selectedInforgraphicItem[0].total_homeless));
    d3.select('#cluster-circles h2').style('color', clusterColors[d - 1]);
  }

  function makeCoCTableTitle(d) {
    const textColor = clusterColors[d.cluster_final - 1];
    return `<p class="cocTabTitleCluster" style=color:white;background:${textColor}>Cluster ${d.cluster_final}: </p>` +
      `<p class="cocTabTitleCity">${d.coc_name}</p>`;
  }

  function makeCoCTableFund(d) {
    return `<table className="FundingTable"><tr><th className="fundingTitle">`
      + `FEDERAL FUNDING FOR THE CONTINUUM OF CARE PROGRAM:</th></tr>` +
      `<tr><td className="fundingAmount">${formatNumber(d.CoC_program_funding)}</td></tr>` +
      `<tr><th className="fundingTitle">FEDERAL FUNDING FOR OTHER HOMELESSNESS PROGRAMS:</th></tr>` +
      `<tr><td className="fundingAmount">${formatNumber(d.Other_program_funding)}</td></tr></table>`;
  }

  function makeCoCTableInfoCol1(d) {
    return '<table className="InfoTable">' +
      '<tr><th className="fundingTitle">POPULATION OF HOMELESS:</th></tr>' +
      `<tr><td className="infoAmount">${OtherformatNumber(d.total_homeless)}</td></tr>` +
      `<tr><th className="fundingTitle">HOMELESS THAT ARE IN FAMILIES:</th></tr>` +
      `<tr><td className="infoAmount">${OtherformatNumber(d.homeless_people_in_families)}</td></tr>` +
      `<tr><th className="fundingTitle">HOMELESS THAT ARE INDIVIDUALS:</th></tr>` +
      `<tr><td className="infoAmount">${OtherformatNumber(d.homeless_individuals)}</td></tr>` +
      `<tr><th className="fundingTitle">TOTAL SHELTERED AND PERMANENT BEDS AVAILABLE:</th></tr>` +
      `<tr><td className="infoAmount">${OtherformatNumber(d.Total_Year_Round_Beds)}</td></tr></table>`;
  }

  function makeCoCTableInfoCol2(d) {
    return '<table className="InfoTable">' +
      '<tr><th className="fundingTitle">POPULATION DENSITY: PPL. PER SQ. MI.</th></tr>' +
      `<tr><td className="infoAmount">${OtherformatNumber(d.density)}</td></tr>` +
      `<tr><th className="fundingTitle">INCOME AVG. FOR LOWEST 20% OF POP.:</th></tr>` +
      `<tr><td className="infoAmount">${formatNumber(d.weighted_income)}</td></tr>` +
      `<tr><th className="fundingTitle">RENT: MEDIAN GROSS</th></tr>` +
      `<tr><td className="infoAmount">${formatNumber(d.weighted_estimate_median_gross_rent)}</td></tr>` +
      `<tr><th className="fundingTitle">RENT AS A PERCENT OF INCOME:</th></tr>` +
      `<tr><td class="infoAmount">${percentFormat(d.rent_pct_income)}</td></tr>` +
      `<tr><th class="fundingTitle">LAND AREA: PER SQ. MILES:</th></tr>` +
      `<tr><td class="infoAmount">${OtherformatNumber(d.land_area)}</td></tr></table>`;
  }

  function makeCoCTableInfoCol3(d) {
    return '<table className="InfoTable">' +
      '<tr><th className="fundingTitle">LAND AREA: PER SQ. MILES</th></tr>' +
      `<tr><td className="infoAmount">${OtherformatNumber(d.land_area)}</td></tr>` +
      `<tr><th className="fundingTitle">PROPERTY CRIME RATE: PER 100K</th></tr>` +
      `<tr><td className="infoAmount">${OtherformatNumber(d.Property_crime_rate)}</td></tr></table>`;
  }

  function makeFundingTable(d) {
    d3.select(".cocTable")
      .append("div")
      .attr("class", "cocTabFund")
      .html(makeCoCTableFund(d));
  }

  function makeInfoTableCol1(d) {
    d3.select(".cocTable")
      .append("div")
      .attr("class", "cocTabInfo")
      .html(makeCoCTableInfoCol1(d));
  }

  function makeInfoTableCol2(d) {
    d3.select(".cocTable")
      .append("div")
      .attr("class", "cocTabInfo")
      .html(makeCoCTableInfoCol2(d));
  }

  function makeInfoTableCol3(d) {
    d3.select(".cocTable")
      .append("div")
      .attr("class", "cocTabInfo")
      .html(makeCoCTableInfoCol3(d));
  }

  function createCoCTable(d8) {
    d3.select('#panel_coc').html(null);
    cocPanel.append('div')
      .attr('id', 'coc_info')
      .attr('height', infoHeight + margin.top + margin.bottom)
      .attr('width', '100%')
      .html(MakeCoCTable(d8));
  }

  function GenPanelTwo() {
    const xyz = map2Centered;

    BarChart(xyz);
    StateBarChart(xyz);
    createContact(xyz);
    createCoCTable(xyz);
    makeMapTitle(xyz);
    p21ClickedP1(xyz);

    m.selectAll('p2_1_path')
      .data(us.features)
      .enter().append('path')
      .attr('d', p21Path)
      .attr('id', 'counties_mini')
      .attr('data-coc', (d) => d.properties.coc_number)
      .attr('data-state', (d) => d.properties.state)
      .attr('data-name', (d) => d.properties.name)
      .attr('d', p21Path)
      .on('dblclick', (d) => p21Clicked(d))
      .on('click', (d) => {
        BarChart(d);
        StateBarChart(d);
        createCoCTable(d);
        makeMapTitle(d);
        createContact(d);
      })
      .style('fill', p2GetColor)
      .on('mouseover', handleMapVizMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut);
  } // end of GenPanelTwo

  function p21Clicked(d) {
    let x;
    let y;
    let k;

    if (d && map2Centered !== d) {
      const centroid = p21Path.centroid(d);
      x = centroid[0];
      y = centroid[1];

      if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
        k = 6.0;
      }
      else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
        k = 4.0;
      }
      else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
        k = 5.0;
      }
      else if (d.properties.Shape__Are <= 0.4) {
        k = 17.0;
      }
      else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
        k = 14.0;
      }
      else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
        k = 12.0;
      }
      else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
        k = 6.0;
      }
      else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
        k = 3.0;
      }
      else {
        k = 2.0;
      }
      map2Centered = d;
    }
    else {
      x = (mapWidth / 1.35) + 75; // offset map 75px to left to fit!
      y = mapHeight / 1.1;
      k = 1;
      map2Centered = null;
    }

    m.selectAll('p2_1_path')
      .classed('active', map2Centered && d === map2Centered);

    m.transition()
      .duration(750)
      .attr('transform', `translate(${(mapWidth / 1.35)},${mapHeight / 1.1})scale(${k})translate(${-x},${-y})`)
      .style('stroke-width', `${0.15 / k}px`);
  }

  function p2GetColor(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        if (tableData[i].amount <= 500000) {
          return ('#BEF399');
        }
        else if (tableData[i].amount <= 1500000) {
          return ('#B0EC9A');
        }
        else if (tableData[i].amount <= 2500000) {
          return ('#A3E59B');
        }
        else if (tableData[i].amount <= 5000000) {
          return ('#96DD9B');
        }
        else if (tableData[i].amount <= 7500000) {
          return ('#8AD59C');
        }
        else if (tableData[i].amount <= 10000000) {
          return ('#80CE9C');
        }
        else if (tableData[i].amount <= 20000000) {
          return ('#76C69C');
        }
        else if (tableData[i].amount <= 30000000) {
          return ('#6DBD9B');
        }
        else if (tableData[i].amount <= 40000000) {
          return ('#66B59A');
        }
        else if (tableData[i].amount <= 50000000) {
          return ('#5FAD98');
        }
        else if (tableData[i].amount <= 60000000) {
          return ('#5AA496');
        }
        else if (tableData[i].amount <= 70000000) {
          return ('#569C93');
        }
        else if (tableData[i].amount <= 80000000) {
          return ('#529490');
        }
        else if (tableData[i].amount <= 90000000) {
          return ('#508B8C');
        }
        else if (tableData[i].amount <= 100000000) {
          return ('#4E8387');
        }
        else if (tableData[i].amount <= 150000000) {
          return ('#465261');
        }
        else if (tableData[i].amount <= 200000000) {
          return ('#3E3C4A');
        }
      }
    }

    return ('#291C24');
  }

  function BarChart(d) {
    d3.select('#panel_info').html(null);
    d3.select('#panel_matrix > svg').remove();
    d3.select('#p2_cfda_legend_title').remove();
    d3.select('#p2_2_cfda_legend').remove();

    d3.select('#p2_2_legend_title')
      .append('div')
      .attr('padding', '0 0 10px 0')
      .attr('id', 'p2_2_cfda_legend_title')
      .attr('class', 'h5')
      .attr('id', 'p2_cfda_legend_title')
      .attr('class', 'legend-header')
      .html(`<h5>Federal Programs Serving ${d.properties.coc_number}</h5>`);

    const p23MatrixSvg = d3.select('#panel_matrix').append('svg')
          .attr('width', '100%')
          .attr('height', mapHeight + margin.top + margin.bottom + 140)
          .attr('transform', `translate(${0},${10})`);

    function filterCocNumBarChart(barChart) {
      return barChart.coc_number === d.properties.coc_number;
    }

    const initial = barChrt.filter(filterCocNumBarChart);
    const initialBar = initial.filter(filterCfdaAmount);

    const axisMargin = 5;
    const xWidth = document.getElementById("panel_matrix").offsetWidth - 50;
    const barHeight = 20;
    const barPadding = 5;
    let labelWidth = 0;

    const max = d3.max(initialBar, (d1) => d1.fed_funding);

    const bar = p23MatrixSvg.selectAll('g')
          .data(initialBar)
          .enter()
          .append('g');

    bar.attr('class', 'bar')
      .attr('cx', 0)
      .style('fill', (d2) => {
        if (d2.category === 'Housing') { return '#324D5C'; }
        else if (d2.category === 'Health') { return '#F0CA4D'; }
        else if (d2.category === 'Education') { return '#2A5DA8'; }
        else if (d2.category === 'Support Services') { return '#E37B40'; }
        else if (d2.category === 'Employment') { return '#F53855'; }
        return "#FFF";
      })
      .attr('transform', (d4, i) => `translate(5,${i * (barHeight + barPadding)})`)
      .on('mouseover', handleBarChartMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      .on('click', barClick);

    bar.append('text')
      .attr('class', 'label')
      .attr('x', 0)
      .attr('y', barHeight / 2)
      .attr('dy', '.35em') // vertical align middle
      .text((t) => getProgram(t))
      .each(() => {
        labelWidth = 75;
      });

    const scale = d3.scale.linear()
          .domain([0, max])
          .range([0, xWidth - labelWidth]);

    const p2XAxis = d3.svg.axis()
          .scale(scale)
          .tickSize(-p2MatrixSvg[0][0].attributes[1].nodeValue + axisMargin)
          .tickFormat((d5) => formatNumber(d5));

    bar.append('rect')
      .attr('transform', `translate(${labelWidth},0)`)
      .attr('margin-left', 5)
      .attr('height', barHeight)
      .attr('width', (d6) => scale(d6.fed_funding));

    p23MatrixSvg.insert('g', ':first-child')
      .attr('class', 'axisHorizontal')
      .attr('transform', `translate(${80},${235})`)
      .call(p2XAxis)
      .selectAll('text')
      .attr('y', 10)
      .attr('x', 0)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(-35)')
      .style('font-size', '12')
      .style('text-anchor', 'end');
  }

  function p21ClickedP1(d) {
    let k;
    const centroid = p21Path.centroid(d);
    const x = centroid[0];
    const y = centroid[1];

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
    map2Centered = d;

    m.selectAll('p2_1_path')
      .classed('active', map2Centered && d === map2Centered);

    m.transition()
      .duration(750)
      .attr('transform', `translate(${mapWidth / 1.35},${mapHeight / 1.1})scale(${k})translate(${-x},${-y})`)
      .style('stroke-width', `${0.15 / k}px`);
  }

  function handleMapVizMouseOver(d) {
    const html = `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; `
          + `padding-bottom:15px; color: #555555; font-weight: bold">`
          + `${d.properties.coc_number}: ${d.properties.COCNAME}</p><br>` +
          `<p style="color: #0071BC; margin: 0; font-size: 20px">Federal Funding: ${getDollarValue(d)}</p><br>` +
          `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/out</p>`;
    Tooltip.draw("tooltipSection2", null, null, null, html);
  }

  function handleBarChartMouseOver(d) {
    const html = `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color:#555555">` +
          `${d.program_title}</b> [CFDA No. ${d.cfda_number}]</p><br>` +
          `<p style="color: #0071BC; margin: 0; font-size: 20px; padding:0">Federal Funding: ${formatNumber(d.fed_funding)}</p><br>` +
          `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">` +
          `Click to visit the program website</p>`;
    Tooltip.draw("tooltipSection2", null, null, null, html);
  }

  function handleMouseOut() {
    Tooltip.remove("tooltipSection2");
  }

  function handleMouseMove() {
    Tooltip.move("tooltipSection2");
  }

  function getState(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.STUSAB === state[i].Abbrv) {
        return state[i].State;
      }
    }
    return '';
  }

  function getDollarValue(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return formatNumber(tableData[i].amount);
      }
    }
    return 0;
  }

  function getProgram(d) {
    const cfdaNum = Number(d.cfda_number);
    for (let i = 0; i < barChrt.length; i++) {
      if (acr[i] && cfdaNum === acr[i].cfda_number) {
        return acr[i].acronym;
      }
    }
    return '';
  }

  function filterCfdaAmount(x) {
    return x.fed_funding > 0;
  }

  function searchSelect(id) {
    const d = us.features.find(f => f.properties.coc_number === id);
    if (d) {
      BarChart(d);
      StateBarChart(d);
      createCoCTable(d);
      makeMapTitle(d);
      createContact(d);
      p21Clicked(d);
    }
  }

  useEffect(() => {
    Tooltip = tooltipModule();
    init();
    GenPanelTwo();
  }, []);

  return (
    <div className="homeless-analysis federal-programs-section">
      <div className="homelessness-subheading">Federal Spending on Homelessness by Region</div>
      <div className="homelessness-subheading2">Federal grant awards by Continuum of Care Area</div>
      <Accordion
        title="Instructions">
        <strong>Map</strong>
        <ul>
          <li>
            Double click the map to zoom into a region.
          </li>
          <li>
            Double click that same region to zoom out.
          </li>
          <li>
            While zoomed in, double clicking a different region will re-center the map on that region.
          </li>
          <li>
            To select a different Continuum of Care area and update the charts, single-click a different region.
          </li>
        </ul>
        <strong>Bar Charts</strong>
        <ul>
          <li>
            Single-click the bars on the charts to visit a website describing each listed program in depth.
          </li>
        </ul>
      </Accordion>

      <Share location={props.location} />
      <div className={styles.searchList}>
        <Search
          searchList={searchList}
          initItem='CA-600'
          listDescription='Search List of Contracts and Agencies'
          showIcon
          onSelect={searchSelect}
        />
      </div>

      <div id="tooltipSection2" className={tipStyles.tooltipModule} />
      <h1 id='container2_title' />
      <Grid container>
        <Grid item xs={12} md={6}>
          <div id='container2_1' className='homelessness-container2 homelessness-container2--left' />
        </Grid>
        <Grid item xs={12} md={6}>
          <div id='container2_2' className='homelessness-container2 homelessness-container2--right' />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div id='container2_3' className='homelessness-container2 homelessness-container2--left' />
        </Grid>
        <Grid item xs={12} md={6}>
          <div id='container2_4' className='homelessness-container2 homelessness-container2--right' />
        </Grid>
      </Grid>
      <Downloads
        href={'../../../../unstructured-data/homelessness-analysis/panel_2_table_and_counts_v7_2020_03_27.csv'}
        date={'November 2019'}
      />
    </div >
  );
}
