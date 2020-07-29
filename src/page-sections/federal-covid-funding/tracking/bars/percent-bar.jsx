import React from "react";
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callout-area';
import PercentBar from './percent-area';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

export default class ModalPercentBar extends React.Component {
  static propTypes = {
    'data': PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { screenMode: null};
  };

  componentDidMount() {
    console.log(this.props.data);
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    const newMode = checkScreenMode(window.innerWidth);
    if (newMode !== this.state.screenMode) {
      this.setState({ screenMode: newMode });
    }
  };


  render = () => {
    return (<>
              hihi
            </>);
  };
  
};
