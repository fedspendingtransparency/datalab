import React, { useState, useEffect } from "react"
import variables from "src/styles/variables.scss"
import Desktop from 'src/svgs/covid19/budget/Viz1-Desktop-Outline.svg'
import Tablet from 'src/svgs/covid19/budget/Viz1-Tablet-Outline.svg'
import Mobile from 'src/svgs/covid19/budget/Viz1-Mobile-Outline.svg'
import Popup from 'src/svgs/covid19/budget/Viz1-Pop-out.svg'
import './budget.scss'
import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import CloseIcon from '@material-ui/icons/Close'


export default function Budget(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [device, setDevice] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {

    window.addEventListener('click', e => closePopup(e));
    window.addEventListener('resize', handleResize);
    window.addEventListener('keyup', e => onEsc(e));

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', e => closePopup(e));
      window.removeEventListener('keyup', e => onEsc(e));
    }

  })

  function handleResize() {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
  }

  useEffect(() => {
    if(windowWidth) {

      document.getElementById('Hover-Rectangle')
        .addEventListener('click', e => togglePopup(e));
      document.getElementById('close')
        .addEventListener('click', e => togglePopup(e));
      document.getElementById('pop-up')
        .addEventListener('click', e => e.stopPropagation());
      document.getElementById('innerTitle')
        .addEventListener('click', e => e.stopPropagation());


      document.getElementById('Hover-Rectangle')
        .addEventListener('mouseover', e => addOverlay());

      document.getElementById('Hover-Rectangle')
        .addEventListener('mouseout', function(e) {
          if (!isOpen) removeOverlay();
        });

      document.getElementById('close')
        .addEventListener('keyup', e => onEnter(e));
      document.getElementById('Hover-Rectangle')
        .addEventListener('keyup', e => addOverlay());
      document.getElementById('Hover-Rectangle')
        .addEventListener('keyup', e => onEnter(e));
    }

    return () => {
      if (windowWidth) {
        document.getElementById('Hover-Rectangle')
          .removeEventListener('click', e => togglePopup(e));
        document.getElementById('close')
          .removeEventListener('click', e => togglePopup(e));
        document.getElementById('pop-up')
          .removeEventListener('click', e => e.stopPropagation());
        document.getElementById('innerTitle')
          .removeEventListener('click', e => e.stopPropagation());

        document.getElementById('Hover-Rectangle')
          .removeEventListener('mouseover', e => addOverlay());

        document.getElementById('Hover-Rectangle')
          .removeEventListener('mouseout', function(e) {
            if (!isOpen) removeOverlay();
          });

        document.getElementById('close')
          .removeEventListener('keyup', e => onEnterClose(e));
        document.getElementById('Hover-Rectangle')
          .removeEventListener('mouseover', e => addOverlay());
      }
    }
  });

  function addOverlay() {
    document.getElementById('Hover-Rectangle').setAttribute('fill-opacity', '.12')
  }

  function removeOverlay() {
    document.getElementById('Hover-Rectangle').setAttribute('fill-opacity', '0.0')
  }

  function togglePopup(e) {
    isOpen ? closePopup(e) : openPopup(e);
  }

  function openPopup(e) {
    document.getElementById('close').setAttribute('tabindex', '0');
    document.getElementById('pop-up').classList.add('active');
    setIsOpen(true);
    addOverlay();
    e.stopPropagation();
  }

  function closePopup(e) {
    document.getElementById('close').removeAttribute('tabindex');
    document.getElementById('pop-up').classList.remove('active');
    setIsOpen(false);
    removeOverlay();
    e.stopPropagation();
  }

  function onEsc(e) {
    if(isOpen && e.keyCode === 27) {
      closePopup(e);
    }
  }

  function onEnterClose(e) {
    if(isOpen && e.keyCode === 13) {
      closePopup(e);
    }
  }

  function onEnter(e) {
    if(e.keyCode === 13) {
      togglePopup(e);
    }
  }

  function Chart() {
    if (windowWidth) {
      if (windowWidth >= parseInt(variables.lg)) {
        return <Desktop />
      } else if (windowWidth >= parseInt(variables.md)) {
        return <Desktop />
      } else {
        return <Mobile />
      }
    } else {
      return <></>
    }
  }

  const title = 'Budget Functions under $2 B';

  return (<>
    <h2 className='rd-viztitle'>{props.section.viztitle}</h2>
    <AccordionList title='Instructions'>
      <p>In this visualization, categories are represented by icons.</p>
      <ul>
        <li>Click or tap on an icon to see the category name, total dollars contracted for this category, and the percentage this total accounts for within R&D contract spending</li>
        <li>To exit the pop-up, click or tap the X</li>
      </ul>
    </AccordionList>

    <ControlBar>
      <Share
        siteUrl={props.location.origin}
        pageUrl={props.location.pathname + '#' + props.sectionId}
        title='Data Lab - R&D in Contract Spending - U.S. Treasury'
        text={`What do agriculture, energy, and national defense all have in common? They’re all areas where the government spent dollars on R&D in 2019! Check out the latest analysis at #DataLab to learn more! #Transparency #Research`}
        hoverColor='#1302d9'
      />
    </ControlBar>

    <div className="chart-container">
      <Chart />
      <div id="pop-up">
        <div className='title'>
          <div id='innerTitle'>{title}</div>
          <div id='close'><CloseIcon  /></div>
        </div>
        <Popup />
      </div>
    </div>

    <Downloads
      href={''}
      date={'May 2020'}
    />
  </>);
}
