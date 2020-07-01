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

  render = () =>
    <div className={pageFooterStyles.pageFooter}>
      <Grid container className={pageFooterStyles.content}>
        <Grid item xs={12} lg={3} className={pageFooterStyles.logo}>
          <DataLab fillColor='#666'/>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={pageFooterStyles.title}>Contact Us</div>
          <p>For general inquiries or questions on Data Lab activities or operations, please contact:
            <a href='mailto: usaspending.help@fiscal.treasury.gov?subject=Data Lab - Contact Us' rel='noopener noreferrer'>
              <br /><br />
              E: usaspending.help@fiscal.treasury.gov
            </a>
          </p>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={pageFooterStyles.title}>Mailing List</div>
          <p>
            To join our mailing list, send a blank email with no subject to:{' '}
            <a href='mailto: datalab@lists.fiscal.treasury.gov' rel='noopener noreferrer'>datalab@lists.fiscal.treasury.gov</a>
          </p>
          <div className={pageFooterStyles.title}>Join the Conversation</div>
          <p>
            Visit our <a href='https://usaspending-help.zendesk.com/hc/en-us/community/topics' target='_blank' rel='noopener noreferrer'>Community Page today.</a>
          </p>
        </Grid>
        <Grid item xs={12} lg={3} className={pageFooterStyles.social}>
          <div className={pageFooterStyles.contents}>
            <div className={pageFooterStyles.title}>Connect With Us</div>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/fedspendingtransparency/datalab'><Github /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://data.world/usaspending'><Dataworld /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/usaspending'><Twitter /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/fiscalservice/'><Facebook /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/united-states-department-of-the-treasury-bureau-of-public-debt/'><LinkedIn /></a>
          </div>
        </Grid>
      </Grid>
    </div>
    ;
}
