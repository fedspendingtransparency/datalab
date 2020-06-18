import React from "react";
import numberFormatter from "src/utils/number-formatter";
import Bar from "../bars/bar";
import Grid from '@material-ui/core/Grid';
import styles from './modal.module.scss';

import LIcon from '../../../../svgs/federal-covid-spending/tracking/l-icon.svg';

export default function CovidModal(props) {

  function Content() {
    if(props.data) {
      return (
        <>
          {props.data.map((i, key) => {
            const _data = [{
              'amount': i.Amount_Outlaid,
              'percent': i.Percent_Outlaid
            }, {
              'amount': i.Amount_Obligated,
              'percent': i.Percent_Obligated_Not_Outlaid
            }, {
              'amount': i.Amount_Unobligated,
              'percent': i.Percent_Unobligated
            }];

            if (props.mobileTablet) {
              return (
                <Grid container key={key} className={styles.items} justify='center'>
                  <Grid item xs={10} className={styles.account}>{i.Account_Name}</Grid>
                  <Grid item xs={2}>
                    <div className={styles.amount}>
                      <span>{numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</span>
                    </div>
                  </Grid>
                </Grid>
              );
        } else {
          return (<div key={key} style={{paddingRight: '10px', paddingTop: '12px', paddingBottom: '12px'}}>
              <p style={{marginBottom: '0', marginTop: '0.5rem'}}>
                <span>{i.Loan_Program_Account === "Yes" ? <LIcon/>  : <></>} <b> {i.Account_Name}</b></span>
                <span>&nbsp;&nbsp;{numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</span></p>
              <Bar key={key}
                   data={_data}
                   isModal={true}
                   showDetails={true}
              />
                  </div>);
        }
        })}
              </>);


    }
  
    return <></>;

  }

  function ContentHeader () {
    if (props.mobileTablet) {
      return (
        <div style={{paddingRight: '8px'}}>
          <Bar data={props.barData}
            isModal={true}
            showDetails={true}
          />
          <Grid container className={styles.titles}>
            <Grid item xs={10}>Spending Account:</Grid>
            <Grid item xs={2}>Total Budget:</Grid>
          </Grid>
        </div>
      )
    }

    return <h2>Spending Account Breakdown within Agency</h2>;
  }

  return (
    <div style={{minWidth: window.innerWidth * .6, maxWidth: window.innerWidth * .9, overflowX: 'hidden'}}>
      <ContentHeader />
      <Content style={{overflowX: 'hidden'}}/>
    </div>
  );
}
