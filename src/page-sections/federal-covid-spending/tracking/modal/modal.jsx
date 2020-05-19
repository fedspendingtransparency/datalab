 import React from 'react';
 import { graphql, useStaticQuery } from "gatsby"


export default function CovidModal(props) {
  const data = useStaticQuery(graphql`
    query {
      allSf133Viz3AgencyPopout20200506Csv {
        group(field: Agency) {
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
    console.log(item.nodes[0]['Agency'])
    // federalAccountsByAgency[item.nodes[0]['Agency']] = item.nodes;
  })

  console.log(federalAccountsByAgency);

  return(<>{props.agency}</>)
}