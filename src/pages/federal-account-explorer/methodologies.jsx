import React from "react"
import HWCTA from '../../components/hwcta/hwcta';
import SEO from "../../components/seo";

function FEHWCTA(props) {
  const title = 'FEDERAL ACCOUNT EXPLORER';

  const methodologies = [{
    content: <>
      <SEO
          title="Data Sources and Methodologies for Federal Account Explorer | U.S. Treasury Data Lab"
          description="This analysis organizes the spending data reported to USAspending.gov in a way that reflects the structure of the federal government."
      />
      <p>
        We conducted this analysis by organizing the spending data reported to
        USAspending.gov in a way that reflects the structure of the federal
        government. To do this, we matched federal accounts with the Office of
        Management and Budget's (OMB's) Master Account File, which lists agencies
        and their Treasury accounts as presented in the government-wide budget.
        We based this analysis on File A information reported to USAspending.gov.
        The diagram indicates agencies that don't have sub-agencies; these
        agencies continue directly to the federal accounts branch. We used OMB's
        sub-agency taxonomy, in which DOD sub-agencies appear more as functional
        accounts than sub-agencies.
      </p>
      <p>
        The data reflects federal account balances and obligations through the
        end of Fiscal Year 2019. The data used in this tool was updated as of
        November 2019.
      </p>
    </>
  }];

  return (
    <HWCTA location={props.location} title={title} methodologies={methodologies}/>
  )
}

export default FEHWCTA;
