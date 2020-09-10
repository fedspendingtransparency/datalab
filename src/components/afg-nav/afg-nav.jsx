import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
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
			name: 'Revenue',
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
			name: 'Spending',
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
			name: 'Deficit',
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
			name: 'Debt',
			navClass: style.chapterNavDebt,
			prevSection: 'deficit',
		},
	}

	const [stickyStyle, setStickyStyle] = useState({ marginTop: '3rem' });

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const marginTop = window.innerWidth < 990 ? 50 : '3rem';

			const scrollListener = () => {
				setStickyStyle(window.pageYOffset > 26 ? { position: 'sticky', top: 50 } : { marginTop })
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
							icon={faHome}
							className="fas fa-home"
							width={8}
						/>
						<div className={style.sectionName}>
							Overview
						</div>
					</a>
				</li>
				{prevSection &&
					<li className={`${prevSection.navClass} ${style.prevSection}`}>
						<a href={prevSection.pages[0].url} aria-label={prevSection.name}>
							<FontAwesomeIcon
								icon={faAngleLeft}
								className="fas fa-chevron-left"
								width={8}
							/>
							<div className={style.sectionName}>
								{prevSection.name}
							</div>
						</a>
					</li>
				}
				<li className={style.chapterNavActiveSection}>
					<ul className={style.chapterNavActiveList}>
						{activeSection.pages.map((section) => {
							let activePageClass;
							if (typeof window !== 'undefined' && section.url === window.location.pathname) {
								activePageClass = style.active;
							}
							return (
								<li className={`${activeSection.navClass} ${style.activeSection} ${activePageClass}`}>
									<a href={section.url} aria-label={section.name}>
										<div className={style.sectionName}>
											{section.name}
										</div>
									</a>
								</li>
							)
						})}
					</ul>
				</li>
				{nextSection &&
					<li className={`${nextSection.navClass} ${style.nextSection}`}>
						<a href={nextSection.pages[0].url} aria-label={nextSection.name}>
							<div className={style.sectionName}>
								{nextSection.name}
							</div>
							<FontAwesomeIcon
								icon={faAngleRight}
								className="fas fa-chevron-right"
								width={8}
							/>
						</a>
					</li>
				}
			</ul>
		</nav>
	);
};

export default AfgNav;
