import React from 'react';
import PropTypes from 'prop-types';

import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { InputAdornment, OutlinedInput, IconButton } from '@material-ui/core';
import { Clear as ClearIcon, Search as SearchIcon } from '@material-ui/icons';

import 'react-virtualized/styles.css';
import styles from './search.module.scss';

export default class Search extends React.Component {
  /*
    Notes on props:
    searchList is expected to be an array of {id, display}
    id values are arbitrary, but must be unique within the list to indicate which is selected (expected but not enforced by SearchPanel)
    display is a string or fragment of what exactly to display for that option
    filterText is a string "equivalent" of "display" if "display" is fragment (since frags don't have a .search(); expected but not enforced by SearchPanel )
    e.g. [
      {
        id: 1,
        display: 'Department of Energy'
      }, {
        id: 37,
        display: <>NATIONAL TECHNOLOGY & ENGINEERING SOLUTIONS OF SANDIA LLC</>
        filterText: 'NATIONAL TECHNOLOGY & ENGINEERING SOLUTIONS OF SANDIA LLC'
      }, {
        id: 'jadsfa',
        display: 'Department of Defense<div>line 2</div>'
        filterText: 'Department of Defense--line 2'
       }, {
        id: -12,
        display: 'Department of the Army'
      }
    ]
  
    height is the size of the rendered list in px (container CSS may also need adjustment; width is controlled by container)
    initItem is the ID of an initially-selected list item
    listDescription is placeholder text for the input
    if showIcon is false or missing, don't show the input decorator
    alwaysShowList is boolean to never hide/collapse the list (eg C&U sidebar)
    onSelect is parent callback when an item is selected, passes back id value only
  */
  static propTypes = {
    'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
    'height': PropTypes.number,
    'initItem': PropTypes.string,
    'listDescription': PropTypes.string.isRequired,
    'listId': PropTypes.string.isRequired,
    'showIcon': PropTypes.bool,
    'alwaysShowList': PropTypes.bool,
    'onSelect': PropTypes.func
  };

  static defaultProps = {
    'height': 400
  };

  constructor(props) {
    super(props);

    // set initItem to display value of props.initItem's id, or blank
    let initItem = '';
    props.initItem && (initItem = this.props.searchList.find(e => e.id === props.initItem).display);

    this.state = {
      currentValue: initItem,
      expanded: this.props.alwaysShowList,
      icon: initItem ? 'clear' : 'search',
      filteredList: []
    }

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: this.props.height
    });
  }

  componentDidMount() {
    this.setState({ filteredList: this.props.searchList })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchList !== this.props.searchList) {
      this.setState({
        currentValue: '',
        icon: 'search',
        filteredList: this.props.searchList
      });
    }

    // recalc row heights in case filtered list changes (filter or parent update)
    this.cache.clearAll();
    this.listRef.recomputeRowHeights();
  }

  onFocus = () => {
    this.setState({ expanded: true });
  }

  clickIcon = () => {
    if (this.state.icon === 'search') {
      if (!this.props.alwaysShowList) {
        this.setState(prevState => ({ expanded: !prevState.expanded }));
      }
    } else {
      this.setState({
        currentValue: '',
        icon: 'search',
        filteredList: this.props.searchList
      });
    }
  }

  setListRef = ref => {
    this.listRef = ref;
  };

  filterSearch(event) {
    const currentValue = event.target.value;
    const filter = new RegExp(currentValue, 'i');
    const filteredList = this.props.searchList.filter(n =>
      n.filterText ?
        n.filterText.search(filter) !== -1 :
        n.display.search(filter) !== -1
    );

    this.setState({
      currentValue: currentValue,
      expanded: true,
      icon: currentValue ? 'clear' : 'search',
      filteredList
    });
  }

  selectItem(i) {
    this.setState({
      expanded: this.props.alwaysShowList,
      icon: 'clear'
    });
    if (this.props.onSelect) {
      this.props.onSelect(i.id);
    }
  }

  handleKeyPress = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.selectItem(this.state.filteredList[index])
    } else if (e.key === 'ArrowDown' & index !== this.state.filteredList.length - 1) {
      e.preventDefault();
      const nextElement = document.getElementById(`${this.props.listId}-list-row-${index + 1}`)
      nextElement.focus();
    } else if (e.key === 'ArrowUp' && index !== 0) {
      e.preventDefault();
      const prevElement = document.getElementById(`${this.props.listId}-list-row-${index - 1}`)
      prevElement.focus();
    } else if (e.key === 'Tab') {
      const elementId = e.shiftKey ? `${this.props.listId}-search-bar` : `${this.props.listId}-search-button`;
      if (this.props.separateSearchIcon) {
        e.preventDefault();
        document.getElementById(elementId).focus();
      } else {
        this.setState({
          expanded: false,
          icon: 'search'
        })
      }
    }
  }

  filterBoxIcon = () =>
    <InputAdornment position='end'>
      <IconButton
        aria-label={this.state.icon}
        onClick={this.clickIcon}
      >
        {this.state.icon === 'search' ? <SearchIcon /> : <ClearIcon />}
      </IconButton>
    </InputAdornment>
    ;

  row = ({ key, index, style, parent }) => (
    <CellMeasurer
      key={`search-list${key}`}
      cache={this.cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div
        onClick={() => this.selectItem(this.state.filteredList[index])}
        onKeyDown={(e) => this.handleKeyPress(e, index)}
        style={style}
        className={styles.row}
        tabIndex={0}
        id={`${this.props.listId}-list-row-${index}`}
      >
        {this.state.filteredList[index].display}
      </div>
    </CellMeasurer>
  );

  render = () => <div>
    <OutlinedInput
      value={this.state.currentValue}
      onChange={event => this.filterSearch(event)}
      onFocus={this.onFocus}
      placeholder={this.props.listDescription}
      inputProps={{ title: 'Search ' + this.props.listDescription }}
      variant='outlined'
      fullWidth
      className={styles.filterInput}
      endAdornment={this.props.showIcon && this.filterBoxIcon()}
      id={`${this.props.listId}-search-bar`}
    />
    <div style={{ height: this.state.expanded ? this.props.height : '0' }}>
      <AutoSizer>
        {({ height, width }) =>
          <List
            height={height}
            width={width}
            rowRenderer={this.row}
            rowCount={this.state.filteredList.length}
            deferredMeasurementCache={this.cache}
            rowHeight={this.cache.rowHeight}
            className={styles.searchlist}
            ref={this.setListRef}
            tabIndex={-1}
          >
            {this.row}
          </List>
        }
      </AutoSizer>
    </div>
  </div>;
}
