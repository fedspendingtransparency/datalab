 import React from "react"
 import numberFormatter from "src/utils/number-formatter"
 import Bar from "../bars/bar"
 import Grid from '@material-ui/core/Grid';
 import styles from './modal.module.scss';

export default function CovidModal(props) {

  function Content() {


    if(props.data) {
      return (<>
        {props.data.map((i, key) => {
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

        if (props.mobile) {
          return(<Grid container key={key} className={styles.items} justify='center'>
              <Grid item xs={10} className={styles.account}>{i.Account_Name}</Grid>
              <Grid item xs={2}>
                <div className={styles.amount}>
                  <span>{numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</span>
                </div>
              </Grid>
            </Grid>)

        } else {
          return (<>
            <div key={key} style={{paddingRight: '10px'}}>
              <p style={{marginBottom: '0', marginTop: '0.5rem', fontWeight: 'bold'}}>
                {i.Account_Name} {numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</p>
              <Bar key={key}
                   data={_data}
                   isModal={true}
                   showDetails={true}
              />
            </div>
          </>)
        }
        })}
      </>)

    } else {
      return <></>
    }

  }

  function ContentHeader () {
    if(props.mobile) {
      return <div style={{paddingRight: '8px'}}>
          <Bar data={props.barData}
               isModal={true}
               showDetails={true}
           />
          <Grid container className={styles.titles}>
            <Grid item xs={10}>Spending Account:</Grid>
            <Grid item xs={2}>Total Budget:</Grid>
          </Grid>
        </div>
    } else {
      return <h2>Spending Account Breakdown within Agency</h2>
    }
  }
  return(<div style={{maxWidth: '700px'}}>
    <ContentHeader />
    <Content />
  </div>)
}