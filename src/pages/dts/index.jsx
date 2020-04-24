import React from 'react';
import * as d3 from 'd3v4';

import ControlBar from '../../components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import DTS from '../../components/visualizations/dts/dts';
import Grid from '@material-ui/core/Grid';
import SEO from '../../components/seo';
import Share from '../../components/share/share';
import ToolLayout from '../../components/layouts/tool/tool';

export default class DTSPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dtsData: null
    };
  }

  componentDidMount() {
    d3.csv('/data-lab-data/dts/dts.csv', dataArray => {
      this.setState({ dtsData: dataArray });
    });
  }

  render = () => <>

    <SEO title='U.S. Treasury Data Lab - Visualizing the Daily Treasury Statement'
          description='The U.S. Treasury’s Data Lab presents the Daily Treasury Statement. Learn how much the federal government
            spends each day through this data visualization.'
          keywords={[`federal spending`, `federal programs`, `spending trends`, `spending`, `government programs`, `treasury statement`,
            `US spending`, `government expenditures`, `government spending`, `line graph`]} />

    <ToolLayout
                     title='Visualizing The Daily Treasury Statement'
                     introSentence='How much does the federal government spend each day?'
                     hwctaLink={this.props.location.pathname + '/methodologies'}
                   >
                     <div className='dts-css'>
                       <div className='dts-tt-container'>
                         <div className='dts-tt-date'></div>
                         <div className='dts-tt-hr-separator'></div>
                         <div className='dts-tt-category'></div>
                         <div className='dts-tt-timeframe dts-tt-timeframe-daily dts-tt-timeframe-active'>
                           <span className='dts-tt-timeframe-label'>DAILY</span>
                           <span className='dts-tt-daily-value'></span>
                         </div>
                         <div className='dts-tt-timeframe dts-tt-timeframe-mtd'>
                           <span className='dts-tt-timeframe-label'>MTD</span>
                           <span className='dts-tt-mtd-value'></span>
                         </div>
                         <div className='dts-tt-timeframe dts-tt-timeframe-fytd'>
                           <span className='dts-tt-timeframe-label'>FYTD</span>
                           <span className='dts-tt-fytd-value'></span>
                         </div>
                       </div>

                       <div className='dts-container'>
                         {/* <div className='header-title'>Visualizing The Daily Treasury Statement</div>
                            <div className='header-subtitle'>How much does the federal government spend each day?</div> */}
                         <div className='header-line-break'></div>
                         <Grid container justify='space-between'>
                           <Grid item xs={1} />
                           <Grid item className='header-updated-when' />
                           <Grid item xs={1}>
                             <ControlBar>
                               <Share location={this.props.location}
                                      title='Data Lab – Visualizing the Daily Treasury Statement – U.S. Treasury'
                               />
                             </ControlBar>
                           </Grid>
                         </Grid>


                         <div className='dts-controls-and-svg'>
                           <div className='dts-header'>
                             <div className='daily-spending-container'>
                               <div className='daily-spending-subtext'>Amount Spent On</div>
                               <div className='daily-spending-amount'>$0</div>
                             </div>

                             <div className='period-container'>
                               <div className='period-button-header'>Chart Range</div>
                               <div className='period-button-container'>
                                 <div className='period-button period-button-default' data-range='30d'>30D</div>
                                 <div className='period-button' data-range='90d'>90D</div>
                                 <div className='period-button' data-range='1y'>1Y</div>
                                 <div className='period-button' data-range='5y'>5Y</div>
                                 <div className='period-button' data-range='10y'>10Y</div>
                               </div>
                             </div>

                             <div className="frequency-container">
                               <label htmlFor="frequency-selector" className='frequency-selector-label'>Frequency</label>
                               <select id='frequency-selector' className='custom-select'>
                                 <option value='today'>DAILY</option>
                                 <option value='mtd'>MTD</option>
                                 <option value='fytd'>FYTD</option>
                               </select>
                             </div>

                             {/* <div className='category-container'> */}
                             {/*   <label htmlFor="category-selector" className='category-select-label'>Categories</label> */}
                             {/*   <select className='custom-select custom-select-start' id='category-selector'></select> */}
                             {/* </div> */}

                           </div>
                           <DTS data={this.state.dtsData} />
                         </div>

                         <div className="dts-disclaimer">
                           The Daily Treasury Statement (DTS) is published each day that the Federal Government is open. It provides data on the cash and debt operations of the U.S. Treasury based on reporting of the Treasury account balances by the Federal Reserve banks. For more information about the authoritative source of this dataset, please go to:
                           <a href="https://fsapps.fiscal.treasury.gov/dts/issues" className="dts-hyperlink">https://fsapps.fiscal.treasury.gov/dts/issues</a>
                         </div>

                         <Downloads href={'/data-lab-data/dts/dts.csv'} />

                       </div>
                     </div>
                   </ToolLayout >
                 </>;
};
