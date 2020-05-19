 import React from 'react';
 import { graphql, useStaticQuery } from "gatsby"
 import numberFormatter from "../../../../utils/number-formatter"
 import Bar from "../bar"


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

  return(<>
    <h2>Federal Account Breakdown within Budget Function</h2>
    {accountsByFunction[props.functionDesc].map((i, key) => {
        const _data = [{
          'amount': numberFormatter('dollars suffix', i.Amount_Outlaid),
          'percent': i.Percent_Outlaid
        }, {
          'amount': numberFormatter('dollars suffix', i.Amount_Obligated),
          'percent': i.Percent_Obligated
        }, {
          'amount': numberFormatter('dollars suffix', i.Amount_Unobligated),
          'percent': i.Percent_Unobligated
        }];
        return (<div style={{border: 'none !important', background: 'none !important'}}>
          <p style={{marginBottom: '-1rem'}}>{i.Account_Name} ({numberFormatter('dollars suffix', i.Total_Budgetary_Resources)})</p>
          <Bar key={key} data={_data} barLabel={i.Function_Description}
              total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
              narrow={true}
          />
        </div>)
    })}
  </>)
}