import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';
import cssVars from 'src/styles/variables.scss';

export default class ReadMore extends React.Component {
  /*
    Notes on props:
    maxHeight: height in px for absolute maximum container size; used for CSS transition
    toggleColor: color of toggle link (defaults to legacy blue)
    expandText: text to indicate expandible
    collapseText: replacement text when expanded
    collapsedHeight: total container height when collapsed
    animation: expand/collapse CSS transition rule
  */

  static propTypes = {
    children: PropTypes.node.isRequired,
    maxHeight: PropTypes.number.isRequired,
    collapsedHeight: PropTypes.number,
    toggleColor: PropTypes.string,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    animation: PropTypes.string
  };

  static defaultProps = {
    toggleColor: cssVars.legacyBlue,
    expandText: 'Read more...',
    collapseText: 'Read less...',
    collapsedHeight: '6rem',
    animation: '1s ease'
  };

  constructor(props) {
    super(props);

    this.state = {
      clientHeight: `${this.props.maxHeight}px`,
      isOpen: false
    };
  }

  toggleReadMore = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render = () => {
    const inlineStyle = {
      'maxHeight': this.state.isOpen ? this.state.clientHeight : this.props.collapsedHeight,
      'overflowY': 'hidden',
      'transition': 'max-height ' + this.props.animation
    };
    return (
      <>
        <div style={inlineStyle}>
          {this.props.children}
        </div>
        <button
          className={styles.button}
          style={{ color: this.props.toggleColor }}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </>
    );
  };
}
