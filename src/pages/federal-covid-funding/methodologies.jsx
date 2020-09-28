import React from 'react';
import FootnoteAnchor from '../../components/footnotes/footnote-anchor';
import HWCTA from '../../components/hwcta/hwcta';
import CovidCopy from 'src/page-sections/federal-covid-funding/_data/covidcopy_yaml_2020-09-22.yml';

const C19HWTCA = ({ location }) => {
  const title = 'The Federal Response to COVID-19';

  const dataSources = [{
    name: <>Value of supplemental appropriations:</>,
    sources: (
      <ul>
        <li>
          Appropriation warrants<a href="#fn1" className="footnoteref"><FootnoteAnchor footnoteId="fr1" />1</a> for H.R. 6074, H.R. 6201, H.R. 748, and H.R. 266
        </li>
        <li>
          Full text of each law from the <a href='https://www.congress.gov/' target='_blank' rel='noopener noreferrer'>Library of Congress</a>
        </li>
        <li>
          Estimated tax revenue impact for each law from the  <a href='https://www.cbo.gov/' target='_blank' rel='noopener noreferrer'>Congressional Budget Office (CBO)</a>
        </li>
        <li>
          Agency program statements, CBO analysis for each law, the Federal Credit Supplements to the President’s Fiscal Year (FY) 2021 budget<a href="#fn2" className="footnoteref"><FootnoteAnchor footnoteId="fr2" />2</a> and funding notices published to the federal register were used to estimate the potential credit, direct loans, and loan guarantees
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
          Summaries are based off of CBO reporting and a qualitative analysis of funding by federal account name.<a href="#fn3" className="footnoteref"><FootnoteAnchor footnoteId="fr3" />3</a> All values were approximated. The summaries include funding for agencies, but do not include additional provisions in the legislation that impact financial relief, such as taxes or mandates that change program requirements or extensions for current funding
        </li>
      </ul>
    )
  }];

  const methodologies = [{
    name: <>Legislation values:</>,
    sources: (
      <ul>
        <li>
          <strong>Agency Funding To-Date:</strong> The value of the four supplemental laws passed by Congress is approximately ${CovidCopy.totalbudgetresources} trillion. This value reflects the total value of appropriation warrants made to agencies’ TAS accounts to date for each of the four laws passed
        </li>
        <ul>
          <li>
            Appropriation warrants reflect Congressional action to fund programs and provide each agency the amount of money they are authorized to withdraw from the General Fund of the U.S. Government and period of availability of those funds. The total estimated value of the four laws only includes current appropriation warrants issued, which could change. The value of each law could change because there are parts of the laws that do not state explicit program costs or limits on the total funding that can be used to meet the law’s requirements. This could also result in additional appropriations being issued to fulfill the law’s intent if the original appropriation is exhausted
          </li>
          <li>
            H.R. 6074 Coronavirus Preparedness and Response Supplemental Appropriations Act (CPRSAA) totaled an estimated ${CovidCopy.law1} billion
          </li>
          <li>
            H.R. 6201 Families First Coronavirus Response Act (FFCRA) totaled an estimated ${CovidCopy.law2} billion
          </li>
          <li>
            H.R. 748 Coronavirus Aid, Relief, and Economic Security (CARES) Act totaled an estimated ${CovidCopy.law3} trillion in funding
          </li>
          <li>
            H.R. 266 Paycheck Protection Program and Health Care Enhancement Act (PPP HCEA) totaled an estimated ${CovidCopy.law4} billion
          </li>
        </ul>
        <li><strong>Estimated Tax Relief:</strong> The total value of estimated deferred and reduced taxes provided by the FFCRA<a href="#fn4" className="footnoteref"><FootnoteAnchor footnoteId="fr4" />4</a> and CARES Act<a href="#fn5" className="footnoteref"><FootnoteAnchor footnoteId="fr5" />5</a> are taken from the CBO’s analysis of each law. The tax relief value is the sum of the CBO’s estimated two year (FY 2020 through 2021) estimated tax revenue impact for each law</li>
        <li><strong>Total Estimated Lending and Utilization:</strong>&nbsp;The estimated value of lending is equal to the sum of the credit, direct, and indirect loans made available with funding provided by the four supplemental appropriations</li>
        <ul>
          <li>Estimated total loan and loan guarantee values were calculated for each program using information provided by each agency. Loan and loan guarantees funded by the supplemental appropriations include: The Department of the Treasury’s Payroll Support Program for Pandemic Relief for Aviation Workers, Credit Assistance for Air Carriers and Businesses Critical to National Security,<a href="#fn6" className="footnoteref"><FootnoteAnchor footnoteId="fr6" />6</a> and the Small Business Administration’s Economic Injury Disaster Loans (EIDL),<a href="#fn7" className="footnoteref"><FootnoteAnchor footnoteId="fr7" />7</a> and Paycheck Protection Program (PPP),<a href="#fn8" className="footnoteref"><FootnoteAnchor footnoteId="fr8" />8</a> as well as the total estimated credit made available through the Federal Reserve Emergency Lending facilities<a href="#fn9" className="footnoteref"><FootnoteAnchor footnoteId="fr9" />9</a></li>
          <li>At the time of publishing data on the Defense Production Act Loan Program is not yet available and therefore the program is not included in the calculation of Total Estimate Lending made available by the four laws. nor are any loans for this program included in the utilized lending total</li>
          <li>Total utilized lending was calculated using the most recent data on reported loans and loan guarantees for the reporting period provided by each agency: The Department of the Treasury’s Payroll Support Program for Pandemic Relief for Aviation Workers<a href="#fn10" className="footnoteref"><FootnoteAnchor footnoteId="fr10" />10</a>, Credit Assistance for Air Carriers and Businesses Critical to National Security<a href="#fn11" className="footnoteref"><FootnoteAnchor footnoteId="fr11" />11</a>, the Small Business Administration’s Economic Injury Disaster Loans (EIDL)<a href="#fn12" className="footnoteref"><FootnoteAnchor footnoteId="fr12" />12</a> and Paycheck Protection Program (PPP)<a href="#fn13" className="footnoteref"><FootnoteAnchor footnoteId="fr13" />13</a>, and the Federal Reserve Emergency Lending facilities<a href="#fn14" className="footnoteref"><FootnoteAnchor footnoteId="fr14" />14</a>. Total value of loan guarantees issued for the USDA’s Rural Development Business and Industry CARES Act Program<a href="#fn15" className="footnoteref"><FootnoteAnchor footnoteId="fr15" />15</a> reflect data reported as of the close of the two months prior to the publishing date due to the reporting timeline</li>
        </ul>
      </ul>
    )
  }, {
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
          Supplemental spending is tracked using the Disaster Emergency Fund Code (DEFC) reported in the GTAS data. All agencies are required per Office of Management and Budget <a target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf">Memo M-20-21: Implementation Guidance for Supplemental Funding Provided in Response to the Coronavirus Disease 2019 (COVID-19)</a> to track spending related to each of the of the laws passed using the previously established DEFC attribute, with newly provided values that link each transaction to the specific funding legislation<a href="#fn16" className="footnoteref"><FootnoteAnchor footnoteId="fr16" />16</a>
        </li>
        <li>
          GTAS data, using the reported DEFC and aggregating by TAS account, was used to calculate Total Budgetary Resources, new obligations and upwards adjustments, unobligated balance (end-of-year total), and gross outlays<a href="#fn17" className="footnoteref"><FootnoteAnchor footnoteId="fr17" />17</a> of supplemental spending executed as of the close of the reporting period<a href="#fn18" className="footnoteref"><FootnoteAnchor footnoteId="fr18" />18</a>
        </li>
        <li>
          The total values for each TAS account were merged with the account metadata obtained via the Central Accounting Reporting System (CARS). Spending was then aggregated to generate the total funding values reported by agency and federal account
        </li>
        <li>
          Agency totals were aggregated using TAS account data at the Allocation Transfer Agency (ATA) identifier. In cases where the ATA is null, the Agency Identifier (AID) is used, with a few exceptions. Agencies that use a shared AID were aggregated using the Financial Reporting Entity Code (FREC), and certain armed forces agencies were classified as Department of Defense following the logic used to classify agencies on USAspending.gov<a href="#fn19" className="footnoteref"><FootnoteAnchor footnoteId="fr19" />19</a>
        </li>
      </ul>
    )
  }];

  const notes = [{
    content: (
      <>
        <p>
          <FootnoteAnchor footnoteId="fn1" />
          <sup><a href="#fr1">1</a></sup> An appropriation warrant is issued following the passage of a law reflecting the individual amounts appropriated by Congress, by appropriation symbol, on the books of the U. S. Treasury. These warrants provide agencies the authority to then obligate and outlay, or spend funds. More information on the appropriations process can be found here: <a target="_blank" href="https://tfm.fiscal.treasury.gov/v1/p2/c200.html">https://tfm.fiscal.treasury.gov/v1/p2/c200.html</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn2" />
          <sup><a href="#fr2">2</a></sup> <a target="_blank" href="https://www.whitehouse.gov/omb/supplemental-materials/">https://www.whitehouse.gov/omb/supplemental-materials/</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn3" />
          <sup><a href="#fr3">3</a></sup> CBO report: <a target="_blank" href="https://www.cbo.gov/system/files/2020-06/56403-CBO-covid-legislation.pdf">https://www.cbo.gov/system/files/2020-06/56403-CBO-covid-legislation.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn4" />
          <sup><a href="#fr4">4</a></sup> <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/HR6201.pdf">https://www.cbo.gov/system/files/2020-04/HR6201.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn5" />
          <sup><a href="#fr5">5</a></sup> <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/hr748.pdf">https://www.cbo.gov/system/files/2020-04/hr748.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn6" />
          <sup><a href="#fr6">6</a></sup> Estimate value of direct and indirect loans for these two Treasury programs was generated using the CBO’s analysis of the CARES Act: <a target="_blank" href="https://www.cbo.gov/system/files/2020-04/hr748.pdf">https://www.cbo.gov/system/files/2020-04/hr748.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn7" />
          <sup><a href="#fr7">7</a></sup> Estimated value of total potential EIDL direct loans estimated using the FY 2020 credit subsidy rate for the program <a target="_blank" href="https://www.govinfo.gov/content/pkg/BUDGET-2020-FCS/pdf/BUDGET-2020-FCS.pdf">https://www.govinfo.gov/content/pkg/BUDGET-2020-FCS/pdf/BUDGET-2020-FCS.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn8" />
          <sup><a href="#fr8">8</a></sup> Total potential value of loan guarantees to be made available in the PPP program was provided by the Small Business Administration.
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn9" />
          <sup><a href="#fr9">9</a></sup> See Federal Reserve statements: <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/monetary20200409a.htm">https://www.federalreserve.gov/newsevents/pressreleases/monetary20200409a.htm</a>,
          and term sheets for the Main Street Lending Program term sheet: <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200608a1.pdf">https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200608a1.pdf</a> and Term Asset-Backed Securities Loan Facility:
          <a target="_blank" href="https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200512a1.pdf">https://www.federalreserve.gov/newsevents/pressreleases/files/monetary20200512a1.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn10" />
          <sup><a href="#fr10">10</a></sup> <a target="_blank" href="https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/payroll-support-program-payments">https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/payroll-support-program-payments</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn11" />
          <sup><a href="#fr11">11</a></sup> <a target="_blank" href="https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/loans-to-air-carriers-eligible-businesses-and-national-security-businesses">https://home.treasury.gov/policy-issues/cares/preserving-jobs-for-american-industry/loans-to-air-carriers-eligible-businesses-and-national-security-businesses</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn12" />
          <sup><a href="#fr12">12</a></sup> <a target="_blank" href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/economic-injury-disaster-loans">https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/economic-injury-disaster-loans</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn13" />
          <sup><a href="#fr13">13</a></sup> <a target="_blank" href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/paycheck-protection-program">https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/paycheck-protection-program</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn14" />
          <sup><a href="#fr14">14</a></sup> <a target="_blank" href="https://www.federalreserve.gov/publications/reports-to-congress-in-response-to-covid-19.htm">https://www.federalreserve.gov/publications/reports-to-congress-in-response-to-covid-19.htm</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn15" />
          <sup><a href="#fr15">15</a></sup>Data on loans disbursed by USDA’s Rural Development Business and Industry CARES Act Program can be accessed using USAspending’s COVID-19 Advanced Search Filter: <a target="_blank" href="https://www.usaspending.gov/#/search/5d9262dee1d2962a1760f28b16945333">https://www.usaspending.gov/#/search/5d9262dee1d2962a1760f28b16945333</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn16" />
          <sup><a href="#fr16">16</a></sup> OMB Guidance on reporting requirements and DEFC values provided for the four laws are provided in OMB M20-21: <a target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf">https://www.whitehouse.gov/wp-content/uploads/2020/04/Implementation-Guidance-for-Supplemental-Funding-Provided-in-Response.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn17" />
          <sup><a href="#fr17">17</a></sup> Values were calculated according to the USSGL Supplement of the Treasury Financial Manual - Section V: Crosswalks to Standard External Reports for FY 2020 GTAS Reporting, SF 133: Report on Budget Execution and Budgetary Resources & Schedule P Budget Program and Financing Schedule. <a target="_blank" href="https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_1/sec5/sec5_sf133_schp_2020.xlsx">https://tfm.fiscal.treasury.gov/content/dam/tfm/v1/supplements/ussgl/ussgl_part_1/sec5/sec5_sf133_schp_2020.xlsx</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn18" />
          <sup><a href="#fr18">18</a></sup> GTAS data is collected monthly and agencies report data for all transactions occurring through the end of the prior month. The GTAS reporting schedule can be found here: <a target="_blank" href="https://fiscal.treasury.gov/files/gtas/fy-2020-reporting-window-schedule.pdf ">https://fiscal.treasury.gov/files/gtas/fy-2020-reporting-window-schedule.pdf</a>
        </p>
        <p>
          <FootnoteAnchor footnoteId="fn19" />
          <sup><a href="#fr19">19</a></sup> Detailed instructions on how agencies should be classified is provided here: <a target="_blank" href="https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md">https://github.com/fedspendingtransparency/data-act-broker-backend/blob/development/FileLogic.md.</a>
          The list of shared agencies identified by FREC can be found here: <a target="_blank" href="https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker">https://github.com/fedspendingtransparency/data-act-broker-backend/tree/development/dataactbroker</a>
        </p>
        <p>For a complete download of the data, download this file: <a href={`/data/federal-covid-spending/tracking/${CovidCopy.dsm_download}`}>COVID-19 Response Data</a>
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
