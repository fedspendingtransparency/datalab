import React from "react"
import AfgData from "../../../static/americas-finance-guide/_data/object_mapping.yml"

const GdpTemplate = () => (
  <>
    Gross domestic product (GDP) figures come from the <a href={AfgData.bea_gdp.value} rel="noopener noreferrer" target="_blank">Bureau of Economic Analysis (BEA)</a>. GDP data is current as of {AfgData.gdp_date.value}, and is seasonally adjusted at an annual rate to show expected GDP for the year. For more information about how GDP is calculated, visit the <a href={AfgData.gdp_nipa_url.value} rel="noopener noreferrer" target="_blank">Bureau of Economic Analysis' National Income and Product Account Handbook</a>.
  </>
)

export default GdpTemplate;
