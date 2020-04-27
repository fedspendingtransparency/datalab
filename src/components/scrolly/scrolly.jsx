import React, { Component, PureComponent } from "react"
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';

const styles = {
  main: {
    padding: '70vh 2vw',
    fontFamily: 'Helvetica',
  },
  graphic: {
    top: 0,
    left: 0,
    position: 'sticky',
    backgroundColor: '#aaa',
    zIndex: 0,
    height: '500px',
    flexBasis: '60%',
    '& p': {
      fontSize: '5rem',
      textAlign: 'center',
      color: '#fff',
    },
  },
  scroller: {
    position: 'relative',
    padding: 0,
    zIndex: 100
  },
  step: {
    margin: '0 auto 2rem auto',
    paddingTop: 200,
    paddingBottom: 200,
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.5rem',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
};

class Graphic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      steps: [10, 20, 30],
      progress: 0,
    };

  }

  onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = 'rgba(250, 250, 210, .3)';

    this.setState({ data });
  };

  onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff';
  };

  onStepProgress = ({ element, progress }) => {
    this.setState({ progress });
  }

  render() {
    const { data, steps, progress } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.graphic}>
          <p>{this.props.name}</p>
          <p>{data}</p>
        </div>
        <div className={classes.scroller}>
          <Scrollama
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            progress
            onStepProgress={this.onStepProgress}
            offset={0.33}
            debug
          >
            {steps.map(value => (
              <Step data={value} key={value}>
                <div className={classes.step}>
                  <p>step value: {value}</p>
                  <p>{value === data && progress}</p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>


      </div>
    );
  }
}

const StyledGraphic = injectSheet(styles)(Graphic);

export default StyledGraphic;
