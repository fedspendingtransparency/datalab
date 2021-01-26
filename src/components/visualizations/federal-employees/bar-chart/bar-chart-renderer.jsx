import * as d3 from 'd3v4';
import Tooltip from '../util/tooltip';

/* Adapted from fedscope barchart-module.js */
const BarChartRenderer = {

  draw: (data, { occupationCategories }) => {
    function handleMouseOver(d) {
      const formatNumber = d3.format(",d")
      Tooltip.draw("#tooltip", d.occupationCategoryName, {
        Employees: formatNumber(d.employeeCount),
      })
    }

    function handleMouseOut() {
      Tooltip.remove("#tooltip")
    }

    function handleMouseMove() {
      Tooltip.move("#tooltip")
    }

    const svg = d3.select("#barChartSvg")
    const margin = {
      top: 10, right: 80, bottom: 110, left: 90,
    }
    const width = +svg.attr("width") - margin.left - margin.right
    const height = +svg.attr("height") - margin.top - margin.bottom

    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
    const y = d3.scaleLinear().rangeRound([height, 0])

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    function findFillColor(type) {
      switch (type) {
        case "Blue Collar":
          return "#2272ce"
        case "White Collar":
          return "#2fbab7"
        case "Other":
          return "#5d6474"
        default:
          return ""
      }
    }

    g.selectAll("*").remove()

    const groupedData = Object.values(
      data.reduce((a, c) => {
        if (!a[c.occupationCategoryId]) {
          a[c.occupationCategoryId] = {
            occupationCategoryId: c.occupationCategoryId,
            occupationCategoryName:
            occupationCategories[c.occupationCategoryId].shortenedName,
            employeeCount: c.employeeCount,
            occupationCategoryType: c.occupationType,
          }
        } else {
          a[c.occupationCategoryId].employeeCount += c.employeeCount
        }
        return a
      }, {}),
    )
      .sort((a, b) => b.employeeCount - a.employeeCount)
      .reduce((a, c, i) => {
        if (i < 25) {
          a.push(c)
        } else if (i === 25) {
          a.push({
            occupationCategoryId: 99,
            occupationCategoryName: "All Other Occupations",
            occupationCategoryType: "Other",
            employeeCount: c.employeeCount,
          })
        } else if (i > 25) {
          a[25].employeeCount += c.employeeCount
        }
        return a
      }, [])

    x.domain(groupedData.map((d) => d.occupationCategoryName))
    y.domain([0, d3.max(groupedData, (d) => d.employeeCount)])

    g
      .append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("font-size", "0.875rem")
      .attr("font-family", "Source Sans Pro")
      .attr("font-weight", "700")
      .attr("text-anchor", "start")
      .text("EMPLOYEE COUNT")
      .attr("transform", `translate(-85,250) rotate(-90)`)
      .attr("fill", "#444")
      .attr("stroke-width", "0")

    g
      .selectAll(".bar")
      .data(groupedData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.occupationCategoryName))
      .attr("y", (d) => y(d.employeeCount))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.employeeCount))
      .attr("fill", (d) => findFillColor(d.occupationCategoryType))
      .attr("stroke", (d) => findFillColor(d.occupationCategoryType))
      .attr("stroke-width", "1")
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut)

    g
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(1,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "start")
      .attr("dx", ".5em")
      .attr("dy", ".3em")
      .attr("transform", "rotate(45)")
      .attr("pointer-events", "none")
  }
}

export default BarChartRenderer