import React, { useEffect, useState } from "react"
import * as d3 from 'd3v3';
import dataSource from "../utils/data-module"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './treemap.scss';


export default function Treemap(){
  const {mem} = dataSource;
  const treeData = mem.treeData;
  const cluster = mem.cluster;
  const infographicData = mem.infographicData;
  const altText = mem.altText;
  const formatNumber = d3.format('$,.0f');
  const OtherformatNumber = d3.format(',.0f');

  function initTree() {

    var modal = d3.select("#panel3InstructionsModal > div > div.modal-body > div.modal-body-content")
      .append("div")
      .attr("id", "p3Modal")

    modal.append('img')
      .attr('class', 'picture')
      .attr('src', '/images/homelessness/region_guide_full.jpg')
      .style("display", "block")
      .style("max-width", "480px")
      .style("max-height", "500px")
      .style("width", "auto")
      .style("height", "auto");

    const panel3b = d3.select('#panel_3b');
    const w = panel3b.node().getBoundingClientRect().width;
    const h = 340;
    const clusterColors = ["#E8751A","#280C60","#365608", "#2F1868","#372C7A", "#4D4D8C", "#587C13", "#5E5E96", "#789E25","#E55C01"];

    let root;

    const treemap = d3.layout.treemap()
      .round(false)
      .size([w, h])
      .sticky(true)
      .sort((a, b) => a.value - b.value)
      .value((d) => d.total_homeless);
    // .value((d) => d.total_homeless);

    const svg = d3.select("#tree").append("div")
      .attr("class", "chart")
      .append("svg:svg")
      .attr("height", `${h}`)
      .attr("viewBox", `0 0 ${w} ${h}`)
      .append("svg:g")
      .attr("transform", "translate(.5,.5)");

    const percentFormat = d3.format(",.1%");

    cluster.forEach((d) => {
      d.rent_pct_income = +d.rent_pct_income;
      d.amount = +d.amount;
      d.density = +d.density;
      d.estimated_pop_2018 = +d.estimated_pop_2018;
      d.homeless_individuals = +d.homeless_individuals;
      d.homeless_people_in_families = +d.homeless_people_in_families;
      d.land_area = +d.land_area;
      d.total_homeless = +d.total_homeless;
      d.unsheltered_homeless = +d.unsheltered_homeless;
      d.weighted_estimate_median_gross_rent = +d.weighted_estimate_median_gross_rent;
      d.weighted_income = +d.weighted_income;
      d.Total_Year_Round_Beds = +d.Total_Year_Round_Beds;
      d.CoC_program_funding = +d.CoC_program_funding;
      d.Other_program_funding = +d.Other_program_funding;
      d.Total_funding = +d.Total_funding;
    });

    root = treeData;
    const nodes = treemap.nodes(root).filter((d) => !d.children);
    const panel3bDimensions = panel3b.node().getBoundingClientRect();
    const w2 = panel3bDimensions.width;
    const h2 = panel3bDimensions.height;

    d3.select('#infographic').attr('height', h2).attr('width', w2)
      .append('div')
      .attr('id', 'picture');

    d3.select("#cocTab").append("div").attr("class", "cocTable");

    function makeInfographic(d) {
      d3.selectAll('.homeless-fact-cluster img').remove();
      const svgPath = "/images/homelessness/clusters/Cluster-" + d;
      const clusterAltText = altText.filter(item => item.cluster.indexOf(d) > -1);
      const selectedInfographicItem = infographicData.filter(item => item.cluster_final === d);
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
      d3.select('#cluster-number').text(d);d3.select('#cluster-beds-count').text(OtherformatNumber(selectedInfographicItem[0].total_beds));
      d3.selectAll('.cluster-people-count').text(OtherformatNumber(selectedInfographicItem[0].total_homeless));
      d3.select('#cluster-circles h2').style('color', clusterColors[d - 1]);
    }

    function makeCoCTableTitle(d) {
      const textColor = clusterColors[d.cluster_final - 1];
      return `<p class="cocTabTitleCluster"><span class="cocTabTitleClusterLabel" style=color:${textColor}>Cluster ${d.cluster_final}:</span> ` +
        `<span class="cocTabTitleCity">${d.coc_name}</span></p>`;
    }

    function makeCoCTableFund(d) {
      return `<table class="FundingTable"><tr><th class="fundingTitle">`
        + `FEDERAL FUNDING FOR THE CONTINUUM OF CARE PROGRAM:</th></tr>` +
        `<tr><td class="fundingAmount">${formatNumber(d.CoC_program_funding)}</td></tr>` +
        `<tr><th class="fundingTitle">FEDERAL FUNDING FOR OTHER HOMELESSNESS PROGRAMS:</th></tr>` +
        `<tr><td class="fundingAmount">${formatNumber(d.Other_program_funding)}</td></tr></table>`;
    }

    function makeCoCTableInfoCol1(d) {
      return '<table class="InfoTable">' +
        '<tr><th class="fundingTitle">POPULATION OF HOMELESS:</th></tr>' +
        `<tr><td class="infoAmount">${OtherformatNumber(d.total_homeless)}</td></tr>` +
        `<tr><th class="fundingTitle">HOMELESS THAT ARE IN FAMILIES:</th></tr>` +
        `<tr><td class="infoAmount">${OtherformatNumber(d.homeless_people_in_families)}</td></tr>` +
        `<tr><th class="fundingTitle">HOMELESS THAT ARE INDIVIDUALS:</th></tr>` +
        `<tr><td class="infoAmount">${OtherformatNumber(d.homeless_individuals)}</td></tr>` +
        `<tr><th class="fundingTitle">TOTAL SHELTERED AND PERMANENT BEDS AVAILABLE:</th></tr>` +
        `<tr><td class="infoAmount">${OtherformatNumber(d.Total_Year_Round_Beds)}</td></tr></table>`;
    }

    function makeCoCTableInfoCol2(d) {
      return '<table class="InfoTable">' +
        '<tr><th class="fundingTitle">POPULATION DENSITY: PPL. PER SQ. MI.</th></tr>' +
        `<tr><td class="infoAmount">${OtherformatNumber(d.density)}</td></tr>` +
        `<tr><th class="fundingTitle">INCOME AVG. FOR LOWEST 20% OF POP.:</th></tr>` +
        `<tr><td class="infoAmount">${formatNumber(d.weighted_income)}</td></tr>` +
        `<tr><th class="fundingTitle">RENT: MEDIAN GROSS</th></tr>` +
        `<tr><td class="infoAmount">${formatNumber(d.weighted_estimate_median_gross_rent)}</td></tr>` +
        `<tr><th class="fundingTitle">RENT AS A PERCENT OF INCOME:</th></tr>` +
        `<tr><td class="infoAmount">${percentFormat(d.rent_pct_income)}</td></tr>` +
        `<tr><th class="fundingTitle">LAND AREA: PER SQ. MILES:</th></tr>` +
        `<tr><td class="infoAmount">${OtherformatNumber(d.land_area)}</td></tr></table>`;
    }

    function makeCoCTable(d) {
      d3.select(".cocTab")
        .insert("div", ":first-child")
        .attr("class", "cocTabTitle")
        .html(makeCoCTableTitle(d));
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

    function CreateCoCTable(d) {
      d3.selectAll(".cocTabInfo").remove();
      d3.selectAll(".cocTabFund").remove();
      d3.selectAll(".cocTabTitle").remove();

      makeCoCTable(d);
      makeFundingTable(d);
      makeInfoTableCol1(d);
      makeInfoTableCol2(d);
    }

    function makeCocTile(d) {
      return `<p class="CocTileTitle">${d.coc_name}</p>`;
    }

    function makeSelectionPanel(d) {
      let data = d;
      let showToggle = true;
      let isLess = true;

      function showLessButtons(){
        const limitVal = 10;
        isLess = true;
        data = d.slice(0, limitVal);
        createButtons(isLess);
      }

      function showMoreButtons(){
        isLess = false;
        data = d;
        createButtons(isLess);
      }

      function createButtons() {
        d3.select('.tablinks').remove();
        const tabLinks = d3.select('#tab').append("g")
          .attr('class', 'tablinks');

        tabLinks.selectAll('button')
          .data(data)
          .enter()
          .append('button')
          .attr("class", "cocButton")
          .attr('position', 'relative')
          .on('click', function(dA) {
            CreateCoCTable(dA);
            d3.select(".tablinks > .cocButton.active").classed("active", null);
            d3.select(this).classed("active", true);
          })
          .append('div')
          .attr('class', 'header')
          .attr('background-color', "#E8EAF5")
          .html((dB) => makeCocTile(dB));

        if (showToggle) {
          createToggle();
        }
      }

      function createToggle(){
        const tabLinks = d3.select('#tab g.tablinks');

          tabLinks.select('#showMoreLess').remove();
          const showMoreLessBtn =  tabLinks.append('button')
            .attr('id', 'showMoreLess');

          const showMoreLessLabel = showMoreLessBtn.append('div')
          .classed('header', true)
          .append('p');

          if(isLess){
            showMoreLessBtn.on('click', function(){
                showMoreButtons();
            });
            showMoreLessLabel.html(d3.select('#showMoreButtons').html());
          } else {
            showMoreLessBtn.on('click', function(){
              showLessButtons();
            })
            showMoreLessLabel.html(d3.select('#showLessButtons').html());
          }
      }

      if(data.length > 10){
        showLessButtons();
      } else {
        showToggle = false;
        createButtons();
      }
      d3.select(".tablinks > .cocButton").classed("active", true);
    }

    const cell = svg.selectAll("g")
      .data(nodes)
      .enter().append("svg:g")
      .classed("cell", true)
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .classed('active', (d) => d.group === 10)
      .on("click", function(d){
        const group = Number(d.group);
        const current = cluster.filter((dC) => (dC.cluster_final === group));
        makeInfographic(group);
        CreateCoCTable(current[0]);
        makeSelectionPanel(current);
        d3.select(".cell.active").classed("active", null);
        d3.select(this).classed("active", true);
      });


    cell.append("svg:rect")
      .classed("rect", true)
      .attr("z-index", "99")
      .attr("width", (d) => d.dx - 1)
      .attr("height", (d) => d.dy - 1)
      .style("fill", (d) => clusterColors[d.group - 1]);

    cell.append("svg:text")
      .attr("x", (d) => d.dx / 2)
      .attr("y", (d) => d.dy / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text((d) => d.name)
      .style('font-size', '40px')
      .style('font-weight', 'lighter')
      .style("opacity", '1');


    function initializeCoCTable() {
      const initTable = cluster.filter((d) => (d.cluster_final === 10));
      makeCoCTable(initTable[0]);
      makeFundingTable(initTable[0]);
      makeInfoTableCol1(initTable[0]);
      makeInfoTableCol2(initTable[0]);
    }

    initializeCoCTable();


    function initializeCoCSelection() {
      const initSelection = cluster.filter((d) => (d.cluster_final === 10));
      initSelection.sort((a, b) => b.total_homeless - a.total_homeless);
      makeSelectionPanel(initSelection);
    }

    function initializeInfographic() {
      const initInfographic = cluster.filter((d) => (d.cluster_final === 10));
      makeInfographic(initInfographic[0].cluster_final);
    }

    initializeCoCSelection();
    initializeInfographic();
  }

  useEffect(() => {
    initTree();
  });

  return (
    <div id="panel_3b">
      <div id="tree"/>
      <div className="cocTab" id="cocTab"/>
      <div id="tab_info">
        <div className="tab" id="tab"/>
      </div>
      <div className='hidden'>
        <span id='showLessButtons'>
          <span className='less'><ChevronLeftIcon/></span>
          <span>SEE LESS CoCs</span>
        </span>
        <span id='showMoreButtons'>
          <span>SEE MORE CoCs</span>
          <span className='more'><ChevronRightIcon/></span>
        </span>
      </div>
    </div>
  )
}