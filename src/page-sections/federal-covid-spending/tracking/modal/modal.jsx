 import React from 'react';
 import { graphql, useStaticQuery } from "gatsby"


export default function CovidModal(props) {
   // This should go in tracking/index

  const data = useStaticQuery(graphql`
    query {
      allCovid19ResponseViz3FunctionPopout20200519Csv {
        group(field: Function_Description) {
          fieldValue
          nodes {
            Account_Name
            Amount_Obligated
            Amount_Outlaid
            Amount_Obligated_Not_Outlaid
            Amount_Unobligated
            Function_Description
            Percent_Obligated
            Percent_Outlaid
            Percent_Unobligated
            Total_Budgetary_Resources
          }
        }
      }
    }
	`);

  const functions = data.allCovid19ResponseViz3FunctionPopout20200519Csv.group;
  const accountsByFunction = {};

  functions.forEach((item) => {
    console.log(item);
    accountsByFunction[item.fieldValue] = item.nodes;
  })

  console.log(accountsByFunction[props.functionDesc]);
  console.log(accountsByFunction);

  return(<>
    <h1>{props.functionDesc}</h1>
    {accountsByFunction[props.functionDesc].map(item => {
      return <p>{item.Account_Name}</p>
    })}
  </>)
}