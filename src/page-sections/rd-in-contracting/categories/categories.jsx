import React, { useEffect, useState } from "react"
import './categories.scss';
import 'src/styles/index.scss';
import * as d3 from 'd3v3';
import Accordion from 'src/components/accordion/accordion';
import Downloads from 'src/components/section-elements/downloads/downloads';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import TooltipElement from "../../../components/tooltip/tooltip-element";
import data from '../../../../static/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318_with_keys.csv';
import ReactDOM from "react-dom"

export default function Categories(props) {
  const [tooltipData, setData] = useState([]);

	useEffect(() => {
    let items = [];
    data.map((item, key) => {
      items.push({
        id: key,
        title: item.description,
        rows: [
          { "Obligation": item.obligations },
          { "Percentage": item.percents }
        ]
      })
    });

    setData(items);
  },[]);

  useEffect(() => {
		const categoryViz = d3.select('#category-viz');
		categoryViz.html(chart);

		const svg = categoryViz.select('svg');

		svg.attr('id', 'vizSvg');

    const iconGroups = svg.selectAll('.category-icon');

    iconGroups.data(tooltipData)
			.enter();

    iconGroups.attr('tabindex', 0)
			.style('cursor', 'pointer')
			.on('mouseover', function(d) {
				onFocus(d, this)
      })
			.on('mouseout', onBlur)
			.on('focus', onFocus)
			.on('blur', onBlur)

		// append the tooltip here

		svg.attr('role', 'img')
			.attr('aria-labelledby', 'desc')
			.attr('desc', altText)
		;

		function onFocus(d, el) {
			console.log(d);
			console.log(el);
      // const tooltipItem = ReactDOM.render(<TooltipElement element={'g'} title={d.title} id={d.id} rows={d.rows} />, 'g');

      d3.select(el)
				.select('circle')
				.attr('fill', '#1302D9')
				.attr('fill-opacity', '.12')
				.attr('stroke', '#1302D9')
				.append(<TooltipElement element={'g'} title={d.title} id={d.id} rows={d.rows} />)

		}

		function onBlur() {
			d3.select(this)
				.select('circle')
				.attr('fill', 'unset')
				.attr('stroke', '#555555')
			;
		}
	});

	return (<>
		<h2 className='rd-viztitle'>{props.section.viztitle}</h2>
		<Accordion title='Instructions'>
			<ul>
				<li>instructions here</li>
			</ul>
		</Accordion>

		<ControlBar>
			<Share />
		</ControlBar>

		<div>

		{tooltipData.map((item) => {
			return <TooltipElement element={'circle'} title={item.title} id={item.id} rows={item.rows} />
		})}
		</div>

		<div id='category-viz'></div>

		<Downloads
			href={'/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv'}
			date={'December 2019'}
		/>
	</>);
}

const altText = `Horizontal scatter plot diagram displaying icons of various spending categories across the x-axis, ranging from approximately a net negative $200,000 for International Affairs to over 13 billion dollars for defense systems.`;

const chart = `<svg tabindex=0 width="1000px" height="652px" viewBox="0 0 1000 652" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Viz 2 Outline_Desktop</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-1">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-2">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-3">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-4">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-5">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-6">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-7">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-8">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-9">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-10">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-11">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-12">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-13">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-14">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-15">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-16">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-17">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-18">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-19">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-20">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-21">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-22">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-23">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-24">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-25">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-26">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-27">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-28">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-29">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-30">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-31">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-32">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-33">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-34">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-35">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-36">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-37">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-38">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-39">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-40">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-41">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-42">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-43">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-44">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-45">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-46">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-47">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-48">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-49">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-50">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-51">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-52">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-53">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-54">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-55">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-56">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-57">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-58">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1772022%" x2="119.193568%" y2="125.734457%" id="linearGradient-59">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-60">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-61">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="12.1109551%" x2="50%" y2="89.4950273%" id="linearGradient-62">
            <stop stop-color="#1302D9" offset="0%"></stop>
            <stop stop-color="#060B8E" offset="49.5460304%"></stop>
            <stop stop-color="#3B1AAE" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Viz-2-Outline_Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(3.000000, 51.080000)">
            <g id="Line" transform="translate(30.000000, 249.920000)" stroke="#555555">
                <line x1="674" y1="15" x2="942.5" y2="15.5" id="Line-8-Copy" stroke-width="2" stroke-linecap="square"></line>
                <line x1="0.25" y1="15.75" x2="620.25" y2="14.75" id="Line-8-Copy-3" stroke-width="2" stroke-linecap="square"></line>
                <line x1="611.5" y1="31.5" x2="629.5" y2="0.5" id="Line-13" stroke-width="2" stroke-linecap="square"></line>
                <line x1="664.5" y1="31.5" x2="682.5" y2="0.5" id="Line-13-Copy" stroke-width="2" stroke-linecap="square"></line>
                <polyline id="Path-6" points="621.880859 15.25 636.763275 15.25 643.85628 3.25585938 652.654187 26.0742187 656.373501 14.75 672.880859 14.75"></polyline>
            </g>
            <g id="Vertical-Lines" transform="translate(29.000000, 24.920000)" stroke="#666666" stroke-dasharray="1,2" stroke-linecap="round">
                <line x1="0.5" y1="0.894136808" x2="0.5" y2="548.105863" id="Line-10-Copy"></line>
                <line x1="674.5" y1="0.835504886" x2="674.5" y2="238.5" id="Line-10-Copy-13"></line>
                <line x1="414.5" y1="0.894136808" x2="414.5" y2="548.105863" id="Line-10-Copy-10"></line>
                <line x1="621.5" y1="0.835504886" x2="621.5" y2="239.5" id="Line-10-Copy-12"></line>
                <line x1="944.5" y1="0.894136808" x2="944.5" y2="548.105863" id="Line-10-Copy-15"></line>
                <line x1="207.5" y1="0.894136808" x2="207.5" y2="548.105863" id="Line-10-Copy-9"></line>
            </g>
            <g id="Values" transform="translate(28.592000, 0.000000)" fill="#555555" fill-rule="nonzero">
                <path d="M3.632,12.112 C4.176,12.112 4.672,11.9973333 5.12,11.768 C5.568,11.5386667 5.94933333,11.2 6.264,10.752 C6.57866667,10.304 6.824,9.74933333 7,9.088 C7.176,8.42666667 7.264,7.664 7.264,6.8 C7.264,5.936 7.176,5.17866667 7,4.528 C6.824,3.87733333 6.57866667,3.33066667 6.264,2.888 C5.94933333,2.44533333 5.568,2.11466667 5.12,1.896 C4.672,1.67733333 4.176,1.568 3.632,1.568 C3.088,1.568 2.592,1.67733333 2.144,1.896 C1.696,2.11466667 1.31466667,2.44533333 1,2.888 C0.685333333,3.33066667 0.44,3.87733333 0.264,4.528 C0.088,5.17866667 6.03961325e-14,5.936 6.03961325e-14,6.8 C6.03961325e-14,7.664 0.088,8.42666667 0.264,9.088 C0.44,9.74933333 0.685333333,10.304 1,10.752 C1.31466667,11.2 1.696,11.5386667 2.144,11.768 C2.592,11.9973333 3.088,12.112 3.632,12.112 Z M3.632,10.288 C3.44,10.288 3.25866667,10.2373333 3.088,10.136 C2.91733333,10.0346667 2.768,9.85066667 2.64,9.584 C2.512,9.31733333 2.41066667,8.96 2.336,8.512 C2.26133333,8.064 2.224,7.49333333 2.224,6.8 C2.224,6.10666667 2.26133333,5.53866667 2.336,5.096 C2.41066667,4.65333333 2.512,4.30666667 2.64,4.056 C2.768,3.80533333 2.91733333,3.632 3.088,3.536 C3.25866667,3.44 3.44,3.392 3.632,3.392 C3.83466667,3.392 4.02133333,3.44 4.192,3.536 C4.36266667,3.632 4.512,3.80533333 4.64,4.056 C4.768,4.30666667 4.86666667,4.65333333 4.936,5.096 C5.00533333,5.53866667 5.04,6.10666667 5.04,6.8 C5.04,7.49333333 5.00533333,8.064 4.936,8.512 C4.86666667,8.96 4.768,9.31733333 4.64,9.584 C4.512,9.85066667 4.36266667,10.0346667 4.192,10.136 C4.02133333,10.2373333 3.83466667,10.288 3.632,10.288 Z" id="0"></path>
                <path d="M199.4,13.68 L199.4,12.016 C200.232,11.8346667 200.856,11.4693333 201.272,10.92 C201.688,10.3706667 201.896,9.712 201.896,8.944 C201.896,8.432 201.792,8.00266667 201.584,7.656 C201.376,7.30933333 201.114667,7.01333333 200.8,6.768 C200.485333,6.52266667 200.146667,6.31466667 199.784,6.144 C199.421333,5.97333333 199.082667,5.808 198.768,5.648 C198.453333,5.488 198.192,5.32 197.984,5.144 C197.776,4.968 197.672,4.752 197.672,4.496 C197.672,4.13333333 197.773333,3.872 197.976,3.712 C198.178667,3.552 198.472,3.472 198.856,3.472 C199.197333,3.472 199.501333,3.53866667 199.768,3.672 C200.034667,3.80533333 200.312,4.00533333 200.6,4.272 L200.6,4.272 L201.784,2.928 C201.474667,2.59733333 201.128,2.31466667 200.744,2.08 C200.36,1.84533333 199.912,1.69066667 199.4,1.616 L199.4,1.616 L199.4,-2.04281037e-14 L197.848,-2.04281037e-14 L197.848,1.648 C197.090667,1.79733333 196.496,2.13066667 196.064,2.648 C195.632,3.16533333 195.416,3.81866667 195.416,4.608 C195.416,5.088 195.52,5.49333333 195.728,5.824 C195.936,6.15466667 196.197333,6.44266667 196.512,6.688 C196.826667,6.93333333 197.165333,7.144 197.528,7.32 C197.890667,7.496 198.229333,7.672 198.544,7.848 C198.858667,8.024 199.12,8.208 199.328,8.4 C199.536,8.592 199.64,8.82666667 199.64,9.104 C199.64,9.47733333 199.536,9.75466667 199.328,9.936 C199.12,10.1173333 198.792,10.208 198.344,10.208 C197.96,10.208 197.584,10.1306667 197.216,9.976 C196.848,9.82133333 196.461333,9.58933333 196.056,9.28 L196.056,9.28 L195.032,10.864 C195.405333,11.2053333 195.850667,11.48 196.368,11.688 C196.885333,11.896 197.378667,12.0266667 197.848,12.08 L197.848,12.08 L197.848,13.68 L199.4,13.68 Z M213.64,11.92 L213.64,10.016 L211.736,10.016 L211.736,1.76 L210.008,1.76 C209.645333,1.97333333 209.272,2.15466667 208.888,2.304 C208.504,2.45333333 208.034667,2.58133333 207.48,2.688 L207.48,2.688 L207.48,4.144 L209.384,4.144 L209.384,10.016 L207.176,10.016 L207.176,11.92 L213.64,11.92 Z M222.808,11.92 C223.373333,11.92 223.901333,11.8586667 224.392,11.736 C224.882667,11.6133333 225.312,11.4266667 225.68,11.176 C226.048,10.9253333 226.336,10.608 226.544,10.224 C226.752,9.84 226.856,9.38133333 226.856,8.848 C226.856,8.496 226.808,8.184 226.712,7.912 C226.616,7.64 226.482667,7.40266667 226.312,7.2 C226.141333,6.99733333 225.944,6.82933333 225.72,6.696 C225.496,6.56266667 225.250667,6.464 224.984,6.4 L224.984,6.4 L224.984,6.336 C225.197333,6.26133333 225.386667,6.144 225.552,5.984 C225.717333,5.824 225.858667,5.64266667 225.976,5.44 C226.093333,5.23733333 226.184,5.01866667 226.248,4.784 C226.312,4.54933333 226.344,4.31466667 226.344,4.08 C226.344,3.57866667 226.245333,3.16266667 226.048,2.832 C225.850667,2.50133333 225.578667,2.23466667 225.232,2.032 C224.885333,1.82933333 224.48,1.688 224.016,1.608 C223.552,1.528 223.048,1.488 222.504,1.488 L222.504,1.488 L218.936,1.488 L218.936,11.92 L222.808,11.92 Z M222.392,5.664 L221.288,5.664 L221.288,3.312 L222.408,3.312 C222.962667,3.312 223.373333,3.39733333 223.64,3.568 C223.906667,3.73866667 224.04,4.02666667 224.04,4.432 C224.04,4.80533333 223.909333,5.104 223.648,5.328 C223.386667,5.552 222.968,5.664 222.392,5.664 L222.392,5.664 Z M222.616,10.096 L221.288,10.096 L221.288,7.408 L222.616,7.408 C223.266667,7.408 223.752,7.50666667 224.072,7.704 C224.392,7.90133333 224.552,8.22933333 224.552,8.688 C224.552,9.62666667 223.906667,10.096 222.616,10.096 L222.616,10.096 Z" id="$1B"></path>
                <path d="M398.4,13.68 L398.4,12.016 C399.232,11.8346667 399.856,11.4693333 400.272,10.92 C400.688,10.3706667 400.896,9.712 400.896,8.944 C400.896,8.432 400.792,8.00266667 400.584,7.656 C400.376,7.30933333 400.114667,7.01333333 399.8,6.768 C399.485333,6.52266667 399.146667,6.31466667 398.784,6.144 C398.421333,5.97333333 398.082667,5.808 397.768,5.648 C397.453333,5.488 397.192,5.32 396.984,5.144 C396.776,4.968 396.672,4.752 396.672,4.496 C396.672,4.13333333 396.773333,3.872 396.976,3.712 C397.178667,3.552 397.472,3.472 397.856,3.472 C398.197333,3.472 398.501333,3.53866667 398.768,3.672 C399.034667,3.80533333 399.312,4.00533333 399.6,4.272 L399.6,4.272 L400.784,2.928 C400.474667,2.59733333 400.128,2.31466667 399.744,2.08 C399.36,1.84533333 398.912,1.69066667 398.4,1.616 L398.4,1.616 L398.4,-2.04281037e-14 L396.848,-2.04281037e-14 L396.848,1.648 C396.090667,1.79733333 395.496,2.13066667 395.064,2.648 C394.632,3.16533333 394.416,3.81866667 394.416,4.608 C394.416,5.088 394.52,5.49333333 394.728,5.824 C394.936,6.15466667 395.197333,6.44266667 395.512,6.688 C395.826667,6.93333333 396.165333,7.144 396.528,7.32 C396.890667,7.496 397.229333,7.672 397.544,7.848 C397.858667,8.024 398.12,8.208 398.328,8.4 C398.536,8.592 398.64,8.82666667 398.64,9.104 C398.64,9.47733333 398.536,9.75466667 398.328,9.936 C398.12,10.1173333 397.792,10.208 397.344,10.208 C396.96,10.208 396.584,10.1306667 396.216,9.976 C395.848,9.82133333 395.461333,9.58933333 395.056,9.28 L395.056,9.28 L394.032,10.864 C394.405333,11.2053333 394.850667,11.48 395.368,11.688 C395.885333,11.896 396.378667,12.0266667 396.848,12.08 L396.848,12.08 L396.848,13.68 L398.4,13.68 Z M412.8,11.92 L412.8,9.936 L410.752,9.936 C410.506667,9.936 410.226667,9.94933333 409.912,9.976 C409.597333,10.0026667 409.312,10.032 409.056,10.064 C409.472,9.63733333 409.874667,9.20266667 410.264,8.76 C410.653333,8.31733333 411,7.87466667 411.304,7.432 C411.608,6.98933333 411.850667,6.54666667 412.032,6.104 C412.213333,5.66133333 412.304,5.22666667 412.304,4.8 C412.304,4.30933333 412.224,3.86666667 412.064,3.472 C411.904,3.07733333 411.674667,2.73866667 411.376,2.456 C411.077333,2.17333333 410.722667,1.95466667 410.312,1.8 C409.901333,1.64533333 409.445333,1.568 408.944,1.568 C408.218667,1.568 407.594667,1.704 407.072,1.976 C406.549333,2.248 406.037333,2.65066667 405.536,3.184 L405.536,3.184 L406.816,4.448 C407.072,4.17066667 407.344,3.928 407.632,3.72 C407.92,3.512 408.250667,3.408 408.624,3.408 C409.072,3.408 409.424,3.53866667 409.68,3.8 C409.936,4.06133333 410.064,4.44266667 410.064,4.944 C410.064,5.30666667 409.954667,5.688 409.736,6.088 C409.517333,6.488 409.213333,6.92 408.824,7.384 C408.434667,7.848 407.970667,8.344 407.432,8.872 C406.893333,9.4 406.298667,9.968 405.648,10.576 L405.648,10.576 L405.648,11.92 L412.8,11.92 Z M421.808,11.92 C422.373333,11.92 422.901333,11.8586667 423.392,11.736 C423.882667,11.6133333 424.312,11.4266667 424.68,11.176 C425.048,10.9253333 425.336,10.608 425.544,10.224 C425.752,9.84 425.856,9.38133333 425.856,8.848 C425.856,8.496 425.808,8.184 425.712,7.912 C425.616,7.64 425.482667,7.40266667 425.312,7.2 C425.141333,6.99733333 424.944,6.82933333 424.72,6.696 C424.496,6.56266667 424.250667,6.464 423.984,6.4 L423.984,6.4 L423.984,6.336 C424.197333,6.26133333 424.386667,6.144 424.552,5.984 C424.717333,5.824 424.858667,5.64266667 424.976,5.44 C425.093333,5.23733333 425.184,5.01866667 425.248,4.784 C425.312,4.54933333 425.344,4.31466667 425.344,4.08 C425.344,3.57866667 425.245333,3.16266667 425.048,2.832 C424.850667,2.50133333 424.578667,2.23466667 424.232,2.032 C423.885333,1.82933333 423.48,1.688 423.016,1.608 C422.552,1.528 422.048,1.488 421.504,1.488 L421.504,1.488 L417.936,1.488 L417.936,11.92 L421.808,11.92 Z M421.392,5.664 L420.288,5.664 L420.288,3.312 L421.408,3.312 C421.962667,3.312 422.373333,3.39733333 422.64,3.568 C422.906667,3.73866667 423.04,4.02666667 423.04,4.432 C423.04,4.80533333 422.909333,5.104 422.648,5.328 C422.386667,5.552 421.968,5.664 421.392,5.664 L421.392,5.664 Z M421.616,10.096 L420.288,10.096 L420.288,7.408 L421.616,7.408 C422.266667,7.408 422.752,7.50666667 423.072,7.704 C423.392,7.90133333 423.552,8.22933333 423.552,8.688 C423.552,9.62666667 422.906667,10.096 421.616,10.096 L421.616,10.096 Z" id="$2B"></path>
                <path d="M661.4,13.68 L661.4,12.016 C662.232,11.8346667 662.856,11.4693333 663.272,10.92 C663.688,10.3706667 663.896,9.712 663.896,8.944 C663.896,8.432 663.792,8.00266667 663.584,7.656 C663.376,7.30933333 663.114667,7.01333333 662.8,6.768 C662.485333,6.52266667 662.146667,6.31466667 661.784,6.144 C661.421333,5.97333333 661.082667,5.808 660.768,5.648 C660.453333,5.488 660.192,5.32 659.984,5.144 C659.776,4.968 659.672,4.752 659.672,4.496 C659.672,4.13333333 659.773333,3.872 659.976,3.712 C660.178667,3.552 660.472,3.472 660.856,3.472 C661.197333,3.472 661.501333,3.53866667 661.768,3.672 C662.034667,3.80533333 662.312,4.00533333 662.6,4.272 L662.6,4.272 L663.784,2.928 C663.474667,2.59733333 663.128,2.31466667 662.744,2.08 C662.36,1.84533333 661.912,1.69066667 661.4,1.616 L661.4,1.616 L661.4,-2.04281037e-14 L659.848,-2.04281037e-14 L659.848,1.648 C659.090667,1.79733333 658.496,2.13066667 658.064,2.648 C657.632,3.16533333 657.416,3.81866667 657.416,4.608 C657.416,5.088 657.52,5.49333333 657.728,5.824 C657.936,6.15466667 658.197333,6.44266667 658.512,6.688 C658.826667,6.93333333 659.165333,7.144 659.528,7.32 C659.890667,7.496 660.229333,7.672 660.544,7.848 C660.858667,8.024 661.12,8.208 661.328,8.4 C661.536,8.592 661.64,8.82666667 661.64,9.104 C661.64,9.47733333 661.536,9.75466667 661.328,9.936 C661.12,10.1173333 660.792,10.208 660.344,10.208 C659.96,10.208 659.584,10.1306667 659.216,9.976 C658.848,9.82133333 658.461333,9.58933333 658.056,9.28 L658.056,9.28 L657.032,10.864 C657.405333,11.2053333 657.850667,11.48 658.368,11.688 C658.885333,11.896 659.378667,12.0266667 659.848,12.08 L659.848,12.08 L659.848,13.68 L661.4,13.68 Z M674.952,11.92 L674.952,9.488 L676.12,9.488 L676.12,7.696 L674.952,7.696 L674.952,1.76 L672.072,1.76 L668.36,7.872 L668.36,9.488 L672.76,9.488 L672.76,11.92 L674.952,11.92 Z M672.76,7.696 L670.616,7.696 L671.96,5.488 C672.109333,5.2 672.253333,4.912 672.392,4.624 C672.530667,4.336 672.664,4.05333333 672.792,3.776 L672.792,3.776 L672.856,3.776 C672.834667,4.096 672.813333,4.472 672.792,4.904 C672.770667,5.336 672.76,5.71733333 672.76,6.048 L672.76,6.048 L672.76,7.696 Z M684.808,11.92 C685.373333,11.92 685.901333,11.8586667 686.392,11.736 C686.882667,11.6133333 687.312,11.4266667 687.68,11.176 C688.048,10.9253333 688.336,10.608 688.544,10.224 C688.752,9.84 688.856,9.38133333 688.856,8.848 C688.856,8.496 688.808,8.184 688.712,7.912 C688.616,7.64 688.482667,7.40266667 688.312,7.2 C688.141333,6.99733333 687.944,6.82933333 687.72,6.696 C687.496,6.56266667 687.250667,6.464 686.984,6.4 L686.984,6.4 L686.984,6.336 C687.197333,6.26133333 687.386667,6.144 687.552,5.984 C687.717333,5.824 687.858667,5.64266667 687.976,5.44 C688.093333,5.23733333 688.184,5.01866667 688.248,4.784 C688.312,4.54933333 688.344,4.31466667 688.344,4.08 C688.344,3.57866667 688.245333,3.16266667 688.048,2.832 C687.850667,2.50133333 687.578667,2.23466667 687.232,2.032 C686.885333,1.82933333 686.48,1.688 686.016,1.608 C685.552,1.528 685.048,1.488 684.504,1.488 L684.504,1.488 L680.936,1.488 L680.936,11.92 L684.808,11.92 Z M684.392,5.664 L683.288,5.664 L683.288,3.312 L684.408,3.312 C684.962667,3.312 685.373333,3.39733333 685.64,3.568 C685.906667,3.73866667 686.04,4.02666667 686.04,4.432 C686.04,4.80533333 685.909333,5.104 685.648,5.328 C685.386667,5.552 684.968,5.664 684.392,5.664 L684.392,5.664 Z M684.616,10.096 L683.288,10.096 L683.288,7.408 L684.616,7.408 C685.266667,7.408 685.752,7.50666667 686.072,7.704 C686.392,7.90133333 686.552,8.22933333 686.552,8.688 C686.552,9.62666667 685.906667,10.096 684.616,10.096 L684.616,10.096 Z" id="$4B"></path>
                <path d="M607.4,13.68 L607.4,12.016 C608.232,11.8346667 608.856,11.4693333 609.272,10.92 C609.688,10.3706667 609.896,9.712 609.896,8.944 C609.896,8.432 609.792,8.00266667 609.584,7.656 C609.376,7.30933333 609.114667,7.01333333 608.8,6.768 C608.485333,6.52266667 608.146667,6.31466667 607.784,6.144 C607.421333,5.97333333 607.082667,5.808 606.768,5.648 C606.453333,5.488 606.192,5.32 605.984,5.144 C605.776,4.968 605.672,4.752 605.672,4.496 C605.672,4.13333333 605.773333,3.872 605.976,3.712 C606.178667,3.552 606.472,3.472 606.856,3.472 C607.197333,3.472 607.501333,3.53866667 607.768,3.672 C608.034667,3.80533333 608.312,4.00533333 608.6,4.272 L608.6,4.272 L609.784,2.928 C609.474667,2.59733333 609.128,2.31466667 608.744,2.08 C608.36,1.84533333 607.912,1.69066667 607.4,1.616 L607.4,1.616 L607.4,-2.04281037e-14 L605.848,-2.04281037e-14 L605.848,1.648 C605.090667,1.79733333 604.496,2.13066667 604.064,2.648 C603.632,3.16533333 603.416,3.81866667 603.416,4.608 C603.416,5.088 603.52,5.49333333 603.728,5.824 C603.936,6.15466667 604.197333,6.44266667 604.512,6.688 C604.826667,6.93333333 605.165333,7.144 605.528,7.32 C605.890667,7.496 606.229333,7.672 606.544,7.848 C606.858667,8.024 607.12,8.208 607.328,8.4 C607.536,8.592 607.64,8.82666667 607.64,9.104 C607.64,9.47733333 607.536,9.75466667 607.328,9.936 C607.12,10.1173333 606.792,10.208 606.344,10.208 C605.96,10.208 605.584,10.1306667 605.216,9.976 C604.848,9.82133333 604.461333,9.58933333 604.056,9.28 L604.056,9.28 L603.032,10.864 C603.405333,11.2053333 603.850667,11.48 604.368,11.688 C604.885333,11.896 605.378667,12.0266667 605.848,12.08 L605.848,12.08 L605.848,13.68 L607.4,13.68 Z M617.944,12.112 C618.456,12.112 618.941333,12.0453333 619.4,11.912 C619.858667,11.7786667 620.258667,11.5866667 620.6,11.336 C620.941333,11.0853333 621.213333,10.776 621.416,10.408 C621.618667,10.04 621.72,9.62133333 621.72,9.152 C621.72,8.49066667 621.530667,7.95466667 621.152,7.544 C620.773333,7.13333333 620.290667,6.84266667 619.704,6.672 L619.704,6.672 L619.704,6.608 C620.248,6.37333333 620.666667,6.072 620.96,5.704 C621.253333,5.336 621.4,4.88533333 621.4,4.352 C621.4,3.904 621.314667,3.50933333 621.144,3.168 C620.973333,2.82666667 620.736,2.536 620.432,2.296 C620.128,2.056 619.76,1.87466667 619.328,1.752 C618.896,1.62933333 618.418667,1.568 617.896,1.568 C617.266667,1.568 616.693333,1.68266667 616.176,1.912 C615.658667,2.14133333 615.165333,2.45866667 614.696,2.864 L614.696,2.864 L615.88,4.304 C616.2,4.02666667 616.506667,3.808 616.8,3.648 C617.093333,3.488 617.421333,3.408 617.784,3.408 C618.189333,3.408 618.498667,3.50666667 618.712,3.704 C618.925333,3.90133333 619.032,4.176 619.032,4.528 C619.032,4.73066667 618.992,4.91466667 618.912,5.08 C618.832,5.24533333 618.698667,5.38933333 618.512,5.512 C618.325333,5.63466667 618.08,5.728 617.776,5.792 C617.472,5.856 617.090667,5.888 616.632,5.888 L616.632,5.888 L616.632,7.552 C617.186667,7.552 617.64,7.58666667 617.992,7.656 C618.344,7.72533333 618.621333,7.82133333 618.824,7.944 C619.026667,8.06666667 619.168,8.21866667 619.248,8.4 C619.328,8.58133333 619.368,8.784 619.368,9.008 C619.368,9.392 619.218667,9.688 618.92,9.896 C618.621333,10.104 618.221333,10.208 617.72,10.208 C617.282667,10.208 616.88,10.112 616.512,9.92 C616.144,9.728 615.805333,9.48266667 615.496,9.184 L615.496,9.184 L614.408,10.672 C614.781333,11.1093333 615.256,11.4586667 615.832,11.72 C616.408,11.9813333 617.112,12.112 617.944,12.112 Z M630.808,11.92 C631.373333,11.92 631.901333,11.8586667 632.392,11.736 C632.882667,11.6133333 633.312,11.4266667 633.68,11.176 C634.048,10.9253333 634.336,10.608 634.544,10.224 C634.752,9.84 634.856,9.38133333 634.856,8.848 C634.856,8.496 634.808,8.184 634.712,7.912 C634.616,7.64 634.482667,7.40266667 634.312,7.2 C634.141333,6.99733333 633.944,6.82933333 633.72,6.696 C633.496,6.56266667 633.250667,6.464 632.984,6.4 L632.984,6.4 L632.984,6.336 C633.197333,6.26133333 633.386667,6.144 633.552,5.984 C633.717333,5.824 633.858667,5.64266667 633.976,5.44 C634.093333,5.23733333 634.184,5.01866667 634.248,4.784 C634.312,4.54933333 634.344,4.31466667 634.344,4.08 C634.344,3.57866667 634.245333,3.16266667 634.048,2.832 C633.850667,2.50133333 633.578667,2.23466667 633.232,2.032 C632.885333,1.82933333 632.48,1.688 632.016,1.608 C631.552,1.528 631.048,1.488 630.504,1.488 L630.504,1.488 L626.936,1.488 L626.936,11.92 L630.808,11.92 Z M630.392,5.664 L629.288,5.664 L629.288,3.312 L630.408,3.312 C630.962667,3.312 631.373333,3.39733333 631.64,3.568 C631.906667,3.73866667 632.04,4.02666667 632.04,4.432 C632.04,4.80533333 631.909333,5.104 631.648,5.328 C631.386667,5.552 630.968,5.664 630.392,5.664 L630.392,5.664 Z M630.616,10.096 L629.288,10.096 L629.288,7.408 L630.616,7.408 C631.266667,7.408 631.752,7.50666667 632.072,7.704 C632.392,7.90133333 632.552,8.22933333 632.552,8.688 C632.552,9.62666667 631.906667,10.096 630.616,10.096 L630.616,10.096 Z" id="$3B"></path>
                <path d="M929.4,13.68 L929.4,12.016 C930.232,11.8346667 930.856,11.4693333 931.272,10.92 C931.688,10.3706667 931.896,9.712 931.896,8.944 C931.896,8.432 931.792,8.00266667 931.584,7.656 C931.376,7.30933333 931.114667,7.01333333 930.8,6.768 C930.485333,6.52266667 930.146667,6.31466667 929.784,6.144 C929.421333,5.97333333 929.082667,5.808 928.768,5.648 C928.453333,5.488 928.192,5.32 927.984,5.144 C927.776,4.968 927.672,4.752 927.672,4.496 C927.672,4.13333333 927.773333,3.872 927.976,3.712 C928.178667,3.552 928.472,3.472 928.856,3.472 C929.197333,3.472 929.501333,3.53866667 929.768,3.672 C930.034667,3.80533333 930.312,4.00533333 930.6,4.272 L930.6,4.272 L931.784,2.928 C931.474667,2.59733333 931.128,2.31466667 930.744,2.08 C930.36,1.84533333 929.912,1.69066667 929.4,1.616 L929.4,1.616 L929.4,-2.04281037e-14 L927.848,-2.04281037e-14 L927.848,1.648 C927.090667,1.79733333 926.496,2.13066667 926.064,2.648 C925.632,3.16533333 925.416,3.81866667 925.416,4.608 C925.416,5.088 925.52,5.49333333 925.728,5.824 C925.936,6.15466667 926.197333,6.44266667 926.512,6.688 C926.826667,6.93333333 927.165333,7.144 927.528,7.32 C927.890667,7.496 928.229333,7.672 928.544,7.848 C928.858667,8.024 929.12,8.208 929.328,8.4 C929.536,8.592 929.64,8.82666667 929.64,9.104 C929.64,9.47733333 929.536,9.75466667 929.328,9.936 C929.12,10.1173333 928.792,10.208 928.344,10.208 C927.96,10.208 927.584,10.1306667 927.216,9.976 C926.848,9.82133333 926.461333,9.58933333 926.056,9.28 L926.056,9.28 L925.032,10.864 C925.405333,11.2053333 925.850667,11.48 926.368,11.688 C926.885333,11.896 927.378667,12.0266667 927.848,12.08 L927.848,12.08 L927.848,13.68 L929.4,13.68 Z M943.64,11.92 L943.64,10.016 L941.736,10.016 L941.736,1.76 L940.008,1.76 C939.645333,1.97333333 939.272,2.15466667 938.888,2.304 C938.504,2.45333333 938.034667,2.58133333 937.48,2.688 L937.48,2.688 L937.48,4.144 L939.384,4.144 L939.384,10.016 L937.176,10.016 L937.176,11.92 L943.64,11.92 Z M951.4,11.92 L951.4,9.488 L952.568,9.488 L952.568,7.696 L951.4,7.696 L951.4,1.76 L948.52,1.76 L944.808,7.872 L944.808,9.488 L949.208,9.488 L949.208,11.92 L951.4,11.92 Z M949.208,7.696 L947.064,7.696 L948.408,5.488 C948.557333,5.2 948.701333,4.912 948.84,4.624 C948.978667,4.336 949.112,4.05333333 949.24,3.776 L949.24,3.776 L949.304,3.776 C949.282667,4.096 949.261333,4.472 949.24,4.904 C949.218667,5.336 949.208,5.71733333 949.208,6.048 L949.208,6.048 L949.208,7.696 Z M961.256,11.92 C961.821333,11.92 962.349333,11.8586667 962.84,11.736 C963.330667,11.6133333 963.76,11.4266667 964.128,11.176 C964.496,10.9253333 964.784,10.608 964.992,10.224 C965.2,9.84 965.304,9.38133333 965.304,8.848 C965.304,8.496 965.256,8.184 965.16,7.912 C965.064,7.64 964.930667,7.40266667 964.76,7.2 C964.589333,6.99733333 964.392,6.82933333 964.168,6.696 C963.944,6.56266667 963.698667,6.464 963.432,6.4 L963.432,6.4 L963.432,6.336 C963.645333,6.26133333 963.834667,6.144 964,5.984 C964.165333,5.824 964.306667,5.64266667 964.424,5.44 C964.541333,5.23733333 964.632,5.01866667 964.696,4.784 C964.76,4.54933333 964.792,4.31466667 964.792,4.08 C964.792,3.57866667 964.693333,3.16266667 964.496,2.832 C964.298667,2.50133333 964.026667,2.23466667 963.68,2.032 C963.333333,1.82933333 962.928,1.688 962.464,1.608 C962,1.528 961.496,1.488 960.952,1.488 L960.952,1.488 L957.384,1.488 L957.384,11.92 L961.256,11.92 Z M960.84,5.664 L959.736,5.664 L959.736,3.312 L960.856,3.312 C961.410667,3.312 961.821333,3.39733333 962.088,3.568 C962.354667,3.73866667 962.488,4.02666667 962.488,4.432 C962.488,4.80533333 962.357333,5.104 962.096,5.328 C961.834667,5.552 961.416,5.664 960.84,5.664 L960.84,5.664 Z M961.064,10.096 L959.736,10.096 L959.736,7.408 L961.064,7.408 C961.714667,7.408 962.2,7.50666667 962.52,7.704 C962.84,7.90133333 963,8.22933333 963,8.688 C963,9.62666667 962.354667,10.096 961.064,10.096 L961.064,10.096 Z" id="$14B"></path>
            </g>
            <g class="category-icon id="world">
              <circle id="circle-world" stroke="#555555" fill="#FFFFFF" cx="28" cy="38.92" r="18"></circle>
              <g id="icon-world" transform="translate(14.000000, 24.920000)">
                <path d="M15.6657936,0.931184606 C15.6394534,0.927509231 15.6134195,0.9247527 15.5870793,0.921077325 C15.355837,0.888917794 15.1212255,0.865640419 14.8835513,0.8463447 C14.8094312,0.840219075 14.7346986,0.83409345 14.6593534,0.82919295 C14.3889071,0.812347481 14.1153979,0.800402512 13.8369883,0.800402512 L13.8354569,0.800402512 L13.8348443,0.800402512 C13.8287187,0.800402512 13.8222868,0.801015075 13.8155486,0.801015075 C13.6403557,0.801321356 13.4666942,0.808059544 13.2924202,0.815104012 C9.69269667,0.962731575 6.4693928,2.56825789 4.2004613,5.06108098 C4.20015502,5.06199983 4.19984873,5.06322495 4.19892989,5.06445008 C3.63629123,6.05863901 2.94715842,8.13093795 3.22097386,8.42527423 C3.70979873,8.94993401 3.34991827,7.43322926 4.15543795,7.67825426 C3.60566311,9.66663214 4.57259302,10.6746037 5.73309267,11.3732313 C6.49358902,11.8305092 7.27338108,12.1989655 7.5524033,12.5260739 C7.72422708,12.7269944 7.77598861,13.0277626 7.67032158,13.2403218 C7.35454561,13.8767742 6.84581245,14.3655991 6.95760511,15.1515168 C7.03325658,15.681077 7.67767233,15.560096 8.07920705,16.4593377 C8.25225595,16.8483149 8.11718592,17.3714433 8.26542605,17.5803271 C8.80723758,18.3420485 9.50096461,18.388297 9.76038483,19.0746733 C9.96957492,19.6290424 9.96589955,20.2523247 9.82010967,20.9083791 C9.54874448,22.1282974 10.4522742,22.8759299 10.3545705,23.9212678 C10.306178,24.445315 11.266676,25.488509 11.6430957,24.9901894 C11.8124692,24.7644601 11.7692835,24.6012122 11.8850579,24.2854362 C11.9735731,24.0465368 12.2277866,23.668892 12.303438,23.4021211 C12.4201312,22.9913979 12.1769439,22.5114552 12.6709755,22.14208 C13.111408,21.8125214 13.0559711,21.1194069 13.3674591,20.7138905 C13.5083485,20.5304281 13.6685336,20.3628922 13.8354569,20.2011757 C14.4189226,19.6354743 15.1013173,19.1521625 15.481106,18.4054488 C15.6143384,18.1438846 15.4412895,17.7696089 15.5543072,17.4336184 C15.8036202,16.6914989 16.2428275,15.8902671 15.9258264,15.1515168 C15.779424,14.8106257 15.4529281,14.5208837 14.995344,14.4939309 C14.6651728,14.4743289 14.2372979,14.1414012 13.8354569,13.9998993 C13.7340778,13.9646769 13.6333112,13.9377242 13.5374452,13.9352739 C13.150612,13.9248604 12.7714358,14.1080165 12.5411123,13.8234813 C12.1888889,13.3867242 12.9944085,13.3763106 12.562552,12.7224002 C12.3656131,12.423776 11.7313047,12.4449094 11.4881174,11.9965136 C11.1432447,11.3606737 10.1940791,11.3033991 9.62562108,11.4409194 C9.22959942,11.5361729 8.96313473,11.2663391 8.5389352,11.2862474 C8.01550055,11.3110562 7.01794252,11.8381662 6.68593364,11.6715492 C6.50920936,11.5830339 6.63478467,11.0703191 6.50247117,10.8565348 C6.24427608,10.4350918 5.92788755,10.1248289 6.21058514,9.54626361 C5.95667798,9.10736258 5.30123611,9.73187004 5.20383867,9.29450042 C4.9502378,8.15482789 5.68990702,8.22527258 6.21058514,6.93092801 C6.34933055,6.58666789 6.90768127,7.28008864 7.21059342,7.50091742 C7.33953783,7.59555833 7.61733492,8.10367892 7.9493438,7.98208526 C8.11075402,7.92358554 7.81243608,7.47764004 7.87675514,7.14226208 C8.05531711,6.19401533 9.27064111,5.03075914 10.8810679,4.68894926 C11.4685154,4.34622054 10.2528851,4.0561722 10.8810679,3.75479145 C11.5518239,3.39307329 11.989806,4.37838007 12.1888889,3.94162301 C12.3999166,3.47821948 11.4394186,2.40225345 10.8810679,2.25983267 C10.0133731,2.38847079 9.84951267,3.8993562 9.19958386,3.56795989 C8.94965836,3.44024061 8.54751108,3.14896714 8.63970173,2.63380208 C8.70585848,2.25830126 9.13158942,2.50945189 9.45624755,2.27269648 C10.0871869,1.81113064 10.8522775,2.15722845 11.6283942,1.88616954 C12.0979233,1.72200279 11.1463075,1.18417292 11.6283942,1.13884329 C12.1163002,1.30086607 12.1052741,1.01326798 12.260865,1.00224186 C12.7000723,0.971920012 12.6734258,1.84359645 12.9362151,2.07330739 C13.1490806,2.25799498 13.3013024,1.65952142 13.5227437,1.51005617 C13.623204,1.44175545 13.7282584,1.38264317 13.8354569,1.33088164 C15.4737553,0.538532044 17.8042493,1.55140414 18.3077757,2.62890158 C18.7031848,3.47638179 17.3240003,2.77897939 17.2385478,3.24452689 C17.0817318,4.10548348 18.3022626,3.45432954 18.4697985,4.34591426 C18.2437629,4.63657517 17.7212471,5.25863239 18.2753099,5.38298258 C18.7748546,5.49508151 19.1815961,4.99400539 19.2891008,5.43596923 C20.1865049,5.52417823 19.6992114,4.22677086 20.5966155,4.31497986 C21.0030507,4.66138395 21.3004498,4.65005154 21.5454748,4.66475304 C21.832154,4.68221108 22.0006087,5.57716489 22.277487,5.43596923 C22.6872913,5.22800426 23.0370645,5.41514211 23.39817,5.3107002 C23.7102706,5.22065351 23.8474846,6.54899529 23.3289505,6.38697251 C22.7286392,6.19952839 22.422358,7.00259783 22.1950973,6.61362064 C21.7745731,5.89355342 21.0293909,5.46139058 20.3237189,5.69079523 C17.9834238,6.45190414 18.9883326,7.39126873 19.1175833,9.14044095 C19.1442298,9.50277167 18.5626017,9.93983501 18.7279935,10.2938961 C18.8241659,10.4991046 19.3984432,10.4007883 19.5390263,10.5661802 C20.085432,11.208452 20.0057989,12.311677 20.969666,12.5358749 C21.5341424,12.3517999 22.0976999,11.9916131 22.5509961,12.2831929 C22.9681512,12.5508827 23.505981,12.1444475 23.7730583,12.5358749 C23.8615736,13.0525714 23.5660122,13.711076 23.9130288,14.1288437 C24.2358493,14.5184334 23.6205302,15.1986841 23.8578982,15.7205873 C24.0346225,16.1074205 23.7801028,16.5708241 23.7286475,16.9962487 C23.6658599,17.5157017 23.5231328,18.7947322 22.9399733,19.831188 C22.610721,20.4177166 23.0143996,21.0820406 23.2122573,21.1298205 C23.829414,21.2811234 25.0536202,19.8085232 25.7782816,19.017705 C25.7792005,19.0158673 25.7795068,19.0140296 25.7804256,19.0118856 C26.472315,17.4216734 26.8582293,15.6682132 26.8582293,13.8234813 C26.8582293,7.25252333 21.991114,1.82123792 15.6657936,0.931184606" id="Fill-4" fill="url(#linearGradient-46)"></path>
                <path d="M13.6763438,0.494213147 C21.1191401,0.494213147 27.1527188,6.52779175 27.1527188,13.9705881 C27.1527188,21.4133845 21.1191401,27.4469631 13.6763438,27.4469631 C6.23354735,27.4469631 0.19996875,21.4133845 0.19996875,13.9705881 C0.19996875,6.52779175 6.23354735,0.494213147 13.6763438,0.494213147 Z M13.6763438,1.71933815 C6.91016521,1.71933815 1.42509375,7.20440961 1.42509375,13.9705881 C1.42509375,20.7367667 6.91016521,26.2218381 13.6763438,26.2218381 C20.4425223,26.2218381 25.9275938,20.7367667 25.9275938,13.9705881 C25.9275938,7.20440961 20.4425223,1.71933815 13.6763438,1.71933815 Z" id="Oval" fill="url(#linearGradient-20)" fill-rule="nonzero"></path>
              </g>
            </g>
            <g class="category-icon id="hands-heart">
              <circle id="circle-hands-heart" stroke="#555555" fill="#FFFFFF" cx="37" cy="79.92" r="18"></circle>
              <g id="icon-hands-heart" transform="translate(25.000000, 69.920000)">
                  <path d="M7.89723529,9.14128495 C8.259,8.6783172 8.79326471,8.38728495 9.39826471,8.32466129 C9.98797059,8.26357527 10.5765,8.45298387 11.0378235,8.80747849 L12.8616471,10.2088226 C13.4034118,10.6249624 14.1350294,10.7145645 14.7701765,10.4419839 C14.8592941,10.4036828 14.8953235,10.3344892 14.9088529,10.2967473 C14.9225294,10.2590054 14.9382647,10.1833817 14.8922353,10.101328 L11.9382647,4.84918817 C11.9360588,4.85366129 11.9341471,4.85785484 11.9341471,4.85785484 C11.9341471,4.85785484 10.0467941,1.04899462 5.06767647,1.12993011 C0.869147059,1.19786559 -0.656294118,5.42300538 0.253264706,8.77337097 C0.697235294,10.4082957 1.84944118,12.058457 3.29664706,13.6408226 C3.59664706,13.9688978 4.13797059,13.9522634 4.41061765,13.6033602 L7.89723529,9.14128495 Z" id="Fill-1" fill="url(#linearGradient-1)"></path>
                  <path d="M10.1867538,19.6345327 L13.0899846,16.2454099 C13.2756769,16.028629 13.6075231,15.9989391 13.8310615,16.179018 C14.0546,16.359246 14.0853692,16.6809113 13.8995231,16.8976922 L10.9527538,20.3376906 C10.6618308,20.6772594 10.7178308,21.1830318 11.0764462,21.455015 L11.0930615,21.4675474 C11.3910615,21.6934292 11.8093692,21.6876106 12.1024462,21.4556118 C12.4613692,21.1715437 13.0461385,20.6859127 13.9590615,19.8739913 C17.5669077,16.665395 22.7096769,12.3405187 23.7169077,8.19303568 C24.5898308,4.59832166 22.8955231,0.122161195 18.5026,0.140455989 C14.9367538,0.15543177 12.9573692,2.02156786 12.0441385,3.23870395 L15.4307538,9.38212303 C15.6029077,9.69438901 15.6341385,10.0655872 15.5164462,10.40068 C15.3989077,10.7357729 15.1407538,11.011486 14.8081385,11.1572499 C13.7790615,11.6073725 12.5946,11.4598182 11.7166,10.771729 L9.79029231,9.26172234 C9.55244615,9.07522809 9.25506154,8.96288395 8.94952308,8.97601315 C8.57829231,8.99182786 8.24783077,9.1625074 8.02967692,9.44732143 L4.29567692,14.3225796 C3.96752308,14.751218 4.01598462,15.3488948 4.40921538,15.72248 L4.42506154,15.7375488 C4.89167692,16.1806591 5.64998462,16.138586 6.06167692,15.646838 L8.54229231,12.6827729 C8.72552308,12.4639033 9.05690769,12.4306327 9.2826,12.6081752 C9.50829231,12.7858669 9.54275385,13.1072338 9.35952308,13.3261035 L6.66706154,16.543204 C6.33598462,16.9388702 6.38383077,17.516704 6.77567692,17.8559743 L6.79044615,17.8689543 C7.21044615,18.2326927 7.85936923,18.1794299 8.21044615,17.7525819 L10.8672154,14.5225014 C11.0484462,14.302289 11.3795231,14.2661837 11.6067538,14.4417867 L11.6069077,14.4419359 C11.8341385,14.6176881 11.8713692,14.9387566 11.6901385,15.1592674 L8.86644615,18.5922536 C8.5826,18.9373426 8.62890769,19.4380423 8.97167692,19.7285258 L8.97167692,19.728675 C9.33183077,20.034078 9.88090769,19.9917065 10.1867538,19.6345327" id="Fill-4" fill="url(#linearGradient-2)"></path>
              </g>
            </g>
            <g class="category-icon id="wheat">
              <circle id="circle-wheat" stroke="#555555" fill="#FFFFFF" cx="40" cy="120.92" r="18"></circle>
              <g id="icon-wheat" transform="translate(35.000000, 105.920000)" fill="url(#linearGradient-41)">
                  <path d="M0.109769911,30.863774 C0.192116904,30.9542564 0.305514711,31 0.41915,31 C0.519783132,31 0.620891228,30.9644217 0.701397734,30.891492 C2.42195712,29.3308913 3.91898628,27.577683 5.17366474,25.6712868 C5.97166469,25.7095838 7.54231337,25.6518428 8.79331085,24.7797007 C10.5470584,23.5579808 11.0057555,21.1999407 11.0057555,21.1999407 C11.0057555,21.1999407 8.62351099,20.8231767 6.87023841,22.0453695 C6.29832162,22.4447688 5.84550221,22.9545083 5.53754702,23.4845783 C3.43244438,27.1113821 0.798112408,29.6748546 0.136902265,30.2746038 C-0.0345005973,30.4297419 -0.0465528249,30.693388 0.109769911,30.863774 M9.02521233,13.0363077 C9.99972102,11.8279444 11.4445634,11.2651329 12.2636993,11.0296184 C12.3091772,10.9548567 12.3550706,10.8814542 12.3958582,10.8029691 C13.3805787,8.91128888 12.6908706,6.61004411 12.6908706,6.61004411 C12.6908706,6.61004411 12.1301155,3.63381561 11.5095149,1.91618561 C11.4440885,1.73569351 11.2534495,1.63362741 11.0693414,1.69178204 C10.8861238,1.75046857 10.7850157,1.94620853 10.8439113,2.12906464 C11.3531921,3.7076909 11.7544185,5.33708425 12.0229516,6.89815774 C11.2697171,7.27125749 10.0651474,8.02525823 9.41901738,9.26677677 C8.69125282,10.6644381 8.8781514,12.2850846 9.02521233,13.0363077 M3.42846656,3.08158306 C3.91180244,4.57894649 4.2930803,6.09616761 4.55929798,7.56764515 C4.49137804,8.03814208 4.36100025,9.38361793 4.8387553,10.679686 C5.59715508,10.9977634 7.18009346,11.8136421 8.01543752,13.3511937 C8.15786754,13.6125349 8.26776248,13.8807909 8.35634338,14.1495196 C8.44029338,13.9560255 8.5377205,13.7644225 8.6495153,13.5764838 C8.59525059,13.3867129 8.23439621,12.039405 8.49040215,10.5444056 C8.38650364,10.271067 8.25523529,10.0009198 8.08917578,9.74188352 C7.33178529,8.56360223 6.06072056,7.91946882 5.27619773,7.61616643 C5.00344928,6.06058927 4.60548829,4.45383131 4.09341704,2.86876313 C4.03446206,2.68637981 3.8378267,2.58567302 3.65413413,2.64435955 C3.47026344,2.70298698 3.36957094,2.89872694 3.42846656,3.08158306 M8.98442474,9.042846 C9.25853871,8.51697215 9.62028365,8.07324762 10.0080923,7.70251187 C10.0173541,7.52792979 10.0210351,7.3515747 10.0080923,7.1719691 C9.89766299,5.59795267 8.88604769,4.31021775 8.36798002,3.74740625 C8.11886107,2.58614582 7.80395951,1.40786453 7.42731256,0.241107782 C7.36841694,0.0587244705 7.17124725,-0.0419232219 6.98761405,0.0167042067 C6.80392147,0.0753316352 6.70281338,0.271071598 6.76218396,0.453927711 C7.13788098,1.61790675 7.45236694,2.79394223 7.69816114,3.95053374 C7.24967578,4.64177004 6.56180825,5.95627736 6.66339131,7.40511951 C6.67217816,7.53259871 6.68886129,7.6577139 6.70880981,7.78099698 C7.34894339,8.17484091 8.01638745,8.72518226 8.50108886,9.4796558 C8.56461538,9.57847138 8.62262043,9.67911908 8.67736011,9.78071237 C8.75756976,9.5323141 8.85867785,9.28480234 8.98442474,9.042846 M4.85502284,23.6941477 C5.02547577,23.3682099 5.23440084,23.0288564 5.48999118,22.7019139 C5.49414712,22.303933 5.45430946,21.891177 5.34340522,21.4793075 C4.78894338,19.4214375 2.72070988,18.1854152 2.72070988,18.1854152 C2.72070988,18.1854152 1.55021891,20.2853055 2.10402767,22.3431755 C2.44030263,23.5907223 3.33198936,24.5359123 3.98322525,25.0867264 C4.2712913,24.6495029 4.8387553,23.7117005 4.85502284,23.6941477 M10.7748039,20.2455902 C12.3091772,18.7602241 12.383806,16.35975 12.383806,16.35975 C12.383806,16.35975 9.97146062,16.3671376 8.43708737,17.8525036 C7.20698834,19.0437279 6.91524131,20.8218174 6.84797444,21.4797803 C8.04791322,20.7558025 9.42501381,20.6431574 10.2752599,20.658819 C10.4487407,20.5355359 10.6166407,20.3988962 10.7748039,20.2455902 M3.31785917,18.0002542 C3.96933253,18.4702784 5.35432941,19.6379807 5.81557944,21.3532467 C5.88979266,21.6284174 5.93366752,21.9031743 5.95824694,22.1737352 C6.08066908,22.052757 6.21146246,21.9363887 6.35027088,21.8260485 L6.35401122,21.7230959 C6.35585171,21.6519984 6.40085461,20.4958205 6.93239941,19.2597983 C6.9277685,18.7754719 6.86050164,18.2662053 6.68565528,17.7661582 C5.98187643,15.7544455 3.82785244,14.6726157 3.82785244,14.6726157 C3.82785244,14.6726157 3.08643265,16.2752367 3.31785917,18.0002542 M12.0025281,15.4543345 C13.278105,13.7436192 12.9664095,11.3620572 12.9664095,11.3620572 C12.9664095,11.3620572 10.5864805,11.7535963 9.310013,13.4638387 C8.28723603,14.8356142 8.28539554,16.6376984 8.32434264,17.2979662 C9.39259747,16.3925507 10.733482,16.061944 11.5758318,15.9419114 C11.7270487,15.7922696 11.8708442,15.6306896 12.0025281,15.4543345 M4.26707599,10.9834612 C4.26707599,10.9834612 6.56738909,11.7088574 7.58547578,13.582512 C7.83916627,14.0492856 7.98670216,14.5424179 8.06970223,15.0207752 C7.71905958,16.3551402 7.86612051,17.5445323 7.87538232,17.6165755 L7.88880007,17.7190553 C7.68426842,17.9439317 7.50663165,18.1826375 7.35309933,18.4268988 C7.3085714,18.1544467 7.24314502,17.879276 7.14761776,17.6059375 C6.53028247,15.8421502 4.93499501,14.7538786 4.30560749,14.3812516 C3.785165,12.7052282 4.26707599,10.9834612 4.26707599,10.9834612" id="Fill-1"></path>
              </g>
            </g>
            <g class="category-icon id="train">
              <circle id="circle-train" stroke="#555555" fill="#FFFFFF" cx="42" cy="161.92" r="18"></circle>
              <g id="icon-train" transform="translate(33.000000, 148.920000)" fill="url(#linearGradient-42)">
                  <path d="M15.3640239,11.8421333 L9.94117647,11.8421333 L9.84313725,5.66193333 L15.2092924,5.66193333 C15.5797101,5.66193333 15.8832055,5.9605 15.8955669,6.33663333 L16.0502984,11.1215 C16.0630861,11.5158333 15.7523444,11.8421333 15.3640239,11.8421333 L15.3640239,11.8421333 Z M14.028133,17.1530667 C13.2971014,17.1530667 12.7046036,16.5507333 12.7046036,15.8075667 C12.7046036,15.0644 13.2971014,14.4616333 14.028133,14.4616333 C14.7591645,14.4616333 15.3520887,15.0644 15.3520887,15.8075667 C15.3520887,16.5507333 14.7591645,17.1530667 14.028133,17.1530667 L14.028133,17.1530667 Z M9.05882353,11.8421333 L3.63597613,11.8421333 C3.24765558,11.8421333 2.9369139,11.5158333 2.94970162,11.1215 L3.10443308,6.33663333 C3.11679454,5.9605 3.42028986,5.66193333 3.79070759,5.66193333 L9.15686275,5.66193333 L9.05882353,11.8421333 Z M4.97186701,17.1530667 C4.24083546,17.1530667 3.64791134,16.5507333 3.64791134,15.8075667 C3.64791134,15.0644 4.24083546,14.4616333 4.97186701,14.4616333 C5.70289855,14.4616333 6.29539642,15.0644 6.29539642,15.8075667 C6.29539642,16.5507333 5.70289855,17.1530667 4.97186701,17.1530667 L4.97186701,17.1530667 Z M3.82011935,2.62426667 C4.00639386,2.43446667 4.26385337,2.31746667 4.54816709,2.31746667 L14.4518329,2.31746667 C15.0204604,2.31746667 15.4812447,2.78633333 15.4812447,3.3644 C15.4812447,3.65343333 15.3661552,3.91516667 15.1798806,4.10453333 C14.9936061,4.2939 14.7361466,4.4109 14.4518329,4.4109 L4.54816709,4.4109 C3.97953964,4.4109 3.51875533,3.94246667 3.51875533,3.3644 C3.51875533,3.07536667 3.63384484,2.81363333 3.82011935,2.62426667 L3.82011935,2.62426667 Z M17.0950554,2.53803333 C16.9676044,1.5431 16.1368286,0.797333333 15.1500426,0.797333333 L13.1768968,0.797333333 L13.1768968,0.398666667 C13.1768968,0.178533333 13.0012788,0 12.78474,0 L6.21526002,0 C5.99872123,0 5.82310315,0.178533333 5.82310315,0.398666667 L5.82310315,0.797333333 L3.84995737,0.797333333 C2.86317136,0.797333333 2.03239557,1.5431 1.90494459,2.53803333 C1.32992327,7.0174 1.09676044,12.2221667 1.23614663,17.212 C1.26598465,18.2897289 2.13554987,19.1468333 3.19607843,19.1468333 L15.8039216,19.1468333 C16.8644501,19.1468333 17.7340153,18.2897289 17.7638534,17.212 C17.9032396,12.2221667 17.6700767,7.0174 17.0950554,2.53803333 L17.0950554,2.53803333 Z M3.30306905,24.5821333 L4.1743393,22.5667 L14.8256607,22.5667 L15.6969309,24.5821333 L3.30306905,24.5821333 Z M5.05498721,20.5300333 L13.9450128,20.5300333 L14.6385337,22.1333667 L4.36189258,22.1333667 L5.05498721,20.5300333 Z M15.8763853,19.7522289 C15.8520887,19.7530667 15.8282182,19.7535 15.8039216,19.7535 L13.6095482,19.7535 L13.7953964,20.1833667 L5.20502984,20.1833667 L5.39087809,19.7535 L3.19607843,19.7535 C3.17178176,19.7535 3.14791134,19.7530667 3.12361466,19.7522289 L0,26 L2.69011083,26 L3.07843137,25.1021333 L15.9215686,25.1021333 L16.3098892,26 L19,26 L15.8763853,19.7522289 Z" id="Fill-1"></path>
              </g>
            </g>
            <g class="category-icon id="road">
              <circle id="circle-road" stroke="#555555" fill="#FFFFFF" cx="52" cy="199.92" r="18"></circle>
              <g id="icon-road" transform="translate(39.000000, 185.920000)">
                  <path d="M9.31170191,7.92421875e-05 L8.18202528,5.48569891 L17.6153323,5.48569891 L16.4858141,7.92421875e-05 L9.31170191,7.92421875e-05 Z M12.3378026,1.46479184 L13.459555,1.46479184 L13.6172469,4.35570532 L12.1802691,4.35570532 L12.3378026,1.46479184 Z" id="Fill-1" fill="url(#linearGradient-43)"></path>
                  <path d="M7.34717714,9.99928637 L4.21378256,24.7567174 L11.5603258,24.7567174 L11.7604915,18.6422318 L14.0371196,18.6422318 L14.2371269,24.7567174 L21.5838285,24.7567174 L18.4502755,9.99928637 L7.34717714,9.99928637 Z M12.0020217,11.4863453 L13.7955894,11.4863453 L13.9152451,15.145591 L11.8822075,15.145591 L12.0020217,11.4863453 Z" id="Fill-2" fill="url(#linearGradient-44)"></path>
                  <polygon id="Fill-3" fill="url(#linearGradient-45)" points="0 6.82378249 0 8.66109185 1.33634025 8.66109185 2.03351302 11.9322094 4.64818823 11.9322094 5.345361 8.66109185 20.4520916 8.66109185 21.1492644 11.9322094 23.7639396 11.9322094 24.4612709 8.66109185 25.7976111 8.66109185 25.7976111 6.82378249"></polygon>
              </g>
            </g>
            <g class="category-icon id="chart">
              <circle id="circle-chart" stroke="#555555" fill="#FFFFFF" cx="66" cy="236.92" r="18"></circle>
              <g id="icon-chart" transform="translate(55.000000, 225.920000)">
                  <g id="Group-3" transform="translate(0.000000, 0.037357)"></g>
                  <path d="M11.6658545,7.15522113 C13.2056139,5.61522973 14.7028729,4.11781605 16.2083303,2.61220395 C16.1758459,2.57755395 16.1340416,2.5304516 16.0896463,2.48597895 C15.6571014,2.05269926 15.2280369,1.61586176 14.7893045,1.18904027 C14.6263412,1.03056293 14.5876693,0.852710977 14.6356998,0.643882852 C14.7158666,0.295139883 15.0319705,0.0386680078 15.38984,0.0386680078 C17.342499,0.0388613672 19.295158,0.0405629297 21.247817,0.0430379297 C21.56191,0.0434633203 21.7508221,0.226690664 21.7508221,0.527828555 C21.7502033,2.48048754 21.7490818,4.43310785 21.7468389,6.38576684 C21.7464135,6.75137074 21.4855717,7.07416488 21.1294811,7.15085121 C20.9287354,7.1940477 20.7540932,7.15808285 20.6006818,7.00049496 C20.1872021,6.57568441 19.7642865,6.1600391 19.3447354,5.74106801 C19.3000307,5.69640199 19.253083,5.65397895 19.1881143,5.59249066 C19.0352443,5.75011723 18.8900314,5.90379926 18.7406033,6.05330473 C17.2924189,7.50322934 15.8436158,8.95257387 14.394774,10.4018411 C13.7085029,11.0883055 13.0230053,11.7755047 12.3347232,12.4599196 C11.9403088,12.8521297 11.4873064,12.8503121 11.0957537,12.4564778 C10.5558943,11.913486 10.0193221,11.3672457 9.48054551,10.8231711 C9.27709277,10.6177461 9.06783926,10.4179286 8.86848574,10.2086364 C8.7736623,10.109095 8.7090416,10.1198457 8.61630645,10.2142051 C8.16593379,10.6726602 7.7081748,11.1237676 7.25563652,11.5800571 C6.79756816,12.0419539 6.34479785,12.5090329 5.88584004,12.9699629 C5.0173084,13.8421684 4.14603105,14.7116282 3.27579785,15.5820934 C2.8677709,15.990159 2.41681816,15.9919766 2.0089459,15.5852645 C1.43853574,15.0164786 0.868976367,14.4468418 0.299881055,13.8767797 C-0.100295508,13.4758684 -0.101068945,13.0280481 0.304250977,12.6237336 C0.846933398,12.0824047 1.39615137,11.5475727 1.93949121,11.0068239 C2.63299395,10.3166082 3.32479512,9.62461371 4.01497207,8.93103363 C5.37831035,7.56096645 6.73971504,6.18904301 8.10251191,4.81843441 C8.52260449,4.39598285 8.96431465,4.3948227 9.38409785,4.8139098 C10.1092342,5.5378473 10.8342932,6.26182348 11.5570318,6.9881973 C11.6060678,7.03754262 11.6349943,7.10688129 11.6658545,7.15522113" id="Fill-1" fill="url(#linearGradient-47)"></path>
                  <path d="M19.0117009,7.65312152 L19.0117009,20.8384907 L16.0288232,20.8384907 L16.0288232,20.6311321 C16.0285911,17.7770317 16.0283591,14.9229313 16.0281657,12.0687922 C16.0281271,11.6633563 16.0301767,11.2578817 16.0272185,10.8524844 C16.0260388,10.6826762 16.0810302,10.5516946 16.2071392,10.4275965 C17.0934212,9.55550707 17.9720462,8.67564457 18.8534556,7.79864379 C18.8973868,7.75494457 18.9446439,7.7146098 19.0117009,7.65312152" id="Fill-4" fill="url(#linearGradient-48)"></path>
                  <path d="M8.77585113,11.9448489 C9.17030426,12.3528758 9.53014605,12.7789625 9.94671949,13.1395778 C10.3098484,13.4538641 10.4274496,13.7949887 10.4214168,14.2716582 C10.3946945,16.3785793 10.4098925,18.4860805 10.4099312,20.5933883 L10.4099312,20.8358996 L7.42554527,20.8358996 C7.42241285,20.771511 7.41622535,20.7036805 7.41622535,20.63585 C7.41572262,18.2514582 7.41433043,15.8670664 7.42102066,13.4826746 C7.42133004,13.3813543 7.47241559,13.2560961 7.54260504,13.183045 C7.9306773,12.7789239 8.33197535,12.3875645 8.77585113,11.9448489" id="Fill-6" fill="url(#linearGradient-49)"></path>
                  <path d="M11.7262445,20.8365107 L11.7262445,20.6326712 C11.7262445,18.7774654 11.7248523,16.9221821 11.7304984,15.0669763 C11.7308078,14.9757107 11.7681648,14.8598111 11.8303492,14.79724 C12.7428121,13.8787056 13.6623906,12.9672482 14.5805382,12.0543599 C14.6116304,12.0234224 14.6451589,11.9949986 14.6976367,11.9470841 L14.6976367,20.8365107 L11.7262445,20.8365107 Z" id="Fill-8" fill="url(#linearGradient-50)"></path>
                  <path d="M6.08560734,20.842818 L3.12210422,20.842818 C3.11796633,20.7810591 3.11100539,20.7253329 3.11096672,20.6696067 C3.11027063,19.7028098 3.10849172,18.7360903 3.11409914,17.7694095 C3.1145632,17.6888559 3.14329641,17.5860661 3.197205,17.5315387 C4.13070539,16.5876743 5.07019992,15.6497266 6.00861164,14.7107348 C6.02531789,14.6939899 6.04476984,14.680068 6.08560734,14.6458048 L6.08560734,20.842818 Z" id="Fill-10" fill="url(#linearGradient-51)"></path>
              </g>
            </g>
            <g class="category-icon id="hands">
              <circle id="cirlce-hands" stroke="#555555" fill="#FFFFFF" cx="103" cy="264.92" r="18"></circle>
              <g id="icon-hands" transform="translate(94.000000, 253.920000)">
                  <path d="M5.80971429,7.69730667 L10.0317143,7.41010667 C10.0922857,7.40650667 10.1532857,7.41544 10.2094286,7.43717333 L12.5275714,8.34210667 L12.555,8.32117333 L12.5977143,8.36957333 L12.81,8.45250667 C13.245,8.62224 13.7501429,8.47957333 14.0117143,8.11370667 C14.1671429,7.89610667 14.2158571,7.63624 14.1487143,7.38237333 C14.0815714,7.12824 13.909,6.91957333 13.663,6.79424 L11.4382857,5.66250667 C11.0794286,5.48010667 10.6735714,5.38357333 10.265,5.38357333 L7.249,5.38357333 L7.249,4.66010667 L10.265,4.66010667 C10.8028571,4.66010667 11.3367143,4.78704 11.8091429,5.02730667 L14.0338571,6.15904 C14.4671429,6.37944 14.7831429,6.76210667 14.9012857,7.20904 C14.9538571,7.40837333 14.9654286,7.61344 14.9377143,7.81357333 L18.1421429,11.63704 C18.4692857,12.0277067 19.0804286,12.10224 19.5037143,11.80304 C19.9257143,11.5053067 20.0164286,10.93784 19.7061429,10.5381067 L13.8564286,2.99944 C13.2631429,2.23464 12.306,1.81090667 11.2955714,1.86117333 L7.501,2.05637333 C7.45014286,2.05904 7.39942857,2.06037333 7.34885714,2.06037333 C6.65557143,2.06037333 5.97357143,1.81757333 5.45728571,1.38290667 L3.832,0.01464 L0,3.91170667 L3.48371429,6.93397333 C4.10957143,7.47704 4.95828571,7.75530667 5.80971429,7.69730667" id="Fill-1" fill="url(#linearGradient-6)"></path>
                  <path d="M17,11.7578997 L14.407853,9 C14.0639785,9.38277477 13.5475978,9.61455037 13,9.6605537 L14.8307455,11.5081286 C15.3728152,12.055027 16.3089993,12.1570462 17,11.7578997" id="Fill-4" fill="url(#linearGradient-7)"></path>
                  <path d="M10,15 L7.59614129,12.4457899 C7.19953579,12.0246292 6.55167912,11.8940031 6,12.0876505 L8.07093639,14.2918694 L10,15 Z" id="Fill-6" fill="url(#linearGradient-7)"></path>
                  <path d="M10,9 L12.4040038,11.5542101 C12.8006093,11.9753708 13.4484659,12.1059969 14,11.9123495 L11.9292087,9.70813062 L10,9 Z" id="Fill-8" fill="url(#linearGradient-7)"></path>
                  <path d="M3,12.2421003 L5.59198439,15 C5.93585887,14.6172252 6.45240224,14.3854496 7,14.3394463 L5.16925453,12.4918714 C4.62718478,11.944973 3.69083814,11.8429538 3,12.2421003" id="Fill-10" fill="url(#linearGradient-7)"></path>
                  <path d="M16.6722534,17.0644402 C16.0745526,16.5202336 15.2638357,16.2411807 14.4503896,16.2993167 L10.4174107,16.5871903 C10.3595511,16.5907987 10.3011456,16.5819781 10.2477892,16.5600601 L8.03329432,15.6530046 L8.0072302,15.6741207 L7.9662918,15.6256072 L7.76351022,15.5424794 C7.34798539,15.3722144 6.86545804,15.5152156 6.6155973,15.8820739 C6.46712734,16.1001842 6.42059402,16.3605266 6.48473086,16.6149886 C6.5488677,16.8697179 6.71371301,17.0788739 6.94869947,17.2045012 L9.07381216,18.3388885 C9.41673955,18.5218499 9.8042898,18.618476 10.1944328,18.618476 L13.0755414,18.618476 L13.0755414,19.3436393 L10.1944328,19.3436393 C9.68092873,19.3436393 9.17083619,19.2164083 8.71955848,18.9755781 L6.59430933,17.8411908 C6.18069496,17.6202739 5.87870598,17.2367099 5.76585244,16.7887284 C5.71563466,16.5889277 5.70471775,16.3833801 5.73119125,16.1829111 L2.67022658,12.3503444 C2.35759361,11.9587615 1.77381193,11.8840534 1.36934047,12.1839551 C0.96637009,12.4823866 0.879717129,13.051184 1.17597473,13.4518548 L6.76406725,21.008334 C7.33079126,21.7749275 8.24508235,22.1995209 9.21013706,22.14927 L12.8349601,21.9536123 C12.8832674,21.9509393 12.9318476,21.9496029 12.9801549,21.9496029 C13.6425384,21.9496029 14.2938684,22.1929723 14.7870397,22.6285246 L16.3395606,24 L20,20.0937943 L16.6722534,17.0644402 Z" id="Fill-12" fill="url(#linearGradient-8)"></path>
              </g>
            </g>
            <g class="category-icon id="graduation">
              <circle id="circle-graduation" stroke="#555555" fill="#FFFFFF" cx="68" cy="304.92" r="18"></circle>
              <g id="icon-graduation" transform="translate(55.000000, 296.920000)">
                  <path d="M15.0846152,0.408744141 C14.278834,0.0979628906 12.9602988,0.0979628906 12.1545176,0.408744141 L0.604283203,4.86181055 C-0.201322266,5.1725918 -0.201322266,5.68077539 0.604283203,5.99155664 L12.1545176,10.444623 C12.9602988,10.7552285 14.278834,10.7552285 15.0846152,10.444623 L26.6348496,5.99155664 C27.4406309,5.68077539 27.4406309,5.1725918 26.6348496,4.86181055 L15.0846152,0.408744141 Z" id="Fill-1" fill="url(#linearGradient-9)"></path>
                  <path d="M13.6196543,12.0274805 C12.9026426,12.0274805 12.2098887,11.9126953 11.6691855,11.704043 L6.49611914,9.70962891 L6.49611914,12.1753125 C6.49611914,13.5418359 9.68531836,14.6497852 13.6196543,14.6497852 C17.5538145,14.6497852 20.7430137,13.5418359 20.7430137,12.1753125 L20.7430137,9.70962891 L15.5702988,11.704043 C15.0294199,11.9126953 14.336666,12.0274805 13.6196543,12.0274805" id="Fill-4" fill="url(#linearGradient-10)"></path>
                  <polygon id="Fill-6" fill="url(#linearGradient-11)" points="25.6732031 12.1797949 26.6292773 12.1797949 26.6292773 5.42680664 25.6732031 5.42680664"></polygon>
                  <path d="M26.8425527,12.4770586 C26.9880996,12.3972539 27.0791543,12.2917852 27.0791543,12.1752422 C27.0791543,11.9266875 26.6764395,11.725418 26.1795059,11.725418 C25.6823965,11.725418 25.2795059,11.9266875 25.2795059,12.1752422 C25.2795059,12.265418 25.3338223,12.3489141 25.4252285,12.4194023 C25.1650723,13.0269023 24.6612832,14.2610625 24.7664004,14.4716484 C24.9070254,14.7527227 25.5257754,15.0339727 25.8912246,14.8372734 C25.8912246,14.8372734 26.1724746,15.1656328 26.6785488,14.9030156 C26.6785488,14.9030156 27.3254238,15.0527812 27.6065146,14.6497148 C27.6065146,14.6497148 27.6203848,13.8949102 26.8425527,12.4770586" id="Fill-8" fill="url(#linearGradient-12)"></path>
              </g>
            </g>
            <g class="category-icon id="environment">
              <circle id="circle-environment" stroke="#555555" fill="#FFFFFF" cx="46" cy="342.92" r="18"></circle>
              <g id="icon-environment" transform="translate(33.000000, 336.920000)">
                  <path d="M6.93550687,3.92633438 C6.867135,3.86862188 6.79935375,3.81012188 6.7295475,3.75443438 C6.4671975,3.54552188 6.19691625,3.34681875 5.91704437,3.16589063 C5.72095687,3.0409875 5.5179225,2.92213125 5.30636625,2.81120625 C5.30636625,2.81120625 5.3158725,2.81525625 5.33246625,2.8227375 C5.84206312,3.04028438 6.32654437,3.329325 6.79268812,3.64952813 C7.26712875,3.97603125 7.7166225,4.34896875 8.14136625,4.75590938 C8.98863187,5.57164688 9.73245375,6.53740313 10.3099444,7.62415313 C10.3833225,7.75920938 10.4570944,7.89429375 10.5212475,8.03514375 C10.5870319,8.17500938 10.6566694,8.31315938 10.7192475,8.45505 L10.8994444,8.88533438 C10.9306912,8.95663125 10.958535,9.029475 10.9841287,9.10333125 L10.9987537,9.14380313 C11.0948569,7.67174063 11.4600037,6.3345375 12.0906787,5.15244375 C11.01141,2.3886 7.9132725,-0.1978875 -5.62500002e-06,0.043846875 C2.73025687,2.51150625 1.59116625,12.2895563 10.8152662,11.540925 C10.56861,10.057725 9.69510375,6.32061563 6.93550687,3.92633438" id="Fill-1" fill="url(#linearGradient-13)"></path>
                  <path d="M12.3470156,13.2423975 C11.8156219,15.22881 11.5875844,17.0634037 11.5875844,17.0634037 L12.2612063,17.0634037 L12.7855406,17.0634037 C12.8346188,15.9601162 12.9639094,14.8611037 13.1877844,13.7858569 C13.207725,13.690035 13.2245156,13.5936225 13.2469875,13.4984756 L13.318425,13.2141319 C13.3668844,13.024935 13.4119125,12.8349787 13.4632688,12.6471037 C13.5797906,12.2754319 13.6814906,11.8995412 13.8211594,11.5382475 L13.9197938,11.2653225 C13.9515187,11.17386 13.9859438,11.0836912 14.0246438,10.9954069 L14.2477313,10.462635 C14.3252719,10.2869381 14.4115312,10.1158819 14.4929531,9.94268812 C14.5723781,9.768285 14.6637,9.6009975 14.7545719,9.43379437 C15.46965,8.08812562 16.3906594,6.892335 17.4398063,5.88222562 C17.9657156,5.37831 18.5223094,4.91655375 19.1097563,4.51225687 C19.6968938,4.1089725 20.3072625,3.74511937 20.9501719,3.47421937 C20.9437312,3.47751 20.9374594,3.48111 20.9310469,3.48440062 C20.565,3.6816975 14.9806125,6.8089725 14.3251313,14.2985194 C25.5344625,15.0715069 24.1595156,3.08553187 27.5207062,0.047581875 C10.0459406,-0.486230625 11.5337531,10.1178506 12.3470156,13.2423975" id="Fill-4" fill="url(#linearGradient-14)"></path>
              </g>
            </g>
            <g class="category-icon id="energy">
              <circle id="circle-energy" stroke="#555555" fill="#FFFFFF" cx="46" cy="385.92" r="18"></circle>
              <g id="icon-energy" transform="translate(35.000000, 372.920000)">
                  <path d="M11.41875,2.3625 C11.2014,2.3625 11.025,2.1861 11.025,1.96875 L11.025,0.39375 C11.025,0.1764 11.2014,0 11.41875,0 C11.6361,0 11.8125,0.1764 11.8125,0.39375 L11.8125,1.96875 C11.8125,2.1861 11.6361,2.3625 11.41875,2.3625" id="Fill-1" fill="url(#linearGradient-15)"></path>
                  <path d="M5.90643565,3.9375 C5.77026524,3.9375 5.63803038,3.86055612 5.56482895,3.72136549 L4.77771672,2.22398564 C4.66909524,2.01736105 4.73363844,1.75281242 4.92254537,1.63350617 C5.10909097,1.51333538 5.35073442,1.5842275 5.46014302,1.79171663 L6.24725524,3.28909648 C6.35587673,3.49572107 6.29133353,3.76026971 6.10321371,3.87957595 C6.04103184,3.9193447 5.97334019,3.9375 5.90643565,3.9375" id="Fill-3" fill="url(#linearGradient-16)"></path>
                  <path d="M3.50443199,7.0875 C3.43095369,7.0875 3.35661094,7.07096807 3.28831934,7.03475526 L1.79195536,6.24752029 C1.58448721,6.13888187 1.51360227,5.89798797 1.63289645,5.70983881 C1.75305508,5.52090242 2.01757696,5.45634915 2.22418066,5.56577481 L3.72054464,6.35300978 C3.92801279,6.4616482 3.99889773,6.7025421 3.87960355,6.89069126 C3.79920965,7.01743609 3.65398195,7.0875 3.50443199,7.0875" id="Fill-5" fill="url(#linearGradient-17)"></path>
                  <path d="M1.96875,11.025 L0.39375,11.025 C0.1764,11.025 0,10.8486 0,10.63125 C0,10.4139 0.1764,10.2375 0.39375,10.2375 L1.96875,10.2375 C2.1861,10.2375 2.3625,10.4139 2.3625,10.63125 C2.3625,10.8486 2.1861,11.025 1.96875,11.025" id="Fill-7" fill="url(#linearGradient-18)"></path>
                  <path d="M2.00806801,17.325 C1.85851805,17.325 1.71329035,17.2541096 1.63289645,17.1280823 C1.51360227,16.9398289 1.58448721,16.6988016 1.79195536,16.5901031 L3.28831934,15.8024322 C3.49405859,15.6945212 3.75944492,15.7583226 3.87960355,15.9465759 C3.99889773,16.1348293 3.92801279,16.3758566 3.72054464,16.4845552 L2.22418066,17.272226 C2.15588906,17.3084589 2.08154631,17.325 2.00806801,17.325" id="Fill-9" fill="url(#linearGradient-17)"></path>
                  <path d="M20.041932,17.325 C19.9684537,17.325 19.8941109,17.3084589 19.8258193,17.272226 L18.3294554,16.4845552 C18.1219872,16.3758566 18.0511023,16.1348293 18.1703964,15.9465759 C18.2896906,15.7583226 18.5542125,15.6945212 18.7616807,15.8024322 L20.2580446,16.5901031 C20.4655128,16.6988016 20.5363977,16.9398289 20.4171036,17.1280823 C20.3367096,17.2541096 20.1914819,17.325 20.041932,17.325" id="Fill-11" fill="url(#linearGradient-17)"></path>
                  <path d="M21.65625,11.025 L20.08125,11.025 C19.8639,11.025 19.6875,10.8486 19.6875,10.63125 C19.6875,10.4139 19.8639,10.2375 20.08125,10.2375 L21.65625,10.2375 C21.8736,10.2375 22.05,10.4139 22.05,10.63125 C22.05,10.8486 21.8736,11.025 21.65625,11.025" id="Fill-13" fill="url(#linearGradient-18)"></path>
                  <path d="M18.545568,7.0875 C18.3960181,7.0875 18.2507904,7.01743609 18.1703964,6.89069126 C18.0511023,6.7025421 18.1219872,6.4616482 18.3294554,6.35300978 L19.8258193,5.56577481 C20.032423,5.45634915 20.2969449,5.52090242 20.4171036,5.70983881 C20.5363977,5.89798797 20.4655128,6.13888187 20.2580446,6.24752029 L18.7616807,7.03475526 C18.6933891,7.07096807 18.6190463,7.0875 18.545568,7.0875" id="Fill-15" fill="url(#linearGradient-17)"></path>
                  <path d="M16.1435643,3.9375 C16.0766598,3.9375 16.0089682,3.9193447 15.9467863,3.87957595 C15.7586665,3.76026971 15.6941233,3.49572107 15.8027448,3.28909648 L16.589857,1.79171663 C16.6992656,1.5842275 16.9393348,1.51333538 17.1274546,1.63350617 C17.3163616,1.75281242 17.3809048,2.01736105 17.2722833,2.22398564 L16.4851711,3.72136549 C16.4119696,3.86055612 16.2797348,3.9375 16.1435643,3.9375" id="Fill-17" fill="url(#linearGradient-16)"></path>
                  <polygon id="Fill-19" fill="url(#linearGradient-19)" points="7.875 22.05 7.8757875 22.8375 14.175 22.8375 14.175 22.05"></polygon>
                  <path d="M7.24682704,17.9657007 C7.60119438,18.1598203 7.82247709,18.5125499 7.85870131,18.9 L9.45020439,18.9 L9.45020439,11.7980628 L8.66272142,11.7980628 C7.79412771,11.7980628 7.08775549,11.0902364 7.08775549,10.2198546 C7.08775549,9.3494727 7.79412771,8.64164629 8.66272142,8.64164629 C9.53131513,8.64164629 10.2376874,9.3494727 10.2376874,10.2198546 L10.2376874,11.0089587 L11.8126533,11.0089587 L11.8126533,10.2198546 C11.8126533,9.3494727 12.5190255,8.64164629 13.3876192,8.64164629 C14.2562129,8.64164629 14.9625852,9.3494727 14.9625852,10.2198546 C14.9625852,11.0902364 14.2562129,11.7980628 13.3876192,11.7980628 L12.6001363,11.7980628 L12.6001363,18.9 L14.1900644,18.9 C14.2270761,18.5125499 14.4507212,18.1598203 14.8082385,17.9641225 C17.3321214,16.5752992 18.9,13.9231202 18.9,11.041312 C18.9,8.88942499 18.0510934,6.87878766 16.5107767,5.37948981 C14.97046,3.88098107 12.937179,3.09108783 10.7889254,3.15342706 C6.7633125,3.27179268 3.34012404,6.64600194 3.15821548,10.6751676 C3.02198092,13.7132185 4.58828455,16.5066472 7.24682704,17.9657007" id="Fill-21" fill="url(#linearGradient-20)"></path>
                  <path d="M8.6625,9.45 C8.2285875,9.45 7.875,9.8035875 7.875,10.2375 C7.875,10.6714125 8.2285875,11.025 8.6625,11.025 L9.45,11.025 L9.45,10.2375 C9.45,9.8035875 9.0964125,9.45 8.6625,9.45" id="Fill-23" fill="url(#linearGradient-20)"></path>
                  <polygon id="Fill-25" fill="url(#linearGradient-19)" points="14.175 19.6875 7.875 19.6875 7.8757874 20.475 14.175 20.475"></polygon>
                  <path d="M11.8125,25.9875 C13.115025,25.9875 14.175,24.927525 14.175,23.625 L9.45,23.625 C9.45,24.927525 10.509975,25.9875 11.8125,25.9875" id="Fill-27" fill="url(#linearGradient-21)"></path>
                  <path d="M14.175,10.2375 C14.175,9.8035875 13.8214125,9.45 13.3875,9.45 C12.9535875,9.45 12.6,9.8035875 12.6,10.2375 L12.6,11.025 L13.3875,11.025 C13.8214125,11.025 14.175,10.6714125 14.175,10.2375" id="Fill-29" fill="url(#linearGradient-20)"></path>
                  <polygon id="Fill-31" fill="url(#linearGradient-22)" points="10.2375 18.9 11.8125 18.9 11.8125 11.8125 10.2375 11.8125"></polygon>
              </g>
            </g>
            <g class="category-icon id="resources">
              <circle id="circle-natural-resources" stroke="#555555" fill="#FFFFFF" cx="42" cy="427.92" r="18"></circle>
              <g id="icon-natural-resources" transform="translate(30.000000, 415.920000)">
                  <path d="M25.6316734,23 L0.368249608,23 C0.164846533,23 0,22.7760945 0,22.5 C0,22.2238011 0.164846533,22 0.368249608,22 L25.6316734,22 C25.835115,22 26,22.2238011 26,22.5 C26,22.7760945 25.835115,23 25.6316734,23" id="Fill-1" fill="url(#linearGradient-23)"></path>
                  <path d="M6.54358476,7.00189422 C6.52887667,7.00059593 6.51425372,7 6.49975849,7 C6.24333541,7 6.0246936,7.19599872 6.00191842,7.45652868 C5.97795125,7.73138236 6.18133156,7.97407683 6.45640049,7.99806321 C6.47123629,7.99934021 6.48602952,8 6.50063118,8 C6.75718197,8 6.97531293,7.80357561 6.99806683,7.54368415 C7.02211913,7.26836224 6.81895168,7.026136 6.54358476,7.00189422" id="Fill-3" fill="url(#linearGradient-20)"></path>
                  <path d="M6.44154742,9.06875239 C6.38136781,9.05907559 6.32363565,9.03551784 6.26921938,9 L6,22 L7,22 L6.73101747,9.00253699 C6.65824534,9.04907261 6.58122965,9.07364515 6.50269417,9.07364515 C6.48234481,9.07364515 6.46171914,9.07197799 6.44154742,9.06875239" id="Fill-5" fill="url(#linearGradient-24)"></path>
                  <path d="M6.60720909,6.68126927 C6.62220909,6.68357654 6.63705,6.68666592 6.6518,6.6903419 L6.9508,5.26230279 C6.98173182,5.12590056 6.99961818,4.93881676 6.99952857,4.7507162 C6.99961818,4.65596201 6.99498182,4.51494525 6.97252727,4.38167151 L6.42202727,0.388073743 L6.42173182,0.38607933 L6.42139091,0.384084916 L6.42098182,0.381660335 C6.4058,0.295392179 6.35961818,0.0327553073 6.21568636,0.0327553073 C6.20673182,0.0327553073 6.19748182,0.0338893855 6.18818636,0.035922905 C6.07750455,0.0607944134 6.02109545,0.208498324 6.02052727,0.47504581 L6.02170909,7.00006257 C6.16614091,6.79080559 6.34786818,6.67602905 6.53700455,6.67602905 C6.56018636,6.67602905 6.58370909,6.67774972 6.60720909,6.68126927" id="Fill-7" fill="url(#linearGradient-25)"></path>
                  <path d="M5.20995,9.00088679 L3.7768125,9.26001887 C3.6377625,9.28149057 3.4676625,9.34601887 3.3118125,9.43688679 C3.233325,9.48220755 3.120225,9.55669811 3.0275625,9.6535283 L0.1651875,12.3720566 L0.1637625,12.3734151 L0.1623375,12.3749245 L0.16035,12.3770755 C0.09555,12.4467358 -0.1015125,12.6588113 0.0656625,12.8781698 C0.125025,12.9560943 0.205725,12.9973396 0.2989125,12.9973396 C0.412725,12.9973396 0.518325,12.936434 0.569025,12.9072264 L5.9861625,9.75775472 C5.629575,9.62756604 5.348625,9.34854717 5.20995,9.00088679" id="Fill-10" fill="url(#linearGradient-26)"></path>
                  <path d="M12.7448085,10.3190947 L7.26559649,7 C7.28576742,7.11879217 7.29179595,7.24216246 7.28136925,7.36796115 C7.25843051,7.64232966 7.16004037,7.8999781 7,8.11307948 L7.94996718,9.29383547 C8.03861309,9.41019925 8.18068163,9.53249468 8.33871249,9.62815741 C8.41806915,9.67644659 8.54019425,9.74113736 8.67096403,9.77517467 L12.4835344,10.97281 L12.4855439,10.9734071 L12.4875534,10.9738848 L12.4905108,10.9746412 C12.5293739,10.9840761 12.5944745,11 12.6657173,11 C12.8151035,11 12.921797,10.9298951 12.974158,10.7973686 C13.0457041,10.6164334 12.9685087,10.4555226 12.7448085,10.3190947" id="Fill-13" fill="url(#linearGradient-27)"></path>
                  <path d="M16.5435475,12.0019045 C16.5287931,12.0006046 16.5140085,12 16.499496,12 C16.2431388,12 16.0246047,12.1959551 16.0019289,12.4563923 C15.9778926,12.7313704 16.1812792,12.9740016 16.4563818,12.9980048 C16.4712571,12.9993047 16.4859812,13 16.5006147,13 C16.7571231,13 16.9752641,12.8035309 16.9980608,12.543638 C17.0221576,12.2683576 16.8188919,12.0260588 16.5435475,12.0019045" id="Fill-15" fill="url(#linearGradient-20)"></path>
                  <path d="M16.4415475,13.0536536 C16.3818615,13.0463282 16.3243061,13.0274009 16.2692739,13 L16,23 L17,23 L16.7309784,13.0019006 C16.6582282,13.0378149 16.5812728,13.0574549 16.5027194,13.0574549 C16.4823942,13.0574549 16.4617606,13.0561482 16.4415475,13.0536536" id="Fill-17" fill="url(#linearGradient-28)"></path>
                  <path d="M16.5991554,10.8162254 C16.6145547,10.8175326 16.6297562,10.819318 16.6448258,10.8214223 L16.950273,10.0017058 C16.9818301,9.92356008 17.0000653,9.81620941 17,9.70806166 C17.0000653,9.65354142 16.9953828,9.57255815 16.9723663,9.49629358 L16.4100109,7.2039567 L16.4097471,7.20284079 L16.4094174,7.20172488 C16.3937213,7.15109439 16.346699,7 16.1993338,7 C16.1901997,7 16.1807359,7.00060578 16.1712391,7.00175357 C16.0582998,7.01616477 16.0006595,7.10100591 16,7.25385388 L16.0012201,11 C16.1487831,10.8797366 16.3340036,10.8131964 16.52727,10.8131964 C16.5511109,10.8131964 16.5752486,10.8142167 16.5991554,10.8162254" id="Fill-19" fill="url(#linearGradient-29)"></path>
                  <path d="M15.6239215,11.2713117 C15.5626771,11.1887876 15.5146708,11.0972103 15.4801875,11 L14.5233011,11.1944206 C14.4299576,11.2107564 14.3163298,11.2592811 14.2125595,11.32728 C14.1698912,11.354882 14.0883625,11.4127817 14.0226697,11.4897532 L12.1102849,13.5304855 L12.1092884,13.5315719 L12.1083276,13.5327387 L12.1069041,13.5344689 C12.0637021,13.5867758 11.932281,13.7461105 12.0438448,13.910515 C12.0835238,13.9690987 12.1373662,14 12.1996426,14 C12.2752996,14 12.3457254,13.9545333 12.3795682,13.9326851 L16,11.5677709 C15.8550916,11.5087849 15.725521,11.4083557 15.6239215,11.2713117" id="Fill-21" fill="url(#linearGradient-7)"></path>
                  <path d="M19.829818,13.4893058 L16.1774214,11 C16.1908124,11.0891022 16.1948692,11.181682 16.1878685,11.2760429 C16.1725748,11.4817286 16.1065893,11.6746491 16,11.8343205 L16.633612,12.7204654 C16.6923456,12.8073623 16.7870876,12.8991363 16.8926716,12.9711899 C16.946056,13.0074923 17.0276584,13.0560087 17.1141073,13.0815816 L19.6557713,13.9796011 L19.6570637,13.9799828 L19.6583203,13.9803644 C19.6859279,13.9880405 19.7294755,14 19.7772235,14 C19.8767403,14 19.9477519,13.9474971 19.9828269,13.8480895 C20.0304313,13.7123369 19.9789497,13.5916821 19.829818,13.4893058" id="Fill-23" fill="url(#linearGradient-7)"></path>
                  <path d="M22.5435375,15.0018451 C22.5286897,15.0006007 22.5140564,15 22.499466,15 C22.2431474,15 22.0245493,15.1959236 22.0019342,15.4563398 C21.9778601,15.7313452 22.18131,15.9739541 22.4563815,15.9979833 C22.4711864,15.9992705 22.4859484,16 22.5006246,16 C22.7571149,16 22.9752839,15.8035186 22.9980706,15.5436602 C23.0221018,15.2683115 22.8188665,15.0259601 22.5435375,15.0018451" id="Fill-25" fill="url(#linearGradient-20)"></path>
                  <path d="M22.4415615,14.0375325 C22.38179,14.0324573 22.3242867,14.019199 22.2692507,14 L22,21 L23,21 L22.7309881,14.0012983 C22.6581639,14.0264773 22.5813204,14.0401684 22.5027259,14.0401684 C22.4823511,14.0401684 22.4617772,14.0393029 22.4415615,14.0375325" id="Fill-27" fill="url(#linearGradient-30)"></path>
                  <path d="M22.5991006,13.8621677 C22.6144514,13.863118 22.6297085,13.8644417 22.6448253,13.8660369 L22.9502023,13.2513067 C22.9818398,13.1926915 23.0000923,13.1121507 23,13.0311008 C23.0000923,12.9901686 22.9953653,12.9294151 22.9723392,12.8722593 L22.4099774,11.1530037 L22.4096966,11.1521552 L22.4093222,11.1513406 C22.3936907,11.1133273 22.3467024,11 22.199279,11 C22.1901528,11 22.1807458,11.0005091 22.1712919,11.0013576 C22.0583141,11.0122186 22.0007488,11.0757891 22,11.1904062 L22.0012168,14 C22.1488274,13.9097522 22.3340193,13.8598937 22.527261,13.8598937 C22.5510359,13.8598937 22.5752321,13.8606403 22.5991006,13.8621677" id="Fill-29" fill="url(#linearGradient-31)"></path>
                  <path d="M21.7178888,16.0904626 C21.6720131,16.0629355 21.6359868,16.0324005 21.6101509,16 L20.8924665,16.0648011 C20.8224596,16.0702646 20.7372239,16.0864268 20.6594132,16.1090805 C20.6273646,16.1182943 20.5662601,16.1375785 20.5169749,16.1632591 L19.0827425,16.843518 L19.081947,16.8438416 L19.0812651,16.8442414 L19.0801665,16.8448315 C19.0477769,16.8622501 18.9492066,16.9153817 19.0328891,16.9701504 C19.0626269,16.9897011 19.1030475,17 19.1497188,17 C19.2064668,17 19.259313,16.9848658 19.2846942,16.9775747 L22,16.1892633 C21.891315,16.1695793 21.7941085,16.1361317 21.7178888,16.0904626" id="Fill-31" fill="url(#linearGradient-32)"></path>
                  <path d="M25.8723519,15.8297684 L23.1329969,15 C23.1431628,15.0297564 23.1460673,15.0605763 23.1408315,15.0920382 C23.1294427,15.1606003 23.079951,15.2248886 23,15.2781412 L23.4751583,15.5734981 C23.5192996,15.602472 23.5902695,15.6330712 23.6694562,15.6571291 C23.7094699,15.6691681 23.7706944,15.6853806 23.8355495,15.6939083 L25.7418008,15.993218 L25.7427563,15.9933384 L25.7437499,15.9934588 C25.7644256,15.9960071 25.7970251,16 25.8329496,16 C25.907512,16 25.9607872,15.9825033 25.9870808,15.949396 C26.0228524,15.9041294 25.9842527,15.8639191 25.8723519,15.8297684" id="Fill-33" fill="url(#linearGradient-32)"></path>
              </g>
            </g>
            <g class="category-icon id="mining">
              <circle id="circle-mining" stroke="#555555" fill="#FFFFFF" cx="37" cy="467.92" r="18"></circle>
              <g id="icon-mining" transform="translate(22.000000, 455.920000)">
                  <path d="M13.118476,5.76929667 C12.8386627,5.50947 12.5529693,5.25727 12.2626093,5.01443 L0.259476,16.1601967 C-0.0865106667,16.4813833 -0.0865106667,17.00199 0.259476,17.3231767 L0.675836,17.7098833 C1.02172933,18.03107 1.58238267,18.03107 1.928836,17.7098833 L13.9314093,6.56411667 C13.6699827,6.29441 13.3983827,6.02921 13.118476,5.76929667" id="Fill-1" fill="url(#linearGradient-33)"></path>
                  <path d="M16.6136509,3 L17.7490994,1.86452583 C18.0836335,1.52998421 18.0836335,0.987876965 17.7490994,0.653425585 L17.3469727,0.250838535 C17.0125289,-0.083612845 16.4698924,-0.083612845 16.1354485,0.250838535 L15,1.3863127 C15.291578,1.62889374 15.5733194,1.88645559 15.8434193,2.15656163 C16.1135193,2.42666767 16.3710753,2.70850568 16.6136509,3" id="Fill-4" fill="url(#linearGradient-20)"></path>
                  <path d="M6.47700909,0.162710563 C6.00473636,0.252611972 5.94082727,0.904259859 6.38728182,1.08406268 C8.41273636,1.89903451 10.4884636,3.20617535 12.4031,4.9544007 C12.6845545,5.21092183 12.9622818,5.47687254 13.2358273,5.75280211 C13.5097364,6.02818239 13.7739182,6.30795704 14.0285545,6.59139366 C15.7645545,8.51951338 17.0625545,10.6098585 17.8718273,12.6495768 C18.0504636,13.0991754 18.6975545,13.0348162 18.7868273,12.5592176 C19.3051,9.80806972 18.4978273,6.68468239 16.4394636,4.16359789 C16.1987364,3.86871761 15.9412818,3.58244296 15.6663727,3.30568944 C15.3914636,3.02875282 15.1066455,2.76893592 14.8138273,2.52660493 C12.3104636,0.453745775 9.20882727,-0.359303521 6.47700909,0.162710563" id="Fill-6" fill="url(#linearGradient-34)"></path>
                  <path d="M27.3904527,2.18337375 L23.513178,9.32652375 C23.4870681,9.37473625 23.4736176,9.42863625 23.474233,9.48332375 L23.5355956,15.3538737 C23.5370901,15.4889737 23.4536615,15.6107737 23.3267165,15.6588112 L21.4543648,16.3682612 C21.3802549,16.3963487 21.3189802,16.4505112 21.2824088,16.5203362 L20.1123868,18.7479112 C19.9963429,18.9690237 19.6827604,18.9809237 19.5499253,18.7692612 L18.4451341,17.0076237 C18.3366505,16.8345487 18.096211,16.8038362 17.9473758,16.9438362 L12.1023648,22.4426862 C11.889178,22.6432362 12.0317714,22.9999737 12.3250462,22.9999737 L27.6757275,22.9999737 C27.8548044,22.9999737 28.0000352,22.8555112 28.0000352,22.6772737 L28.0000352,8.88841125 L28.0000352,2.33676125 C28.0000352,2.00172375 27.5504527,1.88858625 27.3904527,2.18337375" id="Fill-9" fill="url(#linearGradient-35)"></path>
              </g>
            </g>
            <g class="category-icon id="house">
              <circle id="circle-house" stroke="#555555" fill="#FFFFFF" cx="32" cy="508.92" r="18"></circle>
              <g id="icon-house" transform="translate(18.000000, 494.920000)">
                  <path d="M13.5000134,4 L4,13.8959752 L4.04235468,13.8959752 C4.01886733,13.8959752 4,13.9157437 4,13.9402382 L4,25.9557927 C4,25.9802873 4.04235468,26 4.04235468,26 L10.8682681,26 L10.8682681,16.7549215 C10.8682681,16.730413 10.8871622,16.7106445 10.9105694,16.7106445 L16.0894306,16.7106445 C16.1128512,16.7106445 16.1317185,16.730413 16.1317185,16.7549215 L16.1317185,26 L22.957672,26 C22.9811327,26 23,25.9557927 23,25.9557927 L23,14.2669204 C23,14.2424119 22.9811327,14.2226992 22.957672,14.2226992 L23,14.2226992 L13.5000134,4 Z" id="Fill-1" fill="url(#linearGradient-36)"></path>
                  <path d="M13.5515841,0.00200486634 C13.2232128,0.00605307263 12.891463,0.137421788 12.6331152,0.395201117 L0.402239326,12.6011508 C-0.114483861,13.1167654 -0.136202451,13.9371844 0.353534525,14.4405782 C0.843354239,14.9439721 1.65349213,14.9341536 2.17028427,14.4184832 L13.5739921,3.03803631 L24.8103359,14.5880922 C25.3194058,15.1114162 26.1294058,15.1333855 26.6264237,14.6373659 C27.1234416,14.1413464 27.1137337,13.3207458 26.6046086,12.7974358 L14.5533144,0.409614525 C14.2872031,0.136122905 13.938961,-0.000162011173 13.5961658,0.00261731844 C13.5813006,0.00261731844 13.5664492,0.00200486634 13.5515841,0.00200486634 L13.5515841,0.00200486634 Z" id="Fill-3" fill="url(#linearGradient-37)"></path>
              </g>
            </g>
            <g class="category-icon id="income-security">
              <circle id="circle-income-security" stroke="#555555" fill="#FFFFFF" cx="18" cy="547.92" r="18"></circle>
              <g id="icon-income-security" transform="translate(8.000000, 532.920000)">
                  <path d="M8.65261431,19.1718537 C8.53371749,18.7617812 8.2606719,18.555728 7.83444882,18.555728 C7.63293557,18.555728 7.44404904,18.6247157 7.2667608,18.7637614 C7.08890122,18.9027001 7,19.1047927 7,19.3714309 C7,19.6597982 7.07153235,19.9427065 7.21305441,20.2201557 C7.35566203,20.4981402 7.55037627,20.7524686 7.79919685,20.9860847 C8.04756036,21.2187375 8.34380254,21.4213118 8.68735206,21.593326 C9.03095872,21.7653403 9.40398962,21.8900425 9.80701611,21.9679146 L9.80701611,22.3006503 C9.80701611,22.7668656 10.0553225,23 10.553135,23 C11.0503191,23 11.2986826,22.7668656 11.2986826,22.3006503 L11.2986826,21.9841848 C11.6537733,21.9290053 11.9948089,21.8235168 12.3209896,21.6677728 C12.6461418,21.5125104 12.933471,21.3098825 13.1828629,21.0600498 C13.4312264,20.8116621 13.6290831,20.5094865 13.777347,20.1531483 C13.9257823,19.7983088 14,19.3936418 14,18.9382376 C14,18.5725334 13.9289819,18.239316 13.7863742,17.9397094 C13.763749,17.8918087 13.7389526,17.8440151 13.7137563,17.79772 C13.580633,17.5546844 13.412772,17.3329498 13.2086306,17.1327839 C12.966609,16.8942439 12.6793369,16.6779148 12.3473286,16.4842249 C12.0163486,16.289518 11.6664572,16.1150419 11.2986826,15.9597795 L11.2986826,13.5624448 C11.5117942,13.6521448 11.6537733,13.7793091 11.7253628,13.9459177 C11.7963809,14.1119912 11.8590003,14.2731408 11.9116783,14.4284032 C11.9658418,14.5841473 12.0394881,14.719179 12.134217,14.8364955 C12.2284317,14.9527951 12.4014349,15.0115069 12.6492842,15.0115069 C12.8866207,15.0115069 13.0849345,14.9336348 13.2443967,14.7773556 C13.4043732,14.6226284 13.4848757,14.4284032 13.4848757,14.1952688 C13.4848757,13.9074366 13.4248845,13.6378549 13.3065019,13.388932 C13.1886906,13.1385641 13.0292284,12.9162943 12.827658,12.723086 C12.6251163,12.5288608 12.3920077,12.3642324 12.1258182,12.2316626 C11.8590003,12.0981295 11.5833265,12.0049506 11.2986826,11.9482726 L11.2986826,11.7988975 C11.2986826,11.7683374 11.2975971,11.7383125 11.2960545,11.7091975 C11.2686871,11.2365597 11.0150672,11 10.535709,11 C10.0774335,11 9.83598328,11.2365597 9.80913009,11.7091975 C9.80810167,11.7383125 9.80701611,11.7683374 9.80701611,11.7988975 L9.80701611,11.9482726 C9.52288643,12.0157617 9.25612563,12.1202869 9.00776212,12.2646846 C8.75888441,12.4091359 8.53634568,12.5865557 8.34111722,12.7974792 C8.1459459,13.0084562 7.99179712,13.2524017 7.87867089,13.5299045 C7.76708729,13.8073537 7.71132405,14.1178785 7.71132405,14.4619069 C7.71132405,14.8054537 7.76343068,15.1139982 7.87027212,15.3855602 C7.97654222,15.6571757 8.12492042,15.9016029 8.31432116,16.1175038 C8.50423611,16.3338864 8.72574642,16.5251144 8.98096606,16.6922048 C9.01936042,16.7173593 9.05826899,16.7424603 9.09826311,16.7671332 C9.31977342,16.9036099 9.55608156,17.0283122 9.80701611,17.1412401 L9.80701611,20.3532607 C9.21407467,20.1314726 8.82938833,19.7376703 8.65261431,19.1718537 L8.65261431,19.1718537 Z M11.1176471,17.5806452 C11.4743715,17.7437318 11.7693908,17.9249204 12.0029037,18.1221309 C12.2358206,18.3209155 12.3529412,18.5533744 12.3529412,18.8215875 C12.3529412,19.2300629 12.2358206,19.5479722 12.0029037,19.7746968 C11.7693908,20.0019837 11.4743715,20.1738402 11.1176471,20.2903226 L11.1176471,17.5806452 Z M9.58820826,14.894144 C9.50981068,14.7578737 9.47058824,14.5711731 9.47058824,14.3350131 C9.47058824,14.1688158 9.50981068,13.9889116 9.58820826,13.7933015 C9.66622733,13.5981482 9.76425979,13.4414317 9.88235294,13.3225806 L9.88235294,15.2580645 C9.76425979,15.1518354 9.66622733,15.0308712 9.58820826,14.894144 L9.58820826,14.894144 Z" id="Fill-1" fill="url(#linearGradient-38)"></path>
                  <path d="M10.4997492,24.3567456 C6.1406403,24.3567456 2.60683774,21.0918641 2.60683774,17.0639547 C2.60683774,14.665345 3.86023552,12.5371267 5.79520211,11.20793 C5.33640135,10.71138 5.05918135,10.0674562 5.05918135,9.36513903 L5.05918135,9.00051493 C2.02637006,10.7014418 0,13.7814109 0,17.2991246 C0,22.6567456 4.70098012,27 10.4997492,27 C16.2990756,27 21,22.6567456 21,17.2991246 C21,13.7809475 18.9736857,10.7004634 15.9397597,9 L15.9397597,9.36513903 C15.9397597,10.0674562 15.6627069,10.71138 15.2042963,11.20793 C17.1393186,12.5371267 18.393218,14.665345 18.393218,17.0639547 C18.393218,21.0918641 14.8588581,24.3567456 10.4997492,24.3567456" id="Fill-3" fill="url(#linearGradient-39)"></path>
                  <path d="M6.80592984,3.04696362 L6.80592984,3.56932185 C6.32098307,3.83541664 6,4.29505947 6,4.81790387 L6,7.38134852 L6,8.50957747 C6,8.97019263 6.24871044,9.38165102 6.63952275,9.65520035 C6.94681003,9.87062586 7.34238051,10 7.774666,10 L13.2259127,10 C13.6581982,10 14.0531257,9.87062586 14.3610559,9.65520035 C14.7512253,9.38165102 15,8.97019263 15,8.50957747 L15,7.38080833 L15,4.81790387 C15,4.24779335 14.6192184,3.75282246 14.0596842,3.50212292 L14.0596842,3.04696362 C14.0596842,1.36704444 12.432457,0 10.4327427,0 C8.43251411,0 6.80592984,1.36704444 6.80592984,3.04696362 M11.2735557,6.78515168 C11.2005696,6.89345396 11.0970708,6.98509846 10.9746542,7.05172964 L10.9746542,8.4 L10.0259561,8.4 L10.0259561,7.05172964 C9.90347844,6.98509846 9.80004068,6.89345396 9.72644426,6.78515168 C9.64607404,6.6680149 9.6,6.53124002 9.6,6.3846727 C9.6,5.95146354 10.0028885,5.6 10.5002441,5.6 C10.9970504,5.6 11.4,5.95146354 11.4,6.3846727 C11.4,6.53124002 11.353926,6.6680149 11.2735557,6.78515168 M13.2,2.93853602 L13.2,3.19859778 L7.88617896,3.19859778 C7.85703112,3.19859778 7.82851556,3.19909857 7.8,3.2 L7.8,2.93853602 C7.8,1.75926884 9.01105777,0.8 10.4999368,0.8 C11.9888158,0.8 13.2,1.75926884 13.2,2.93853602" id="Fill-6" fill="url(#linearGradient-40)"></path>
              </g>
            </g>
            <g class="category-icon id="science">
              <circle id="circle-science" stroke="#555555" fill="#FFFFFF" cx="340" cy="265.92" r="18"></circle>
              <g id="icon-science" transform="translate(329.000000, 253.920000)">
                  <polygon id="Fill-1" fill="#555555" points="4.11856397 9.61027186 5.49141863 9.61027186 5.49141863 8.2374172 4.11856397 8.2374172"></polygon>
                  <polygon id="Fill-2" fill="#555555" points="4.11856397 16.5659531 5.49141863 16.5659531 5.49141863 15.1930984 4.11856397 15.1930984"></polygon>
                  <path d="M8.92372883,9.61018508 L11.7611353,9.61018508 C12.1403626,9.61018508 12.4475627,9.91738517 12.4475627,10.2966124 C12.4475627,10.6761289 12.1403626,10.9830397 11.7611353,10.9830397 L8.92372883,10.9830397 C8.54421233,10.9830397 8.2373015,10.6761289 8.2373015,10.2966124 C8.2373015,9.91738517 8.54421233,9.61018508 8.92372883,9.61018508 L8.92372883,9.61018508 Z M13.8204173,14.5068736 C13.8204173,14.8861008 13.5132172,15.1933009 13.13399,15.1933009 L8.92372883,15.1933009 C8.54421233,15.1933009 8.2373015,14.8861008 8.2373015,14.5068736 C8.2373015,14.1273571 8.54421233,13.8204463 8.92372883,13.8204463 L13.13399,13.8204463 C13.5132172,13.8204463 13.8204173,14.1273571 13.8204173,14.5068736 L13.8204173,14.5068736 Z M11.7611353,17.9390102 L8.92372883,17.9390102 C8.54421233,17.9390102 8.2373015,17.6318101 8.2373015,17.2525829 C8.2373015,16.8730664 8.54421233,16.5661556 8.92372883,16.5661556 L11.7611353,16.5661556 C12.1403626,16.5661556 12.4475627,16.8730664 12.4475627,17.2525829 C12.4475627,17.6318101 12.1403626,17.9390102 11.7611353,17.9390102 L11.7611353,17.9390102 Z M6.86444684,10.2966124 C6.86444684,10.6761289 6.55724675,10.9830397 6.17801951,10.9830397 L3.4323102,10.9830397 C3.0527937,10.9830397 2.74588287,10.6761289 2.74588287,10.2966124 L2.74588287,7.5509031 C2.74588287,7.1713866 3.0527937,6.86447577 3.4323102,6.86447577 L6.17801951,6.86447577 C6.55724675,6.86447577 6.86444684,7.1713866 6.86444684,7.5509031 L6.86444684,10.2966124 Z M6.86444684,17.2525829 C6.86444684,17.6318101 6.55724675,17.9390102 6.17801951,17.9390102 L3.4323102,17.9390102 C3.0527937,17.9390102 2.74588287,17.6318101 2.74588287,17.2525829 L2.74588287,14.5068736 C2.74588287,14.1273571 3.0527937,13.8204463 3.4323102,13.8204463 L6.17801951,13.8204463 C6.55724675,13.8204463 6.86444684,14.1273571 6.86444684,14.5068736 L6.86444684,17.2525829 Z M15.8796993,1.37276788 L14.5068447,1.37276788 C14.5068447,2.88707342 13.2754409,4.11876645 11.7611353,4.11876645 L6.17801951,4.11876645 C4.6634247,4.11876645 3.4323102,2.88736269 3.4323102,1.37276788 L2.05945554,1.37276788 C0.922063106,1.37276788 -0.00011570625,2.29494669 -0.00011570625,3.43233913 L-0.00011570625,19.9982922 C-0.00011570625,21.1356846 0.922063106,22.0575742 2.05945554,22.0575742 L15.193272,22.0575742 L15.193272,9.24166067 C14.7775973,9.00070241 14.4327927,8.65271586 14.1918344,8.23733042 L8.92372883,8.23733042 C8.54421233,8.23733042 8.2373015,7.93013033 8.2373015,7.5509031 C8.2373015,7.1713866 8.54421233,6.86447577 8.92372883,6.86447577 L13.8204173,6.86447577 C13.8204173,5.35017022 15.0518211,4.11876645 16.5661266,4.11876645 L17.9389813,4.11876645 L17.9389813,3.43233913 C17.9389813,2.29494669 17.0170917,1.37276788 15.8796993,1.37276788 L15.8796993,1.37276788 Z" id="Fill-3" fill="url(#linearGradient-52)"></path>
                  <path d="M19.9983211,2.74576717 C20.3775484,2.74576717 20.6847485,3.05296726 20.6847485,3.43219449 C20.6847485,3.81142173 20.3775484,4.11862182 19.9983211,4.11862182 C19.6190939,4.11862182 19.3118938,3.81142173 19.3118938,3.43219449 C19.3118938,3.05296726 19.6190939,2.74576717 19.9983211,2.74576717" id="Fill-6" fill="url(#linearGradient-20)"></path>
                  <path d="M21.3712047,1.37288358 C21.7504319,1.37288358 22.057632,1.68008368 22.057632,2.05931091 C22.057632,2.43853815 21.7504319,2.74573824 21.3712047,2.74573824 C20.9919775,2.74573824 20.6847774,2.43853815 20.6847774,2.05931091 C20.6847774,1.68008368 20.9919775,1.37288358 21.3712047,1.37288358" id="Fill-8" fill="url(#linearGradient-20)"></path>
                  <path d="M22.057632,5.49153433 L16.5662134,5.49153433 C15.8080482,5.49153433 15.1933588,6.10622378 15.1933588,6.86438899 C15.1933588,7.62255419 15.8080482,8.23724364 16.5662134,8.23724364 L16.5662134,12.4475048 L22.057632,12.4475048 L22.057632,8.23724364 C22.8157972,8.23724364 23.4304867,7.62255419 23.4304867,6.86438899 C23.4304867,6.10622378 22.8157972,5.49153433 22.057632,5.49153433" id="Fill-10" fill="url(#linearGradient-53)"></path>
                  <path d="M19.3118649,20.6847485 C18.555146,20.6847485 17.9390102,20.0686127 17.9390102,19.3118938 C17.9390102,18.5548857 18.555146,17.9390391 19.3118649,17.9390391 C20.0685838,17.9390391 20.6847195,18.5548857 20.6847195,19.3118938 C20.6847195,20.0686127 20.0685838,20.6847485 19.3118649,20.6847485 L19.3118649,20.6847485 Z M19.3118649,15.1933298 C19.6910921,15.1933298 19.9982922,15.5005299 19.9982922,15.8797572 C19.9982922,16.2586951 19.6910921,16.5661845 19.3118649,16.5661845 C18.9326376,16.5661845 18.6254375,16.2586951 18.6254375,15.8797572 C18.6254375,15.5005299 18.9326376,15.1933298 19.3118649,15.1933298 L19.3118649,15.1933298 Z M16.5661556,13.8204752 L16.5661556,20.6847485 C16.5661556,22.2010789 17.7955345,23.4304578 19.3118649,23.4304578 C20.8281953,23.4304578 22.0575742,22.2013681 22.0575742,20.6847485 L22.0575742,13.8204752 L16.5661556,13.8204752 Z" id="Fill-12" fill="url(#linearGradient-54)"></path>
                  <path d="M11.7610196,0 L6.17790381,0 C5.4197386,0 4.80504915,0.614689453 4.80504915,1.37285466 C4.80504915,2.13101986 5.4197386,2.74570931 6.17790381,2.74570931 L11.7610196,2.74570931 C12.5191848,2.74570931 13.1338743,2.13101986 13.1338743,1.37285466 C13.1338743,0.614689453 12.5191848,0 11.7610196,0" id="Fill-14" fill="url(#linearGradient-55)"></path>
              </g>
            </g>
            <g class="category-icon id="medicine">
              <circle id="circle-medicine" stroke="#555555" fill="#FFFFFF" cx="554" cy="260.92" r="18"></circle>
              <g id="icon-medicine" transform="translate(544.375000, 247.295000)">
                  <rect id="Rectangle" fill="url(#linearGradient-56)" x="3" y="0" width="15" height="5.625" rx="0.75"></rect>
                  <rect id="Rectangle" fill="#FFFFFF" x="3" y="13.75" width="15" height="8.75" rx="0.75"></rect>
                  <path d="M5.70904404,6 L14.5184052,6 C15.4170029,6 16.2682813,6.40280702 16.8381025,7.09763189 L19.5696973,10.4284663 C20.0095916,10.9648617 20.25,11.6371291 20.25,12.3308344 L20.25,22.5 C20.25,24.1568542 18.9068542,25.5 17.25,25.5 L3,25.5 C1.34314575,25.5 2.02906125e-16,24.1568542 0,22.5 L0,12.1670277 C1.11816895e-15,11.4519375 0.255431731,10.7603653 0.72025692,10.2169581 L3.42930096,7.04993039 C3.99926373,6.38361126 4.83220954,6 5.70904404,6 Z" id="Rectangle-Copy-2" fill="url(#linearGradient-57)"></path>
                  <rect id="Rectangle-2" fill="#FFFFFF" x="3" y="12.75" width="15" height="9" rx="0.75"></rect>
                  <polygon id="+" fill="url(#linearGradient-58)" fill-rule="nonzero" points="11.3804348 20.25 11.3804348 17.6186441 14.25 17.6186441 14.25 16.1313559 11.3804348 16.1313559 11.3804348 13.5 9.61956522 13.5 9.61956522 16.1313559 6.75 16.1313559 6.75 17.6186441 9.61956522 17.6186441 9.61956522 20.25"></polygon>
              </g>
            </g>
            <g class="category-icon id="shield">
              <circle id="circle-shield" stroke="#555555" fill="#FFFFFF" cx="788" cy="224.92" r="18"></circle>
              <g id="icon-shield" transform="translate(777.000000, 210.920000)">
                  <path d="M3,5.874 L3,13.472 C3,17.39 4.964,20.998 8.253,23.127 L11,24.904 L13.747,23.127 C17.036,20.998 19,17.39 19,13.472 L19,5.874 L11,3.521 L3,5.874 Z" id="Fill-1" fill="url(#linearGradient-62)"></path>
                  <path d="M20,13.4717 C20,17.7307 17.865,21.6527 14.29,23.9657 L11.271,25.9197 C11.189,25.9727 11.095,25.9997 11,25.9997 C10.905,25.9997 10.811,25.9727 10.729,25.9197 L7.71,23.9657 C4.135,21.6527 2,17.7307 2,13.4717 L2,5.4997 C2,5.2787 2.146,5.0827 2.359,5.0207 L10.859,2.5207 C10.951,2.4927 11.049,2.4927 11.141,2.5207 L19.641,5.0207 C19.854,5.0827 20,5.2787 20,5.4997 L20,13.4717 Z M21.638,3.0187 L11.138,0.0187 C11.048,-0.0063 10.952,-0.0063 10.862,0.0187 L0.362,3.0187 C0.148,3.0807 0,3.2767 0,3.4997 L0,13.7587 C0,18.4677 2.391,22.7577 6.394,25.2367 L10.737,27.9257 C10.817,27.9757 10.909,27.9997 11,27.9997 C11.091,27.9997 11.183,27.9757 11.263,27.9257 L15.606,25.2367 L15.605,25.2367 C19.609,22.7577 22,18.4677 22,13.7587 L22,3.4997 C22,3.2767 21.852,3.0807 21.638,3.0187 L21.638,3.0187 Z" id="Fill-3" fill="#1302D9"></path>
              </g>
            </g>
            <g class="category-icon id="planet">
              <circle id="circle-planet" stroke="#555555" fill="#FFFFFF" cx="811" cy="262.92" r="18"></circle>
              <g id="icon-planet" transform="translate(799.000000, 251.920000)">
                  <path d="M20.7425563,5.92576661 C19.3293856,8.4163968 16.9759339,11.3851261 14.1704297,14.1900515 C11.3657938,16.9955557 8.39619624,19.3287489 5.90527665,20.7416302 C3.33997965,22.1958966 1.9762974,22.2613024 1.58878243,21.8737874 C1.10721043,21.3922154 1.37867349,19.7706722 2.93075921,17.1764346 C3.34258431,17.8440948 3.82762918,18.4787627 4.40586287,19.0569964 L4.91608609,19.5541963 L5.36032468,19.3119633 C7.77860331,17.9925602 10.596552,15.8217239 13.1994718,13.2188041 C15.8023916,10.6158843 17.9934863,7.79909327 19.3128894,5.38023583 L19.554833,4.93657605 L19.0579225,4.42606342 C18.4799782,3.84782974 17.8447315,3.36307427 17.1773607,2.95124917 C19.7713089,1.39887405 21.3937203,1.12683217 21.8747135,1.60927239 C22.2616497,1.99707677 22.1979803,3.3598908 20.7425563,5.92576661 L20.7425563,5.92576661 Z M5.50879009,12.4596915 L6.88260156,12.4596915 L6.88260156,11.0861695 L5.50879009,11.0861695 L5.50879009,12.4596915 Z M8.32181884,5.81029352 C9.09858521,5.03294833 10.4573476,5.0315013 11.2352716,5.81029352 C12.0389527,6.61368527 12.0389527,7.92035449 11.2352716,8.72374624 C10.4281175,9.53090027 9.12463178,9.52684858 8.32124003,8.72374624 C7.51842709,7.92035449 7.51842709,6.61368527 8.32181884,5.81029352 L8.32181884,5.81029352 Z M13.8341397,6.90309152 L15.2076617,6.90309152 L15.2076617,5.52956946 L13.8341397,5.52956946 L13.8341397,6.90309152 Z M15.7589807,2.21673611 C12.0160896,0.651337706 7.49990509,1.43678627 4.45853481,4.47815655 C1.41658571,7.52010564 0.630558338,12.0151635 2.19624615,15.758344 C0.600749494,18.2356615 -0.871749506,21.3554608 0.617824463,22.8450348 C2.00234396,24.2295543 4.88511962,22.8991538 6.58277668,21.9362992 C9.17817193,20.4640896 12.2516663,18.0510203 15.1416771,15.1612989 C18.0316879,12.271288 20.4650157,9.19866189 21.9372253,6.60326664 C23.564846,3.73409308 23.8788518,1.67091592 22.8459609,0.638025019 C21.3543611,-0.851838356 18.2362982,0.622397081 15.7589807,2.21673611 Z" id="Fill-1" fill="url(#linearGradient-59)"></path>
                  <path d="M10.2643136,6.78128043 C9.99313993,6.51184321 9.55989877,6.51386905 9.29364502,6.78128043 C9.02565484,7.04898121 9.02565484,7.48511643 9.29335562,7.7525278 C9.55324243,8.01270402 10.0041374,8.01270402 10.2643136,7.7525278 C10.5320144,7.48511643 10.5320144,7.04898121 10.2643136,6.78128043" id="Fill-4" fill="url(#linearGradient-60)"></path>
                  <path d="M21.7851423,9.41418273 C20.3051187,11.5604195 18.3310787,13.9141605 16.1127798,16.1324594 C13.8863775,18.3585723 11.5233755,20.3190102 9.37019298,21.8010596 C10.1304632,21.9749928 10.9023097,22.0664452 11.6727091,22.0664452 C14.3566627,22.0664452 17.0591382,21.014164 19.0271007,19.0464909 C21.5544855,16.5191062 22.5575676,12.8190473 21.7851423,9.41418273" id="Fill-6" fill="url(#linearGradient-61)"></path>
              </g>
            </g>
            <g class="category-icon id="gear">
              <circle id="circle-gear" stroke="#555555" fill="#FFFFFF" cx="787" cy="298.92" r="18"></circle>
              <path d="M787,304.491429 C783.851017,304.491429 781.298246,301.893067 781.298246,298.687847 C781.298246,295.482627 783.851017,292.884286 787,292.884286 C790.148983,292.884286 792.701754,295.482627 792.701754,298.687847 C792.701754,301.893067 790.148983,304.491429 787,304.491429 M796.569408,299.228984 L796.569408,298.454163 C796.569408,297.770826 796.995799,297.160954 797.635278,296.929593 L799.386727,296.451759 C799.831488,296.33043 800.092005,295.86861 799.969925,295.421802 C799.659692,294.286508 799.205688,293.211143 798.628979,292.216454 C798.425584,291.865669 798.000385,291.713117 797.621794,291.854489 L795.82147,292.526862 C795.206575,292.817897 794.476166,292.689788 793.995584,292.206591 L793.450689,291.65873 C792.970108,291.175553 792.842693,290.441149 793.132171,289.822907 L793.955269,288.409724 C794.189306,288.007891 794.051416,287.491291 793.648886,287.260971 C792.655518,286.692617 791.58314,286.247872 790.452253,285.947819 C790.061996,285.844271 789.653994,286.037043 789.484856,286.405493 L788.753255,287.999226 C788.523146,288.642205 787.916576,289.070898 787.236938,289.070898 L786.466311,289.070898 C785.786673,289.070898 785.180103,288.642205 784.949993,287.999226 L784.494602,286.531401 C784.360972,286.100685 783.911932,285.856591 783.478955,285.97515 C782.350882,286.284045 781.282022,286.73716 780.292875,287.313413 C779.92982,287.52493 779.782706,287.977141 779.948287,288.364788 L780.571077,289.822907 C780.860556,290.441149 780.733141,291.175553 780.252559,291.65873 L779.707664,292.206591 C779.227083,292.689788 778.496674,292.817897 777.881779,292.526862 L776.431553,291.900683 C776.046005,291.7342 775.596242,291.882115 775.38587,292.247145 C774.812737,293.241677 774.362074,294.316335 774.054851,295.450548 C773.936934,295.885881 774.179706,296.337385 774.608091,296.471742 L776.067971,296.929593 C776.70745,297.160954 777.133841,297.770826 777.133841,298.454163 L777.133841,299.228984 C777.133841,299.912322 776.70745,300.522213 776.067971,300.753555 L774.482864,301.489138 C774.116409,301.659196 773.924681,302.069419 774.027668,302.4618 C774.326097,303.598862 774.768434,304.677077 775.333712,305.675852 C775.562785,306.080573 776.076589,306.219233 776.476246,305.983902 L777.881779,305.156344 C778.496674,304.865271 779.227083,304.993359 779.707664,305.476557 L780.252559,306.024417 C780.733141,306.507615 780.860556,307.242019 780.571077,307.860241 L779.903555,309.667181 C779.761366,310.052057 779.918876,310.482989 780.273919,310.685782 C781.249054,311.242661 782.248989,311.614765 783.366744,311.89517 C783.779748,311.998796 784.203618,311.769517 784.347742,311.36682 L784.949993,309.683941 C785.180103,309.040962 785.786673,308.61225 786.466311,308.61225 L787.236938,308.61225 C787.916576,308.61225 788.523146,309.040962 788.753255,309.683941 L789.353044,311.359923 C789.499024,311.767808 789.931493,311.997362 790.34782,311.884776 C791.482752,311.577924 792.558159,311.125202 793.553208,310.548006 C793.926112,310.331695 794.069532,309.862193 793.886148,309.470538 L793.132171,307.860241 C792.842693,307.242019 792.970108,306.507615 793.450689,306.024417 L793.995584,305.476557 C794.476166,304.993359 795.206575,304.865271 795.82147,305.156344 L797.42303,305.914405 C797.812545,306.098787 798.279525,305.954606 798.494685,305.579653 C799.068756,304.579188 799.519008,303.497928 799.824199,302.356818 C799.936156,301.938225 799.707864,301.503403 799.302188,301.356628 L797.635278,300.753555 C796.995799,300.522213 796.569408,299.912322 796.569408,299.228984" id="icon-gear" fill="url(#linearGradient-20)"></path>
              </g>
            </g>
            <g class="category-icon id="defense">
              <circle id="circle-defense" stroke="#555555" fill="#FFFFFF" cx="946" cy="263.92" r="18"></circle>
              <g id="icon-defense" transform="translate(934.000000, 249.920000)">
                  <path d="M22.7819825,22.8293453 L22.7819825,7.78759707 C22.7819825,6.51101543 22.2643442,5.26077976 21.3610968,4.35753238 C20.4575501,5.26077976 19.9402112,6.51101543 19.9402112,7.78759707 L19.9402112,22.8293453 L18.5193255,22.8293453 L18.5193255,24.250231 L24.2501711,24.250231 L24.2501711,22.8293453 L22.7819825,22.8293453 Z" id="Fill-1" fill="url(#linearGradient-3)"></path>
                  <path d="M11.4146876,12.8828763 L12.8355733,12.8828763 L12.8355733,10.041105 L11.4146876,10.041105 L11.4146876,12.8828763 Z M17.1545148,18.2050601 C16.2153411,17.3302544 15.199824,17.2910348 14.256459,16.5392767 L14.256459,10.4713226 C14.256459,9.25581564 13.1484316,7.00443339 12.1251305,5.98861691 C11.1018293,7.00443339 9.99380198,9.25581564 9.99380198,10.4713226 L9.99380198,16.5392767 C9.04235347,17.2976213 8.03701549,17.3281587 7.0957461,18.2050601 C6.22842504,19.0140009 5.731145,20.1819054 5.731145,21.4084896 L9.99380198,21.4084896 L9.99380198,22.8293753 L11.4146876,22.8293753 L11.4146876,24.2502609 L12.8355733,24.2502609 L12.8355733,22.8293753 L14.256459,22.8293753 L14.256459,21.4084896 L18.5191159,21.4084896 C18.5191159,20.1819054 18.0215365,19.0140009 17.1545148,18.2050601 L17.1545148,18.2050601 Z" id="Fill-3" fill="url(#linearGradient-4)"></path>
                  <path d="M13.7501075,0.928276038 L12.1250407,-0.000119754375 L10.5002732,0.928276038 C8.00399322,2.35485003 5.73105519,6.46452079 5.73105519,9.33054237 L5.73105519,17.6223353 C5.86248561,17.4693491 5.97834797,17.304088 6.12654401,17.1657717 C6.98398533,16.3673094 7.8809456,16.0924732 8.5728265,15.7526701 L8.5728265,10.4712028 C8.5728265,8.77757655 9.91946445,6.17531398 11.1241935,4.97986593 L12.1250407,3.986204 L13.1261872,4.97986593 C14.3306169,6.17501459 15.6772548,8.77757655 15.6772548,10.4712028 L15.6772548,15.7526701 C16.3724289,16.0939701 17.2663954,16.3673094 18.1229385,17.165173 C18.2714339,17.3034893 18.3875957,17.4693491 18.5193255,17.6223353 L18.5193255,9.33054237 C18.5193255,6.46452079 16.2463875,2.35485003 13.7501075,0.928276038" id="Fill-5" fill="url(#linearGradient-5)"></path>
                  <path d="M4.31010965,22.8293453 L4.31010965,7.78759707 C4.31010965,6.51101543 3.79247136,5.26077976 2.88922399,4.35753238 C1.98567723,5.26077976 1.46833833,6.51101543 1.46833833,7.78759707 L1.46833833,22.8293453 L0.000149692969,22.8293453 L0.000149692969,24.250231 L5.73099531,24.250231 L5.73099531,22.8293453 L4.31010965,22.8293453 Z" id="Fill-6" fill="url(#linearGradient-3)"></path>
              </g>
            </g>
        </g>
    </g>
</svg>`
