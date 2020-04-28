import React, { useEffect } from 'react';

import * as d3 from 'd3v3';
import numberFormatter from '../../../utils/number-formatter';
import tooltipModule from '../../tooltip-legacy/tooltip';
import tooltipStyles from '../../tooltip-legacy/tooltip.module.scss';

function Barchart(props) {
  const data = props.data;
  const scale = props.scale;
  const unit = props.unit;
  const clickEvent = props.clickEvent;
  const onloadFunctions = props._onloadFunctions;
  const tooltip = tooltipModule();

  let svg;
  let margin;
  let width;
  let height;
  let g;

  useEffect(() => {
    clearAll();
    init();
    draw();
  })

  const clearAll = () => {
    d3.selectAll('#barchartSvg g').remove();
  }

  function init() {
    svg = d3.select('#barchartSvg');
    margin = {
      top: 60,
      right: 40,
      bottom: 100,
      left: 350
    };
    width = +svg.attr('width') - margin.left - margin.right;
    height = 700 - margin.top - margin.bottom;
    g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  }

  function draw() {
    if (onloadFunctions) {
      onloadFunctions();
    }

    g.selectAll('*').remove();

    // sort data
    let sortedData;
    if (unit === 'actions') {
      if (scale === 'quantity') {
        sortedData = data.sort((a, b) => b.totalActions - a.totalActions);
      }
      else {
        sortedData = data.sort(
          (a, b) => b.percentActionsCompeted - a.percentActionsCompeted
        );
      }
      sortedData = sortedData.map((c) =>
        ({
          name: c.name,
          total: c.totalActions,
          competed: c.competedActions,
          notCompeted: c.notCompetedActions,
          percentCompeted: c.percentActionsCompeted,
          percentNotCompeted: 1 - c.percentActionsCompeted,
          id: c.id,
          displayed: c.displayed
        })
      );
    }
    else {
      if (scale === 'quantity') {
        sortedData = data.sort((a, b) => b.totalDollars - a.totalDollars);
      }
      else {
        sortedData = data.sort(
          (a, b) => b.percentDollarsCompeted - a.percentDollarsCompeted
        );
      }
      sortedData = data.map((c) =>
        ({
          name: c.name,
          total: c.totalDollars,
          competed: c.competedDollars,
          notCompeted: c.notCompetedDollars,
          percentCompeted: c.percentDollarsCompeted,
          percentNotCompeted: 1 - c.percentDollarsCompeted,
          id: c.id,
          displayed: c.displayed
        })
      );
    }

    // x scale
    let x;
    if (scale === 'quantity') {
      x = d3.scale.linear().domain([0, d3.max(sortedData, d => d.displayed ? d.total : 0)]);
    }
    else {
      x = d3.scale.linear().domain([0, 1]);
    }
    x.range([0, width]);

    // y scale
    const y = d3.scale.ordinal()
      .rangeRoundBands([0, height], 0.1)
      .domain(sortedData.map(d => d.name))
      ;

    // z scale (color)
    const z = d3.scale.ordinal().range(['#0071bc', '#D334BA']);
    const keys = scale === 'quantity' ?
      ['competed', 'notCompeted'] :
      ['percentCompeted', 'percentNotCompeted']
      ;

    // x axis
    let tickFormat;
    if (scale === 'percent') {
      tickFormat = ',.0%';
    } else {
      if (unit === 'actions') {
        tickFormat = ',';
      } else {
        tickFormat = '$,'
      };
    };

    const ticklength = 525;
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height - ticklength})`)
      .call(
        d3.svg
          .axis()
          .scale(x)
          .orient('bottom')
          .tickFormat(d3.format(tickFormat))
          .tickSize(ticklength)
      )
      .attr('class', 'xTick')
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('font-size', '0.75rem')
      .attr('transform', `rotate(-35) translate(-295,-95)`)
      .attr('dx', '-.8em')
      .attr('pointer-events', 'none')
      ;

    // .each(sortedData.map(d => d3.select(this).attr('label', `checkbox${d.id}`)))

    let maxWidth = 0;


    // y axis - text
    g
      .append("g")
      .attr("transform", `translate(-12,0)`)
      .attr("class", "axis axis--y")
      .call(
        d3.svg
          .axis()
          .orient("left")
          .scale(y)
      )
      .selectAll(".tick")
      .attr("class", "yTick")
      .selectAll("text")
      .style("font-size", "12px");


    // y checkboxes
    g
      .append("g")
      .attr("class", "axis axis--y")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .append("foreignObject")
      .attr("transform", "translate(-20,0)")
      .attr("width", 22)
      .attr("height", 1000)
      .append("xhtml:body")
      .append("form")
      .attr("id", "yAxisCheckboxes")
      .selectAll(".yAxisCheckbox")
      .data(sortedData)
      .enter()
      .append("div")
      .style("height", "21px")
      .style("background", "white")
      .style('padding-top', '9px')
      .style('text-align', 'right')
      .append("input")
      .attr("type", "checkbox")
      .attr("checked", (d) => (d.displayed ? true : null))
      .attr("class", ".yAxisCheckbox")
      .attr("id", (d) => `checkbox${d.id}`)
      .on("click", (d) => {
        const { id } = d;
        const checked = svg.select(`#checkbox${id}`).node().checked;
        clickEvent(id, checked);
      });

    const stackedDataset = d3.layout.stack()(
      keys.map((key) =>
        sortedData.map((d) => ({
          y: d[key],
          x: d.name,
          displayed: d.displayed,
          data: d
        }))
      )
    );

    function handleMouseOver(d) {
      tooltip.draw(tooltipStyles.tooltip, d.data.name, {
        Competed:
          unit === 'dollars' ?
            numberFormatter('dollars', d.data.competed) :
            numberFormatter('actions', d.data.competed)
        ,
        'Not Competed':
          unit === 'dollars' ?
            numberFormatter('dollars', d.data.notCompeted) :
            numberFormatter('actions', d.data.notCompeted)
        ,
        'Percent Competed': numberFormatter('percent', d.data.percentCompeted)
      });
    }

    function handleMouseOut() {
      tooltip.remove(tooltipStyles.tooltip);
    }

    function handleMouseMove() {
      tooltip.move(tooltipStyles.tooltip);
    }

    // bars
    g.append('g')
      .selectAll('.barGroup')
      .data(stackedDataset)
      .enter()
      .append('g')
      .attr('fill', (d, i) => z(keys[i]))
      .attr('class', 'barGroup')
      .selectAll('.bar')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.y0))
      .attr('y', d => y(d.x))
      .attr('height', y.rangeBand())
      .attr('width', d => d.displayed ? x(d.y0 + d.y) - x(d.y0) : 0)
      .attr('transform', `translate(10,0)`)
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut)
      ;
  }

  return (
    <>
      <div id={tooltipStyles.tooltip} className={tooltipStyles.tooltipModule}></div>
      <svg width='1200' height='700' viewBox='0 0 1200 700' id='barchartSvg' className={props._svgClass}></svg>
    </>
  );
}

export default Barchart;
