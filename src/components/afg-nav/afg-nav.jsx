import React, { useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleDown,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import style from './afg-nav.module.scss';

const AfgNav = (props) => {
	let navHtml;
	let navClasses;

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

		const ul = document.getElementsByClassName(style.chapterNavPrimaryList);

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

	useEffect(() => {
		if (setCurrentPageActive()) {
			initButton();
		}
	});

	switch (props.chapter) {
	case 'revenue':
		navClasses = `${style.chapterNav} ${style.chapterNavRevenue}`;
		navHtml = (
			<>
				<li>
					<a href="/americas-finance-guide/revenue/">Revenue and GDP</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/categories/">
						Revenue Categories
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/trends/">
						Federal Revenue Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/country-comparison/">
						Country Comparison
					</a>
				</li>
			</>
		);
		break;
	case 'spending':
		navClasses = `${style.chapterNav} ${style.chapterNavSpending}`;
		navHtml = (
			<>
				<li>
					<a href="/americas-finance-guide/spending/">Spending and GDP</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/categories/">
						Spending Categories
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/trends/">
						Federal Spending Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/country-comparison/">
						Country Comparison
					</a>
				</li>
			</>
		);
		break;
	case 'deficit':
		navClasses = `${style.chapterNav} ${style.chapterNavDeficit}`;
		navHtml = (
			<>
				<li>
					<a href="/americas-finance-guide/deficit/">Explore Deficit</a>
				</li>
				<li>
					<a href="/americas-finance-guide/deficit/trends/">
						Federal Deficit Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/deficit/country-comparison/">
						Country Comparison
					</a>
				</li>
			</>
		);
		break;
	case 'debt':
		navClasses = `${style.chapterNav} ${style.chapterNavDebt}`;
		navHtml = (
			<>
				<li>
					<a href="/americas-finance-guide/debt/">Explore Debt</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/trends/">
						Federal Debt Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/analysis/">
						Federal Debt Analysis
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/country-comparison/">
						Country Comparison
					</a>
				</li>
			</>
		);
		break;
	default:
		break;
	}

	return (
		<nav className={navClasses}>
			<ul className={style.chapterNavPrimaryList}>
				<li className={style.chapterNavOverview}>
					<a href="/americas-finance-guide/">
						<FontAwesomeIcon
  icon={faAngleLeft}
  className="fas fa-chevron-left"
  width={8}
						/>
						{' '}
						Overview
					</a>
				</li>
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
