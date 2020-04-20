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
      anchorEl: null
    }
  }

  handlePopoverOpen = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handlePopoverClose = () => {
    this.setState({anchorEl: null});
  };

  isOpen = () => {
    Boolean(this.state.anchorEl)
  }

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);

    return (
      <div className={styles.tooltip}>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={this.state.anchorEl}
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
            {this.props.title}
            <Hidden lgUp>
              <CloseIcon className={styles.close} />
            </Hidden>
          </div>
          {this.props.items.map((item, key) => {
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

BreadCrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
