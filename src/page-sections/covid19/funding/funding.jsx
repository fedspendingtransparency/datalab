import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Grid } from '@material-ui/core';

import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import waffle from '../../../../static/images/waffle-placeholder.png'
import ModalReference from 'src/components/modal/modal'

export default function Funding(props) {

  const _data = useStaticQuery(graphql`
    query {
      allFundingAgencyAppropriationsCsv {
        nodes {
          Agency
        }
      },
      allFundingFederalAccountAppropriationsCsv(sort: {order: DESC, fields: Total_Budgetary_Authority}) {
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
    federalAccountsByAgency[item.fieldValue] = item.nodes;
  })

  console.log(federalAccountsByAgency);

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

      <div>Legend placeholder</div>

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

      <div>Legend 2 placeholder</div>

      <ModalReference ref={myModal} title={agencyName}>
          <svg width='800' height='600'>
          {Object.keys(federalAccountsByAgency).length > 0 && agencyName && federalAccountsByAgency[agencyName].map((account, key) => {
            const yPos = key * 30 + (key + 1) * 15;
            const width = account.Total_Budgetary_Authority / maxTotal * 100;
            return (<g key={key}>
                      <text x='0' y={yPos} font="16px sans-serif">{account.Account_Name} | {account.Total_Budgetary_Authority}</text>
                      <rect fill="lightblue" height='30' width={width} x='0' y={yPos}></rect>
                    </g>)
          })}
          </svg>
      </ModalReference>

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>);
}


