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
    };
  };

  componentDidMount() {
    this.setState({ isMobileTag: window.innerWidth < 475 }); // 475 arbitrary value when burger hits wall (position absolute!)

    // homepage listener...
    if (this.props.isHome === true) {
      document.addEventListener('scroll', () => {
        let isSticky = window.pageYOffset > 135;
        this.setState({ isSticky: isSticky });
      });
    }

    // not on homepage..
    if (this.props.isHome === false) {
      document.addEventListener('scroll', () => {
        const max = 26;
        let skinnyTop = max - window.pageYOffset;
        if (window.pageYOffset > max) {
          skinnyTop = 0;
        }
        this.setState({ skinnyTop });
      });

      if (window.pageYOffset > 26) {
        this.setState({ skinnyTop: 0 });
      };
    }

    // not on homepage...
    if (this.props.isHome === false) {
      document.addEventListener('scroll', () => {
        const max = 75;
        let skinnySub = max - window.pageYOffset;
        if (window.pageYOffset > 51) {
          skinnySub = 50;
        }
        this.setState({ skinnySub });
      });
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
    this.setState({ activeItem: ' ' });
  };

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

  render() {

    const isSticky = this.state.isSticky;

    return (<>
      <header id={styles.header} className={`${isSticky ? ' ' + styles.headerContainer : ``}`}>
        <div style={{ top: this.props.isHome == true ? `` : `${this.state.skinnyTop}px` }} className={`${styles.main} ${isSticky ? styles.tight : ``} ${this.props.isHome ? `` : ``}`}>
          <div className={`${styles.logoWrapper} ${!isSticky ? ' ' + styles.col : ``}`}>
            <a href="/">
              <div>
                {this.tagLineCheck(isSticky, this.state.isMobileTag)}
              </div>
            </a>

            <nav className={`${styles.nav} ${isSticky ? ' ' + styles.tight : ``} ${this.props.isHome ? `` : ' ' + styles.tight}`}>
              <span className={styles.toggle} onClick={this.burgerClick}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul className={styles.ulNav} id={styles.burgerMenu}>
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.activateMenu}>
                  <button className={styles.anchor}>Analyses <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.activateMenu}>
                  <button className={styles.anchor}>America's Finance Guide <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.activateMenu} onFocus={this.activateMenu}>
                  <button className={styles.anchor}>Resources <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item}>
                  <button className={`${styles.anchor} ${styles.glossary}`}><span className={styles.arrow}><Book /></span> Glossary </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`${styles.sub} ${isSticky ? ' ' + styles.tight : ``}`} style={{ top: this.props.isHome === true ? `` : `${this.state.skinnySub}px` }}>
          <Dropdown
            activeItem={this.state.activeItem}
            mouseHandle={this.deactivateMenu}
            data={this.props.megamenuItems}
          />

          {this.state.showMobileMenu ?
            <MobileMenu showMenu={this.state.showMobileMenu} headerItems={this.props.headerItems} data={this.props.megamenuItems} />
            :
            <></>
          }

        </div>
      </header>
      <Glossary />
    </>);
  }
};
