import React, { useEffect, useState } from "react"
import './categories.scss';
import 'src/styles/index.scss';
import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import data from '../../../../static/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318_with_keys.csv';
import Tooltip from "src/components/tooltip/tooltip";
import numberFormatter from 'src/utils/number-formatter';
import variables from 'src/styles/variables.scss';
import DesktopChart from '../../../svgs/rd-and-contracting/categories/desktop.svg';


export default function Categories(props) {
	const [windowWidth, setWindowWidth] = useState(null);
	const [previousDevice, setPreviousDevice] = useState(null);
	const [device, setDevice] = useState(null);
	const [hasDeviceChanged, setHasDeviceChanged] = useState(null);
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

    console.log(items);
    setData(items);
  },[]);

	function handleResize() {
		setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
		// setPreviousDevice(device);
		//
		// if (windowWidth) {
		// 	if (windowWidth >= parseInt(variables.lg)) {
		// 		setDevice(desktop);
		// 	} else if (windowWidth >= parseInt(variables.md)) {
		// 		setDevice(tablet);
		// 	} else {
		// 		setDevice(mobile);
		// 	}
		// }
		// setHasDeviceChanged(!(previousDevice !== device));
	}

  function init() {
	// chart = chart || desktop;
  }
	// 	const categoryViz = d3.select('#category-viz');
	// 	categoryViz.html(chart);
	//
	// 	const svg = categoryViz.select('svg');
	//
	// 	svg.attr('id', 'vizSvg');
	//
  //   const iconGroups = svg.selectAll('.category-icon');
	//
  //   iconGroups.data(tooltipData)
	// 		.enter();
	//
  //   iconGroups.attr('tabindex', 0)
	// 		.style('cursor', 'pointer')
	// 		.on('mouseover', function(d) {
	// 			onFocus(d, this)
  //     })
	// 		.on('mouseout', onBlur)
	// 		.on('focus', function(d) {
  //       onFocus(d, this)
  //     })
	// 		.on('blur', onBlur);
	//
	// 	svg.attr('role', 'img')
	// 		.attr('aria-labelledby', 'desc')
	// 		.attr('desc', altText);
	//   }
	//
		function onFocus(e, key) {
      const el = e.currentTarget.getElementsByTagName('circle')[0];
      const item = tooltipData[key];

			el.setAttribute('fill', '#1302D9')
      el.setAttribute('fill-opacity', '.12')
      el.setAttribute('stroke', '#1302D9')
      el.setAttribute('aria-haspopup', true)
      el.setAttribute('aria-owns', isOpen(item.id, item.tooltipRef) ? "mouse-over-popover" : undefined);

      onPopoverOpen(e, item.id, item.tooltipRef);

		}

  function onBlur(e, key) {
    const el = e.currentTarget.getElementsByTagName('circle')[0];
    const item = tooltipData[key];

    onPopoverClose(item.tooltipRef);
  }

	useEffect(() => {
		handleResize();
    init();

		// if (!device || hasDeviceChanged) {
		// 	init(device);
		// }

    Object.keys(tooltipData).forEach((item) => {
    	if(item) {
        const el = document.getElementById(item);

        el.setAttribute('tabindex', '0');
        el.addEventListener('mouseover', e => onFocus(e, item));
        el.addEventListener('keydown', e => onFocus(e, item));
        el.addEventListener('click', e => onFocus(e, item));

        el.addEventListener('mouseout', e => onBlur(e, item));
        el.addEventListener('keyup', e => onBlur(e, item));

      }
		});

		return _ => {
			document.getElementById('world').addEventListener('mouseover', function () {
				console.log('unclick!')
			});
			window.removeEventListener('resize', handleResize);
		};
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
    if (ref && ref.current) {
      ref.current.isOpen(id)
    }
  }

  return (<>
		<h2 className='rd-viztitle'>{props.section.viztitle}</h2>
		<AccordionList title='Instructions'>
			<ul>
				<li>instructions here</li>
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

		<DesktopChart />

		<Downloads
			href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
			date={'December 2019'}
		/>

    {Object.keys(tooltipData).map((i) => {
      const item = tooltipData[i];
      return <Tooltip ref={item.tooltipRef} title={item.title} id={item.id} rows={item.rows} />
    })}

	</>);
}

const altText = `Horizontal scatter plot diagram displaying icons of various spending categories across the x-axis, ranging from approximately a net negative $200,000 for International Affairs to over 13 billion dollars for defense systems.`;
