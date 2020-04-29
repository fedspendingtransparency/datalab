import React, { useEffect, useState, useRef } from "react"
import './categories.scss';
import 'src/styles/index.scss';
import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import data from '../../../../static/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318_with_keys.csv';
import Tooltip from "src/components/popover/tooltip";
import numberFormatter from 'src/utils/number-formatter';
import variables from 'src/styles/variables.scss';
import Desktop from '../../../svgs/rd-and-contracting/categories/desktop.svg';
import Tablet from '../../../svgs/rd-and-contracting/categories/tablet.svg';
import Mobile from '../../../svgs/rd-and-contracting/categories/mobile.svg';

export default function Categories(props) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [device, setDevice] = useState('desktop');
  const [tooltipData, setData] = useState({});

  useEffect(() => {
    let items = {};
    data.map((item, key) => {
      items[item.keys] = {
        id: key,
        title: item.description,
        rows: [
          { "Obligation": numberFormatter('dollars suffix', item.obligations) },
          { "Percentage": numberFormatter('percent', Math.abs(item.percents)) }
        ],
        tooltipRef: React.createRef()
      }
    });

    setData(items);
  }, []);

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

  function onKeydown(e, key) {
    if (e.keyCode === 13) {
      onFocus(e, key);
    }
  }

  function onFocus(e, key) {
    const el = e.currentTarget.getElementsByTagName('circle')[0];
    const item = tooltipData[key];

    el.setAttribute('fill', variables.rdBlue)
    el.setAttribute('fill-opacity', '.12')
    el.setAttribute('stroke', variables.rdBlue)
    el.setAttribute('aria-haspopup', true)
    el.setAttribute('aria-owns', isOpen(item.id, item.tooltipRef) ? "mouse-over-popover" : undefined);


    onPopoverOpen(e, item.id, item.tooltipRef);
  }

  function onBlur(e, key) {
    const el = e.currentTarget.getElementsByTagName('circle')[0];
    const item = tooltipData[key];

    el.setAttribute('fill', 'white')
    el.setAttribute('fill-opacity', '1')
    el.setAttribute('stroke', '#555555')

    onPopoverClose(item.tooltipRef);
  }

  useEffect(() => {
    handleResize();

    const groups = document.getElementsByClassName('category-icon');

    for (let i = 0; i < groups.length; i++) {
      groups[i].setAttribute('autoFocus', 'true');
    }

    Object.keys(tooltipData)
      .forEach((item) => {
        if(typeof document !== 'undefined') {
          const el = document.getElementById(item);
          el.setAttribute('tabindex', '0');
          el.addEventListener('mouseover', e => onFocus(e, item));
          el.addEventListener('keyup', e => onKeydown(e, item));
          el.addEventListener('click', e => onFocus(e, item));
          el.addEventListener('mouseout', e => onBlur(e, item));
        }
      });

    if(typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return _ => {
      Object.keys(tooltipData)
        .forEach((item) => {
          if(typeof document !== 'undefined') {
            const el = document.getElementById(item);

            el.removeEventListener('mouseover', e => onFocus(e, item));
            el.removeEventListener('keyup', e => onFocus(e, item));
            el.removeEventListener('click', e => onFocus(e, item));
            el.removeEventListener('mouseout', e => onBlur(e, item));
          }

        });

      if(typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
      }
    };
  });

  useEffect(() => {
    if(typeof document !== 'undefined') {
      const svg = document.getElementsByTagName('svg')[0];
      svg.setAttribute('id', 'vizSvg');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-labelledby', 'desc');
      svg.setAttribute('desc', altText);
    }

  });

  function onPopoverOpen(event, id, ref) {
    if (ref && ref.current) {
      ref.current.handlePopoverOpen(event, id)
    }
  }

  function onPopoverClose(ref) {
    if (ref && ref.current) {
      ref.current.handlePopoverClose()
    }
  }

  function isOpen(id, ref) {
    let isOpen;
    if (ref && ref.current) {
      isOpen = ref.current.isOpen(id);
    }

    return isOpen;
  }

  function clearSelection(el) {
    el = el.getElementsByTagName('circle')[0];
    el.setAttribute('fill', 'white')
    el.setAttribute('fill-opacity', '1')
    el.setAttribute('stroke', '#555555')
  }

  function Chart() {
    switch(device) {
      case 'tablet':
        return <Tablet />
      case 'mobile':
        return <Mobile />
      default:
        return <Desktop />
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

    <Chart />

    <Downloads
      href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
      date={'December 2019'}
    />

    {Object.keys(tooltipData)
      .map((i) => {
        const item = tooltipData[i];
        return <Tooltip ref={item.tooltipRef} title={item.title} id={item.id} rows={item.rows} clearSelection={clearSelection}/>
      })}

  </>);
}


const altText = `Horizontal scatter plot diagram displaying icons of various spending categories across the x-axis, ranging from approximately a net negative $200,000 for International Affairs to over 13 billion dollars for defense systems.`;
