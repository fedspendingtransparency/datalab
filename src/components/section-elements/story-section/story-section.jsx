import React from "react"
import storySectionStyles from './story-section.module.scss'
import StorySectionHeading from "../story-section-heading/story-section-heading"
import { Grid } from '@material-ui/core';

function StorySection(props) {
  return (
    <Grid container justify="center" className={storySectionStyles.storySection}>
      <Grid item xs={12} xl={10}>
        <section id={`section-${props.header.anchor}`}>
          <StorySectionHeading
            header={props.header.header}
            number={props.header.number}
            title={props.header.subtext}
            teaser={props.header.sectionTeaser}
            blurb={props.header.introBlurb}
          />

          <Grid container justify="center">
            <Grid item xs={12}>
              <div className={storySectionStyles.alignLeft}>
                {props.children}
              </div>
            </Grid>
          </Grid>
        </section>
      </Grid>
    </Grid>
  );
}

export default StorySection;
