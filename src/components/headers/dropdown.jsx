import React from "react";
import PropTypes from 'prop-types';
import styles from './page.module.scss';

export default class Dropdown extends React.Component {
  static propTypes = {
    'data': PropTypes.object.isRequired,
    'mouseHandle': PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  menuKeyUp = e => {
    if (e.key === 'Escape') {
      this.props.mouseHandle(e);
    }
  }

  returnActiveList = (data, first) => {
    return data.map((item, key) => {
      return (
        <li key={key} className={styles.li}>
          <a id={first ? 'menu-first-item' : ''}
            href={item.link} className={styles.a}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    if (!this.props.activeItem) {
      return null;
    }
    const activeItem = this.props.activeItem.toString().trim();

    return <div>
      {activeItem === "Analyses" &&
        <div className={styles.dataList} onMouseLeave={this.props.mouseHandle} onKeyUp={this.menuKeyUp}>
          <section className={`${styles.section} ${styles.analyses}`}>
            <h4 className={styles.sectionTitle}>Topical Analyses</h4>
            <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(0, 4), true)}</ul>
          </section>
          <section className={`${styles.section} ${styles.analyses}`}>
            <h4 className={styles.sectionTitle}>Contract Analyses</h4>
            <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(4, 6))}</ul>
          </section>
          <section className={`${styles.section} ${styles.analyses}`}>
            <h4 className={styles.sectionTitle}>Financial Data Visualizations</h4>
            <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(6, 9))}</ul>
          </section>
        </div>
      }
      {
        activeItem === "DataLab Express" &&
        <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
          <section className={`${styles.section} ${styles.express}`}>
            <ul className={`${styles.ul} ${styles.ulExpress}`}>{this.returnActiveList(this.state.data[1].express)}</ul>
          </section>
        </div>
      }
      {
        activeItem === "America's Finance Guide" &&
        <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Overview</h4>
            <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(0, 1))}</ul>
          </section>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Revenue</h4>
            <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(1, 5))}</ul>
          </section>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Spending</h4>
            <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(5, 9))}</ul>
          </section>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Deficit</h4>
            <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(9, 12))}</ul>
          </section>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Debt</h4>
            <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(12, 16))}</ul>
          </section>
        </div>
      }
      {
        activeItem === "Resources" &&
        <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
          <section className={`${styles.section} ${styles.resources}`}>
            <ul className={`${styles.ul} ${styles.ulResources}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
          </section>
        </div>
      }
      {
        activeItem === "Glossary" &&
        <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
          <section className={`${styles.section} ${styles.glossary}`}>
            <ul className={`${styles.ul} ${styles.ulGlossary}`}>{this.returnActiveList(this.state.data[4].glossary)}</ul>
          </section>
        </div>
      }
    </div>
      ;
  }
}
