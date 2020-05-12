import React, { useState } from 'react';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Share from 'src/components/share/share';

import { Switch } from '@material-ui/core';

const Tracking = (props) => {
  const [checked, toggleChecked] = useState(true);

  const handleToggle = (e) => {
    toggleChecked(e.target.checked)
  }
  
  return (
    <>
      <AccordionList title='Instructions'>
        <p>Actual instructions are larger than they appear</p>
      </AccordionList>

      <div>
        <span>Budget Function</span>
        <Switch checked={checked} onChange={handleToggle} color='default' />
        <span>Agency</span>
      </div>

      {checked ? <div>Agency</div> : <div>Budget Function</div>}

      <Share
        siteUrl={props.location.origin}
        pageUrl={props.location.pathname + '#' + props.sectionId}
        title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
        text={'Who watches the Watchmen? Anyone with HBO...'}
      />

      Look! Here's a chart...

      <Downloads
        href={''}
        date={'Flovember 1922'}
      />
    </>
  )
}

export default Tracking;
