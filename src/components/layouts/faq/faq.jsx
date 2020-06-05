import styles from './faq.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Default from '../default/default';
import { Grid } from '@material-ui/core';
import MoreAnalyses from '../../more-analyses/more-analyses';
import MoreResources from '../../more-resources/more-resources';
import { FAQHeader } from '../../headers/headers';
import Share from "../../share/share";

const FaqLayout = (props) => {
  let header;

  if (!props.isCustomHeader) {
    header =
      <Grid container className={styles.header}>
        {props.heroImage ?
         <Grid container justify='center' direction='row'>
           <Grid item xs={12} className={styles.heroImage}>
             {props.heroImage}
           </Grid>
         </Grid>
         : ''}
        <Grid container>
          <Grid item xs={12} sm={11} className={styles.share}>
            <Share location={props.location}/>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={11} md={10} xl={8}>
            <div className={styles.headerHero} >
              <h1 className={styles.title}>
                {props.title}
              </h1>
              <div className={styles.introSentence}>
                {props.introSentence}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>;
  }


  return <Default>
     <FAQHeader />

     <div className={styles.faqPage}>
       {header}

       <Grid container justify='center' className={styles.childrenContainer}>
         <Grid item xs={11} md={10} xl={8}>
           {props.children}
         </Grid>
       </Grid>

       <Grid container justify='center'>
         <Grid item xs={11} md={10}>
           {props.useMoreResources ? <MoreResources /> : <MoreAnalyses />}
         </Grid>         
       </Grid>
     </div>

   </Default>
};

export default FaqLayout;

FaqLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

