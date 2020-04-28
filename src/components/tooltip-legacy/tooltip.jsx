import React from 'react';
import styles from './tooltip.module.scss';

import * as d3 from "d3v3";

function tooltipModule(){
  function getLeftPosition(tooltipId) {
    let curX = d3.event.clientX;
    let pageX = d3.event.pageX;
    let tooltipWidth = document.getElementById(tooltipId).clientWidth;
    let paddingX = 20;

    if (curX + tooltipWidth + paddingX > window.innerWidth) {
      return pageX - tooltipWidth + "px";
    } else {
      return pageX + "px";
    }
  }

  function getTopPosition(tooltipId) {
    let curY = d3.event.clientY;
    let pageY = d3.event.pageY;
    let tooltipHeight = document.getElementById(tooltipId).clientHeight;
    let paddingY = 10;
    let cursorPadding = 20;

    if (curY + tooltipHeight + paddingY + cursorPadding > window.innerHeight) {
      return pageY - tooltipHeight - cursorPadding + "px";
    } else {
      return pageY + cursorPadding + "px";
    }
  }

  function draw(tooltipId, title, information, disclaimers, customHTML) {
    d3
      .select(`#${tooltipId}`)
      .transition()
      .duration(200)
      .style("opacity", 1);

    function toolTipHtml(t, i, d) {
      function getinfoHtml() {
        return Object.entries(i).reduce((a, c) => {
          a += `<p class=${styles.key}>${c[0]}</p><p class=${styles.val}>${c[1]}</p>`;
          return a;
        }, "");
      }

      function getDisclaimerHtml() {
        return d.reduce((a, c) => {
          a += `<div class=${styles.disclaimer}>${c}<div />`;
          return a;
        }, "");
      }

      const html = `
                <p class=${styles.title}><b>${t}</b></p>
                ${i ? `<br><div class=${styles.information}>${getinfoHtml()}<div />` : ""}
                ${d ? `<br>${getDisclaimerHtml()}` : ""}
            `;
      return html;
    }

    const leftPosition = getLeftPosition(tooltipId);
    const topPosition = getTopPosition(tooltipId);
    let tooltipContent = customHTML
    if(!tooltipContent){
      tooltipContent = toolTipHtml(title, information, disclaimers);
    }

    d3
      .select(`#${tooltipId}`)
      .html(tooltipContent)
      .style("left", leftPosition)
      .style("top", topPosition);

  }

  function remove(tooltipId) {
    d3
      .select(`#${tooltipId}`)
      .transition()
      .duration(500)
      .style("opacity", 0)
      .style("pointer-events", "none");
  }

  function move(tooltipId) {
    const leftPosition = getLeftPosition(tooltipId);
    const topPosition = getTopPosition(tooltipId);
    d3
      .select(`#${tooltipId}`)
      .style("left", leftPosition)
      .style("top", topPosition);
  }

  return { draw, remove, move };
}

export default tooltipModule;
