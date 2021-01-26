import React from 'react';

import Dendro from '../../components/visualizations/dendro/dendro';
import Downloads from '../../components/section-elements/downloads/downloads';

class FedAcctContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fiscalYearVal: 'fy19', // default fy19
    };
  };

  radioCheck = (event) => {
    this.setState({
      fiscalYearVal: event.target.value,
    });
  };

  fiscalYearCheck = () => {
    if (this.state.fiscalYearVal === 'fy19') return '/unstructured-data/federal-account-explorer/account_obligations_link_update_FY19Q3.csv';
    if (this.state.fiscalYearVal === 'fy18') return '/unstructured-data/federal-account-explorer/account_obligations_link_update_FY18.csv';
    if (this.state.fiscalYearVal === 'fy17') return '/unstructured-data/federal-account-explorer/account_obligations_link_update_FY17.csv';
    else return '';
  };

  render() {
    return <> <Dendro radioCheck={this.radioCheck}/>
             <Downloads
               href={this.fiscalYearCheck()}
               date={'July 2019'}
             />
           </>;

  };

};

export default FedAcctContainer;
