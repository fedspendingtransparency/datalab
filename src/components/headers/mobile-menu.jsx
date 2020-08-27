import React from "react";
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import styles from './page.module.scss';
import Glossary from '../glossary/glossary';
import { Link } from 'gatsby';

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

  returnActiveList = (data) => {
    return data.map((item, i) => {
      return (
        <>
          <li className={styles.dataListLi} key={i}>
            <a href={item.link} className={styles.dataListA}>{item.name}</a>
          </li>
          <hr className={styles.mobileHr} />
        </>
      );
    });
  };


  handleClick = (dropdown) => {
    switch (dropdown) {
      case "Analyses":
        this.setState({ analysesCheck: !this.state.analysesCheck });
        break;
      case "America's Finance Guide":
        this.setState({ afgCheck: !this.state.afgCheck });
        break;
      case "Resources":
        this.setState({ resourcesCheck: !this.state.resourcesCheck });
        break;
      case "Glossary":
        this.setState({ glossaryCheck: !this.state.glossaryCheck });
        break;
    };
  };

  handleExit = (e) => {
    if (e.key === 'Escape') {
      this.props.burgerClick();
    }
    if (e.key === 'Tab') {
      if ((document.activeElement.id === 'analyses' && e.shiftKey) || (document.activeElement.id === 'glossary' && !e.shiftKey)) {
        this.props.burgerClick();
      }
    }
  }

  render() {

    return (
      <>
        <div>
          <ul className={`${styles.mobile} ${this.state.isShowing ? `` : styles.hidden}`}>

            <div>
              <li className={styles.item} data-id='0' id="analyses"  onClick={() => this.handleClick('Analyses')}>
                <button className={styles.mobileMenuBtn}>
                  Analyses
                  <span className={styles.arrow} onClick={() => this.handleClick('Analyses')}> <Arrow /></span>
                </button>
              </li>
              <ul className={`${styles.toggleList} ${this.state.analysesCheck ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[0].analyses, true)}</ul>
            </div>

            <div>
              <li className={styles.item} data-id='2' onClick={() => this.handleClick("America's Finance Guide")}>
                <button className={styles.mobileMenuBtn}>
                  America's Finance Guide
                  <span className={styles.arrow} onClick={() => this.handleClick("America's Finance Guide")}> <Arrow /></span>
                </button>
              </li>
              <ul className={`${styles.toggleList} ${this.state.afgCheck ? `` : ' ' + styles.hidden}`}>
                <li className={styles.dataListLi}>
                  <Link to={'/americas-finance-guide/'} className={styles.dataListA} >Overview</Link>
                </li>
                <hr className={styles.mobileHr} />
                <li className={styles.dataListLi}>
                  <Link to={'/americas-finance-guide/revenue/'} className={styles.dataListA}>Revenue</Link>
                </li>
                <hr className={styles.mobileHr} />
                <li className={styles.dataListLi}>
                  <Link to={'/americas-finance-guide/spending/'} className={styles.dataListA}>Spending</Link>
                </li>
                <hr className={styles.mobileHr} />
                <li className={styles.dataListLi}>
                  <Link to={'/americas-finance-guide/deficit/'} className={styles.dataListA}>Deficit</Link>
                </li>
                <hr className={styles.mobileHr} />
                <li className={styles.dataListLi}>
                  <Link to={'/americas-finance-guide/debt/'} className={styles.dataListA}>Debt</Link>
                </li>
                <hr className={styles.mobileHr} />
              </ul>
            </div>

            <div>
              <li className={styles.item} data-id='3' onClick={() => this.handleClick("Resources")}>
                <button className={styles.mobileMenuBtn}>
                  Resources
                  <span className={styles.arrow} onClick={() => this.handleClick('Resources')}> <Arrow /></span>
                </button>
              </li>
              <ul className={`${styles.toggleList} ${this.state.resourcesCheck ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
            </div>

            <div>
              <li className={`${styles.item} ${styles.glossary}`} data-id='4' id="glossary" onClick={() => this.handleClick("Glossary")}><span className={styles.arrow}><Book /></span> Glossary</li>
            </div>

          </ul>

          <Dropdown clickedItem={this.state.clickedItem}
            data={this.state.data} />

        </div>
        <Glossary />
      </>
    );
  };
}

export default MobileMenu;
