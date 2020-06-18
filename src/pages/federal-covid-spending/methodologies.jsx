import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';
import styles from '../../components/hwcta/hwcta.module.scss';

const C19HWTCA = ({ location }) => {
  const title = 'COVID-19';

  const dataSources = [{
    name: <>Estimated Value of Supplemental Appropriations:</>,
    sources: (
      <ul>
        <li>
          Appropriation warrants for H.R. 6074, H.R. 6201, H.R. 748
        </li>
        <li>
          Full text of each bill from the <a href='https://www.congress.gov/' target='_blank' rel='noopener noreferrer'>Library of Congress</a>
        </li>
        <li>
          Estimated total budget authority of each bill from the <a href='https://www.cbo.gov/' target='_blank' rel='noopener noreferrer'>Congressional Budget Office (CBO)</a>
        </li>
      </ul>
    )
  }, {
    name: <>Federal Spending Data:</>,
    sources: (
      <ul>
        <li>
          Data from the Governmentwide Treasury Account Symbol (GTAS) Adjusted Trial Balance System including data typically included in the SF-133 Report on Budget Execution and Budgetary Resources and Disaster Emergency Fund Codes for each line item
        </li>
        <li>
          Account information for all active Treasury Account Symbol accounts provided by the Central Accounting Reporting System (CARS)
        </li>
      </ul>
    )
  }
                      ];

  const methodologies = [{
    name: <>Legislation values:</>,
    sources: (
      <ul>
        <li>
          The value of the four supplemental emergency bills passed by Congress is approximately $2.4 trillion. This value reflects the total value of appropriation warrants made to agency's TAS accounts for each of the four laws passed.
        </li>
        <li>
          Appropriation warrants reflect Congressional action to fund programs and provide each agency the amount of money they are authorized to withdraw from the General Fund of the U.S. Government and period of availability of those funds.
          The total estimated value of the four laws only includes current appropriation warrants issued which could change. The value of each law could change because there are parts of the laws that do not state explicit program costs or limits
          on the total funding that can be used to meet the law’s requirements. This could also result in additional appropriations being issued to fulfill the law’s intent if the original appropriation is exhausted.
        </li>
        <li>
          H.R. 6074 Coronavirus Preparedness and Response Supplemental Appropriations Act totaled an estimated $7.8 billion.
        </li>
        <li>
          H.R. 6201 Families First Coronavirus Response Act totaled an estimated $3.4 billion.
        </li>
        <li>
          H.R. 748 CARES Act totaled an estimated $1.95 trillion of funding.
        </li>
        <li>
          H.R. 266 Paycheck Protection Program and Health Care Enhancement Act totaled an estimated $483 billion.
        </li>
      </ul>
    )
  }, {
    name: <>Calculating Total Spending:</>,
    sources: (
      <ul>
        <li>
          Data from the Governmentwide Treasury Account Symbol (GTAS) Adjusted Trial Balance System including data typically included in the SF-133 Report on Budget Execution and Budgetary Resources,
          which provides granular budgetary data for each Treasury Account Symbol (TAS) account, was used to identify and track spending of funds appropriated in the emergency bills passed.
        </li>
        <li>
          After appropriation warrants are issued, agencies also report the value of funds appropriated by TAS in GTAS. In this analysis, we use the Total Budgetary Resources reported in GTAS which include total appropriations, transfers, and reimbursable funds available for each account. Total Budgetary Resources do not align exactly with the total value of appropriations warrants for each TAS due to inclusion of these additional funds. These funds are included to provide a more complete picture of the total budget for each account and how those funds are obligated and outlayed. Discrepancies in the totals across these two data sources can also be caused by time lags in reporting changes in appropriations in GTAS, or in recording and reconciling transfers among TAS, but are expected to be reconciled in the subsequent reporting period.
        </li>
        <li>
	  Emergency spending is tracked using the Disaster Emergency Fund Code (DEFC) reported in the GTAS data. All agencies are required per Office of Management and Budget <a href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf">Memo M-20-21: Implementation Guidance for Supplemental Funding Provided in Response to the Coronavirus Disease 2019 (COVID-19</a> to track spending related to each of the emergency bills passed using the previously established DEFC attribute, with newly provided values that link each transaction to the specific funding legislation.<sup>2</sup> Data for this analysis, prepared in May 2020, includes data reported through the close of April 2020. GTAS data is used to track spending using the emergency spending DEFC, which is currently not available in the data provided by agencies to <a href="https://www.usaspending.gov/#/">USAspending.gov</a>. USAspending.gov will begin to use DEFC to track agency spending data submitted starting in the July 2020 reporting period for agency data reported from April through June 2020.
        </li>
        <li>
	  GTAS data, using the reported DEFC and aggregating by TAS account, was used to calculate Total Budgetary Resources, new obligations and upwards adjustments, unobligated balance (end-of-year total), and gross outlays<sup>3</sup> of emergency spending executed as of the close of the reporting period.<sup>4</sup>
        </li>
        <li>
          Agency totals were aggregated using TAS account data at the Allocation Transfer Agency (ATA) identifier. In cases where the ATA is null, the Agency Identifier (AID) is used, with a few exceptions. Agencies that use a shared AID were aggregated using the Financial Reporting Entity Code (FREC), and certain armed forces agencies were classified as Department of Defense following the logic used to classify agencies on USAspending.gov.<sup>5</sup>
        </li>
      </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                             )
    }];

                         const notes = [{
                           content: (
                             <>
                               <p>
                                 <sup>1</sup> Coronavirus Preparedness and Response Supplemental Appropriations Act (H.R. 6074) appropriated an estimated $7.8 billion; Families First Coronavirus Response Act (H.R. 6201) appropriated an estimated $3.4 billion; CARES Act (H.R. 748) appropriated an estimated $1.95 trillion of funding; and the Paycheck Protection Program and Health Care Enhancement Act (H.R. 266) appropriated an estimated $483 billion. 
                               </p>
                               <p>
                                 <sup>2</sup> OMB Guidance on reporting requirements and DEFC values provided for the four bills are provided in OMB M20-21: <a href='https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf' target='_blank' rel='noopener noreferrer'>https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf</a>
                               </p>
                               <p>
                                 <sup>3</sup> Values were calculating according to the USSGL Supplement of the Treasury Financial Manual - Section V: Crosswalks to Standard External Reports for FY 2020 GTAS Reporting, SF 133: Report on Budget Execution and Budgetary Resources & Schedule P Budget Program and Financing Schedule.
                                 <a href='https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_2/sec5/sec5_sf133_schp_2020.xlsx' target='_blank' rel='noopener noreferrer'> https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_2/sec5/sec5_sf133_schp_2020.xlsx</a>
                               </p>
                               <p>
                                 <sup>4</sup> GTAS data is collected monthly, each month’s agencies report data for all transactions occurring through the end of the prior month. Data for this analysis published May 28, 2020 includes data reported through the close of April 2020.
                               </p>
                               <p>
                                 <sup>5</sup> Detailed instructions on how agencies should be classified is provided here: <a href='https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker' target='_blank' rel='noopener noreferrer'>https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a>.
                                 The list of shared agencies identified by FREC can be found here: <a href='https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker' target='_blank' rel='noopener noreferrer'>https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a>
                               </p>
                             </>
                           )
                         }];

                         return (
                           <HWCTA
                             location={location}
                             title={title}
                             dataSources={dataSources}
                             methodologies={methodologies}
                             notes={notes} />
                         );
                        };

  export default C19HWTCA;
