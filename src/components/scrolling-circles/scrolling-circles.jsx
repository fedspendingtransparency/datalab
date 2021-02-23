import React, {useState, useEffect} from 'react';
import pageColorMap from 'src/utils/page-color';
import {legacy} from 'src/styles/variables.scss';

import styles from './scrolling-circles.module.scss';
import {checkScreenMode, ScreenModeEnum} from 'src/utils/screen-mode';

const ScrollingCircles = ({sections}) => {
  const [activeSection, setActiveSection] = useState();
  const [fillColor, setFillColor] = useState(legacy);
  const [topMargin, setTopMargin] = useState(106);
  const [screenMode, setScreenMode] = useState(0);
  const [showLabel, setShowLabel] = useState(true);

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
    // give the observers a chance to set the activeSection before setting it
    // to default
    setTimeout(() => {
      if (!activeSection) {
        setActiveSection(sections[0].anchor);
      }
    }, 100);

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

        previousY = {...previousY, [section]: boundingRect.y};
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
      .addEventListener('click', function () {
        setActiveSection(sections[0].anchor);
      });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setShowLabel(true);
    setTimeout(() => {
      setShowLabel(false);
    }, 2000);
  }, [activeSection]);

  const scrollToSection = (id, e) => {
    if (!e || e.key === 'Enter') {
      setActiveSection(id);
    }
  };

  const handleFocus = e => {
    e.target.classList.add(styles.focused);
  };

  const handleBlur = e => {
    e.target.classList.remove(styles.focused);
  };

  return (
    <div className={styles.mainContainer} style={{top: topMargin}}>
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

        if (!section.comingSoon && sections.length > 1) {
          return (
            <div className={styles.sectionContainer}>
              <a
                href={`#section-${section.anchor}`}
                onClick={() => scrollToSection(section.anchor)}
                onKeyPress={e => scrollToSection(section.anchor, e)}>
                <div
                  className={`${styles.circle} ${isActive ? styles.active : ''} ${isActive && showLabel ? styles.showLabel : ''}`}
                  style={activeStyle}
                  id={section.anchor}
                  tabIndex={0}
                  onFocus={handleFocus}
                  onBlur={handleBlur}>
                  {section.number || `0${number + 1}`}
                  <div className={styles.labelContainer}>
                    <div
                      className={`${styles.beforeArrow}`}
                      style={{backgroundColor: fillColor}}
                      id={`${section.anchor}Arrow`}
                    />
                    <div
                      className={`${styles.label}`}
                      style={{backgroundColor: fillColor}}
                      id={`${section.anchor}Label`}>
                      {section.section}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}


export default ScrollingCircles;
