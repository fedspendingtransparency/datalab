import './dts.scss';
import React, { useEffect } from 'react';
import * as d3 from 'd3v4';

import Bars from '../../../svgs/bars.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../../../svgs/list.svg';

function DTS(props) {

  useEffect(() => {
    const _data = props.data;

    const formatMillisecond = d3.timeFormat(".%L"),
      formatSecond = d3.timeFormat(":%S"),
      formatMinute = d3.timeFormat("%I:%M"),
      formatHour = d3.timeFormat("%I %p"),
      formatDay = d3.timeFormat("%a %d"),
      formatWeek = d3.timeFormat("%b %d"),
      formatMonth = d3.timeFormat("%b"),
      formatYear = d3.timeFormat("%Y");

    const brushDateFormatter = d3.timeFormat("%x");
    const dollarFormatter = d => d3.format("$,.3s")(d).replace(/G/, "B");
    const dateFormatter = d3.timeFormat("%a, %b %d, %Y");
    const lineColors = ["#00c3c2", "#2E7070", "#4CABAC", "#76D2D3"];
    const parseDateYMD = d3.timeParse("%Y-%m-%d");
    const bisectDate = d3.bisector(d => d.date).left;

    const svg = d3.select("#svg-wrapper"),
      margin = { top: 20, right: 20, bottom: 110, left: 60 },
      margin2 = { top: 330, right: 20, bottom: 30, left: 60 };

    let allOptions, optionsDict, lastDate, categorySeparatorDate;
    let data, optionsData, dateScaleValues, allToSpending, categoryToSpendingPrevFY, todayAllCategorySpending;

    let x = d3.scaleTime(),
      x2 = d3.scaleTime();

    const y = d3.scaleLinear(),
      y2 = d3.scaleLinear();

    let xAxis = d3.axisBottom(x),
      xAxis2 = d3.axisBottom(x2),
      yAxis = d3.axisLeft(y).tickFormat(dollarFormatter);

    let categoryToActiveWithinAYear = {};

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      ;

    const line2 = d3.line()
      .x(d => x2(d.date))
      .y(d => y2(d.value))
      ;

    const brush = d3.brushX().on("brush end", brushed);

    let width, height, height2, zoom;

    let masterMapping = {};
    let mapping = {};

    const sharedCategories = [
      {
        categories: ["Medicare", "Medicare Advantage Part C D Payments", "Marketplace Payments", "Medicare and Other CMS Payments"],
        date: new Date("2014-10-01"),
        footnote: "The shaded region indicates inactive or retired programs. Beginning October 1, 2014, payments previously reported under the Medicare line were expanded to three lines: Medicare and other CMS payments, Medicare Advantage - Part C&D payments, and Marketplace payments."
      }
    ];

    const renamedCategories = [
      {
        categories: ["Food Stamps", "Supple Nutrition Assist Program ( SNAP )"],
        date: new Date("2010-03-31"),
        footnote: "The shaded region indicates inactive or retired programs. On March 31, 2010, the Food Stamp Program was renamed Supplemental Nutrition Assistance Program (SNAP) on the Daily Treasury Statement. Withdrawals previously reported under the Food Stamp Program are now reported under SNAP."
      },
      {
        categories: ['NASA programs', 'NASA'],
        date: new Date('2020-01-13'),
        footnote: 'The shaded region indicates inactive or retired programs. On January 13, 2020, NASA programs was renamed NASA on the Daily Treasury Statement. Withdrawals previously reported under NASA programs are now reported under NASA.',
      },
      {
        categories: ['Veterans Affairs programs', 'Dept of Veterans Affairs ( VA )'],
        date: new Date('2020-01-13'),
        footnote: 'The shaded region indicates inactive or retired programs. On January 13, 2020, Veterans Affairs programs was renamed Dept of Veterans Affairs (VA) on the Daily Treasury Statement. Withdrawals previously reported under Veterans Affairs Programs are now reported under Dept of Veterans Affairs (VA). Additionally, on January 13, 2020, Readjustment Benefits and Insurance Funds which had previously been reported to the Veterans Affairs programs line began being reported on the VA – Benefits line.',
      },
      {
        categories: ['Veterans Benefits ( EFT )', 'VA Benefits'],
        date: new Date('2020-01-13'),
        footnote: 'The shaded region indicates inactive or retired programs. On January 13, 2020, Veteran Benefits (EFT) was renamed VA – Benefits on the Daily Treasury Statement. Withdrawals previously reported under Veteran Benefits (EFT) are now reported under VA – Benefits. Additionally, on January 13, 2020, Readjustment Benefits and Insurance Funds which had previously been reported to the Veterans Affairs programs line began being reported on the VA – Benefits line.',
      }
    ]

    for (let item of sharedCategories) {
      for (let categoryName of item.categories) {
        mapping[categoryName] = { categories: item.categories, date: item.date, footnote: item.footnote };
      }
    }
    for (let item of renamedCategories) {
      for (let categoryName of item.categories) {
        mapping[categoryName] = { categories: item.categories, date: item.date, footnote: item.footnote };
      }
    }

    if (_data) loadData(_data);

    function loadData(_data) {
      optionsData = [];
      dateScaleValues = [];
      allToSpending = { "today": {}, "mtd": {}, "fytd": {} };
      categoryToSpendingPrevFY = {};
      optionsDict = {};

      data = _data;

      data.forEach(d => {
        d.date = parseDateYMD(d.date);
        d.today = +d.today * 1000000;
        d.mtd = +d.mtd * 1000000;
        d.fytd = +d.fytd * 1000000;

        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);

        if (!categoryToActiveWithinAYear.hasOwnProperty(d.item_raw)) {
          categoryToActiveWithinAYear[d.item_raw] = false;
        }

        if (!categoryToActiveWithinAYear[d.item_raw]) {
          if (Math.abs(d.date.getTime() - lastYear.getTime()) < 31557600000) {
            categoryToActiveWithinAYear[d.item_raw] = true;
          }
        }

        let currentYear = new Date().getFullYear();
        let prevFYStart = new Date("10/01/" + (currentYear - 2)).getTime();
        let prevFYEnd = new Date("09/30/" + (currentYear - 1)).getTime();

        if (d.date.getTime() >= prevFYStart && d.date.getTime() <= prevFYEnd) {
          categoryToSpendingPrevFY[d.item_raw] = (categoryToSpendingPrevFY[d.item_raw] || 0) + d.today;
        }

        if (d.item_raw === "Public Debt Cash Redemp ( Table III B )") {
          allToSpending["today"][d.date] = (allToSpending["today"][d.date] || 0) - d.today;
          allToSpending["mtd"][d.date] = (allToSpending["mtd"][d.date] || 0) - d.mtd;
          allToSpending["fytd"][d.date] = (allToSpending["fytd"][d.date] || 0) - d.fytd;
        }

        if (d.item_raw === "Total Withdrawals ( excluding transfers )") {
          allToSpending["today"][d.date] = (allToSpending["today"][d.date] || 0) + d.today;
          allToSpending["mtd"][d.date] = (allToSpending["mtd"][d.date] || 0) + d.mtd;
          allToSpending["fytd"][d.date] = (allToSpending["fytd"][d.date] || 0) + d.fytd;

          dateScaleValues.push(d.date);
        }

        optionsData.push(d.item_raw);

        if (!optionsDict.hasOwnProperty(d.item_raw)) {
          optionsDict[d.item_raw] = { today: [], mtd: [], fytd: [] };
        }

        optionsDict[d.item_raw]['today'].push({ date: d.date, value: d.today });
        optionsDict[d.item_raw]['mtd'].push({ date: d.date, value: d.mtd });
        optionsDict[d.item_raw]['fytd'].push({ date: d.date, value: d.fytd });
      });

      allToSpending["today"] = transposeKVToArray("today");
      allToSpending["mtd"] = transposeKVToArray("mtd");
      allToSpending["fytd"] = transposeKVToArray("fytd");

      todayAllCategorySpending = allToSpending["today"].slice(-1) ? allToSpending["today"].slice(-1)[0] : '';

      drawChart();
    }

    function init() {
      const w = d3.select('.dts-layout-manager').node().getBoundingClientRect().width;

      d3.select('#svg-wrapper').attr('aria-labeledby', 'd3-title').attr('role', 'img').attr('width', w);

      let title = d3.select("#svg-wrapper").append("desc");
      title.attr('id', 'd3-title');
      title.text('Line graph of the Daily Treasury Statement with data from June 2005 through today. (96) Data is displayed in ranges of 30 or 90 days and 1, 5, or 10 years and at a frequency of daily, monthly to date, and fiscal year to date. October 28, 2008 saw the highest day of spending ($123B) while December 8, 2008 saw the lowest day of spending ($8.8B).');

      width = w - margin.left - margin.right;
      height = +svg.attr("height") - margin.top - margin.bottom;
      height2 = +svg.attr("height") - margin2.top - margin2.bottom;

      zoom = d3.zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([
          [0, 0],
          [width, height]
        ])
        .extent([
          [0, 0],
          [width, height]
        ])
        .on("zoom", zoomed);

      x.range([0, width]);
      x2.range([0, width]);

      y.range([height, 0]);
      y2.range([height2, 0]);

      brush.extent([
        [0, 0],
        [width, height2]
      ]);
    }

    function setFancyLines(selector, lineFn) {
      svg.selectAll(selector).each(function (lineSel) {
        let d3LineSel = d3.select(this);
        let d3LineSelData = d3LineSel.data();

        if (d3LineSelData[0].values[0].date.getTime() < d3LineSelData[0].date.getTime()) {
          d3LineSel.style("stroke-dasharray", ("5, 3"));
        }

        d3LineSel.attr("d", d => lineFn(d.values));
        d3LineSel.attr("stroke", d => d.color);
      });
    }

    function updateCategoryRectSeparator(sel, xFn, h) {
      if (categorySeparatorDate == null) {
        svg.select(sel)
          .style("display", "none");
      } else {
        svg.select(sel)
          .style("display", "block")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", xFn(categorySeparatorDate))
          .attr("height", h)
          .attr("opacity", 0.2)
          .style("stroke-width", 0)
          .style("fill", "#deeded");
      }
    }

    function adjustLines() {
      setFancyLines(".graph-lines", line);
      setFancyLines(".brush-lines", line2);

      updateCategoryRectSeparator(".category-rect-separator", x, height);
      updateCategoryRectSeparator(".brush-category-rect-separator", x2, height2);

      svg.select(".graph-x-axis").call(xAxis);
      svg.select(".brush-x-axis").call(xAxis2);
      svg.select(".x-grid").call(makeXGridLines().tickSize(-height).tickFormat(""));
      svg.select(".y-grid").call(makeYGridLines().tickSize(-width).tickFormat(""));
    }

    function updateCustomGrabbers(s) {
      var handle = svg.selectAll(".handle--custom");
      if (s == null) {
        handle.attr("display", "none");
      } else {
        handle.attr("display", null).attr("transform", function (d, i) {
          return "translate(" + s[i] + "," + height2 / 2 + ")";
        });
      }
    }

    function serialize(obj) {
      var str = [];
      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }
      return str.join("&");
    }

    function updateHistoryWithNewFrequencyOrCategory() {
      let start = getQueryStringValue("start");
      let end = getQueryStringValue("end");
      let frequency = d3.select('#frequency-selector').property('value');
      //let category = d3.select('#category-selector').property('value') || 'All Categories';
      let category = 'All Categories';

      let theQueryString = "?" + serialize({ start, end, frequency, category });
      history.replaceState(null, "", theQueryString);
    }

    function updateHistoryWithNewBrush(s) {
      let start = new Date(x2.invert(s[0])).toISOString().slice(0, 10).replace(/-/g, "");
      let end = new Date(x2.invert(s[1])).toISOString().slice(0, 10).replace(/-/g, "");
      let frequency = d3.select('#frequency-selector').property('value');
      //let category = d3.select('#category-selector').property('value') || 'All Categories';
      let category = 'All Categories';

      const numberOfDays = Math.round((new Date(x2.invert(s[1])) - new Date(x2.invert(s[0]))) / (1000 * 60 * 60 * 24));

      let theQueryString = ("?" + serialize({ start, end, frequency, category }));
      history.replaceState(null, "", theQueryString);

      if (numberOfDays < 32) {
        xAxis.ticks(d3.timeDay.every(10));
      } else if (numberOfDays < 180) {
        xAxis.ticks(d3.timeMonth.every(1));
      } else if (numberOfDays < 500) {
        xAxis.ticks(d3.timeMonth.every(3));
      } else if (numberOfDays < 1400) {
        xAxis.ticks(d3.timeMonth.every(6));
      } else if (numberOfDays < 3650) {
        xAxis.ticks(d3.timeYear.every(1));
      } else {
        xAxis.ticks(d3.timeYear.every(2));
      }

      svg.select(".graph-x-axis").call(xAxis);
    }

    function clearPeriodSelections() {
      d3.selectAll(".period-button").classed("period-button-selected", false);
    }

    function brushed() {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom

      var s = d3.event.selection || x2.range();
      x.domain(s.map(x2.invert, x2));
      adjustLines();

      updateCustomGrabbers(s);

      d3.select(".dts-brush-start-date").text(brushDateFormatter(x.domain()[0]));
      d3.select(".dts-brush-end-date").text(brushDateFormatter(x.domain()[1]));

      svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0));

      clearPeriodSelections();
    }

    function zoomed() {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush

      var t = d3.event.transform || x2.range();
      x.domain(t.rescaleX(x2).domain());
      adjustLines();

      let brushRegion = x.range().map(t.invertX, t);

      updateCustomGrabbers(brushRegion);

      d3.select(".brush").call(brush.move, brushRegion);

      clearPeriodSelections();
    }

    function choosePeriodButton(context, data) {
      let leftDate = new Date(lastDate);
      let rightDate = new Date(lastDate);

      let t = context.dataset.range;

      switch (t) {
        case "30d":
          leftDate.setMonth(leftDate.getMonth() - 1);
          break;
        case "90d":
          leftDate.setMonth(leftDate.getMonth() - 3);
          break;
        case "1y":
          leftDate.setFullYear(leftDate.getFullYear() - 1);
          break;
        case "5y":
          leftDate.setFullYear(leftDate.getFullYear() - 5);
          break;
        case "10y":
          leftDate.setFullYear(leftDate.getFullYear() - 10);
          break;
      }

      d3.select(".brush").call(brush.move, null);

      d3.select(".brush").call(brush.move, [x(leftDate), x(rightDate)]);

      d3.select(context).classed("period-button-selected", true);
    }

    function getQueryStringValue(key) {
      return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }

    let barData;

    function createBarChart(yearToSpendingArray, redraw) {
      d3.select(".svg-tsbfy-container").selectAll("*").remove();

      barData = barData || yearToSpendingArray.slice(-10);

      var svg = d3.select(".svg-tsbfy-container").append("svg")
        .attr("id", "viz-tsbfy-wrapper")
        .attr('role', 'img')
        .attr('aria-labeledby', 'dts-bar-title')
        .attr("width", "750") // do we need this?
        .attr("height", "500") // or this?
        .attr("viewBox", "0 0 750 500"), // or this?
        margin = { top: 20, right: 20, bottom: 50, left: 150 },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;

      svg.append('desc')
        .text('Chart of Total Spending by Fiscal Year from 2011 ($4.33 trillion) through current Fiscal Year 2020 ($673 billion).').attr('id', 'dts-bar-title');

      var x = d3.scaleBand().range([0, width]).padding(0.1),
        y = d3.scaleLinear().range([height, 0]);

      var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(barData.map(d => d.year));
      y.domain([0, d3.max(barData, d => d.spending)]);

      g.append("g")
        .attr("class", "axis bar-axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d => "" + d.substring(2)));

      g.append("g")
        .attr("class", "axis bar-axis axis--y")
        .call(d3.axisLeft(y).tickFormat(dollarFormatter));

      const barSub = 20;

      g.selectAll(".bar")
        .data(barData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.year) + (barSub / 2))
        .attr("y", d => y(d.spending))
        .attr("width", x.bandwidth() - barSub)
        .attr("height", d => height - y(d.spending));
    }

    let tableData;

    function createTable(yearToSpendingArray) {
      d3.select(".svg-tsbfy-container").selectAll("*").remove();

      let table = d3.select(".svg-tsbfy-container").append('table').attr("class", "tsbfy-table");
      let tbody = table.append('tbody');

      let columns = ["Year", "Spending per year"];

      if (!tableData) {
        tableData = yearToSpendingArray.slice(0);
        tableData.reverse();
        tableData = tableData.slice(0, 10);
      }

      let totalSpending = tableData.map(d => d.spending).reduce((a, b) => a + b, 0);

      let rows = tbody.selectAll('tr')
        .data(tableData)
        .enter()
        .append('tr')
        ;

      let cells = rows.selectAll('td')
        .data(function (row) {
          let tdYear = row.year;
          let tdSpendingPerYear = dollarFormatter(row.spending);

          return [tdYear, tdSpendingPerYear];
        })
        .enter()
        .append('td')
        .text(d => d)
        ;
    }

    function addOptions(sel, condensedOptions, activeOptions, inactiveOptions) {
      sel.selectAll('*').remove();

      sel.append('option').text('All Categories').property("value", "All Categories");
      sel.append('option').attr('disabled', 'true').text('──────────────────────────');

      let previousYear = new Date().getFullYear() - 1;

      sel
        .append("optgroup").attr("label", "Top 10 (Spending in FY " + previousYear + ")")
        .selectAll('option')
        .data(condensedOptions).enter()
        .append('option')
        .text(d => d)
        .property("value", d => d)
        ;

      sel.append('option').attr('disabled', 'true').text('──────────────────────────');

      sel
        .append("optgroup").attr("label", "Active Categories")
        .selectAll('option')
        .data(activeOptions).enter()
        .append('option')
        .text(d => d)
        .property("value", d => d)
        ;

      sel.append('option').attr('disabled', 'true').text('──────────────────────────');

      sel
        .append("optgroup").attr("label", "Inactive Categories")
        .selectAll('option')
        .data(inactiveOptions).enter()
        .append('option')
        .text(d => d)
        .property("value", d => d)
        ;

      sel.property("value", "All Categories");
    }

    function getGraphData() {
      //let categoryValue = d3.select('#category-selector').property('value') || 'All Categories';
      let frequencyValue = d3.select('#frequency-selector').property('value');

      // return masterMapping[categoryValue][frequencyValu]
      return masterMapping['All Categories'][frequencyValue];
    }

    function setTooltipActiveTimeframe(frequencyValue) {
      d3.selectAll(".dts-tt-timeframe").classed("dts-tt-timeframe-active", false);

      if (frequencyValue === "today") {
        d3.select(".dts-tt-timeframe-daily").classed("dts-tt-timeframe-active", true);
      } else if (frequencyValue === "mtd") {
        d3.select(".dts-tt-timeframe-mtd").classed("dts-tt-timeframe-active", true);
      } else if (frequencyValue === "fytd") {
        d3.select(".dts-tt-timeframe-fytd").classed("dts-tt-timeframe-active", true);
      }
    }

    function createSelect(condensedOptions, activeOptions, inactiveOptions) {
      d3.select('#frequency-selector').on('change', onFrequencyChange);
      d3.selectAll("input[name='timeframe']").on("change", onDataChange);
      let select = d3.select('#category-selector').on('change', onCategoryChange);

      addOptions(select, condensedOptions, activeOptions, inactiveOptions);

      function onFrequencyChange() {
        onDataChange();
      }

      function onCategoryChange() {
        d3.select("#category-selector").classed('custom-select-start', false);

        onDataChange();
      }

      function onDataChange() {
        updateGraph(getGraphData());
        updateHistoryWithNewFrequencyOrCategory();

        //let categoryValue = d3.select('#category-selector').property('value') || "All Categories";
        let categoryValue = 'All Categories';
        let frequencyValue = d3.select('#frequency-selector').property('value');

        setTooltipActiveTimeframe(frequencyValue);

        let amountSpentToday = optionsDict[categoryValue]['today'].slice(-1).pop(); // used to be .last() but... not a real function??? (get last value in array.)
        
        d3.select(".daily-spending-subtext").text("Amount Spent On " + dateFormatter(amountSpentToday.date));
        d3.select(".daily-spending-amount").text(dollarFormatter(amountSpentToday.value));
      }
    }

    function makeXGridLines() {
      return d3.axisBottom(x);
    }

    function makeYGridLines() {
      return d3.axisLeft(y);
    }

    function parseYYYYMMDD(dateString) {
      return new Date(dateString.substring(0, 4), dateString.substring(4, 6) - 1, dateString.substring(6, 8));
    }

    function setGraphYDomains(data) {
      const yMax = d3.max(data, c => d3.max(c.values, d => d.value));
      const yMin = d3.min(data, c => d3.min(c.values, d => d.value));

      y.domain([yMin, yMax]);
      y2.domain(y.domain());
    }

    function updateLines(parent, selector, data, pathClass, classesToRemove, lineFn) {
      d3.selectAll(classesToRemove).remove();

      const u = d3.select(parent).selectAll(selector);
      u.data(data)
        .enter()
        .insert('path', ":first-child")
        .attr("class", pathClass)
        ;
    }

    function updateGraphAndBrushLines(data) {
      updateLines(".line-chart", ".category-line-container", data, "line graph-lines", ".graph-lines", line);
      updateLines(".context", ".brush-line-container", data, "line brush-lines", ".brush-lines", line2);
    }

    function updateGraph(data) {
      categorySeparatorDate = data.length > 1 ? data[0].date : null;

      if (data[0].name === "All Categories") {
//        d3.select(".dts-footnote").style("visibility", "visible");
        // d3.select(".dts-footnote-text").text("All Categories was created by taking Total Withdrawals (excluding transfers) and subtracting Public Debt Cash Redemp (Table III B) from it for each corresponding entry.");
      } else if (data.length > 1) {
        d3.select(".dts-footnote").style("visibility", "visible");
        d3.select(".dts-footnote-text").text(data[1].footnote); // was [0]!
      } else {
        d3.select(".dts-footnote").style("visibility", "hidden");
        d3.select(".dts-footnote-text").text('');
      }

      updateGraphAndBrushLines(data);
      setGraphYDomains(data);
      adjustLines();

      svg.select(".axis--y").transition().duration(1000).call(yAxis).ease(d3.easeLinear);
    }

    function createGraph(data) {
      let startDate = getQueryStringValue("start");
      let endDate = getQueryStringValue("end");

      d3.select("#svg-wrapper").selectAll(".line-main").remove();

      d3.selectAll(".period-button").on("click", function () {
        choosePeriodButton(this, data);
      });

      brush.on("end", function () {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom

        var s = d3.event.selection || x2.range();

        updateHistoryWithNewBrush(s);
      });

      zoom.on("end", function () {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush

        var t = d3.event.transform || x2.range();
        let s = x.range().map(t.invertX, t);

        updateHistoryWithNewBrush(s);
      });

      var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        ;

      var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")")
        ;

      setGraphYDomains(data);
      x.domain([new Date(2005, 5, 9), lastDate]);
      x2.domain(x.domain());

      focus.append("g")
        .attr("class", "axis axis--x graph-x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        ;

      focus.append("g")
        .attr("class", "axis axis--y graph-y-axis")
        .call(yAxis)
        ;

      // add the X gridlines
      svg.append("g")
        .attr("class", "grid x-grid")
        .attr("transform", "translate(" + margin.left + "," + (margin.top + height) + ")")
        .call(makeXGridLines()
          .tickSize(-height)
          .tickFormat("")
        );

      // add the Y gridlines
      svg.append("g")
        .attr("class", "grid y-grid")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(makeYGridLines()
          .tickSize(-width)
          .tickFormat("")
        );

      var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0)
        ;

      var lineChart = svg.append("g")
        .attr("class", "focus line-chart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("clip-path", "url(#clip)")
        ;

      updateGraphAndBrushLines(data);

      context.append("g")
        .attr("class", "axis axis--x brush-x-axis")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis2);

      let gBrush = context.append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, x.range());

      var handle = gBrush.selectAll(".handle--custom")
        .data([{ type: "w" }, { type: "e" }])
        .enter().append("path")
        .attr("class", "handle--custom")
        .attr("fill", "#aaa")
        .attr("fill-opacity", 0.8)
        .attr("cursor", "ew-resize")
        .attr("d", d3.arc()
          .innerRadius(0)
          .outerRadius(height2 / 2)
          .startAngle(0)
          .endAngle(function (d, i) {
            return i ? Math.PI : -Math.PI;
          }));

      d3.select(".brush").call(brush.move, null);

      lineChart.append("rect").attr("class", "category-rect-separator");
      gBrush.insert("rect", ":first-child").attr("class", "brush-category-rect-separator");

      if (startDate == "" || endDate == "") { // change this to not a valid date range instead
        d3.select(".brush").call(brush.move, [0, width]);

        choosePeriodButton(d3.select(".period-button-default").node(), data);
      } else {
        d3.select(".brush").call(brush.move, [x(parseYYYYMMDD(startDate)), x(parseYYYYMMDD(endDate))]);
      }

      var mouseOverDataPoint = svg.append("g")
        .attr("class", "mouse-over-data-point")
        .style("display", "none");

      mouseOverDataPoint.append("circle")
        .attr("r", 7)
        .attr("stroke-width", 1);

      var ttContainer = d3.select(".dts-tt-container");

      svg.append("rect")
        .attr("class", "zoom")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .on("mouseover", function () {
          ttContainer.style("display", "block");
          mouseOverDataPoint.style("display", "block");
        })
        .on("mouseout", function () {
          ttContainer.style("display", "none");
          mouseOverDataPoint.style("display", "none");
        })
        .on("mousemove", mouseMove)
        .call(zoom).on("wheel.zoom", null);

      function getMouseOverDataPoint(data, context) {
        let x0 = x.invert(d3.mouse(context)[0]); // Date at mouse position
        let y0 = y.invert(d3.mouse(context)[1]);

        let categoryPossibilities = [];

        for (let cItem of data) {
          let mouseOverData = cItem.values;

          let i = bisectDate(mouseOverData, x0, 1); // Index in date in array

          if (i === 1 || i >= mouseOverData.length) {
            continue;
          }

          let d0 = mouseOverData[i - 1]; // d date value
          let d1 = mouseOverData[i];     // d date value

          d0.name = cItem.name;
          d1.name = cItem.name;

          categoryPossibilities.push(x0 - d0.date > d1.date - x0 ? d1 : d0);
        }

        if (categoryPossibilities.length === 0) {
          return { date: data[0].date, value: 0, name: "No Data" }; // No data due to switchover/whatever else
        }

        let closestItem = categoryPossibilities[0];

        for (let cItem of categoryPossibilities) {
          if (Math.abs(cItem.value - y0) < Math.abs(closestItem.value - y0)) {
            closestItem = cItem;
          }
        }

        return closestItem;
      }

      function mouseMove() {
        //let categoryValue = d3.select('#category-selector').property('value');
        let categoryValue = 'All Categories';
        let frequencyValue = d3.select('#frequency-selector').property('value');

        let d = getMouseOverDataPoint(masterMapping[categoryValue][frequencyValue], this);

        mouseOverDataPoint.select("circle")
          .attr("transform", "translate(" + (margin.left + x(d.date)) + "," + (margin.top + y(d.value)) + ")");

        ttContainer
          .style("left", d3.event.pageX + "px")
          .style("top", (d3.event.pageY) + "px");

        let mouseOverDateText = dateFormatter(d.date);

        let todayDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["today"], this).value);
        let mtdDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["mtd"], this).value);
        let fytdDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["fytd"], this).value);

        ttContainer.select(".dts-tt-category").text('Total');
        ttContainer.select(".dts-tt-date").text(mouseOverDateText);

        ttContainer.select(".dts-tt-daily-value").text(todayDataPoint);
        ttContainer.select(".dts-tt-mtd-value").text(mtdDataPoint);
        ttContainer.select(".dts-tt-fytd-value").text(fytdDataPoint);
      }
    }

    function getCombinedCategory(combinedArray) {
      let result = [];
      let remember = {};

      combinedArray.forEach(obj => {
        if (remember[obj.date]) {
          remember[obj.date].value += obj.value;
        } else {
          let clonedObj = Object.assign({}, obj);
          remember[obj.date] = clonedObj;
          result.push(clonedObj);
        }
      });
      return result;
    }

    function createMasterMapping() {
      for (let key in optionsDict) {
        masterMapping[key] = { "today": [], "mtd": [], "fytd": [] };

        if (mapping.hasOwnProperty(key)) {
          for (let i = 0; i < mapping[key].categories.length; i++) {
            const cateName = mapping[key].categories[i];
            if (optionsDict[cateName]) {
              masterMapping[key]["today"].push({
                name: cateName,
                values: optionsDict[cateName]["today"],
                date: mapping[key].date,
                footnote: mapping[key].footnote,
                color: lineColors[i]
              });
              masterMapping[key]["mtd"].push({
                name: cateName,
                values: optionsDict[cateName]["mtd"],
                date: mapping[key].date,
                footnote: mapping[key].footnote,
                color: lineColors[i]
              });
              masterMapping[key]["fytd"].push({
                name: cateName,
                values: optionsDict[cateName]["fytd"],
                date: mapping[key].date,
                footnote: mapping[key].footnote,
                color: lineColors[i]
              });
            }
          }
        } else {
          masterMapping[key]["today"].push({
            name: key,
            values: optionsDict[key]["today"],
            date: optionsDict[key]["today"][0].date,
            footnote: optionsDict[key].footnote, // ''
            color: lineColors[0]
          });
          masterMapping[key]["mtd"].push({
            name: key,
            values: optionsDict[key]["mtd"],
            date: optionsDict[key]["mtd"][0].date,
            footnote: optionsDict[key].footnote, // ''
            color: lineColors[0]
          });
          masterMapping[key]["fytd"].push({
            name: key,
            values: optionsDict[key]["fytd"], // optionsDict[key]["fytd"][0].date
            date: new Date("1970-01-01"),
            footnote: optionsDict[key].footnote, // ''
            color: lineColors[0]
          });
        }
      }

      let combinedToday = [];
      let combinedMTD = [];
      let combinedFYTD = [];

      for (let i = 0, il = sharedCategories.length; i < il; i++) {
        for (let catName of sharedCategories[i].categories) {
          if (optionsDict[catName]) {
            combinedToday.push.apply(combinedToday, optionsDict[catName]["today"]);
            combinedMTD.push.apply(combinedMTD, optionsDict[catName]["mtd"]);
            combinedFYTD.push.apply(combinedFYTD, optionsDict[catName]["fytd"]);
          }
        }
      }

      let combinedDailyValues = getCombinedCategory(combinedToday);
      let combinedMTDValues = getCombinedCategory(combinedMTD);
      let combinedFYTDValues = getCombinedCategory(combinedFYTD);

      for (let i = 0, il = sharedCategories.length; i < il; i++) {
        const curCategory = sharedCategories[i];
        for (let catName of curCategory.categories) {
          if (optionsDict[catName]) {
            masterMapping[catName]["today"].push({
              "name": "Combined",
              values: combinedDailyValues,
              date: curCategory.date,
              footnote: curCategory.footnote,
              color: lineColors[lineColors.length - 1]
            });
            masterMapping[catName]["mtd"].push({
              "name": "Combined",
              values: combinedMTDValues,
              date: curCategory.date,
              footnote: curCategory.footnote,
              color: lineColors[lineColors.length - 1]
            });
            masterMapping[catName]["fytd"].push({
              "name": "Combined",
              values: combinedFYTDValues,
              date: curCategory.date,
              footnote: curCategory.footnote,
              color: lineColors[lineColors.length - 1]
            });
          }
        }
      }

    };

    function getFiscalYear(theDate) {
      let fullYear = theDate.getFullYear();

      return theDate.getMonth() + 1 >= 10 ? fullYear + 1 : fullYear;
    }

    function transposeKVToArray(frequency) {
      return Object.keys(allToSpending[frequency]).map(k => ({
        date: new Date(k),
        value: allToSpending[frequency][k]
      }));
    }

    function getYearToSpendingArray(allCategoriesFYTD) {
      let yearToSpendingArray = [];

      for (let i = 0; i < allCategoriesFYTD.length - 1; i++) {
        let curItem = allCategoriesFYTD[i];
        let nextItem = allCategoriesFYTD[i + 1];

        if (nextItem.value < curItem.value) { // Fiscal year end
          yearToSpendingArray.push({ year: getFiscalYear(curItem.date).toString(), spending: curItem.value });
        }
      }

      let latestForCurrentYear = allCategoriesFYTD[allCategoriesFYTD.length - 1];
      yearToSpendingArray.push({
        year: getFiscalYear(latestForCurrentYear.date).toString(),
        spending: latestForCurrentYear.value
      });

      return yearToSpendingArray;
    }

    // Define filter conditions
    function multiFormat(date) {
      return (d3.timeSecond(date) < date ? formatMillisecond
        : d3.timeMinute(date) < date ? formatSecond
          : d3.timeHour(date) < date ? formatMinute
            : d3.timeDay(date) < date ? formatHour
              : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
                : d3.timeYear(date) < date ? formatMonth
                  : formatYear)(date);
    }

    function drawChart() {
      function toggleButtonBgColor(context) {
        d3.select(".viz-tsbfy-bar-view").style("background-color", "rgb(250, 250, 250)");
        d3.select(".viz-tsbfy-table-view").style("background-color", "rgb(250, 250, 250)");

        d3.select(context).style("background-color", "rgb(255, 255, 255)");
      }

      init();
      if (data) {
        lastDate = data[data.length - 1].date;

        d3.select(".daily-spending-subtext").text("Amount Spent On " + dateFormatter(lastDate));
        d3.select(".header-updated-when").text("Updated " + dateFormatter(lastDate));

        x = d3.scaleTime().domain(d3.extent(dateScaleValues)).range([0, width]);
        x2 = d3.scaleTime().domain(d3.extent(dateScaleValues)).range([0, width]);

        xAxis = d3.axisBottom(x).tickFormat(multiFormat).ticks(d3.timeMonth.every(3));
        xAxis2 = d3.axisBottom(x2).ticks(d3.timeYear.every(2));

        optionsDict["All Categories"] = allToSpending;
        createMasterMapping();

        allOptions = [...new Set(optionsData)];
        allOptions.sort();

        let condensedOptions = Object.keys(categoryToSpendingPrevFY).sort((a, b) => categoryToSpendingPrevFY[b] - categoryToSpendingPrevFY[a]).slice(0, 10);

        let activeOptions = [];
        let inactiveOptions = [];

        for (let catKey in categoryToActiveWithinAYear) {
          if (categoryToActiveWithinAYear[catKey]) {
            activeOptions.push(catKey);
          } else {
            inactiveOptions.push(catKey);
          }
        }

        activeOptions.sort();
        inactiveOptions.sort();

        /* Add this back for the select categories dropdown. */
        //createSelect(condensedOptions, activeOptions, inactiveOptions);

        let theFrequency = getFrequencyFromURL();
        let theCategory = getCategoryFromURL(allOptions);

        d3.select('#frequency-selector').property('value', theFrequency);
        d3.select('#category-selector').property('value', theCategory);
        d3.select(".daily-spending-amount").text(dollarFormatter(todayAllCategorySpending.value));

        let graphData = getGraphData();
        createGraph(graphData);
        updateGraph(graphData);

        setTooltipActiveTimeframe(theFrequency);

        let yearToSpendingArray = getYearToSpendingArray(optionsDict["All Categories"]["fytd"]);

        d3.select(".viz-tsbfy-bar-view").on("click", function () {
          toggleButtonBgColor(this);
          createBarChart(yearToSpendingArray);
        });

        d3.select(".viz-tsbfy-table-view").on("click", function () {
          toggleButtonBgColor(this);
          createTable(yearToSpendingArray);
        });

        createBarChart(yearToSpendingArray);

        d3.select(".viz-tsbfy-bar-view").style("background-color", "rgb(255, 255, 255)");
      }

      function getFrequencyFromURL() {
        let frequency = getQueryStringValue('frequency');
        let possibleFrequencies = ["today", "mtd", "fytd"];

        if (!possibleFrequencies.includes(frequency)) {
          frequency = "today";
        }

        return frequency;
      }

      function getCategoryFromURL(allOptions) {
        let category = getQueryStringValue('category');

        if (!allOptions.includes(category)) {
          category = "All Categories";
        }

        return category;
      }

      function type(d) {
        d.date = parseDateYMD(d.date);
        d.value = +d.value; // is this wrong? should it be fytd, mtd, and today instead? also multiply?
        return d;
      }
    }

    let debounce, previousWidth;

    window.addEventListener('resize', function () {
      if (debounce) {
        clearTimeout(debounce);
      }

      if (previousWidth === window.innerWidth) {
        return;
      }

      previousWidth = window.innerWidth;

      debounce = setTimeout(function () {
        d3.select('#svg-wrapper').selectAll('*').remove();
        drawChart('redraw');
      }, 300);
    });
  });

  if (!props.data) {
    return <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>;
  } else {
    return <>
      <div className="dts-viz-container">
        <div className="dts-layout-manager">
          <div className="dts-brush-date-container">
            <div className="dts-brush-date-item">
              <div className="dts-brush-start-date-label">From</div>
              <div className="dts-brush-start-date">mm/dd/yy</div>
            </div>
            <div className="dts-brush-date-item">
              <div className="dts-brush-end-date-label"> to</div>
              <div className="dts-brush-end-date">mm/dd/yy</div>
            </div>
          </div>
          <div className="dts-svg-wrapper">
            <svg id="svg-wrapper" height="400"></svg>
          </div>
        </div>
        <div className="viz-tsbfy-container">
          <div className="viz-tsbfy-header">
            <div className="viz-tsbfy-header-text">Total Spending By Fiscal Year</div>
            <div className="viz-tsbfy-header-view-buttons">
              <div className="viz-tsbfy-bar-view"><Bars /></div>
              <div className="viz-tsbfy-table-view"><List /></div>
            </div>
          </div>
          <div className="svg-tsbfy-container">
            <svg id="viz-tsbfy-wrapper" width="750" height="500" viewBox="0 0 750 500"></svg>
          </div>
        </div>
      </div>

      <div className="dts-footnote">
        <div className="dts-footnote-rect"></div>
        <div className="dts-footnote-text"></div>
      </div>

    </>;
  }
}

export default DTS;
