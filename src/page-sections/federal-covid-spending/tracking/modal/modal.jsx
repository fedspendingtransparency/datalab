 import React from 'react';
 import { graphql, useStaticQuery } from "gatsby"


export default function CovidModal(props) {
  const data = useStaticQuery(graphql`
    query {
      allSf133Viz3AgencyPopout20200506Csv {
        group(field: Agency) {
          fieldValue
          nodes {
            Account_Name
            Agency
            Amount_Obligated
            Amount_Outlaid
            Amount_Unobligated
            Percent_Obligated
            Percent_Outlaid
            Percent_Unobligated
            Total_Budgetary_Authority
          }
        }
      }
    }
	`);

  const agencies = data.allSf133Viz3AgencyPopout20200506Csv.group;
  const federalAccountsByAgency = {};


  agencies.forEach((item) => {
    federalAccountsByAgency[item.fieldValue] = item.nodes.sort(function(a, b){return b.Total_Budgetary_Authority - a.Total_Budgetary_Authority});
  })

  const content = Object.keys(federalAccountsByAgency).forEach(key => {
    console.log(key);
    if(key.indexOf(props.agency) > -1) { return federalAccountsByAgency[key]; }
  })

  console.log(content);

  return(<>{props.agency}</>)
}