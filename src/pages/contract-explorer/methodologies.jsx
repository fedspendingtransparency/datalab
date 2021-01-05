import React from "react"
import HWCTA from '../../components/hwcta/hwcta';
import SEO from "../../components/seo";

function CEHWCTA(props) {
  const title = 'CONTRACT EXPLORER';

  const dataSources = [{
    content : <p>
      We conducted this analysis using agency contract award data for FY 2017,
      which agencies report to USAspending.gov (and which is publicly available).
      Each reported contract includes information about the agency and sub-agency
      that awarded the contract, the contract recipient, and a Product and Service
      Code, which indicates the goods or services delivered as a result of the contract.
    </p>
  }];
  const methodologies = [{
    content: <>
      <SEO
          title="Data Sources and Methodologies for Contract Explorer | U.S. Treasury Data Lab"
          description="This analysis was conducted using publicly available agency contract award data reported to USAspending.gov."
      />
      <p>
        We added up obligation amounts for every combination of contractor,
        sub-agency, and agency so that we could show the total dollars awarded
        to a particular contractor depending on the awarding agency, or for a
        government-wide view of the contractor regardless of awarding agency.
        To reduce the number of smaller contractors displayed in the visualization,
        we grouped contracts under $1 million into an "Other" category. We also
        added state data to indicate the recipient's location. By summarizing
        the contract award data using these attributes, we created a nested
        dataset that drives the information in the visualization above. The data
        used in this tool was updated as of January 2018.
      </p>
      <p>
        In order to address a discrepancy in how contractors were named in the
        data, we removed special characters using regular expressions, and
        matched contractors by their base names. We then identified contractors
        with different names but the same "Parent DUNS" and matched them again.
        Finally, we manually made changes to some of the largest contractors in
        government, to ensure that different variants of name and "Parent DUNS"
        which properly represented the same company were joined together.
      </p>
    </>
  }];

  const notes = [{
    content :
      <p>
        The total amount represents the dollar value awarded during the
        specified period, including adjustments made by contract modifications.
      </p>
  }];

  return (
    <HWCTA location={props.location} title={title} dataSources={dataSources} methodologies={methodologies} notes={notes}/>
  )
}

export default CEHWCTA;
