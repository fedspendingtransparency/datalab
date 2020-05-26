 import React from "react"
 import numberFormatter from "src/utils/number-formatter"
 import Bar from "./bars/bar"

export default function CovidModal(props) {

  // This should go in tracking/index
  function Content() {
    if(props.data) {
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

        if (props.isMobile) {
          return (<div key={key}>
            <p>{props.mode === 'Agency' ? i.Agency : i.Function_Description}</p>
            <p>{i.Account_Name} {numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</p>
          </div>)

        } else {
          return (<div key={key} style={{paddingRight: '10px'}}>
            <p style={{marginBottom: '0', marginTop: '0.5rem', fontWeight: 'bold'}}>{i.Account_Name} {numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</p>

            <Bar key={key}
                 data={_data}
                 narrow={true}
                 tablet={props.tablet}
            />
          </div>)

        }
      }))
    } else {
      return <></>
    }

  }

  return(<div style={{maxWidth: '700px'}}>
    <h2>Spending Account Breakdown within {props.mode}</h2>
    <Content />
  </div>)
}