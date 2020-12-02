import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
    },
  ];

  const [stickyStyle, setStickyStyle] = useState({ marginTop: '3rem' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const marginTop = window.innerWidth < 990 ? 50 : '3rem';

      const scrollListener = () => {
        setStickyStyle(window.pageYOffset > 26 ? { position: 'sticky', top: 50 } : { marginTop });
      };

      window.addEventListener('scroll', scrollListener);
    }
  }, []);

  const [activeSection, setActiveSection] = useState(sections.find((s) => s.chapter === chapter));
  const [clickedSection, setClickedSection] = useState(sections.find((s) => s.chapter === chapter));

  const handleActiveSectionChange = (e) => {
    const section = sections.find((s) => s.name === e.target.textContent);
    if (e.target === e.currentTarget) {
      setActiveSection(section);
      setClickedSection(section);
    } else {
      setActiveSection(section);
    }
  };

  const resetActiveSection = () => {
    setActiveSection(clickedSection);
  };

  const activeSubPage = typeof window !== 'undefined' ? window.location.pathname : '';

  const subPages = activeSection && sections.find((section) => section.chapter === activeSection.chapter).pages.map((page) => (
    <li className={`${style.subPage} ${page.url === activeSubPage ? style.activeSubPage : ''}`}>
      <a className={activeSection.colorClass} href={page.url}>
        {page.name}
      </a>
      <div className={style.subPageBorder} />
    </li>
  ));

  return (
    <nav className={style.chapterNav} style={stickyStyle}>
      <ul className={style.chapterNavPrimaryList}>
        <li className={style.chapterNavOverview}>
          <div className={style.sectionName}>
            <a href="/americas-finance-guide/">
              <FontAwesomeIcon
                icon={faHome}
                className="fas fa-home"
                width={8}
              />
              Overview
            </a>
          </div>
        </li>
        {sections.map((section) => {
          if (activeSection && activeSection.chapter === section.chapter) {
            return (
              <>
                <li className={`${section.navClass} ${style.activeSection}`} onMouseEnter={handleActiveSectionChange} onMouseLeave={resetActiveSection}>
                  <div className={style.sectionName} tabIndex={0} onClick={handleActiveSectionChange} onFocus={handleActiveSectionChange}>
                    {section.name}
                  </div>
                </li>
                <li className={style.chapterNavSubpages}>
                  <ul>
                    {subPages}
                  </ul>
                </li>
              </>
            );
          }

          return (
            <li className={`${section.navClass} ${style.inactiveSection}`} onMouseEnter={handleActiveSectionChange} onMouseLeave={resetActiveSection}>
              <div className={style.sectionName} tabIndex={0} onClick={handleActiveSectionChange} onFocus={handleActiveSectionChange}>
                {section.name}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AfgNav;
