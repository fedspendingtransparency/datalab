import React from 'react';
import PropTypes from 'prop-types';
import HWCTA from '../../components/hwcta/hwcta';

export default class RDHWCTA extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		location: PropTypes.object.isRequired,
	};

	title = 'Research & Development in Contract Spending';
	methodologies = [
		{
			content: (
				<>
					<p>
						This analysis was conducted using agency contract award data for the most
						recently completed fiscal year, which agencies report to{' '}
						<a
							href="https://www.usaspending.gov/#/"
							rel="noreferrer noopener"
							target="_blank">
							USAspending.gov
						</a>
						. Each reported contract includes information about the agency and
						sub-agency that awarded the contract, the amount obligated by the
						contract, and a Product and Service Code (PSC) that indicates the goods or
						services delivered as a result of the contract.
					</p>
					<p>
						R&D assistance funding such as grants, loans, and scholarships were
						excluded from sections one, two, and three of our analysis because, unlike
						PSCs, they are tracked using the Catalog of Federal Domestic Assistance
						(CFDA) codes. Since one CFDA listing can be used for a range of purposes,
						it is difficult to identify and verify funding devoted to R&D within a
						given CFDA.
					</p>
					<p>
						Data used throughout this analysis includes contract transactions that
						were classified as Research and Development (R&D) awards using the{' '}
						<a
							href="https://www.acquisition.gov/PSC_Manual"
							rel="noreferrer noopener"
							target="_blank">
							General Services Administration’s (GSA) PSC Manual
						</a>{' '}
						for all CFO Act agencies. We excluded contract funding designated with PSC
						codes that ended in 5 and 7, which represent Operational System
						Development (5) and Commercialization (7), since these codes fall outside
						of the Office of Management and Budget (OMB) definitions of R&D (see{' '}
						<a
							href="https://www.whitehouse.gov/wp-content/uploads/2018/06/s84.pdf"
							rel="noreferrer noopener"
							target="_blank">
							OMB Circular A-11, Schedule C, Section 84.2(c)
						</a>
						). As such, we refer to R&D contract funding as limited to this group of
						contract transactions throughout this analysis. The COVID-19 Funding
						versions of each visualization were generated using the same subset of
						R&D, limiting the contract transactions included to those funded using
						funding specifically appropriated to address the COVID-19 pandemic.
						Contract transactions funded by COVID-19 appropriations can be tracked
						using the Disaster Emergency Fund Code (DEFC).
					</p>
					<p>
						To create the R&D as a Portion of Total Federal Contract Funding by Agency
						graph, we looked at total contract funding issued by the 24{' '}
						<a
							href="https://cfo.gov/about/"
							rel="noreferrer noopener"
							target="_blank">
							CFO Act agencies
						</a>{' '}
						in the most recently completed fiscal year and calculated the percentage
						of contract funding with appropriate R&D PSCs. The COVID-19 R&D Contracts
						visualization calculates the total value of the COVID-19 funded R&D
						contract transactions as a percentage of total R&D contract funding for
						each agency.
					</p>
					<p>
						The visualization of Categories of R&D Contract Funding grouped R&D
						contract funding into the 20 PSC sub-categories within the larger R&D PSC
						group, as reflected in the GSA’s PSC Manual. The categories include all
						PSCs used in the most recent fiscal year including codes that were retired
						or superseded in the October 2020 version of the manual but are still in
						use for contracts that were issued prior to the release of the revised PSC
						manual. All new contracts will be limited to using the updated PSCs.
					</p>
				</>
			),
		},
	];

	notes = [
		{
			content: (
				<>
					<p>
						Definitions for each of the types of R&D, including R&D Plant, can be
						found in the{' '}
						<a
							href="https://www.nsf.gov/statistics/fedfunds/glossary/def.htm"
							rel="noreferrer noopener"
							target="_blank">
							Federal Funds Survey Glossary
						</a>
						.
					</p>
					<p>
						The data reflects federal obligations through the end of Fiscal Year 2020.
					</p>
					<p>
						Please note that{' '}
						<a
							href="https://www.usaspending.gov/#/"
							rel="noreferrer noopener"
							target="_blank">
							USAspending.gov
						</a>{' '}
						data is available to the public.
					</p>
				</>
			),
		},
	];

	render = () => (
		<HWCTA
			location={this.props.location}
			title={this.title}
			methodologies={this.methodologies}
			notes={this.notes}
		/>
	);
}
