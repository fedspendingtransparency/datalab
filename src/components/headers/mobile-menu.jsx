import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from './dropdown.jsx';
import styles from './page.module.scss';
import Glossary from '../glossary/glossary';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: null,
      analysesCheck: false,
      afgCheck: false,
      resourcesCheck: false,
      glossaryCheck: false,
      data: this.props.data,
    };
  }

  returnActiveList = (data, name) => {
    return data.map((item, key) => {
      let id = '';
      if (key === 0) id = 'menu-first-item';
      if (key === data.length - 1) id = 'menu-last-item';
      const matchy = /(:?api|:?fiscal)/g;
      if (item.link.match(matchy)) {
        return (
          <>
            <li className={styles.dataListLi} key={key}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.dataListA}>{item.name}</a>
            </li>
            <hr className={styles.mobileHr} />
          </>
        );
      }
      return (
        <>
          <li className={styles.dataListLi} key={key} onKeyDown={(e) => this.sublistTab(e, name)}>
            <a id={id} href={item.link} tabIndex="0" className={styles.dataListA}>{item.name}</a>
          </li>
          <hr className={styles.mobileHr} />
        </>
      );
    });
  }

  sublistTab = (e, name) => {
    if (e.key === 'Escape') {
      if (name === 'Analyses') {
        this.handleClick('Analyses');
        document.getElementById('analysesBtn').focus();
      } else if (name === 'Resources') {
        this.handleClick('Resources');
        document.getElementById('resourcesBtn').focus();
      } else if (name === "America's Finance Guide") {
        this.handleClick("America's Finance Guide");
        document.getElementById('afgBtn').focus();
      } else {
        return null;
      }
    }
    if (e.key === 'Tab') {
      if ((document.activeElement.id === 'menu-first-item' && e.shiftKey) || (document.activeElement.id === 'menu-last-item' && !e.shiftKey)) {
        if (name === 'Analyses') {
          this.handleClick('Analyses');
        } else if (name === 'Resources') {
          this.handleClick('Resources');
        } else if (name === "America's Finance Guide") {
          this.handleClick("America's Finance Guide");
        } else {
          return null;
        }
      }
    }
  }

  handleClick = (dropdown) => {
    switch (dropdown) {
      case 'Analyses':
        this.setState({ analysesCheck: !this.state.analysesCheck });
        document.getElementById('analyses').childNodes[0].childNodes[0].focus();
        break;
      case "America's Finance Guide":
        this.setState({ afgCheck: !this.state.afgCheck });
        document.getElementById('afg').childNodes[0].childNodes[0].focus();
        break;
      case 'Resources':
        this.setState({ resourcesCheck: !this.state.resourcesCheck });
        document.getElementById('resources').childNodes[0].childNodes[0].focus();
        break;
      case 'Glossary':
        this.setState({ glossaryCheck: !this.state.glossaryCheck });
        document.getElementById('glossary').childNodes[0].childNodes[0].focus();
        break;
    }
  }

  handleExit = (e) => {
    if (e.key === 'Tab') {
      if ((document.activeElement.id === 'analysesBtn' && e.shiftKey) || (document.activeElement.id === 'glossaryBtn' && !e.shiftKey)) {
        this.props.burgerClick();
      }
    }
  }

  render() {
    return (
      <>
        <div>
          <ul className={`${styles.mobile} ${this.state.isShowing ? '' : styles.hidden}`} onKeyDown={this.handleExit}>
            <div>
              <li className={styles.item} data-id="0" onClick={() => this.handleClick('Analyses')}>
                <button id="analysesBtn" className={styles.mobileMenuBtn}>
                  Analyses
                  <span className={styles.arrow} onClick={() => this.handleClick('Analyses')}>
                    {' '}
                    <Arrow />
                  </span>
                </button>
              </li>
              <ul id="analyses" className={`${styles.toggleList} ${this.state.analysesCheck ? '' : ` ${styles.hidden}`}`}>{this.returnActiveList(this.state.data[0].analyses, 'Analyses')}</ul>
            </div>
            <div>
              <li className={styles.item} data-id="2" id="afg">
                <Link to="/americas-finance-guide/">
                  <button id="afgBtn" className={styles.mobileMenuBtn} tabIndex={-1}>
                    America's Finance Guide
                  </button>
                </Link>
              </li>
            </div>
            <div>
              <li className={styles.item} data-id="3" onClick={() => this.handleClick('Resources')}>
                <button id="resourcesBtn" className={styles.mobileMenuBtn}>
                  Resources
                  <span className={styles.arrow} onClick={() => this.handleClick('Resources')}>
                    {' '}
                    <Arrow />
                  </span>
                </button>
              </li>
              <ul id="resources" className={`${styles.toggleList} ${this.state.resourcesCheck ? '' : ` ${styles.hidden}`}`}>{this.returnActiveList(this.state.data[3].resources, 'Resources')}</ul>
            </div>
            <div>
              <li className={styles.item} data-id="4" id="about">
                <Link to="/about">
                  <button id="aboutBtn" className={styles.mobileMenuBtn} tabIndex={-1}>
                    About Us
                    <span className={styles.arrow}>
                      {' '}
                      <FontAwesomeIcon icon={faInfoCircle} className="fa-xs" />
                    </span>
                  </button>
                </Link>
              </li>
            </div>
            <div>
              <li className={`${styles.item} ${styles.glossary}`} data-id="5" id="glossary" onClick={() => this.handleClick('Glossary')}>
                <button id="glossaryBtn" className={styles.mobileMenuBtn}>
                  Glossary
                  <span className={styles.arrow}>
                    {' '}
                    <Book />
                  </span>
                </button>
              </li>
            </div>
          </ul>
          <Dropdown
            clickedItem={this.state.clickedItem}
            data={this.state.data}
          />
        </div>
        <Glossary />
      </>
    );
  }
}

export default MobileMenu;
