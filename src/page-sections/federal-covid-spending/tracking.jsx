import React from 'react';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Share from 'src/components/share/share';

export default class Tracking extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => <>

    <AccordionList title='Instructions'>
      <p>Actual instructions are larger than they appear</p>
    </AccordionList>

    <Share
      siteUrl={this.props.location.origin}
      pageUrl={this.props.location.pathname + '#' + this.props.sectionId}
      title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
      text={'Who watches the Watchmen? Anyone with HBO...'}
    />



    <Downloads
      href={''}
      date={'Flovember 1922'}
    />
  </>;
}