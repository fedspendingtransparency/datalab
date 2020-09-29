import React, { Component } from 'react';
import d3 from 'd3v3';
import homeImg from '../../../static/images/home-solid.svg';
import PropTypes from 'prop-types'
import { checkScreenMode, ScreenModeEnum } from '../../utils/screen-mode';
import styles from './breadcrumbs.module.scss'

export default class BreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: [],
      activePanelNode: {},
      staticData: {},
      width: 600,
      height: 50,
      // This defines the spacing for the breadcrumbs
      // w is width
      // h is height
      // s is spacing
      // t is for the tip
      // homeW is the home button width
      b: {
        w: 125, h: 30, s: 3, t: 10, homeW: 40
      }
    };
  }

  componentDidMount() {
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
    return () => {
      window.removeEventListener('resize', this.resizeWindow);
    }
  }

  resizeWindow = () => {
    this.setState((state) => {
      let { width, b } = state;
      const screenMode = checkScreenMode(window.innerWidth);

      if (screenMode === ScreenModeEnum.mobile) {
        if (window.innerWidth > 570) {
          width = 540;
          b.w = (470 / 3);
        } else {
          width = window.innerWidth - 30;
          b.w = ((window.innerWidth - 70) / 3) - 10;
        }
      } else if (screenMode === ScreenModeEnum.tablet) {
        width = 344;
        b.w = 90;
      } else if (screenMode === ScreenModeEnum.desktop) {
        width = 464;
        b.w = 125;
      } else {
        width = 510;
        b.w = 125;
      }

      return { width, b };
    })
  }

  drawbread = () => {
    const { b } = this.state;
    const points = [];
    points.push("0,0");
    points.push(`${b.w},0`);
    points.push(`${b.w + b.t},${b.h / 2}`);
    points.push(`${b.w},${b.h}`);
    points.push(`0,${b.h}`);
    points.push(`${b.t},${(b.h / 2)}`);
    return points.join(" ");
  };

  setOpacity = (d) => {
    switch(d.depth) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return .7;
      case 3:
        return .4;
    }

    console.warn(`Invalid breadcrumb, depth not found to set opacity: ${d.name}, ${d.depth}`);
    return 1;
  };

// Update the breadcrumb trail to show the current sequence and percentage.
  updateBreadcrumbs = (colors, items) => {
    const root = items || [];
    const { b } = this.state;

    this.setState({ root: root });

    // Data join; key function combines name and depth (= position in sequence).
    let g = d3.select("#trail")
      .selectAll("g")
      .data(root, d => { return d.name + d.depth; });

    // Add breadcrumb and label for entering nodes.
    const entering = g.enter().append("svg:g");

    entering.append('svg:image')
      .attr('x', d => { return d.depth === 0 ? 10 : null })
      .attr('y', d => { return d.depth === 0 ? 6 : null })
      .attr('width', d => { return d.depth === 0 ? 20 : null })
      .attr('xlink:href', d => { return d.depth === 0 ? homeImg : null })
      .attr('opacity', '.4')

    entering.append("svg:polygon")
      .attr("points", this.drawbread)
      .style("fill", colors)
      .style("opacity", d => this.setOpacity(d))

    entering.append( "svg:text")
      .attr("x", d => { return ((d.depth === 0 ? b.homeW : b.w) + b.t) / 2; })
      .attr("y", b.h / 2)
      .attr("dy", "0.35em" )
      .attr("text-anchor", "middle")
      .attr('fill', '#fff')
      .attr('opacity', d => { return d.depth === 0 ? 0 : 1 })
      .text( d => {
        if(d.depth === 0) return '--';
        if(d.depth < 3){
          return String(d.name)    // TODO: Truncating strings temporarily; will remove after getting abbreviation data for agencies and subagencies
            .substring(0,4)
            .toUpperCase();
        }
        return String(d.name)
          .substring(0,4)
          .trimRight() + "..." +
          String(d.name).substr(String(d.name).length-4);
        ;
      })
      .style("cursor", "pointer")
      .on("click", d => this.props.onSelect(d));

    g.attr("transform", function(d, i) {
      const trans =  "translate(" + i * (b.w + b.s) + ", 0)";
      const hometrans =  "translate(" + (i * (b.w + b.s) - (b.w - b.homeW)) + ", 0)";
      return (d.depth > 0 ? hometrans : trans)
    });

    // Remove exiting nodes.
    g.exit().remove();

    // Make the breadcrumb trail visible, if it's hidden.
    d3.select("#trail")
      .style("visibility", "");

  }

  render() {
    const { width, height } = this.state;
    return (
      <div id={styles.sequence}>
        <svg id="trail" style={{ width, height }} />
      </div>
    );
  }
}

BreadCrumbs.propTypes = {
  onSelect: PropTypes.func.isRequired
}