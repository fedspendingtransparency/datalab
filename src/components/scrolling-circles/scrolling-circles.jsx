import React, { useState, useEffect } from 'react';
import pageColorMap from 'src/utils/page-color';
import { legacy } from 'src/styles/variables.scss';

import styles from './scrolling-circles.module.scss';
import { checkScreenMode, ScreenModeEnum } from 'src/utils/screen-mode';

const ScrollingCircles = ({ sections }) => {
	const [activeSection, setActiveSection] = useState(sections[0].anchor);
	const [fillColor, setFillColor] = useState(legacy);
	const [fadeClass, setFadeClass] = useState('');
	const [topMargin, setTopMargin] = useState(106);
	const [screenMode, setScreenMode] = useState(0);

	const fade = () => {
		setFadeClass('');
		setTimeout(() => {
			setFadeClass(styles.fade);
		}, 2000);
	};

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: [...Array(100).keys()].map(x => x / 100),
	};

	let previousY = sections.reduce(
		(result, item) => ((result[item.anchor] = 0), result),
		{}
	);

	useEffect(() => {
		const pathname = window.location.pathname.split('/').join('');
		setFillColor(pageColorMap[pathname]);

		const observer = new window.IntersectionObserver(entries => {
			entries.forEach(entry => {
				const ratio = entry.intersectionRatio;
				const boundingRect = entry.boundingClientRect;
				const section = entry.target.id.replace('section-', '');
				const isScrollingDown = previousY[section] > boundingRect.y;

				let topThreshold = 15;
				let bottomThreshold = 0;

				const newMode = checkScreenMode(window.innerWidth);

				if (newMode !== screenMode) {
					setScreenMode(newMode);
				}

				if (newMode !== ScreenModeEnum.desktop) {
					topThreshold = 80;
					bottomThreshold = 95;
				}

				const inView =
					boundingRect.top < topThreshold && boundingRect.bottom > bottomThreshold;

				if (entry.isIntersecting && ratio < 1 && inView) {
					setActiveSection(section);
				}

				previousY = { ...previousY, [section]: boundingRect.y };
			});
		}, options);

		sections.forEach(section => {
			const target = document.getElementById(`section-${section.anchor}`);
			if (target) {
				observer.observe(target);
			}
		});

		document
			.getElementById('scroll-to-top')
			.addEventListener('click', function() {
				setActiveSection(sections[0].anchor);
			});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		fade();
	}, [activeSection]);

	const scrollToSection = (id, e) => {
		if (!e || e.key === 'Enter') {
			setActiveSection(id);
			fade();
		}
	};

	const handleFocus = e => {
		e.target.classList.add(styles.focused);
	};

	const handleBlur = e => {
		e.target.classList.remove(styles.focused);
	};

	const mouseOver = e => {
		console.log('mouseOver');
		e.target.classList.add(styles.hover);
	}

	const mouseOut = e => {
		console.log('mouseOut');
		e.target.classList.add(styles.labelFade);
		e.target.classList.remove(styles.hover);
	}

	return (
		<div className={styles.mainContainer} style={{ top: topMargin }}>
			{sections.map((section, number) => {
				const isActive = activeSection === section.anchor;

				let activeStyle = {
					color: fillColor,
				};

				if (isActive) {
					activeStyle = {
						backgroundColor: fillColor,
					};
				}

				let labelStyle = {
					backgroundColor: fillColor
				}

				if (!section.comingSoon && sections.length > 1) {
					return (
						<div className={styles.sectionContainer}>
							<a
								href={`#section-${section.anchor}`}
								onClick={() => scrollToSection(section.anchor)}
								onKeyPress={e => scrollToSection(section.anchor, e)}>
								<div
									className={`${styles.circle} ${isActive ? styles.active : ''}`}
									style={activeStyle}
									tabIndex={0}
									onMouseOver={mouseOver}
									onMouseOut={mouseOut}
									onFocus={handleFocus}
									onBlur={handleBlur}>
									{section.number || `0${number + 1}`}
								</div>
							</a>
							<div className={`${styles.label} ${fadeClass}`} style={labelStyle}>
								<div
									className={styles.beforeArrow}
									style={
										screenMode === ScreenModeEnum.mobile
											? { borderLeft: `solid 10px ${fillColor}`, left: '100%' }
											: { borderRight: `solid 10px ${fillColor}`, right: '100%' }
									}
								/>
								{section.section}
							</div>
						</div>
					);
				}

				return null;
			})}
		</div>
	);
};

export default ScrollingCircles;
