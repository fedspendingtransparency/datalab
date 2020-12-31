import React from 'react';
import './investment.scss';
import contractsSvg from '../../../images/colleges-and-universities/contractsv2.svg';
import aidSvg from '../../../images/colleges-and-universities/aidv2.svg';
import grantsSvg from '../../../images/colleges-and-universities/grantsv2.svg';

class InvestmentOverview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const totalContracts = 10467392637;
		const totalGrants = 40819465556;
		const totalStudentAid = 98262303519;

		const totalInvestment = totalContracts + totalGrants + totalStudentAid;
		const contractSpendingPercent = parseInt(((totalContracts / totalInvestment) * 100));
		const grantsSpendingPercent = parseInt(((totalGrants / totalInvestment) * 100));
		const studentAidSpendingPercent = parseInt(((totalStudentAid / totalInvestment) * 100));

		const contractsStyle = {
			width: `${contractSpendingPercent}%`,
			height: '59px',
			backgroundColor: '#925003',
			marginRight: '3px',
		};

		const grantsStyle = {
			width: `${grantsSpendingPercent}%`,
			height: '59px',
			backgroundColor: '#004C40',
			marginRight: '3px',
		};

		const aidStyle = {
			width: `${studentAidSpendingPercent}%`,
			height: '59px',
			backgroundColor: '#0A2F5A',
			marginRight: '3px',
		};

		const texthelperAid = {
			color: '#FFFEFD',
			fontSize: '1.75rem',
			lineHeight: '50px',
			margin: '0',
			paddingLeft: '.25rem',
			paddingTop: '.25rem',
			textAlign: 'left',
		};

		const texthelperGrants = {
			color: '#FFFEFD',
			fontSize: '1.75rem',
			lineHeight: '50px',
			margin: '0',
			paddingLeft: '.15rem',
			paddingTop: '.5rem',
			textAlign: 'left',
		};

		const texthelperContracts = {
			color: '#FFFEFD',
			fontSize: '1.75rem',
			lineHeight: '50px',
			margin: '0',
			paddingLeft: '.25rem',
			paddingTop: '.5rem',
			textAlign: 'left',
		};


		return (
			<div id="investment-overview__viz">

				<div id="title-section">
					<p id="chart-title-aid">Student Aid</p>
					<p id="chart-title-grants">Grants</p>
					<p id="chart-title-contracts">Contracts</p>
				</div>

				<div id="investment-chart" aria-label="Bar chart of the $1.068 trillion in higher education spending. Main categories are: Student Aid ($98B), Grants ($41B), and Contracts ($10B).">
					<div id="studentAid--mobile-title">Student Aid</div>
					<div id="studentAid-bar" style={aidStyle}><p id="bar-text--aid">$98B</p></div>

					<div id="grants--mobile-title">Grants</div>
					<div id="grants-bar" style={grantsStyle}><p id="bar-text--grants">$41B</p></div>

					<div id="contracts--mobile-title">Contracts</div>
					<div id="contracts-bar" style={contractsStyle}><p id="bar-text--contracts">$10B</p></div>
				</div>

				<div id="investment-subtext">
					<div className="aid-subsection">
						<p id="aid-heading-aid">
							Student Aid
						</p>
						<div className="aid-image">
							<img src={aidSvg} role="presentation" />
						</div>
						<p id="aid-description">
							Federal student aid is financial assistance provided through grants, scholarships, work-study, and loans to students for their educational expenses. This can include costs such as tuition, housing, transportation, books, and supplies. Loans comprise approximately 73% of the total aid to students, making them the largest source of assistance from the federal government.
							Although student aid includes the $11.6 billion investment made through the
							{' '}
							<a className="cu-link" href="https://www.va.gov/education/about-gi-bill-benefits/" target="_blank">G.I. Bill of Rights</a>
							, it is not included in this analysis because we were not able to make a direct connection between that investment and the benefits given to an institution.
						</p>
					</div>
					<div className="aid-subsection">
						<p id="aid-heading-grants">
							Grants
						</p>
						<div className="aid-image">
							<img src={grantsSvg} role="presentation" />
						</div>
						<p id="aid-description">
							A federal grant is an agreement through which a federal agency provides financial assistance to an individual or organization used for projects and expenses that contribute to public good. For example, in 2018, the Department of Commerce funded the University of Maryland, Baltimore County’s (UMBC) research for measuring and improving the robustness of deep learning algorithms.
						</p>
					</div>
					<div className="aid-subsection">
						<p id="aid-heading-contracts">
							Contracts
						</p>
						<div className="aid-image">
							<img src={contractsSvg} role="presentation" />
						</div>
						<p id="aid-description">
							A federal contract is an agreement in which the federal government purchases a good or service from an organization or individual for government use.

							For example, in 2018 the National Aeronautics and Space Administration used a federal contract to pay the California Institute of Technology to operate the Jet Propulsion Laboratory. This laboratory is a center for robotic exploration of the solar system that carries out essential research and tasks like developing a self-directed spacecraft.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default InvestmentOverview;
