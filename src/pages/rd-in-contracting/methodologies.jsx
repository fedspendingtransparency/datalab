import React from 'react';
import PropTypes from 'prop-types';
import HWCTA from '../../components/hwcta/hwcta';

export default class RDHWCTA extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  title = 'Research & Development in Contract Spending';
  methodologies = [{
    content: <>
      <p>We conducted this analysis using agency contract award data for Fiscal Year 2019, which agencies report to <a href='https://www.usaspending.gov/#/' rel='noreferrer noopener' target='_blank'>USAspending.gov</a>. Each reported contract includes information about the agency and sub-agency that awarded the contract, the amount obligated by the contract, and a Product and Service Code (PSC) that indicates the goods or services delivered as a result of the contract.</p>
      <p>We excluded research and development (R&D) assistance funding such as grants, loans and scholarships in the first two sections of our analysis because, unlike PSCs, they are tracked using the Catalog of Federal Domestic Assistance (CFDA) codes. Since one CFDA listing can be used for a range of purposes, it is difficult to identify and verify funding devoted to R&D within a given CFDA.</p>
      <p>For the category analysis, we classified R&D awards using the <a href='https://www.acquisition.gov/PSC_Manual' rel='noreferrer noopener' target='_blank'>General Services Administration’s PSC Manual</a>. We excluded contract spending designated with PSC codes that ended in 5 and 7, which represent Operational System Development (5) and Commercialization (7), since these codes fall outside of the National Science Foundation’s definitions of R&D.</p>
      <p>Further, in our review of PSC codes we determined that basic, applied, and development phases were often used interchangeably with PSC sub codes and were applied inconsistently to awards. Due to these challenges with PSC accuracy and completeness, we’ve cited examples of these phases of research only in cases where we could independently verify the nature of the R&D work being performed.</p>
      <p>To create the R&D as a Portion of Total Federal Contract Spending by Agency graph, we looked at the spending of the 24 <a href='https://cfo.gov/about/' rel='noreferrer noopener' target='_blank'>Chief Financial Officers Act agencies</a> and calculated the percentage of contract spending with appropriate R&D PSC codes of contract spending by each agency in FY 2019.</p>

      <p>For the visualization of Categories of R&D Contract Spending, we used the same data pull from the first visualization and grouped spending into 20 categories using the PSC manual. The categories are:</p>
      <ul>
        <li>AGRICULTURE R&D (AA)</li>
        <li>COMMUNITY SERVICE R&D (AB)</li>
        <li>DEFENSE SYSTEMS R&D (AD)</li>
        <li>DEFENSE (OTHER) R&D (AC)</li>
        <li>ECONOMIC GROWTH & PRODUCTIVITY R&D (AE)</li>
        <li>EDUCATION R&D (AF)</li>
        <li>ENERGY R&D (AG)</li>
        <li>ENVIRONMENTAL PROTECTION R&D (AH)</li>
        <li>GEN. SCIENCE & TECHNOLOGY R&D (AJ)</li>
        <li>HOUSING R&D (AK)</li>
        <li>INCOME SECURITY R&D (AL)</li>
        <li>INTERNATIONAL AFFAIRS & COOPERATION R&D (AM)</li>
        <li>MEDICAL R&D (AN)</li>
        <li>MINING R&D (AV)</li>
        <li>OTHER R&D (AZ)</li>
        <li>NATURAL RESOURCES R&D (AP)</li>
        <li>SOCIAL SERVICES R&D (AQ)</li>
        <li>SPACE R&D (AR)</li>
        <li>TRANSPORTATION (MODAL) R&D (AS)</li>
        <li>TRANSPORTATION (OTHER) R&D (AT)</li>
      </ul>
      <p>The source data for the third visualization on Federal R&D obligations for 2009-2019 is from the National Center for Science and Engineering Statistics’ (NCSES) Survey of Federal Funds for Research and Development.  The survey data from NCSES is collected during an annual census of federal agencies. It is noted that the source for this visualization is different than the rest of the analysis to be able to show the larger trends in R&D funding that includes assistance funding.</p>
    </>
  }];

  notes = [{
    content: <>
      <p>Definitions for each of the types of R&D, including R&D Plant, can be found in the <a href='https://www.nsf.gov/statistics/fedfunds/glossary/def.htm' rel='noreferrer noopener' target='_blank'>Federal Funds Survey Glossary</a>.</p>
      <p>The data reflects federal obligations through the end of Fiscal Year 2019.</p>
      <p>Please note that <a href='https://www.usaspending.gov/#/' rel='noreferrer noopener' target='_blank'>USAspending.gov</a> data is available to the public.</p>
    </>
  }];

  render = () => <HWCTA location={this.props.location} title={this.title} methodologies={this.methodologies} notes={this.notes} />
}
