import React from 'react';
import pageFooterStyles from './page.module.scss';

import { Grid } from '@material-ui/core';
import DataLab from '../logos/datalab';
import Github from '../logos/github';
import Dataworld from '../logos/dataworld';
import Twitter from '../logos/twitter';
import Facebook from '../logos/facebook';
import LinkedIn from '../logos/linkedin';

/* record events in Google Analytics (later)
<script>
  function trackLinkClick(actionName) {
          window.Analytics.event({
              category: 'Footer - Click Link',
              action: actionName
      });
  }

  function leaveSiteLink(outbound) {
          document.querySelector('#leave-modal .redirect-modal__link a').href = outbound;
          document.querySelector('#leave-modal .redirect-modal__link a').innerHTML = outbound;
          document.getElementById('leave-modal').style.display = 'block';
  }
</script>
*/

export default class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateLogoWidth = () => {
    let width = 200;
    if (typeof window !== 'undefined') {
      width = '15%'
    }
    return width;
  }

  render = () =>
    <div className={pageFooterStyles.pageFooter}>
      <Grid container className={pageFooterStyles.content}>
        <Grid item xs={12} lg={2} className={pageFooterStyles.logo}>
          <a target="_blank" rel="noopener noreferrer" href='/'>
            <DataLab fillColor='#666' />
          </a>
        </Grid>
        <Grid item xs={12} lg={2} className={pageFooterStyles.ourSites}>
          <div>
            <div className={pageFooterStyles.title}>Our Sites</div>
            <a target="_blank" rel="noopener noreferrer" href='https://www.usaspending.gov/#/'>USASpending</a>
            <a target="_blank" rel="noopener noreferrer" href='http://fiscaldata.treasury.gov/'>Fiscal Data</a>
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className={pageFooterStyles.social}>
          <div className={pageFooterStyles.title}>Connect With Us</div>
          <p>
            To join our mailing list, send a blank email with no subject to:{' '}
            <a href='mailto: datalab@lists.fiscal.treasury.gov' rel='noopener noreferrer'>datalab@lists.fiscal.treasury.gov</a>
          </p>
          <div className={pageFooterStyles.title}>Join the Conversation</div>
          <p>
            Visit our <a href='https://usaspending-help.zendesk.com/hc/en-us/community/topics' target='_blank' rel='noopener noreferrer'>Community Page today.</a>
          </p>
          <div className={pageFooterStyles.contents}>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/fedspendingtransparency/datalab'><Github /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://data.world/usaspending'><Dataworld /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/usaspending'><Twitter /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/fiscalservice/'><Facebook /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/united-states-department-of-the-treasury-bureau-of-public-debt/'><LinkedIn /></a>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className={pageFooterStyles.title}>Help</div>
          <p>For general inquiries or questions on Data Lab activities or operations, please contact:
            <br /><br />
            E: <a href='mailto: media.relations@fiscal.treasury.gov?subject=Data Lab - Contact Us' rel='noopener noreferrer'>
              media.relations@fiscal.treasury.gov
            </a>
          </p>
        </Grid>
      </Grid>
    </div>
    ;
}
