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

  const fade = () => {
    setFadeClass('');
    setTimeout(() => {
      setFadeClass(styles.fade);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const pathname = window.location.pathname.split('/').join('');
    setFillColor(pageColorMap[pathname]);

    const sectionScrollPositions = [];
    const observe = () => {
      setPositions([]);

      sections.forEach((section) => {
        const target = document.getElementById(`section-${section.anchor}`);

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id.split('-')[1];
            const { top, bottom } = entry.boundingClientRect;

            if (!sectionScrollPositions.find((s) => s.id === id)) {
              sectionScrollPositions.push({
                id,
                top,
                bottom,
              });
            }

            setPositions(sectionScrollPositions);
          });
        });

        observer.observe(target);
      });
    };

    observe();

    window.addEventListener('scroll', () => {
      const scrollPositions = sectionScrollPositions.sort((a, b) => a.bottom - b.bottom);
      const newActiveSection = scrollPositions.find((s) => s.bottom > window.pageYOffset);

      if (newActiveSection) {
        setActiveSection(newActiveSection.id);
      }

      if (window.pageYOffset <= 26) {
        setTopMargin(106 - window.pageYOffset);
      } else {
        setTopMargin(80);
      }
    });

    const resizeWindow = () => {
      const newMode = checkScreenMode(window.innerWidth);
      if (newMode !== screenMode) {
        setScreenMode(newMode);
      }
    };

    resizeWindow();

    window.addEventListener('resize', () => {
      resizeWindow();
      observe();
    });
  }, []);

  useEffect(() => {
    fade();
  }, [activeSection]);

  const scrollToSection = (id, e) => {
    if (!e || e.key === 'Enter') {
      const section = positions.find((s) => s.id === id);
      window.scrollTo(0, section.top + 10);
      fade();
    }
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
              <div className={styles.beforeArrow} style={{ borderRight: `solid 10px ${fillColor}` }} />
              {section.section}
            </div>
          );
        }

        if (!section.comingSoon && sections.length > 1) {
          return (
            <div className={styles.sectionContainer}>
              <div
                className={`${styles.circle} ${isActive ? styles.active : ''}`}
                style={activeStyle}
                tabIndex={0}
                onClick={() => scrollToSection(section.anchor)}
                onKeyPress={(e) => scrollToSection(section.anchor, e)}
              >
                {`0${number}`}
              </div>
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
