import React from 'react';
import PropTypes from 'prop-types';
import { Column, Table, SortDirection } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Paginator from './paginator';
import './data-table.scss';
import { Grid } from "@material-ui/core";
import * as _ from "lodash";
import numberFormatter from "src/utils/number-formatter/number-formatter";

export default class DataTable extends React.Component {
  static propTypes = {
    display: PropTypes.bool,
    columnTitles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.array).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      list: props.data,
      page: 1,
      perPage: 10,
      scrollToIndex: undefined,
      sortBy: 'index'
    };

    this.handleRowsScroll = this.handleRowsScroll.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.sort = this.sort.bind(this);
    this.updateSort = this.updateSort.bind(this);
    this.updateTableData = this.updateTableData.bind(this);

    this.defaultWidth = 1000;
    if (typeof document !== 'undefined') {
      let chart = document.getElementById('chart-area');
      if (chart && chart.clientWidth) { // i.e. if exists and clientWidth > 0
        this.defaultWidth = 1.25 * chart.clientWidth;
      }
    }
  }

  handleRowsScroll({ stopIndex }) {
    this.setState(prevState => {
      const page = Math.ceil(stopIndex / prevState.perPage)
      return { page, scrollToIndex: undefined }
    })
  }

  handlePageChange(page) {
    this.setState(prevState => {
      const scrollToIndex = (page - 1) * prevState.perPage
      return { page, scrollToIndex }
    })
  }

  updateTableData(list) {
    this.setState({ list: list, scrollToIndex: 0, page: 1 });
  }

  /**
   * Sort function applied on clicking the table headers. This will set the state of the sortBy and sortDirection.
   * @param sortBy - The column that is being sorted.
   * @param sortDirection - The direction to sort the data.
   */
  updateSort({ sortBy, sortDirection }) {
    const { sortBy: prevSortBy, sortDirection: prevSortDirection } = this.state;

    // If list was sorted DESC by this column.
    // Rather than switch to ASC, return to "natural" order.
    if (prevSortBy === sortBy && prevSortDirection === SortDirection.DESC) {
      sortBy = null;
      sortDirection = null;
    }

    this.setState({ sortBy, sortDirection });
  }

  /**
   * Sorts the list of data seen from this.state.list. This does not set the state of any variables as this is called at the point of entry from the render function.
   * @param sortBy - The column that is being sorted
   * @param sortDirection - The direction to sort the data.
   * @returns sortedList - The list of sorted data.
   */
  sort({ sortBy, sortDirection }) {
    let { list } = this.state;
    let sortedList = list;

    if (sortBy) {
      sortedList = _.sortBy(list, item => item[sortBy]);
      if (sortDirection === SortDirection.DESC) {
        sortedList = sortedList.reverse();
      }
    }
    return sortedList;
  }

  render() {
    if (!this.props.display) {
      return null;
    } else {
      const { page, perPage, scrollToIndex, list, sortBy, sortDirection } = this.state;

      let currentList = list;
      let numberOfRowsVisible = Math.min(perPage, list.length);

      if (list && list.length) {
        currentList = this.sort({ sortBy, sortDirection });
      }

      if (scrollToIndex) {
        numberOfRowsVisible = list.length - scrollToIndex;
        if (numberOfRowsVisible <= 0 || numberOfRowsVisible > perPage) {
          numberOfRowsVisible = perPage;
        }
      }

      const rowHeight = 64
      const height = rowHeight * (numberOfRowsVisible + 1);
      const rowCount = currentList.length;

      return (
        <Grid container justify='center'>
          <Grid item>
            <Table
              width={this.defaultWidth}
              height={height}
              headerHeight={rowHeight}
              rowHeight={rowHeight}
              rowCount={rowCount}
              rowGetter={({ index }) => currentList[index]}
              scrollToIndex={scrollToIndex}
              scrollToAlignment='start'
              sort={this.updateSort}
              sortBy={sortBy}
              sortDirection={sortDirection}
            >
              {this.props.columnTitles.map((item, key) => {
                const columnWidth = item.width || this.defaultWidth / this.props.columnTitles.length;
                let dataType = item.type || 'dollars';
                dataType = dataType.toString().toLowerCase();
                return (
                  <Column
                    key={key}
                    label={item.title}
                    dataKey={key.toString()}
                    width={columnWidth}
                    cellRenderer={({ cellData }) => typeof cellData === 'number' ? numberFormatter(dataType, cellData) : cellData}
                  />
                )
              })}
            </Table>
          </Grid>
          <Grid item xs={12}>
            <Paginator
              rowCount={this.state.list.length}
              rowsPerPage={perPage}
              currentPage={page}
              onPageChange={this.handlePageChange}
            />
          </Grid>
        </Grid>
      );
    }
  }
}
