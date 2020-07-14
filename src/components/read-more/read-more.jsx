import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';
import globalStyles from 'src/styles/variables.scss';

export default class ReadMore extends React.Component {
  /*
    Notes on props:
    collapsedHeight: total container height when collapsed
    expandText: text to indicate expandible
    collapseText: replacement text when expanded
    animation: expand/collapse CSS transition rule
    buttonStyle: style of toggle link (defaults to simply legacy blue)
  */

  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedHeight: PropTypes.string,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    animation: PropTypes.string,
    buttonStyle: PropTypes.object
  };

  static defaultProps = {
    collapsedHeight: '5.5rem',
    expandText: 'Read more...',
    collapseText: 'Read less...',
    animation: '1s ease',
    buttonStyle: { color: globalStyles.legacyBlue }
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
      'overflowY': 'hidden',
      'transition': 'height ' + this.props.animation
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
      </div>
    );
  };
}
