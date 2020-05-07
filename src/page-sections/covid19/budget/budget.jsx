import React, { useState, useEffect } from "react"
import variables from "src/styles/variables.scss"
import Desktop from 'src/svgs/covid19/Viz1-Desktop-Outline.svg'
import Tablet from 'src/svgs/covid19/Viz1-Tablet-Outline.svg'
import Mobile from 'src/svgs/covid19/Viz1-Mobile-Outline.svg'
import Popup from 'src/svgs/covid19/Viz1-Pop-out.svg'
import './budget.scss'
import AccordionList from "../../../components/accordion-list/accordion-list"
import ControlBar from "../../../components/control-bar/control-bar"
import Share from "../../../components/share/share"
import Downloads from "../../../components/section-elements/downloads/downloads"
import tooltipStyles from 'src/components/tooltip/tooltip.module.scss'
import CloseIcon from '@material-ui/icons/Close';


export default function Budget(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [device, setDevice] = useState('desktop');
  // add the image
  // change the image at

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', function() {
      closePopup();
    });

    document.getElementById('Less-than-$2-B').addEventListener('click', e => togglePopup(e));
    // window.addEventListener('keyup', e => onEsc(e));

    document.getElementById('covid19-pop-up').addEventListener('click', function(e) {
      e.stopPropagation();
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      document.getElementById('Less-than-$2-B').removeEventListener('click', function() {
        console.log('click')
      })

    }
  });

  function togglePopup(e) {
    e.stopPropagation();
    // save is open as state
    const isOpen = document.getElementsByClassName('active');
    if(isOpen.length > 0) {
      document.getElementById('pop-up').classList.remove('active');
    } else {
      document.getElementById('pop-up').classList.add('active');
    }
  }

  function closePopup() {
    document.getElementById('pop-up').classList.remove('active');
  }

  function handleResize() {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');

    if (windowWidth) {
      if (windowWidth >= parseInt(variables.lg)) {
        setDevice('desktop');

      } else if (windowWidth >= parseInt(variables.md)) {
        setDevice('tablet');

      } else {
        setDevice('mobile');

      }
    }
  }

  function onKeyup(e) {
    if(e.keyCode === 13) {
      togglePopup();
    }
  }

  function Chart() {
    switch(device) {
      case 'tablet':
        return <Tablet />
      case 'mobile':
        return <Mobile/>
      default:
        return <Desktop/>
    }
  }

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
        <div className={tooltipStyles.title} onClick={e => togglePopup(e)} onKeyUp={e => onKeyup(e)}>Blah blah<CloseIcon  /></div>
        <Popup />
      </div>
    </div>

    <Downloads
      href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
      date={'December 2019'}
    />
  </>);
}
