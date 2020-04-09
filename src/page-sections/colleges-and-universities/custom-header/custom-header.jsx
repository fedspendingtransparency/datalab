import React from 'react';
import customHeaderStyles from './custom-header.module.scss';
import { Hidden } from '@material-ui/core';
import Toc from "../../../components/toc/toc"

const CustomHeader = (props) => (
  <>
    <Hidden mdDown>
      <div className={customHeaderStyles.bannerImage}
           role='image'
           aria-label="Explore The Federal Investment In Your Alma Mater">
      </div>
    </Hidden>

    <Hidden lgUp>
      <section className={customHeaderStyles.headerHero}>
        <div id={customHeaderStyles.banner}>
          <p className={customHeaderStyles.subtext}>
            {props.subtext}
          </p>
          <p className={customHeaderStyles.subblurb}>
            {props.subblurb}
          </p>
          <p className={customHeaderStyles.blurb}>
            {props.blurb.map(item => item)}
          </p>
        </div>
      </section>
    </Hidden>

    <section id={customHeaderStyles.toc}>
      <Toc sections={props.sectionToc} />
    </section>

  </>
);

export default CustomHeader;
