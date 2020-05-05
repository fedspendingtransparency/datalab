import React from 'react';
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
      }
    }
  `);

  const agencies = _data.allFundingAgencyAppropriationsCsv.nodes;

  const myModal = React.createRef();

  const handleOpen = () => {
    if (myModal && myModal.current) {
      myModal.current.handleOpen();
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
            <Grid item xs={6} md={3} lg={2} key={`agency-${key}`} tabIndex='0' style={{'cursor': 'pointer'}} onClick={handleOpen}>
              <div style={{'height': '2.5rem'}}>{agency.Agency}</div>
              <img src={waffle} style={{'width': '100%'}} />
            </Grid>
            )
        })}
      </Grid>

      <div>Legend 2 placeholder</div>

      <ModalReference ref={myModal} />

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>);
}


