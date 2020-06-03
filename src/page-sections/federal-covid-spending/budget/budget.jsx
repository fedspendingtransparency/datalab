import React, { useState, useEffect } from "react";
import ControlBar from "src/components/control-bar/control-bar";
import Share from "src/components/share/share";
import Downloads from "src/components/section-elements/downloads/downloads";
import CloseIcon from '@material-ui/icons/Close';

import Desktop from 'src/svgs/federal-covid-spending/budget/viz1Desktop.svg';
import Mobile from 'src/svgs/federal-covid-spending/budget/viz1Mobile.svg';

import AccordionList from 'src/components/accordion-list/accordion-list';
import variables from "src/styles/variables.scss";
import './budget.scss';

export default function Budget(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const title = 'Budget Functions under $2 B';

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {

    window.addEventListener('resize', e => handleResize());


    return () => {
      window.removeEventListener('resize', e => handleResize(e));
    };

  });

  function handleResize() {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
  }

  function Chart() {
    if (windowWidth) {
      if (windowWidth >= parseInt(variables.lg)) {
        return <Desktop />;
      } else if (windowWidth >= parseInt(variables.md)) {
        return <Desktop />;
      } else {
        return <Mobile />;
      }
    } else {
      return <></>;
    }
  }

  return (<>
            <h2 className="rd-viztitle">{props.section.viztitle}</h2>
	    <AccordionList title='Instructions'>
	      <p>Actual instructions are larger than they appear</p>
	    </AccordionList>
            <ControlBar>
	     <Share
	       siteUrl={props.location.origin}
	       pageUrl={props.location.pathname + '#' + props.sectionId}
	       title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
	       text={'Who watches the Watchmen? Anyone with HBO...'}
               hoverColor='#1302d9'
	     />
            </ControlBar>

            <div className="chart-container">
              <Chart />
              <div id="pop-up">
                <div className="title">
                  <div id="inner-title">{title}</div>
                  <div id="close"><CloseIcon  /></div>
                </div>
              </div>
            </div>

            <Downloads
              href={'/data/federal-covid-spending/tracking/covid19_response_viz1_2020-05-21.csv'}
              date={'May 2020'}
            />
          </>);
}
