import React, { useEffect, useState } from 'react';
import './categories.scss';
import 'src/styles/index.scss';
import AccordionList from 'src/components/accordion-list/accordion-list';
import Downloads from 'src/components/section-elements/downloads/downloads';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Tooltip from 'src/components/tooltip/tooltip';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import variables from 'src/styles/variables.scss';
import Desktop from 'src/svgs/rd-and-contracting/categories/desktop.svg';
import Tablet from 'src/svgs/rd-and-contracting/categories/tablet.svg';
import Mobile from 'src/svgs/rd-and-contracting/categories/mobile.svg';
import data from '../../../../static/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318_with_keys.csv';

export default function Categories(props) {
	const [windowWidth, setWindowWidth] = useState(null);
	const [device, setDevice] = useState('desktop');
	const [tooltipData, setData] = useState({});

	useEffect(() => {
		const items = {};
		data.map((item, key) => {
			items[item.keys] = {
				id: key,
				title: item.description,
				rows: [
					{ Obligation: numberFormatter('dollars suffix', item.obligations) },
					{ Percentage: numberFormatter('percent', Math.abs(item.percents)) },
				],
				tooltipRef: React.createRef(),
			};
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

	function onEsc(e) {
		if (e.keyCode === 27) {
			Object.keys(tooltipData).forEach(index => {
				const item = tooltipData[index];
				if (isOpen(item.id, item.tooltipRef)) {
					const el = document
						.getElementById(index)
						.getElementsByTagName('circle')[0];
					el.setAttribute('fill', 'white');
					el.setAttribute('fill-opacity', '1');
					el.setAttribute('stroke', '#555555');
					onPopoverClose(item.tooltipRef);
				}
			});
		}
	}

	function onKeyDown(e, key, item) {
		if (e.keyCode === 13) {
			toggle(e, key, item);
		}

		if (e.keyCode === 9) {
			Object.keys(tooltipData).forEach(index => {
				const item = tooltipData[index];
				if (isOpen(item.id, item.tooltipRef)) {
					const el = document
						.getElementById(index)
						.getElementsByTagName('circle')[0];
					el.setAttribute('fill', 'white');
					el.setAttribute('fill-opacity', '1');
					el.setAttribute('stroke', '#555555');
					onPopoverClose(item.tooltipRef);
				}
			});
		}
	}

	function onHover(e) {
		const el = e.currentTarget.getElementsByTagName('circle')[0];
		el.setAttribute('fill', variables.rdMdBlue);
		el.setAttribute('fill-opacity', '.12');
		el.setAttribute('stroke', variables.rdMdBlue);
	}

	function clearSelection(e) {
		const el = e.currentTarget.getElementsByTagName('circle')[0];
		el.setAttribute('fill', 'white');
		el.setAttribute('fill-opacity', '1');
		el.setAttribute('stroke', '#555555');
	}

	function onFocus(e, key) {
		closeAll();
		const el = e.currentTarget.getElementsByTagName('circle')[0];
		const item = tooltipData[key];

		el.setAttribute('fill', variables.rdMdBlue);
		el.setAttribute('fill-opacity', '.12');
		el.setAttribute('stroke', variables.rdMdBlue);
		el.setAttribute('aria-haspopup', true);
		el.setAttribute(
			'aria-owns',
			isOpen(item.id, item.tooltipRef) ? 'mouse-over-popover' : undefined
		);

		onPopoverOpen(e, item.id, item.tooltipRef);
	}

	function closeAll() {
		const groups = document.getElementsByClassName('category-icon');

		for (let i = 0; i < groups.length; i++) {
			const el = groups[i].getElementsByTagName('circle')[0];
			el.setAttribute('fill', 'white');
			el.setAttribute('fill-opacity', '1');
			el.setAttribute('stroke', '#555555');
		}

		Object.keys(tooltipData).forEach(key => {
			onPopoverClose(tooltipData[key].tooltipRef);
		});
	}

	function onBlur(e, key) {
		const el = e.currentTarget.getElementsByTagName('circle')[0];
		const item = tooltipData[key];

		el.setAttribute('fill', 'white');
		el.setAttribute('fill-opacity', '1');
		el.setAttribute('stroke', '#555555');

		onPopoverClose(item.tooltipRef);
	}

	useEffect(() => {
		handleResize();

		const groups = document.getElementsByClassName('category-icon');

		for (let i = 0; i < groups.length; i++) {
			groups[i].setAttribute('autoFocus', 'true');
			groups[i].setAttribute('ariaDescribedby', groups[i].id);
			groups[i].setAttribute('cursor', 'pointer');
		}

		if (typeof document !== 'undefined') {
			Object.keys(tooltipData).forEach(key => {
				const el = document.getElementById(key);
				el.setAttribute('tabindex', '0');
				el.setAttribute('focusable', true);
				el.addEventListener('mouseover', e => onHover(e));
				el.addEventListener('keydown', e => onKeyDown(e, key, tooltipData[key]));
				el.addEventListener('click', e => toggle(e, key, tooltipData[key]));
				el.addEventListener('mouseout', e => clearSelection(e));
			});
		}

		window.addEventListener('resize', handleResize);
		window.addEventListener('keydown', e => onEsc(e));

		return _ => {
			Object.keys(tooltipData).forEach(key => {
				if (typeof document !== 'undefined') {
					const el = document.getElementById(key);

					el.removeEventListener('mouseover', e => onHover(e));
					el.removeEventListener('keydown', e =>
						onKeyDown(e, key, tooltipData[key])
					);
					el.removeEventListener('click', e => toggle(e, key, tooltipData[key]));
					el.removeEventListener('mouseout', e => clearSelection(e));
				}
			});

			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keydown', e => onEsc(e));
		};
	});

	useEffect(() => {
		if (typeof document !== 'undefined') {
			const svg = document.getElementsByTagName('svg')[0];
			svg.setAttribute('id', 'vizSvg');
			svg.setAttribute('role', 'img');
			svg.setAttribute('aria-labelledby', 'desc');
			svg.setAttribute('desc', altText);
		}
	});

	function toggle(e, key, item) {
		if (isOpen(item.id, item.tooltipRef)) {
			onBlur(e, key);
		} else {
			onFocus(e, key);
		}
	}

	function onPopoverOpen(event, id, ref) {
		if (ref && ref.current) {
			ref.current.handlePopoverOpen(
				id,
				event.currentTarget.id,
				event.currentTarget
			);
		}

		// close all other popups
	}

	function onPopoverClose(ref) {
		if (ref && ref.current) {
			ref.current.handlePopoverClose();
		}
	}

	function isOpen(id, ref) {
		let isOpen;
		if (ref && ref.current) {
			isOpen = ref.current.isOpen(id);
		}

		return isOpen;
	}

	function Chart() {
		switch (device) {
			case 'tablet':
				return <Tablet />;
			case 'mobile':
				return <Mobile />;
			default:
				return <Desktop />;
		}
	}

	return (
		<>
			<h2 className="rd-viztitle">{props.section.viztitle}</h2>
			<AccordionList title="Instructions">
				<p>In this visualization, categories are represented by icons.</p>
				<ul>
					<li>
						Click or tap on an icon to see the category name, total dollars contracted
						for this category, and the percentage this total accounts for within R&D
						contract spending
					</li>
					<li>To exit the pop-up, click or tap the X</li>
				</ul>
			</AccordionList>

			<ControlBar>
				<Share
					siteUrl={props.location.origin}
					pageUrl={`${props.location.pathname}#${props.sectionId}`}
					title="Data Lab - R&D in Contract Spending - U.S. Treasury"
					text="What do agriculture, energy, and national defense all have in common? They’re all areas where the government spent dollars on R&D in 2019! Check out the latest analysis at #DataLab to learn more! #Transparency #Research"
					hoverColor="#1302d9"
				/>
			</ControlBar>

			<Chart />

			<Downloads
				href="/unstructured-data/rd-in-contracting/r&d_spending_by_category_fy2019_created_20200318.csv"
				date="October 2019"
			/>

			{Object.keys(tooltipData).map(i => {
				const item = tooltipData[i];
				return (
					<Tooltip
						key={`tooltip-${i}`}
						ref={item.tooltipRef}
						title={item.title}
						id={item.id}
						rows={item.rows}
					/>
				);
			})}
		</>
	);
}

const altText =
	'Horizontal scatter plot diagram displaying icons of various spending categories across the x-axis, ranging from approximately a net negative $200,000 for International Affairs to over 13 billion dollars for defense systems.';
