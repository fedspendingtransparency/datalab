/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from './sunburst-spec';
import transformData from './transformData.js';

// const code1 = `<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />`;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    // console.log(transformData());

    this.state = {
      data: props.data[0],
      info: '',
      spec: sunburstSpec,
    };

    this.handleHover = this.handleHover.bind(this);
    // this.handleToggleSpec = this.handleToggleSpec.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.handlers = { tooltip: this.handleHover };
  }

  handleHover(...args) {
    this.setState({
      info: JSON.stringify(args),
    });
  }

  handleUpdateData() {
    this.setState({ data: { flare } });
  }



  render() {
    const { data, spec, info } = this.state;

    return <Vega data={data} spec={spec} signalListeners={this.handlers} />;
  }
}