 import React, { useEffect, useState } from "react"
 import { graphql, useStaticQuery } from "gatsby"
 import numberFormatter from "src/utils/number-formatter"
 import Bar from "../bar"

export default function CovidModal(props) {
  console.log(props);
  // This should go in tracking/index
  function Content() {
    return (props.data.map((i, key) => {
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

      if(props.isMobile) {
        return(<div key={key}>
          <p>{props.mode === 'Agency' ? i.Agency : i.Function_Description}</p>
          <p>{i.Account_Name} ({numberFormatter('dollars suffix', i.Total_Budgetary_Resources)})</p>
        </div>)

      } else {
        return (<div key={key}>
          <p style={{ marginBottom: '-1rem' }}>{i.Account_Name} ({numberFormatter('dollars suffix', i.Total_Budgetary_Resources)})</p>

          <Bar key={key} data={_data} barLabel={props.mode === 'Agency' ? i.Agency : i.Function_Description}
               total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
               narrow={true}
          />
        </div>)

      }
    }))

  }

  return(<div style={{maxWidth: '700px'}}>
    <h2>Federal Account Breakdown within {props.mode}</h2>
    <Content />
  </div>)
}