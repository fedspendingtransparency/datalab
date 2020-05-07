import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';
import cssVars from 'src/styles/variables.scss';

export default class ReadMore extends React.Component {
  /*
    Notes on props:
    maxHeight: height in px for absolute maximum container size; used for CSS transition
    collapsedHeight: total container height when collapsed
    expandText: text to indicate expandible
    collapseText: replacement text when expanded
    animation: expand/collapse CSS transition rule
    buttonStyle: color of toggle link (defaults to legacy blue)
  */

  static propTypes = {
    children: PropTypes.node.isRequired,
    maxHeight: PropTypes.number.isRequired,
    collapsedHeight: PropTypes.number,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    animation: PropTypes.string,
    buttonStyle: PropTypes.object
  };

  static defaultProps = {
    collapsedHeight: '6rem',
    expandText: 'Read more...',
    collapseText: 'Read less...',
    animation: '1s ease',
    buttonStyle: { color: cssVars.legacyBlue }
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
      <div>
        <div style={inlineStyle}>
          {this.props.children}
        </div>
        <button
          className={styles.button}
          style={this.props.buttonStyle}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </div >
    );
  };
}
