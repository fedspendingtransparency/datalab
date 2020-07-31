import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';
import styles from '../../components/hwcta/hwcta.module.scss';

const C19HWTCA = ({ location }) => {
  const title = 'COVID-19';

  const dataSources = [{
    name: <>Value of supplemental appropriations:</>,
    sources: (
      <ul>
        <li>
          Appropriation warrants for H.R. 6074, H.R. 6201, H.R. 748, and H.R. 266
        </li>
        <li>
          Full text of each law from the <a href='https://www.congress.gov/' target='_blank' rel='noopener noreferrer'>Library of Congress</a>
        </li>
        <li>
          Estimated tax revenue impact for each law from the  <a href='https://www.cbo.gov/' target='_blank' rel='noopener noreferrer'>Congressional Budget Office (CBO)</a>
        </li>
        <li>
          Agency program statements, CBO analysis for each law, the Federal Credit Supplements to the President’s Fiscal Year (FY) 2021 budget2 and funding notices published to the federal register were used to estimate the potential credit, direct loans and loan guarantees
        </li>
      </ul>
    )
  }, {
    name: <>Federal spending data:</>,
    sources: (
      <ul>
        <li>
          Data extracted from the Governmentwide Treasury Account Symbol Adjusted Trial Balance System (GTAS), which includes information typically reported in the SF-133 Report on Budget Execution and Budgetary Resources and Disaster Emergency Fund Codes for each line item
        </li>
        <li>
          Account information for all active Treasury Account Symbol (TAS) accounts and appropriation warrants to date provided by the Central Accounting Reporting System (CARS)
        </li>
      </ul>
    )
  }, {
    name: <>Law Summaries</>,
    sources: (
      <ul>
        <li>
          Summaries are based off of CBO reporting and a qualitative analysis of funding by federal account name.<sup>3</sup> All values were approximated. The summaries include funding for agencies, but do not include additional provisions in the legislation that impact financial relief, such as taxes or mandates that change program requirements or extensions for current funding
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
          <strong>Agency funding to-date:</strong> The value of the four supplemental laws passed by Congress is approximately $2.58 trillion. This value reflects the total value of appropriation warrants made to agencies’ TAS accounts to date for each of the four laws passed
        </li>
        <li>
          Appropriation warrants reflect Congressional action to fund programs and provide each agency the amount of money they are authorized to withdraw from the General Fund of the U.S. Government and period of availability of those funds. The total estimated value of the four laws only includes current appropriation warrants issued, which could change. The value of each law could change because there are parts of the laws that do not state explicit program costs or limits on the total funding that can be used to meet the law’s requirements. This could also result in additional appropriations being issued to fulfill the law’s intent if the original appropriation is exhausted
        </li>
        <li>
	  H.R. 6074 Coronavirus Preparedness and Response Supplemental Appropriations Act (CPRSAA) totaled an estimated $7 billion
        </li>
        <li>
          H.R. 6201 Families First Coronavirus Response Act (FFCRA) totaled an estimated $14 billion
        </li>
        <li>
	  H.R. 748 Coronavirus Aid, Relief, and Economic Security (CARES) Act totaled an estimated $2.07 trillion in funding
        </li>
        <li>
	  H.R. 266 Paycheck Protection Program and Health Care Enhancement Act (PPP HCEA) totaled an estimated $483 billion
        </li>
        <li><strongg>Estimated Tax Relief:</strong> The total value of estimated deferred and reduced taxes provided by the FFCRA4 and CARES Act<sup>5</sup> are taken from the CBO’s analysis of each law. The tax relief value is the sum of the CBO’s estimated two year (FY 2020 through 2021) estimated tax revenue impact for each law</li>
        <li><strong>Total Estimated Lending and Utilization:</strong>The estimated value of lending is equal to the sum of the credit, direct and indirect loans made available with funding provided by the four supplemental appropriations</li>
        <li>Estimated total loan and loan guarantee values were calculated for each program using information provided by each agency. Loan and loan guarantees funded by the supplemental appropriations include: The Department of the Treasury’s Payroll Support Program for Pandemic Relief for Aviation Workers, Credit Assistance for Air Carriers and Businesses Critical to National Security,<sup>6</sup> and the Small Business Administration’s Economic Injury Disaster Loans (EIDL)<sup>7</sup> and Paycheck Protection Program (PPP),<sup>8</sup> as well as the total estimated credit made available through the Federal Reserve Emergency Lending facilities<sup>9</sup></li>
        <li>Total utilized lending was calculated using the most recent data on current reported loans and loan guarantees issued as of the publishing date provided by each agency: The Department of the Treasury’s Payroll Support Program for Pandemic Relief for Aviation Workers<sup>10</sup>, Credit Assistance for Air Carriers and Businesses Critical to National Security<sup>11</sup>, and the Small Business Administration’s Economic Injury Disaster Loans (EIDL)<sup>12</sup> and Paycheck Protection Program (PPP)<sup>13</sup>. Current utilization of Federal Reserve Emergency Lending facilities was provided by the Department of the Treasury. Data on loan guarantees issued for the USDA’s Rural Development Business and Industry CARES Act Program was not available and is therefore reported as zero reported lending utilized</li>
      </ul>
    )
  },{
    name: <>Calculating total spending:</>,
    sources: (
      <ul>
        <li>
          Data from the Governmentwide Treasury Account Symbol Adjusted Trial Balance System (GTAS) including data typically included in the SF-133 Report on Budget Execution and Budgetary Resources, which provides granular budgetary data for each Treasury Account Symbol (TAS) account, was used to identify and track spending of funds appropriated in the supplemental laws
          <ul>
            <li>
              After appropriation warrants are issued, agencies also report the value of funds appropriated by TAS in GTAS. In this analysis, we use the Total Budgetary Resources reported in GTAS which include total appropriations, transfers, and reimbursable funds available for each account. Total Budgetary Resources do not align exactly with the total value of appropriations warrants for each TAS due to inclusion of these additional funds. These funds are included to provide a more complete picture of the total budget for each account and how those funds are obligated and outlayed. Discrepancies in the totals across these two data sources can also be caused by time lags in reporting changes in appropriations in GTAS, or in recording and reconciling transfers among TAS
            </li>
          </ul>
        </li>
        <li>
          Supplemental spending is tracked using the Disaster Emergency Fund Code (DEFC) reported in the GTAS data. All agencies are required per Office of Management and Budget <a target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf">Memo M-20-21: Implementation Guidance for Supplemental Funding Provided in Response to the Coronavirus Disease 2019 (COVID-19)</a> to track spending related to each of the of the laws passed using the previously established DEFC attribute, with newly provided values that link each transaction to the specific funding legislation<sup>14</sup>
        </li>
        <li>
          GTAS data, using the reported DEFC and aggregating by TAS account, was used to calculate Total Budgetary Resources, new obligations and upwards adjustments, unobligated balance (end-of-year total), and gross outlays<sup>15</sup> of supplemental spending executed as of the close of the reporting period<sup>16</sup>
        </li>
        <li>
          The total values for each TAS account were merged with the account metadata obtained via the Central Accounting Reporting System (CARS). Spending was then aggregated to generate the total funding values reported by agency and federal account
        </li>
        <li>
          Agency totals were aggregated using TAS account data at the Allocation Transfer Agency (ATA) identifier. In cases where the ATA is null, the Agency Identifier (AID) is used, with a few exceptions. Agencies that use a shared AID were aggregated using the Financial Reporting Entity Code (FREC), and certain armed forces agencies were classified as Department of Defense following the logic used to classify agencies on USAspending.gov.<sup>17</sup>
        </li>
      </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                             )
    }];

                         const notes = [{
                           content: (
                             <>
                               <p>
                                 <sup>1</sup> An appropriation warrant is issued following the passage of a law reflecting the individual amounts appropriated by Congress, by appropriation symbol, on the books of the U. S. Treasury. These warrants provide agencies the authority to then obligate and outlay, or spend, funds. More information on the appropriations process can be found here: <a href="https://tfm.fiscal.treasury.gov/v1/p2/c200.html">https://tfm.fiscal.treasury.gov/v1/p2/c200.html</a>
                               </p>
                               <p>
                                 <sup>2</sup> <a target="_blank" href="https://www.whitehouse.gov/omb/supplemental-materials/">https://www.whitehouse.gov/omb/supplemental-materials/</a>
                               </p>
                               <p>
                                 <sup>3</sup> CBO report: <a target="_blank" href="https://www.cbo.gov/system/files/2020-06/56403-CBO-covid-legislation.pdf">https://www.cbo.gov/system/files/2020-06/56403-CBO-covid-legislation.pdf</a>
                               </p>
                               <p>
                                 <sup>4</sup> <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/HR6201.pdf">https://www.cbo.gov/system/files/2020-04/HR6201.pdf</a>
                               </p>
                               <p>
                                 <sup>5</sup> <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/hr748.pdf">https://www.cbo.gov/system/files/2020-04/hr748.pdf</a>
                               </p>
                               <p>
                                 <sup>6</sup> Estimate value of direct and indirect loans for these two Treasury programs was generated using the CBO’s analysis of the CARES Act: <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/hr748.pdf">https://www.cbo.gov/system/files/2020-04/hr748.pdf</a>
                               </p>
                               <p>
                                 <sup>7</sup> Estimated value of total potential EIDL direct loans estimated using the FY 2020 credit subsidy rate for the program <a target="_blank" href="https://www.govinfo.gov/content/pkg/BUDGET-2020-FCS/pdf/BUDGET-2020-FCS.pdf">https://www.govinfo.gov/content/pkg/BUDGET-2020-FCS/pdf/BUDGET-2020-FCS.pdf</a>
                               </p>
                               <p>
                                 <sup>8</sup> Total potential value of loan guarantees to be made available in the PPP program was provided by the <a target="_blank" href="https://www.sba.gov/document/report-paycheck-protection-program-report-through-july-17-2020">Small Business Administration</a>
                               </p>
                               <p>
                                 <sup>9</sup> See Federal Reserve statements: <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/monetary20200409a.htm">https://www.federalreserve.gov/newsevents/pressreleases/monetary20200409a.htm</a>,
                                 and term sheets for the Main Street Lending Program term sheet: <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200608a1.pdf">https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200608a1.pdf</a>, and Term Asset-Backed Securities Loan Facility:
                                 <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200512a1.pdf">https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200512a1.pdf</a>
                               </p>
                               <p>
                                 <sup>10</sup> <a target="_blank" href="https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/payroll-support-program-payments">https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/payroll-support-program-payments</a>
                               </p>
                               <p>
                                 <sup>11</sup> <a target="_blank" href="https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/loans-to-air-carriers-eligible-businesses-and-national-security-businesses">https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/loans-to-air-carriers-eligible-businesses-and-national-security-businesses</a>
                               </p>
                               <p>
                                 <sup>12</sup> <a target="_blank" href="https://www.sba.gov/document/report-covid-19-eidl-loans-report-07-15-20">https://www.sba.gov/document/report-covid-19-eidl-loans-report-07-15-20</a>
                               </p>
                               <p>
                                 <sup>13</sup> <a target="_blank" href="https://www.sba.gov/document/report-paycheck-protection-program-report-through-july-17-2020">https://www.sba.gov/document/report-paycheck-protection-program-report-through-july-17-2020</a>
                               </p>
                               <p>
                                 <sup>14</sup> OMB Guidance on reporting requirements and DEFC values provided for the four laws are provided in OMB M20-21: <a target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf">https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf</a>
                               </p>
                               <p>
                                 <sup>15</sup> Values were calculated according to the USSGL Supplement of the Treasury Financial Manual - Section V: Crosswalks to Standard External Reports for FY 2020 GTAS Reporting, SF 133: Report on Budget Execution and Budgetary Resources & Schedule P Budget Program and Financing Schedule. <a target="_blank" href="https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_1/sec5/sec5_sf133_schp_2020.xlsx">https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_1/sec5/sec5_sf133_schp_2020.xlsx</a>
                               </p>
                               <p>
                                 <sup>16</sup> GTAS data is collected monthly and agencies report data for all transactions occurring through the end of the prior month. The GTAS reporting schedule can be found here: <a target="_blank" href="https://fiscal.treasury.gov/files/gtas/fy-2020-reporting-window-schedule.pdf ">https://fiscal.treasury.gov/files/gtas/fy-2020-reporting-window-schedule.pdf</a>
                               </p>
                               <p>
                                 <sup>17</sup> Detailed instructions on how agencies should be classified is provided here: <a target="_blank" href="https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md">https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md.</a>
                                 The list of shared agencies identified by FREC can be found here: <a target="_blank" href="https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker">https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a>
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
