import React from 'react';
import PropTypes from 'prop-types';
import accordionStyles from './accordion.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
  }

  /* props notes
    title: shows in the top box, collapsed or open
    color: theme color for border, collapsed background, and highlighted text within
  */
  static propTypes = {
    'title': PropTypes.string.isRequired,
    'color': PropTypes.string
  };

  toggle(e) {
    e.stopPropagation();

    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    return (
      <div className={this.props.containerClass ? this.props.containerClass : accordionStyles.container}>
        <div className="row">
          <div className="col-xs-12">
            <section className={this.state.open ? `${accordionStyles.accordion} ${accordionStyles.open} accordion--open` : `${accordionStyles.accordion}`} >
              <h1
                onClick={this.toggle} className={accordionStyles.heading}
                style={
                  ${this.props.altStyleAccordion ? this.props.altStyleAccordion : null
                `}
              >
                {this.props.title}
                <button onClick={this.toggle} className={accordionStyles.toggle}>
                  <FontAwesomeIcon icon={faPlus} className={accordionStyles.plus} style={this.props.altStyleIcon} />
                  <FontAwesomeIcon icon={faMinus} className={accordionStyles.minus} style={this.props.altStyleIcon} />
                  <span className="sr-only">toggle contents</span>
                </button>
              </h1>
              <div className={accordionStyles.content}>
                {this.props.children}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
