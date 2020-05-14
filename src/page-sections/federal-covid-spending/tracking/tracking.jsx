import React, { useState } from 'react';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import Share from 'src/components/share/share';
import Toggle from 'src/components/toggle/toggle';

import { faUniversity, faListAlt } from '@fortawesome/free-solid-svg-icons';

const Tracking = (props) => {
  const first = {
    name: 'Budget Function',
    icon: faListAlt
  }

  const second = {
    name: 'Agency',
    icon: faUniversity
  }

  const [checked, toggleChecked] = useState(false);

  const handleToggle = (e) => {
    toggleChecked(e.target.checked)
  }

  return (
    <>
      <AccordionList title='Instructions'>
        <p>Actual instructions are larger than they appear</p>
      </AccordionList>

      <Toggle
        first={first}
        second={second}
        checked={checked}
        handleToggle={handleToggle}
      />

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
