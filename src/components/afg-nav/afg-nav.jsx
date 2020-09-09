import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleDown,
	faAngleUp,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import style from './afg-nav.module.scss';

const AfgNav = (props) => {
	const sections = {
		revenue: {
			html: [
				{
					name: 'Revenue and GDP',
					url: "/americas-finance-guide/revenue/"
				},
				{
					name: 'Revenue Categories',
					url: "/americas-finance-guide/revenue/categories/"
				},
				{
					name: 'Federal Revenue Trends',
					url: "/americas-finance-guide/revenue/trends/"
				},
				{
					name: 'Country Comparison',
					url: "/americas-finance-guide/revenue/country-comparison/"
				},
			],
			name: 'Federal Revenue',
			navClass: style.chapterNavRevenue,
			nextSection: 'spending',
		},
		spending: {
			html: [
				{
					name: 'Spending and GDP',
					url: "/americas-finance-guide/spending/"
				},
				{
					name: 'Spending Categories',
					url: "/americas-finance-guide/spending/categories/"
				},
				{
					name: 'Federal Spending Trends',
					url: "/americas-finance-guide/spending/trends/"
				},
				{
					name: 'Country Comparison',
					url: "/americas-finance-guide/spending/country-comparison/"
				},
			],
			name: 'Federal Spending',
			navClass: style.chapterNavSpending,
			prevSection: 'revenue',
			nextSection: 'deficit',
		},
		deficit: {
			html: [
				{
					name: 'Explore Deficit',
					url: "/americas-finance-guide/deficit/"
				},
				{
					name: 'Federal Deficit Trends',
					url: "/americas-finance-guide/deficit/trends/"
				},
				{
					name: 'Country Comparison',
					url: "/americas-finance-guide/deficit/country-comparison/"
				},
			],
			name: 'Federal Deficit',
			navClass: style.chapterNavDeficit,
			prevSection: 'spending',
			nextSection: 'debt',
		},
		debt: {
			html: [
				{
					name: 'Explore Debt',
					url: "/americas-finance-guide/debt/"
				},
				{
					name: 'Federal Debt Trends',
					url: "/americas-finance-guide/debt/trends/"
				},
				{
					name: 'Federal Debt Analysis',
					url: "/americas-finance-guide/debt/analysis/"
				},
				{
					name: 'Country Comparison',
					url: "/americas-finance-guide/debt/country-comparison/"
				},
			],
			name: 'Federal Debt',
			navClass: style.chapterNavDebt,
			prevSection: 'deficit',
		},
	}

	function getFilename(a) {
		if (a.slice(-1) === '/') {
			a = a.slice(0, -1);
		}

		return a.match(/.*americas-finance-guide\/(.*)*$/i).pop();
	}

	function setCurrentPageActive() {
		let filename = props.location.pathname;
		filename = filename.slice(24);

		if (filename.slice(-1) === '/') {
			filename = filename.slice(0, -1);
		}

		filename = filename || 'revenue';

		const ul = document.getElementsByClassName(style.chapterNavActiveList);

		if (!ul.item(0)) {
			return;
		}

		const allSecondaryLi = ul.item(0).children;
		const liLength = allSecondaryLi.length;

		if (filename === 'revenue') {
			allSecondaryLi.item(1).classList.add(style.active);
			return true;
		}

		let i = 1;

		for (i; i < liLength; i++) {
			const current = allSecondaryLi.item(i);
			const href = getFilename(current.firstChild.href);

			if (filename === href) {
				current.classList.add(style.active);
				break;
			}
		}

		return true;
	}

	function toggleActiveStatus() {
		// For IE9
		function toggleClass(el, className) {
			const classes = el.className.split(' ');
			const i = classes.indexOf(className);

			if (i >= 0) {
				classes.splice(i, 1);
			} else {
				classes.push(openClass);
			}

			element.className = classes.join(' ');
		}

		var element = document.getElementsByClassName(style.chapterNav).item(0);
		const toggleIcons = document
			.getElementsByClassName(style.chapterNavTrigger)
			.item(0)
			.getElementsByTagName('svg');
		const hiddenClass = 'hidden';
		var openClass = style.menuOpen;

		if (element.classList) {
			element.classList.toggle(openClass);
			for (let i = toggleIcons.length; i--;) {
				toggleIcons[i].classList.toggle(hiddenClass);
			}
		} else {
			toggleClass(element, openClass);
			for (let i = toggleIcons.length; i--;) {
				toggleClass(toggleIcons[i], hiddenClass);
			}
		}
	}

	function initButton() {
		const button = document
			.getElementsByClassName(style.chapterNavTrigger)
			.item(0);

		button.addEventListener('click', toggleActiveStatus);
	}

	const [stickyStyle, setStickyStyle] = useState({ marginTop: '3rem' });

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (setCurrentPageActive()) {
				initButton();
			}

			const scrollListener = () => {
				setStickyStyle(window.pageYOffset > 26 ? { position: 'sticky', top: 50 } : { marginTop: '3rem' })
			}
			
			window.addEventListener('scroll', scrollListener)
			return window.removeEventListener('scroll', scrollListener)
		}
	}, []);

	const activeSection = sections[props.chapter];
	const prevSection = sections[activeSection.prevSection];
	const nextSection = sections[activeSection.nextSection];

	const navClasses = `${style.chapterNav} ${activeSection.navClass}`;

	const navHtml = (
		<>
			<li className={style.chapterNavOverview}>
				<a href="/americas-finance-guide/">
					Overview
				</a>
			</li>
			{prevSection &&
				<li className={`${prevSection.navClass} ${style.prevSection}`}>
					<a href={prevSection.html[0].url} aria-label={prevSection.name}>
						<FontAwesomeIcon
							icon={faAngleLeft}
							className="fas fa-chevron-left"
							width={20}
						/>
						&nbsp;
						{prevSection.name}
					</a>
				</li>
			}
			<ul className={style.chapterNavActiveList}>
				{activeSection.html.map((section) => {
					let activePageClass;
					if (typeof window !== 'undefined' && section.url === window.location.pathname) {
						activePageClass = style.active;
					}
					return (
						<li className={`${activeSection.navClass} ${style.activeSection} ${activePageClass}`}>
							<a href={section.url} aria-label={section.name}>
								{section.name}
							</a>
						</li>
					)
				})}
			</ul>
			{nextSection &&
				<li className={`${nextSection.navClass} ${style.nextSection}`}>
					<a href={nextSection.html[0].url} aria-label={nextSection.name}>
						{nextSection.name}
						&nbsp;
						<FontAwesomeIcon
							icon={faAngleRight}
							className="fas fa-chevron-right"
							width={20}
						/>
					</a>
				</li>
			}
		</>
	);

	return (
		<nav className={style.chapterNav} style={stickyStyle}>
			<ul className={style.chapterNavPrimaryList}>
				{navHtml}
			</ul>
			<button className={style.chapterNavTrigger}>
				<FontAwesomeIcon
					icon={faAngleDown}
					className="fas fa-lg fa-angle-down menu-down"
				/>
				<FontAwesomeIcon
					icon={faAngleUp}
					className="fas fa-lg fa-angle-up menu-up hidden"
				/>
			</button>
		</nav>
	);
};

export default AfgNav;
