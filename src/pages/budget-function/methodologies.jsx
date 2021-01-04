import React from "react"
import HWCTA from '../../components/hwcta/hwcta';
import SEO from "../../components/seo";

function BFHWCTA(props) {
  const title = 'BUDGET FUNCTION';


  const methodologies = [{
    content: <>
      <SEO
          title="Data Sources and Methodologies for Budget Function | U.S. Treasury Data Lab"
          description="This analysis was conducted using agency account obligation data reported to USAspending.gov."
      />
      <p>
        This analysis was conducted using agency account obligation data reported to USAspending.gov, which is available
        to the public. Each reported account is aligned to a single Budget Function and is further broken out by the dollars
        obligated under each Object Class (data can be found via the TAS/categories endpoint within the DATA Act API).
      </p>
      <p>
        Summarizing across all agency accounts can provide the total dollars obligated under each unique combination of
        Budget Function and Object Class which populates the visualization above. The data used in this tool was pulled
        as of December 2017.
      </p>
    </>
  }];

  return (
    <HWCTA location={props.location} title={title} methodologies={methodologies}>
    </HWCTA>
  )
}

export default BFHWCTA;
