import React from "react";
import styles from "./page.module.scss";

import TagLine from '../../svgs/Logo-with-tagline.svg';
import NoTagLine from '../../svgs/Logo-without-tagline.svg';
import TagLineMobile from '../../svgs/logo-tablet-mobile.svg';

import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import MobileMenu from '../../components/headers/mobile-menu.jsx';
import Glossary from '../glossary/glossary';
import ScrollToTopButton from '../scroll-to-top-button/scroll-to-top-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    // if we're NOT on the homepage, always set isSticky to true!
    this.state = {
      isSticky: !props.isHome,
      isMobileTag: false,
      top: 0,
      skinnyTop: 26,
      skinnySub: 75,
      activeItem: '',
      showMobileMenu: false,
      windowWidth: undefined,
      menuData: this.props.megamenuItems,
      scrollButtonVisible: false
    };
  };

  componentDidMount() {
    this.setState({ isMobileTag: window.innerWidth < 475 }); // 475 arbitrary value when burger hits wall (position absolute!)

    if (typeof window !== 'undefined') {
      document.addEventListener('scroll', () => {
        this.setState({ scrollButtonVisible: window.pageYOffset !== 0 })

        // homepage listener...
        if (this.props.isHome === true) {
          const isSticky = window.pageYOffset > 135;
          this.setState({ isSticky });
        } else {
          // not on homepage..
          const topMax = 26;
          let skinnyTop = topMax - window.pageYOffset;
          if (window.pageYOffset > topMax) {
            skinnyTop = 0;
          }

          const subMax = 75;
          let skinnySub = subMax - window.pageYOffset;
          if (window.pageYOffset > 51) {
            skinnySub = 50;
          }

          this.setState({ skinnyTop, skinnySub });
        }
      })

      if (window.pageYOffset > 26) {
        this.setState({ skinnyTop: 0 });
      };
    }
  };

  burgerClick = () => {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  activateMenu = e => {
    if (!e.target.innerText) {
      return this.setState({ activeItem: ' ' });
    }
    this.setState({ activeItem: e.target.innerText });
  };

  deactivateMenu = e => {
    e.stopPropagation();

    // focus on menu heading

    this.setState({ activeItem: ' ' });
  };

  menuKeyUp = e => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      let menuItem;
      if (menuItem = document.getElementById('menu-first-item')) {
        menuItem.focus();
      } else {
        this.activateMenu(e);
      }
    } else if (e.key === 'Escape') {
      this.deactivateMenu(e);
    }
  }

  tagLineCheck = (isSticky) => {
    if (isSticky) {
      if (this.state.isMobileTag) {
        return (<TagLineMobile />);
      }
      return (<NoTagLine />);
    } else {
      if (this.state.isMobileTag) {
        return (<TagLineMobile />);
      }
      return (<TagLine />);
    }
  };

  scrollToTop = () => {
    if (typeof window !== 'undefined' && window.pageYOffset !== 0) {
      window.scrollTo(0, 0)
    }
  }

  render() {

    let { isSticky, skinnyTop, skinnySub, activeItem, showMobileMenu, isMobileTag, scrollButtonVisible } = this.state;

    return <>
      <header id={styles.header} className={`${isSticky ? ' ' + styles.headerContainer : ``}`}>
        <div style={{ top: this.props.isHome == true ? `` : `${skinnyTop}px` }} className={`${styles.main} ${isSticky ? styles.tight : ``} ${this.props.isHome ? `` : ``}`}>
          <div className={`${styles.logoWrapper} ${!isSticky ? ' ' + styles.col : ``}`}>
            <a href="/">
              <div>
                {this.tagLineCheck(isSticky, isMobileTag)}
              </div>
            </a>

            <nav className={`${styles.nav} ${isSticky ? ' ' + styles.tight : ``} ${this.props.isHome ? `` : ' ' + styles.tight}`}>
              <span className={styles.toggle} onClick={this.burgerClick}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul
                id={styles.burgerMenu}
                className={styles.ulNav}
                onKeyUp={this.menuKeyUp}
              >
                <li className={styles.item} onMouseOver={this.activateMenu}>
                  <button className={styles.anchor}>Analyses <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu}>
                  <button className={styles.anchor}>America's Finance Guide <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu}>
                  <button className={styles.anchor}>Resources <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item}>
                  <button className={`${styles.anchor} ${styles.glossary}`}><span className={styles.arrow}><Book /></span> Glossary </button>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className={`${styles.sub} ${isSticky ? ' ' + styles.tight : ``}`} style={{ top: this.props.isHome === true ? `` : `${skinnySub}px` }}>
          <Dropdown activeItem={activeItem}
            mouseHandle={this.deactivateMenu}
            data={this.props.megamenuItems}
          />

          {showMobileMenu
            ? <MobileMenu showMenu={showMobileMenu} headerItems={this.props.headerItems} data={this.props.megamenuItems} />
            : <></>
          }

        </div>
      </header>
      <ScrollToTopButton onClick={this.scrollToTop} visible={scrollButtonVisible} />
      <Glossary />
    </>;
  }
};
