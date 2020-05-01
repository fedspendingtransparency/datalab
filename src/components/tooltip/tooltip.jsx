import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types"
import styles from './tooltip.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { Grid } from "@material-ui/core";

const inlineStyles = () => ({
  paper: {
    padding: '20px',
    borderRadius: '0',
    boxShadow: '0 2px 30px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: 'rgba(255, 253, 253, 0.95)'
  },
});

class MouseOverPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      openedPopperId: null
    }

    this.button = {0: React.createRef()};

  }

  componentDidMount() {
    window.addEventListener('resize', this.handlePopoverClose);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handlePopoverClose);
  }

  escHandler = (e) => {
    if(e.keyCode === 27) {
      this.handlePopoverClose()
    }
  }

  isOpen = (id) => {
    const { openedPopperId } = this.state;
    return (openedPopperId === id);
  }

  handlePopoverOpen = (event, popperId) => {
    this.setState({
      openedPopperId: popperId,
      anchorEl: event.currentTarget
    });

  };

  handlePopoverClose = () => {
    this.setState({
      openedPopperId: null,
      anchorEl: null
    });
  };

  keyUpHandler = (e) => {
    if(e.keyCode === 13) {
      this.handlePopoverClose()
    }
  }

  render() {
    const { classes, title, rows, id } = this.props;
    const { anchorEl } = this.state;

    return (
      <>
        <Popper id={id}
                open={this.isOpen(id)}
                anchorEl={anchorEl}
                placement='bottom-end'
                transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Grid container direction='row' className={classes.paper}>
                <div className={styles.title} onClick={this.handlePopoverClose}>
                  <span>{title}</span>
                  <CloseIcon className={styles.close} onClick={this.handlePopoverClose} onKeyUp={this.keyUpHandler} />
                </div>
                {rows.map((item, key) => {
                  return (<>
                    <Grid item key={`grid-item-${key}`} className={styles.container}>
                      <div className={styles.label} >{Object.keys(item)}</div>
                      <div className={styles.value}>{item[Object.keys(item)]}</div>
                    </Grid>
                 </>)
                })}
              </Grid>
            </Fade>
          )}
        </Popper>
      </>
    );
  }
}

export default withStyles(inlineStyles)(MouseOverPopover);

MouseOverPopover.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired

}
