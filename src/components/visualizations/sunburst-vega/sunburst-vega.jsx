/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import appendPolyfill from './utils/append-polyfill';
import sunburstSpec from './utils/sunburst-spec';
import './sunburst-vega.scss';
import PropTypes from 'prop-types';

/* PLEASE DO NOT DELETE this import
  This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
  side but hasn't been rewritten yet due to the analyst backlog being long. */
// import transformData from './utils/transformData.js';

export default class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    /* PLEASE DO NOT DELETE this console.log
        This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
        side but hasn't been rewritten yet due to the analyst backlog being long. */
    // console.log(transformData());

    this.state = {
      data: this.props.data,
      spec: sunburstSpec(),
      selectedArc: this.props.default,
      previousArc: this.props.default,
    };

    this.signalListeners = { arcClick: this.handleClick, arcHover: this.handleHover, arcUnhover: this.handleUnhover };
  }

  componentDidMount() {
    const altText = this.props.altText;

    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(function () {
        const el = document.getElementsByClassName('vega-embed')[0];
        el.setAttribute('aria-labelledby', 'viz-description');
        const node = document.createElement("p");
        node.setAttribute('id', 'viz-description');
        const textnode = document.createTextNode(altText);
        node.appendChild(textnode);
        el.insertAdjacentElement('afterend', node);
      });

      this.resizeWindow();
      window.addEventListener('resize', this.resizeWindow);
      return () => {
        window.removeEventListener('resize', this.resizeWindow);
      }
    }
  }

  resizeWindow = () => {
    this.setState({ spec: sunburstSpec(window.innerWidth) })
  }

  handleUnhover = () => {
    this.props.updatePanels();
  }

  handleHover = (...args) => {
    const item = args[1];
    this.props.updatePanels(item);
  }

  handleClick = (...args) => {
    const item = args[1];
    this.props.updateSunburst(item);
  }

  updateData = (data) => {
    this.setState({ data });
  }

  render() {
    const { data, spec } = this.state;
    if (typeof window !== 'undefined') {
      appendPolyfill();
      return (
        <Vega
          data={data}
          spec={spec}
          signalListeners={this.signalListeners}
        />
      )
    } else {
      return <div />
    }
  }
}

Sunburst.propTypes = {
  updatePanels: PropTypes.func.isRequired,
  updateSunburst: PropTypes.func.isRequired,
  default: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}