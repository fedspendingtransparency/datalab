import React, { useState, useEffect } from "react"
import ControlBar from "src/components/control-bar/control-bar"
import Share from "src/components/share/share"
import Downloads from "src/components/section-elements/downloads/downloads"
import CloseIcon from '@material-ui/icons/Close'
import Desktop from 'src/svgs/federal-covid-spending/budget/Viz1-Desktop-Outline.svg'
import Mobile from 'src/svgs/federal-covid-spending/budget/Viz1-Mobile-outline.svg'
import Popup from 'src/svgs/federal-covid-spending/budget/Viz1-Pop-out.svg'
import variables from "src/styles/variables.scss"
import './budget.scss'


export default function Budget(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const title = 'Budget Functions under $2 B';

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {

    window.addEventListener('click', e => closePopup(e));
    window.addEventListener('resize', e => handleResize());
    window.addEventListener('keyup', e => onEsc(e));

    return () => {
      window.removeEventListener('resize', e => handleResize(e));
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
        .addEventListener('click', e => closePopup(e));
      document.getElementById('pop-up')
        .addEventListener('click', e => e.stopPropagation());
      document.getElementById('inner-title')
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
          .removeEventListener('click', e => closePopup(e));
        document.getElementById('pop-up')
          .removeEventListener('click', e => e.stopPropagation());
        document.getElementById('inner-title')
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
    if(!isOpen) {
      document.getElementById('close')
        .setAttribute('tabindex', '0');
      document.getElementById('pop-up')
        .classList
        .add('active');
      setIsOpen(true);
      addOverlay();
      e.stopPropagation();
    }
  }

  function closePopup(e) {
    if(isOpen) {
      document.getElementById('close')
        .removeAttribute('tabindex');
      document.getElementById('pop-up')
        .classList
        .remove('active');
      setIsOpen(false);
      removeOverlay();
      e.stopPropagation();
    }
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

  return (<>
    <h2 className="rd-viztitle">{props.section.viztitle}</h2>
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
        <div className="title">
          <div id="inner-title">{title}</div>
          <div id="close"><CloseIcon  /></div>
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
