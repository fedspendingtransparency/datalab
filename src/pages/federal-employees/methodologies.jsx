import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';
import styles from '../../components/hwcta/hwcta.module.scss';
import SEO from "../../components/seo";

function FEHWCTA(props) {
  const title = 'WHO WORKS IN GOVERNMENT';

  const methodologies = [{
    content: <>
      <SEO
        title="Data Sources and Methodologies for Federal Employees | U.S. Treasury Data Lab"
        description="This analysis was conducted using federal obligations data from USAspending.gov and agency employment data made available by the Office of Personnel Management."
      />
      <p>
        We conducted this analysis using federal agency obligations data
        reported to USAspending.gov (which is available to the public) and
        agency employment data made available by the Office of Personnel
        Management (OPM) at FedScope.OPM.gov. We used personnel compensation
        obligations data for all CFO Act* agencies to identify the cost of
        personnel compensation for each agency <span className={styles.bold}>
        except</span> the Department of Defense (DOD) through the end of Q4 2017
        (DOD data is through Q3 of fiscal year 2017).
      </p>
      <p>
        The data we used excludes military compensation and benefits spending,
        such as housing allowances, health insurance, and retirement account
        contributions. Employee location and occupation data reflect the
        information made available by OPM for fiscal year 2017 in Fedscope as
        of October 2017. Employee information includes all full-time and other-
        than-full-time employees, reported to OPM.
      </p>
    </>
  }];

  const notes = [{
    content :
      <p>
        * The Chief Financial Officers (CFO) Act of 1993 established the CFO
        Council and the member agencies. This group of 24 agencies accounts for
        the vast majority of all government spending.
      </p>
  }];

  return (
    <HWCTA location={props.location} title={title} methodologies={methodologies} notes={notes}/>
  )
}

export default FEHWCTA;
