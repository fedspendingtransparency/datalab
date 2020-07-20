import './viz-detail.scss'; // because this overrides MUI class names and they are mixed-case with hyphens, CSS module won't work here
import React from 'react';
import PropTypes from 'prop-types';

import { Paper, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import formatNumber from '../../utils/number-formatter/number-formatter';

export default class VizDetailPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      details: props.details
    };
    this.expandDetails = this.expandDetails.bind(this);
  }

  expandDetails() {
    this.setState({ expanded: true });
  }

  closeDetails() {
    this.setState({ expanded: false });
  }

  updateDetails(data) {
    this.setState({
      expanded: true,
      details: data
    });
  }

  renderDetails() {
    let tables;
    if (this.state.details.tables) {
      tables = this.renderTables(this.state.details.tables);
    }

    const header = this.state.details.header;
    if (header) {
      return <>
        <Grid container justify='space-between' alignItems='baseline'>
          <Grid item xs={12} className='label'>{header.title}</Grid>
          <Grid item xs={12} className='itemName'>{header.itemName}</Grid>
          <Grid item xs={12} className='label'>{header.label}</Grid>
          <Grid item xs={12} className='itemName'>{header.subItemName}</Grid>
          <Grid item xs={6} className='col1title'>{header.totalLabel}</Grid>
          <Grid item xs={6} className='col2title'>{formatNumber('dollars', header.totalValue)}</Grid>
        </Grid>
        {tables}
      </>
    }
  }

  renderTables(data) {
    let tableFrag = [];
    data.forEach((table, i) => {
      let rowsFrag = [];
      if (table.rows) {
        Object.keys(table.rows).forEach((rowLabel, i) => {
          rowsFrag.push(<tr key={'viz-detail-row-' + i}>
            <td>{rowLabel}</td>
            <td>{formatNumber('dollars', table.rows[rowLabel])}</td>
          </tr>);
        });
      }
      tableFrag.push(<div className='viz-detail-table-section' key={'viz-detail-table-' + i}><table><thead><tr>
        <th>{table.col1Title}</th>
        <th>{table.col2Title}</th>
      </tr></thead>
        <tbody>
          {rowsFrag}
        </tbody>
      </table></div>);
    });
    return tableFrag;
  }

  render = () => (
    <div className={'viz-details-container' + (this.state.expanded ? ' expanded' : '')}>
      <Paper className='details'>
        <IconButton className='closeButton' onClick={() => this.closeDetails()}>
          <HighlightOffIcon />
        </IconButton>
        {this.renderDetails()}
      </Paper>
    </div>
  );
};

/*
  Notes on props:
  showDetails is a function on the parent viz triggering opening this panel
  details is all the info for the details to display, with main properties "header" and array of "table"s
  e.g.
{
  'header': {
    'title': 'Institution',
    'itemName': 'Central College',
    'label': 'Public, 2-year',
    'subItemName': null,
    'totalLabel': 'Total $ Received',
    'totalValue': 1100000
  },
  'tables': [
    {
      'col1Title': 'Funding Investment Type',
      'col2Title': null,
      'rows': {
        'Contracts': 35000,
        'Grants': 590200,
        '   Grants (Research)': 0
      }
    },
    {
      'col1Title': 'Institution (Top 5)',
      'col2Title': 'Toatal Investment',
      'rows': {
        'UNLV': 35000,
        'Baker College': 590200,
        'Massachusetts General Hospital Dietetic Intership': 6954359235967253
      }
    }
  ]
}
*/

VizDetailPanel.propTypes = {
  showDetails: PropTypes.func,
  details: PropTypes.object.isRequired
};
