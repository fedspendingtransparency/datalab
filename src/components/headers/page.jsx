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
      activeItem: null,
      showMobileMenu: false,
      windowWidth: undefined,
      menuData: this.props.megamenuItems,
      scrollButtonVisible: false,
      showMenu: false
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
    this.setState(prevState => ({ showMobileMenu: !prevState.showMobileMenu }));
  };

  focusMenu = (e) => {
    if (!e.target.innerText) {
      return this.setState({ activeItem: null });
    }
    this.setState({ activeItem: e.target });
  };

  activateMenu = (e) => {
    if (!e.target.innerText) {
      return this.setState({
        activeItem: null,
        showMenu: false
      });
    }
    this.setState({
      activeItem: e.target,
      showMenu: true
    });
  };

  deactivateMenu = (e) => {
    e.stopPropagation();
    if (e.key) this.state.activeItem.focus(); // should only focus on key press
    this.setState({
      activeItem: null,
      showMenu: false
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.menuKeyUp(e);
    } else if (e.key === 'Tab') {
      this.setState({
        activeItem: null,
        showMenu: false
      });
    }
  }

  menuKeyUp = (e) => {
    if (e.key === 'Escape') {
      this.deactivateMenu(e);
    } else if (e.key === 'Enter') {
      this.setState({ showMenu: true })
      e.stopPropagation();
      let menuItem;
      if (menuItem = document.getElementById('menu-first-item')) {
        menuItem.focus();
      } else {
        this.focusMenu(e);
      }
    }
  }

  handleExitMenu = (e) => {
    if (e.key === 'Tab') {
      if ((document.activeElement.id === 'menu-first-item' && e.shiftKey) || (document.activeElement.id === 'menu-last-item' && !e.shiftKey)) {
        this.deactivateMenu(e);
      }
    }
  }

  tagLineCheck = () => {
    if (this.state.isMobileTag) {
      return (<TagLineMobile />);
    } else {
      if (this.state.isSticky) {
        return (<NoTagLine />);
      }
      return (<TagLine width="100%" />);
    }
  };

  scrollToTop = () => {
    if (typeof window !== 'undefined' && window.pageYOffset !== 0) {
      window.scrollTo(0, 0)
    }
  }

  render() {

    let { isSticky, skinnyTop, skinnySub, activeItem, showMenu, showMobileMenu, isMobileTag, scrollButtonVisible } = this.state;

    return <>
      <header id={styles.header} className={`${isSticky ? ' ' + styles.headerContainer : ``}`}>
        <div style={{ top: this.props.isHome == true ? `` : `${skinnyTop}px` }} className={`${styles.main} ${isSticky ? styles.tight : ``} ${this.props.isHome ? `` : ``}`}>
          <div className={`${styles.logoWrapper} ${!isSticky ? ' ' + styles.col : ``}`}>
            <a href="/">
              <div>
                {this.tagLineCheck()}
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
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.focusMenu} onKeyDown={this.handleKeyPress}>
                  <button className={styles.anchor}>Analyses <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.focusMenu} onKeyDown={this.handleKeyPress}>
                  <button className={styles.anchor}>America's Finance Guide <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.focusMenu} onKeyDown={this.handleKeyPress}>
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
          <Dropdown
            activeItem={activeItem ? activeItem.innerText : null}
            mouseHandle={this.deactivateMenu}
            handleExitMenu={this.handleExitMenu}
            data={this.props.megamenuItems}
            showMenu={showMenu}
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
