import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';
import cssVars from 'src/styles/variables.scss';

export default class ReadMore extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    pageColor: PropTypes.string,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    toggleColor: PropTypes.string,
    collapsedHeight: PropTypes.string,
    animation: PropTypes.string
  }

  static defaultProps = {
    pageColor: cssVars.legacyBlue,
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
    return (
      <div>
        <div style={inlineStyle}>
          {this.props.children}
        </div>
        <button
          className={styles.button}
          style={{ color: this.props.pageColor }}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </div>
    );
  };
}
