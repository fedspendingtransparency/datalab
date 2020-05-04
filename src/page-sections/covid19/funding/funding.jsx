import React from 'react';
import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import { graphql, useStaticQuery } from "gatsby"

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

      <p>Legend</p>

      {agencies.map((agency, key) => {
        return (<p key={key}>Waffle: {agency.Agency}</p>)
      })}
      
      <p>Legend 2</p>

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>);
}


