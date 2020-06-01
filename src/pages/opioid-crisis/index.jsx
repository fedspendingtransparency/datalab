import React from 'react';
import './opioid-crisis.module.scss';

import SectionOne from '../../page-sections/opioid-crisis/sectionOne/sectionOne';
import SectionTwo from '../../page-sections/opioid-crisis/sectionTwo/sectionTwo';
import SectionThree from '../../page-sections/opioid-crisis/sectionThree/sectionThree';
import SectionFour from '../../page-sections/opioid-crisis/sectionFour/sectionFour';
import SectionFive from '../../page-sections/opioid-crisis/sectionFive/sectionFive';

import { CustomOpioidHeader, CustomOpioidTocHeader } from '../../components/headers/customHeader';
import SEO from '../../components/seo';
import StoryLayout from '../../components/layouts/story/story';
import { Grid } from "@material-ui/core";

/* 
  For story templates we need to pass different colors.
  Keeps TOC and other page dynamic with header component

  TODO: remove the 'page-section' custom header components and port that to
  dynamic component for all story templates (C&U...) 
*/

const primaryColors = {opioidOrange: '#FC5A20'};

export default class OpioidCrisisPage extends React.Component {
  render = () =>
    <StoryLayout isCustomHeader={true}
                 hwctaLink={this.props.location.pathname + '/methodologies'}>
      <SEO title='Opioid Crisis' keywords={[`gatsby`, `application`, `react`]} />


      <CustomOpioidHeader
        subtext={'opioid crisis'}
        subblurb={['opioid crisis opioid crisis opioid crisis']}
        blurb={['its a crisis ahh its a crisis ahh placeholder placeholder placeholder']}
      />

      <CustomOpioidTocHeader
        colors={primaryColors}
        sections={
          [{
            section: 'one',
            number: '01',
            subtext: 'The Crisis',
            blurb: 'HOW DOES THE OPIOID CRISIS LOOK ACROSS THE NATION?',
          },
           {
             section: 'two',
             number: '02',
             subtext: 'Societal Effects',
             blurb: 'HOW DOES THE OPIOID CRISIS AFFECT EVERYDAY LIFE?',
           },
           {
             section: 'three',
             number: '03',
             subtext: 'Major Players',
             blurb: 'WHAT ORGANIZATIONS RECIEVED THE MOST FUNDING TO FIGHT THE OPIOID CRISIS?',
           },
           {
             section: 'four',
             number: '04',
             subtext: 'A State Response',
             blurb: 'HOW A STATE RESPONDS TO THE OPIOID CRISIS?',
           },
           {
             section: 'five',
             number: '05',
             subtext: 'Mitigating and Solving?',
             blurb: 'WHERE TO GET TREATMENT?',
           },
          ]}
      />

      <Grid container justify='center'>
        <Grid item xs={10}>
          <SectionOne/>
        </Grid>
        <Grid item xs={10}>
          <SectionTwo/>
        </Grid>
        <Grid item xs={10}>
          <SectionThree/>
        </Grid>
        <Grid item xs={10}>
          <SectionFour/>
        </Grid>
        <Grid item xs={10}>
          <SectionFive/>
        </Grid>
      </Grid>

    </StoryLayout>
}
