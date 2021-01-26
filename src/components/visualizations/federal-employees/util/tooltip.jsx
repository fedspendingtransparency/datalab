import * as d3 from 'd3v4';
import './tooltip.scss';

const Tooltip = (() => {
  function getLeftPosition() {
    let curX = d3.event.clientX
    let pageX = d3.event.pageX
    let tooltipWidth = document.getElementById("tooltip").clientWidth
    let paddingX = 20

    if (curX + tooltipWidth + paddingX > window.innerWidth) {
      return pageX - tooltipWidth + "px"
    } else {
      return pageX + "px"
    }
  }

  function getTopPosition() {
    let curY = d3.event.clientY
    let pageY = d3.event.pageY
    let tooltipHeight = document.getElementById("tooltip").clientHeight
    let paddingY = 10
    let cursorPadding = 20

    if (curY + tooltipHeight + paddingY + cursorPadding > window.innerHeight) {
      return pageY - tooltipHeight - cursorPadding + "px"
    } else {
      return pageY + cursorPadding + "px"
    }
  }

  function draw(tooltipId, title, information, disclaimers) {
    d3
      .select(tooltipId)
      .transition()
      .duration(200)
      .style("opacity", 1)

    function toolTipHtml(t, i, d) {
      function getinfoHtml() {
        return Object.entries(i).reduce((a, c) => {
          a += `<p class="key">${c[0]}</p><p class="val">${c[1]}</p>`
          return a
        }, "")
      }

      function getDisclaimerHtml() {
        return d.reduce((a, c) => {
          a += `<div class="disclaimer">${c}<div />`
          return a
        }, "")
      }

      const html = `
                <p class="title"><b>${t}</b></p>
                ${i ? `<br><div class="information">${getinfoHtml()}<div />` : ""}
                ${d ? `<br>${getDisclaimerHtml()}` : ""}
            `
      return html
    }

    d3
      .select(tooltipId)
      .html(toolTipHtml(title, information, disclaimers))
      .style("left", getLeftPosition)
      .style("top", getTopPosition)
  }

  function remove(tooltipId) {
    d3
      .select(tooltipId)
      .transition()
      .duration(500)
      .style("opacity", 0)
      .style("pointer-events", "none")
  }

  function move(tooltipId) {
    d3
      .select(tooltipId)
      .style("left", getLeftPosition)
      .style("top", getTopPosition)
  }

  return { draw, remove, move }
})()

export default Tooltip


