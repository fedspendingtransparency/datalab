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
                    Full text of each bill from the <a href='https://www.congress.gov/' target='_blank' rel='noopener noreferrer'>Library of Congress</a>
                </li>
                <li>
                    Appropriation warrants for H.R. 6074, H.R. 6201, H.R. 748
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
    }, {
        name: <>Budget Function Definitions:</>,
        sources: (
            <ul>
                <li>
                    Budget function definitions come from the Government Accountability Office’s <a href='https://www.gao.gov/assets/80/76911.pdf' target='_blank' rel='noopener noreferrer'>A Glossary of Terms Used in Federal Budget Process</a>
                </li>
            </ul>
        )
    }];

    const methodologies = [{
        name: <>Legislation values:</>,
        sources: (
            <ul>
                <li>
                    The value of the four supplemental emergency bills passed by Congress is approximately $2.4 trillion. This value reflects the total value of appropriation warrants made to agency's TAS accounts for each of the four laws passed.<sup>2</sup>
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
                    After appropriation warrants are issued, agencies also report the value of funds appropriated by TAS in GTAS, in this analysis we use the Total Budgetary Resources reported in GTAS which include total appropriations, transfers and reimbursable fund available for each account.
                    Total Budgetary Resources does not exactly align with the total value of appropriations warrants for each TAS due to inclusion of these additional funds, which are included to provide a more complete picture of the total budget for each account and how those funds are obligated and outlaid.
                    Discrepancies in the totals across these two data sources can also be caused by time lags in reporting changes in appropriations in GTAS or in recording and reconciling transfers among TAS, but are expected to be reconciled in the subsequent reporting period.
                </li>
                <li>
                    Emergency spending is tracked in the data reported in the extract of GTAS data using the Disaster Emergency Fund Code. All agencies are required per Office of Management and Budget
                    <a href='https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf' target='_blank' rel='noopener noreferrer'> Memo M-20-21: Implementation Guidance for Supplemental Funding Provided in Response to the Coronavirus Disease 2019 (COVID-19) </a>
                    to track spending related to each of the emergency bills passed using the previously established Disaster Emergency Fund Code (DEFC) attribute, with newly provided values that link each transaction to the specific funding legislation.<sup>3</sup> Data for this analysis, published May 28, 2020, includes data reported through the close of April 2020. GTAS data is used in order to track spending using the emergency spending DEFC, which is currently not available in the data provided by agencies to
                    <a href='https://www.usaspending.gov/#/' target='_blank' rel='noopener noreferrer'> USAspending.gov.</a> The DEFC will be added into <a href='https://www.usaspending.gov/#/' target='_blank' rel='noopener noreferrer'>USAspending.gov</a> to track agency data submitted starting in the July 2020 reporting period for agency data reported through June 2020.
                </li>
                <li>
                    GTAS data was used to calculate total budgetary resources; new obligations and upwards adjustments; unobligated balance (end-of-year total) and gross outlays<sup>4</sup> of emergency spending executed as of the close of the reporting period<sup>5</sup> (using the reported DEFC) and aggregated by TAS account. 
                </li>
                <li>
                    The total values for each TAS account were merged with the account metadata obtained via the Central Accounting Reporting System (CARS), which allows for TAS account totals to be aggregated at the Federal Account (also referred to as ‘spending accounts’) and agency levels.
                </li>
                <li>
                    Agency totals were aggregated using TAS account data at the agency-level using the Agency Identifier (AID), with a few exceptions. Agencies that use a shared AID were aggregated using the Financial Reporting Entity Code (FREC), and certain armed forces agencies were classified as Department of Defense following the logic used in classifying agencies in USAspending.gov.<sup>6</sup>
                </li>
                <li>
                    Spending was also aggregated by budget function using the TAS account and CARS data to generate the overall budget function totals and percent of total funding values reported by budget function.
                </li>
            </ul>
      )
    }];

    const notes = [{
        content: (
            <>
                <p>
                    <sup>2</sup> The value of spending expected for H.R. 266 was estimated by evaluating both the content of the law and referencing the CBO’s estimates of total budget authority.
                </p>
                <p>
                    <sup>3</sup> OMB Guidance on reporting requirements and DEFC values provided for the four bills are provided in <a href='https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf' target='_blank' rel='noopener noreferrer'>OMB M20-21</a>
                </p>
                <p>
                    <sup>4</sup> Values were calculating according to the <a href='https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_2/sec5/sec5_sf133_schp_2020.xlsx' target='_blank' rel='noopener noreferrer'>USSGL Supplement of the Treasury Financial Manual - Section V: Crosswalks to Standard External Reports for FY 2020 GTAS Reporting, SF 133: Report on Budget Execution and Budgetary Resources & Schedule P Budget Program and Financing Schedule.</a>
                </p>
                <p>
                    <sup>5</sup> GTAS data is collected monthly, each month’s agencies report data for all transactions occurring through the end of the prior month. Data for this analysis published May 28, 2020 includes data reported through the close of April 2020.
                </p>
                <p>
                    <sup>6</sup> Detailed instructions on how agencies should be classified is provided here: <a href='https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker' target='_blank' rel='noopener noreferrer'>https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a>
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
}
 
export default C19HWTCA;