import React, { Component } from "react"
import Scrolly from 'src/components/scrolly/scrolly'


class Graphic extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <>
      <Scrolly name={'one'} />

      <Scrolly name={'two'} />

    </>
    );
  }
}

export default Graphic;
