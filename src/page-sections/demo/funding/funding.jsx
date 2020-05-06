import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from '@material-ui/core';

import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import waffle from '../../../../static/images/waffle-placeholder.png'
import ModalReference from 'src/components/modal/modal'
import NumberFormatter from 'src/utils/number-formatter'
import './funding.scss'

export default function Funding(props) {

  const _data = useStaticQuery(graphql`
    query {
      allFundingAgencyAppropriationsCsv {
        nodes {
          Agency
        }
      },
      allFundingFederalAccountAppropriationsCsv {
        group(field: Agency) {
            fieldValue
            nodes {
              Agency
              Total_Budgetary_Authority
              federal_account_code
              Account_Name
            }
          }
        }
      }
  `);

  const agencies = _data.allFundingAgencyAppropriationsCsv.nodes;
  const federalAccounts = _data.allFundingFederalAccountAppropriationsCsv.group;
  const federalAccountsByAgency = {};

  federalAccounts.forEach((item) => {
    federalAccountsByAgency[item.fieldValue] = item.nodes.sort(function(a, b){return b.Total_Budgetary_Authority - a.Total_Budgetary_Authority});
  })

  const myModal = React.createRef();

  const [agencyName, setAgencyName] = useState(null);
  const [maxTotal, setMaxTotal] = useState(null);


  const handleOpen = (agency) => {
    setAgencyName(agency.Agency);
    setMaxTotal(federalAccountsByAgency[agency.Agency][0].Total_Budgetary_Authority);

    if (myModal && myModal.current) {
      myModal.current.handleOpen(agencyName);
    }
  };

  const BarChart = () => {

    const container = {
      overflowX: 'hidden',
      width: window.innerWidth * .7,
      marginRight: '20px'
    }

    const barContainerStyles = {
      marginBottom: '16px',
      width: window.innerWidth * .8,
    }

    const faStyles = {
      fontSize: '16px',
      margin: '0',
      lineHeight: '16px'
    }

    const amountStyles = {
      fontSize: '12px',
      margin: '0',
      lineHeight: '12px'
    }

    return (<div style={container}>
      <h2>Federal Account Breakdown in Agency</h2>
      {Object.keys(federalAccountsByAgency).length > 0 && agencyName && federalAccountsByAgency[agencyName].map((account, key) => {
        const width = account.Total_Budgetary_Authority / maxTotal;

        const barStyles = {
          width: window.innerWidth * .7 * width * .6,
          float: 'left',
          height: '2.5rem',
          backgroundColor: 'lightblue',
          marginRight: '8px'
        }

        return (<div className='barContainer' key={key} style={barContainerStyles}>
          <div style={barStyles}></div>
          <div className='text'>
            <p style={faStyles}>{account.Account_Name.substring(0, 100)} </p>
            <p style={amountStyles}>
              <span>{NumberFormatter('dollars suffix', account.Total_Budgetary_Authority)} </span>
              <span>({NumberFormatter('percent', width)})</span>
            </p>
          </div>
        </div>)
      })}
    </div>);
  }

  return (<>
      <h2 className='rd-viztitle'>{props.section.viztitle}</h2>
      <AccordionList title='Instructions'>
        <p>xxxxx</p>
        <ul>
          <li>xxxx</li>
          <li>xxxx</li>
          <li>xxxx</li>
        </ul>
      </AccordionList>

      <ControlBar>
        <Share
          siteUrl={props.location.origin}
          pageUrl={props.location.pathname + '#' + props.sectionId}
          title='xxxxx'
          text={`xxxxx`}
          hoverColor='#1302d9'
        />
      </ControlBar>

      <Grid container spacing={3}>
        {agencies.map((agency, key) => {
          return (
            <Grid item xs={6} md={3} lg={2} key={`agency-${key}`} tabIndex='0' style={{'cursor': 'pointer'}} onClick={e => handleOpen(agency)}>
              <div style={{'height': '2.5rem'}}>{agency.Agency}</div>
              <img src={waffle} style={{'width': '100%'}} />
            </Grid>
            )
        })}
      </Grid>

      <ModalReference ref={myModal} title={agencyName} maxWidth={false} maxHeight={true}>
        <BarChart />
      </ModalReference>

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>);
}


