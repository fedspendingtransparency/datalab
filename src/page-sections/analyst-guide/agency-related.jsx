import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
	title: 'AGENCY-RELATED QUESTIONS',
	introSentence: <></>,
	data: [
		{
			accordionTitles: [
				<>
					How can I track funds from a funding agency to a different awarding agency
					and finally to the recipient?
				</>,
			],
			accordionContent: [
				<p>
					Contract and financial assistance data both include fields for funding and
					awarding agencies. This information is relevant when the funding agency is
					different from the awarding agency. In certain cases, one federal agency
					may provide money to fund a contract or a grant, which is administered by
					another agency.
				</p>,
				<p>
					<span className={styles.bold}>Note</span>: Some contracts have multiple
					funding agencies, if the activities provided are of interest to multiple
					agencies, but it can only have one awarding agency. Contract data only has
					the capacity to list one funding agency; if a contract is funded by
					multiple agencies, the document will list the agency that provides the most
					funding.
				</p>,
				<p>
					While contract and grant data does not reflect multiple funding sources,
					this information can be found through the financial side of the data, which
					shows all of the funding agencies (not just the predominant one) per
					transaction. You can use award identifiers (the FAIN for grants and the
					PIID for contracts) to link details in the award world (recipient
					information, awarding agency, etc.) to the financial side, where you can
					find more information about the funding agency.
				</p>,
			],
		},
		{
			accordionTitles: [
				<>
					What is the difference between an awarding agency and a funding agency?
				</>,
			],
			accordionContent: [
				<p>
					The awarding agency is the agency that creates and administers a contract,
					while the funding pays for the underlying goods and services provided. In
					most cases, the awarding and funding agency are the same. The division of
					funding and awarding agencies benefits many smaller agencies, who may not
					have the staff available to execute contracts.
				</p>,
			],
		},
		{
			accordionTitles: [
				<>Where is the full list of sub-tier agencies?</>,
				<>How are sub-tier agencies managed over time?</>,
			],
			accordionContent: [
				<p>
					Sub-tier agencies are the bureaus or divisions of larger federal agencies.
					For example, the IRS is a sub-tier component of Treasury, as the FBI is for
					the Department of Justice. In June 2016, the Office of Management and
					Budget (OMB) posted an authoritative list of sub-tier agencies on MAX.gov;
					USAspending.gov made a copy of this list, adding historical sub-tier codes
					and names to ensure backwards compatibility and to allow the data to
					display properly on USAspending.gov. Recently, GSA launched a tool called{' '}
					<a
						href="https://beta.sam.gov/search?keywords=&sort=-modifiedDate&index=fh&is_active=true&page=1"
						target="_blank"
						rel="noopener noreferrer">
						Federal Hierarchy on beta.sam.gov
					</a>
					, which includes a list of sub-tier agencies.
				</p>,
				<p>
					Federal agencies will be responsible for using this tool to manage their
					agency structure (including SubTier and Office). This tool will provide a
					comprehensive and up-to-date list of all Sub-Tiers and Offices, which
					USAspending.gov will access via API or daily data download.
				</p>,
			],
		},
		{
			accordionTitles: [
				<>Help! Why are there so many agency fields?</>,
				<>Which one do I use?</>,
			],
			accordionContent: [
				<p>
					Different fields are available for contracts and other types for financial
					assistance. To find what you’re looking for, it’s important to note the
					distinction between <span className={styles.bold}>funding agencies</span>{' '}
					and <span className={styles.bold}>awarding agencies</span>. Funding
					agencies are those that actually provide funding for awards, while awarding
					agencies are those that administer the awards; in most cases, the funding
					agency and the awarding agency are the same entity.
				</p>,
				<p>
					There are additional layers of hierarchy within funding and awarding
					agencies, which are represented by different organizational identifiers.
					These additional identifiers may or may not be completed for a given
					record, depending on the record type. They include the following:
				</p>,
				<>
					<ul>
						<li>
							Awarding Agency
							<ul>
								<li>
									Awarding sub-tier agency
									<ul>
										<li>Awarding office</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<ul>
						<li>
							Funding Agency
							<ul>
								<li>
									Funding sub-tier agency
									<ul>
										<li>Funding office</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</>,
				<p>
					In summary, if you’re interested in learning who funded various awards,
					refer to funding agency fields. If you want to know who’s managing those
					awards, refer to awarding agency fields.
				</p>,
			],
		},
	],
};
