import React from "react";
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
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

  returnActiveList = data => {
    return data.map((item, i) => {
      return (
        <>
          <li className={styles.dataListLi} key={i}>
            <a className={styles.dataListA} href={item.link}>{item.name}</a>
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

  render() {
    const show = this.props.showMenu;

    return (
      <>
        <div>
          <ul className={`${styles.mobile} ${show ? `` : styles.hidden}`}>
            <li className={styles.item} data-id='0' onClick={() => this.handleClick('Analyses')}>Analyses<span className={styles.arrow} onClick={() => this.handleClick('Analyses')}> <Arrow /></span></li>
            <ul className={`${styles.toggleList} ${this.state.analysesCheck ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[0].analyses)}</ul>
            {/* <li className={styles.item} data-id='1' onClick={this.handleClick}>DataLab Express<span className={styles.arrow}> <Arrow/></span></li> */}
            {/* <ul className={`${styles.toggleList} ${this.state.clickedItem == 'DataLab Express ' ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[1].express)}</ul> */}
            <li className={styles.item} data-id='2' onClick={() => this.handleClick("America's Finance Guide")}>America's Finance Guide<span className={styles.arrow} onClick={() => this.handleClick("America's Finance Guide")}> <Arrow /></span></li>
            <ul className={`${styles.toggleList} ${this.state.afgCheck ? `` : ' ' + styles.hidden}`}>
              <li className={styles.dataListLi}>
                <a className={styles.dataListA} href='/americas-finance-guide/'>Overview</a>
              </li>
              <hr className={styles.mobileHr} />
              <li className={styles.dataListLi}>
                <a className={styles.dataListA} href='/americas-finance-guide/revenue-and-gdp/'>Revenue</a>
              </li>
              <hr className={styles.mobileHr} />
              <li className={styles.dataListLi}>
                <a className={styles.dataListA} href='/americas-finance-guide/spending-and-gdp/'>Spending</a>
              </li>
              <hr className={styles.mobileHr} />
              <li className={styles.dataListLi}>
                <a className={styles.dataListA} href='/americas-finance-guide/explore-deficit/'>Deficit</a>
              </li>
              <hr className={styles.mobileHr} />
              <li className={styles.dataListLi}>
                <a className={styles.dataListA} href='/americas-finance-guide/explore-debt/'>Debt</a>
              </li>
              <hr className={styles.mobileHr} />
            </ul>
            <li className={styles.item} data-id='3' onClick={() => this.handleClick("Resources")}>Resources<span className={styles.arrow} onClick={() => this.handleClick('Resources')}> <Arrow /></span></li>
            <ul className={`${styles.toggleList} ${this.state.resourcesCheck ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
            <li className={`${styles.item} ${styles.glossary}`} data-id='4' onClick={() => this.handleClick("Glossary")}><span className={styles.arrow}><Book /></span> Glossary</li>
          </ul>
          <Dropdown clickedItem={this.state.clickedItem}
            data={this.state.data} />
        </div>
        <Glossary/>
      </>
    );
  };
}

export default MobileMenu;
