import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { checkAfgScreenMode, ScreenModeEnum } from 'src/utils/screen-mode';
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
    },
  ];

  const [stickyStyle, setStickyStyle] = useState({ marginTop: '3rem' });
  const [screenMode, setScreenMode] = useState(0);
  const [activeSection, setActiveSection] = useState(sections.find((s) => s.chapter === chapter));
  const [clickedSection, setClickedSection] = useState(sections.find((s) => s.chapter === chapter));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSubPage = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const marginTop = window.innerWidth < 990 ? 50 : '3rem';

      const scrollListener = () => {
        setStickyStyle(window.pageYOffset > 26 && window.innerWidth >= 992 ? { position: 'sticky', top: 50 } : { marginTop });
      };

      window.addEventListener('scroll', scrollListener);

      const resizeWindow = () => {
        const newMode = checkAfgScreenMode(window.innerWidth);
        if (newMode !== screenMode) {
          setScreenMode(newMode);
        }
      };

      resizeWindow();
      window.addEventListener('resize', resizeWindow);
    }

    sections.forEach((section) => {
      section.pages.forEach((page) => {
        if (page.url === activeSubPage) {
          setActiveSection(section);
        }
      });
    });
  }, []);

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

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const subPages = activeSection && sections.find((section) => section.chapter === activeSection.chapter).pages.map((page) => (
    <li className={`${style.subPage} ${page.url === activeSubPage ? style.activeSubPage : ''} ${screenMode > ScreenModeEnum.tablet || !isMenuOpen ? style.closed : ''}`}>
      <a className={screenMode >= ScreenModeEnum.desktop ? activeSection.colorClass : ''} href={page.url}>
        {page.name}
      </a>
      <div className={style.subPageBorder} />
    </li>
  ));

  return (
    <div className={`${style.chapterNavContainer} ${!isMenuOpen ? style.chapterNavContainerClosed : style.chapterNavContainerOpen}`} style={stickyStyle}>
      <nav className={style.chapterNav}>
        <ul className={style.chapterNavPrimaryList}>
          <li className={`${style.chapterNavOverview} ${activeSection && !isMenuOpen ? style.closed : ''}`}>
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
                    <div className={`${style.mobileBlock} ${section.backgroundColorClass}`} />
                    <div className={style.sectionName} tabIndex={0} onClick={handleActiveSectionChange} onFocus={handleActiveSectionChange}>
                      {section.name}
                    </div>
                  </li>
                  <li className={`${style.chapterNavSubPages} ${screenMode > ScreenModeEnum.tablet || !isMenuOpen ? style.closed : ''}`}>
                    <ul className={screenMode <= ScreenModeEnum.tablet ? activeSection.transparentColorClass : ''}>
                      {subPages}
                    </ul>
                  </li>
                </>
              );
            }

            return (
              <li className={`${section.navClass} ${style.inactiveSection} ${screenMode <= ScreenModeEnum.tablet && !isMenuOpen ? style.closed : ''}`} onMouseEnter={handleActiveSectionChange} onMouseLeave={resetActiveSection}>
                <div className={`${style.mobileBlock} ${section.backgroundColorClass}`} />
                <div className={style.sectionName} tabIndex={0} onClick={handleActiveSectionChange} onFocus={handleActiveSectionChange}>
                  {section.name}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={style.mobileMenuButtonContainer}>
        <button className={style.mobileMenuButton} onClick={toggleMenu}>
          {isMenuOpen
            ? <FontAwesomeIcon
              icon={faAngleUp}
              width={14}
              className="fa fa-angle-up"
            />
            : <FontAwesomeIcon
              icon={faAngleDown}
              width={14}
              className="fa fa-angle-down"
            />
          }
        </button>
      </div>
    </div>
  );
};

export default AfgNav;
