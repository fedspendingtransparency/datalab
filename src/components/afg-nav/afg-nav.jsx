import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import { checkAfgScreenMode, ScreenModeEnum } from '../../utils/screen-mode';
import style from './afg-nav.module.scss';

const AfgNav = ({ chapter }) => {
	const sections = [
		{
			chapter: 'revenue',
			pages: [
				{
					name: 'Revenue and GDP',
					url: '/americas-finance-guide/revenue/',
				},
				{
					name: 'Revenue Categories',
					url: '/americas-finance-guide/revenue/categories/',
				},
				{
					name: 'Federal Revenue Trends',
					url: '/americas-finance-guide/revenue/trends/',
				},
				{
					name: 'Country Comparison',
					url: '/americas-finance-guide/revenue/country-comparison/',
				},
			],
			name: 'Revenue',
			navClass: style.chapterNavRevenue,
			colorClass: style.revenueColor,
			backgroundColorClass: style.revenueBackgroundColor,
			transparentColorClass: style.revenueTransparentColor,
			subPageWidth: 551,
		},
		{
			chapter: 'spending',
			pages: [
				{
					name: 'Spending and GDP',
					url: '/americas-finance-guide/spending/',
				},
				{
					name: 'Spending Categories',
					url: '/americas-finance-guide/spending/categories/',
				},
				{
					name: 'Federal Spending Trends',
					url: '/americas-finance-guide/spending/trends/',
				},
				{
					name: 'Country Comparison',
					url: '/americas-finance-guide/spending/country-comparison/',
				},
			],
			name: 'Spending',
			navClass: style.chapterNavSpending,
			colorClass: style.spendingColor,
			backgroundColorClass: style.spendingBackgroundColor,
			transparentColorClass: style.spendingTransparentColor,
			subPageWidth: 567,
		},
		{
			chapter: 'deficit',
			pages: [
				{
					name: 'Explore Deficit',
					url: '/americas-finance-guide/deficit/',
				},
				{
					name: 'Federal Deficit Trends',
					url: '/americas-finance-guide/deficit/trends/',
				},
				{
					name: 'Country Comparison',
					url: '/americas-finance-guide/deficit/country-comparison/',
				},
			],
			name: 'Deficit',
			navClass: style.chapterNavDeficit,
			colorClass: style.deficitColor,
			backgroundColorClass: style.deficitBackgroundColor,
			transparentColorClass: style.deficitTransparentColor,
			subPageWidth: 387,
		},
		{
			chapter: 'debt',
			pages: [
				{
					name: 'Explore Debt',
					url: '/americas-finance-guide/debt/',
				},
				{
					name: 'Federal Debt Trends',
					url: '/americas-finance-guide/debt/trends/',
				},
				{
					name: 'Federal Debt Analysis',
					url: '/americas-finance-guide/debt/analysis/',
				},
				{
					name: 'Country Comparison',
					url: '/americas-finance-guide/debt/country-comparison/',
				},
			],
			name: 'Debt',
			navClass: style.chapterNavDebt,
			colorClass: style.debtColor,
			backgroundColorClass: style.debtBackgroundColor,
			transparentColorClass: style.debtTransparentColor,
			subPageWidth: 508,
		},
	];

	const [stickyStyle, setStickyStyle] = useState({});
	const [scrollPosition, setScrollPosition] = useState(0);
	const [screenMode, setScreenMode] = useState(0);
	const [activeSection, setActiveSection] = useState(
		sections.find(s => s.chapter === chapter)
	);
	const [activeMainSection, setActiveMainSection] = useState(
		sections.find(s => s.chapter === chapter)
	);
	const [activeMainSectionClosed, setActiveMainSectionClosed] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSubPage, setActiveSubPage] = useState('');
	const [isMounted, setIsMounted] = useState(false);
	const [isLarger, setIsLarger] = useState('');
	const [isTabActive, setIsTabActive] = useState('');

	useEffect(() => {
		const resizeWindow = () => {
			const newMode = checkAfgScreenMode(window.innerWidth);
			if (newMode !== screenMode) {
				setScreenMode(newMode);
			}
		};

		resizeWindow();
		window.addEventListener('resize', resizeWindow);

		setActiveSubPage(window.location.pathname);

		sections.forEach(section => {
			section.pages.forEach(page => {
				if (page.url === activeSubPage) {
					setActiveSection(section);
					setActiveMainSection(section);
				}
			});
		});

		setIsLarger(activeMainSection ? activeMainSection.name : '');
		setIsMounted(true);
	}, []);

	useEffect(() => {
		setScrollPosition(window.pageYOffset);

		const scrollPositionListener = () => {
			setScrollPosition(window.pageYOffset);
		};

		const scrollListener = () => {
			if (window.pageYOffset > 26) {
				if (
					screenMode >= ScreenModeEnum.desktop &&
					window.pageYOffset > scrollPosition
				) {
					setStickyStyle({});
				} else {
					setStickyStyle({ position: 'sticky', top: 50 });
				}
			} else {
				setStickyStyle({});
			}
		};

		window.addEventListener('scroll', scrollPositionListener);
		window.addEventListener('scroll', scrollListener);
	}, [scrollPosition]);

	const handleActiveSectionChange = e => {
		const section = sections.find(s => s.name === e.target.textContent);

		if (
			activeSection &&
			activeMainSection &&
			section.name === activeMainSection.name &&
			activeSection.name === activeMainSection.name
		) {
			setActiveMainSectionClosed(prevState => !prevState);
		} else if (activeSection && section.name === activeSection.name) {
			setActiveSection(activeMainSection);
			setActiveMainSectionClosed(false);
		} else {
			setActiveSection(section);
			setActiveMainSectionClosed(false);
		}

		setActiveSection(
			activeSection && section.name === activeSection.name
				? activeMainSection
				: section
		);

		if (
			activeMainSection &&
			activeSection &&
			activeSection.name !== activeMainSection.name
		) {
			setIsLarger(section.name);
		}
	};

	const handleEnterPress = e => {
		if (e.key == 'Enter') {
			handleActiveSectionChange(e);
			setTimeout(() => {
				document
					.getElementById('active-chapter')
					.getElementsByTagName('a')[0]
					.focus();
				setIsTabActive('');
			}, 100);
		}
	};

	const handleTabEnter = e => {
		if (e.key === 'Tab') {
			setIsTabActive(e.target.textContent);
		}
	};

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState);
		setActiveSection(activeMainSection);
	};

	const handleMouseEnter = e => {
		setIsLarger(e.target.textContent);
	};

	const handleMouseLeave = () => {
		setIsLarger(activeMainSection ? activeMainSection.name : '');
	};

	return (
		<div
			className={`${style.chapterNavContainer} ${
				!isMenuOpen
					? style.chapterNavContainerClosed
					: style.chapterNavContainerOpen
			}`}
			style={{ ...stickyStyle, display: isMounted ? 'block' : 'none' }}>
			<nav className={style.chapterNav}>
				<ul className={style.chapterNavPrimaryList}>
					<li
						id={`${activeSection ? 'active-section' : ''}`}
						className={`
              ${style.chapterNavOverview} 
						  ${activeMainSection && !isMenuOpen ? style.closed : ''} 
						  ${!activeSection ? style.activeSection : style.inactiveSection}
						  ${!activeMainSection ? style.activeMainSection : ''}
            `}
						data-testid={'overview'}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						onKeyUp={handleTabEnter}>
						<div className={style.sectionName}>
							<a
								href="/americas-finance-guide/"
								tabIndex={-1}
								style={
									screenMode <= ScreenModeEnum.tablet &&
									!isMenuOpen &&
									!activeMainSection
										? { fontSize: '1rem' }
										: {}
								}>
								<FontAwesomeIcon icon={faHome} className="fas fa-home" width={8} />
								<span tabIndex={0}>Overview</span>
							</a>
							{screenMode >= ScreenModeEnum.desktop &&
								(isLarger === 'Overview' || !activeMainSection) && (
									<div className={style.sectionNameExtension} data-testid={'overview-extension'} />
								)}
						</div>
					</li>
					{screenMode >= ScreenModeEnum.desktop &&
						sections.map(section => {
							const isActive =
								activeSection && activeSection.chapter === section.chapter;
							const isMainSection =
								activeMainSection && activeMainSection.chapter === section.chapter;
							const subpageSection = activeSection
								? sections.find(sec => sec.chapter === activeSection.chapter)
								: { chapter: '', pages: [] };

							const activeSubPageStyle = {
								width: section.subPageWidth,
								transition: '500ms width',
							};
							const inactiveSubPageStyle = {
								width: 0,
								margin: 0,
								transition: '500ms width',
							};
							const activeSubPageItemStyle = {
								opacity: 1,
								transition: '250ms opacity',
								transitionDelay: '500ms',
							};
							const inactiveSubPageItemStyle = {
								opacity: 0,
								transition: '250ms opacity',
								transitionDelay: '500ms',
								width: 0,
							};

							const larger =
								isLarger === section.name ||
								(activeMainSection && activeMainSection.name === section.name);

							return (
								<>
									<li
										className={`${section.navClass} ${
											isActive ? style.activeSection : style.inactiveSection
										} ${isMainSection ? style.activeMainSection : ''}`}
										data-testid={`${section.chapter}-chevron`}
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
										onKeyUp={handleTabEnter}>
										<div
											className={`${style.mobileBlock} ${section.backgroundColorClass}`}
										/>
										<div
											className={style.sectionName}
											onClick={handleActiveSectionChange}
											onKeyUp={handleEnterPress}>
											<span tabIndex={0} className="section-name">
												{section.name}
											</span>
											{screenMode >= ScreenModeEnum.desktop && larger && (
												<div className={style.sectionNameExtension} data-testid={`${section.chapter}-extension`} />
											)}
										</div>
									</li>
									<li
										id={`${isActive ? 'active-chapter' : ''}`}
										className={`${style.chapterNavSubPages} ${
											screenMode > ScreenModeEnum.tablet || !isMenuOpen ? style.closed : ''
										}`}
										data-testid={`${section.chapter}-subpages`}
										style={
											isActive && isMounted ? activeSubPageStyle : inactiveSubPageStyle
										}>
										<ul
											className={
												screenMode <= ScreenModeEnum.tablet && activeSection
													? activeSection.transparentColorClass
													: ''
											}>
											{subpageSection.pages.map(page => (
												<li
													className={`${style.subPage} ${
														page.url === activeSubPage ? style.activeSubPage : ''
													} ${activeSection.colorClass}
													${screenMode > ScreenModeEnum.tablet || !isMenuOpen ? style.closed : ''}`}
													style={
														isActive && isMounted
															? activeSubPageItemStyle
															: inactiveSubPageItemStyle
													}>
													<a
														tabIndex={isActive ? 0 : -1}
														className={
															screenMode >= ScreenModeEnum.desktop
																? activeSection.colorClass
																: ''
														}
														href={page.url}>
														{page.name}
													</a>
													<div className={style.subPageBorder} />
												</li>
											))}
										</ul>
									</li>
								</>
							);
						})}
					{screenMode <= ScreenModeEnum.tablet &&
						sections.map(section => {
							const isActive =
								activeSection && activeSection.chapter === section.chapter;
							const isMainSection =
								activeMainSection && activeMainSection.chapter === section.chapter;
							const subpageSection = activeSection
								? sections.find(sec => sec.chapter === activeSection.chapter)
								: { chapter: '', pages: [] };

							const activeSubPageStyle = {
								height: 40 * section.pages.length,
								transition: '500ms height',
							};
							const inactiveSubPageStyle = {
								height: 0,
								margin: 0,
								transition: '500ms height',
							};
							const activeSubPageItemStyle = {
								opacity: 1,
								transition: '250ms opacity',
								transitionDelay: '500ms',
							};
							const inactiveSubPageItemStyle = {
								opacity: 0,
								transition: '250ms opacity',
								transitionDelay: '500ms',
								height: 0,
							};

							let activeSubPageName = section.name;

							if (activeSection && !isMenuOpen) {
								const page = activeSection.pages.find(p => p.url === activeSubPage);
								activeSubPageName = page ? page.name : '';
							}

							return (
								<>
									<li
										className={`${section.navClass} ${
											isActive ? style.activeSection : style.inactiveSection
										} ${isMainSection ? style.activeMainSection : ''} ${
											!isMenuOpen ? style.closed : ''
										}`}
										data-testid={`${section.chapter}-mobile`}>
										<div
											className={`${style.mobileBlock} ${section.backgroundColorClass}`}
										/>
										<div
											className={style.sectionName}
											tabIndex={0}
											onClick={handleActiveSectionChange}
											onKeyUp={handleEnterPress}
											style={!isMenuOpen ? { fontSize: '1rem' } : {}}>
											{activeSubPageName}
										</div>
									</li>
									<li
										className={`${style.chapterNavSubPages} ${
											!isMenuOpen || !isActive ? style.closed : ''
										}`}
										data-testid={`${section.chapter}-subPages`}
										style={
											isActive && !activeMainSectionClosed
												? activeSubPageStyle
												: inactiveSubPageStyle
										}>
										<ul
											className={
												screenMode <= ScreenModeEnum.tablet && activeSection
													? activeSection.transparentColorClass
													: ''
											}>
											{subpageSection.pages.map(page => (
												<li
													className={`${style.subPage} ${
														page.url === activeSubPage ? style.activeSubPage : ''
													} ${!isMenuOpen || !isActive ? style.closed : ''}`}
													style={
														isActive && !activeMainSectionClosed
															? activeSubPageItemStyle
															: inactiveSubPageItemStyle
													}>
													<a
														className={
															screenMode >= ScreenModeEnum.desktop
																? activeSection.colorClass
																: ''
														}
														href={page.url}>
														{page.name}
													</a>
													<div className={style.subPageBorder} />
												</li>
											))}
										</ul>
									</li>
								</>
							);
						})}
				</ul>
			</nav>
			<div
				className={`${style.mobileMenuButtonContainer} ${
					!isMenuOpen ? style.closed : ''
				}`}>
				<button className={style.mobileMenuButton}
								onClick={toggleMenu}>
					{isMenuOpen ? (
						<FontAwesomeIcon icon={faAngleUp} width={14} className="fa fa-angle-up" />
					) : (
						<FontAwesomeIcon
							icon={faAngleDown}
							width={14}
							className="fa fa-angle-down"
						/>
					)}
				</button>
			</div>
		</div>
	);
};

export default AfgNav;
