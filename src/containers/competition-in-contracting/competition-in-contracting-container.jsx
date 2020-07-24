import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Barchart from 'src/components/visualizations/horizontal-barchart/barchart';
import competitionStyles from 'src/pages/competition-in-contracting/competition-in-contracting.module.scss';
import Downloads from 'src/components/section-elements/downloads/downloads';
import * as d3 from 'd3v3';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import { Grid, Hidden } from '@material-ui/core';

export class CompetitionInContractingContainer extends Component {
  constructor(props) {
    super(props);

    this.rawData = props.data.allCicDataJson.nodes;

    this.state = {
      data: this.rawData,
      scale: 'quantity',
      unit: 'dollars'
    }

    this.resetFn = this.resetFn.bind(this);
    this.setScaleFn = this.setScaleFn.bind(this);
    this.setUnitFn = this.setUnitFn.bind(this);
    this.drawSummaryTableModule = this.drawSummaryTableModule.bind(this);
    this.handleYAxisCheckboxChange = this.handleYAxisCheckboxChange.bind(this);
  }

  // this is only needed because IE11's SVG default size is bizarre, otherwise setting the <svg height='100%'> works fine
  resizeChartDiv = () => {
    const factor = document.getElementById('barchartSvg').clientWidth / 1090;
    document.getElementById('barchartSvg').setAttribute('height', 700 * factor);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeChartDiv);

    // force vertical resize on initial render
    setTimeout(this.resizeChartDiv, 500); // doesn't work without the delay, I guess D3 is still drawing?
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeChartDiv);
  }

  setScaleFn(e) {
    this.setState({ scale: e.currentTarget.value });
  }

  setUnitFn(e) {
    this.setState({ unit: e.currentTarget.value });
  }

  resetFn() {
    this.setState({ scale: 'quantity' });
    this.setState({ unit: 'dollars' });
    this.setState({ data: JSON.parse(JSON.stringify(this.rawData)) });
  }

  drawSummaryTableModule() {
    const summaryData = this.state.data.reduce(
      (a, c) => {
        if (c.displayed) {
          a.competedDollars += c.competedDollars;
          a.notCompetedDollars += c.notCompetedDollars;
          a.competedActions += c.competedActions;
          a.notCompetedActions += c.notCompetedActions;
        }
        return a;
      },
      {
        competedDollars: 0,
        notCompetedDollars: 0,
        competedActions: 0,
        notCompetedActions: 0
      }
    );

    d3.select('#' + competitionStyles.competedDollars)
      .text(numberFormatter('dollars text', summaryData.competedDollars));

    d3.select('#' + competitionStyles.competedActions)
      .text(numberFormatter('actions', summaryData.competedActions));

    d3.select('#' + competitionStyles.notCompetedDollars)
      .text(numberFormatter('dollars text', summaryData.notCompetedDollars));

    d3.select('#' + competitionStyles.notCompetedActions)
      .text(numberFormatter('actions', summaryData.notCompetedActions));
  }

  handleYAxisCheckboxChange(id, checked) {
    const adjustedData = this.state.data.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          displayed: checked
        };
      }
      return c;
    });
    this.setState({ data: adjustedData });
  }

  render() {
    return (
      <div className={competitionStyles.vizContainer}>
        <Grid container className={competitionStyles.container}>

          <Grid alignItems='stretch' container id={competitionStyles.summary}>
            <div id={competitionStyles.tooltip}></div>

            <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
              <Grid container alignItems='flex-end'>
                <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>$ COMPETED</Grid>
                <Grid item xs={12} id={competitionStyles.competedDollars}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={3} lg={3}
              className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparator}`}>
              <Grid container alignItems='flex-end'>
                <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>ACTIONS COMPETED</Grid>
                <Grid item xs={12} id={competitionStyles.competedActions}></Grid>
              </Grid>
            </Grid>
            <Hidden mdDown>
              <Grid item lg={1}
                className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparatorLg}`}></Grid>
              <Grid item lg={1} className={competitionStyles.summaryItem}></Grid>
            </Hidden>
            <Grid item xs={6} md={3} lg={3} className={competitionStyles.summaryItem}>
              <Grid container alignItems='flex-end'>
                <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>$ NOT COMPETED</Grid>
                <Grid item xs={12} id={competitionStyles.notCompetedDollars}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
              <Grid container alignItems='flex-end'>
                <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>ACTIONS NOT COMPETED</Grid>
                <Grid item xs={12} id={competitionStyles.notCompetedActions}></Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={competitionStyles.legendDiv}>
            <div className={competitionStyles.legend} id={competitionStyles.notCompeted}>
              <svg height='15' width='15'>
                <circle cx='7.5' cy='7.5' r='7.5' />
              </svg>
              <label htmlFor={competitionStyles.notCompeted} style={{ fontSize: '0.75rem', verticalAlign: 'bottom', padding: '0px 0.5rem 0 .1rem' }}> Not Competed </label>
            </div>
            <div className={competitionStyles.legend} id={competitionStyles.competed}>
              <svg height='15' width='15'>
                <circle cx='7.5' cy='7.5' r='7.5' />
              </svg>
              <label htmlFor={competitionStyles.competed} style={{ fontSize: '0.75rem', verticalAlign: 'bottom', padding: '0px 0 0 .1rem' }}>Competed</label>
            </div>
            <div className={competitionStyles.barChartToolbar}>
              <div className={competitionStyles.selectWrapper1}>
                <input type='radio'
                  id='contactChoice1'
                  name='xAxisScale'
                  value='quantity'
                  onChange={this.setScaleFn}
                  checked={this.state.scale === 'quantity'}
                />
                <label htmlFor='contactChoice1' style={{ fontSize: '0.75rem', padding: '0 .5rem 0 .1rem' }}>Quantity</label>

                <input type='radio'
                  id='contactChoice2'
                  name='xAxisScale'
                  value='percent'
                  onChange={this.setScaleFn}
                  checked={this.state.scale === 'percent'}
                />
                <label htmlFor='contactChoice2' style={{ fontSize: '0.75rem', padding: '0 .5rem 0 .1rem' }}>Percent</label>
              </div>
              <div className={competitionStyles.selectWrapper2}>
                <input type='radio'
                  id='contactChoice3'
                  name='xAxisUnit'
                  value='dollars'
                  onChange={this.setUnitFn}
                  checked={this.state.unit === 'dollars'}
                />
                <label htmlFor='contactChoice3' style={{ fontSize: '0.75rem', padding: '0 .5rem 0 .1rem' }}>Dollars</label>

                <input type='radio'
                  id='contactChoice4'
                  name='xAxisUnit'
                  value='actions'
                  onChange={this.setUnitFn}
                  checked={this.state.unit === 'actions'}
                />
                <label htmlFor='contactChoice4' style={{ fontSize: '0.75rem', padding: '0 .5rem 0 .1rem' }}>Actions</label>
              </div>
            </div>
          </div>

          <div id='bar-chart-div' className={competitionStyles.barChartDiv}>
            <Barchart data={this.state.data}
              unit={this.state.unit}
              scale={this.state.scale}
              clickEvent={this.handleYAxisCheckboxChange}
              _onloadFunctions={this.drawSummaryTableModule}
              _svgClass={competitionStyles.svg}>
            </Barchart>
            <Downloads
              data={this.state.data}
              isJSON={true} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
       query {
        allCicDataJson {
          nodes {
            name
            cfo
            competedActions
            competedDollars
            notCompetedActions
            notCompetedDollars
            id
            displayed
            percentActionsCompeted
            percentDollarsCompeted
            totalActions
            totalDollars
          }
        }
      }
    `}
    render={data => <CompetitionInContractingContainer data={data} {...props} ref={props.chartRef} />}
  />
);
