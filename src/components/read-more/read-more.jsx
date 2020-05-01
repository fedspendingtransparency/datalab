import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';

export default class ReadMore extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    toggleColor: PropTypes.string,
    collapsedHeight: PropTypes.string,
    animation: PropTypes.string
  }

  static defaultProps = {
    expandText: 'Read more...',
    collapseText: 'Read less...',
    collapsedHeight: '6rem',
    animation: '1s ease'
  };

  constructor(props) {
    super(props);

    this.state = {
      clientHeight: 'auto',
      isOpen: false
    };
  }

  toggleReadMore = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render = () => {
    const inlineStyle = {
      'height': this.state.isOpen ? this.state.clientHeight : this.props.collapsedHeight,
      'overflow-y': 'hidden',
      'transition': 'height ' + this.props.animation
    };
    // const className = this.props.className;
    // const baseClass = className + ' ' + className + '--' + (this.state.isOpen ? 'open' : 'closed');
    return (
      <div>
        <div style={inlineStyle}>
        {/* <div className={className + '__wrapper'}>
        <div className={baseClass} style={inlineStyle}> */}
          {this.props.children}
        </div>
        <button
          className={styles.button}
          style={{ color: this.props.toggleColor }}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </div>
    );
  };
}
