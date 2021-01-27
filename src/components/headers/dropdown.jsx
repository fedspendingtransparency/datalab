import React from 'react';
import PropTypes from 'prop-types';
import styles from './page.module.scss';

export default class Dropdown extends React.Component {
  static propTypes = {
    'data': PropTypes.arrayOf(PropTypes.object).isRequired,
    'mouseHandle': PropTypes.func.isRequired,
    'handleExitMenu': PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  menuKeyUp = (e) => {
    if (e.key === 'Escape') {
      this.props.mouseHandle(e);
    }
  }

  menuItemKeyUp = (e) => {
    if (e.key === 'Tab') {
      this.props.handleExitMenu(e);
    }
  }

  returnActiveList = (data, first, last) => {
    return data.map((item, key) => {
      let id = '';
      if (first && key === 0) id = 'menu-first-item';
      if (last && key === data.length - 1) id = 'menu-last-item';
      const matchy = /(:?api|:?fiscal)/g;
      if (item.link.match(matchy)) {
        return (
          <li key={key} className={styles.li} onKeyDown={this.menuItemKeyUp}>
            <a id={id} href={item.link} target="_blank" className={styles.a}>{item.name}</a>
          </li>
        );
      }
      return (
        <li key={key} className={styles.li} onKeyDown={this.menuItemKeyUp} role="none">
          <a id={id} href={item.link} className={styles.a} role="menuitem" aria-label={item.name}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    if (!this.props.showMenu) {
      return null;
    }
    const activeItem = this.props.activeItem.toString().trim();

    return (
      <div>
        {activeItem === "Analyses" &&
          <div className={styles.dataList} onMouseLeave={this.props.mouseHandle} onKeyUp={this.menuKeyUp}>
            <section className={`${styles.section} ${styles.analyses}`}>
              <h4 className={styles.sectionTitle}>Topical Analyses</h4>
              <ul className={`${styles.ul} ${styles.ulAnalyses}`} role="menubar" aria-label="Topical Analyses">{this.returnActiveList(this.state.data[0].analyses.slice(0, 4), true)}</ul>
            </section>
            <section className={`${styles.section} ${styles.analyses}`}>
              <h4 className={styles.sectionTitle}>Contract Analyses</h4>
              <ul className={`${styles.ul} ${styles.ulAnalyses}`} role="menubar" aria-label="Contract Analyses">{this.returnActiveList(this.state.data[0].analyses.slice(4, 6))}</ul>
            </section>
            <section className={`${styles.section} ${styles.analyses}`}>
              <h4 className={styles.sectionTitle}>Financial Data Visualizations</h4>
              <ul className={`${styles.ul} ${styles.ulAnalyses}`} role="menubar" aria-label="Financial Data Visualizations">{this.returnActiveList(this.state.data[0].analyses.slice(6, 9), false, true)}</ul>
            </section>
          </div>
        }
        {
          activeItem === "DataLab Express" &&
          <div className={styles.dataList} onMouseLeave={this.props.mouseHandle} onKeyUp={this.menuKeyUp}>
            <section className={`${styles.section} ${styles.express}`}>
              <ul className={`${styles.ul} ${styles.ulExpress}`}>{this.returnActiveList(this.state.data[1].express, true, true)}</ul>
            </section>
          </div>
        }
        {
          activeItem === "Resources" &&
          <div className={styles.dataList} onMouseLeave={this.props.mouseHandle} onKeyUp={this.menuKeyUp}>
            <section className={`${styles.section} ${styles.resources}`}>
              <ul className={`${styles.ul} ${styles.ulResources}`}>{this.returnActiveList(this.state.data[3].resources.slice(0,2), true, false)}</ul>
              <ul className={`${styles.ul} ${styles.ulResources}`}>{this.returnActiveList(this.state.data[3].resources.slice(2,5), false, true)}</ul>
            </section>
          </div>
        }
      </div>
    );
  }
}
