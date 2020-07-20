import React, {Children} from 'react';
import controlBarStyles from './control-bar.module.scss';
import { Grid, Hidden } from "@material-ui/core";

const ControlBar = (props) => (
  <>
    <Hidden mdUp>
      <Grid container justify='space-evenly' className={props.isFed ? controlBarStyles.fedControlBar : controlBarStyles.controlBar}>
        {Children.map(props.children, (child) => {
          return <Grid className={controlBarStyles.child} item xs={2}>
                   {child}
                 </Grid>;
        })}
      </Grid>
    </Hidden>
    <Hidden smDown>
      <Grid container justify='flex-end' className={props.isFed ? controlBarStyles.fedControlBar : controlBarStyles.controlBar}>
        {Children.map(props.children, (child) => {
          return <Grid className={`${controlBarStyles.child} ${child.type === "h2" ? '' : controlBarStyles.rightAlign}`} item sm={child.type === "h2" ? 10 : 2}>
                   {child}
                 </Grid>;
        })}
      </Grid>
    </Hidden>
  </>
);


export default ControlBar;
