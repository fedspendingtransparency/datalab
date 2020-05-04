import React from 'react';
import AccordionList from "../../components/accordion-list/accordion-list"
import ControlBar from "../../components/control-bar/control-bar"
import Share from "../../components/share/share"
import Downloads from "../../components/section-elements/downloads/downloads"

export default class Funding extends React.Component {
  constructor(props) {
    super(props);
  }

  render = (props) => <>
      <h2 className='rd-viztitle'>{this.props.section.viztitle}</h2>
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
          siteUrl={this.props.location.origin}
          pageUrl={this.props.location.pathname + '#' + this.props.sectionId}
          title='xxxxx'
          text={`xxxxx`}
          hoverColor='#1302d9'
        />
      </ControlBar>

      <p>Legend</p>
    
      <p>Legend 2</p>

      <Downloads
        href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
        date={'December 2019'}
      />

  </>;
}