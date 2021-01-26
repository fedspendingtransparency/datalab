import React, { useState, useEffect } from 'react';
import pageColorMap from 'src/utils/page-color';
import { legacy } from 'src/styles/variables.scss';

import styles from './scrolling-circles.module.scss';
import { checkScreenMode, ScreenModeEnum } from '../../utils/screen-mode';

const ScrollingCircles = ({ sections }) => {
	const [screenMode, setScreenMode] = useState(0);
	const [activeSection, setActiveSection] = useState(sections[0].anchor);
	const [fillColor, setFillColor] = useState(legacy);
	const [topMargin, setTopMargin] = useState(106);
	const [fadeClass, setFadeClass] = useState('');

	const [positions, setPositions] = useState([]);
	const [currentY, setCurrentY] = useState({
		budget: null,
		overview: null,
		tracking: null,
	});

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

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const ratio = entry.intersectionRatio;
			const boundingRect = entry.boundingClientRect;
			const intersectionRect = entry.intersectionRect;
			const currentY = entry.boundingClientRect.y;
			const section = entry.target.id.replace('section-', '');

			if (ratio === 0) {
				console.log('outside');
			} else if (ratio < 1) {
				console.log(boundingRect.bottom);
				console.log(boundingRect.top);

				if (boundingRect.top > 50 && boundingRect.top < 100) {
					console.log('top in scroll view');
					// if scroll direction is down then set the section state and show the flag
				} else if (boundingRect.bottom > 50 && boundingRect.bottom < 100) {
					console.log('bottom in view');
					// if scroll direction is up then set the section state and show the flag
				} else if (boundingRect.top >= 100 || boundingRect.bottom <= 50) {
					console.log('on page but not inview');
				} else {
					console.log('inview');
				}
			}
			setCurrentY(prevState => ...prevState.currentY, [section]: boundingRect.y)
		});
	}, options);

	useEffect(() => {
		window.scrollTo(0, 0);
		const pathname = window.location.pathname.split('/').join('');
		setFillColor(pageColorMap[pathname]);

		const sectionScrollPositions = [];

		sections.forEach(section => {
			const target = document.getElementById(`section-${section.anchor}`);
			observer.observe(target);
			// setPositions(sectionScrollPositions);
		});

		// window.addEventListener('scroll', () => {
		//   const scrollPositions = sectionScrollPositions.sort((a, b) => a.bottom - b.bottom);
		//   const newActiveSection = scrollPositions.find((s) => s.bottom > window.pageYOffset);
		//
		//   if (newActiveSection) {
		//     setActiveSection(newActiveSection.id);
		//   }
		//
		//   if (window.pageYOffset <= 26) {
		//     setTopMargin(106 - window.pageYOffset);
		//   } else {
		//     setTopMargin(80);
		//   }
		// });

		// const resizeWindow = () => {
		// 	const newMode = checkScreenMode(window.innerWidth);
		// 	if (newMode !== screenMode) {
		// 		setScreenMode(newMode);
		// 	}
		// };
		//
		// resizeWindow();
		//
		// window.addEventListener('resize', () => {
		// 	resizeWindow();
		// 	observe();
		// });
	});

	useEffect(() => {
		fade();
	}, [activeSection]);

	const scrollToSection = (id, e) => {
		console.log('hello');
		if (!e || e.key === 'Enter') {
			fade();
		}
	};

	const handleFocus = e => {
		e.target.classList.add(styles.focused);
	};

	const handleBlur = e => {
		e.target.classList.remove(styles.focused);
	};

	return (
		<div className={styles.mainContainer} style={{ top: topMargin }}>
			{sections.map((section, number) => {
				const isActive = activeSection === section.anchor;

				let label = <></>;
				let activeStyle = {
					color: fillColor,
				};

				if (isActive) {
					activeStyle = {
						backgroundColor: fillColor,
					};

					label = (
						<div className={`${styles.label} ${fadeClass}`} style={activeStyle}>
							<div
								className={styles.beforeArrow}
								style={{ borderRight: `solid 10px ${fillColor}` }}
							/>
							{section.section}
						</div>
					);
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
									onFocus={handleFocus}
									onBlur={handleBlur}>
									{section.number || `0${number + 1}`}
								</div>
							</a>
							{label}
						</div>
					);
				}

				return null;
			})}
		</div>
	);
};

export default ScrollingCircles;
