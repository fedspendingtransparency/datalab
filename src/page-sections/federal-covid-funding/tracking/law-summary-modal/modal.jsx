import React from 'react';
import ModalReference from 'src/components/modal/modal';
import styles from './modal.module.scss';
import { Grid } from '@material-ui/core';

import Medical from 'src/svgs/federal-covid-spending/tracking/law-summary-modal/medical.svg';
import Individuals from 'src/svgs/federal-covid-spending/tracking/law-summary-modal/individuals.svg';
import Government from 'src/svgs/federal-covid-spending/tracking/law-summary-modal/government.svg';

const LawSummaryModal = ({ phase, isOpen, closeModal }) => {
  const phases = {
    '1': {
      title: 'Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020',
      enactedDate: 'March 6, 2020',
      funding: '$7 BILLION',
      content: [
        {
          title: 'Medical Care & Research',
          bulletPoints: [
            'Over $5B in medical care and research including development of vaccines and therapies',
            'Funding for epidemiology, infectious disease control and mitigation'
          ],
          icon: <Medical />
        },
        {
          title: 'Business, Government, and Institutions',
          bulletPoints: [
            'Emergency preparedness for the Department of State consular programs',
            '$1B in economic assistance to other countries'
          ],
          icon: <Government />
        },
      ],
    },
    '2': {
      title: 'Families First Coronavirus Response Act',
      enactedDate: 'March 18, 2020',
      funding: '$14 BILLION',
      content: [
        {
          title: 'Medical Care & Research',
          bulletPoints: [
            'Over $1B in medical care funding for the Defense Health Program, Veterans Health Administration, and Indian Health Services, with the majority of funds going to the  Public Health and Social Services Emergency Fund, for reimbursements to providers and hospitals',
            'Funding for epidemiology, infectious disease control and mitigation'
          ],
          icon: <Medical />
        },
        {
          title: 'Individuals',
          bulletPoints: [
            'Food and nutrition assistance programs',
            'Provided funding for states to waive the unemployment waiting period and to cover the cost of extending unemployment benefits'
          ],
          icon: <Individuals />
        },
        {
          title: 'Business, Government, and Institutions',
          bulletPoints: [
            'Funding provided to the IRS to implement new tax credits for individuals and businesses',
          ],
          icon: <Government />
        },
      ]
    },
    '3': {
      title: 'Coronavirus Aid, Relief, and Economic Security Act (CARES ACT)',
      enactedDate: 'March 27, 2020',
      funding: '$2.07 TRILLION',
      content: [
        {
          title: 'Medical Care & Research',
          bulletPoints: [
            'More than $125B allocated to medical care and research with large portion going to the Public Health and Social Services Emergency Fund, for reimbursements to providers and hospitals',
            'Over $25B in funding was also provided for the development of vaccines and therapies, to purchase supplies for the Strategic National Stockpile, and to government agencies including CDC, NIH, and other HHS agencies, as well as Veterans Affairs, and military health programs for the response to COVID-19'
          ],
          icon: <Medical />
        },
        {
          title: 'Individuals',
          bulletPoints: [
            'Funding for programs that directly assist individuals such as rental assistance programs through HUD and supplemental nutrition programs through USDA',
            'Expanded unemployment benefits including an increase in the weekly benefit amount by $600 through July 31, 2020 and extended eligibility requirements',
            'Individuals tax credits of $1,200 per qualifying adult and $500 per dependent child ',
          ],
          icon: <Individuals />
        },
        {
          title: 'Business, Government, and Institutions',
          bulletPoints: [
            '$40B in new grants to states, local, tribal, and territorial governments for the response to the pandemic through FEMA',
            'Grants and assistance for education, airports and transit systems, and economic development',
            'Loans and loan guarantees for businesses, including funding for the Paycheck Protection Program (PPP) and to expand other Small Business Administration (SBA) loan programs',
            'Approximately $500B appropriated to Treasury for direct loans, loan guarantees, or other support for various businesses, including airlines and businesses critical to national security',
          ],
          icon: <Government />
        },
      ],
    },
    '3.5': {
      title: 'Paycheck Protection Program and Health Care Enhancement Act',
      enactedDate: 'April 24, 2020',
      funding: '$483 BILLION',
      content: [
        {
          title: 'Medical Care & Research',
          bulletPoints: [
            'An additional $100B allocated to medical care and research with large portion going to the Public Health and Social Services Emergency Fund',
          ],
          icon: <Medical />
        },
        {
          title: 'Business, Government, and Institutions',
          bulletPoints: [
            'Additional $62B for EIDL loans and grants, and more than $300B for the PPP',
          ],
          icon: <Government />
        },
      ]
    },
  }

  const title = (
    <div className={styles.title}>
      PHASE {phase}: {phases[phase].title}
      {' '}
      <span className={styles.enactedDate}>
        (Enacted {phases[phase].enactedDate})
      </span>
    </div>
  )

  return (
    <ModalReference
      open={isOpen}
      close={closeModal}
      title={title}
      paperStyle={{ width: 554 }}
      contentStyle={{ borderTop: 'solid 1px #eeeeee' }}
      maxHeight
    >
      <Grid container className={styles.contentContainer}>
        <Grid item xs={12} className={styles.subtitle}>
          NEW AGENCY FUNDING ({phases[phase].funding}):
        </Grid>
        {phases[phase].content.map((c) => <>
          <Grid item xs={3} className={styles.icon}>
            {c.icon}
          </Grid>
          <Grid item xs={9}>
            <div className={styles.bulletPointTitle}>{c.title}</div>
            <ul>
              {c.bulletPoints.map((point) => <li>{point}</li>)}
            </ul>
          </Grid>
        </>)}
        <Grid item xs={12} className={styles.footnote}>
          Download our raw data below to see the detailed funding breakdown by agency, budget function, and federal account.
        </Grid>
      </Grid>
    </ModalReference>
  );
}

export default LawSummaryModal;