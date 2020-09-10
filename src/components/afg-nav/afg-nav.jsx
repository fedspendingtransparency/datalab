import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisV,
	faAngleLeft,
	faAngleDown,
	faAngleUp,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import style from './afg-nav.module.scss';

const AfgNav = (props) => {
	const sections = {
		revenue: {
			pages: [
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
			pages: [
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
			pages: [
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
			pages: [
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
			nextSection: 'revenue',
			prevSection: 'deficit',
		},
	}

	const [stickyStyle, setStickyStyle] = useState({ marginTop: '3rem' });

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const scrollListener = () => {
				setStickyStyle(window.pageYOffset > 26 ? { position: 'sticky', top: 50 } : { marginTop: '3rem' })
			}
			
			window.addEventListener('scroll', scrollListener)
		}
	}, []);

	const activeSection = sections[props.chapter];
	const prevSection = sections[activeSection.prevSection];
	const nextSection = sections[activeSection.nextSection];

	const navClasses = `${style.chapterNav} ${activeSection.navClass}`;

	return (
		<nav className={style.chapterNav} style={stickyStyle}>
			<ul className={style.chapterNavPrimaryList}>
				<li className={style.chapterNavOverview}>
					<a href="/americas-finance-guide/">
						<FontAwesomeIcon
							icon={faEllipsisV}
							className="fas fa-ellipsis-v"
							width={8}
						/>
						&nbsp;
						Overview
					</a>
				</li>
				<li className={`${prevSection.navClass} ${style.prevSection}`}>
					<a href={prevSection.pages[0].url} aria-label={prevSection.name}>
						<FontAwesomeIcon
							icon={faAngleLeft}
							className="fas fa-chevron-left"
							width={8}
						/>
						&nbsp;
						{prevSection.name}
					</a>
				</li>
				<li>
					<ul className={style.chapterNavActiveList}>
						{activeSection.pages.map((section) => {
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
				</li>
				<li className={`${nextSection.navClass} ${style.nextSection}`}>
					<a href={nextSection.pages[0].url} aria-label={nextSection.name}>
						{nextSection.name}
						&nbsp;
						<FontAwesomeIcon
							icon={faAngleRight}
							className="fas fa-chevron-right"
							width={8}
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default AfgNav;
