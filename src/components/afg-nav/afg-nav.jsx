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

	switch (props.chapter) {
	case 'revenue':
		navClasses = `${style.chapterNav} ${style.chapterNavRevenue}`;
		navHtml = (
			<>
				<li>
					<a href="/americas-finance-guide/revenue/" aria-label="Revenue and GDP">
						Revenue and GDP
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/categories/" aria-label="Revenue Categories">
						Revenue Categories
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/trends/" aria-label="Federal Revenue Trends">
						Federal Revenue Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/revenue/country-comparison/" aria-label="Country Comparison">
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
					<a href="/americas-finance-guide/spending/" aria-label="Spending and GDP">
						Spending and GDP
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/categories/" aria-label="Spending Categories">
						Spending Categories
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/trends/" aria-label="Federal Spending Trends">
						Federal Spending Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/spending/country-comparison/" aria-label="Country Comparison">
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
					<a href="/americas-finance-guide/deficit/" aria-label="Explore Deficit">
						Explore Deficit
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/deficit/trends/" aria-label="Federal Deficit Trends">
						Federal Deficit Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/deficit/country-comparison/" aria-label="Country Comparison">
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
					<a href="/americas-finance-guide/debt/" aria-label="Explore Debt">
						Explore Debt
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/trends/" aria-label="Federal Debt Trends">
						Federal Debt Trends
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/analysis/" aria-label="Federal Debt Analysis">
						Federal Debt Analysis
					</a>
				</li>
				<li>
					<a href="/americas-finance-guide/debt/country-comparison/" aria-label="Country Comparison">
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
			<button
				className={style.chapterNavTrigger}
				onClick={toggleActiveStatus}
			>
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
