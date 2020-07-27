import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';
import { legacyBlue } from 'src/styles/variables.scss';
import pageColorMap from 'src/utils/page-color';

export default class ReadMore extends React.Component {
  /*
    Notes on props:
    collapsedHeight: total container height when collapsed
    expandText: text to indicate expandible
    collapseText: replacement text when expanded
    animation: expand/collapse CSS transition rule
  */

  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedHeight: PropTypes.string,
    expandText: PropTypes.string,
    collapseText: PropTypes.string,
    animation: PropTypes.string,
  };

  static defaultProps = {
    collapsedHeight: '5.5rem',
    expandText: 'Read more...',
    collapseText: 'Read less...',
    animation: '1s ease',
  };

  constructor(props) {
    super(props);

    this.state = {
      clientHeight: 'auto',
      isOpen: false,
      sectionId: this.props.sectionId,
      color: legacyBlue
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ color: pageColorMap[window.location.pathname] });
    }
  }

  toggleReadMore = () => {
    const { scrollX, scrollY } = window
    if(this.state.isOpen) {
      location = `${window.location.pathname}#section-${this.state.sectionId}`;
    }
    this.setState(prevState => ({ isOpen: !prevState.isOpen }), () => {
      window.scrollTo(scrollX, scrollY)
    });
  }

  render = () => {
    const inlineStyle = {
      'height': this.state.isOpen ? this.state.clientHeight : this.props.collapsedHeight,
      'overflowY': 'hidden',
      'transition': 'height ' + this.props.animation
    };
    const { color } = this.state;

    return (
      <div>
        <div style={inlineStyle}>
          {this.props.children}
        </div>
        <button
          className={styles.button}
          style={{ color }}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </div>
    );
  };
}
