import React, { useState, useEffect } from 'react';
import pageColorMap from 'src/utils/page-color';
import { legacy } from 'src/styles/variables.scss';

import styles from './scrolling-circles.module.scss';

const ScrollingCircles = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].anchor);
  const [fillColor, setFillColor] = useState(legacy);

  const sectionScrollPositions = [];

  useEffect(() => {
    const pathname = window.location.pathname.split('/').join('');
    setFillColor(pageColorMap[pathname]);

    sections.forEach((section) => {
      const target = document.getElementById(`section-${section.anchor}`);
      const callback = (entries) => {
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
        });
      };
      
      const observer = new IntersectionObserver(callback);
      observer.observe(target);
      console.log('observing')
    });

    
    window.addEventListener('scroll', () => {
      const scrollPositions = sectionScrollPositions.sort((a, b) => a.bottom - b.bottom);
      const newActiveSection = scrollPositions.find((s) => s.bottom > window.pageYOffset);
      if (newActiveSection) setActiveSection(newActiveSection.id);
    });
  }, []);

  const scrollToSection = (id) => {
    console.log(id, sectionScrollPositions)
    const section = sectionScrollPositions.find((s) => s.id === id);
    window.scrollTo(section.top);
  };

  console.log(sectionScrollPositions)

  return (
    <div className={styles.mainContainer}>
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
            <div className={styles.label} style={activeStyle}>
              <div className={styles.beforeArrow} style={{ borderRight: `solid 10px ${fillColor}` }} />
              {section.section}
            </div>
          );
        }

        return (
          <div className={styles.sectionContainer}>
            <div
              className={`${styles.circle} ${isActive ? styles.active : ''}`}
              style={activeStyle}
              onClick={() => scrollToSection(section.anchor)}
            >
              {`0${number}`}
            </div>
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollingCircles;
