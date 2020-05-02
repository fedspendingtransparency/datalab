import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import './dts-tile.scss';
import './landing-dts.scss';
import * as d3 from 'd3v4';
import formatNumber from '../../../utils/number-formatter';

function DtsTile(props) {

  let svg,
      data,
      debounce,
      containerWidth,
      margin,
      width,
      aspect,
      x,
      y,
      valueline,
      height;

  const dateFormatter = d3.timeFormat('%B %e, %Y');
  const dollarFormatter = value => formatNumber('dollars suffix', value * 1000000); // multiply by the factor that recent_30.csv is reduced
  const parseDateYMD = d3.timeParse("%Y-%m-%d");

  useEffect(() => {
    d3.csv('/data-lab-data/dts/recent_30.csv', _data => {
      data = _data;
      data.forEach(d => {
        d.date = parseDateYMD(d.date);
      });
      redraw();
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', function () {
        if (debounce) {
          clearTimeout(debounce);
        }
        debounce = setTimeout(redraw, 100);
      });
    }
  });

  function setDimensions() {
    containerWidth = document.getElementsByClassName('dtsm-img')[0].getBoundingClientRect().width;
    margin = { top: 0, right: 20, bottom: 30, left: 50 };
    width = containerWidth - margin.left - margin.right;
    aspect = d3.max([width * .36, 90]);
    height = aspect - margin.top - margin.bottom;
  }

  function setSvg() {
    d3.select('.dtsm-img').selectAll('*').remove();

    svg = d3.select('.dtsm-img').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    ;

    x = d3.scaleTime().range([0, width]);
    y = d3.scaleLinear().range([height, 0]);

    valueline = d3.line().x(function (d) {
      return x(new Date(d.date));
    }).y(function (d) {
      return y(d.Totals);
    });
  }

  function drawYAxisGridlines(svg, y, width, ticks) {
    svg
      .append('g')
      .attr('class', 'grid')
      .call(
        d3
          .axisLeft(y)
          .ticks(2)
          .tickSize(-width)
          .tickFormat('')
      )
    ;
  }

  function redraw() {
    setDimensions();
    setSvg();

    x.domain(d3.extent(data, function (d) { return new Date(d.date); }));
    y.domain([0, d3.max(data, function (d) { return d.Totals * 1.5; })]); // multiply by 1.5 to lower domain for new data range

    let lastEntry = data[data.length - 1];
    let lastDate = lastEntry.date;
    let lastValue = lastEntry.Totals;

    svg.append('g')
      .attr('class', 'dts_Yaxis')
      .attr('transform', 'translate(-10)')
      .style('stroke', '#757575')
      .style('font-family', 'Source Sans Pro')
      .style('font-size', '0.6875rem')
      .style('line-height', '20px')
      .style('font-weight', '100')
      .call(
        d3.axisLeft(y).ticks(2)
          .tickFormat(dollarFormatter)
          .tickSize(0)
      )
    ;

    svg.append('g')
      .attr('class', 'dts_Xaxis')
      .attr('transform', 'translate(0,' + height + ')')
      .style('stroke', '#757575')
      .style('font-size', '0.6875rem')
      .style('font-family', 'Source Sans Pro')
      .style('line-height', '20px')
      .style('font-weight', '100')
      .call(
        d3.axisBottom(x).ticks(2)
          .tickFormat(d3.timeFormat('%d %b'))
          .tickSize(0)
      )
    ;

    svg.append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)
    ;

    drawYAxisGridlines(svg, y, width, 10);

    svg.append('circle')
      .attr('r', 7)
      .attr('stroke-width', 1)
      .attr('transform', 'translate(' + (x(lastDate)) + ',' + (y(lastValue)) + ')')
    ;

    d3.select('.dtsm-dollars').text(dollarFormatter(lastValue));
    d3.select('.side-dts__date').text('Updated ' + dateFormatter(lastDate));
  }

  return (
    <Link to='dts'
          className='landing-chart__link'
          ga-on='click' ga-event-category='Data Lab Home Page'
          ga-event-action={'Clicked ' + props.heading}
    >
      <section className='dts'>
        <h1>
          {props.heading}
        </h1>
        <h2>
          {props.title}
        </h2>
        <div className='dts-container'>
          <div className='dts-module'>
            <div className='dtsm-img'></div>
            <div className='dtsm-right-column'>
              <div className='dtsm-tas-container'>
                <div className='dtsm-tas-header'>Total</div>
              </div>
              <div className='dtsm-dollars'>$</div>
            </div>
          </div>
        </div>

        <div className='side-dts__date'></div>
      </section>
    </Link>
  )
}

export default DtsTile;
