import React from 'react';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types"
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import styles from './tooltip.module.scss';
import { Grid, Hidden } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


const inlineStyles = () => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: '20px',
    'background-color': 'rgba(255,255,255,.95)',
    'border-radius': '0'
  }
});

class MouseOverPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      openedPopoverId: null
    }
  }

  handlePopoverOpen = (event, popoverId) => {
    this.setState({
      openedPopoverId: popoverId,
      anchorEl: event.currentTarget
    });
  };

  handlePopoverClose = () => {
    this.setState({
      openedPopoverId: null,
      anchorEl: null
    });
  };

  isOpen = (id) => {
    const { openedPopoverId } = this.state;
    return (openedPopoverId == id);
  }

  render() {
    const { classes } = this.props;
    const { id, title, list } = this.props.items;
    const { anchorEl, openedPopoverId } = this.state;

    return (
      <div className={styles.tooltip}>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={this.isOpen(id)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >

          <Grid container direction='row'>
          <div className={styles.title} onClick={this.handlePopoverClose}>
            {title}
            <Hidden lgUp>
              <CloseIcon className={styles.close} />
            </Hidden>
          </div>
          {list.map((item, key) => {
            return (
              <Grid item key={`grid-item-${key}`} className={styles.container}>
                <div key={`label-${key}`} className={styles.label}>{item.label}</div>
                <div key={`value-${key}`} className={styles.value}>{item.value}</div>
              </Grid>
            )
          })}
          </Grid>

        </Popover>
      </div>
    );
  }
}

export default withStyles(inlineStyles)(MouseOverPopover);

MouseOverPopover.propTypes = {
  classes: PropTypes.object.isRequired
}
